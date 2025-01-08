export const shouldShowChatWidget = (pathname: string): boolean => {
  // Disable chat widget for workshop page
  if (pathname.includes('/workshop')) {
    return false;
  }
  return true;
};
