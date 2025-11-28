import { j as jsxRuntimeExports } from "./main-BzTttlQZ.js";
import { L as Linkedin } from "./linkedin--u34DzwF.js";
const GENMentors = () => {
  const mentors = [
    {
      name: "Anjali Sharma",
      designation: "AI Product Manager at Mesha",
      linkedin: "https://www.linkedin.com/in/anjalisharmaaa/",
      image: "/assets/mentor/anjali.webp",
      experience: "10+ Years"
    },
    {
      name: "Pranali Bose",
      designation: "Software Engineer (Data Science), Ex-Walmart",
      linkedin: "https://www.linkedin.com/in/pranalibose",
      image: "/assets/mentor/pranali.webp",
      experience: "7+ Years"
    },
    {
      name: "Nitish M L Setty",
      designation: "Software Developer, MD at GrowSharp Technologies",
      linkedin: "https://www.linkedin.com/in/nitish-m-l-setty-7a0206192",
      image: "/assets/mentor/nitish.webp",
      experience: "5+ Years"
    },
    {
      name: "Dr. Prashant ",
      designation: "Professor at Renowned University",
      // linkedin: "https://www.linkedin.com/in/prashant-sahatiya",
      image: "/assets/mentor/dummyuser.webp",
      experience: "5+ Years"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-16 bg-black overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-400 font-medium", children: "Learn From Industry Experts" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: [
        "Meet Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "Mentors" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg max-w-3xl mx-auto", children: "Learn from experienced professionals who will guide you through your GenAI journey" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: mentors.map((mentor, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 hover:bg-white/10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: mentor.image,
              alt: `generative ai program mentor ${mentor.name} for product managers`,
              className: "w-full h-full object-cover",
              onError: (e) => {
                const target = e.target;
                target.src = "/assets/mentor/dummyuser.webp";
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center md:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold text-white mb-1", children: mentor.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-3", children: mentor.designation }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-semibold", children: [
              "Experience: ",
              mentor.experience
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: mentor.linkedin,
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                className: "inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "LinkedIn Profile" })
                ]
              }
            )
          ] })
        ]
      },
      index
    )) })
  ] }) }) });
};
export {
  GENMentors as default
};
