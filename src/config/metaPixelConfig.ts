// src/config/metaPixelConfig.ts
// Configuration for Meta Pixel routing and management

import { PixelConfig, TrackingRoute } from "../utils/metaPixelManager";

/**
 * Define all pixel configurations here
 * Add new pixels as you create new ad accounts
 */
export const PIXEL_CONFIGS: Record<string, PixelConfig> = {
  default: {
    pixelId: import.meta.env.VITE_META_PIXEL_ID || '',
    accessToken: import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN || '',
    name: 'AcceleratorX Default',
    description: 'Main AcceleratorX pixel for general tracking'
  },
  data_analytics: {
    pixelId: import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT || '',
    accessToken: import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN_DA_DIRECT || '',
    name: 'Data Analytics Direct',
    description: 'Dedicated pixel for Data Analytics courses'
  },
  data_analytics_second: {
    pixelId: import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT_SECOND || '',
    accessToken: import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN_DA_DIRECT_SECOND || '',
    name: 'Data Analytics Second',
    description: 'Secondary DA pixel for A/B testing or different campaigns'
  }
  // Add new pixels here as needed:
  // new_program: {
  //   pixelId: import.meta.env.VITE_META_PIXEL_ID_NEW_PROGRAM || '',
  //   accessToken: import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN_NEW_PROGRAM || '',
  //   name: 'New Program',
  //   description: 'Pixel for new program tracking'
  // }
};

/**
 * Define routing rules for pixels
 * Higher priority routes should come first
 */
export const PIXEL_ROUTES: TrackingRoute[] = [
  // Data Analytics Second Routes (higher priority)
  {
    pattern: /\/(courses\/data-analytics-program-fb-b|courses\/generative-ai-fb-b)/,
    pixelKey: 'data_analytics_second',
    eventTypes: ['PageView', 'Lead', 'CompleteRegistration', 'ViewContent']
  },
  // Data Analytics Primary Routes
  {
    pattern: /\/(courses\/data-analytics-program-fb|courses\/data-analytics)/,
    pixelKey: 'data_analytics',
    eventTypes: ['PageView', 'Lead', 'CompleteRegistration', 'ViewContent']
  },
  // Workshop routes - could be mapped to specific pixels
  {
    pattern: /\/workshop\/(da-masterclass|data-analytics)/,
    pixelKey: 'data_analytics',
    eventTypes: ['PageView', 'Lead', 'CompleteRegistration', 'ViewContent']
  },
  // Default catch-all route (should be last)
  {
    pattern: /./, // matches everything
    pixelKey: 'default',
    eventTypes: ['PageView', 'Lead', 'CompleteRegistration', 'ViewContent']
  }
];

/**
 * Course-specific pixel mapping
 * This takes precedence over route-based mapping
 */
export const COURSE_PIXEL_MAPPING: Record<string, string> = {
  'Data Analytics': 'data_analytics',
  'AI Powered Data Analytics': 'data_analytics',
  'Product Management': 'default',
  'Generative AI': 'default',
  'No Code Tools': 'default'
  // Add new course mappings here
};

/**
 * Special event configurations
 */
export const EVENT_CONFIGS = {
  // Routes that should trigger Lead events
  LEAD_ROUTES: [
    '/thank-you',
    '/workshop-registration/success',
    '/workshop-payment/success',
    '/registration-sucessfull'
  ],
  
  // Routes that should trigger CompleteRegistration events
  COMPLETE_REGISTRATION_ROUTES: [
    '/thank-you',
    '/workshop-registration/success',
    '/workshop-payment/success',
    '/registration-sucessfull'
  ],
  
  // Routes that should trigger PageView events
  PAGE_VIEW_ROUTES: [
    '/courses/product-management-program-fb',
    '/courses/data-analytics-program-fb',
    '/courses/data-analytics-program-fb-b',
    '/courses/no-code-tool-program-fb',
    '/courses/product-management-program-eie',
    '/courses/data-analytics-program-eie',
    '/courses/generative-ai-fb',
    '/courses/generative-ai-fb-b',
    '/workshop/pm-masterclass',
    '/workshop/dm-masterclass',
    '/workshop/gen-ai-masterclass-bxwcy',
    '/workshop/gen-ai-masterclass',
    '/workshop/da-masterclass',
    '/workshop/da-masterclass-bxwxy',
    '/courses/gen-ai-for-pms'
  ]
};

/**
 * Validation function to check if all required environment variables are set
 */
export const validatePixelConfigs = (): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  Object.entries(PIXEL_CONFIGS).forEach(([key, config]) => {
    if (!config.pixelId) {
      errors.push(`Missing pixel ID for ${key}`);
    }
    if (!config.accessToken) {
      errors.push(`Missing access token for ${key}`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Get pixel configuration by key
 */
export const getPixelConfig = (key: string): PixelConfig | null => {
  return PIXEL_CONFIGS[key] || null;
};

/**
 * Get all available pixel keys
 */
export const getAllPixelKeys = (): string[] => {
  return Object.keys(PIXEL_CONFIGS);
};
