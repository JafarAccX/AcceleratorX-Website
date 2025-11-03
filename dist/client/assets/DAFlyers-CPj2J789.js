import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, B as Briefcase, c as _t } from "./main-DD2uCxhE.js";
import { c as createClient } from "./index-eXoWi83j.js";
import { S as Star } from "./star-DInGSxH8.js";
import { D as DollarSign } from "./dollar-sign-Cj0vi2OM.js";
import { U as Users } from "./users-Ci7-1-Pr.js";
import { C as Clock } from "./clock-iC5WPI28.js";
import { A as Award } from "./award-BU5g3ElA.js";
import { T as Target } from "./target-CgtNxCik.js";
import { S as Send } from "./send-Q-jNQvnS.js";
const supabaseUrl = "https://grdwabozcrwjwdytwpqa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZHdhYm96Y3J3andkeXR3cHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4Mjk2ODYsImV4cCI6MjA0NzQwNTY4Nn0.zD19Z3vROhfr7I_IL9Ru0bB500ClQi0D5A_QpiYWQYg";
const supabase = createClient(supabaseUrl, supabaseKey);
function DAFlyers() {
  const { selectedCourse } = useCourseContext();
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    workExperience: "",
    course: selectedCourse || "DA_Flyers"
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      _t.error("Please enter a valid 10-digit phone number");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      _t.error("Please enter a valid email address");
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
          _t.error("You have already enrolled with this email address");
        } else {
          _t.error("Failed to submit enrollment. Please try again.");
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
        course: selectedCourse || "DA_Flyers"
      });
      _t.success("Thank you for enrolling! We'll contact you soon.");
    } catch (error) {
      console.error("Error:", error);
      _t.error("Something went wrong. Please try again.");
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid-pattern opacity-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 blur-xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full opacity-10 blur-xl animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8 sm:py-12 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 text-left space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-3 py-1.5 bg-yellow-500/20 rounded-full text-yellow-300 font-medium text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 mr-2" }),
            "UNIVERSITY BACKED PROGRAM"
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
            "Master Data Analytics with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "EIE European Business School Malta" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-purple-100 max-w-xl", children: "Unlock your potential with a world-class program designed for ambitious professionals. Backed by the renowned EIE European Business School Malta." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-3 sm:p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm hover:border-yellow-500/30 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mb-1 sm:mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-sm sm:text-base font-semibold", children: "Avg. Salary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-200 text-sm sm:text-base", children: "12 LPA" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-3 sm:p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm hover:border-yellow-500/30 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mb-1 sm:mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-sm sm:text-base font-semibold", children: "Job Openings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-200 text-sm sm:text-base", children: "29,120+" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-3 sm:p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm hover:border-yellow-500/30 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mb-1 sm:mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm sm:text-base font-semibold", children: "Duration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-200 text-sm sm:text-base", children: "22 Weeks" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 sm:mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg font-semibold text-white mb-2", children: "Tools You'll Master" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300", children: "Excel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300", children: "SQL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300", children: "Tableau" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300", children: "Power BI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300", children: "Python" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-900/30 px-2.5 py-1 rounded text-xs text-purple-300", children: "Google Analytics" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-yellow-400 mb-1.5", children: "Program Benefits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-900/30 p-2 rounded border border-purple-800/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5 text-yellow-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-purple-300", children: "EIE Malta Certificate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400", children: "Industry-recognized" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-900/30 p-2 rounded border border-purple-800/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-yellow-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-purple-300", children: "1:1 Mentorship" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400", children: "Expert guidance" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-900/30 p-2 rounded border border-purple-800/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-3.5 h-3.5 text-yellow-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-purple-300", children: "Real Projects" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400", children: "Industry case studies" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-900/30 p-2 rounded border border-purple-800/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-3.5 h-3.5 text-yellow-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-purple-300", children: "Job Support" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400", children: "Career assistance" })
                  ] })
                ] }) })
              ] })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 sticky top-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white mb-2", children: "Begin Your Data Analytics Journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-200 text-sm", children: "Limited seats available for next cohort" })
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
                    className: "block text-sm font-medium text-purple-200 mb-2",
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
                    className: "w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent",
                    placeholder: "Enter your full name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "email",
                    className: "block text-sm font-medium text-purple-200 mb-2",
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
                    className: "w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent",
                    placeholder: "Enter your email"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "phone",
                    className: "block text-sm font-medium text-purple-200 mb-2",
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
                    className: "w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent",
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
                    className: "block text-sm font-medium text-purple-200 mb-2",
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
                    className: "w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent",
                    placeholder: "Highest qualification"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "designation",
                    className: "block text-sm font-medium text-purple-200 mb-2",
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
                    className: "w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent",
                    placeholder: "Your designation"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "workExperience",
                    className: "block text-sm font-medium text-purple-200 mb-2",
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
                    className: "w-full bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-transparent",
                    placeholder: "Years of experience"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "md:col-span-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Apply Now" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2 mt-4 space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm text-purple-200", children: [
                "For enquiries call:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "9916859555" })
              ] }) })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  DAFlyers as default
};
