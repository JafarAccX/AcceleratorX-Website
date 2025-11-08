import { r as reactExports, j as jsxRuntimeExports } from "./main-pPMPSF4E.js";
import EnrollmentModal from "./EnrollmentModal-Bfd3L0vN.js";
import { A as ArrowRight } from "./arrow-right-C1P5bEga.js";
import { P as Phone } from "./phone-ERGZ3_mK.js";
import { U as Users } from "./users-8QxDqiIW.js";
import "./enrollmentApi-sA0V8bFm.js";
import "./metaPixel-DzY0zvt3.js";
const productPageBannerEIE = "/assets/productpageBannerEIE.webp";
const navLinks = [
  { name: "Highlights", id: "highlights" },
  { name: "Learning Journey", id: "learning-journey" },
  { name: "Benefits", id: "benefits" },
  { name: "Mentors", id: "mentors" },
  { name: "Pricing", id: "pricing" },
  { name: "FAQ", id: "faq" }
];
function ProgramHeroEIE() {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [isDownload, setIsDownload] = reactExports.useState(false);
  const [activeLink, setActiveLink] = reactExports.useState("");
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };
  const handleModalSubmit = () => {
    if (isDownload) {
      window.location.href = "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/PM%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL1BNIEJyb2NodXJlLnBkZiIsImlhdCI6MTczNzM3NDkyNywiZXhwIjozMzI3MzM3NDkyN30.jPzAbYFDvcoA-nDaPMo6DAazFa7yrp4jhGkmHKcbd4o&t=2025-01-20T12%3A08%3A49.189Z";
    }
    handleModalClose();
  };
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveLink(id);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pt-10 pb-10 border-b border-green-800 overflow-hidden bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex space-x-6 mt-4 overflow-x-auto no-scrollbar", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => handleScroll(link.id),
        className: `text-sm font-medium px-3 py-2 rounded-full transition-all duration-300
                              ${activeLink === link.id ? "text-black bg-[#5CB338]" : "text-gray-400 hover:text-white hover:bg-white/10"}`,
        children: link.name
      }
    ) }, link.id)) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 md:gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "bg-[#5CB338]/20 backdrop-blur-sm px-4 py-2 rounded-md inline-block mb-6 border border-[#5CB338]",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#fff] font-semibold text-sm sm:text-base", children: "#1 IN EXECUTIVE EDUCATION" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4", children: [
              "Stay Ahead in Your Career with",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-[#5CB338] bg-clip-text text-transparent", children: [
                " ",
                "AI Product Management"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 md:mt-6 text-base md:text-lg text-gray-300", children: "Master AI product management with India’s top AI Product Management Program. Dive into AI Product Management, leverage product management tools, gain real-world experience, Build Your Own Product and take your product management career to the next level." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-3 gap-6 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-r border-[#5CB338]/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#5CB338] font-bold", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "Professional Certificate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#5CB338] font-bold", children: "Duration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "4 Months" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 md:gap-6 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: "w-full sm:w-auto bg-[#5CB338] text-white font-semibold px-8 md:px-10 py-3 rounded-md hover:bg-[#FFD700] transition flex items-center justify-center",
                  onClick: () => setIsModalOpen(true),
                  children: [
                    "Apply Now ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "w-full sm:w-auto border-2 border-[#5CB338] text-[#5CB338] px-8 md:px-10 py-3 rounded-md hover:bg-[#5CB338]/10 transition font-semibold",
                  onClick: () => {
                    setIsModalOpen(true);
                    setIsDownload(true);
                  },
                  children: "Download Syllabus"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-4 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-[#5CB338]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "For enquiries call: 9916859555" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-4 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-[#5CB338]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "150+ AI Product Managers have already graduated in the last 3 months" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative mt-8 lg:mt-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: productPageBannerEIE,
                alt: "best product management certification program banner",
                className: "w-full rounded-lg shadow-2xl"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-amber-400", children: "Join our hands-on AI Product Management Program worry-free. Satisfaction guaranteed or get your money back!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-400" })
            ] }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: handleModalClose,
        onSubmit: handleModalSubmit,
        isDownload
      }
    )
  ] });
}
export {
  ProgramHeroEIE as default
};
