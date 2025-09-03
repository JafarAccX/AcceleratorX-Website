// src/utils/pixelChecker.ts
// Utility to check which pixel should be loaded for any page

import { metaPixelManager } from "./metaPixelManager";

/**
 * Check which pixel should be loaded for a given route/course without actually loading it
 */
export const checkPixelForRoute = (pathname: string, course?: string) => {
  return metaPixelManager.getCurrentPixelInfo(pathname, course);
};

/**
 * Check if a pixel is currently initialized
 */
export const isPixelInitialized = (pathname: string, course?: string): boolean => {
  const pixelInfo = checkPixelForRoute(pathname, course);
  return pixelInfo ? pixelInfo.isInitialized : false;
};

/**
 * Get a summary of all pixels and their status
 */
export const getPixelSummary = () => {
  const debugInfo = metaPixelManager.getDebugInfo();
  
  return {
    totalAvailablePixels: debugInfo.availablePixels.length,
    totalInitializedPixels: debugInfo.initializedPixels.length,
    availablePixels: debugInfo.availablePixels,
    initializedPixelIds: debugInfo.initializedPixels,
    pixelStatus: debugInfo.availablePixels.map(pixel => ({
      ...pixel,
      isInitialized: debugInfo.initializedPixels.includes(pixel.pixelId)
    }))
  };
};

/**
 * Test function to see which pixel would be used for different routes
 */
export const testPixelRouting = () => {
  const testRoutes = [
    { path: '/courses/data-analytics-program-fb', course: 'Data Analytics' },
    { path: '/courses/data-analytics-program-fb-b', course: 'Data Analytics' },
    { path: '/courses/product-management-program-fb', course: 'Product Management' },
    { path: '/courses/generative-ai-fb', course: 'Generative AI' },
    { path: '/workshop/da-masterclass', course: undefined },
    { path: '/kuppam', course: undefined },
    { path: '/', course: undefined }
  ];

  return testRoutes.map(route => ({
    ...route,
    pixelInfo: checkPixelForRoute(route.path, route.course)
  }));
};

// Export for console debugging
if (import.meta.env.DEV) {
  (window as unknown as Record<string, unknown>).pixelDebug = {
    checkPixelForRoute,
    isPixelInitialized,
    getPixelSummary,
    testPixelRouting,
    clearInitializedPixels: () => metaPixelManager.clearInitializedPixels()
  };
  
  console.log('🛠️ Pixel debugging tools available at window.pixelDebug');
}
