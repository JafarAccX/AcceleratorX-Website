import { j as jsxRuntimeExports, k as motion } from "./main-DIFEnr0T.js";
import { A as Award } from "./award-BaL_fgVD.js";
import { C as CheckCircle } from "./check-circle-DXJLMBqY.js";
const certificationFeatures = [
  "Across the world, recognised certification validated by leading tech companies.",
  "Present your achievement with a digital badge on LinkedIn and your resume.",
  "Become a master of AI product management and leverage product management automation tools.",
  "Specialising in growth product management and sealing data-driven products.",
  "Access to product management Accelerator for exclusive career mentorship and hiring.",
  "Lifetime access to the Alumni network and product management workshop",
  "Priority access to top opportunities in the global product team."
];
function ProgramCertificateEIE() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-4 border-[#5CB338] aspect-[4/3] rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-[#0F0F0F]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/programcertificates/PM_Cert_EIE.webp",
                alt: "professional certificate in product management EIE",
                className: "w-full h-full object-cover opacity-90"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute -top-4 -right-4 bg-black backdrop-blur-sm border border-[#5CB338]/20 rounded-lg p-3",
              animate: { y: [0, -10, 0] },
              transition: { duration: 3, repeat: Infinity },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-6 h-6 text-[#5CB338]" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute -bottom-4 -left-4 bg-black backdrop-blur-sm border border-[#5CB338]/20 rounded-lg p-3",
              animate: { y: [0, 10, 0] },
              transition: { duration: 3, repeat: Infinity, delay: 1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-[#5CB338]" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "flex flex-col justify-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-[#5CB338] mb-4", children: "Program Certificate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338] mb-8", children: "Gateway to Product Management Career" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: certificationFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { delay: index * 0.1 },
              viewport: { once: true },
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-[#5CB338]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "", children: feature })
              ]
            },
            index
          )) })
        ]
      }
    )
  ] }) }) });
}
export {
  ProgramCertificateEIE as default
};
