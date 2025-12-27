import { useState, useEffect } from 'react';

/**
 * Hook to handle hydration-safe animations
 * Prevents animation flickering by ensuring animations only run on the client
 */
export const useHydrationSafeAnimation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only run on client after hydration is complete
    setIsClient(true);
  }, []);

  return isClient;
};

/**
 * Get hydration-safe initial animation state
 * Returns the 'fallback' state during SSR and the actual initial state on client
 */
export const useHydrationSafeInitial = <T>(initial: T, fallback: T) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? initial : fallback;
};
