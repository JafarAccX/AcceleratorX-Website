// src/utils/metaPixelManager.ts
// Centralized Meta Pixel Management System

import { PIXEL_CONFIGS, PIXEL_ROUTES, COURSE_PIXEL_MAPPING, validatePixelConfigs } from "../config/metaPixelConfig";

export interface PixelConfig {
  pixelId: string;
  accessToken: string;
  name: string;
  description?: string;
}

export interface TrackingRoute {
  pattern: string | RegExp;
  pixelKey: string;
  eventTypes: ('PageView' | 'Lead' | 'CompleteRegistration' | 'ViewContent')[];
}

export interface FormSubmissionData {
  name: string;
  email: string;
  phone: string;
  course?: string;
  education?: string;
  designation?: string;
  workExperience?: string;
  eventId?: string;
  [key: string]: string | undefined;
}

class MetaPixelManager {
  private pixels: Map<string, PixelConfig> = new Map();
  private routes: TrackingRoute[] = [];
  private eventHistory: Map<string, Set<string>> = new Map(); // pixelId -> Set of eventIds
  private readonly EVENT_HISTORY_CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes

  constructor() {
    this.initializePixelsFromConfig();
    this.initializeRoutesFromConfig();
    this.startCleanupInterval();
    
    // Validate configuration in development
    if (import.meta.env.DEV) {
      const validation = validatePixelConfigs();
      if (!validation.valid) {
        console.warn('❌ Meta Pixel Configuration Issues:', validation.errors);
      } else {
        console.log('✅ Meta Pixel Configuration Valid');
      }
    }
  }

  private initializePixelsFromConfig() {
    Object.entries(PIXEL_CONFIGS).forEach(([key, config]) => {
      if (config.pixelId && config.accessToken) {
        this.pixels.set(key, config);
      }
    });
  }

  private initializeRoutesFromConfig() {
    this.routes = [...PIXEL_ROUTES];
  }

  // Deprecated - replaced by config-based initialization
  private initializePixels() {
    // This method is now deprecated, keeping for backward compatibility
    console.warn('Using deprecated initializePixels method. Please use config-based initialization.');
  }

  // Deprecated - replaced by config-based initialization  
  private initializeRoutes() {
    // This method is now deprecated, keeping for backward compatibility
    console.warn('Using deprecated initializeRoutes method. Please use config-based initialization.');
  }

  private startCleanupInterval() {
    setInterval(() => {
      this.eventHistory.clear(); // Clear old event history periodically
    }, this.EVENT_HISTORY_CLEANUP_INTERVAL);
  }

  /**
   * Add a new pixel configuration
   */
  addPixel(key: string, config: PixelConfig): void {
    this.pixels.set(key, config);
  }

  /**
   * Add a new route configuration
   */
  addRoute(route: TrackingRoute): void {
    this.routes.unshift(route); // Add to beginning for priority
  }

  /**
   * Get pixel configuration for current route
   */
  getPixelForRoute(pathname: string, course?: string): PixelConfig | null {
    // Special case for course-based routing
    if (course && COURSE_PIXEL_MAPPING[course]) {
      const pixelKey = COURSE_PIXEL_MAPPING[course];
      const pixel = this.pixels.get(pixelKey);
      if (pixel) return pixel;
    }

    // Route-based routing
    for (const route of this.routes) {
      const matches = typeof route.pattern === 'string' 
        ? pathname === route.pattern
        : route.pattern.test(pathname);
      
      if (matches) {
        const pixel = this.pixels.get(route.pixelKey);
        if (pixel) return pixel;
      }
    }

    return null;
  }

  /**
   * Check if an event has already been tracked for a pixel
   */
  private hasEventBeenTracked(pixelId: string, eventId: string): boolean {
    const pixelEvents = this.eventHistory.get(pixelId);
    return pixelEvents ? pixelEvents.has(eventId) : false;
  }

  /**
   * Mark an event as tracked for a pixel
   */
  private markEventAsTracked(pixelId: string, eventId: string): void {
    if (!this.eventHistory.has(pixelId)) {
      this.eventHistory.set(pixelId, new Set());
    }
    this.eventHistory.get(pixelId)!.add(eventId);
  }

