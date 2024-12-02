interface LocationData {
  ip: string;
  region: string;
  city: string;
  postal: string;
  country_name: string;
  latitude: number;
  longitude: number;
}

// In-memory cache for IP geolocation data
const geoCache = new Map<string, { data: LocationData; timestamp: number }>();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  maxRetries = 3,
  initialDelay = 1000
): Promise<Response> {
  let lastError: Error;
  let delay = initialDelay;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxRetries - 1) {
        await sleep(delay);
        delay *= 2; // Exponential backoff
      }
    }
  }
  throw lastError!;
}

// Alternative geolocation services
const GEOLOCATION_SERVICES = [
  'https://ipapi.co/json/',
  'https://ip-api.com/json/',
  'https://ipwho.is/'
];

export async function getIpLocation(): Promise<LocationData> {
  // Check if we have a cached client IP
  const clientIp = await fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => data.ip)
    .catch(() => null);

  if (clientIp) {
    const cached = geoCache.get(clientIp);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.data;
    }
  }

  // Try each service in sequence until one works
  for (const service of GEOLOCATION_SERVICES) {
    try {
      const response = await fetchWithRetry(service);
      const data = await response.json();
      
      // Normalize the response data structure
      const locationData: LocationData = {
        ip: data.ip,
        region: data.region || data.regionName || data.state,
        city: data.city,
        postal: data.postal || data.zip || data.postal_code,
        country_name: data.country_name || data.country,
        latitude: data.latitude || data.lat,
        longitude: data.longitude || data.lon
      };

      // Cache the result
      if (clientIp) {
        geoCache.set(clientIp, {
          data: locationData,
          timestamp: Date.now()
        });
      }

      return locationData;
    } catch (error) {
      console.warn(`Failed to fetch location data from ${service}:`, error);
      continue;
    }
  }

  throw new Error('All geolocation services failed');
}

// Clear expired cache entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, { timestamp }] of geoCache.entries()) {
    if (now - timestamp > CACHE_DURATION) {
      geoCache.delete(ip);
    }
  }
}, CACHE_DURATION);
