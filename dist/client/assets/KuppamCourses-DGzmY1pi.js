import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, k as motion, X, c as _t, S as SEO } from "./main-Ck2PwlUp.js";
import { c as createEnrollment } from "./enrollmentApi-BejPWjGn.js";
import { g as getUTMDataForDB, t as trackFormSubmission } from "./metaPixel-C33WLlAg.js";
import { G as Globe } from "./globe-VHd9hdX9.js";
const whatsappSerriApi = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjNjYTkxODE3NTVlMGY1ODIwYjEwYyIsIm5hbWUiOiJBY2NlbGVyYXRvciBYIiwiYXBwTmFtZSI6IkFpU2Vuc3kiLCJjbGllbnRJZCI6IjY3ZjNjOTA2MGEzNTkyMGMxYjBkN2MzMiIsImFjdGl2ZVBsYW4iOiJOT05FIiwiaWF0IjoxNzQ0MDMwMzUzfQ.q9ozhtK50kTdicqiWrOavUe42s2EhphWIPfl_E8I2Ns";
const kuppamBroucher = {
  title: "Generative AI",
  url: "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/Kuppam%20AI%20Workshop%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0t1cHBhbSBBSSBXb3Jrc2hvcCBCcm9jaHVyZS5wZGYiLCJpYXQiOjE3NTI4NzI1NjYsImV4cCI6MTc4NDQwODU2Nn0.5EEcYzrdRpA7nqzfqWvOjyM4zV9Di4JKpcx7n6qS898"
};
async function sendWhatsAppMessage({
  phone,
  name,
  broucher
}) {
  try {
    const response = await fetch("https://backend.api-wa.co/campaign/serri-india/api/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        apiKey: whatsappSerriApi,
        campaignName: "kuppam_workshop_reg",
        destination: phone,
        userName: name,
        templateParams: ["$FirstName"],
        source: "kuppam registration form",
        media: {
          url: broucher.url,
          filename: broucher.title
        },
        paramsFallbackValue: {
          FirstName: "user",
          value: "fallback value"
        },
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
function KuppamEnrollmentModal({ isOpen, onClose, onSubmit }) {
  const navigate = useNavigate();
  const [formData, setFormData] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    course: "",
    workExperience: "",
    designation: ""
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (formData.phone.length < 10 || formData.phone.length > 12) {
      _t.error("Please enter a valid phone number (10-12 digits)");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      _t.error("Please enter a valid email address");
      return;
    }
    setIsSubmitting(true);
    try {
      const utmData = getUTMDataForDB();
      const submissionData = {
        full_name: formData.name,
        phone_number: formData.phone,
        email: formData.email,
        education_level: formData.education,
        course: formData.course,
        work_experience: formData.workExperience,
        designation: formData.designation,
        utm_source: utmData.utm_source,
        utm_medium: utmData.utm_medium,
        utm_campaign: utmData.utm_campaign,
        utm_term: utmData.utm_term,
        utm_content: utmData.utm_content,
        referrer: utmData.referrer,
        landing_page_url: utmData.landing_page_url,
        fbclid: utmData.fbclid,
        gclid: utmData.gclid,
        ttclid: utmData.ttclid,
        msclkid: utmData.msclkid
      };
      await createEnrollment(submissionData);
      let selectedBroucher = kuppamBroucher;
      if (formData.course.includes("Generative AI")) {
        selectedBroucher = {
          title: "Generative AI",
          url: "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AcceleratorX%20Gen%20AI.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FjY2VsZXJhdG9yWCBHZW4gQUkucGRmIiwiaWF0IjoxNzQ2NDQwMTE0LCJleHAiOjE4MDk1MTIxMTR9.AFFhiMscFVvpzecvbkax-r6zDxugIz2LPmabyvm9m7o"
        };
      } else if (formData.course.includes("Data Analytics")) {
        selectedBroucher = {
          title: "AI Powered Data Analytics",
          url: "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AI%20Powered%20DA%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FJIFBvd2VyZWQgREEgQnJvY2h1cmUucGRmIiwiaWF0IjoxNzQ2Mjc3MTU1LCJleHAiOjE4NzI0MjExNTV9.NWSk8RPs_nwupsr5Wfu6-EGpUzFFaVPrMKOVZmICPgw"
        };
      }
      await sendWhatsAppMessage({
        phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
        name: formData.name,
        broucher: selectedBroucher
      });
      const trackingFormData = new FormData();
      trackingFormData.append("name", formData.name);
      trackingFormData.append("email", formData.email);
      trackingFormData.append("phone", formData.phone);
      trackingFormData.append("education", formData.education);
      trackingFormData.append("designation", formData.designation);
      trackingFormData.append("course", formData.course);
      trackingFormData.append("workExperience", formData.workExperience);
      await trackFormSubmission(trackingFormData);
      _t.success(" enrollment submitted successfully!");
      if (onSubmit) onSubmit();
      setTimeout(() => {
        onClose();
        navigate("/thank-you", { state: { courseName: formData.course } });
      }, 1e3);
    } catch (error) {
      console.error("Error submitting form:", error);
      _t.error("Failed to submit enrollment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4 overflow-y-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full max-w-md mx-auto mt-auto md:mt-0 bg-gray-800/95 rounded-xl shadow-xl overflow-y-auto md:my-6 ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-[85vh] md:h-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 bg-gray-800/95 px-4 py-3 border-b border-gray-700 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute right-3 top-3 text-gray-400 hover:text-white transition-colors p-1",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 pr-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-bold text-white", children: "Enroll for Kuppam AI Workshop" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-gray-300", children: "Choose your preferred course and language - 3-Hour AI Marathon" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " shadow-2xl p-6 w-full border border-gray-800/30", id: "kuppam-workshop-form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-300 mb-1", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: "name",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  placeholder: "Type Your Name",
                  value: formData.name,
                  onChange: (e) => setFormData({ ...formData, name: e.target.value })
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
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  placeholder: "Type Your Email Address",
                  value: formData.email,
                  onChange: (e) => setFormData({ ...formData, email: e.target.value })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-300 mb-1", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm", children: "+91" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    id: "phone",
                    required: true,
                    className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                    placeholder: "Type Your Phone No",
                    value: formData.phone,
                    onChange: (e) => {
                      const sanitizedValue = e.target.value.replace(/\D/g, "").slice(0, 12);
                      setFormData({ ...formData, phone: sanitizedValue });
                    }
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "designation", className: "block text-sm font-medium text-gray-300 mb-1", children: "Designation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: "designation",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  placeholder: "Type Your Designation",
                  value: formData.designation,
                  onChange: (e) => setFormData({ ...formData, designation: e.target.value })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "course", className: "block text-sm font-medium text-gray-300 mb-1", children: "Select Course" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "course",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  value: formData.course,
                  onChange: (e) => setFormData({ ...formData, course: e.target.value }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Course" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Generative AI (En)", children: "Generative AI (English)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Generative AI (TL)", children: "Generative AI (Telugu)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Data Analytics (EN - TL)", children: "Data Analytics (English and Telugu)" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "education", className: "block text-sm font-medium text-gray-300 mb-1", children: "Education" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "education",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  value: formData.education,
                  onChange: (e) => setFormData({ ...formData, education: e.target.value }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "High School", children: "High School" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Bachelor's", children: "Bachelor's" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Master's", children: "Master's" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PhD", children: "PhD" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "workExperience", className: "block text-sm font-medium text-gray-300 mb-1", children: "Experience" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "workExperience",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  value: formData.workExperience,
                  onChange: (e) => setFormData({ ...formData, workExperience: e.target.value }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0-1", children: "0-1 yrs" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1-3", children: "1-3 yrs" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3-5", children: "3-5 yrs" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "5+", children: "5+ yrs" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mb-3", children: "By submitting this form, you acknowledge that we collect non-personal campaign data for analytics purposes and agree to receive workshop updates via WhatsApp." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-medium py-2 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-sm",
                children: isSubmitting ? "Submitting..." : "Claim Your Scholarship"
              }
            )
          ] })
        ] }) })
      ] }) })
    },
    "kuppam-enrollment-modal"
  ) });
}
const KuppamHeader = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-[#0A0F1D] min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-44 md:w-48 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-[#0A0F1D]/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-indigo-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/companylogo-new.webp", alt: "AcceleratorX Logo", className: "w-full h-auto" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/pmbg.webp", alt: "Background", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/70" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 text-gray-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Live Workshop | 3-Hour AI Marathon" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight", children: "First Ever AI Program In" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight", children: "English & Telugu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-200 min-w-[200px]",
            onClick: handleEnrollClick,
            children: "Claim your scholarship"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full blur-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full blur-sm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/20 via-violet-500/10 to-transparent rounded-bl-full pointer-events-none blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/20 via-indigo-500/10 to-transparent rounded-tr-full pointer-events-none blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      KuppamEnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false),
        onSubmit: () => {
          console.log("Enrollment submitted successfully");
        }
      }
    )
  ] });
};
const KuppamSecond = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-[#0A0F1D] min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/kuppam-tools.webp", alt: "Background", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 backdrop-blur-sm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 text-gray-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Exclusive AI Tools Workshop" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight", children: "Learn the skill that get you hired" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight", children: "Gen AI and AI Agent Building program" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full blur-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full blur-sm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/20 via-violet-500/10 to-transparent rounded-bl-full pointer-events-none blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/20 via-indigo-500/10 to-transparent rounded-tr-full pointer-events-none blur-3xl" })
  ] });
};
const KuppamTopics = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-16 bg-[#0A0F1D]/50 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group   rounded-2xl   backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " p-6 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Learn to Build Agents" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1  opacity-30 group-hover:opacity-50 transition duration-300 blur" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative   backdrop-blur-lg rounded-2xl p-1 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#0A0F1D]/80 rounded-xl overflow-hidden h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/workflownew.webp",
          alt: "Program Workflow",
          className: "w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group  rounded-2xl   backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " p-6 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Vibe Coding" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1  opacity-30 group-hover:opacity-50 transition duration-300 blur" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative   backdrop-blur-lg rounded-2xl p-1 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0A0F1D]/90 rounded-xl overflow-hidden h-full relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50 backdrop-blur-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/vibe_code.webp",
            alt: "Program Workflow",
            className: "w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300 brightness-75"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center   text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br  h-full w-full from-black/60 to-indigo-900/30 p-8 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Build Full Stack Applications without even coding a single line of code" }) }) })
      ] }) })
    ] }) })
  ] }) }) });
};
const KuppamAnimatedSection = () => {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const sentences = [
    "Build your own GPT",
    "Learn to Automate Anything with n8n",
    "Earn more than 18 LPA as fresher as AI Engineer"
  ];
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 3e3);
    return () => clearInterval(interval);
  }, [sentences.length]);
  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-[#0A0F1D] min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-black", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 md:h-40 flex items-center justify-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0, y: -30 },
            transition: { duration: 0.8, ease: "easeInOut" },
            className: "text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight",
            children: sentences[currentIndex]
          },
          currentIndex
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl min-w-[250px] text-lg",
            onClick: handleEnrollClick,
            children: "Claim 50% Scholarship"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full blur-sm animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full blur-sm animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full blur-sm animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/30 via-violet-500/20 to-transparent rounded-bl-full pointer-events-none blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/30 via-indigo-500/20 to-transparent rounded-tr-full pointer-events-none blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent rounded-br-full pointer-events-none blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/30 via-blue-500/20 to-transparent rounded-tl-full pointer-events-none blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      KuppamEnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false),
        onSubmit: () => {
          console.log("Enrollment submitted successfully");
        }
      }
    )
  ] });
};
const KuppamCourses = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KuppamHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KuppamSecond, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KuppamTopics, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KuppamAnimatedSection, {})
  ] });
};
export {
  KuppamCourses as default
};
