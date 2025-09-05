import { e as createLucideIcon, i as useCourseContext, r as reactExports, j as jsxRuntimeExports, B as Briefcase, z as zt } from "./main-C2SXHoHD.js";
import { c as createClient } from "./index-BS9ztMUp.js";
import { S as Star } from "./star-DgGizSUC.js";
import { C as Clock } from "./clock-D1SLSFms.js";
import { U as Users } from "./users-Bl8ZOq4h.js";
import { S as Send } from "./send-D8vOi0ax.js";
import { A as Award } from "./award-DZXrA0q1.js";
import { C as Code } from "./code-C9ahXdTk.js";
import { T as Target } from "./target-bYw-6Zpe.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UsersRound = createLucideIcon("UsersRound", [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
]);
const supabaseUrl = "https://grdwabozcrwjwdytwpqa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZHdhYm96Y3J3andkeXR3cHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4Mjk2ODYsImV4cCI6MjA0NzQwNTY4Nn0.zD19Z3vROhfr7I_IL9Ru0bB500ClQi0D5A_QpiYWQYg";
const supabase = createClient(supabaseUrl, supabaseKey);
function PMFlyers() {
  const { selectedCourse } = useCourseContext();
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    workExperience: "",
    course: selectedCourse || "PM_Flyers"
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      zt.error("Please enter a valid 10-digit phone number");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      zt.error("Please enter a valid email address");
      return;
    }
    try {
      const { error } = await supabase.from("enrollments").insert([
        {
          full_name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          education_level: formData.education,
          course: formData.course,
          work_experience: formData.workExperience,
          designation: formData.designation
        }
      ]);
      if (error) {
        if (error.code === "23505") {
          zt.error("You have already enrolled with this email address");
        } else {
          zt.error("Failed to submit enrollment. Please try again.");
        }
        console.error("Error submitting form:", error);
        return;
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        designation: "",
        workExperience: "",
        course: selectedCourse || "PM_Flyers"
      });
      zt.success("Thank you for enrolling! We'll contact you soon.");
    } catch (error) {
      console.error("Error:", error);
      zt.error("Something went wrong. Please try again.");
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid-pattern opacity-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full opacity-10 blur-xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 right-10 w-40 h-40 bg-indigo-300 rounded-full opacity-10 blur-xl animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8 sm:py-12 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 text-left space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-3 py-1.5 bg-purple-500/20 rounded-full text-purple-300 font-medium text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 mr-2" }),
            "#1 IN EXECUTIVE EDUCATION"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/companylogo-new.webp",
              alt: "AcceleratorX Logo",
              className: "w-48 h-auto"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-5xl font-bold text-white leading-tight", children: [
            "Professional Certificate in",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-300", children: "Product Management" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-xl", children: "Get Certified and Master the fundamentals of product management with the most hands-on product management program. Build Your Dream Product (BYDP) as part of the program." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-purple-400 mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-semibold", children: "Duration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-200", children: "4 Months" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-purple-400 mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-semibold", children: "Enrolled" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-200", children: "50+ this month" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-purple-300 font-semibold mb-2", children: "EIE Malta Certificate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Globally recognized certification" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-purple-300 font-semibold mb-2", children: "Build Your Dream Product" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Hands-on product development" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-purple-300 font-semibold mb-2", children: "1:1 Mentorship" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Personal guidance from experts" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-purple-300 font-semibold mb-2", children: "Job Priority Access" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Exclusive career opportunities" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 sticky top-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white mb-2", children: "Begin Your PM Journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "Limited seats available" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "name",
                    className: "block text-sm font-medium text-gray-300 mb-1",
                    children: "Full Name"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    id: "name",
                    name: "name",
                    required: true,
                    value: formData.name,
                    onChange: handleChange,
                    className: "w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40",
                    placeholder: "Enter your full name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "email",
                    className: "block text-sm font-medium text-gray-300 mb-1",
                    children: "Email Address"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    id: "email",
                    name: "email",
                    required: true,
                    value: formData.email,
                    onChange: handleChange,
                    className: "w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40",
                    placeholder: "Enter your email"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "phone",
                    className: "block text-sm font-medium text-gray-300 mb-1",
                    children: "Phone Number"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    id: "phone",
                    name: "phone",
                    required: true,
                    value: formData.phone,
                    onChange: handleChange,
                    className: "w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40",
                    placeholder: "Your phone number",
                    pattern: "[0-9]{10}"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "education",
                    className: "block text-sm font-medium text-gray-300 mb-1",
                    children: "Education Level"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    id: "education",
                    name: "education",
                    required: true,
                    value: formData.education,
                    onChange: handleChange,
                    className: "w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40",
                    placeholder: "Highest qualification"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "designation",
                    className: "block text-sm font-medium text-gray-300 mb-1",
                    children: "Current Role"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    id: "designation",
                    name: "designation",
                    required: true,
                    value: formData.designation,
                    onChange: handleChange,
                    className: "w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40",
                    placeholder: "Your designation"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "workExperience",
                    className: "block text-sm font-medium text-gray-300 mb-1",
                    children: "Work Experience (in years)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    id: "workExperience",
                    name: "workExperience",
                    required: true,
                    value: formData.workExperience,
                    onChange: handleChange,
                    className: "w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40",
                    placeholder: "Years of experience"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "md:col-span-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Apply Now" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2 mt-4 space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm text-blue-200", children: [
                "For enquiries call:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-300", children: "9916859555" })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-blue-500/20 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-medium text-orange-300 mb-2", children: "Program Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5 text-orange-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-200 text-xs", children: "EIE Malta Certificate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-3.5 h-3.5 text-orange-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-200 text-xs", children: "Build Your Dream Product" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-3.5 h-3.5 text-orange-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-200 text-xs", children: "AI PM Specialization" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-3.5 h-3.5 text-orange-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-200 text-xs", children: "Growth PM Specialization" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-blue-500/20 pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { className: "w-3.5 h-3.5 text-orange-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-200 text-xs", children: "50+ Enrolled this month" })
          ] }) }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  PMFlyers as default
};
