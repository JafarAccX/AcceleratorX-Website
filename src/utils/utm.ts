const UTM_PARAMS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'fbclid', 'gclid', 'ttclid', 'msclkid'
];
const UTM_EXPIRY_MS = 1 * 24 * 60 * 60 * 1000; // 1 day

export function persistUTMParams() {
  const params = new URLSearchParams(window.location.search);
  let hasUtm = false;
  const utmData: Record<string, string> & { timestamp?: number; landingPath?: string } = {};
  UTM_PARAMS.forEach(param => {
    const value = params.get(param);
    if (value) {
      utmData[param] = value;
      hasUtm = true;
    }
  });
  if (hasUtm) {
    utmData.timestamp = Date.now();
    utmData.landingPath = window.location.pathname;
    localStorage.setItem('utm_data', JSON.stringify(utmData));
  } else {
    // No UTM in URL: check expiry or path
    const stored = localStorage.getItem('utm_data');
    if (stored) {
      const data = JSON.parse(stored) as Record<string, string | number>;
      const expired = typeof data.timestamp === 'number' && Date.now() - data.timestamp > UTM_EXPIRY_MS;
      const notOnLandingPage = typeof data.landingPath === 'string' && window.location.pathname !== data.landingPath;
      if (expired || notOnLandingPage) {
        localStorage.removeItem('utm_data');
      }
    }
  }
}

export function getValidUTMParams() {
  const stored = localStorage.getItem('utm_data');
  if (!stored) return {};
  const data = JSON.parse(stored) as Record<string, string | number>;
  if (typeof data.timestamp === 'number' && Date.now() - data.timestamp > UTM_EXPIRY_MS) {
    localStorage.removeItem('utm_data');
    return {};
  }
  if (typeof data.landingPath === 'string' && window.location.pathname !== data.landingPath) {
    // Only use UTM on the original landing page
    return {};
  }
  return data;
} 