import { j as jsxRuntimeExports } from "./main-Dr7DU7CZ.js";
import { m as motion } from "./proxy-82v-ftuM.js";
import { S as Shield } from "./shield-Bpymbedr.js";
import { T as Trophy } from "./trophy-DfQtNI-R.js";
import { C as CheckCircle } from "./check-circle-kDU7Ld8S.js";
const certificationFeatures = [
  "Industry-recognized AI Digital Marketing certification",
  "Verified badge + unique verification URL",
  "Digital certificate for LinkedIn and resume",
  "Trusted by 2500+ companies and agencies",
  "AI Capstone Projects portfolio",
  "Lifetime alumni network access"
];
const AIDMCertification = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-4 border-[#5CB338] aspect-[4/3] rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-gray-500/50 flex items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/certificates/Nano_Degree_in_DM.webp",
                alt: "AI Digital Marketing Nano-Degree Certificate",
                className: "max-w-full max-h-full object-contain rounded-xl shadow-lg"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute -top-4 -right-4  backdrop-blur-sm border border-[#5CB338]/20 rounded-lg p-3 shadow-lg",
              animate: { y: [0, -10, 0] },
              transition: { duration: 3, repeat: Infinity },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-[#5CB338]" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute -bottom-4 -left-4  backdrop-blur-lg border border-[#5CB338]/20 rounded-lg p-3 shadow-lg",
              animate: { y: [0, 10, 0] },
              transition: { duration: 3, repeat: Infinity, delay: 1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-6 h-6 text-[#5CB338]" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "Program Certificate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338] mb-8", children: [
            "Earn a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338]", children: "Verified Degree" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 mb-8", children: "Showcase results of AI in Marketing that speak louder than words" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: certificationFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { delay: index * 0.1 },
              viewport: { once: true },
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-4 h-4 text-[#5CB338]" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-200", children: feature })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-[#0F0F0F] rounded-xl border border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-[#5CB338] mb-1", children: "2500+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-sm", children: "Companies Trust Us" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-[#0F0F0F] rounded-xl border border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-[#5CB338] mb-1", children: "100%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-sm", children: "Verified Credentials" })
            ] })
          ] })
        ]
      }
    )
  ] }) }) });
};
export {
  AIDMCertification as default
};
