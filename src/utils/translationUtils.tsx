/**
 * Translation utilities and guidelines for making the site translation-friendly
 */

/**
 * Guidelines for translation-friendly components:
 * 
 * 1. Always use semantic HTML tags for text content:
 *    - <p> for paragraphs
 *    - <span> for inline text
 *    - <h1>, <h2>, <h3>, etc. for headings
 *    - <label> for form labels
 *    - <button> for button text
 * 
 * 2. Avoid rendering text in:
 *    - Canvas elements
 *    - SVG text elements (unless necessary for graphics)
 *    - Images with text
 *    - dangerouslySetInnerHTML for large content blocks
 * 
 * 3. Use proper ARIA labels for accessibility and translation
 * 
 * 4. Keep text content in JSX, not in CSS content properties
 */

/**
 * Helper function to ensure text is wrapped in semantic HTML
 */
export const wrapTextInSemanticTag = (
  text: string,
  tag: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'span',
  className?: string
) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag className={ className }> { text } </Tag>;
};

/**
 * Helper function to create translation-friendly button text
 */
export const createTranslatableButton = (
  text: string,
  onClick: () => void,
  className?: string,
  disabled?: boolean
) => {
  return (
    <button 
      onClick= { onClick }
  className = { className }
  disabled = { disabled }
  type = "button"
    >
    { text }
    </button>
  );
};

/**
 * Helper function to create translation-friendly form labels
 */
export const createTranslatableLabel = (
  text: string,
  htmlFor?: string,
  className?: string
) => {
  return (
    <label 
      htmlFor= { htmlFor }
  className = { className }
    >
    { text }
    </label>
  );
};

/**
 * Check if a component is translation-friendly
 * This is a development helper to ensure best practices
 */
export const isTranslationFriendly = (component: React.ReactElement): boolean => {
  // This is a simplified check - in practice, you'd want more comprehensive validation
  const hasTextContent = (element: React.ReactElement): boolean => {
    if (typeof element.props.children === 'string') {
      return true;
    }

    if (Array.isArray(element.props.children)) {
      return element.props.children.some((child: any) =>
        typeof child === 'string' || (child && typeof child === 'object' && hasTextContent(child))
      );
    }

    if (element.props.children && typeof element.props.children === 'object') {
      return hasTextContent(element.props.children);
    }

    return false;
  };

  return hasTextContent(component);
}; 