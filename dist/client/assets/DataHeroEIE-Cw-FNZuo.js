import { r as reactExports, l as useCourseContext, j as jsxRuntimeExports, k as motion } from "./main-Ck2PwlUp.js";
import EnrollmentModal from "./EnrollmentModal-1cLzwjk_.js";
import { A as ArrowRight } from "./arrow-right-CHYkYHlR.js";
import "./enrollmentApi-BejPWjGn.js";
import "./metaPixel-C33WLlAg.js";
const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let start = 0;
    const duration = 2e3;
    const increment = end / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.round(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, [end]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold text-white", children: [
    count,
    suffix
  ] });
};
function DataHeroEIE() {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const { setSelectedCourse } = useCourseContext();
  const [isDownload, setIsDownload] = reactExports.useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };
  const handleModalSubmit = () => {
    if (isDownload) {
      window.open(
        "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AI%20Powered%20DA%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FJIFBvd2VyZWQgREEgQnJvY2h1cmUucGRmIiwiaWF0IjoxNzQ2Mjc3MTU1LCJleHAiOjE4NzI0MjExNTV9.NWSk8RPs_nwupsr5Wfu6-EGpUzFFaVPrMKOVZmICPgw"
      );
    }
    handleModalClose();
  };
  reactExports.useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen bg-gradient-to-b from-[#0A0F1E] via-[#0D1326] to-[#0A0F1E] overflow-hidden pt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-1/4 w-[600px] h-[600px] animate-pulse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#96E072]/10 rounded-full filter blur-[120px] transform rotate-45" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#96E072]/15 to-transparent rounded-full filter blur-[90px] animate-pulse" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 right-1/4 w-[600px] h-[600px] animate-pulse delay-1000", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#96E072]/10 rounded-full filter blur-[120px] transform -rotate-45" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-l from-[#96E072]/15 to-transparent rounded-full filter blur-[90px] animate-pulse" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[1000px] h-[1000px] bg-gradient-radial from-[#96E072]/10 via-[#96E072]/5 to-transparent rounded-full filter blur-[150px] animate-pulse-slow" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 pb-12 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-[#96E072]/20 to-transparent blur-lg opacity-50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "relative text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight", children: [
                "Stay Ahead in Your Career with",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-1 bg-gradient-to-r from-[#96E072]/20 to-transparent blur-lg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative bg-gradient-to-r from-[#96E072] to-[#96E072]/90 bg-clip-text text-transparent ml-2", children: "AI Data Analytics" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg text-gray-300 leading-relaxed backdrop-blur-sm", children: "Accelerate your career with AI-driven data analytics. Obtain experiential learning in AI analytics, data storytelling, visualization, and an analytical tool designed for professionals. Build an AI-powered dashboard, a data analyst portfolio that helps you get hired in data analyst, business analyst, financial analyst, market analyst, and HR analyst roles." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-amber-400", children: "Backed by an AI-centered approach to help you build faster, analyze quicker, and get hired with AI." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-400" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-6 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "relative group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-[#96E072] to-[#96E072]/70 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "relative px-8 py-3 bg-[#96E072] rounded-full flex items-center justify-center group cursor-pointer",
                    onClick: () => setIsModalOpen(true),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0A0F1E] font-semibold", children: "Apply Now" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5 text-[#0A0F1E] group-hover:translate-x-1 transition-transform" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  className: "relative group",
                  onClick: () => {
                    setIsModalOpen(true);
                    setIsDownload(true);
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-[#96E072]/50 to-[#96E072]/30 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative px-8 py-3 bg-[#0A0F1E] border border-[#96E072]/50 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "Download Curriculum" }) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-3 gap-8", children: [
              { value: 16, suffix: "LPA", label: "Average Salary" },
              { value: 4e4, suffix: "+", label: "Job Openings" },
              { value: 22, suffix: " weeks", label: "Duration" }
            ].map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "relative group", whileHover: { scale: 1.02, y: -5 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-[#96E072]/30 to-[#96E072]/10 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-gradient-to-b from-[#0A0F1E] to-[#141B2E] p-6 rounded-2xl border border-[#96E072]/20 group-hover:border-[#96E072]/40 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { end: stat.value, suffix: stat.suffix }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mt-2", children: stat.label })
              ] })
            ] }, index)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          className: "relative mt-4 lg:mt-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-[#96E072]/60 to-[#96E072]/30 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/daBanner.webp",
                  alt: "Data Analytics Program",
                  className: "relative w-full rounded-lg shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-amber-400", children: "*15 Days Money Back Guarantee Program" }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollmentModal, { isOpen: isModalOpen, onClose: handleModalClose, onSubmit: handleModalSubmit })
  ] });
}
export {
  DataHeroEIE as default
};
