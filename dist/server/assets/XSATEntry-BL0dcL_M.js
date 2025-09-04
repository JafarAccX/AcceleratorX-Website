import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Trophy, GraduationCap, TrendingUp, Users, Rocket, Minus, Plus, Sparkles, Target, Brain, Briefcase, BarChart2, Star, Loader } from "lucide-react";
import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCertificate } from "@tabler/icons-react";
import { S as SEO } from "../entry-server.js";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-dom";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-hot-toast";
import "axios";
import "react-icons/pi";
import "@tanstack/react-query";
const features = [
  {
    icon: /* @__PURE__ */ jsx(Trophy, { className: "w-8 h-8 text-cyan-400" }),
    title: "Test Your PM Skills",
    description: "Evaluate your aptitude in critical Product Management skills through our comprehensive assessment."
  },
  {
    icon: /* @__PURE__ */ jsx(GraduationCap, { className: "w-8 h-8 text-purple-400" }),
    title: "Win Full Scholarships",
    description: "Win scholarships worth up to 100% for our flagship Product Management certification program."
  },
  {
    icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-8 h-8 text-pink-400" }),
    title: "Accelerate Your Career",
    description: "Gain recognition, industry certificates, and exclusive access to top mentors."
  },
  {
    icon: /* @__PURE__ */ jsx(IconCertificate, { className: "w-8 h-8 text-blue-400" }),
    title: "Earn Recognition",
    description: "Stand out in the competitive product management industry with X-SAT recognition."
  },
  {
    icon: /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-emerald-400" }),
    title: "Access Top Mentors",
    description: "Connect with mentors from companies like Tata, Walmart, and PayPal to guide your PM journey."
  },
  {
    icon: /* @__PURE__ */ jsx(Rocket, { className: "w-8 h-8 text-orange-400" }),
    title: "Shape Your Future",
    description: "Seize the opportunity to launch your product management career with X-SAT."
  }
];
const XSATAbout = () => {
  return /* @__PURE__ */ jsxs("section", { id: "whyappear", className: "relative bg-black overflow-hidden py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full md:w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-full md:w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-bold text-white mb-6", children: [
              "Why appear for",
              " ",
              /* @__PURE__ */ jsxs("span", { className: "bg-blue-600 bg-clip-text text-transparent", children: [
                "X",
                "",
                " - SAT",
                ""
              ] }),
              " ",
              "?"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-400 max-w-2xl mx-auto", children: [
              "Shape Your Future. Seize the Opportunity.",
              " "
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: index * 0.2 },
          className: "bg-black outline outline-blue-600 p-8 rounded-xl hover:bg-gray-750 transition-colors",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4", children: feature.icon }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: feature.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: feature.description })
          ]
        },
        index
      )) })
    ] })
  ] });
};
const faqs = [
  {
    question: "Who can take X-SAT?",
    answer: "Anyone passionate about Product Management—no prior experience needed. The test is designed to evaluate your potential and aptitude for product management roles."
  },
  {
    question: "Is the test free?",
    answer: "Yes, X-SAT is completely free for all participants. We believe in making quality education and opportunities accessible to everyone."
  },
  {
    question: "How do I prepare?",
    answer: "Review basic problem-solving, strategic thinking, user empathy and many more concepts. We'll provide preparation materials upon registration to help you succeed."
  },
  {
    question: "What happens after registration?",
    answer: "You'll receive detailed test instructions, preparation resources, and secure login credentials via email. Our team will guide you through the entire process."
  },
  {
    question: "What's included in the scholarship?",
    answer: "Winners receive full or partial scholarships to AcceleratorX's Product Management Certification Program, along with mentorship opportunities and industry connections."
  }
];
const XSATFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "bg-[#0a0a0a] text-white py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              className: "text-4xl font-bold mb-4",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.2 },
              children: "Your Questions Answered"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              className: "text-gray-400 mb-12",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.4 },
              children: "Find answers to common questions about AcceleratorX and our services."
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: index * 0.1 },
        className: "border-b border-gray-800 pb-4",
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "flex justify-between items-center w-full text-left py-4",
              onClick: () => setOpenIndex(openIndex === index ? -1 : index),
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-lg font-medium", children: faq.question }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { rotate: openIndex === index ? 180 : 0 },
                    transition: { duration: 0.3 },
                    children: openIndex === index ? /* @__PURE__ */ jsx(Minus, { className: "w-5 h-5 text-blue-500" }) : /* @__PURE__ */ jsx(Plus, { className: "w-5 h-5 text-blue-500" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(AnimatePresence, { children: openIndex === index && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.3 },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsx("p", { className: "text-gray-400 py-4", children: faq.answer })
            }
          ) })
        ]
      },
      index
    )) })
  ] }) });
};
const XSATHero = () => {
  const logos = {
    row1: [
      "/assets/xsatLogo/cisco.webp",
      "/assets/xsatLogo/dell.webp",
      "/assets/xsatLogo/hp.webp",
      "/assets/xsatLogo/microsoft.webp",
      "/assets/xsatLogo/juniper.webp",
      "/assets/xsatLogo/obeya.webp"
    ],
    row2: [
      "/assets/xsatLogo/aruba.webp",
      "/assets/xsatLogo/fortinet.webp",
      "/assets/xsatLogo/google.webp",
      "/assets/xsatLogo/jio.webp",
      "/assets/xsatLogo/logitech.webp",
      "/assets/xsatLogo/redington.svg"
    ],
    row3: [
      "/assets/xsatLogo/cisco.webp",
      "/assets/xsatLogo/vi.webp",
      "/assets/xsatLogo/tata.webp",
      "/assets/xsatLogo/redhat.webp",
      "/assets/xsatLogo/coworks.webp"
    ]
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen bg-black overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 h-full w-full bg-black", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container relative mx-auto px-4 py-20 z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] gap-16", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white", children: /* @__PURE__ */ jsx("span", { className: "block mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-green-500", children: "India's First Industrial Scholarship Test" }) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-center gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "h-2 w-2 bg-green-500 rounded-full animate-pulse" }),
                /* @__PURE__ */ jsxs("p", { className: "text-2xl text-white font-medium", children: [
                  "XSAT Is",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 font-semibold", children: "Live" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "px-8 py-3 bg-green-500 text-white font-medium rounded-lg shadow-lg hover:bg-green-400 transition-all",
                  onClick: () => window.location.href = "https://xsat.acceleratorx.org",
                  children: "Register Now"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.3 },
          className: "flex flex-col lg:flex-row items-center justify-center gap-6",
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                whileHover: {
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                },
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: "relative bg-[#121212] border border-gray-800 shadow-lg hover:shadow-2xl rounded-2xl p-6 w-80 text-white transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -left-4 bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsx(Trophy, { className: "w-6 h-6 text-black" }) }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4 pt-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-400", children: "Win scholarships worth" }),
                    /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-yellow-400", children: "₹1 Crore+" })
                  ] }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                whileHover: {
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                },
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: "relative bg-[#121212] border border-gray-800 shadow-lg hover:shadow-2xl rounded-2xl p-6 w-80 text-white transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -left-4 bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-6 h-6 text-black" }) }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4 pt-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-400", children: "Transform your future with" }),
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/companylogo-new.webp",
                        alt: "companyLogo",
                        className: "mx-auto w-29"
                      }
                    ) })
                  ] }) })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 md:mt-16 w-full overflow-hidden bg-opacity-20 py-8 md:py-12 px-2 md:px-4 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-8 md:mb-12 relative z-20", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4 mb-2", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/a2m.webp",
              alt: "AcceleratorX Logo",
              className: "h-16 md:h-20 lg:h-24 object-contain"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent", children: "Empowered by" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-300/80", children: "Backed by a group of more than 140 industry leaders" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20 mb-8 md:mb-12 relative z-20" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 opacity-50 z-10" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex animate-scroll", children: [
            /* @__PURE__ */ jsx("div", { className: "flex gap-16 md:gap-32 min-w-max px-8", children: logos.row1.map((logoPath) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-24 md:w-28 h-12 md:h-14 flex items-center justify-center",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: logoPath,
                    alt: `Company logo`,
                    className: "max-h-full max-w-full object-contain"
                  }
                )
              },
              logoPath
            )) }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-16 md:gap-32 min-w-max px-8", children: logos.row2.map((logoPath) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-24 md:w-28 h-12 md:h-14 flex items-center justify-center",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: logoPath,
                    alt: `Company logo`,
                    className: "max-h-full max-w-full object-contain"
                  }
                )
              },
              `${logoPath}-dup`
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex animate-scroll-reverse mt-8", children: [
            /* @__PURE__ */ jsx("div", { className: "flex gap-16 md:gap-32 min-w-max px-8", children: logos.row3.map((logoPath) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-24 md:w-28 h-12 md:h-14 flex items-center justify-center",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: logoPath,
                    alt: `Company logo`,
                    className: "max-h-full max-w-full object-contain"
                  }
                )
              },
              `${logoPath}-rev`
            )) }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-16 md:gap-32 min-w-max px-8", children: logos.row3.map((logoPath) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-24 md:w-28 h-12 md:h-14 flex items-center justify-center",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: logoPath,
                    alt: `Company logo`,
                    className: "max-h-full max-w-full object-contain"
                  }
                )
              },
              `${logoPath}-rev-dup`
            )) })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
