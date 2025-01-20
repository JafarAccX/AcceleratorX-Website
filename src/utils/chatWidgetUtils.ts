export const shouldShowChatWidget = (pathname: string): boolean => {
  // Disable chat widget for workshop page
  if (
    pathname.includes("/workshop") ||
    pathname.includes("/admin") ||
    pathname.includes("/login")
  ) {
    return false;
  }
  return true;
};
