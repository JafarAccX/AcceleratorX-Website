import React from "react";
import companyLogo from "/assets/companylogo.png";
import { Link } from "react-router-dom";

const footerLinks = {
  services: {
    title: "Courses",
    links: [
      {
        label: "Product Management Program",
        url: "/courses/product-management",
      },
      { label: "Data Analytics Program", url: "/courses/data-analytics" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", url: "/aboutus" },
      { label: "Blog", url: "/blogs" },
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms of Use", url: "/terms-of-use" },
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
      </div>
    </footer>
  );
}
