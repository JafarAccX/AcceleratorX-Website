// src/utils/unifiedFormTracking.ts
// Unified form tracking utilities that work with metaPixelManager

import { metaPixelManager, FormSubmissionData } from "./metaPixelManager";
import { getUTMDataForDB } from "./metaPixel";

/**
 * Track form submission with unified Meta Pixel tracking
 * This replaces the old trackFormSubmission function
 */
export const trackUnifiedFormSubmission = async (
  formData: FormSubmissionData,
  pathname?: string
): Promise<string> => {
  const currentPath = pathname || window.location.pathname;
  
  try {
    // Track with both client and server-side
    const eventId = await metaPixelManager.trackFormSubmission(
      formData,
      currentPath,
      'both'
    );
    
    return eventId;
  } catch (error) {
    console.error('Unified form tracking error:', error);
    return metaPixelManager.generateEventId();
  }
};

/**
 * Track form submission with client-side only
 */
export const trackClientFormSubmission = async (
  formData: FormSubmissionData,
  pathname?: string
): Promise<string> => {
  const currentPath = pathname || window.location.pathname;
  
  return metaPixelManager.trackFormSubmission(
    formData,
    currentPath,
    'client'
  );
};

/**
 * Track form submission with server-side only (Conversion API)
 */
export const trackServerFormSubmission = async (
  formData: FormSubmissionData,
  pathname?: string
): Promise<string> => {
  const currentPath = pathname || window.location.pathname;
  
  return metaPixelManager.trackFormSubmission(
    formData,
    currentPath,
    'server'
  );
};

/**
 * Generate a new event ID for form tracking
 */
export const generateTrackingEventId = (): string => {
  return metaPixelManager.generateEventId();
};

/**
 * Get UTM data formatted for the new tracking system
 */
export const getFormTrackingData = () => {
  return getUTMDataForDB();
};

/**
 * Create FormSubmissionData from form data
 */
export const createFormSubmissionData = (
  formFields: {
    name: string;
    email: string;
    phone: string;
    course?: string;
    education?: string;
    designation?: string;
    workExperience?: string;
    [key: string]: string | undefined;
  },
  eventId?: string
): FormSubmissionData => {
  return {
    ...formFields,
    eventId: eventId || generateTrackingEventId()
  };
};
