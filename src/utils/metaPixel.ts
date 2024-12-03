// Meta Conversion API endpoint
const META_CONVERSION_API_URL = 'https://graph.facebook.com/v17.0';

interface ConversionAPIPayload {
  data: Array<{
    event_name: string;
    event_time: number;
    user_data: {
      em?: string[];
      ph?: string[];
      fn?: string[];
      ct?: string[];
      st?: string[];
      zp?: string[];
      external_id?: string[];
    };
    custom_data?: {
      course_name?: string;
      education_level?: string;
      click_id?: string;
      gclid?: string;
      ttclid?: string;
      msclkid?: string;
      campaign_id?: string;
      traffic_source?: string;
      ip_address?: string;
      ip_state?: string;
      ip_city?: string;
      ip_postal?: string;
      ip_country?: string;
      browser_id?: string;
      user_agent?: string;
      external_id?: string;
      content_name?: string;
      content_category?: string;
      referrer?: string;
      full_url?: string;
    };
  }>;
  access_token: string;
}

import { createClient } from '@supabase/supabase-js';
import { LeadData, LeadLocation, TrackingData } from '../types/leads';
import { getIpLocation } from './geoLocation';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase configuration');
}

const supabase = createClient(supabaseUrl, supabaseKey);

const hashData = async (data: string): Promise<string> => {
  try {
    const hashBuffer = await window.crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(data)
    );
    return Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  } catch (error) {
    console.error('Error hashing data:', error);
    throw error;
  }
};

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
};

const getTrackingData = (): TrackingData => {
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    fbclid: urlParams.get('fbclid') || '',
    gclid: urlParams.get('gclid') || '',
    ttclid: urlParams.get('ttclid') || '',
    msclkid: urlParams.get('msclkid') || '',
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_term: urlParams.get('utm_term') || '',
    utm_content: urlParams.get('utm_content') || '',
    referrer: document.referrer || 'direct',
    full_url: window.location.href
  };
};

const storeLead = async (leadData: LeadData): Promise<void> => {
  try {
    console.info('💾 Storing lead data in Supabase...');
    const { error } = await supabase.from('leads').insert([leadData]);
    
    if (error) {
      throw error;
    }
    
    console.info('✅ Lead data successfully stored in Supabase');
  } catch (error) {
    console.error('❌ Error storing lead in Supabase:', error);
    throw error; // Re-throw to handle in the calling function
  }
};

export const trackFormSubmission = async (formData: FormData): Promise<void> => {
  console.group('📊 Form Submission Tracking');
  console.info('🚀 Starting form submission tracking process');
  
  try {
    // 1. Validate environment variables
    const pixelId = import.meta.env.VITE_META_PIXEL_ID;
    const accessToken = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      throw new Error('Missing Meta Pixel configuration');
    }

    console.debug('Meta Configuration:', { 
      pixelId, 
      hasAccessToken: true,
      apiEndpoint: META_CONVERSION_API_URL
    });

    // 2. Get location data
    console.info('📍 Fetching location data...');
    const locationData = await getIpLocation();
    console.debug('Location Data:', locationData);

    // 3. Get tracking data
    console.info('🔍 Collecting tracking parameters...');
    const trackingData = getTrackingData();
    console.debug('Tracking Data:', trackingData);

    // 4. Hash sensitive data
    console.info('🔒 Hashing sensitive data...');
    const [hashedEmail, hashedPhone] = await Promise.all([
      hashData(formData.email.toLowerCase()),
      hashData(formData.phone)
    ]);

    // 5. Prepare lead data for Supabase
    const leadData: LeadData = {
      // User Details
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      education: formData.education,
      course: formData.course,

      // Location Data
      ip_address: locationData.ip,
      city: locationData.city,
      state: locationData.region,
      postal_code: locationData.postal,
      country: locationData.country_name,
      latitude: locationData.latitude,
      longitude: locationData.longitude,

      // Traffic Source & Tracking
      ...trackingData,

      // Meta Data
      browser_language: navigator.language,
      screen_resolution: `${screen.width}x${screen.height}`,
      platform: navigator.platform,
      user_agent: navigator.userAgent
    };

    // 6. Store in Supabase
    await storeLead(leadData);

    // 7. Prepare Meta Pixel payload
    console.info('📦 Preparing Meta Pixel payload...');
    const payload = {
      data: [{
        event_name: 'CompleteRegistration',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        user_data: {
          em: hashedEmail,
          ph: hashedPhone,
          client_ip_address: locationData.ip,
          client_user_agent: navigator.userAgent,
          fbc: trackingData.fbclid ? `fb.1.${Date.now()}.${trackingData.fbclid}` : undefined,
          fbp: getCookie('_fbp') || undefined
        },
        custom_data: {
          content_name: 'registration_form',
          status: 'complete',
          course: formData.course,
          ...trackingData
        }
      }],
      access_token: accessToken
    };

    // 8. Send to Meta
    console.info('📤 Sending data to Meta Conversion API...');
    const response = await fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Meta API error: ${response.status}`);
    }

    console.info('✅ Form submission tracking completed successfully');
  } catch (error) {
    console.error('❌ Error in form submission tracking:', error);
    // Don't throw here to prevent breaking the user flow
  } finally {
    console.groupEnd();
  }
};

export const trackViewContent = (): void => {
  try {
    console.group('Meta Pixel View Content Tracking');
    console.info('🚀 Starting view content tracking');
    const pixelId = import.meta.env.VITE_META_PIXEL_ID;
    const accessToken = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN;

    console.debug('Meta Configuration:', { 
      pixelId, 
      hasAccessToken: !!accessToken,
      apiEndpoint: META_CONVERSION_API_URL
    });

    if (!accessToken) {
      console.warn('⚠️ Meta Pixel access token not found');
      console.groupEnd();
      return;
    }

    const currentPath = window.location.pathname;
    const currentUrl = window.location.href;
    const referrer = document.referrer;
    const clickId = new URLSearchParams(window.location.search).get('fbclid') || '';
    const browserInfo = {
      userAgent: navigator.userAgent,
      browserId: navigator.userAgent + navigator.language + screen.width + screen.height,
    };
    const externalId = crypto.randomUUID();

    const payload: ConversionAPIPayload = {
      data: [{
        event_name: 'ViewContent',
        event_time: Math.floor(Date.now() / 1000),
        user_data: {
          external_id: [externalId]
        },
        custom_data: {
          content_name: currentPath,
          content_category: 'page_view',
          click_id: clickId,
          browser_id: browserInfo.browserId,
          user_agent: browserInfo.userAgent,
          external_id: externalId,
          referrer: referrer || 'direct',
          full_url: currentUrl
        }
      }],
      access_token: accessToken
    };

    console.info('📦 Preparing conversion API payload');
    console.debug('Full Payload:', {
      eventName: 'ViewContent',
      pixelId,
      payload: { ...payload, access_token: '***' } // Hide access token in logs
    });

    console.info('📤 Sending data to Meta Conversion API');
    fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(() => {
      console.info('✅ View content tracking completed successfully');
      console.groupEnd();
    }).catch(error => {
      console.error('❌ Error sending view content tracking:', error);
      console.groupEnd();
    });
  } catch (error) {
    console.error('❌ Error in trackViewContent:', error);
    console.groupEnd();
  }
};
