import { e as createLucideIcon, j as jsxRuntimeExports, L as Link, h as companyLogo } from "./main-at0j2bC6.js";
import { M as Mail } from "./mail-DgJDQ7ek.js";
import { P as Phone } from "./phone-D3hbefJS.js";
import { M as MapPin } from "./map-pin-BHN2Ay2c.js";
import { L as Linkedin } from "./linkedin-JlMOz1sH.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Facebook = createLucideIcon("Facebook", [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Instagram = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Twitter = createLucideIcon("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Youtube = createLucideIcon("Youtube", [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
]);
const footerLinks = {
  services: {
    title: "Courses",
    links: [
      {
        label: "Product Management Program",
        url: "/courses/product-management"
      },
      { label: "Data Analytics Program", url: "/courses/data-analytics" },
      // { label: "No-Code Development", url: "/courses/no-code-tool-program" },
      { label: "Gen AI", url: "/courses/generative-ai" },
      {
        label: "Advance Performance Marketing With AI",
        url: "/courses/advance-performance-marketing-with-ai"
      }
    ]
  },
  company: {
    title: "Company",
    links: [
      { label: "About", url: "/about-us" },
      // { label: "Blog", url: "/blogs" },
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
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-5 h-5" })
      },
      {
        label: "Youtube",
        url: "https://youtube.com/@acceleratorxorg?si=zmpSEhxhGquISbuO",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "w-5 h-5" })
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/acceleratorxorg",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-5 h-5" })
      },
      {
        label: "Twitter",
        url: "https://x.com/acceleratorxorg?t=zCxLI2yiMQA2voLB8ntuMw&s=08",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "w-5 h-5" })
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/acceleratorxorg/",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-5 h-5" })
      }
    ]
  },
  contact: {
    title: "Contact Us",
    links: [
      {
        label: "support@acceleratorx.co",
        url: "mailto:support@acceleratorx.co",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5" })
      },
      {
        label: "+91 9916859555",
        url: "tel:+919916859555",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" })
      },
      {
        label: "L367, 5th Main Road, 6th Sector, HSR Layout, Bangalore, KA 560102, India",
        url: "https://maps.app.goo.gl/PPSRGZyAgWkqUJ6E8",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5" })
      }
    ]
  }
};
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-gradient-to-b from-[#0B1120] to-[#070914] text-gray-400 py-16 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: companyLogo,
              alt: "AcceleratorX logo",
              className: "w-auto h-14 object-contain text-left"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 max-w-md", children: "Empowering professionals with industry-relevant skills through expert-led programs in Product Management, Data Analytics & Generative AI." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white mb-4 text-lg", children: "Connect With Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: footerLinks.social.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: link.url,
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                className: "bg-white/5 p-2.5 rounded-lg hover:bg-blue-500/20 transition-all duration-300 group",
                "aria-label": link.label,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 group-hover:text-white transition-colors duration-300", children: link.icon })
              },
              link.label
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4 grid grid-cols-2 gap-8", children: ["services", "company"].map((key) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white mb-4 text-lg", children: footerLinks[key].title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: footerLinks[key].links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: link.url,
              className: "text-gray-400 hover:text-white transition-colors duration-300",
              children: link.label
            }
          ) }, link.label)) })
        ] }, key)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white mb-4 text-lg", children: footerLinks.contact.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: footerLinks.contact.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: link.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-blue-400 flex-shrink-0", children: link.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:text-white", children: link.label })
              ]
            }
          ) }, link.label)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 pt-8 border-t border-gray-800/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
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
