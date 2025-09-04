import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Linkedin, Server, Github, Award, Sparkles, GraduationCap } from "lucide-react";
const WSGENCMentor = () => {
  return /* @__PURE__ */ jsxs("div", { className: "relative py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "relative container mx-auto px-4", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "max-w-4xl mx-auto",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4", children: "Meet Your Instructor" }),
            /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border border-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "w-48 h-48 rounded-2xl overflow-hidden border-2 border-indigo-500/30", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/assets/mentor/prashant.webp",
                  alt: "Prashant Sahatiya",
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.linkedin.com/in/prashant-sahatiya/",
                  target: "_blank",
                  rel: "noopener noreferrer nofollow",
                  className: "text-white hover:text-blue-100 transition-colors",
                  children: /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5" })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center md:text-left", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: "Prashant Sahatiya" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 justify-center md:justify-start mb-4", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20", children: [
                  /* @__PURE__ */ jsx(Server, { className: "w-4 h-4" }),
                  "LangChain Specialist"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20", children: [
                  /* @__PURE__ */ jsx(Github, { className: "w-4 h-4" }),
                  "Open Source Contributor"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-gray-300", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-purple-400 mt-1 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("p", { children: "Ph.D. in Computer Science with expertise in LLMs and Vector Databases" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-blue-400 mt-1 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("p", { children: "Built custom AI solutions using LangChain for multiple enterprises" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(GraduationCap, { className: "w-5 h-5 text-green-400 mt-1 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("p", { children: "Assistant Professor and AI Researcher at Parul University" })
                ] })
              ] })
            ] })
          ] }) })
        ]
      }
    ) })
  ] });
};
export {
  WSGENCMentor as default
};
