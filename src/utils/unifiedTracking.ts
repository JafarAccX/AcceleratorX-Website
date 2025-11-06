// src/utils/unifiedTracking.ts
// Unified tracking service to prevent duplicate events

interface TrackingEvent {
  eventType: 'PageView' | 'Lead' | 'CompleteRegistration' | 'ViewContent';
  eventId: string;
  timestamp: number;
  pixelId: string;
  route: string;
}

interface EventParameters {
  [key: string]: string | number | boolean | undefined;
}

class UnifiedTrackingService {
  private eventCache = new Map<string, TrackingEvent>();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
  private pixelsInitialized = new Set<string>();

  // Clean old events from cache
  private cleanCache() {
    const now = Date.now();
    for (const [key, event] of this.eventCache.entries()) {
      if (now - event.timestamp > this.CACHE_DURATION) {
        this.eventCache.delete(key);
      }
    }
  }

  // Generate consistent event ID
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

  // Check if event already fired
  private hasEventFired(eventType: string, eventId: string, pixelId: string): boolean {
    this.cleanCache();
    const cacheKey = `${eventType}_${eventId}_${pixelId}`;
    return this.eventCache.has(cacheKey);
  }

  // Mark event as fired
  private markEventFired(eventType: string, eventId: string, pixelId: string, route: string) {
    const cacheKey = `${eventType}_${eventId}_${pixelId}`;
    this.eventCache.set(cacheKey, {
      eventType: eventType as TrackingEvent['eventType'],
      eventId,
      timestamp: Date.now(),
      pixelId,
      route
    });
  }

  // Initialize pixel safely
  initializePixel(pixelId: string): void {
    if (!pixelId || this.pixelsInitialized.has(pixelId)) {
      return;
    }

    if (!window.fbq) {
      console.warn('Facebook Pixel not loaded');
      return;
    }

    try {
      window.fbq('init', pixelId);
      this.pixelsInitialized.add(pixelId);
      console.log(`✅ Meta Pixel initialized: ${pixelId}`);
    } catch (error) {
      console.error(`❌ Failed to initialize pixel ${pixelId}:`, error);
    }
  }

  // Track event with deduplication
  trackEvent(
    eventType: 'PageView' | 'Lead' | 'CompleteRegistration' | 'ViewContent',
    pixelId: string,
    eventId?: string,
    parameters?: EventParameters
  ): void {
    if (!pixelId || !window.fbq) {
      console.warn('Cannot track event: Missing pixel ID or fbq');
      return;
    }

    // Generate event ID if not provided (for PageView, ViewContent)
    const finalEventId = eventId || this.generateEventId();
    const route = window.location.pathname;

    // Check for duplicate
    if (this.hasEventFired(eventType, finalEventId, pixelId)) {
      console.warn(`🚫 Duplicate event prevented: ${eventType} for pixel ${pixelId}`);
      return;
    }

    try {
      // Initialize pixel if needed
      this.initializePixel(pixelId);

      // Track the event
      if (parameters && Object.keys(parameters).length > 0) {
        window.fbq('track', eventType, parameters, { eventID: finalEventId });
      } else {
        window.fbq('track', eventType, {}, { eventID: finalEventId });
      }

      // Mark as fired
      this.markEventFired(eventType, finalEventId, pixelId, route);
      
      console.log(`✅ Event tracked: ${eventType} | Pixel: ${pixelId} | Route: ${route} | EventID: ${finalEventId}`);
    } catch (error) {
      console.error(`❌ Failed to track ${eventType}:`, error);
    }
  }

  // Get cache status for debugging
  getCacheStatus() {
    this.cleanCache();
    return {
      cachedEvents: this.eventCache.size,
      initializedPixels: Array.from(this.pixelsInitialized),
      events: Array.from(this.eventCache.entries())
    };
  }

  // Clear cache (for testing/debugging)
  clearCache() {
    this.eventCache.clear();
    console.log('🗑️ Tracking cache cleared');
  }

  // Store event ID globally for server-side tracking
  storeEventId(eventId: string) {
    window.__META_EVENT_ID__ = eventId;
    
    // Also store in sessionStorage for persistence across page reloads
    try {
      sessionStorage.setItem('meta_event_id', eventId);
    } catch (error) {
      console.warn('Cannot store event ID in sessionStorage:', error);
    }
  }

  // Retrieve stored event ID
  getStoredEventId(): string | null {
    // Try window first, then sessionStorage
    if (window.__META_EVENT_ID__) {
      return window.__META_EVENT_ID__;
    }
    
    try {
      return sessionStorage.getItem('meta_event_id');
    } catch (error) {
      console.warn('Cannot retrieve event ID from sessionStorage:', error);
      return null;
    }
  }
}

// Global tracking service instance
export const trackingService = new UnifiedTrackingService();

// Convenience functions
export const trackPageView = (pixelId: string) => {
  trackingService.trackEvent('PageView', pixelId);
};

export const trackLead = (pixelId: string, eventId?: string) => {
  trackingService.trackEvent('Lead', pixelId, eventId);
};

export const trackCompleteRegistration = (pixelId: string, eventId: string, parameters?: EventParameters) => {
  trackingService.trackEvent('CompleteRegistration', pixelId, eventId, parameters);
};

export const trackViewContent = (pixelId: string, parameters?: EventParameters) => {
  trackingService.trackEvent('ViewContent', pixelId, undefined, parameters);
};

// Generate and store event ID for form submissions
export const generateFormEventId = (): string => {
  const eventId = trackingService.generateEventId();
  trackingService.storeEventId(eventId);
  return eventId;
};

// Get debug info
export const getTrackingDebugInfo = () => {
  return trackingService.getCacheStatus();
};
