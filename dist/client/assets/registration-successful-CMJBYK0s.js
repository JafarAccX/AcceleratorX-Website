import { r as reactExports, j as jsxRuntimeExports } from "./main-Dasux6OQ.js";
import { m as motion } from "./proxy-CFfpntJW.js";
function RegistrationSuccess() {
  const [isLoading, setIsLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-900 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-300 text-lg", children: "Loading your enrollment details..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-gray-900 flex items-center justify-center px-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl w-full text-center space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "flex justify-center",
            initial: { scale: 0 },
            animate: { scale: 1 },
            transition: { delay: 0.2, type: "spring", stiffness: 100 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-16 h-16 text-green-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.path,
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M5 13l4 4L19 7",
                initial: { pathLength: 0 },
                animate: { pathLength: 1 },
                transition: { delay: 0.5, duration: 0.8 }
              }
            ) }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "space-y-4",
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { delay: 0.4 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-white", children: "Thank You!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-300", children: "Your enrollment for Product Teardown has been successfully submitted." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "space-y-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30",
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { delay: 1 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.h2,
                  {
                    className: "text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                    initial: { y: -20 },
                    animate: { y: 0 },
                    transition: { delay: 1.2, type: "spring", stiffness: 100 },
                    children: "Join Our Community"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    className: "text-gray-400",
                    initial: { y: -20 },
                    animate: { y: 0 },
                    transition: { delay: 1.3, type: "spring", stiffness: 100 },
                    children: "for further event updates."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-1 gap-4 max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.a,
                {
                  href: "https://chat.whatsapp.com/IRvuHFHrx8P7AU4QduC37L",
                  target: "_blank",
                  rel: "noopener noreferrer nofollow",
                  className: "group relative overflow-hidden rounded-xl p-0.5 transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#25D366] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 max-w-[400px] mx-auto",
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  initial: { x: -50, opacity: 0 },
                  animate: { x: 0, opacity: 1 },
                  transition: { delay: 1.4 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-green-600 to-green-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-4 bg-gray-900 p-4 rounded-[10px] transition-all duration-300 group-hover:bg-gray-900/80", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-green-500/10 text-green-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lg text-white group-hover:text-green-400 transition-colors duration-300", children: "Join WhatsApp" }) })
                    ] })
                  ]
                }
              ) })
            ]
          }
        )
      ] })
    }
  );
}
export {
  RegistrationSuccess as default
};