  /**
   * Generate consistent event ID
   */
  generateEventId(): string {
    if (window.crypto?.randomUUID) {
      return window.crypto.randomUUID();
    }
    // Fallback for older browsers
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  /**
   * Track page view event
   */
  async trackPageView(pathname: string, course?: string): Promise<void> {
    const pixel = this.getPixelForRoute(pathname, course);
    if (!pixel) {
      console.warn('No pixel configuration found for route:', pathname);
      return;
    }

    const eventId = this.generateEventId();

    // Prevent duplicate tracking
    if (this.hasEventBeenTracked(pixel.pixelId, eventId)) {
      console.warn(`PageView already tracked for pixel ${pixel.pixelId}`);
      return;
    }

    try {
      // Client-side tracking
      if (window.fbq) {
        const fbqInitialized = (window as unknown as Record<string, unknown>).fbqInitialized as Record<string, boolean> || {};
        if (!fbqInitialized[pixel.pixelId]) {
          window.fbq('init', pixel.pixelId);
          (window as unknown as Record<string, unknown>).fbqInitialized = fbqInitialized;
          fbqInitialized[pixel.pixelId] = true;
        }
        window.fbq('track', 'PageView');
      }

      // Mark as tracked
      this.markEventAsTracked(pixel.pixelId, eventId);
      
      console.log(`✅ PageView tracked for ${pixel.name} (${pixel.pixelId}) on ${pathname}`);
    } catch (error) {
      console.error('PageView tracking error:', error);
    }
  }

  /**
   * Track form submission with unified client/server tracking
   */
  async trackFormSubmission(
    formData: FormSubmissionData,
    pathname: string,
    trackingMode: 'client' | 'server' | 'both' = 'both'
  ): Promise<string> {
    const pixel = this.getPixelForRoute(pathname, formData.course);
    if (!pixel) {
      console.warn('No pixel configuration found for route:', pathname);
      return '';
    }

    // Use provided eventId or generate new one
    const eventId = formData.eventId || this.generateEventId();

    // Prevent duplicate tracking
    if (this.hasEventBeenTracked(pixel.pixelId, eventId)) {
      console.warn(`CompleteRegistration already tracked for pixel ${pixel.pixelId} with eventId ${eventId}`);
      return eventId;
    }

    try {
      // Client-side tracking
      if ((trackingMode === 'client' || trackingMode === 'both') && window.fbq) {
        const fbqInitialized = (window as unknown as Record<string, unknown>).fbqInitialized as Record<string, boolean> || {};
        if (!fbqInitialized[pixel.pixelId]) {
          window.fbq('init', pixel.pixelId);
          (window as unknown as Record<string, unknown>).fbqInitialized = fbqInitialized;
          fbqInitialized[pixel.pixelId] = true;
        }

        // Track with event_id for deduplication
        window.fbq('track', 'CompleteRegistration', {
          event_id: eventId,
          content_name: 'registration_form',
          course: formData.course || 'unknown'
        });
      }

      // Server-side tracking via Conversion API
      if (trackingMode === 'server' || trackingMode === 'both') {
        await this.sendConversionAPIEvent(pixel, formData, eventId);
      }

      // Mark as tracked
      this.markEventAsTracked(pixel.pixelId, eventId);
      
      console.log(`✅ CompleteRegistration tracked for ${pixel.name} (${pixel.pixelId}) with eventId: ${eventId}`);
      
      return eventId;
    } catch (error) {
      console.error('Form submission tracking error:', error);
      return eventId;
    }
  }

  /**
   * Send event to Conversion API
   */
  private async sendConversionAPIEvent(
    pixel: PixelConfig,
    formData: FormSubmissionData,
    eventId: string
  ): Promise<void> {
    try {
      // Hash sensitive data
      const [hashedEmail, hashedPhone, hashedFirstName] = await Promise.all([
        this.hashData(formData.email.toLowerCase()),
        this.hashData(formData.phone),
        this.hashData(formData.name.split(' ')[0])
      ]);

      const trackingData = this.getTrackingData();

      const payload = {
        data: [{
          event_name: 'CompleteRegistration',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_id: eventId,
          user_data: {
            em: hashedEmail,
            ph: hashedPhone,
            fn: hashedFirstName,
            client_user_agent: navigator.userAgent,
            fbc: trackingData.fbclid ? `fb.1.${Date.now()}.${trackingData.fbclid}` : undefined,
            fbp: this.getFBP()
          },
          custom_data: {
            content_name: 'registration_form',
            status: 'complete',
            course: formData.course || 'unknown',
            education: formData.education,
            designation: formData.designation,
            work_experience: formData.workExperience,
            ...trackingData
          }
        }],
        access_token: pixel.accessToken
      };

      const response = await fetch(`https://graph.facebook.com/v17.0/${pixel.pixelId}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Conversion API error: ${response.status}`);
      }

      console.log(`✅ Conversion API event sent for ${pixel.name}`);
    } catch (error) {
      console.error('Conversion API error:', error);
    }
  }

  /**
   * Hash data for privacy
   */
  private async hashData(data: string): Promise<string> {
    const hashBuffer = await window.crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(data)
    );
    return Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  /**
   * Get tracking parameters from URL
   */
  private getTrackingData() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      fbclid: urlParams.get('fbclid') || undefined,
      gclid: urlParams.get('gclid') || undefined,
      ttclid: urlParams.get('ttclid') || undefined,
      msclkid: urlParams.get('msclkid') || undefined,
      utm_source: urlParams.get('utm_source') || undefined,
      utm_medium: urlParams.get('utm_medium') || undefined,
      utm_campaign: urlParams.get('utm_campaign') || undefined,
      utm_term: urlParams.get('utm_term') || undefined,
      utm_content: urlParams.get('utm_content') || undefined,
      referrer: document.referrer || 'direct',
      landing_page_url: window.location.href
    };
  }

  /**
   * Get Facebook Browser Pixel (fbp) from cookies
   */
  private getFBP(): string | undefined {
    try {
      const fbpCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('_fbp='));
      return fbpCookie ? fbpCookie.split('=')[1] : undefined;
    } catch {
      return undefined;
    }
  }

  /**
   * Get debug information
   */
  getDebugInfo() {
    return {
      pixels: Array.from(this.pixels.entries()).map(([key, config]) => ({
        key,
        name: config.name,
        pixelId: config.pixelId,
        hasAccessToken: !!config.accessToken
      })),
      routes: this.routes,
      eventHistory: Array.from(this.eventHistory.entries()).map(([pixelId, events]) => ({
        pixelId,
        eventCount: events.size
      }))
    };
  }
}

// Global instance
export const metaPixelManager = new MetaPixelManager();

// Type for fbq function
declare global {
  interface Window {
    fbq?: (command: string, eventOrId: string, params?: unknown) => void;
  }
}
