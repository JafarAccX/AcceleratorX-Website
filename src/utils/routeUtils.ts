// List of routes where navbar and footer should be hidden
const hiddenNavbarRoutes: string[] = [
  "/admin/ad-analysis",
  "/admin/dashboard",
  "/thank-you",
];

/**
 * Check if navbar and footer should be hidden for current route
 * @param pathname - Current route pathname
 * @returns boolean - True if navbar/footer should be hidden
 */
export const shouldHideNavbar = (pathname: string): boolean => {
  return hiddenNavbarRoutes.some((route) => pathname.startsWith(route));
};

/**
 * Add a new route where navbar and footer should be hidden
 * @param route - Route to add to hidden list
 */
export const addHiddenRoute = (route: string): void => {
  if (!hiddenNavbarRoutes.includes(route)) {
    hiddenNavbarRoutes.push(route);
  }
};

/**
 * Remove a route from the hidden navbar/footer list
 * @param route - Route to remove from hidden list
 */
export const removeHiddenRoute = (route: string): void => {
  const index = hiddenNavbarRoutes.indexOf(route);
  if (index > -1) {
    hiddenNavbarRoutes.splice(index, 1);
  }
};

/**
 * Get all routes where navbar/footer are hidden
 * @returns string[] - Array of hidden routes
 */
export const getHiddenRoutes = (): string[] => {
  return [...hiddenNavbarRoutes];
};
