import React, { useEffect } from "react";
import companyLogo from "/assets/companylogo.png";
import { Link, useLocation } from "react-router-dom";

const footerLinks = {
  services: {
    title: "Courses",
    links: [
      {
        label: "Product Management Program",
        url: "/courses/product-management",
      },
      { label: "Data Analytics Program", url: "/courses/data-analytics" },
      { label: "No-Code Development", url: "/courses/no-code-tool-program" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", url: "/about-us" },
      { label: "Blog", url: "/blogs" },
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms & Conditions", url: "/terms-and-conditions" },
      { label: "Refund Policy", url: "/refund-policy" },
      { label: "XSAT", url: "/xsat" },
    ],
  },
  social: {
    title: "Social",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/accelerator-x/",
      },
      { label: "Instagram", url: "https://www.instagram.com/acceleratorxco/" },
      {
        label: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61566261154591",
      },
    ],
  },
  contact: {
    title: "Contact Us",
    links: [
      { label: "support@acceleratorx.co", url: "mailto:support@acceleratorx.co" },
      { label: "+91 9916859555", url: "tel:+919916859555" },
      { label: "L367, 5th Main Road, 6th Sector, HSR Layout, Bangalore, KA 560102, India", url: "https://maps.app.goo.gl/PPSRGZyAgWkqUJ6E8" },
    ],
  },
};

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    const sitesealContainer = document.getElementById("siteseal");

    if (location.pathname === "/") {
      // Add the site seal script dynamically for the home page
      if (sitesealContainer && !document.getElementById("siteseal-script")) {
        const script = document.createElement("script");
        script.id = "siteseal-script";
        script.async = true;
        script.type = "text/javascript";
        script.src =
          "https://seal.starfieldtech.com/getSeal?sealID=I0Pkklr2oFJr6LRUc174f6BxE8hDE1T0lghkh2Wng6oca8kd7FoaY1IUHwLT";
        sitesealContainer.appendChild(script);
      }
    } else {
      // Remove the script on other pages
      const script = document.getElementById("siteseal-script");
      if (script) {
        script.remove();
      }
    }
  }, [location]);

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
          {/* Logo and Brand */}
          <div className="md:col-span-2">
            <div className="flex items-start">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={companyLogo}
                  alt="company logo"
                  className="w-auto h-14 object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className={`${key === 'contact' ? 'md:col-span-4' : 'md:col-span-2'}`}>
              <h3 className="font-semibold text-white mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="hover:text-white transition-colors inline-block"
                      style={{ 
                        maxWidth: key === 'contact' ? '300px' : 'none',
                        lineHeight: '1.5'
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Site Seal Section */}
        <div id="siteseal" className="flex justify-center items-center mt-10">
          <span id="siteseal">
            <script
              async
              type="text/javascript"
              src="https://seal.starfieldtech.com/getSeal?sealID=I0Pkklr2oFJr6LRUc174f6BxE8hDE1T0lghkh2Wng6oca8kd7FoaY1IUHwLT"
            ></script>
          </span>
        </div>
      </div>
    </footer>
  );
}
