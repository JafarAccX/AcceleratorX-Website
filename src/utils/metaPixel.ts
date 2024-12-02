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
    };
    custom_data?: {
      course_name?: string;
      education_level?: string;
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
}): void => {
  try {
    console.group(' Meta Conversion API - Form Submission Tracking');
    console.log(' Form Data Received:', {
      name: formData.name,
      email: formData.email.substring(0, 3) + '***@***' + formData.email.split('@')[1],
      phone: '***' + formData.phone.slice(-4),
      education: formData.education,
      course: formData.course
    });

    const pixelId = import.meta.env.VITE_META_PIXEL_ID;
    const accessToken = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN;

    console.log(' Checking Configuration:', {
      pixelId: pixelId ? ' Present' : ' Missing',
      accessToken: accessToken ? ' Present' : ' Missing'
    });

    if (!accessToken) {
      console.error(' Meta Conversion API access token not found');
      console.groupEnd();
      return;
    }

    // Hash user data for security
    const hashData = (data: string): Promise<string> => {
      console.log(` Hashing data: ${data.substring(0, 3)}***`);
      return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(data))
        .then(hash => Array.from(new Uint8Array(hash))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('')
        );
    };

    // Prepare and send data to Conversion API
    console.log(' Starting data hashing process...');
    Promise.all([
      hashData(formData.email.toLowerCase()),
      hashData(formData.phone.replace(/\D/g, '')),
      hashData(formData.name.toLowerCase())
    ]).then(([hashedEmail, hashedPhone, hashedName]) => {
      console.log(' Data hashing completed');
      
      const payload: ConversionAPIPayload = {
        data: [{
          event_name: 'CompleteRegistration',
          event_time: Math.floor(Date.now() / 1000),
          user_data: {
            em: [hashedEmail],
            ph: [hashedPhone],
            fn: [hashedName]
          },
          custom_data: {
            course_name: formData.course,
            education_level: formData.education
          }
        }],
        access_token: accessToken
      };

      console.log(' Preparing API request to:', `${META_CONVERSION_API_URL}/${pixelId}/events`);
      
      fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        console.log(` API Response Status: ${response.status} ${response.statusText}`);
        return response.json();
      })
      .then(data => {
        console.log(' Meta Conversion API Success:', data);
        console.log(' Event tracked successfully!');
      })
      .catch(error => {
        console.error(' Meta Conversion API Error:', error);
      })
      .finally(() => {
        console.groupEnd();
      });
    });

  } catch (error) {
    console.error(' Error in trackFormSubmission:', error);
    console.groupEnd();
  }
};
