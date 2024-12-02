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
      external_id?: string[];
    };
    custom_data?: {
      course_name?: string;
      education_level?: string;
      click_id?: string;
      ip_address?: string;
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

export const trackFormSubmission = (formData: {
  name: string;
  email: string;
  phone: string;
  education: string;
  course: string;
  city?: string;
  state?: string;
}): void => {
  try {
    const pixelId = import.meta.env.VITE_META_PIXEL_ID;
    const accessToken = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN;

    if (!accessToken) return;

    // Hash user data for security
    const hashData = (data: string): Promise<string> => {
      return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(data))
        .then(hash => Array.from(new Uint8Array(hash))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('')
        );
    };

    Promise.all([
      hashData(formData.email.toLowerCase()),
      hashData(formData.phone.replace(/\D/g, '')),
      hashData(formData.name.toLowerCase()),
      hashData((formData.city || '').toLowerCase()),
      hashData((formData.state || '').toLowerCase())
    ]).then(([hashedEmail, hashedPhone, hashedName, hashedCity, hashedState]) => {
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
            click_id: new URLSearchParams(window.location.search).get('fbclid') || '',
            browser_id: navigator.userAgent + navigator.language + screen.width + screen.height,
            user_agent: navigator.userAgent,
            external_id: crypto.randomUUID(),
            content_name: '',
            content_category: '',
            referrer: document.referrer || 'direct',
            full_url: window.location.href
          }
        }],
        access_token: accessToken
      };

      fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    });
  } catch (error) {
    // Silent error handling to avoid breaking user experience
  }
};

export const trackViewContent = (): void => {
  try {
    const pixelId = import.meta.env.VITE_META_PIXEL_ID;
    const accessToken = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN;

    if (!accessToken) return;

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

    fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    // Silent error handling to avoid breaking user experience
  }
};
