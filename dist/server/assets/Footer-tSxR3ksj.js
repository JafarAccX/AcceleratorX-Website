import { jsxs, jsx } from "react/jsx-runtime";
import { L as Link, c as companyLogo } from "../entry-server.js";
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram, Twitter, Facebook } from "lucide-react";
import "react";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "react-dom";
import "react-icons/pi";
import "framer-motion";
const footerLinks = {
  services: {
    title: "Courses",
    links: [
      {
        label: "AI Product Management",
        url: "/courses/product-management"
      },
      { label: "AI Data Analytics", url: "/courses/data-analytics" },
      // { label: "No-Code Development", url: "/courses/no-code-tool-program" },
      { label: "Generative AI", url: "/courses/generative-ai" },
      // {
      //   label: "AI Performance Marketing",
      //   url: "/courses/advance-performance-marketing-with-ai",
      // },
      { label: "AI Digital Marketing", url: "/courses/ai-digital-marketing" }
    ]
  },
  company: {
    title: "Company",
    links: [
      { label: "About", url: "/about-us" },
      { label: "Blog", url: "/blogs" },
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms & Conditions", url: "/terms-and-conditions" },
      { label: "Refund Policy", url: "/refund-policy" },
      { label: "XSAT", url: "/xsat" }
    ]
  },
  social: {
    title: "Connect With Us",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/acceleratorxorg/",
        icon: /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5" })
      },
      {
        label: "Youtube",
        url: "https://youtube.com/@acceleratorxorg?si=zmpSEhxhGquISbuO",
        icon: /* @__PURE__ */ jsx(Youtube, { className: "w-5 h-5" })
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/acceleratorxorg",
        icon: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" })
      },
      {
        label: "Twitter",
        url: "https://x.com/acceleratorxorg?t=zCxLI2yiMQA2voLB8ntuMw&s=08",
        icon: /* @__PURE__ */ jsx(Twitter, { className: "w-5 h-5" })
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/acceleratorxorg/",
        icon: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5" })
      }
    ]
  },
  contact: {
    title: "Contact Us",
    links: [
      {
        label: "support@acceleratorx.co",
        url: "mailto:support@acceleratorx.co",
        icon: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" })
      },
      {
        label: "+91 9916859555",
        url: "tel:+919916859555",
        icon: /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" })
      },
      {
        label: "L367, 5th Main Road, 6th Sector, HSR Layout, Bangalore, KA 560102, India",
        url: "https://maps.app.goo.gl/PPSRGZyAgWkqUJ6E8",
        icon: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" })
      }
    ]
  }
};
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-gradient-to-b from-[#0B1120] to-[#070914] text-gray-400 py-16 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 space-y-8", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: companyLogo,
              alt: "AcceleratorX company new logo - best product management courses",
              className: "w-auto h-14 object-contain text-left"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 max-w-md", children: "Advance your career with industry-driven programs in Data Analytics, Product                             Management, and Generative AI, designed by experts for real-world success." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-4", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-white mb-4 text-lg", children: "Connect With Us" }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: footerLinks.social.links.map((link) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: link.url,
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                className: "bg-white/5 p-2.5 rounded-lg hover:bg-blue-500/20 transition-all duration-300 group",
                "aria-label": link.label,
                title: link.label,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-gray-400 group-hover:text-white transition-colors duration-300", "aria-hidden": "true", children: link.icon }),
                  /* @__PURE__ */ jsx("span", { className: "sr-only", role: "text", children: link.label })
                ]
              },
              link.label
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-4 grid grid-cols-2 gap-8", children: ["services", "company"].map((key) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-white mb-4 text-lg", children: footerLinks[key].title }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: footerLinks[key].links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: link.url,
              className: "text-gray-400 hover:text-white transition-colors duration-300",
              children: link.label
            }
          ) }, link.label)) })
        ] }, key)) }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-white mb-4 text-lg", children: footerLinks.contact.title }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: footerLinks.contact.links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: link.url,
              target: "_blank",
              rel: "noopener noreferrer nofollow",
              className: "flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group",
              children: [
                /* @__PURE__ */ jsx("span", { className: "mt-1 text-blue-400 flex-shrink-0", children: link.icon }),
                /* @__PURE__ */ jsx("span", { className: "group-hover:text-white", children: link.label })
              ]
            }
          ) }, link.label)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 pt-8 border-t border-gray-800/50", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " AcceleratorX. All rights reserved."
      ] }) }) })
    ] })
  ] });
}
export {
  Footer as default
};
