import { supabase } from './supabase';

export const storeLead = async (data: {
  name: string;
  email: string;
  phone: string;
  education: string;
  course: string;
  city?: string;
  state?: string;
  ip_address?: string;
  ip_state?: string;
  ip_postal?: string;
  ip_city?: string;
  fbclid?: string;
  gclid?: string;
  ttclid?: string;
  msclkid?: string;
  campaign_id?: string;
  traffic_source?: string;
  referrer?: string;
  full_url?: string;
}) => {
  try {
    // console.group('💾 Supabase Lead Storage');
    // console.info('🚀 Starting lead storage process');

    console.debug('📝 Lead Data:', {
      basicInfo: {
        name: data.name,
        email: data.email,
        phone: data.phone
      },
      locationInfo: {
        city: data.city,
        state: data.state,
        ipAddress: data.ip_address
      }
    });

    const { data: result, error } = await supabase
      .from('leads')
      .insert([{
        ...data,
        user_agent: navigator.userAgent,
        browser_language: navigator.language,
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        device_type: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? 'mobile' : 'desktop'
      }])
      .select()
      .single();

    if (error) throw error;

    // console.info('✅ Lead stored successfully with ID:', result.id);
    console.groupEnd();
    return result;
  } catch (error) {
    console.error('❌ Error storing lead:', error);
    console.debug('Error Context:', {
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      errorName: error instanceof Error ? error.name : 'Unknown error type'
    });
    console.groupEnd();
    throw error;
  }
};
