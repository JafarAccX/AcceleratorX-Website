import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Linkedin, Briefcase, Sparkles, Award } from "lucide-react";
const WSGENMentor = () => {
  const mentors = [
    // {
    //   name: "Prashant Sahatiya",
    //   designation: "Assistant Professor at Parul University",
    //   description: "Ph.D. in Computer Science, University Gold Medalist",
    //   linkedin: "https://www.linkedin.com/in/prashant-sahatiya/",
    //   image: "/assets/mentor/prashant.webp",
    //   experience: "5+ Years",
    // },
    {
      name: "Anjali Sharma",
      designation: "AI Product Manager at Mesha",
      linkedin: "https://www.linkedin.com/in/anjalisharmaaa/",
      image: "/assets/mentor/anjali.webp",
      experience: "10+ Years"
    },
    {
      name: "Nitish M L Setty",
      designation: "Software Developer, MD at GrowSharp Technologies",
      description: "Expert in AI implementation and automation",
      linkedin: "https://www.linkedin.com/in/nitish-m-l-setty-7a0206192",
      image: "/assets/mentor/nitish.webp",
      experience: "5+ Years"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "relative container mx-auto px-4", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "max-w-5xl mx-auto",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4", children: "Meet Your Mentors" }),
            /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1  gap-8", children: mentors.map((mentor, index) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 max-w-screen-sm mx-auto",
              children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-36 h-36 rounded-2xl overflow-hidden border-2 border-indigo-500/30", children: /* @__PURE__ */ jsx("img", { src: mentor.image, alt: `generative ai program mentor ${mentor.name} for product managers`, className: "w-full h-full object-cover" }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: mentor.linkedin,
                      target: "_blank",
                      rel: "noopener noreferrer nofollow",
                      className: "text-white hover:text-blue-100 transition-colors",
                      children: /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5" })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center sm:text-left", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: mentor.name }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 justify-center sm:justify-start mb-4", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20", children: [
                    /* @__PURE__ */ jsx(Briefcase, { className: "w-3 h-3" }),
                    mentor.experience
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-blue-400 mt-1 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("p", { children: mentor.designation })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-purple-400 mt-1 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("p", { children: mentor.description })
                    ] })
                  ] })
                ] })
              ] })
            },
            index
          )) })
        ]
      }
    ) })
  ] });
};
export {
  WSGENMentor as default
};