const bentoItems = [
  {
    icon: /* @__PURE__ */ jsx(Rocket, { className: "w-8 h-8 text-cyan-400" }),
    title: "What is X-SAT?",
    description: "A pioneering nationwide scholarship aptitude test to identify and support aspiring product management professionals.",
    className: "md:col-span-2 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
  },
  {
    icon: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-purple-400" }),
    title: "Test Format",
    description: "60-minute online assessment featuring real-world product scenarios and problem-solving challenges.",
    className: "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
  },
  {
    icon: /* @__PURE__ */ jsx(Brain, { className: "w-8 h-8 text-pink-400" }),
    title: "Skills Tested",
    description: "Product Sense, User-Centric Thinking, Market Analysis, Guesstimates and more.",
    className: "bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-500/20"
  },
  {
    icon: /* @__PURE__ */ jsx(Trophy, { className: "w-8 h-8 text-orange-400" }),
    title: "Scholarships",
    description: "Win exciting cash prizes and scholarship more than 1 Cr",
    className: "md:row-span-2 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20"
  },
  {
    icon: /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-cyan-400" }),
    title: "Mentorship",
    description: "Learn from industry veterans and mentors from leading companies like Tata, Walmart, and PayPal.",
    className: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
  },
  {
    icon: /* @__PURE__ */ jsx(Briefcase, { className: "w-8 h-8 text-blue-400" }),
    title: "Career Impact",
    description: "Build a career in product management with industry recognition and placement opportunities.",
    className: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20"
  },
  {
    icon: /* @__PURE__ */ jsx(BarChart2, { className: "w-8 h-8 text-indigo-400" }),
    title: "Industry Backing",
    description: "Supported by leaders in product management and top tech organizations.",
    className: "bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20"
  },
  {
    icon: /* @__PURE__ */ jsx(Sparkles, { className: "w-8 h-8 text-violet-400" }),
    title: "Why X-SAT?",
    description: "The only nationwide test to evaluate real-world product management potential and aptitude.",
    className: "md:col-span-2 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/20"
  },
  {
    icon: /* @__PURE__ */ jsx(Star, { className: "w-8 h-8 text-emerald-400" }),
    title: "Success Stories",
    description: "85% of certified candidates secure product management roles within 1 month of completing the course.",
    className: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
  }
];
const XSATInfo = () => {
  return /* @__PURE__ */ jsxs("section", { id: "about", className: "py-20 bg-black relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full md:w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-full md:w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-bold text-white mb-6", children: [
              "What is",
              " ",
              /* @__PURE__ */ jsxs("span", { className: "bg-blue-600 bg-clip-text text-transparent", children: [
                "X",
                "",
                " - SAT",
                ""
              ] }),
              " ",
              "?"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 max-w-2xl mx-auto", children: "Take a hand to start your professional journey." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-6 max-w-6xl mx-auto", children: bentoItems.map((item, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: `p-6 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform ${item.className}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4", children: item.icon }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: item.description })
          ]
        },
        index
      )) })
    ] })
  ] });
};
const XSATEntry = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx(Loader, {}), children: [
      /* @__PURE__ */ jsx(XSATHero, {}),
      /* @__PURE__ */ jsx(XSATInfo, {}),
      /* @__PURE__ */ jsx(XSATAbout, {}),
      /* @__PURE__ */ jsx(XSATFAQ, {})
    ] })
  ] });
};
export {
  XSATEntry as default
};
