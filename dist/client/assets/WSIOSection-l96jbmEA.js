import { j as jsxRuntimeExports, k as motion } from "./main-CLFAzKr7.js";
function WSFIOSection() {
  const testimonials = [
    { image: "/assets/testimonialsLogo/feedback1.webp" },
    { image: "/assets/testimonialsLogo/feedback2.webp" },
    { image: "/assets/testimonialsLogo/feedback3.webp" },
    { image: "/assets/testimonialsLogo/feedback4.webp" },
    { image: "/assets/testimonialsLogo/feedback5.webp" },
    { image: "/assets/testimonialsLogo/feedback6.webp" },
    { image: "/assets/testimonialsLogo/feedback7.webp" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 px-6 py-20 text-white max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[-200px] top-1/4 h-[600px] w-[600px] rounded-full bg-purple-700 opacity-30 blur-[150px] pointer-events-none z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mb-16 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold leading-tight", children: "What Past Attendees Say" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { ...testimonials[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { ...testimonials[1] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-6 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { ...testimonials[2] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { ...testimonials[3] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { ...testimonials[4] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-6 justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { ...testimonials[5] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { ...testimonials[6] })
      ] })
    ] })
  ] });
}
function TestimonialCard({ image }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      whileHover: { scale: 1.02 },
      className: "rounded-2xl border max-w-sm border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-sm transition hover:border-purple-500/30",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "Testimonial", className: "rounded-xl object-cover w-full h-auto" })
    }
  );
}
export {
  WSFIOSection as default
};
