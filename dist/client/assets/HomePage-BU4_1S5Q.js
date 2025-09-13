import { e as createLucideIcon, j as jsxRuntimeExports, u as useNavigate, r as reactExports, m as m$1, i as useCourseContext, S as SEO } from "./main-Ct9V9NA-.js";
import { Z as Zap } from "./zap-DR89ksTn.js";
import { A as ArrowRight } from "./arrow-right-Da_mgZbD.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C1ohNEfT.js";
import { U as Users } from "./users-BvbW8Gje.js";
import { L as Loader } from "./loader-BugJEp7D.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Maximize2 = createLucideIcon("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wand2 = createLucideIcon("Wand2", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
      key: "1bcowg"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
]);
const FeatureCard = ({
  feature
  // index,
}) => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex-none w-full md:w-[300px] snap-center",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[400px] p-6 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 border-r-2 border-b-2 border-r-blue-500/20 border-b-blue-500/20 transition-colors group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-blue-500/10 text-blue-400", children: feature.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white", children: feature.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mb-6 line-clamp-4", children: feature.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-16 h-48 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full text-blue-500/50 group-hover:text-blue-400/50 transition-colors", children: feature.image }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => navigate(feature.path),
            className: "absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors text-sm font-medium",
            children: [
              "Learn More",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" })
      ] })
    },
    feature.title
  );
};
const features = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "w-8 h-8" }),
    title: "Product Management",
    description: "Our program empowers you to lead with data-driven insights and real-world strategies, making complex product management accessible. Gain hands-on experience in crafting products that resonate with users and drive measurable growth.",
    image: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full", viewBox: "0 0 200 200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "pattern",
        {
          id: "grid",
          width: "20",
          height: "20",
          patternUnits: "userSpaceOnUse",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M 20 0 L 0 0 0 20",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "0.5",
              strokeOpacity: "0.1"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "200", fill: "url(#grid)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "g",
        {
          stroke: "currentColor",
          fill: "none",
          strokeWidth: "1.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M100 50L150 100L100 150L50 100Z"
              }
            ),
            [
              { cx: 70, cy: 70, delay: 0 },
              { cx: 130, cy: 70, delay: 0.5 },
              { cx: 130, cy: 130, delay: 1 },
              { cx: 70, cy: 130, delay: 1.5 }
            ].map((circle, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: circle.cx,
                cy: circle.cy,
                r: "20"
              },
              index
            )),
            [
              { cx: 70, cy: 70, delay: 0 },
              { cx: 130, cy: 70, delay: 0.5 },
              { cx: 130, cy: 130, delay: 1 },
              { cx: 70, cy: 130, delay: 1.5 }
            ].map((dot, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: dot.cx,
                cy: dot.cy,
                r: "3",
                fill: "currentColor"
              },
              `dot-${index}`
            ))
          ]
        }
      )
    ] }),
    path: "/courses/product-management"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8" }),
    title: "Data Analytics",
    description: "Unlock the power of data to drive product success. This program equips you with essential analytics skills and deep insights into product metrics, user behavior, and retention strategies, preparing you to make impactful product decisions.",
    image: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full", viewBox: "0 0 200 200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "pattern",
        {
          id: "grid2",
          width: "20",
          height: "20",
          patternUnits: "userSpaceOnUse",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M 20 0 L 0 0 0 20",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "0.5",
              strokeOpacity: "0.1"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "200", fill: "url(#grid2)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "g",
        {
          stroke: "currentColor",
          fill: "none",
          strokeWidth: "1.5",
          children: [
            [60, 45, 30].map((radius, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: "100",
                cy: "100",
                r: radius
              },
              `circle-${index}`
            )),
            [0, 60, 120, 180, 240, 300].map((angle, index) => {
              const x = 100 + 60 * Math.cos(angle * Math.PI / 180);
              const y2 = 100 + 60 * Math.sin(angle * Math.PI / 180);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: x,
                    cy: y2,
                    r: "3",
                    fill: "currentColor"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "100",
                    y1: "100",
                    x2: x,
                    y2
                  }
                )
              ] }, `orbit-${index}`);
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: "100",
                cy: "100",
                r: "4",
                fill: "currentColor"
              }
            )
          ]
        }
      )
    ] }),
    path: "/courses/data-analytics"
  },
  // {
  //   icon: <Code2 className="w-8 h-8" />,
  //   title: "No Code Tools",
  //   description:
  //     "Master the art of building powerful applications without writing code. Learn to leverage modern no-code platforms to create scalable solutions, automate workflows, and bring your ideas to life faster than ever before.",
  //   image: (
  //     <svg className="w-full h-full" viewBox="0 0 200 200">
  //       <defs>
  //         <pattern
  //           id="grid3"
  //           width="20"
  //           height="20"
  //           patternUnits="userSpaceOnUse"
  //         >
  //           <path
  //             d="M 20 0 L 0 0 0 20"
  //             fill="none"
  //             stroke="currentColor"
  //             strokeWidth="0.5"
  //             strokeOpacity="0.1"
  //           />
  //         </pattern>
  //       </defs>
  //       <rect width="200" height="200" fill="url(#grid3)" />
  //       <g
  //         stroke="currentColor"
  //         fill="none"
  //         strokeWidth="1.5"
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ duration: 1 }}
  //       >
  //         {/* Puzzle pieces animation */}
  //         {[
  //           "M50,50 h40 v40 h-40 Z",
  //           "M110,50 h40 v40 h-40 Z",
  //           "M50,110 h40 v40 h-40 Z",
  //           "M110,110 h40 v40 h-40 Z",
  //         ].map((path, index) => (
  //           <path
  //             key={`puzzle-${index}`}
  //             d={path}
  //             initial={{ pathLength: 0, opacity: 0 }}
  //             animate={{ pathLength: 1, opacity: 1 }}
  //             transition={{
  //               duration: 1.5,
  //               delay: index * 0.3,
  //               repeat: Infinity,
  //               repeatType: "reverse",
  //               repeatDelay: 0.5,
  //             }}
  //           />
  //         ))}
  //         {/* Connecting lines */}
  //         {[
  //           "M90,70 h20",
  //           "M70,90 v20",
  //           "M130,90 v20",
  //           "M90,130 h20",
  //         ].map((path, index) => (
  //           <path
  //             key={`connection-${index}`}
  //             d={path}
  //             initial={{ pathLength: 0, opacity: 0 }}
  //             animate={{ pathLength: 1, opacity: [0, 1, 0] }}
  //             transition={{
  //               duration: 2,
  //               delay: index * 0.2,
  //               repeat: Infinity,
  //               repeatDelay: 0.5,
  //             }}
  //           />
  //         ))}
  //         {/* Animated dots at intersections */}
  //         {[
  //           { cx: 90, cy: 70 },
  //           { cx: 70, cy: 90 },
  //           { cx: 130, cy: 90 },
  //           { cx: 90, cy: 130 },
  //         ].map((pos, index) => (
  //           <circle
  //             key={`dot-${index}`}
  //             cx={pos.cx}
  //             cy={pos.cy}
  //             r="3"
  //             fill="currentColor"
  //             initial={{ scale: 0 }}
  //             animate={{ scale: [0, 1, 0] }}
  //             transition={{
  //               duration: 1.5,
  //               delay: index * 0.2,
  //               repeat: Infinity,
  //               repeatDelay: 0.5,
  //             }}
  //           />
  //         ))}
  //       </g>
  //     </svg>
  //   ),
  //   path: "/courses/no-code-tool-program",
  // },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wand2, { className: "w-8 h-8" }),
    title: "Generative AI",
    description: "Dive into the revolutionary world of Generative AI. Learn to harness the power of large language models, create AI-powered applications, and understand the principles behind neural networks that are reshaping the future of technology.",
    image: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full", viewBox: "0 0 200 200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "pattern",
        {
          id: "grid4",
          width: "20",
          height: "20",
          patternUnits: "userSpaceOnUse",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M 20 0 L 0 0 0 20",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "0.5",
              strokeOpacity: "0.1"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "200", fill: "url(#grid4)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "g",
        {
          stroke: "currentColor",
          fill: "none",
          strokeWidth: "1.5",
          children: [
            [
              [50, 60],
              [50, 100],
              [50, 140],
              [100, 80],
              [100, 120],
              [150, 100]
            ].map(([cx, cy], index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx,
                cy,
                r: "8"
              },
              `node-${index}`
            )),
            [
              [50, 60, 100, 80],
              [50, 60, 100, 120],
              [50, 100, 100, 80],
              [50, 100, 100, 120],
              [50, 140, 100, 80],
              [50, 140, 100, 120],
              [100, 80, 150, 100],
              [100, 120, 150, 100]
            ].map(([x1, y1, x2, y2], index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "line",
              {
                x1,
                y1,
                x2,
                y2
              },
              `connection-${index}`
            )),
            [
              [50, 60],
              [50, 100],
              [50, 140],
              [100, 80],
              [100, 120],
              [150, 100]
            ].map(([cx, cy], index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx,
                cy,
                r: "4",
                fill: "currentColor"
              },
              `pulse-${index}`
            ))
          ]
        }
      )
    ] }),
    path: "/courses/generative-ai"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wand2, { className: "w-8 h-8" }),
    title: "Advance Performance Marketing With AI",
    description: "Explore how AI transforms digital marketing by automating analytics, personalizing campaigns, and optimizing customer engagement through data-driven insights.",
    image: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full", viewBox: "0 0 200 200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "pattern",
        {
          id: "grid4",
          width: "20",
          height: "20",
          patternUnits: "userSpaceOnUse",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M 20 0 L 0 0 0 20",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "0.5",
              strokeOpacity: "0.1"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "200", fill: "url(#grid4)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "g",
        {
          children: [
            [
              { x: 20, initialHeight: 20, targetHeight: 60, delay: 0 },
              { x: 50, initialHeight: 30, targetHeight: 70, delay: 0.1 },
              { x: 80, initialHeight: 25, targetHeight: 55, delay: 0.2 },
              { x: 110, initialHeight: 35, targetHeight: 65, delay: 0.3 },
              { x: 140, initialHeight: 20, targetHeight: 50, delay: 0.4 }
            ].map(({ x, initialHeight, targetHeight, delay }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "rect",
              {
                x,
                width: "10",
                fill: "currentColor"
              },
              `bar-${index}`
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "polyline",
              {
                points: "25,110 55,100 85,115 115,105 145,120",
                stroke: "currentColor",
                fill: "none",
                strokeWidth: "1.5"
              }
            )
          ]
        }
      )
    ] }),
    path: "/courses/advance-performance-marketing-with-ai"
  }
];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "features",
      className: "relative min-h-screen bg-black py-20 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto py-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-white pb-2", children: [
                  "Explore Our",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text", children: "Courses" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg", children: "Master the skills that shape tomorrow's technology landscape" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row flex-nowrap gap-6 overflow-x-auto pb-4 snap-x snap-mandatory", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { feature, index }, feature.title)) })
        ] })
      ]
    }
  );
}
const companies = [
  { name: "Adobe", logo: "/assets/companyLogos/adobe.webp" },
  { name: "Walmart", logo: "/assets/companyLogos/walmart.webp" },
  { name: "HP", logo: "/assets/companyLogos/HP.webp" },
  { name: "Tracxn", logo: "/assets/companyLogos/TRACXN.webp" },
  { name: "PayU", logo: "/assets/companyLogos/PAY U.webp" },
  { name: "Cars24", logo: "/assets/companyLogos/CARS24.webp" },
  { name: "Pine Labs", logo: "/assets/companyLogos/pinelabs.webp" },
  { name: "Unacademy", logo: "/assets/companyLogos/Unacademy-Symbol.webp" },
  { name: "ANQ", logo: "/assets/companyLogos/anqfinance_logo.webp" },
  { name: "Showtime", logo: "/assets/companyLogos/Showtime.webp" },
  { name: "PeakMind", logo: "/assets/companyLogos/PEAKMIND.webp" },
  { name: "Junglee Games", logo: "/assets/companyLogos/jungle_games.webp" }
];
const LogoSlider = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center mb-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mx-auto border border-blue-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-blue-400" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-white mb-4", children: "Trusted by Industry Leaders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-blue-200/80 max-w-2xl mx-auto", children: "Join hands with companies worldwide that trust our resources." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:w-[100px] before:h-full before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-[100px] after:h-full after:bg-gradient-to-l after:from-black after:to-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex gap-8 logos-slide",
          children: [
            companies.map((company, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-shrink-0 w-[150px] h-[80px] bg-white/[0.03] rounded-xl flex items-center justify-center p-4 hover:bg-white/[0.06] transition-colors duration-300 border border-white/10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: company.logo,
                    alt: company.name,
                    className: "w-full h-full object-contain transition-transform duration-300 hover:scale-110",
                    loading: "lazy",
                    decoding: "async"
                  }
                )
              },
              index
            )),
            companies.slice(0, 5).map((company, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-shrink-0 w-[150px] h-[80px] bg-white/[0.03] rounded-xl flex items-center justify-center p-4 hover:bg-white/[0.06] transition-colors duration-300 border border-white/10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: company.logo,
                    alt: company.name,
                    className: "w-full h-full object-contain transition-transform duration-300 hover:scale-110",
                    loading: "lazy",
                    decoding: "async"
                  }
                )
              },
              `duplicate-${index}`
            ))
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-150px * ${companies.length}));
          }
        }

        .logos-slide {
          animation: slide 30s linear infinite;
          width: fit-content;
        }
      ` })
  ] });
};
function i(e, t, r, n) {
  return new (r || (r = Promise))((function(o, a) {
    function i2(e2) {
      try {
        c2(n.next(e2));
      } catch (e3) {
        a(e3);
      }
    }
    function u2(e2) {
      try {
        c2(n.throw(e2));
      } catch (e3) {
        a(e3);
      }
    }
    function c2(e2) {
      var t2;
      e2.done ? o(e2.value) : (t2 = e2.value, t2 instanceof r ? t2 : new r((function(e3) {
        e3(t2);
      }))).then(i2, u2);
    }
    c2((n = n.apply(e, [])).next());
  }));
}
function u(e, t) {
  var r, n, o, a, i2 = { label: 0, sent: function() {
    if (1 & o[0]) throw o[1];
    return o[1];
  }, trys: [], ops: [] };
  return a = { next: u2(0), throw: u2(1), return: u2(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u2(a2) {
    return function(u3) {
      return (function(a3) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; i2; ) try {
          if (r = 1, n && (o = 2 & a3[0] ? n.return : a3[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a3[1])).done) return o;
          switch (n = 0, o && (a3 = [2 & a3[0], o.value]), a3[0]) {
            case 0:
            case 1:
              o = a3;
              break;
            case 4:
              return i2.label++, { value: a3[1], done: false };
            case 5:
              i2.label++, n = a3[1], a3 = [0];
              continue;
            case 7:
              a3 = i2.ops.pop(), i2.trys.pop();
              continue;
            default:
              if (!(o = i2.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a3[0] && 2 !== a3[0])) {
                i2 = 0;
                continue;
              }
              if (3 === a3[0] && (!o || a3[1] > o[0] && a3[1] < o[3])) {
                i2.label = a3[1];
                break;
              }
              if (6 === a3[0] && i2.label < o[1]) {
                i2.label = o[1], o = a3;
                break;
              }
              if (o && i2.label < o[2]) {
                i2.label = o[2], i2.ops.push(a3);
                break;
              }
              o[2] && i2.ops.pop(), i2.trys.pop();
              continue;
          }
          a3 = t.call(e, i2);
        } catch (e2) {
          a3 = [6, e2], n = 0;
        } finally {
          r = o = 0;
        }
        if (5 & a3[0]) throw a3[1];
        return { value: a3[0] ? a3[1] : void 0, done: true };
      })([a2, u3]);
    };
  }
}
function c(e) {
  var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && "number" == typeof e.length) return { next: function() {
    return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
  } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function l(e, t) {
  var r = "function" == typeof Symbol && e[Symbol.iterator];
  if (!r) return e;
  var n, o, a = r.call(e), i2 = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; ) i2.push(n.value);
  } catch (e2) {
    o = { error: e2 };
  } finally {
    try {
      n && !n.done && (r = a.return) && r.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i2;
}
function s(e, t, r) {
  if (2 === arguments.length) for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
  return e.concat(n || Array.prototype.slice.call(t));
}
function f(e, t, r, n, o) {
  for (var a = [], f2 = 5; f2 < arguments.length; f2++) a[f2 - 5] = arguments[f2];
  return i(this, void 0, void 0, (function() {
    var i2, f3, h2, y2, v2, b2;
    return u(this, (function(u2) {
      switch (u2.label) {
        case 0:
          u2.trys.push([0, 12, 13, 14]), i2 = c(a), f3 = i2.next(), u2.label = 1;
        case 1:
          if (f3.done) return [3, 11];
          switch (h2 = f3.value, typeof h2) {
            case "string":
              return [3, 2];
            case "number":
              return [3, 4];
            case "function":
              return [3, 6];
          }
          return [3, 8];
        case 2:
          return [4, d(e, t, h2, r, n, o)];
        case 3:
          return u2.sent(), [3, 10];
        case 4:
          return [4, p(h2)];
        case 5:
          return u2.sent(), [3, 10];
        case 6:
          return [4, h2.apply(void 0, s([e, t, r, n, o], l(a), false))];
        case 7:
          return u2.sent(), [3, 10];
        case 8:
          return [4, h2];
        case 9:
          u2.sent(), u2.label = 10;
        case 10:
          return f3 = i2.next(), [3, 1];
        case 11:
          return [3, 14];
        case 12:
          return y2 = u2.sent(), v2 = { error: y2 }, [3, 14];
        case 13:
          try {
            f3 && !f3.done && (b2 = i2.return) && b2.call(i2);
          } finally {
            if (v2) throw v2.error;
          }
          return [7];
        case 14:
          return [2];
      }
    }));
  }));
}
function d(e, t, r, n, o, a) {
  return i(this, void 0, void 0, (function() {
    var i2, c2;
    return u(this, (function(u2) {
      switch (u2.label) {
        case 0:
          return i2 = e.textContent || "", c2 = (function(e2, t2) {
            var r2 = l(t2).slice(0);
            return s(s([], l(e2), false), [NaN], false).findIndex((function(e3, t3) {
              return r2[t3] !== e3;
            }));
          })(i2, r), [4, h(e, s(s([], l(v(i2, t, c2)), false), l(y(r, t, c2)), false), n, o, a)];
        case 1:
          return u2.sent(), [2];
      }
    }));
  }));
}
function p(e) {
  return i(this, void 0, void 0, (function() {
    return u(this, (function(t) {
      switch (t.label) {
        case 0:
          return [4, new Promise((function(t2) {
            return setTimeout(t2, e);
          }))];
        case 1:
          return t.sent(), [2];
      }
    }));
  }));
}
function h(e, t, r, n, o) {
  return i(this, void 0, void 0, (function() {
    var a, i2, s2, f2, d2, h2, y2, v2, b2, m2, w, g, x;
    return u(this, (function(S) {
      switch (S.label) {
        case 0:
          if (a = t, o) {
            for (i2 = 0, s2 = 1; s2 < t.length; s2++) if (f2 = l([t[s2 - 1], t[s2]], 2), d2 = f2[0], (h2 = f2[1]).length > d2.length || "" === h2) {
              i2 = s2;
              break;
            }
            a = t.slice(i2, t.length);
          }
          S.label = 1;
        case 1:
          S.trys.push([1, 6, 7, 8]), y2 = c((function(e2) {
            var t2, r2, n2, o2, a2, i3, l2;
            return u(this, (function(s3) {
              switch (s3.label) {
                case 0:
                  t2 = function(e3) {
                    return u(this, (function(t3) {
                      switch (t3.label) {
                        case 0:
                          return [4, { op: function(t4) {
                            return requestAnimationFrame((function() {
                              return t4.textContent = e3;
                            }));
                          }, opCode: function(t4) {
                            var r3 = t4.textContent || "";
                            return "" === e3 || r3.length > e3.length ? "DELETE" : "WRITING";
                          } }];
                        case 1:
                          return t3.sent(), [2];
                      }
                    }));
                  }, s3.label = 1;
                case 1:
                  s3.trys.push([1, 6, 7, 8]), r2 = c(e2), n2 = r2.next(), s3.label = 2;
                case 2:
                  return n2.done ? [3, 5] : (o2 = n2.value, [5, t2(o2)]);
                case 3:
                  s3.sent(), s3.label = 4;
                case 4:
                  return n2 = r2.next(), [3, 2];
                case 5:
                  return [3, 8];
                case 6:
                  return a2 = s3.sent(), i3 = { error: a2 }, [3, 8];
                case 7:
                  try {
                    n2 && !n2.done && (l2 = r2.return) && l2.call(r2);
                  } finally {
                    if (i3) throw i3.error;
                  }
                  return [7];
                case 8:
                  return [2];
              }
            }));
          })(a)), v2 = y2.next(), S.label = 2;
        case 2:
          return v2.done ? [3, 5] : (b2 = v2.value, m2 = "WRITING" === b2.opCode(e) ? r + r * (Math.random() - 0.5) : n + n * (Math.random() - 0.5), b2.op(e), [4, p(m2)]);
        case 3:
          S.sent(), S.label = 4;
        case 4:
          return v2 = y2.next(), [3, 2];
        case 5:
          return [3, 8];
        case 6:
          return w = S.sent(), g = { error: w }, [3, 8];
        case 7:
          try {
            v2 && !v2.done && (x = y2.return) && x.call(y2);
          } finally {
            if (g) throw g.error;
          }
          return [7];
        case 8:
          return [2];
      }
    }));
  }));
}
function y(e, t, r) {
  var n, o;
  return void 0 === r && (r = 0), u(this, (function(a) {
    switch (a.label) {
      case 0:
        n = t(e), o = n.length, a.label = 1;
      case 1:
        return r < o ? [4, n.slice(0, ++r).join("")] : [3, 3];
      case 2:
        return a.sent(), [3, 1];
      case 3:
        return [2];
    }
  }));
}
function v(e, t, r) {
  var n, o;
  return void 0 === r && (r = 0), u(this, (function(a) {
    switch (a.label) {
      case 0:
        n = t(e), o = n.length, a.label = 1;
      case 1:
        return o > r ? [4, n.slice(0, --o).join("")] : [3, 3];
      case 2:
        return a.sent(), [3, 1];
      case 3:
        return [2];
    }
  }));
}
var b = "index-module_type__E-SaG";
!(function(e, t) {
  void 0 === t && (t = {});
  var r = t.insertAt;
  if ("undefined" != typeof document) {
    var n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
})(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
var m = reactExports.memo(reactExports.forwardRef((function(o, a) {
  var i2 = o.sequence, u2 = o.repeat, c2 = o.className, d2 = o.speed, p2 = void 0 === d2 ? 40 : d2, h2 = o.deletionSpeed, y2 = o.omitDeletionAnimation, v2 = void 0 !== y2 && y2, m2 = o.preRenderFirstString, w = void 0 !== m2 && m2, g = o.wrapper, x = void 0 === g ? "span" : g, S = o.splitter, E = void 0 === S ? function(e) {
    return s([], l(e), false);
  } : S, _ = o.cursor, k = void 0 === _ || _, O = o.style, T = (function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var o2 = 0;
      for (n = Object.getOwnPropertySymbols(e); o2 < n.length; o2++) t.indexOf(n[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o2]) && (r[n[o2]] = e[n[o2]]);
    }
    return r;
  })(o, ["sequence", "repeat", "className", "speed", "deletionSpeed", "omitDeletionAnimation", "preRenderFirstString", "wrapper", "splitter", "cursor", "style"]), A = T["aria-label"], C = T["aria-hidden"], N = T.role;
  h2 || (h2 = p2);
  var P = new Array(2).fill(40);
  [p2, h2].forEach((function(e, t) {
    switch (typeof e) {
      case "number":
        P[t] = Math.abs(e - 100);
        break;
      case "object":
        var r = e.type, n = e.value;
        if ("number" != typeof n) break;
        if ("keyStrokeDelayInMs" === r) P[t] = n;
    }
  }));
  var j, I, G, D, M, R, q = P[0], F = P[1], B = (function(e, r) {
    void 0 === r && (r = null);
    var o2 = reactExports.useRef(r);
    return reactExports.useEffect((function() {
      e && ("function" == typeof e ? e(o2.current) : e.current = o2.current);
    }), [e]), o2;
  })(a), Q = b;
  j = c2 ? "".concat(k ? Q + " " : "").concat(c2) : k ? Q : "", I = reactExports.useRef((function() {
    var e, t = i2;
    u2 === 1 / 0 ? e = f : "number" == typeof u2 && (t = Array(1 + u2).fill(i2).flat());
    var r = e ? s(s([], l(t), false), [e], false) : s([], l(t), false);
    return f.apply(void 0, s([B.current, E, q, F, v2], l(r), false)), function() {
      B.current;
    };
  })), G = reactExports.useRef(), D = reactExports.useRef(false), M = reactExports.useRef(false), R = l(reactExports.useState(0), 2)[1], D.current && (M.current = true), reactExports.useEffect((function() {
    return D.current || (G.current = I.current(), D.current = true), R((function(e) {
      return e + 1;
    })), function() {
      M.current && G.current && G.current();
    };
  }), []);
  var W = x, L = w ? i2.find((function(e) {
    return "string" == typeof e;
  })) || "" : null;
  return m$1.createElement(W, { "aria-hidden": C, "aria-label": A, role: N, style: O, className: j, children: A ? m$1.createElement("span", { "aria-hidden": "true", ref: B, children: L }) : L, ref: A ? void 0 : B });
})), (function(e, t) {
  return true;
}));
function Hero() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
        style: { backgroundImage: 'url("/hero-bg.webp")' },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,119,242,0.1),transparent)] animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#000_70%,transparent_110%)] opacity-10" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col-reverse items-center justify-center gap-12 py-12 lg:flex-row lg:justify-between lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full lg:w-1/2 space-y-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-4 -top-4 h-20 w-20 rounded-full bg-blue-500/20 blur-3xl animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                m,
                {
                  sequence: ["Build", 1e3, "Lead", 1e3, "Succeed", 1e3],
                  wrapper: "h1",
                  speed: 50,
                  className: "relative bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-transparent drop-shadow",
                  repeat: Infinity,
                  cursor: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-lg text-gray-100 leading-relaxed", children: "Transform your ideas into action. Accelerating ideas into impactful solutions that shape the future." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: "group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all",
                  "aria-label": "Explore Courses",
                  children: [
                    "Explore Courses",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "ml-2 h-5 w-5 transition-transform group-hover:translate-x-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => navigate("/xsat"),
                  className: "group inline-flex items-center justify-center rounded-lg border border-yellow-400/40 bg-black/50 px-8 py-3 text-yellow-400 backdrop-blur-sm hover:border-yellow-400/60 transition-all",
                  "aria-label": "More About XSAT",
                  children: [
                    "More About XSAT",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "ml-2 h-5 w-5 transition-transform group-hover:translate-x-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" })
                      }
                    )
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full lg:w-1/2 flex flex-col items-center justify-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/n8n-commingsoon.webp",
                alt: "/n8n Coming Soon",
                className: "w-full max-w-md rounded-xl shadow-2xl object-cover",
                loading: "eager",
                decoding: "async",
                width: 600,
                height: 400,
                fetchPriority: "high"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://docs.google.com/forms/d/e/1FAIpQLSeJxgV3bMDrcy4m8bGdEIHqR0GLZrvVeZ5QF0itPIQqgDaC2g/viewform?usp=sharing",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                className: "mt-8 px-10 py-4 text-lg font-semibold text-white bg-[#1a71f6] hover:bg-[#1558b0] rounded-xl shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 w-[90vw] max-w-xs text-center",
                children: "Join the Waitlist"
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
const HomePage = () => {
  const { setSelectedCourse } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse(null);
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LogoSlider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithAbouv, {})
    ] })
  ] });
};
export {
  HomePage as default
};
