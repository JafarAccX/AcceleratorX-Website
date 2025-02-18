import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCourseContext } from '../../context/courseContext';
import ThankYouPage from '../../components/ThankYouPage';

interface LocationState {
  courseName?: string;
}

// Centralized list of ad/dummy routes
export const adRoutes = [
  "/courses/product-management-program-fb",
  "/courses/data-analytics-program-fb",
  "/courses/no-code-tool-program-fb",
  "/courses/product-management-program-eie",
  "/courses/data-analytics-program-eie",
  "/xsat",
  "/thank-you",
  "/workshop/da-masterclass",
  "/workshop/pm-masterclass",
  "/workshop/gen-ai-masterclass",
  "/fa-register/gen-ai",
  "/fa-register/pm",
  "/fa-register/dm",
  "/fa-register/da",
  "/courses/generative-ai-fb",
  "/workshop/dm-masterclass",
] as const;

/**
 * Check if a given pathname is a dummy/ad route
 * @param pathname The current route pathname
 * @returns boolean indicating if this is a dummy route
 */
export const isDummyRoute = (pathname: string): boolean => {
  return adRoutes.includes(pathname as any);
};

export interface RouteLogicProps {
  setSelectedCourse: (course: string | null) => void;
}

/**
 * Component to handle course selection based on current route
 * This sets the appropriate course in context based on the current URL
 */
export const RouteLogic: React.FC<RouteLogicProps> = ({ setSelectedCourse }) => {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/courses/product-management" ||
      location.pathname === "/courses/product-management-program-fb" ||
      location.pathname === "/courses/product-management-program-eie"
    ) {
      setSelectedCourse("Product Management");
    } else if (
      location.pathname === "/courses/data-analytics" ||
      location.pathname === "/courses/data-analytics-program-fb"
    ) {
      setSelectedCourse("Data Analytics");
    } else if (
      location.pathname === "/courses/generative-ai" ||
      location.pathname === "/courses/generative-ai-fb"
    ) {
      setSelectedCourse("Generative AI");
    } else {
      setSelectedCourse(null);
    }
  }, [location, setSelectedCourse]);

  return null;
};

/**
 * Wrapper component for the thank you page
 * Handles getting course name from route state or context
 */
export const ThankYouPageWrapper: React.FC = () => {
  const location = useLocation();
  const { selectedCourse } = useCourseContext();
  
  // Use location state if available, otherwise fall back to context
  const courseName = (location.state as LocationState | null)?.courseName || selectedCourse || "our course";
  
  return React.createElement(ThankYouPage, { courseName });
};
