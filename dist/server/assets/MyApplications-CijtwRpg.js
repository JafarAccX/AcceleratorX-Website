import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { format, parseISO } from "date-fns";
import { u as useUser } from "../entry-server.js";
import { a as useGetCustomerApplications } from "./customer-D8jXU4yb.js";
import "react";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-dom";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-hot-toast";
import "lucide-react";
import "axios";
import "react-icons/pi";
import "@tanstack/react-query";
const statusColors = {
  applied: "bg-blue-900 text-blue-300",
  pending: "bg-yellow-900 text-yellow-300",
  shortlisted: "bg-green-900 text-green-300",
  rejected: "bg-red-900 text-red-300"
};
const MyApplications = () => {
  const { user } = useUser();
  const { data: myJobs, isLoading } = useGetCustomerApplications(user?.CustId || "");
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-64", children: /* @__PURE__ */ jsx("div", { className: "w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8 mt-12", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6 text-white", children: "My Job Applications" }),
    myJobs?.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center text-gray-400", children: /* @__PURE__ */ jsx("p", { children: "You have not applied for any jobs yet." }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("p", { className: "text-gray-400 mb-4", children: [
        "You have applied for ",
        /* @__PURE__ */ jsx("strong", { children: myJobs?.length }),
        " job(s)."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: myJobs?.map((application) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800 rounded-2xl border border-gray-700 hover:shadow-lg transition duration-200 overflow-hidden",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center min-h-[120px] gap-4 p-4 border-b border-gray-700", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: application.CompanyLogoURL,
                  alt: application.CompanyName,
                  className: "w-12 h-12 object-cover rounded-md bg-white"
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white", children: application.JobName }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: application.CompanyName })
              ] }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `ml-auto px-3 py-1 text-sm font-medium rounded-full ${statusColors[application.Result.toLowerCase()] || "bg-gray-700 text-gray-300"}`,
                  children: application.Result
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 text-sm text-gray-300 grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Applied On" }),
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: application.CreatedDate ? format(parseISO(application.CreatedDate), "PPP") : "Not available" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Location" }),
                /* @__PURE__ */ jsxs("p", { className: "font-medium", children: [
                  application.City,
                  ", ",
                  application.Country
                ] })
              ] })
            ] })
          ]
        },
        application.Id
      )) })
    ] })
  ] });
};
export {
  MyApplications as default
};
