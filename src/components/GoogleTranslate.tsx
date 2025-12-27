import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages: string;
              layout: number;
              autoDisplay: boolean;
            },
            element: string,
          ): unknown;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const GoogleTranslate = () => {
  const isInitialized = useRef(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Prevent multiple initializations
    if (isInitialized.current) return;

    // Clear any existing content in the translate element
    const existingElement = document.getElementById("google_translate_element");
    if (existingElement) {
      existingElement.innerHTML = "";
    }

    // Add custom styles to the document
    const addCustomStyles = () => {
      const styleId = "google-translate-custom-styles";
      if (document.getElementById(styleId)) return;

      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        /* Hide Google Translate banner */
        .goog-te-banner-frame {
          display: none !important;
        }
        
        /* Style the main container */
        .goog-te-gadget {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif !important;
          color: #374151 !important;
        }
        
        /* Style the dropdown */
        .goog-te-combo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          border: none !important;
          border-radius: 12px !important;
          color: transparent !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          outline: none !important;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4) !important;
          transition: all 0.3s ease !important;
          min-width: 140px !important;
        }
        
        /* Hover effect for dropdown */
        .goog-te-combo:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6) !important;
        }
        
        /* Focus effect */
        .goog-te-combo:focus {
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3) !important;
        }
        
        /* Style dropdown options */
        .goog-te-combo option {
          background: transparent !important;
          color: #374151 !important;
          padding: 8px !important;
        }
        
        /* Hide the "Powered by Google" text and default content */
        .goog-te-gadget-simple .goog-te-menu-value span:first-child {
          display: none !important;
        }
        
        /* Hide the default "Select Language" text */
        .goog-te-gadget-simple .goog-te-menu-value span {
          display: none !important;
        }
        
        /* Add custom text */
        .goog-te-gadget-simple .goog-te-menu-value:before {
          content: "Translate" !important;
          color: transparent !important;
          font-weight: 500 !important;
          font-size: 14px !important;
        }
        
        /* Style the dropdown arrow */
        .goog-te-gadget-simple .goog-te-menu-value:after {
          content: " ▼" !important;
          margin-left: 8px !important;
          color: transparent !important;
          font-size: 12px !important;
        }
        
        /* Hide Google Translate branding/logo */
        .goog-te-gadget-simple img {
          display: none !important;
        }
        
        /* Hide any additional Google branding */
        .goog-te-gadget .goog-te-gadget-simple a {
          text-decoration: none !important;
        }
        
        /* Custom container styling */
        #google_translate_element {
        max-width: 100px !important;
          background: transparent !important
          backdrop-filter: blur(10px) !important;
          border-radius: 16px !important;
          padding: 0px !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          top: 80px !important;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          #google_translate_element {
            right: 8px !important;
            transform: scale(0.85) !important;
          }
          
          .goog-te-combo {
            min-width: 120px !important;
            font-size: 13px !important;
          }
        }
        
        /* Animation for dropdown appearance */
        .goog-te-gadget {
          animation: fadeInTranslate 0.3s ease-out;
        }
        
        @keyframes fadeInTranslate {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
           
          
          .goog-te-gadget {
            color: #f9fafb !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      try {
        // Double-check the element exists and is empty
        const element = document.getElementById("google_translate_element");
        if (element && !element.hasChildNodes()) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,hi,te,kn",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element",
          );
          isInitialized.current = true;

          // Add styles after initialization
          setTimeout(addCustomStyles, 100);
        }
      } catch (error) {
        console.error("Failed to initialize Google Translate:", error);
      }
    };

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="translate.google.com"]');

    if (!existingScript) {
      // Load Google Translate script
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => {
        console.error("Failed to load Google Translate script");
        isInitialized.current = false;
      };

      scriptRef.current = script;
      document.head.appendChild(script);
    } else {
      // Script already exists, just initialize
      if (window.google && window.google.translate) {
        window.googleTranslateElementInit?.();
      }
    }

    return () => {
      // Cleanup
      const element = document.getElementById("google_translate_element");
      if (element) {
        element.innerHTML = "";
      }

      // Remove custom styles
      const customStyles = document.getElementById("google-translate-custom-styles");
      if (customStyles) {
        customStyles.remove();
      }

      // Reset initialization flag when component unmounts
      isInitialized.current = false;
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <>
      <div
        id="google_translate_element"
        className="fixed right-4 z-[10000] transition-all duration-300"
        title="Translate this page"
      />
    </>
  );
};

export default GoogleTranslate;
