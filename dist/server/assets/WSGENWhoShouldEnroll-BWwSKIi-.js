import { jsx, jsxs } from "react/jsx-runtime";
import { Users } from "lucide-react";
const WSGENWhoShouldEnrollC = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "relative py-12 bg-black px-4  ", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-3 relative z-10 space-y-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2  gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-start   rounded-xl p-6 text-white shadow-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-screen-md items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 flex-1 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all", children: [
            /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-blue-600" }),
            /* @__PURE__ */ jsx("span", { className: "text-blue-600 text-sm font-medium", children: "Who Should Attend" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-4xl font-bold mb-3", children: /* @__PURE__ */ jsxs("span", { className: "text-blue-500", children: [
            "Real-Time Integrations ",
            /* @__PURE__ */ jsx("br", {}),
            " Let us Show You"
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: " md:text-lg text-blue-100 mb-4", children: "Join us and learn how to build real-world workflow automations using make.com —no technical background required." })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1 mb-2 text-base", children: [
          /* @__PURE__ */ jsx("li", { children: "Auto-capture leads from social media" }),
          /* @__PURE__ */ jsx("li", { children: "Seamless email drip flow" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-2 text-blue-400 font-medium", children: "– all using Make.com" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/make-trigger-action-l.webp",
            alt: "Students learning together",
            className: "object-contain w-full rounded-md  transform group-hover:scale-105 transition-transform duration-500"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center mt-6 mx-auto max-w-[200px]", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: scrollToForm,
        className: "block w-full mt-4 px-6 py-3 max-w-screen-sm bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25",
        children: "Register Now"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2  gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/make-renderform-setup-l.webp",
            alt: "Students learning together",
            className: "object-contain w-full rounded-md  transform group-hover:scale-105 transition-transform duration-500"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-start   rounded-xl p-6 text-white shadow-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-screen-md items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 flex-1 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all", children: [
            /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-blue-600" }),
            /* @__PURE__ */ jsx("span", { className: "text-blue-600 text-sm font-medium", children: "POST-WEBINAR VALUE" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-xl md:text-4xl font-bold mb-3 text-blue-500", children: [
            "This Isn’t Just a Workshop ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-white", children: "– It’s a System." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 mb-4", children: "After the session, you’ll get:" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1 mb-2 text-base", children: [
          /* @__PURE__ */ jsx("li", { children: "Workflow Templates" }),
          /* @__PURE__ */ jsx("li", { children: "Recording Access" }),
          /* @__PURE__ */ jsx("li", { children: "Community Support" }),
          /* @__PURE__ */ jsx("li", { children: "Fast-Track Execution Plan" })
        ] })
      ] })
    ] })
  ] }) });
};
export {
  WSGENWhoShouldEnrollC as default
};
