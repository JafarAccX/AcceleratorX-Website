import { m, j as jsxRuntimeExports } from "./main-CDOtXgRK.js";
import { m as motion } from "./proxy-VHxN6sQO.js";
const dataCertificate = "/assets/programcertificates/DACertificate.webp";
const DataCertificateEIE = () => {
  const cacheKey = "data-analytics-certificate-cache";
  const [cachedImage, setCachedImage] = m.useState(null);
  m.useEffect(() => {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      setCachedImage(cached);
    }
    const cacheImage = async () => {
      try {
        const response = await fetch(dataCertificate);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          localStorage.setItem(cacheKey, base64data);
          setCachedImage(base64data);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error caching certificate image:", error);
      }
    };
    if (!cached) {
      cacheImage();
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-16 bg-gradient-to-b from-[#F4F9F4] via-[#F4F9F4] to-[#F4F9F4] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 w-full h-full z-0 pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-[#1A5D1A]/10 rounded-full filter blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-[#1A5D1A]/10 rounded-full filter blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "inline-block",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-[#1A5D1A]/60 to-[#1A5D1A]/30 rounded-full blur opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative text-[#1A5D1A] text-lg font-semibold px-6 py-2 rounded-full border border-[#1A5D1A]/20", children: "Validate Your Expertise" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.2 },
            className: "mt-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-[#1A5D1A]/20 to-transparent blur-lg opacity-50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "relative text-4xl md:text-5xl font-bold text-[#1A5D1A]", children: "Professional Certifications" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xl text-[#1F441E] max-w-2xl mx-auto", children: "Accelerate your career with our industry-recognized certifications" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay: 0.3 },
          className: "relative mx-auto max-w-4xl",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: cachedImage || dataCertificate,
                alt: "Data Analytics Certificate",
                className: "w-full h-auto rounded-xl"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" })
          ] })
        }
      )
    ] })
  ] });
};
export {
  DataCertificateEIE as default
};
