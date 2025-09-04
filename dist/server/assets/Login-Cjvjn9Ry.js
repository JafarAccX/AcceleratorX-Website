import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { S as SEO, d as authService } from "../entry-server.js";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router";
import "react-dom/server";
import "@remix-run/router";
import "react-dom";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "react-icons/pi";
import "@tanstack/react-query";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { success } = await authService.login(formData.email, formData.password);
      if (success) {
        toast.success("Login successful!");
        navigate("/admin");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "rounded-full bg-blue-100 p-3", children: /* @__PURE__ */ jsx(Lock, { className: "h-6 w-6 text-blue-600" }) }) }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "Admin Login" })
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
          children: /* @__PURE__ */ jsx("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "email",
                  className: "block text-sm font-medium text-gray-700",
                  children: "Email address"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx(
                "input",
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  autoComplete: "email",
                  required: true,
                  value: formData.email,
                  onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                  className: "appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "password",
                  className: "block text-sm font-medium text-gray-700",
                  children: "Password"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx(
                "input",
                {
                  id: "password",
                  name: "password",
                  type: "password",
                  autoComplete: "current-password",
                  required: true,
                  value: formData.password,
                  onChange: (e) => setFormData({ ...formData, password: e.target.value }),
                  className: "appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: loading,
                className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? "opacity-50 cursor-not-allowed" : ""}`,
                children: loading ? "Signing in..." : "Sign in"
              }
            ) })
          ] }) })
        }
      )
    ] })
  ] });
};
export {
  Login as default
};
