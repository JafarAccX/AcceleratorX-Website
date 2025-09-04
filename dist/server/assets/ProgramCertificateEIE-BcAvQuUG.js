import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
const certificationFeatures = [
  "Industry-recognized Product Management certification",
  "Validated by leading tech companies",
  "Digital badge for LinkedIn and resume",
  "Lifetime access to alumni network",
  "Verifiable Credentials for career growth",
  "Priority access to job opportunities"
];
function ProgramCertificateEIE() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "relative",
        children: [
          /* @__PURE__ */ jsx("div", { className: "relative border-4 border-[#5CB338] aspect-[4/3] rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-[#0F0F0F]", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/programcertificates/PM_Cert_EIE.webp",
                alt: "Product Management Certificate",
                className: "w-full h-full object-cover opacity-90"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" })
          ] }) }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute -top-4 -right-4 bg-black backdrop-blur-sm border border-[#5CB338]/20 rounded-lg p-3",
              animate: { y: [0, -10, 0] },
              transition: { duration: 3, repeat: Infinity },
              children: /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-[#5CB338]" })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute -bottom-4 -left-4 bg-black backdrop-blur-sm border border-[#5CB338]/20 rounded-lg p-3",
              animate: { y: [0, 10, 0] },
              transition: { duration: 3, repeat: Infinity, delay: 1 },
              children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-[#5CB338]" })
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
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-medium text-[#5CB338] mb-4", children: "Program Certificate" }),
          /* @__PURE__ */ jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338] mb-8", children: [
            "Get ",
            /* @__PURE__ */ jsx("span", { className: "text-[#5CB338]", children: "Certified" }),
            " in Product Management"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-8", children: certificationFeatures.map((feature, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { delay: index * 0.1 },
              viewport: { once: true },
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-[#5CB338]" }),
                /* @__PURE__ */ jsx("span", { className: "text-black", children: feature })
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
