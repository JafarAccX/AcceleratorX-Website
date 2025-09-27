import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, B as Briefcase, c as _t } from "./main-Bxo1x8yy.js";
import { c as createClient } from "./index-DIo3HDBJ.js";
import { S as Star } from "./star-Cvuqb55m.js";
import { D as DollarSign } from "./dollar-sign-iOTzgvx3.js";
import { U as Users } from "./users-DlSbkj3O.js";
import { C as Clock } from "./clock-BQuo5sOG.js";
import { G as GraduationCap } from "./graduation-cap-BYpCoV06.js";
import { B as Building } from "./building-CueY9r2t.js";
import { S as Sparkles } from "./sparkles-0F4Ny8se.js";
import { S as Send } from "./send-6wKxcWNi.js";
const supabaseUrl = "https://grdwabozcrwjwdytwpqa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZHdhYm96Y3J3andkeXR3cHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4Mjk2ODYsImV4cCI6MjA0NzQwNTY4Nn0.zD19Z3vROhfr7I_IL9Ru0bB500ClQi0D5A_QpiYWQYg";
const supabase = createClient(supabaseUrl, supabaseKey);
function DMFlyers() {
  const { selectedCourse } = useCourseContext();
  const [timeLeft, setTimeLeft] = reactExports.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    workExperience: "",
    course: selectedCourse || "DM_Flyers"
  });
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      const now = /* @__PURE__ */ new Date();
      const target = new Date(now);
      target.setDate(target.getDate() + 3);
      target.setHours(23, 59, 59, 999);
      const diff = target.getTime() - now.getTime();
      setTimeLeft({
        days: Math.floor(diff / (1e3 * 60 * 60 * 24)),
        hours: Math.floor(diff % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
        minutes: Math.floor(diff % (1e3 * 60 * 60) / (1e3 * 60)),
        seconds: Math.floor(diff % (1e3 * 60) / 1e3)
      });
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
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
        course: selectedCourse || "DM_Flyers"
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid-pattern opacity-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 blur-xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full opacity-10 blur-xl animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-6 sm:py-8 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-12 gap-6 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 text-left space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-3 py-1 bg-orange-500/20 rounded-full text-orange-300 font-medium text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 mr-2" }),
          "INDUSTRY RECOGNIZED CERTIFICATION"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl md:text-4xl font-bold text-white leading-tight", children: [
          "Master Digital Marketing & Performance Marketing with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-300", children: "AI-Powered Strategies" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-blue-100 max-w-xl", children: "Learn advanced strategies, automation, and data-driven decision-making to optimize campaigns and drive business growth." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-3 rounded-lg border border-blue-500/20 backdrop-blur-sm hover:border-orange-500/30 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-5 h-5 text-orange-400 mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-sm font-semibold", children: "Efficiency Boost" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-200 text-sm", children: "40%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-3 rounded-lg border border-blue-500/20 backdrop-blur-sm hover:border-orange-500/30 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-orange-400 mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-sm font-semibold", children: "Global Ad Spend" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-200 text-sm", children: "$700B" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-3 rounded-lg border border-blue-500/20 backdrop-blur-sm hover:border-orange-500/30 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-orange-400 mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-sm font-semibold", children: "AI Adoption" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-200 text-sm", children: "83%" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: "Who Should Enroll?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-3 rounded-lg border border-blue-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5 text-orange-400 mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white text-sm font-medium mb-1", children: "Marketing Professionals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-200", children: "Level up your career with AI-powered marketing strategies" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-3 rounded-lg border border-blue-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-orange-400 mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white text-sm font-medium mb-1", children: "Freelancers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-200", children: "Enhance your service offerings with cutting-edge marketing tools" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-3 rounded-lg border border-blue-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-5 h-5 text-orange-400 mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white text-sm font-medium mb-1", children: "Students" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-200", children: "Start your career with the most in-demand marketing skills" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-3 rounded-lg border border-blue-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "w-5 h-5 text-orange-400 mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white text-sm font-medium mb-1", children: "Business Owners" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-200", children: "Scale your business with data-driven marketing strategies" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: "Master These Tools" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-orange-300 font-medium text-sm", children: "Paid Advertising" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: ["Google Ads", "Meta Ads", "Adzooma"].map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-blue-200 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-orange-400 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tool })
              ] }, tool)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-orange-300 font-medium text-sm", children: "SEO & Content" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: ["SEMRush", "Surfer SEO", "Jasper AI"].map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-blue-200 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-orange-400 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tool })
              ] }, tool)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-orange-300 font-medium text-sm", children: "Analytics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: ["Google Analytics 4", "Tableau", "IBM Watson"].map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-blue-200 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-orange-400 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tool })
              ] }, tool)) })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 sticky top-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-500/20 text-orange-300 text-sm font-medium px-3 py-1 bg-orange-500/20 rounded-full inline-flex items-center mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
            "Early Bird Offer - Save ₹10,000"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white mb-2", children: "Begin Your Digital Marketing Journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-200 text-sm", children: "Limited seats available for next cohort" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-blue-200 mb-2", children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                id: "name",
                name: "name",
                required: true,
                value: formData.name,
                onChange: handleChange,
                className: "w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent",
                placeholder: "Enter your full name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-blue-200 mb-2", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                required: true,
                value: formData.email,
                onChange: handleChange,
                className: "w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent",
                placeholder: "Enter your email"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-blue-200 mb-2", children: "Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "tel",
                id: "phone",
                name: "phone",
                required: true,
                value: formData.phone,
                onChange: handleChange,
                className: "w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent",
                placeholder: "Your phone number",
                pattern: "[0-9]{10}"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "education", className: "block text-sm font-medium text-blue-200 mb-2", children: "Education Level" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                id: "education",
                name: "education",
                required: true,
                value: formData.education,
                onChange: handleChange,
                className: "w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent",
                placeholder: "Highest qualification"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "designation", className: "block text-sm font-medium text-blue-200 mb-2", children: "Current Role" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                id: "designation",
                name: "designation",
                required: true,
                value: formData.designation,
                onChange: handleChange,
                className: "w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent",
                placeholder: "Your designation"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "workExperience", className: "block text-sm font-medium text-blue-200 mb-2", children: "Work Experience (in years)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                id: "workExperience",
                name: "workExperience",
                required: true,
                value: formData.workExperience,
                onChange: handleChange,
                className: "w-full bg-blue-900/30 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent",
                placeholder: "Years of experience"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              className: "md:col-span-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Enroll Now - Early Bird Offer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2 mt-4 space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm text-blue-200", children: [
            "For enquiries call: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-300", children: "9916859555" })
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  DMFlyers as default
};
