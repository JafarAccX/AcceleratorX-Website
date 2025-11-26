import { f as createLucideIcon, r as reactExports, u as useNavigate, j as jsxRuntimeExports, k as motion, L as Link, S as SEO, A as AnimatePresence } from "./main-YlaQtpvX.js";
import { c as createClient } from "./index--AI5RiCv.js";
import { U as Users } from "./users-CZOdj9yh.js";
import { C as Calendar } from "./calendar-D4X2H4y1.js";
import { C as Clock } from "./clock-D-_g80eo.js";
import { M as MapPin } from "./map-pin-QBLu7blL.js";
import { A as Award } from "./award-BQQYph6o.js";
import { Z as Zap } from "./zap-DPo-RZxe.js";
import { S as Star } from "./star-BEwxjuaH.js";
const AlertCircle = createLucideIcon("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const supabaseUrl = "https://grdwabozcrwjwdytwpqa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZHdhYm96Y3J3andkeXR3cHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4Mjk2ODYsImV4cCI6MjA0NzQwNTY4Nn0.zD19Z3vROhfr7I_IL9Ru0bB500ClQi0D5A_QpiYWQYg";
const whatsappSerriApi = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjNjYTkxODE3NTVlMGY1ODIwYjEwYyIsIm5hbWUiOiJBY2NlbGVyYXRvciBYIiwiYXBwTmFtZSI6IkFpU2Vuc3kiLCJjbGllbnRJZCI6IjY3ZjNjOTA2MGEzNTkyMGMxYjBkN2MzMiIsImFjdGl2ZVBsYW4iOiJOT05FIiwiaWF0IjoxNzQ0MDMwMzUzfQ.q9ozhtK50kTdicqiWrOavUe42s2EhphWIPfl_E8I2Ns";
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
});
async function sendWhatsAppMessage({ phone, name }) {
  try {
    const response = await fetch("https://backend.api-wa.co/campaign/serri-india/api/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        apiKey: whatsappSerriApi,
        campaignName: "prodtempletefix",
        destination: phone,
        userName: name,
        templateParams: ["$FirstName", "https://chat.whatsapp.com/IRvuHFHrx8P7AU4QduC37L"],
        source: "registration form",
        paramsFallbackValue: {
          FirstName: "participant",
          link: "https://chat.whatsapp.com/IRvuHFHrx8P7AU4QduC37L",
          value: "fallback value"
        },
        media: {},
        buttons: [],
        carouselCards: [],
        location: {},
        attributes: {}
      })
    });
    if (!response.ok) {
      const err = await response.json();
      console.error("WhatsApp API error:", err);
      throw new Error("WhatsApp message sending failed");
    }
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
  }
}
function CreateEventPage() {
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [formSuccess, setFormSuccess] = reactExports.useState(null);
  const [formError, setFormError] = reactExports.useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = reactExports.useState({
    eventName: "",
    participant1: "",
    participantsnumber1: "",
    participant2: "",
    participantsnumber2: "",
    participant3: "",
    participantsnumber3: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const validateForm = () => {
    const newErrors = {};
    if (formData.participant1 && !formData.participantsnumber1) {
      newErrors.participantsnumber1 = "Participant number is required";
    }
    if (!formData.participant1 && formData.participantsnumber1) {
      newErrors.participant1 = "Participant name is required";
    }
    if (formData.participant2 && !formData.participantsnumber2) {
      newErrors.participantsnumber2 = "Participant number is required";
    }
    if (!formData.participant2 && formData.participantsnumber2) {
      newErrors.participant2 = "Participant name is required";
    }
    if (formData.participant3 && !formData.participantsnumber3) {
      newErrors.participantsnumber3 = "Participant number is required";
    }
    if (!formData.participant3 && formData.participantsnumber3) {
      newErrors.participant3 = "Participant name is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: void 0
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setFormError(null);
    try {
      const { error } = await supabase.from("Events").insert([formData]).select();
      if (error) {
        throw error;
      }
      setFormSuccess("Registration successfully!");
      if (formData.participant1 && formData.participantsnumber1) {
        await sendWhatsAppMessage({
          phone: formData.participantsnumber1.startsWith("+") ? formData.participantsnumber1 : `+91${formData.participantsnumber1}`,
          name: formData.participant1
        });
      }
      if (formData.participant2 && formData.participantsnumber2) {
        await sendWhatsAppMessage({
          phone: formData.participantsnumber2.startsWith("+") ? formData.participantsnumber2 : `+91${formData.participantsnumber2}`,
          name: formData.participant2
        });
      }
      if (formData.participant3 && formData.participantsnumber3) {
        await sendWhatsAppMessage({
          phone: formData.participantsnumber3.startsWith("+") ? formData.participantsnumber3 : `+91${formData.participantsnumber3}`,
          name: formData.participant3
        });
      }
      navigate("/registration-sucessfull");
      setFormData({
        eventName: "PM TearDown",
        participant1: "",
        participantsnumber1: "",
        participant2: "",
        participantsnumber2: "",
        participant3: "",
        participantsnumber3: ""
      });
    } catch (error) {
      console.error("Error creating event:", error);
      setFormError(error.message || "Failed to create event. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen  w-full  text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "bg-gradient-to-br  from-gray-800/70 to-gray-900/90 rounded-xl p-6 border border-gray-800",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 0.2 },
      children: [
        formError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "mb-6  bg-red-900/30 border border-red-500/30 rounded-lg text-red-400 flex items-center",
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            transition: { duration: 0.3 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { className: "mr-2", size: 18 }),
              formError
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 18, className: "mr-2 text-purple-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium", children: "Participants" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-gray-300 mb-3", children: "Participant 1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1  gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      name: "participant1",
                      value: formData.participant1,
                      onChange: handleChange,
                      className: `w-full bg-gray-800/50 border ${errors.participant1 ? "border-red-500/50" : "border-gray-700"} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`,
                      placeholder: "Participant name"
                    }
                  ),
                  errors.participant1 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.participant1 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      name: "participantsnumber1",
                      value: formData.participantsnumber1,
                      onChange: handleChange,
                      className: `w-full bg-gray-800/50 border ${errors.participantsnumber1 ? "border-red-500/50" : "border-gray-700"} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`,
                      placeholder: "Contact number"
                    }
                  ),
                  errors.participantsnumber1 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.participantsnumber1 })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-gray-300 mb-3", children: "Participant 2 (Optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1  gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      name: "participant2",
                      value: formData.participant2,
                      onChange: handleChange,
                      className: `w-full bg-gray-800/50 border ${errors.participant2 ? "border-red-500/50" : "border-gray-700"} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`,
                      placeholder: "Participant name"
                    }
                  ),
                  errors.participant2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.participant2 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      name: "participantsnumber2",
                      value: formData.participantsnumber2,
                      onChange: handleChange,
                      className: `w-full bg-gray-800/50 border ${errors.participantsnumber2 ? "border-red-500/50" : "border-gray-700"} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`,
                      placeholder: "Contact number"
                    }
                  ),
                  errors.participantsnumber2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.participantsnumber2 })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-gray-300 mb-3", children: "Participant 3 (Optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1  gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      name: "participant3",
                      value: formData.participant3,
                      onChange: handleChange,
                      className: `w-full bg-gray-800/50 border ${errors.participant3 ? "border-red-500/50" : "border-gray-700"} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`,
                      placeholder: "Participant name"
                    }
                  ),
                  errors.participant3 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.participant3 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      name: "participantsnumber3",
                      value: formData.participantsnumber3,
                      onChange: handleChange,
                      className: `w-full bg-gray-800/50 border ${errors.participantsnumber3 ? "border-red-500/50" : "border-gray-700"} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`,
                      placeholder: "Contact number"
                    }
                  ),
                  errors.participantsnumber3 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.participantsnumber3 })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                className: "px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300 text-gray-300",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                type: "submit",
                disabled: isSubmitting,
                className: "px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed",
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                children: isSubmitting ? "Registering..." : "Register"
              }
            )
          ] }),
          formSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "mb-6 p-4 mt-4 bg-green-900/30 border border-green-500/30 rounded-lg text-green-400 flex items-center",
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              transition: { duration: 0.3 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "mr-2", size: 18 }),
                formSuccess
              ]
            }
          )
        ] })
      ]
    }
  ) }) });
}
function EventManagementPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br relative mt-14 from-gray-900 to-black text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "flex justify-between items-center mb-4",
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mt-2", children: "Product Inovation Challenge – The 7-Day Break-In " })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "lg:col-span-2",
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5, delay: 0.4 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(EventDetails, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: " rounded-xl flex flex-col items-center gap-4 justify-start",
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5, delay: 0.5 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: " flex-shrink-0 w-full ",
                  initial: { opacity: 0, x: 20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.5, delay: 0.3 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-4 rounded-xl border border-purple-800/30", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 18, className: "mr-2 text-purple-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Registrations closing soon" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-sm mb-4", children: "Registrations close on May 4th — miss it now, and it's waitlist only. Don't scroll past your breakthrough." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-gray-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "h-full bg-gradient-to-r from-purple-500 to-pink-500",
                        initial: { width: "0%" },
                        animate: { width: "40%" },
                        transition: { duration: 1, delay: 0.5 }
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-2 text-xs text-gray-400 ", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "20+" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "50" })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full ", id: "registration", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateEventPage, {}) })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function EventDetails() {
  const [currentTestimonial, setCurrentTestimonial] = reactExports.useState(0);
  const testimonials = [
    {
      text: "After the last challenge, I built a mini AI tool, got 3 interviews, and finally landed a PM internship. The mock interview was a game-changer.",
      author: "Aarti V.",
      role: "Ex-Attendee"
    },
    {
      text: "The Product Inovation Challenge pushed me to think like a product manager. The mentorship and feedback were invaluable for my career transition.",
      author: "Rahul S.",
      role: "Product Manager"
    },
    {
      text: "Building a product in 7 days seemed impossible, but with the AI tools and guidance, I created something I'm proud to showcase in interviews.",
      author: "Priya M.",
      role: "Ex-Attendee"
    }
  ];
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5e3);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  const timelineData = [
    { day: "Day 1", activity: "Kickoff + Team Formation + Challenge Brief" },
    { day: "Day 2", activity: "Problem Identification + Ideation" },
    { day: "Day 3", activity: "Prototype Building (with AI Tools)" },
    { day: "Day 4", activity: "Mentorship Session + Mid-Review" },
    { day: "Day 5", activity: "Resume Workshop + Branding Tips" },
    { day: "Day 6", activity: "Final Mock Interview + Product Pitch Prep" },
    { day: "Day 7", activity: "Demo Day + Winner Announcement (₹50K Prize)" }
  ];
  const whoShouldJoin = [
    "You're trying to break into product roles",
    "You want to build a strong personal brand",
    "You're a student or early-stage professional",
    "You enjoy solving problems and building solutions",
    "You want hands-on AI + product exposure",
    "You're tired of theory and ready to do the work"
  ];
  const scrollToForm = () => {
    const form = document.getElementById("registration");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      console.error('Form element not found with ID "registration"');
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-gray-900 to-black text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto  ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "bg-gradient-to-br from-gray-800/30 to-gray-900/90 rounded-xl py-6 px-4 md:p-8 border border-gray-800 mb-8",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              className: "text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600",
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              children: "Build your brand. Crack the PM code. Get hired."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-amber-400 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-400/10 rounded-md p-1 mr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, className: "text-amber-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-300 text-sm", children: "May 8th 2025 - May 14th 2025" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-amber-400 text-sm", children: "Daily tasks and live sessions (1–2 hours/day)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-purple-400 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-500/10 rounded-md p-1 mr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Online (Zoom)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "mt-6",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.5, delay: 0.4 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-amber-400 mt-3 font-medium", children: "Limited spots available." })
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "bg-gradient-to-br from-gray-800/30 to-gray-900/90 rounded-xl p-6 md:p-8 border border-gray-800 mb-8",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.2 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold mb-4 flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "mr-3 text-purple-400", size: 24 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "What's the Product Inovation Challenge?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Product Inovation is a 7-day challenge where you'll form a team of 3 (or go solo), build a product using any AI tool, and position yourself like a top-tier product manager. Along the way, you'll get access to live mentor sessions, resume reviews, a mock interview, and a shot at winning Rs 50,000*." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-800/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "Why This Challenge?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
              "Use AI tools to build a real product in 7 days",
              "Work solo or in teams of 3 – choose your own path",
              "Learn how to brand yourself like a product",
              "Resume review & mock interview with real PMs",
              "Win Rs 50,000* cash – show your product, tell your story",
              "100% free – zero excuses, just hustle"
            ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.li,
              {
                className: "flex items-start",
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.3, delay: 0.1 * index },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mr-2 mt-1 text-purple-400", children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
                ]
              },
              index
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 font-medium text-center text-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "This isn't a passive course." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400", children: "This is your proving ground." })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "bg-gradient-to-br from-gray-800/30 to-gray-900/90 rounded-xl p-6 md:p-8 border border-gray-800 mb-8",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.3 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold mb-6 flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mr-3 text-purple-400", size: 24 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Challenge Timeline (What Happens Each Day)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-left text-purple-400", children: "Day" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-left text-purple-400", children: "Activity" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: timelineData.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.tr,
              {
                className: "border-b border-gray-800/50",
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: 0.05 * index },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-medium", children: item.day }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-gray-300", children: item.activity })
                ]
              },
              index
            )) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "bg-gradient-to-br from-gray-800/30 to-gray-900/90 rounded-xl p-6 md:p-8 border border-gray-800",
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.4 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold mb-4 flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "mr-3 text-purple-400", size: 24 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Who Should Join?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-4", children: "This challenge is perfect for you if..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 ", children: whoShouldJoin.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.li,
              {
                className: "flex items-center",
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.3, delay: 0.1 * index },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 14 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
                ]
              },
              index
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "bg-gradient-to-br from-gray-800/30 to-gray-900/90 rounded-xl p-6 md:p-8 border border-gray-800 flex flex-col",
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.4 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold mb-6 flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "mr-3 text-purple-400", size: 24 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Testimonials" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 bottom-0 left-0 right-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute inset-0 flex flex-col justify-center",
                  initial: { opacity: 0, x: 50 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -50 },
                  transition: { duration: 0.5 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r h-full mb-10 from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-800/20 space-y-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-300 italic mb-4", children: [
                      '"',
                      testimonials[currentTestimonial].text,
                      '"'
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: testimonials[currentTestimonial].author.charAt(0) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: testimonials[currentTestimonial].author }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: testimonials[currentTestimonial].role })
                      ] })
                    ] })
                  ] })
                },
                currentTestimonial
              ) }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-40 flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-2", children: testimonials.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setCurrentTestimonial(index),
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === index ? "bg-purple-500 w-6" : "bg-gray-600"}`,
                  "aria-label": `Go to testimonial ${index + 1}`
                },
                index
              )) }) })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-800/30 text-center",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "This 7-day challenge isn't just another event" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6 max-w-3xl mx-auto", children: "It's your shot to build a product, brand yourself, and stand out in a sea of job seekers. You'll learn from top PMs, compete for Rs 50,000*, and walk away with a personal story stronger than any resume." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              onClick: () => scrollToForm(),
              className: "px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-medium text-lg shadow-lg shadow-purple-900/30 transition-all duration-300",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.98 },
              children: "Register Now!"
            }
          )
        ]
      }
    )
  ] }) });
}
export {
  EventDetails,
  EventManagementPage as default
};
