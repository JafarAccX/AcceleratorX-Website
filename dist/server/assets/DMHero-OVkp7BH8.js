import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { D as DMTimer } from "./DMTimer-Dxk63DBp.js";
import EnrollmentModal from "./EnrollmentModal-CSR6VAAb.js";
import { GraduationCap } from "lucide-react";
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
import "./metaPixel-D4Z7npuX.js";
const DMHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return /* @__PURE__ */ jsxs("section", { className: "min-h-screen relative overflow-hidden bg-neutral-900", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(226,255,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(226,255,50,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" }),
    /* @__PURE__ */ jsx("div", { className: "container relative z-10 pt-32 pb-12", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "max-w-6xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-7xl pb-4 font-bold highlight-text mb-6 leading-tight", children: "Master Digital Marketing & Performance Marketing with AI-Powered Strategies" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-neutral-100/80 mb-12 max-w-3xl mx-auto font-mono", children: "Learn advanced strategies, automation, and data-driven decision-making to optimize campaigns and drive business growth." }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-6 justify-center mb-16", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsModalOpen(true),
              className: "neon-button",
              children: "Enroll Now"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { delay: 0.4 },
                className: "card flex flex-col items-center justify-center p-8",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-20 h-20 mb-4 flex items-center justify-center bg-neon-yellow/10 rounded-2xl", children: /* @__PURE__ */ jsx(GraduationCap, { className: "size-6" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-mono font-bold text-neon-yellow mb-2", children: "Industry Recognized" }),
                  /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-neutral-100", children: "Certification" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { delay: 0.6 },
                className: "card flex flex-col items-center justify-center p-8",
                children: [
                  /* @__PURE__ */ jsx(DMTimer, { className: "text-4xl font-mono font-bold text-neon-yellow mb-4" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl font-mono font-bold text-neutral-100", children: "Early Bird Offer Ends In" })
                ]
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(
      EnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false)
      }
    )
  ] });
};
export {
  DMHero
};
