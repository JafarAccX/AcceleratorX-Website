import { j as jsxRuntimeExports } from "./main-CP32HAa4.js";
const NeuralNetworkAnimation = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      className: "w-full h-full",
      viewBox: "0 0 800 600",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "nodes", children: [
          [100, 200, 300].map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "150",
              cy: y,
              r: "20",
              className: "fill-blue-500 animate-pulse",
              style: { animationDelay: `${i * 0.2}s` }
            },
            `input-${i}`
          )),
          [150, 250, 350].map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "400",
              cy: y,
              r: "20",
              className: "fill-blue-400 animate-pulse",
              style: { animationDelay: `${i * 0.3}s` }
            },
            `hidden-${i}`
          )),
          [200, 300].map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "650",
              cy: y,
              r: "20",
              className: "fill-blue-300 animate-pulse",
              style: { animationDelay: `${i * 0.4}s` }
            },
            `output-${i}`
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "connections", children: [
          [100, 200, 300].map(
            (inputY, i) => [150, 250, 350].map((hiddenY, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "line",
              {
                x1: "170",
                y1: inputY,
                x2: "380",
                y2: hiddenY,
                className: "stroke-blue-500/30 animate-pulse",
                style: { animationDelay: `${(i + j) * 0.1}s` },
                strokeWidth: "2"
              },
              `conn1-${i}-${j}`
            ))
          ),
          [150, 250, 350].map(
            (hiddenY, i) => [200, 300].map((outputY, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "line",
              {
                x1: "420",
                y1: hiddenY,
                x2: "630",
                y2: outputY,
                className: "stroke-blue-400/30 animate-pulse",
                style: { animationDelay: `${(i + j) * 0.1}s` },
                strokeWidth: "2"
              },
              `conn2-${i}-${j}`
            ))
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { className: "data-flow", children: [100, 200, 300].map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            className: "fill-white animate-ping",
            style: { animationDelay: `${i * 0.5}s` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "animateMotion",
              {
                dur: "3s",
                repeatCount: "indefinite",
                path: `M 150 ${y} Q 275 ${y} 400 ${y + 50} T 650 ${y + 100}`
              }
            )
          },
          `flow-${i}`
        )) })
      ]
    }
  ) });
};
export {
  NeuralNetworkAnimation as N
};
