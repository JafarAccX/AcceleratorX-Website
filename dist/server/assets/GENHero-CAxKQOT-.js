import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import EnrollmentModal from "./EnrollmentModal-C4zUhI_e.js";
import "framer-motion";
import "../entry-server.js";
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
import "react-hot-toast";
import "./enrollmentApi-DmeHaJMK.js";
import "./metaPixel-Cw2h-5_I.js";
const GENHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };
  const handleModalSubmit = async () => {
    if (isDownload) {
      try {
        const response = await fetch(
          "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AcceleratorX%20Gen%20AI%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FjY2VsZXJhdG9yWCBHZW4gQUkgQnJvY2h1cmUucGRmIiwiaWF0IjoxNzM4NzM1MTI1LCJleHAiOjE3NzAyNzExMjV9.t6cs2LulI_9QaZmYub0mjJL8Yqelj8hDnR6ESIh_8Jc"
        );
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "AcceleratorX-GenAI-Brochure.pdf";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }
      } catch (error) {
        console.error("Error downloading brochure:", error);
      }
    }
    handleModalClose();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-black", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#0A1B33]/80 z-10" }),
        /* @__PURE__ */ jsx(
          "video",
          {
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "absolute w-full h-full object-cover",
            children: /* @__PURE__ */ jsx("source", { src: "/assets/videos/loopvideo.mp4", type: "video/mp4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6 pb-4 bg-white text-transparent bg-clip-text", children: "Master Generative AI & AI Agent No-Code Automation Program in 12 weeks." }),
        /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-gray-300 mb-8", children: "India’s first Non-code AI Automation Program for freshers, freelancers, and working professionals." }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 mb-8 max-w-3xl mx-auto", children: "Start your future with our Gen AI and Agentic AI program and become an AI professional in 3 months. This Gen AI and Agentic AI specialisation is designed for beginners, providing a no-code pathway to mastering generative AI, AI Agents, and the powerful tools of automation. Secure your expertise with India’s first solution-based AI automation program." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setIsModalOpen(true),
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity",
              children: [
                "Enroll Now",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                setIsModalOpen(true);
                setIsDownload(true);
              },
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 text-white font-semibold hover:bg-white/5 transition-colors",
              children: [
                "Download Brochure",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          EnrollmentModal,
          {
            isOpen: isModalOpen,
            onClose: handleModalClose,
            onSubmit: handleModalSubmit,
            isDownload
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        @keyframes rotBGimg {
          from {
            transform: rotate(0deg) scale(2);
          }
          to {
            transform: rotate(360deg) scale(2);
          }
        }

        .animate-rotBGimg {
          animation: rotBGimg 12s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .7; }
        }
      ` })
  ] });
};
export {
  GENHero as default
};
