import { r as reactExports, j as jsxRuntimeExports, B as Briefcase, k as motion, U as ChevronDown, l as useCourseContext, S as SEO } from "./main-BsE_pOwq.js";
import EnrollmentModal from "./EnrollmentModal-CSsNaZvG.js";
import { A as ArrowRight } from "./arrow-right-klvmXGPd.js";
import { B as Brain } from "./brain-Bt4nA7al.js";
import { T as Target } from "./target-BDwj-OsM.js";
import { U as Users } from "./users-HCzXCbXD.js";
import { M as Megaphone } from "./megaphone-DpDmKPA6.js";
import { S as Sparkles } from "./sparkles-UvT9nzri.js";
import { B as Bot } from "./bot-DJ8XiUzB.js";
import { W as Workflow } from "./workflow-BSxYLF5R.js";
import { C as Cpu } from "./cpu-kGmR95U7.js";
import { Z as Zap } from "./zap-CRdiihfT.js";
import { N as NeuralNetworkAnimation } from "./NeuralNetworkAnimation-_PgH59Sh.js";
import { B as BarChart } from "./bar-chart-C8yBxVeG.js";
import { L as Linkedin } from "./linkedin-CU_vZlOn.js";
import { R as Rocket } from "./rocket-Ct8EqRGm.js";
import { W as Wrench } from "./wrench-C5tTVn06.js";
import { C as Code } from "./code-BTOtkrCz.js";
import { C as Cloud } from "./cloud-VNDnDWCa.js";
import { C as Check } from "./check-Hq_5gIgG.js";
import { H as HelpCircle } from "./help-circle-CCEXgL2k.js";
import { T as TrendingUp } from "./trending-up-BdIFjo6z.js";
import { C as Calendar } from "./calendar-BZ7Gvxrb.js";
import { C as ChevronLeft } from "./chevron-left-B-ZkR3E9.js";
import { C as ChevronRight } from "./chevron-right-Dz_CFSBg.js";
import { B as BookOpen } from "./book-open-qnCYIwN5.js";
import { L as Loader } from "./loader-U_R3tsr0.js";
import "./enrollmentApi-Cj02VbS1.js";
import "./metaPixel-DTLSMIdz.js";
const GENHero = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [isDownload, setIsDownload] = reactExports.useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };
  const handleModalSubmit = async () => {
    if (isDownload) {
      try {
        const response = await fetch(
          "hhttps://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AI%20Product%20Management.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80Njc1NTVlNS1jOGMxLTQwOTYtYmQxMC03YzkzODVjZWEyMjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXN1bWVzL0FJIFByb2R1Y3QgTWFuYWdlbWVudC5wZGYiLCJpYXQiOjE3NTI5NDAyNTgsImV4cCI6MTkxMDYyMDI1OH0.G_76x9UvPkLjExI9dTtDhmvkh3fQdwwWZ1lugGzv1l4"
        );
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "AcceleratorX-GenAI-Brochure.pdf";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }
      } catch (error) {
        console.error("Error downloading brochure:", error);
      }
    }
    handleModalClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-black", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/backgrounds/bg1-.webp", alt: "GenAI for PM Hero", className: "absolute w-full h-full object-cover opacity-40" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6 pb-4 bg-white text-transparent bg-clip-text", children: "Ultimate 8-Week Generative AI Program for Product Managers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-gray-300 mb-8", children: "Learn GenAI, Build Real Products, and Launch Your PM Career Into the Future — No Tech Background Needed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-400 mb-8 max-w-3xl mx-auto", children: "Limited Slots | No Coding Required | Starts This Month" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setIsModalOpen(true),
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity",
              children: [
                "Join the Waitlist Now",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setIsModalOpen(true);
                setIsDownload(true);
              },
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 text-white font-semibold hover:bg-white/5 transition-colors",
              children: [
                "Download Brochure",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EnrollmentModal,
          {
            isOpen: isModalOpen,
            onClose: handleModalClose,
            onSubmit: handleModalSubmit,
            isDownload
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        @keyframes rotBGimg {
          from {
            transform: rotate(0deg) scale(2);
          }
          to {
            transform: rotate(360deg) scale(2);
          }
        }

        .animate-rotBGimg {
          animation: rotBGimg 12s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .7; }
        }
      ` })
  ] });
};
const GENIntroduction = () => {
  const stats = [
    {
      value: "85%",
      label: "PMs using AI by 2025"
    },
    {
      value: "3x",
      label: "Faster Product Delivery"
    },
    {
      value: "70%",
      label: "AI-Driven Decision Making"
    }
  ];
  const features = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-blue-500" }),
      title: "AI for Product Managers",
      description: "Master GenAI tools to automate research, roadmap planning, and user feedback analysis."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-blue-500" }),
      title: "No Technical Prerequisites",
      description: "Designed for PMs and aspiring PMs—focus on practical GenAI skills, not coding."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-8 bg-black min-h-screen flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
          style: { opacity: 0.3 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:8rem_8rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
          style: { opacity: 0.2 }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10 ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "  mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-400 font-medium", children: "GenAI for Product Managers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl text-white md:text-5xl font-bold mb-4", children: [
        "Supercharge Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "PM Career" }),
        " with GenAI"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg mb-12 max-w-3xl mx-auto", children: "Learn how to leverage Generative AI to streamline product workflows, boost team productivity, and deliver better products—faster." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-12", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-3xl font-bold text-white mb-1", children: stat.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400", children: stat.label })
      ] }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 border border-white/10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-blue-500/10 p-2.5 backdrop-blur-sm", children: feature.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-1", children: feature.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: feature.description })
            ] })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      ` })
  ] });
};
const GENWhoShouldEnroll = () => {
  const targetAudience = [
    {
      icon: Users,
      title: "Working PMs",
      description: "Stay ahead of the AI curve"
    },
    {
      icon: Briefcase,
      title: "Aspiring PMs",
      description: "uild real AI projects, not just theory"
    },
    {
      icon: Megaphone,
      title: "Career Switchers",
      description: "Step into AI-led PM roles with confidence"
    },
    {
      icon: Brain,
      title: "Founders/Builders",
      description: "Prototype faster with less reliance on dev teams"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12 bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-96 h-96 bottom-0 right-0 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-3 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-sm font-medium", children: "Perfect For You" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Who’s This" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: " Program " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "For?" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: targetAudience.map((audience, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group p-5 rounded-xl relative py-8 bg-black  backdrop-blur-sm border border-white/20 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex  flex-col items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-2.5 rounded-lg bg-blue-50/20 group-hover:bg-blue-100 transform group-hover:rotate-6 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(audience.icon, { className: "w-5 h-5 text-blue-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold   transition-colors", children: audience.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mb-2", children: audience.description })
              ] })
            ] })
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-square rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/bggpt.webp",
            alt: "Students learning together",
            className: "object-cover w-full h-full rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-900 font-medium", children: '"Join a community of learners and build your AI career together!"' }) })
      ] }) })
    ] }) }) })
  ] });
};
const GENBYOA = () => {
  const features = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-5 h-5 text-blue-500" }),
      title: "AI-Powered Product Research",
      description: "Automate competitor analysis, user research, and market insights with GenAI agents."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "w-5 h-5 text-blue-500" }),
      title: "Workflow Automation for PMs",
      description: "Streamline backlog grooming, sprint planning, and stakeholder updates using AI workflows."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-5 h-5 text-blue-500" }),
      title: "No-Code Agent Building",
      description: "Build and customize AI agents for product management tasks—no coding required."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-blue-500" }),
      title: "Boost Team Productivity",
      description: "Deploy GenAI agents to automate repetitive PM tasks and free up time for strategy."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-6 bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
        style: { opacity: 0.3 }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-400 font-medium", children: "GenAI Agents for PMs" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl text-white font-bold mb-6 text-center", children: [
        "Build ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "GenAI Agents" }),
        " for Product Management"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg mb-12 text-center max-w-3xl mx-auto", children: "Learn to build, customize, and deploy GenAI agents that automate product management workflows, enhance team collaboration, and drive better product outcomes—no coding required." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-blue-500/10 p-3 group-hover:bg-blue-500/20 transition-colors", children: feature.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: feature.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: feature.description })
            ] })
          ] })
        },
        index
      )) })
    ] }) })
  ] });
};
const GENWhyLearnAI = () => {
  const marketChallenges = [
    {
      icon: Users,
      title: "PM Skill Gap",
      description: "Many PMs lack hands-on experience with GenAI tools and workflows.",
      stat: "Critical"
    },
    {
      icon: Target,
      title: "Evolving Product Roles",
      description: "AI is reshaping product management—new skills are needed to stay ahead.",
      stat: "Urgent"
    },
    {
      icon: BarChart,
      title: "Scaling Product Impact",
      description: "Manual processes limit PMs' ability to scale and innovate quickly.",
      stat: "High Impact"
    }
  ];
  const solutions = [
    {
      icon: Brain,
      title: "AI-Driven Product Discovery",
      description: "Use GenAI to automate research, competitor analysis, and user feedback synthesis."
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline backlog management, sprint planning, and reporting with AI agents."
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Unlock new PM roles and leadership opportunities by mastering GenAI."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12 bg-black overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NeuralNetworkAnimation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-3 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "  mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2  border border-blue-600 rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 text-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-base font-medium", children: "GenAI Challenges & Solutions for PMs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl md:text-4xl font-bold mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Why PMs Need " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "GenAI Skills" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-blue-100", children: "See how GenAI addresses the biggest challenges in product management and opens new career paths" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: marketChallenges.map((challenge, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group p-6 rounded-xl bg-white/10  border border-white/20   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 backdrop-blur-2xl",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-3 rounded-lg  bg-black group-hover:bg-blue-100 transform group-hover:rotate-6 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(challenge.icon, { className: "w-5 h-5 text-blue-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-blue-600 tracking-wider  mb-1", children: challenge.stat }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-semibold  mb-1", children: challenge.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base  ", children: challenge.description })
              ] })
            ] })
          },
          index
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: solutions.map((solution, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group p-6 rounded-xl bg-white/10  border border-white/20   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 backdrop-blur-2xl",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-3 rounded-lg  bg-black group-hover:bg-blue-100 transform group-hover:rotate-6 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(solution.icon, { className: "w-5 h-5 text-blue-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-semibold  mb-1", children: solution.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base ", children: solution.description })
              ] })
            ] })
          },
          index
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group p-6 rounded-xl bg-white/10  border border-white/20   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 backdrop-blur-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-blue-900 mb-4", children: "Industries Where PMs Use GenAI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [
            "SaaS & Tech Products",
            "E-Commerce & Retail",
            "Healthcare & MedTech",
            "FinTech & Banking",
            "EdTech & Learning",
            "Consumer Apps"
          ].map((industry, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base  ", children: industry })
          ] }, index)) })
        ] })
      ] })
    ] }) })
  ] });
};
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
      linkedin: "https://www.linkedin.com/in/nitish-m-l-shetty-7a0206192",
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
              alt: mentor.name,
              className: "w-full h-full object-cover",
              onError: (e) => {
                const target = e.target;
                target.src = "/assets/mentor/dummyuser.webp";
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center md:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-1", children: mentor.name }),
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
const GENToolsYouWillLearn = () => {
  const [activeCategory, setActiveCategory] = reactExports.useState("GenAI for PMs");
  const projects = [
    {
      title: "AI-powered product research assistant",
      description: "Automate competitor analysis and user research using GenAI workflows"
    },
    {
      title: "AI-driven roadmap generator",
      description: "Build a tool that creates product roadmaps from user feedback and market data"
    },
    {
      title: "GenAI stakeholder update bot",
      description: "Develop an agent that automates stakeholder communications and reporting"
    },
    {
      title: "Capstone Project: GenAI-powered PM dashboard",
      description: "Create a dashboard that integrates GenAI insights for product management"
    }
  ];
  const categoryInfo = {
    "GenAI for PMs": {
      name: "GenAI for PMs",
      icon: Brain,
      description: "GenAI tools tailored for product management workflows"
    },
    "AI Agent Building": {
      name: "AI Agent Building",
      icon: Wrench,
      description: "Build and deploy GenAI agents for PM tasks"
    },
    "No-Code & Automation": {
      name: "No-Code & Automation",
      icon: Cloud,
      description: "Automate product ops with no-code GenAI tools"
    },
    "Collaboration & Reporting": {
      name: "Collaboration & Reporting",
      icon: Code,
      description: "AI-powered tools for team collaboration and reporting"
    },
    "AI Deployment": {
      name: "AI Deployment",
      icon: Rocket,
      description: "Deploy and scale GenAI solutions in product teams"
    }
  };
  const tools = [
    {
      name: "Chat-GPT",
      description: "Conversational AI for product research and user feedback analysis",
      image: "/assets/genAITools/gpt4.webp",
      category: "GenAI for PMs"
    },
    {
      name: "Claude",
      description: "AI assistant for product documentation and brainstorming",
      image: "/assets/genAITools/claude.webp",
      category: "GenAI for PMs"
    },
    {
      name: "Gemini",
      description: "Google's GenAI for product ideation and market analysis",
      image: "/assets/genAITools/gemini.webp",
      category: "GenAI for PMs"
    },
    {
      name: "LangChain",
      description: "Framework for building GenAI-powered PM applications",
      image: "/assets/genAITools/langchain.webp",
      category: "AI Agent Building"
    },
    {
      name: "CrewAI",
      description: "Multi-agent system for automating PM workflows",
      image: "/assets/genAITools/crewai.webp",
      category: "AI Agent Building"
    },
    {
      name: "AutoGen",
      description: "Tool for building autonomous GenAI agents for PM tasks",
      image: "/assets/genAITools/autogen.webp",
      category: "AI Agent Building"
    },
    {
      name: "n8n",
      description: "No-code automation platform for product ops and GenAI integration",
      image: "/assets/genAITools/n8n-seeklogo.webp",
      category: "No-Code & Automation"
    },
    {
      name: "Zapier",
      description: "Automate product management workflows with GenAI integrations",
      image: "/assets/genAITools/zapier.webp",
      category: "No-Code & Automation"
    },
    {
      name: "OpenAI API",
      description: "API access to advanced GenAI models for PM tools",
      image: "/assets/genAITools/openai-logomark.webp",
      category: "AI Deployment"
    },
    {
      name: "Google Cloud",
      description: "Deploy and scale GenAI solutions for product teams",
      image: "/assets/genAITools/google cloud.webp",
      category: "AI Deployment"
    },
    {
      name: "Slack AI",
      description: "AI-powered team collaboration and reporting for PMs",
      image: "/assets/caseStudiesLogo/slack.webp",
      category: "Collaboration & Reporting"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-6 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col gap-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-3.5 h-3.5 text-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-xs font-medium", children: "Hands-on Projects" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold  mb-2", children: "Build Real GenAI Solutions for PMs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-base max-w-2xl mx-auto", children: "Apply your skills through practical projects that solve real product management problems" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3", children: projects.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10  transition-all duration-300 hover:bg-white/10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold  ", children: project.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 pl-3.5", children: project.description })
          ]
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 max-w-[200px] mx-auto bg-blue-50 rounded-full px-3 py-1.5 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-3.5 h-3.5 text-blue-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-xs font-medium", children: "Tools & Technologies" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold   mb-2", children: "Master GenAI Tools for Product Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-base max-w-2xl mx-auto", children: "Get hands-on experience with the most powerful GenAI tools for PMs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6 justify-center", children: Object.entries(categoryInfo).map(([category, info]) => {
        const Icon = info.icon;
        const isActive = activeCategory === category;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveCategory(category),
            className: `px-3 py-2 rounded-lg border transition-all duration-300 ${isActive ? "bg-blue-50 border-blue-200 text-blue-600" : "bg-white border-gray-200 text-gray-600 hover:border-blue-200 hover:text-blue-600"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium whitespace-nowrap", children: info.name })
            ] })
          },
          category
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3", children: tools.filter((tool) => tool.category === activeCategory).map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group p-2.5 rounded-lg  border border-gray-800 hover:border-blue-200 hover:shadow-sm transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `aspect-[3/2] mb-2 rounded-md overflow-hidden ${tool.name === "DALL·E" || tool.name === "Stable Diffusion" ? "bg-black" : "bg-gray-50"} p-2 flex items-center justify-center`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: tool.image,
                    alt: tool.name,
                    className: "w-[75%] h-[75%] object-contain filter group-hover:brightness-110 transition-all duration-300"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold  mb-1", children: tool.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 line-clamp-2", children: tool.description })
            ] })
          ]
        },
        index
      )) })
    ] })
  ] }) }) });
};
const GENProjectsAndOutcomes = () => {
  const projects = [
    {
      title: "GenAI-powered product research assistant",
      description: "Automate competitor analysis and user research for product managers",
      delay: 100
    },
    {
      title: "AI-driven roadmap generator",
      description: "Create dynamic product roadmaps from user feedback and market data",
      delay: 200
    },
    {
      title: "GenAI stakeholder update bot",
      description: "Automate stakeholder communications and reporting with GenAI agents",
      delay: 300
    },
    {
      title: "Capstone Project: GenAI PM dashboard",
      description: "Build a dashboard that integrates GenAI insights for product management",
      delay: 400
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-6 my-20  overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:flex items-center gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-5/12 mb-8 lg:mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/genibg.webp", alt: "AI Projects", className: "relative rounded-3xl shadow-lg animate-fade-in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-20 blur-2xl" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-7/12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5 mb-2 animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-3.5 h-3.5 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-xs font-medium", children: "Projects & Outcomes" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold  mb-2 animate-fade-in", children: "Build Real GenAI Solutions for Product Managers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-base max-w-2xl animate-fade-in", children: "Apply your GenAI skills through hands-on projects that solve real product management challenges" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: projects.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group p-3 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 animate-slide-in",
            style: { animationDelay: `${project.delay}ms` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold  mb-0.5 group-hover:text-blue-600 transition-colors duration-300", children: project.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: project.description })
              ] })
            ] })
          },
          index
        )) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-in {
          opacity: 0;
          animation: slide-in 0.6s ease-out forwards;
        }
      ` })
  ] });
};
const GENPricing = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const features = [
    "8-week intensive program",
    "Live instructor-led sessions",
    "Real-world AI projects",
    "Industry-recognized certification",
    "Lifetime access to course content",
    "AI community membership",
    "Career guidance and support",
    "Project portfolio development",
    "Interview preparation"
  ];
  const plans = [
    {
      name: "Regular",
      currentPrice: "21,999",
      description: "Comprehensive AI training program",
      features,
      highlighted: true
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12 bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-3", children: "Invest in Your AI Future" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "Join our comprehensive AI program and master the future of technology" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container grid grid-cols-1 gap-4 items-start js px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-8 w-full mx-auto", children: plans.map((plan, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.1 },
        className: `bg-gradient-to-b min-w-[300px] w-full max-w-[400px] from-gray-900 to-black border rounded-xl p-8 shadow-xl ${plan.highlighted ? "border-blue-500 shadow-blue-500/20" : "border-gray-800"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-white mb-2", children: plan.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-4", children: plan.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-center gap-1 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-white", children: "₹" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl flex gap-2 items-center font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text", children: [
                plan.currentPrice,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-base text-gray-400 mt-1", children: "+ GST" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: plan.features.map((feature, featureIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: featureIndex * 0.05 },
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-blue-400 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-300", children: feature })
              ]
            },
            featureIndex
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              onClick: plan.highlighted ? () => setIsModalOpen(true) : void 0,
              disabled: !plan.highlighted,
              className: `w-full rounded-lg py-3 px-6 font-semibold transition-all duration-300 ${plan.highlighted ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25" : "bg-gray-700 text-gray-400 cursor-not-allowed opacity-70"}`,
              children: "🚀 Enroll Now"
            }
          )
        ]
      },
      index
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollmentModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
};
const GENFAQ = () => {
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const faqs = [
    {
      question: "I'm a product manager with no AI background. Can I take this course?",
      answer: "Absolutely! This course is designed for PMs and aspiring PMs with no prior AI or coding experience. You'll learn GenAI concepts and tools from scratch, with a focus on practical product management applications."
    },
    {
      question: "What kind of PM projects will I work on?",
      answer: "You'll build hands-on projects like GenAI-powered product research assistants, roadmap generators, stakeholder update bots, and a capstone PM dashboard. All projects are tailored to real-world product management challenges."
    },
    {
      question: "Will I get a certification after completing the course?",
      answer: "Yes, you'll receive a certification in GenAI for Product Management after completing the course and final project. This credential will help you stand out in PM job applications and career growth."
    },
    {
      question: "How will this course help my PM career?",
      answer: "You'll gain job-ready GenAI skills, build a portfolio of PM-focused AI projects, and learn how to automate and optimize product workflows. This will make you a valuable asset for any product team embracing AI."
    },
    {
      question: "What support will I get during the course?",
      answer: "You'll have access to live Q&A sessions, a PM/GenAI learning community, and lifetime access to course materials and updates. Our team is here to help you succeed!"
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 15-day refund policy if you're not satisfied and have made full payment, subject to our terms and conditions."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12 bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1.5 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HelpCircle, { className: "w-3.5 h-3.5 text-blue-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 text-xs font-medium", children: "FAQ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-3", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "Get answers to common questions about GenAI for Product Managers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: "w-full px-4 py-3 flex items-center justify-between text-left",
                onClick: () => setOpenIndex(openIndex === index ? null : index),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-white", children: faq.question }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ChevronDown,
                    {
                      className: `w-4 h-4 text-gray-400 transition-transform duration-300 ${openIndex === index ? "transform rotate-180" : ""}`
                    }
                  )
                ]
              }
            ),
            openIndex === index && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-3 text-sm text-gray-400 animate-fade-in", children: faq.answer })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
        "Still have questions? Contact our support team at",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:support@acceleratorx.com",
            className: "text-blue-400 hover:text-blue-300",
            children: "support@acceleratorx.co"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      ` })
  ] });
};
const GENMarketScope = () => {
  const marketStats = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-emerald-500" }),
      value: "85%",
      label: "PMs using AI by 2025",
      description: "By 2025, 85% of product managers will leverage AI to drive product innovation and efficiency."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5 text-blue-500" }),
      value: "3x",
      label: "Faster Product Launches",
      description: "Teams using GenAI tools deliver products to market 3x faster on average."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-purple-500" }),
      value: "70%",
      label: "AI-Driven Decisions",
      description: "70% of PMs report improved decision-making with GenAI-powered insights."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart, { className: "w-5 h-5 text-rose-500" }),
      value: "$200K+",
      label: "Top PM Salaries",
      description: "AI-savvy PMs at leading tech firms can earn $200,000+ annually."
    }
  ];
  const opportunities = [
    {
      title: "AI Product Manager",
      description: "Lead the development and launch of AI-powered products and features.",
      salary: "$120K - $200K+"
    },
    {
      title: "AI Strategy Lead",
      description: "Define and execute AI strategies for product teams and organizations.",
      salary: "$110K - $180K"
    },
    {
      title: "GenAI Solutions Architect",
      description: "Design and implement GenAI solutions for product management workflows.",
      salary: "$130K - $210K"
    },
    {
      title: "AI Product Operations",
      description: "Optimize product operations and user experience with GenAI automation.",
      salary: "$100K - $160K"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-16 bg-black overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
        style: { opacity: 0.3 }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-blue-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 text-sm font-medium", children: "GenAI Market for PMs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "GenAI is Transforming Product Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg max-w-3xl mx-auto", children: "The rise of Generative AI is revolutionizing how product managers build, launch, and scale products. Explore the booming market and career opportunities for PMs who master GenAI." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: marketStats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-white/10", children: stat.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-white", children: stat.value })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-gray-300 mb-2", children: stat.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: stat.description })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "backdrop-blur-sm rounded-2xl  ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl font-bold text-white mb-8 text-center", children: "High-Paying PM Roles in GenAI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 ", children: opportunities.map((job, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors", children: job.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mb-3", children: job.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full whitespace-nowrap", children: job.salary })
            ] })
          },
          index
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      ` })
  ] });
};
const GENLearningJourney = () => {
  const [activeWeek, setActiveWeek] = reactExports.useState(0);
  const weeks = [
    {
      title: "Week 1: GenAI Foundations & Prompt Engineering",
      cards: [
        {
          title: "GenAI in Product Management",
          content: [
            "Overview of GenAI and its impact on PM roles",
            "Key GenAI tools for product managers",
            "Case studies: GenAI in real product teams"
          ]
        },
        {
          title: "Prompt Engineering for PMs",
          content: [
            "Crafting effective prompts for product research",
            "Automating user feedback analysis",
            "Hands-on with ChatGPT, Claude, Gemini"
          ]
        }
      ]
    },
    {
      title: "Week 2: AI-Driven Planning & User Insights",
      cards: [
        {
          title: "GenAI for Roadmapping & Planning",
          content: [
            "Using GenAI for roadmap generation",
            "Sprint planning and backlog grooming with AI",
            "Integrating GenAI into PM workflows"
          ]
        },
        {
          title: "AI-Driven User Insights",
          content: [
            "Leveraging GenAI for user persona creation",
            "Automating competitor analysis",
            "Synthesizing user feedback with AI"
          ]
        }
      ]
    },
    {
      title: "Week 3: No-Code Tools & AI Agents",
      cards: [
        {
          title: "No-Code GenAI Tools for PMs",
          content: [
            "Introduction to no-code GenAI platforms",
            "Building AI-powered workflows with n8n, Zapier",
            "Automating product ops tasks"
          ]
        },
        {
          title: "AI Agent Building for PMs",
          content: [
            "Designing and deploying GenAI agents",
            "Integrating agents into product workflows",
            "Best practices for PMs using AI agents"
          ]
        }
      ]
    },
    {
      title: "Week 4: Communication & Responsible AI",
      cards: [
        {
          title: "GenAI for Stakeholder Communication",
          content: [
            "Automating stakeholder updates with GenAI",
            "AI-powered reporting and dashboards",
            "Personalizing communication at scale"
          ]
        },
        {
          title: "Responsible AI for PMs",
          content: [
            "Ethical considerations in GenAI for products",
            "Ensuring compliance and transparency",
            "Building trust with AI-driven features"
          ]
        }
      ]
    },
    {
      title: "Week 5: Capstone Project Development",
      cards: [
        {
          title: "Project Planning & Development",
          content: [
            "Define a product challenge and GenAI solution",
            "Develop and test your GenAI-powered feature",
            "Iterate based on feedback and testing"
          ]
        },
        {
          title: "Project Implementation & Testing",
          content: [
            "Build working prototype or detailed mockup",
            "Conduct user testing and gather feedback",
            "Refine solution based on insights"
          ]
        }
      ]
    },
    {
      title: "Week 6: Project Presentation & Career Growth",
      cards: [
        {
          title: "Capstone Project Showcase",
          content: [
            "Present your project to mentors and peers",
            "Demonstrate impact and learnings",
            "Receive feedback and iterate"
          ]
        },
        {
          title: "Career Acceleration",
          content: [
            "Building your GenAI PM portfolio",
            "Interview prep for AI-focused PM roles",
            "Exploring freelance and consulting opportunities"
          ]
        }
      ]
    },
    {
      title: "Week 7: Advanced GenAI Product Strategies",
      cards: [
        {
          title: "Scaling GenAI Solutions",
          content: [
            "Strategies for scaling GenAI features in products",
            "Managing AI-driven product roadmaps",
            "Cross-functional collaboration for AI initiatives"
          ]
        },
        {
          title: "AI Product Metrics & Analytics",
          content: [
            "Defining success metrics for GenAI features",
            "Using analytics to improve AI products",
            "A/B testing and user feedback loops"
          ]
        }
      ]
    },
    {
      title: "Week 8: Industry Applications & Future Trends",
      cards: [
        {
          title: "GenAI in Different Industries",
          content: [
            "Case studies: GenAI in healthcare, finance, and more",
            "Adapting GenAI solutions to industry needs",
            "Compliance and ethical considerations by sector"
          ]
        },
        {
          title: "Future of Product Management with AI",
          content: [
            "Emerging trends in GenAI and product management",
            "Preparing for the next wave of AI innovation",
            "Building a long-term GenAI career plan"
          ]
        }
      ]
    }
  ];
  const getWeekIcon = (weekIndex) => {
    const icons = [BookOpen, Brain, Cloud, Users, Rocket, Calendar];
    return icons[weekIndex] || BookOpen;
  };
  const nextWeek = () => {
    setActiveWeek((prev) => (prev + 1) % weeks.length);
  };
  const prevWeek = () => {
    setActiveWeek((prev) => (prev - 1 + weeks.length) % weeks.length);
  };
  const WeekIcon = getWeekIcon(activeWeek);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12 bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-96 h-96 bottom-0 right-0 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-3 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-sm font-medium", children: "Learning Journey" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: "Your GenAI PM Learning Path" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg max-w-2xl", children: "An 8-week intensive journey to master GenAI for product management and accelerate your PM career" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prevWeek,
            className: "p-2 rounded-full bg-[#111827] text-white hover:bg-[#1F2937] transition-colors",
            "aria-label": "Previous week",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: weeks.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveWeek(index),
            className: `w-2.5 h-2.5 rounded-full transition-all ${activeWeek === index ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"}`,
            "aria-label": `Go to week ${index + 1}`
          },
          index
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: nextWeek,
            className: "p-2 rounded-full bg-[#111827] text-white hover:bg-[#1F2937] transition-colors",
            "aria-label": "Next week",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-6 h-6" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-2.5 rounded-lg bg-blue-500/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WeekIcon, { className: "w-6 h-6 text-blue-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-2", children: weeks[activeWeek].title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-300", children: [
              "Week ",
              activeWeek + 1,
              " of 8 - ",
              weeks[activeWeek].cards.length,
              " learning modules"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: weeks[activeWeek].cards.map((card, cardIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-[#1F2937]/70 rounded-lg p-4 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:bg-[#1F2937]/90",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-lg font-semibold text-white mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-blue-400" }),
                card.title
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: card.content.map((point, pointIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-gray-300 text-sm flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full bg-blue-400 flex-shrink-0 mt-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: point })
              ] }, pointIndex)) })
            ]
          },
          cardIndex
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between text-sm text-gray-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Week ",
            activeWeek + 1,
            " of 8"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-2 bg-gray-700 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500",
                style: { width: `${(activeWeek + 1) / 8 * 100}%` }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              Math.round((activeWeek + 1) / 8 * 100),
              "%"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
const GenAiForPMEntry = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("GenAI for PM");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENIntroduction, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENWhoShouldEnroll, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENBYOA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENMarketScope, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENWhyLearnAI, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENLearningJourney, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENMentors, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENToolsYouWillLearn, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENProjectsAndOutcomes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENPricing, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GENFAQ, {})
  ] });
};
export {
  GenAiForPMEntry as default
};
