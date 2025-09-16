import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Maximize2, Zap, Wand2, ArrowRight, Users, Loader } from "lucide-react";
import { useEffect, Suspense } from "react";
import { useNavigate } from "react-router";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CaQ6drdW.js";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import { TypeAnimation } from "react-type-animation";
import "react-dom/server";
import "@remix-run/router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "react-dom";
import "react-icons/pi";
const FeatureCard = ({
  feature
  // index,
}) => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex-none w-full md:w-[300px] snap-center",
      children: /* @__PURE__ */ jsxs("div", { className: "relative h-[400px] p-6 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 border-r-2 border-b-2 border-r-blue-500/20 border-b-blue-500/20 transition-colors group", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-blue-500/10 text-blue-400", children: feature.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white", children: feature.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-6 line-clamp-4", children: feature.description }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-16 h-48 p-6", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full text-blue-500/50 group-hover:text-blue-400/50 transition-colors", children: feature.image }) }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => navigate(feature.path),
            className: "absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors text-sm font-medium",
            children: [
              "Learn More",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" })
      ] })
    },
    feature.title
  );
};
const features = [
  {
    icon: /* @__PURE__ */ jsx(Maximize2, { className: "w-8 h-8" }),
    title: "Product Management",
    description: "Our program empowers you to lead with data-driven insights and real-world strategies, making complex product management accessible. Gain hands-on experience in crafting products that resonate with users and drive measurable growth.",
    image: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 200 200", children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "pattern",
        {
          id: "grid",
          width: "20",
          height: "20",
          patternUnits: "userSpaceOnUse",
          children: /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("rect", { width: "200", height: "200", fill: "url(#grid)" }),
      /* @__PURE__ */ jsxs(
        "g",
        {
          stroke: "currentColor",
          fill: "none",
          strokeWidth: "1.5",
          children: [
            /* @__PURE__ */ jsx(
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
            ].map((circle, index) => /* @__PURE__ */ jsx(
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
            ].map((dot, index) => /* @__PURE__ */ jsx(
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
    icon: /* @__PURE__ */ jsx(Zap, { className: "w-8 h-8" }),
    title: "Data Analytics",
    description: "Unlock the power of data to drive product success. This program equips you with essential analytics skills and deep insights into product metrics, user behavior, and retention strategies, preparing you to make impactful product decisions.",
    image: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 200 200", children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "pattern",
        {
          id: "grid2",
          width: "20",
          height: "20",
          patternUnits: "userSpaceOnUse",
          children: /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("rect", { width: "200", height: "200", fill: "url(#grid2)" }),
      /* @__PURE__ */ jsxs(
        "g",
        {
          stroke: "currentColor",
          fill: "none",
          strokeWidth: "1.5",
          children: [
            [60, 45, 30].map((radius, index) => /* @__PURE__ */ jsx(
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
              const y = 100 + 60 * Math.sin(angle * Math.PI / 180);
              return /* @__PURE__ */ jsxs("g", { children: [
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    cx: x,
                    cy: y,
                    r: "3",
                    fill: "currentColor"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "line",
                  {
                    x1: "100",
                    y1: "100",
                    x2: x,
                    y2: y
                  }
                )
              ] }, `orbit-${index}`);
            }),
            /* @__PURE__ */ jsx(
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
    icon: /* @__PURE__ */ jsx(Wand2, { className: "w-8 h-8" }),
    title: "Generative AI",
    description: "Dive into the revolutionary world of Generative AI. Learn to harness the power of large language models, create AI-powered applications, and understand the principles behind neural networks that are reshaping the future of technology.",
    image: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 200 200", children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "pattern",
        {
          id: "grid4",
          width: "20",
          height: "20",
          patternUnits: "userSpaceOnUse",
          children: /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("rect", { width: "200", height: "200", fill: "url(#grid4)" }),
      /* @__PURE__ */ jsxs(
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
            ].map(([cx, cy], index) => /* @__PURE__ */ jsx(
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
            ].map(([x1, y1, x2, y2], index) => /* @__PURE__ */ jsx(
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
            ].map(([cx, cy], index) => /* @__PURE__ */ jsx(
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
    icon: /* @__PURE__ */ jsx(Wand2, { className: "w-8 h-8" }),
    title: "Advance Performance Marketing With AI",
    description: "Explore how AI transforms digital marketing by automating analytics, personalizing campaigns, and optimizing customer engagement through data-driven insights.",
    image: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 200 200", children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "pattern",
        {
          id: "grid4",
          width: "20",
          height: "20",
          patternUnits: "userSpaceOnUse",
          children: /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("rect", { width: "200", height: "200", fill: "url(#grid4)" }),
      /* @__PURE__ */ jsxs(
        "g",
        {
          children: [
            [
              { x: 20, initialHeight: 20, targetHeight: 60, delay: 0 },
              { x: 50, initialHeight: 30, targetHeight: 70, delay: 0.1 },
              { x: 80, initialHeight: 25, targetHeight: 55, delay: 0.2 },
              { x: 110, initialHeight: 35, targetHeight: 65, delay: 0.3 },
              { x: 140, initialHeight: 20, targetHeight: 50, delay: 0.4 }
            ].map(({ x, initialHeight, targetHeight, delay }, index) => /* @__PURE__ */ jsx(
              "rect",
              {
                x,
                width: "10",
                fill: "currentColor"
              },
              `bar-${index}`
            )),
            /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "features",
      className: "relative min-h-screen bg-black py-20 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" }),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto py-12", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-white pb-2", children: [
                  "Explore Our",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text", children: "Courses" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg", children: "Master the skills that shape tomorrow's technology landscape" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row flex-nowrap gap-6 overflow-x-auto pb-4 snap-x snap-mandatory", children: features.map((feature, index) => /* @__PURE__ */ jsx(FeatureCard, { feature, index }, feature.title)) })
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
  return /* @__PURE__ */ jsxs("div", { className: "bg-black", children: [
    /* @__PURE__ */ jsx("section", { className: "py-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-3", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "text-center mb-8",
          children: [
            /* @__PURE__ */ jsx("div", { className: "inline-block mb-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mx-auto border border-blue-500/20", children: /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-blue-400" }) }) }),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-white mb-4", children: "Trusted by Industry Leaders" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-blue-200/80 max-w-2xl mx-auto", children: "Join hands with companies worldwide that trust our resources." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:w-[100px] before:h-full before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-[100px] after:h-full after:bg-gradient-to-l after:from-black after:to-transparent", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex gap-8 logos-slide",
          children: [
            companies.map((company, index) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex-shrink-0 w-[150px] h-[80px] bg-white/[0.03] rounded-xl flex items-center justify-center p-4 hover:bg-white/[0.06] transition-colors duration-300 border border-white/10",
                children: /* @__PURE__ */ jsx(
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
            companies.slice(0, 5).map((company, index) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex-shrink-0 w-[150px] h-[80px] bg-white/[0.03] rounded-xl flex items-center justify-center p-4 hover:bg-white/[0.06] transition-colors duration-300 border border-white/10",
                children: /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx("style", { children: `
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
function Hero() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
        style: { backgroundImage: 'url("/hero-bg.webp")' },
        children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60" })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,119,242,0.1),transparent)] animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#000_70%,transparent_110%)] opacity-10" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-12", children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col-reverse items-center justify-center gap-12 py-12 lg:flex-row lg:justify-between lg:py-20", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "w-full lg:w-1/2 space-y-8",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -left-4 -top-4 h-20 w-20 rounded-full bg-blue-500/20 blur-3xl animate-pulse" }),
              /* @__PURE__ */ jsx(
                TypeAnimation,
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
            /* @__PURE__ */ jsx("p", { className: "max-w-xl text-lg text-gray-100 leading-relaxed", children: "Transform your ideas into action. Accelerating ideas into impactful solutions that shape the future." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const section = document.getElementById("features");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  },
                  className: "group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all",
                  "aria-label": "Explore Courses",
                  children: [
                    "Explore Courses",
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "ml-2 h-5 w-5 transition-transform group-hover:translate-x-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => navigate("/xsat"),
                  className: "group inline-flex items-center justify-center rounded-lg border border-yellow-400/40 bg-black/50 px-8 py-3 text-yellow-400 backdrop-blur-sm hover:border-yellow-400/60 transition-all",
                  "aria-label": "More About XSAT",
                  children: [
                    "More About XSAT",
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "ml-2 h-5 w-5 transition-transform group-hover:translate-x-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" })
                      }
                    )
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "w-full lg:w-1/2 flex flex-col items-center justify-center",
          children: [
            /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsx(
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
  useEffect(() => {
    setSelectedCourse(null);
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx(Loader, {}), children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(LogoSlider, {}),
      /* @__PURE__ */ jsx(Features, {}),
      /* @__PURE__ */ jsx(HeroWithAbouv, {})
    ] })
  ] });
};
export {
  HomePage as default
};
