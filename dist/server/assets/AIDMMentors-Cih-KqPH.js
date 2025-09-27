import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Users, Linkedin } from "lucide-react";
const mentors = [
  {
    name: "Rajesh Kumar",
    role: "Marketing Director at TechCorp",
    company: "TechCorp",
    bio: "10+ years in digital marketing with expertise in AI automation and growth strategies.",
    experience: "10+ Years",
    transitions: "50+ Businesses",
    image: "/mentors/rajesh-kumar.jpg",
    // You'll need to add actual images
    linkedin: "https://linkedin.com/in/rajesh-kumar"
  },
  {
    name: "Priya Sharma",
    role: "AI Marketing Consultant",
    company: "AI Solutions Inc",
    bio: "Specialized in AI-powered content creation and marketing automation workflows.",
    experience: "8+ Years",
    transitions: "1000+ Marketers",
    image: "/mentors/priya-sharma.jpg",
    linkedin: "https://linkedin.com/in/priya-sharma"
  },
  {
    name: "Arjun Patel",
    role: "Growth Hacking Expert",
    company: "Growth Labs",
    bio: "Focus on data-driven marketing strategies and AI optimization techniques.",
    experience: "12+ Years",
    transitions: "$10M+ Revenue",
    image: "/mentors/arjun-patel.jpg",
    linkedin: "https://linkedin.com/in/arjun-patel"
  }
];
const AIDMMentors = () => {
  return /* @__PURE__ */ jsx("section", { className: "bg-[#0a0a0a] py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block mb-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-16 h-16 rounded-2xl bg-[#5CB338]/10", children: /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-[#5CB338]" }) }) }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-bold text-white mb-4 tracking-tight", children: [
            "Learn from ",
            /* @__PURE__ */ jsx("span", { className: "text-[#5CB338]", children: "Industry Experts" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 max-w-2xl mx-auto", children: "Learn directly from marketing leaders with 10+ years of experience" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8", children: mentors.map((mentor, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "group relative",
        children: /* @__PURE__ */ jsxs("div", { className: "relative bg-[#0F0F0F] rounded-2xl border border-white/10 group-hover:border-[#5CB338]/50 transition-all duration-500 overflow-hidden group-hover:shadow-lg group-hover:shadow-[#5CB338]/10 group-hover:-translate-y-1", children: [
          /* @__PURE__ */ jsx("div", { className: "relative h-52 overflow-hidden bg-gradient-to-br from-[#5CB338]/20 to-[#5CB338]/5 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-gradient-to-r from-[#5CB338]/20 to-[#5CB338]/40 rounded-full flex items-center justify-center border border-[#5CB338]/30", children: /* @__PURE__ */ jsx("span", { className: "text-[#5CB338] text-2xl font-bold", children: mentor.name.split(" ").map((n) => n[0]).join("") }) }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-0 z-20 transform -translate-x-full group-hover:translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsx("div", { className: "bg-[#5CB338]/10 backdrop-blur-md border border-[#5CB338]/20 rounded-lg px-3 py-1.5", children: /* @__PURE__ */ jsx("span", { className: "text-[#5CB338] text-sm font-medium", children: mentor.company }) }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-0 z-20 transform translate-x-full group-hover:-translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: mentor.linkedin,
              target: "_blank",
              rel: "noopener noreferrer nofollow",
              className: "bg-[#5CB338] hover:bg-[#5CB338]/80 text-white px-4 py-1.5 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm group/btn",
              children: [
                /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Connect" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "relative p-6 z-20", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-6 transform transition-transform duration-500", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1 group-hover:text-[#5CB338] transition-colors duration-300", children: mentor.name }),
              /* @__PURE__ */ jsx("p", { className: "text-[#5CB338] font-medium", children: mentor.role }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mt-2", children: mentor.bio })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 transform transition-all duration-500", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-300", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Experience" }),
                /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-medium", children: mentor.experience })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-300", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Impact" }),
                /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-medium", children: mentor.transitions })
              ] })
            ] })
          ] })
        ] })
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
      motion.button,
      {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        className: "border-2 border-[#5CB338] text-[#5CB338] hover:bg-[#5CB338]/10 font-bold py-3 px-8 rounded-xl transition-all duration-300",
        children: "See Full Mentor Bios"
      }
    ) })
  ] }) });
};
export {
  AIDMMentors as default
};
