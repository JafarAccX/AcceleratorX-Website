import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, c as _t } from "./main-DD2uCxhE.js";
import { c as createClient } from "./index-eXoWi83j.js";
import { S as Sparkles } from "./sparkles-RDpTcZw_.js";
import { C as Cpu } from "./cpu-Dp_rNE5E.js";
import { S as Send } from "./send-Q-jNQvnS.js";
const supabaseUrl = "https://grdwabozcrwjwdytwpqa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZHdhYm96Y3J3andkeXR3cHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4Mjk2ODYsImV4cCI6MjA0NzQwNTY4Nn0.zD19Z3vROhfr7I_IL9Ru0bB500ClQi0D5A_QpiYWQYg";
const supabase = createClient(supabaseUrl, supabaseKey);
function GENAIFlyers() {
  const { selectedCourse } = useCourseContext();
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    workExperience: "",
    course: selectedCourse || "GenAI-Flyers"
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
        course: selectedCourse || "GenAI-Flyers"
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#001219] relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-grid" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full opacity-10 blur-xl animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 right-10 w-40 h-40 bg-cyan-300 rounded-full opacity-10 blur-xl animate-pulse" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8 sm:py-12 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 text-left space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-3 py-1.5 bg-cyan-500/10 rounded-full text-cyan-300 font-medium text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
              "Limited Time Early Access"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-10 h-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cyan-500/10 rounded-xl" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-10 h-10 text-cyan-400 p-2 logo-glow animate-spin-slow relative z-10" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/companylogo-new.webp", alt: "company logo - professional certificate in product management online", className: "w-48 h-auto" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-5xl font-bold text-white leading-tight", children: [
              "Master the Art of ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-300", children: "Generative AI" }),
              " in 12 Weeks"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-xl", children: "Join the AI revolution with our comprehensive course. Learn to create, innovate, and transform your ideas into reality." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-900/20 p-3 rounded-lg border border-cyan-800/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-cyan-300 font-semibold mb-1", children: "Industry-Led Curriculum" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Designed by AI experts from top tech companies" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-900/20 p-3 rounded-lg border border-cyan-800/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-cyan-300 font-semibold mb-1", children: "Hands-on Projects" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Build real-world AI applications" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-900/20 p-3 rounded-lg border border-cyan-800/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-cyan-300 font-semibold mb-1", children: "1:1 Mentorship" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Personal guidance from industry experts" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-900/20 p-3 rounded-lg border border-cyan-800/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-cyan-300 font-semibold mb-1", children: "Job-Ready Skills" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Learn the most in-demand AI tools" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-white mb-2", children: "Master These Tools" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-900/20 p-2.5 rounded-lg border border-cyan-800/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-cyan-300 text-xs font-medium mb-1.5", children: "LLM & Foundation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "Chat-GPT & Claude 2" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "LangChain" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "Hugging Face" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-900/20 p-2.5 rounded-lg border border-cyan-800/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-cyan-300 text-xs font-medium mb-1.5", children: "Image & Vision" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "DALL-E & Midjourney" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "Stable Diffusion" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "Vision APIs" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-900/20 p-2.5 rounded-lg border border-cyan-800/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-cyan-300 text-xs font-medium mb-1.5", children: "Development" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "Python & FastAPI" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "Vector DBs" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "Streamlit" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-900/20 p-2.5 rounded-lg border border-cyan-800/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-cyan-300 text-xs font-medium mb-1.5", children: "Deployment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "AWS & Azure AI" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "Docker" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-cyan-400 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "MLOps" })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 bg-[#012a36]/50 backdrop-blur-sm p-6 rounded-xl retro-shadow border border-cyan-900/50 sticky top-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white mb-2", children: "Start Your AI Journey Today" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "Fill out the form below to secure your spot" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-300 mb-1", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: "name",
                  name: "name",
                  required: true,
                  value: formData.name,
                  onChange: handleChange,
                  className: "input-style py-2",
                  placeholder: "Enter your full name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-300 mb-1", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  id: "email",
                  name: "email",
                  required: true,
                  value: formData.email,
                  onChange: handleChange,
                  className: "input-style py-2",
                  placeholder: "Enter your email"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-300 mb-1", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  id: "phone",
                  name: "phone",
                  required: true,
                  value: formData.phone,
                  onChange: handleChange,
                  className: "input-style py-2",
                  placeholder: "Enter phone number",
                  pattern: "[0-9]{10}"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "education", className: "block text-sm font-medium text-gray-300 mb-1", children: "Education Level" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: "education",
                  name: "education",
                  required: true,
                  value: formData.education,
                  onChange: handleChange,
                  className: "input-style py-2",
                  placeholder: "Highest qualification"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "designation", className: "block text-sm font-medium text-gray-300 mb-1", children: "Current Role" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: "designation",
                  name: "designation",
                  required: true,
                  value: formData.designation,
                  onChange: handleChange,
                  className: "input-style py-2",
                  placeholder: "Your designation"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "workExperience", className: "block text-sm font-medium text-gray-300 mb-1", children: "Work Experience (in years)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: "workExperience",
                  name: "workExperience",
                  required: true,
                  value: formData.workExperience,
                  onChange: handleChange,
                  className: "input-style py-2",
                  placeholder: "Years of experience"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "w-full bg-cyan-500 text-white rounded-lg py-2.5 font-medium hover:bg-cyan-600 transition-colors",
                children: [
                  "Secure Your Spot Now ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 inline-block ml-1" })
                ]
              }
            )
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  GENAIFlyers as default
};
