import React from "react";
import companyLogo from "/companylogo-new.webp";
import { Link} from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";

type FooterLink =
  | { label: string; url: string }
  | { label: string; url: string; icon?: React.ReactNode };

const footerLinks: {
  [key: string]: {
    title: string;
    links: FooterLink[];
  };
} = {
  services: {
    title: "Courses",
    links: [
      {
        label: "Product Management Program",
        url: "/courses/product-management",
      },
      { label: "Data Analytics Program", url: "/courses/data-analytics" },
      // { label: "No-Code Development", url: "/courses/no-code-tool-program" },
      { label: "Gen AI", url: "/courses/generative-ai" },
      {
        label: "Advance Performance Marketing With AI",
        url: "/courses/advance-performance-marketing-with-ai",
      },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", url: "/about-us" },
      // { label: "Blog", url: "/blogs" },
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms & Conditions", url: "/terms-and-conditions" },
      { label: "Refund Policy", url: "/refund-policy" },
      { label: "XSAT", url: "/xsat" },
    ],
  },
  social: {
    title: "Connect With Us",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/acceleratorxorg/",
        icon: <Linkedin className="w-5 h-5" />,
      },
      {
        label: "Youtube",
        url: "https://youtube.com/@acceleratorxorg?si=zmpSEhxhGquISbuO",
        icon: <Youtube className="w-5 h-5" />,
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/acceleratorxorg",
        icon: <Instagram className="w-5 h-5" />,
      },
      {
        label: "Twitter",
        url: "https://x.com/acceleratorxorg?t=zCxLI2yiMQA2voLB8ntuMw&s=08",
        icon: <Twitter className="w-5 h-5" />,
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/acceleratorxorg/",
        icon: <Facebook className="w-5 h-5" />,
      },
    ],
  },
  contact: {
    title: "Contact Us",
    links: [
      {
        label: "support@acceleratorx.co",
        url: "mailto:support@acceleratorx.co",
        icon: <Mail className="w-5 h-5" />,
      },
      {
        label: "+91 9916859555",
        url: "tel:+919916859555",
        icon: <Phone className="w-5 h-5" />,
      },
      {
        label:
          "L367, 5th Main Road, 6th Sector, HSR Layout, Bangalore, KA 560102, India",
        url: "https://maps.app.goo.gl/PPSRGZyAgWkqUJ6E8",
        icon: <MapPin className="w-5 h-5" />,
      },
    ],
  },
};

export default function Footer() {
  // const location = useLocation();

  // useEffect(() => {
  //   const sitesealContainer = document.getElementById("siteseal");
  //   if (location.pathname === "/") {
  //     if (sitesealContainer && !document.getElementById("siteseal-script")) {
  //       const script = document.createElement("script");
  //       script.id = "siteseal-script";
  //       script.async = true;
  //       script.type = "text/javascript";
  //       script.src =
  //         "https://seal.starfieldtech.com/getSeal?sealID=I0Pkklr2oFJr6LRUc174f6BxE8hDE1T0lghkh2Wng6oca8kd7FoaY1IUHwLT";
  //       sitesealContainer.appendChild(script);
  //     }
  //   } else {
  //     const script = document.getElementById("siteseal-script");
  //     if (script) {
  //       script.remove();
  //     }
  //   }
  // }, [location]);

  return (
    <footer className="bg-gradient-to-b from-[#0B1120] to-[#070914] text-gray-400 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
          {/* Company Info Section */}
          <div className="md:col-span-4 space-y-8">
            <Link to="/" className="inline-block">
              <img
                src={companyLogo}
                alt="AcceleratorX logo"
                className="w-auto h-14 object-contain text-left"
              />
            </Link>
            <p className="text-gray-400 max-w-md">
              Empowering professionals with industry-relevant skills through
              expert-led programs in Product Management, Data Analytics &
              Generative AI.
            </p>
            {/* Social Media Icons */}
            <div className="pt-4">
              <h3 className="font-semibold text-white mb-4 text-lg">
                Connect With Us
              </h3>
              <div className="flex items-center gap-4">
                {footerLinks.social.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="bg-white/5 p-2.5 rounded-lg hover:bg-blue-500/20 transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      {link.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            {["services", "company"].map((key) => (
              <div key={key}>
                <h3 className="font-semibold text-white mb-4 text-lg">
                  {footerLinks[key].title}
                </h3>
                <ul className="space-y-3">
                  {footerLinks[key].links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.url}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4">
            <h3 className="font-semibold text-white mb-4 text-lg">
              {footerLinks.contact.title}
            </h3>
            <ul className="space-y-4">
              {footerLinks.contact.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="mt-1 text-blue-400 flex-shrink-0">
                      {link.icon}
                    </span>
                    <span className="group-hover:text-white">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} AcceleratorX. All rights
              reserved.
            </p>
            {/* <div id="siteseal" className="flex items-center space-x-4"></div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
