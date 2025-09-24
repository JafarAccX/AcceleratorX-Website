import { f as createLucideIcon, j as jsxRuntimeExports, r as reactExports } from "./main-DeWmku3x.js";
import { m as motion } from "./proxy-CanaJn_u.js";
import { L as Linkedin } from "./linkedin-CbAimOvB.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Quote = createLucideIcon("Quote", [
  [
    "path",
    {
      d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
      key: "4rm80e"
    }
  ],
  [
    "path",
    {
      d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
      key: "10za9r"
    }
  ]
]);
const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = reactExports.useState("");
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: displayText });
};
const LeaderCard = ({
  name,
  role,
  image,
  linkedin,
  quote,
  title
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  motion.div,
  {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center relative",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 blur-3xl opacity-30 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: image,
              alt: name,
              className: "w-full h-[320px] object-contain transform transition-transform duration-500 group-hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-2xl font-bold mb-2", children: name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-semibold mb-4", children: role }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: linkedin,
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                className: "inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors bg-blue-500/10 px-4 py-2 rounded-full",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Connect on LinkedIn" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 text-blue-500 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-20 h-20" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-gray-300 backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-blue-500/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl font-semibold text-blue-400 mb-6", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed italic", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypewriterEffect, { text: quote }) })
        ] })
      ] })
    ]
  }
);
const Team = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 bg-black min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float-delayed" }),
      [...Array(20)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute w-1 h-1 bg-blue-500 rounded-full animate-float",
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.2
          }
        },
        i
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          className: "text-5xl font-bold text-white mb-4 text-center",
          children: [
            "Meet Our Te",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "am" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          className: "text-gray-300 text-lg text-center mb-16 max-w-2xl mx-auto",
          children: "Our diverse team at AcceleratorX is united by a passion for innovation in EdTech, dedicated to building a better future."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LeaderCard,
          {
            name: "Shahid Naseem",
            role: "Founder & CEO",
            image: "/assets/founder/Sahid.webp",
            linkedin: "https://www.linkedin.com/in/shahid-naseem-a16220144",
            title: "Words from our Founder",
            quote: "Innovation in education is not just about technology; it's about creating opportunities that transform lives and shape futures. At AcceleratorX, we're committed to empowering the next generation with the tools and knowledge they need to succeed in an ever-evolving digital world."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LeaderCard,
          {
            name: "Misba Muskaan",
            role: "Director",
            image: "/assets/founder/Muskaan.webp",
            linkedin: "https://www.linkedin.com/in/misba-muskaan-560567254",
            title: "Words from our Director",
            quote: "At AcceleratorX, we believe in nurturing talent and fostering an environment where innovation thrives. Our mission is to bridge the gap between education and industry, creating pathways for success in the digital age."
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mt-8",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-400/30 blur-3xl opacity-30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-2xl overflow-hidden border border-blue-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-180 h-144 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/group.webp",
                  alt: "AcceleratorX Team",
                  className: "w-full h-full object-cover transform transition-transform duration-700"
                }
              ) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2 },
                  className: "mt-6 text-center px-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-2", children: "Our Team" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-gray-700 dark:text-gray-300", children: "The talented and diverse AcceleratorX Team" })
                  ]
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-slide" })
    ] })
  ] });
};
export {
  Team as default
};
