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
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Brand */}
          <div className="md:col-span-3">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={companyLogo}
                  alt="company logo"
                  className="w-auto h-14"
                />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="md:col-span-3">
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="hover:text-white transition-colors"
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
