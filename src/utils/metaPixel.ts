declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export const initializeMetaPixel = (pixelId: string): void => {
  try {
    console.log('Initializing Meta Pixel with ID:', pixelId);

    // Enable debug mode in development
    const isDebugMode = import.meta.env.DEV;
    if (isDebugMode) {
      console.log('Meta Pixel Debug Mode: ON');
    }

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', pixelId);
    if (isDebugMode) {
      window.fbq('set', 'debug', true);
    }
    window.fbq('track', 'PageView');
    
    console.log('Meta Pixel initialized successfully');
    
    // Verify initialization
    if (window.fbq) {
      console.log('✅ Meta Pixel fbq function is available');
      console.log('✅ Current fbq queue length:', window._fbq?.queue?.length || 0);
    }
  } catch (error) {
    console.error('Error initializing Meta Pixel:', error);
  }
};

export const trackFormSubmission = (formData: {
  name: string;
  email: string;
  phone: string;
  education: string;
  course: string;
}): void => {
  try {
    if (typeof window.fbq !== 'function') {
      console.error('Meta Pixel tracking failed: fbq not available');
      return;
    }

    const eventData = {
      content_name: 'Enrollment Form Submission',
      content_category: 'Education',
      course_name: formData.course,
      education_level: formData.education,
      status: 'submitted'
    };

    console.log('📊 Tracking form submission:', eventData);

    // Track the lead event
    window.fbq('track', 'Lead', eventData);

    // Verify event was queued
    const queueLength = window._fbq?.queue?.length || 0;
    console.log(`✅ Event queued successfully. Queue length: ${queueLength}`);
    console.log('🔍 Check Events Manager Test Events tab for verification');
  } catch (error) {
    console.error('Error tracking form submission:', error);
  }
};
