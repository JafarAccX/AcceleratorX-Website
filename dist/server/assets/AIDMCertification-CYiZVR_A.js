import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Shield, Trophy, CheckCircle } from "lucide-react";
const certificationFeatures = [
  "Industry-recognized Nano Degree in AI Digital Marketing",
  "Verified badge + unique verification ID",
  "Digital AI Marketing Nano Degree for LinkedIn and resume",
  "Trusted by 2500+ companies and agencies",
  "AI Marketing Projects portfolio",
  "Lifetime exclusive alumni community access"
];
const AIDMCertification = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "relative",
        children: [
          /* @__PURE__ */ jsx("div", { className: "relative border-4 border-[#5CB338] aspect-[4/3] rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gray-500/50 flex items-center justify-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center p-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/certificates/Nano_Degree_in_DM.webp",
                alt: "Nano Degree certificate in best ai digital marketing",
                className: "max-w-full max-h-full object-contain rounded-xl shadow-lg"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" })
          ] }) }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute -top-4 -right-4  backdrop-blur-sm border border-[#5CB338]/20 rounded-lg p-3 shadow-lg",
              animate: { y: [0, -10, 0] },
              transition: { duration: 3, repeat: Infinity },
              children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-[#5CB338]" })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute -bottom-4 -left-4  backdrop-blur-lg border border-[#5CB338]/20 rounded-lg p-3 shadow-lg",
              animate: { y: [0, 10, 0] },
              transition: { duration: 3, repeat: Infinity, delay: 1 },
              children: /* @__PURE__ */ jsx(Trophy, { className: "w-6 h-6 text-[#5CB338]" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "flex flex-col justify-center",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "Unlock Your Nano Degree" }),
          /* @__PURE__ */ jsx("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338] mb-8", children: "Get Your Nano-Degree in AI Marketing." }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8", children: "Show the world your expertise in AI Marketing and stand out in a competitive AI Marketing jobs and get hired easily." }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-8", children: certificationFeatures.map((feature, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { delay: index * 0.1 },
              viewport: { once: true },
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-[#5CB338]/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-[#5CB338]" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-200", children: feature })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-[#0F0F0F] rounded-xl border border-white/10", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-[#5CB338] mb-1", children: "2500+" }),
              /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-sm", children: "Companies Trust Us." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-[#0F0F0F] rounded-xl border border-white/10", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-[#5CB338] mb-1", children: "100%" }),
              /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-sm", children: "Verified Credentials." })
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
