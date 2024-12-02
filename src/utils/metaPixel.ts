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

import { storeLead } from './leads';
import { getIpLocation } from './geoLocation';

export const trackFormSubmission = async (formData: {
  name: string;
  email: string;
  phone: string;
  education: string;
  course: string;
  city?: string;
  state?: string;
}): Promise<void> => {
  try {
    // console.group('Meta Pixel Form Submission Tracking');
    // console.info('🚀 Starting form submission tracking');
    // console.debug('Form Data:', { 
    //   name: formData.name,
    //   email: formData.email,
    //   phone: formData.phone,
    //   education: formData.education,
    //   course: formData.course,
    //   city: formData.city,
    //   state: formData.state
    // });

    const pixelId = import.meta.env.VITE_META_PIXEL_ID;
    const accessToken = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN;

    // console.debug('Meta Configuration:', { 
    //   pixelId, 
    //   hasAccessToken: !!accessToken,
    //   apiEndpoint: META_CONVERSION_API_URL
    // });

    if (!accessToken) {
      // console.warn('⚠️ Meta Pixel access token not found');
      // console.groupEnd();
      return;
    }

    // Hash user data for security
    const hashData = (data: string): Promise<string> => {
      return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(data))
        .then(hash => Array.from(new Uint8Array(hash))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('')
        );
    };

    // Fetch IP address and location
    // console.info('📡 Fetching IP address and location...');
    try {
      const locationData = await getIpLocation();
      // console.log('🌍 Location Details:', {
      //   IP: locationData.ip,
      //   State: locationData.region,
      //   City: locationData.city,
      //   Postal: locationData.postal,
      //   Country: locationData.country_name,
      //   Latitude: locationData.latitude,
      //   Longitude: locationData.longitude
      // });

      // Get all possible click IDs
      const urlParams = new URLSearchParams(window.location.search);
      const clickData = {
        fbclid: urlParams.get('fbclid') || '',
        gclid: urlParams.get('gclid') || '',
        ttclid: urlParams.get('ttclid') || '',
        msclkid: urlParams.get('msclkid') || '',
        campaign_id: urlParams.get('utm_campaign') || '',
        source: urlParams.get('utm_source') || ''
      };
      // console.debug('🎯 Click Tracking IDs:', clickData);

      Promise.all([
        hashData(formData.email.toLowerCase()),
        hashData(formData.phone.replace(/\D/g, '')),
        hashData(formData.name.toLowerCase()),
        hashData((formData.city || locationData.city || '').toLowerCase()),
        hashData((formData.state || locationData.region || '').toLowerCase()),
        hashData((locationData.postal || '').toLowerCase())
      ]).then(async ([hashedEmail, hashedPhone, hashedName, hashedCity, hashedState, hashedZip]) => {
        // console.info('🔒 User data hashed successfully');
        
        // Log raw location data before payload creation
        // console.log('📍 Raw Location Data:', {
        //   ipAddress: locationData.ip,
        //   state: locationData.region,
        //   city: locationData.city,
        //   postalCode: locationData.postal,
        //   country: locationData.country_name
        // });

        const browserInfo = {
          userAgent: navigator.userAgent,
          language: navigator.language,
          screenSize: `${screen.width}x${screen.height}`,
          referrer: document.referrer || 'direct',
          url: window.location.href
        };
        // console.debug('Browser Information:', browserInfo);

        const payload: ConversionAPIPayload = {
          data: [{
            event_name: 'CompleteRegistration',
            event_time: Math.floor(Date.now() / 1000),
            user_data: {
              em: [hashedEmail],
              ph: [hashedPhone],
              fn: [hashedName],
              ct: [hashedCity],
              st: [hashedState],
              zp: [hashedZip]
            },
            custom_data: {
              course_name: formData.course,
              education_level: formData.education,
              click_id: clickData.fbclid,
              gclid: clickData.gclid,
              ttclid: clickData.ttclid,
              msclkid: clickData.msclkid,
              campaign_id: clickData.campaign_id,
              traffic_source: clickData.source,
              ip_address: locationData.ip,
              ip_state: locationData.region || '',
              ip_city: locationData.city || '',
              ip_postal: locationData.postal || '',
              ip_country: locationData.country_name || '',
              browser_id: navigator.userAgent + navigator.language + screen.width + screen.height,
              user_agent: navigator.userAgent,
              external_id: crypto.randomUUID(),
              content_name: '',
              content_category: '',
              referrer: browserInfo.referrer,
              full_url: browserInfo.url
            }
          }],
          access_token: accessToken
        };

        // console.log('📤 Location Data in Payload:', {
        //   ip_address: payload.data[0].custom_data.ip_address,
        //   ip_state: payload.data[0].custom_data.ip_state,
        //   ip_postal: payload.data[0].custom_data.ip_postal,
        //   ip_city: payload.data[0].custom_data.ip_city,
        //   ip_country: payload.data[0].custom_data.ip_country
        // });

        // console.info('📦 Preparing conversion API payload');
        // console.debug('Full Payload:', {
        //   eventName: 'CompleteRegistration',
        //   pixelId,
        //   payload: {
        //     ...payload,
        //     access_token: '***',
        //     data: [{
        //       ...payload.data[0],
        //       custom_data: {
        //         ...payload.data[0].custom_data,
        //         ip_address: locationData.ip,
        //         ip_state: locationData.region,
        //         ip_postal: locationData.postal
        //       }
        //     }]
        //   }
        // });

        const leadData = {
          ...formData,
          ip_address: locationData.ip,
          ip_state: locationData.region,
          ip_postal: locationData.postal,
          ip_city: locationData.city,
          fbclid: clickData.fbclid,
          gclid: clickData.gclid,
          ttclid: clickData.ttclid,
          msclkid: clickData.msclkid,
          campaign_id: clickData.campaign_id,
          traffic_source: clickData.source,
          referrer: browserInfo.referrer,
          full_url: browserInfo.url
        };

        // console.group('📊 Lead Data Processing');
        // console.info('📦 Preparing lead data for Supabase storage');
        // console.debug('Lead Data Details:', {
        //   personalInfo: {
        //     name: leadData.name,
        //     email: leadData.email,
        //     phone: leadData.phone,
        //     education: leadData.education,
        //     course: leadData.course
        //   },
        //   locationInfo: {
        //     city: leadData.city,
        //     state: leadData.state,
        //     ip_address: leadData.ip_address,
        //     ip_state: leadData.ip_state,
        //     ip_city: leadData.ip_city,
        //     ip_postal: leadData.ip_postal
        //   },
        //   trackingInfo: {
        //     fbclid: leadData.fbclid,
        //     gclid: leadData.gclid,
        //     ttclid: leadData.ttclid,
        //     msclkid: leadData.msclkid,
        //     campaign_id: leadData.campaign_id,
        //     traffic_source: leadData.traffic_source
        //   },
        //   browserInfo: {
        //     referrer: leadData.referrer,
        //     full_url: leadData.full_url
        //   }
        // });

        try {
          // console.info('💾 Initiating Supabase storage operation...');
          await storeLead(leadData);
          // console.info('✅ Lead data successfully stored in Supabase');
          // console.debug('🗄️ Storage location: Supabase > public > Leads table');
        } catch (error) {
          // console.error('❌ Error storing lead in Supabase:', error);
          // console.debug('Failed lead data:', leadData);
          // Continue with Meta Pixel tracking even if Supabase storage fails
        } finally {
          // console.groupEnd(); // End Lead Data Processing group
        }

        try {
          // console.info('📤 Sending data to Meta Conversion API');
          const response = await fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          // console.info('✅ Form submission tracking completed successfully');
        } catch (error) {
          // console.error('❌ Error sending form submission tracking:', error);
        } finally {
          // console.groupEnd();
        }
      });
    } catch (error) {
      // console.error('❌ Error fetching location data:', error);
      // Continue with original flow if location fetch fails
      Promise.all([
        hashData(formData.email.toLowerCase()),
        hashData(formData.phone.replace(/\D/g, '')),
        hashData(formData.name.toLowerCase()),
        hashData((formData.city || '').toLowerCase()),
        hashData((formData.state || '').toLowerCase())
      ]).then(([hashedEmail, hashedPhone, hashedName, hashedCity, hashedState]) => {
        // console.info('🔒 User data hashed successfully');
        // console.debug('Hashed Data:', {
        //   email: hashedEmail,
        //   phone: hashedPhone,
        //   name: hashedName,
        //   city: hashedCity,
        //   state: hashedState
        // });

        const browserInfo = {
          userAgent: navigator.userAgent,
          language: navigator.language,
          screenSize: `${screen.width}x${screen.height}`,
          referrer: document.referrer || 'direct',
          url: window.location.href
        };
        // console.debug('Browser Information:', browserInfo);

        const urlParams = {
          fbclid: new URLSearchParams(window.location.search).get('fbclid') || '',
          utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
          utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
          utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || ''
        };
        // console.debug('URL Parameters:', urlParams);

        const payload: ConversionAPIPayload = {
          data: [{
            event_name: 'CompleteRegistration',
            event_time: Math.floor(Date.now() / 1000),
            user_data: {
              em: [hashedEmail],
              ph: [hashedPhone],
              fn: [hashedName],
              ct: [hashedCity],
              st: [hashedState]
            },
            custom_data: {
              course_name: formData.course,
              education_level: formData.education,
              click_id: urlParams.fbclid,
              ip_address: '',
              browser_id: navigator.userAgent + navigator.language + screen.width + screen.height,
              user_agent: navigator.userAgent,
              external_id: crypto.randomUUID(),
              content_name: '',
              content_category: '',
              referrer: browserInfo.referrer,
              full_url: browserInfo.url
            }
          }],
          access_token: accessToken
        };

        // console.info('📦 Preparing conversion API payload');
        // console.debug('Full Payload:', {
        //   eventName: 'CompleteRegistration',
        //   pixelId,
        //   payload: { ...payload, access_token: '***' } // Hide access token in logs
        // });

        // console.info('📤 Sending data to Meta Conversion API');
        fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        }).then(() => {
          // console.info('✅ Form submission tracking completed successfully');
          // console.groupEnd();
        }).catch(error => {
          // console.error('❌ Error sending form submission tracking:', error);
          // console.groupEnd();
        });
      });
    }
  } catch (error) {
     console.error('❌ Error in trackFormSubmission:', error);
     console.groupEnd();
    // Silent error handling to avoid breaking user experience
  }
};

export const trackViewContent = (): void => {
  try {
    // console.group('Meta Pixel View Content Tracking');
    // console.info('🚀 Starting view content tracking');
    const pixelId = import.meta.env.VITE_META_PIXEL_ID;
    const accessToken = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN;

    // console.debug('Meta Configuration:', { 
    //   pixelId, 
    //   hasAccessToken: !!accessToken,
    //   apiEndpoint: META_CONVERSION_API_URL
    // });

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

    // console.info('📦 Preparing conversion API payload');
    // console.debug('Full Payload:', {
    //   eventName: 'ViewContent',
    //   pixelId,
    //   payload: { ...payload, access_token: '***' } // Hide access token in logs
    // });

    // console.info('📤 Sending data to Meta Conversion API');
    fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(() => {
      // console.info('✅ View content tracking completed successfully');
      // console.groupEnd();
    }).catch(error => {
      console.error('❌ Error sending view content tracking:', error);
      console.groupEnd();
    });
  } catch (error) {
    console.error('❌ Error in trackViewContent:', error);
    console.groupEnd();
  }
};
