// src/components/UnifiedMetaPixel.tsx
// Unified Meta Pixel component that replaces the old MetaPixel component

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCourseContext } from "../context/courseContext";
import { metaPixelManager } from "../utils/metaPixelManager";

export const UnifiedMetaPixel = () => {
  const location = useLocation();
  const { selectedCourse } = useCourseContext();

  useEffect(() => {
    // Track page view when route changes
    metaPixelManager.trackPageView(location.pathname, selectedCourse || undefined);
  }, [location.pathname, selectedCourse]);

  // Debug logging in development
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log("🔍 Meta Pixel Debug Info:", metaPixelManager.getDebugInfo());
    }
  }, [location.pathname]);

  return null;
};
