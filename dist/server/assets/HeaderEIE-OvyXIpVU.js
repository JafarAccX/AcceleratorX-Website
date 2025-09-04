import { jsx } from "react/jsx-runtime";
const HeaderEIE = () => {
  return /* @__PURE__ */ jsx("nav", { className: "flex flex-row items-center px-4 md:px-8 sticky top-0 left-0 right-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsx(
    "img",
    {
      src: "/companylogo-new.webp",
      alt: "AcceleratorX Logo",
      className: "w-auto h-20 text-center"
    }
  ) }) });
};
export {
  HeaderEIE as H
};
