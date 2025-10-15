import { r as reactExports, j as jsxRuntimeExports, S as SEO, k as motion, L as Link } from "./main-DG5q6AAQ.js";
import { M as MapPin } from "./map-pin-BmAIKDIR.js";
import { C as Clock } from "./clock-CgHd6yq6.js";
import { A as ArrowRight } from "./arrow-right-DEAVGxQM.js";
import { C as Check } from "./check-DPEgDZut.js";
const Events = () => {
  const [activeTab, setActiveTab] = reactExports.useState("events");
  const [workshopsTabs, setWorkshopsTabs] = reactExports.useState("upcomming");
  const AllworkshopsDetails = [
    {
      name: "Generative AI for Marketing ",
      mode: "Online (Zoom)",
      time: "Oct 11, 2025 7:00 PM",
      link: "/workshop/gen-ai-masterclass-bxwcy",
      completed: false
    },
    {
      name: "AI Agent building Bootcamp (2 HR)",
      mode: "Online (Zoom)",
      time: "Sep 10, 2025 7:00 PM",
      link: "/workshop/gen-ai-masterclass-thidtx",
      completed: true
    },
    {
      name: "Idea to Product Live (Bootcamp)",
      mode: "Online (Zoom)",
      time: "Sep 7, 2025 12:30 PM",
      link: "/workshop/pm-masterclass",
      completed: true
    },
    {
      name: "Automating SQL queries for Data Analysis",
      mode: "Online (Zoom)",
      time: "Sep 6, 2025 8:30 PM",
      link: "/workshop/da-masterclass-bxwxy",
      completed: true
    },
    {
      name: "Context Engineering",
      mode: "Online (Zoom)",
      time: "Aug 29, 2025  9:00 PM",
      link: "/workshop/gen-ai-masterclass-thidtx",
      completed: true
    },
    {
      name: "Learn everything n8n !",
      mode: "Online (Zoom)",
      time: "Aug 5, 2025  7:00 PM",
      link: "/workshop/gen-ai-masterclass-bxwcy",
      completed: true
    },
    {
      name: "Learn to Build your RAG application ",
      mode: "Online (Zoom)",
      time: "July 23, 2025  7:30 PM",
      link: "/workshop/gen-ai-masterclass-thidtx",
      completed: true
    },
    {
      name: "Visual Data Analysis in AI Era",
      mode: "Online (Zoom)",
      time: "July 21, 2025 8:30 PM",
      link: "/workshop/da-masterclass-bxwxy",
      completed: true
    },
    {
      name: "Build Your Own AI Agents Live",
      mode: "Online (Zoom)",
      time: "July 7, 2025 8:30 PM",
      link: "/workshop/da-masterclass-bxwxy",
      completed: true
    },
    {
      name: "Social Media Lead Gen Magnet using make.com",
      mode: "Online (Zoom)",
      time: "June 29, 2025 11:30 AM IST",
      link: "/workshop/gen-ai-masterclass",
      completed: true
    },
    {
      name: "Building AI Products (Marathon Session - 3 Hr ) ",
      mode: "Online (Zoom)",
      time: "July 13, 2025 11:00 AM India",
      link: "/workshop/pm-masterclass",
      completed: true
    },
    {
      name: "Automate workflows using n8n - Practical Implementation",
      mode: "Online (Zoom)",
      time: "June 21, 2025 11:30 AM",
      link: "/workshop/gen-ai-masterclass-thidtx",
      completed: true
    },
    {
      name: "Automate workflows using n8n - Basic to Advance",
      mode: "Online (Zoom)",
      time: "June 22, 2025 11:00 AM",
      link: "/workshop/gen-ai-masterclass",
      completed: true
    },
    {
      name: "Build your first AI Analyst Live",
      mode: "Online (Zoom)",
      time: "June 24, 2025 7:30 PM",
      link: "/workshop/da-masterclass-bxwxy",
      completed: true
    },
    {
      name: "Automate workflows using n8n - Practical Implementation (Part II)",
      mode: "Online (Zoom)",
      time: "June 15, 2025 11:30 AM",
      link: "/workshop/gen-ai-masterclass",
      completed: true
    },
    {
      name: "How to do data analysis using AI ",
      mode: "Online (Zoom)",
      time: "June 13, 2025 7:30 PM",
      link: "/workshop/da-masterclass-bxwxy",
      completed: true
    },
    {
      name: "Gen Ai for PM's",
      mode: "Online (Zoom)",
      time: "June 07, 2025 07:30 PM",
      link: "/workshop/pm-masterclass",
      completed: true
    },
    {
      name: "Automate workflows using n8n - Practical Implementation",
      mode: "Online (Zoom)",
      time: "June 09, 2025 07:30 PM",
      link: "/workshop/gen-ai-masterclass-thidtx",
      completed: true
    },
    {
      name: "Tableau Zero to Master",
      mode: "Online (Zoom)",
      time: "May 17, 2025 8:00 PM",
      link: "/workshop/da-masterclass-bxwxy",
      completed: true
    },
    {
      name: "Build YourPersonal Content Creator with AI",
      mode: "Online (Zoom)",
      time: "May 21, 2025 8:00 PM",
      link: "/workshop/gen-ai-masterclass-thidtx",
      completed: true
    },
    {
      name: "Upgrade Your Data Analysis Techniques with AI",
      mode: "Online (Zoom)",
      time: "23th May, 2025 08:00 PM",
      link: "/workshop/da-masterclass",
      completed: true
    },
    {
      name: "Automate anything with n8n",
      mode: "Online (Zoom)",
      time: "May 15th 2025 08:00 PM",
      link: "/workshop/gen-ai-masterclass-bxwcy",
      completed: true
    },
    {
      name: "Aytomate daily workflow using Generative AI tools",
      mode: "Online (Zoom)",
      time: "23rd Feb 2025, 10:30 AM",
      link: "/workshop/gen-ai-masterclass",
      completed: true
    },
    {
      name: "How to Run High-Performing Meta Ads for Your Business?",
      mode: "Online (Zoom)",
      time: "Feb 21 2025 4:00 PM",
      link: "/workshop/dm-masterclass",
      completed: true
    },
    {
      name: "UX Designing for Product Management",
      mode: "Online (Zoom)",
      time: "20th February, 07:00 PM",
      link: "/workshop/pm-masterclass",
      completed: true
    }
  ];
  const AllEventsDetails = [
    {
      name: "Product Inovation Challenge",
      mode: "Online (Zoom )",
      val: "Daily tasks and live sessions",
      time: "May 8th 2025 - May 14th 2025",
      link: "/event/PMtakedown/view",
      completed: true
    }
  ];
  const workshopsDetails = AllworkshopsDetails.filter((work) => {
    if (workshopsTabs === "upcomming" && work.completed === false) {
      return work;
    }
    if (workshopsTabs === "past" && work.completed === true) {
      return work;
    }
  });
  const eventsDetails = AllEventsDetails.filter((work) => {
    if (workshopsTabs === "upcomming" && work.completed === false) {
      return work;
    }
    if (workshopsTabs === "past" && work.completed === true) {
      return work;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-900 to-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " mt-10 md:mt-4 max-w-screen-lg mx-auto p-4 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen  text-white md:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex justify-between items-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            className: "text-2xl md:text-4xl font-bold",
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            children: activeTab === "events" ? "Events" : "Workshops"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-800/50 rounded-full p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveTab("events"),
              className: `px-6 py-2 rounded-full transition-all duration-300 ${activeTab === "events" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"}`,
              children: "Events"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveTab("workshops"),
              className: `px-6 py-2 rounded-full transition-all duration-300 ${activeTab === "workshops" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"}`,
              children: "Workshops"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-800/50 rounded-full p-1 mb-2 max-w-[215px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setWorkshopsTabs("upcomming"),
            className: `px-6 py-2 rounded-full transition-all duration-300 ${workshopsTabs === "upcomming" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"}`,
            children: "Upcoming"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setWorkshopsTabs("past"),
            className: `px-6 py-2 rounded-full transition-all duration-300 ${workshopsTabs === "past" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"}`,
            children: "Past"
          }
        )
      ] }) }),
      activeTab === "events" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-start justify-between", children: [
        eventsDetails.length <= 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:flex-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-gray-800/70 to-gray-900/90 rounded-xl p-6 border border-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl pl-4", children: "No Events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(EventThumbnail, { num: 9 })
        ] }) }) }),
        eventsDetails.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:flex-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "bg-gradient-to-br from-gray-800/70 to-gray-900/90 rounded-xl p-6 border border-gray-800",
            initial: { opacity: 0, y: 8 },
            animate: {
              opacity: [1, 0.8, 1],
              boxShadow: [
                "0 0 0px rgba(168, 85, 247, 0.0)",
                "0 0 20px rgba(168, 85, 247, 0.6)",
                "0 0 0px rgba(168, 85, 247, 0.0)"
              ],
              borderColor: ["rgba(168, 85, 247, 0.1)", "rgba(168, 85, 247, 0.6)", "rgba(168, 85, 247, 0.1)"],
              y: 0
            },
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-semibold mb-4", children: [
                  " ",
                  event.name
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-amber-400 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "mr-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    " ",
                    event.mode
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "mr-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: event.val })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: event.link, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-6 flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Event Info" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ArrowRight,
                    {
                      size: 16,
                      className: "ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 mt-2", children: [
                  " ",
                  event.time
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(EventThumbnail, { num: 9 })
            ] })
          }
        ) }, event.time))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 max-w-screen-lg items-center justify-center gap-4", children: activeTab === "workshops" && workshopsDetails.map((workshop) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col lg:flex-row items-start justify-between h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:flex-1 w-full h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "bg-gradient-to-br from-gray-800/70 to-gray-900/90 rounded-xl p-6 border border-gray-800 h-full",
          initial: { opacity: 0, y: 8 },
          animate: {
            opacity: [1, 0.8, 1],
            boxShadow: [
              "0 0 0px rgba(168, 85, 247, 0.0)",
              "0 0 20px rgba(168, 85, 247, 0.6)",
              "0 0 0px rgba(168, 85, 247, 0.0)"
            ],
            borderColor: [
              "rgba(168, 85, 247, 0.1)",
              "rgba(168, 85, 247, 0.6)",
              "rgba(168, 85, 247, 0.1)"
            ],
            y: 0
          },
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-around h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold mb-4", children: workshop.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-amber-400 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "mr-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: workshop.mode })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "mr-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mt-2", children: workshop.time })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: workshop.completed ? "" : workshop.link, "aria-disabled": true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: workshop.completed ? "mt-6 flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group hover:cursor-not-allowed" : "hover:cursor-pointer mt-6 flex items-center bg-gray-950 px-4 py-2 rounded-lg transition-all duration-300 group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: workshop.completed ? "Completed" : "Workshop Info" }),
                  workshop.completed ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Check,
                    {
                      size: 16,
                      className: "ml-2 transition-transform duration-300 text-green-600 group-hover:translate-x-1"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ArrowRight,
                    {
                      size: 16,
                      className: "ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    }
                  )
                ]
              }
            ) })
          ] })
        }
      ) }) }, workshop.time)) })
    ] }) }) })
  ] });
};
function EventThumbnail({ num }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "w-24 h-24 relative hidden sm:block",
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay: 0.6 },
      whileHover: { scale: 1.05 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 grid-rows-3 gap-1", children: Array.from({ length: num }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "w-7 h-7 rounded-full bg-gradient-to-br from-purple-300 to-gray-500",
          initial: { opacity: 0.5 },
          animate: { opacity: [0.5, 0.8, 0.5] },
          transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
            ease: "easeInOut"
          }
        },
        i
      )) })
    }
  );
}
export {
  Events as default
};
