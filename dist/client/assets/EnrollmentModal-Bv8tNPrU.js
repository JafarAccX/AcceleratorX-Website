import { l as useCourseContext, u as useNavigate, r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, k as motion, X, c as _t } from "./main-B74a7APh.js";
import { c as createEnrollment } from "./enrollmentApi-CthJO1r6.js";
import { g as getUTMDataForDB, t as trackFormSubmission } from "./metaPixel-Dp8i02x8.js";
const whatsappSerriApi = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjNjYTkxODE3NTVlMGY1ODIwYjEwYyIsIm5hbWUiOiJBY2NlbGVyYXRvciBYIiwiYXBwTmFtZSI6IkFpU2Vuc3kiLCJjbGllbnRJZCI6IjY3ZjNjOTA2MGEzNTkyMGMxYjBkN2MzMiIsImFjdGl2ZVBsYW4iOiJOT05FIiwiaWF0IjoxNzQ0MDMwMzUzfQ.q9ozhtK50kTdicqiWrOavUe42s2EhphWIPfl_E8I2Ns";
const BROCHURES = {
  "AI Digital Marketing": {
    title: "AI Digital Marketing Syllabus",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758802254913_notes_new_nano_19th_Sept%2C_2025-compressed.pdf?alt=media&token=42c3ad1b-7519-461b-aad6-ea9f4f5c7be7"
  },
  "Product Management": {
    title: "Product Management",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758293860223_notes_AcceleratorX_PM_Brochure.pdf?alt=media&token=3afeb532-fe27-4551-8baf-0ae6a7ba0780"
  },
  "Generative AI": {
    title: "Generative AI",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758293563847_notes_AcceleratorX_Gen_AI_Brochure.pdf?alt=media&token=7e7d534d-a40f-4adf-9833-abb476d0c061"
  },
  "Gen AI for PMs": {
    title: "Gen AI for PMs",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758294289672_notes_Gen_ai_pm.pdf?alt=media&token=c84b8402-1bc1-40be-8baa-e00c0a4fff36"
  },
  "Data Analytics": {
    title: "AI Powered Data Analytics",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758293290835_notes_AI_Powered_DA_Brochure.pdf?alt=media&token=1bbeb25b-e1aa-49e2-8752-3e7a6b7b4e52"
  }
};
function resolveBrochure(course) {
  if (!course) return BROCHURES["AI Digital Marketing"];
  if (BROCHURES[course]) return BROCHURES[course];
  const lower = course.toLowerCase();
  const foundKey = Object.keys(BROCHURES).find((k) => k.toLowerCase() === lower);
  return foundKey ? BROCHURES[foundKey] : BROCHURES["AI Digital Marketing"];
}
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
        campaignName: "course_reg_da_new",
        destination: phone,
        userName: name,
        templateParams: ["$FirstName"],
        source: "registration form",
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
function EnrollmentModal({ isOpen, onClose, onSubmit }) {
  const { selectedCourse } = useCourseContext();
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
  reactExports.useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const openBrochure = (courseName) => {
    try {
      const { url } = resolveBrochure(courseName);
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("Failed to open brochure:", err);
    }
  };
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
      const broucherData = resolveBrochure(selectedCourse);
      await sendWhatsAppMessage({
        phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
        name: formData.name,
        broucher: broucherData
      });
      const trackingFormData = new FormData();
      trackingFormData.append("name", formData.name);
      trackingFormData.append("email", formData.email);
      trackingFormData.append("phone", formData.phone);
      trackingFormData.append("education", formData.education);
      trackingFormData.append("designation", formData.designation);
      trackingFormData.append("course", formData.course || selectedCourse || "");
      trackingFormData.append("workExperience", formData.workExperience);
      await trackFormSubmission(trackingFormData);
      _t.success("Enrollment submitted successfully! Opening brochure...");
      openBrochure(selectedCourse);
      if (onSubmit) onSubmit();
      setTimeout(() => {
        onClose();
        navigate("/thank-you", { state: { courseName: formData.course } });
      }, 800);
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
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full max-w-md mx-auto mt-10 md:mt-0 bg-gray-800/95 rounded-xl shadow-xl overflow-y-auto md:my-6 ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-[85vh] md:h-auto flex flex-col", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-bold text-white", children: "Enroll Now" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-gray-300", children: selectedCourse ? `You are enrolling for the ${selectedCourse} course.` : "Start Your Product Management or Data Analytics Journey or No Code Development Journey." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " shadow-2xl p-6 w-full border border-gray-800/30", id: "course-form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-4 space-y-3 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block min-w-[100px] text-sm font-medium text-gray-300 mb-1", children: "Full Name" }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block min-w-[100px] text-sm font-medium text-gray-300 mb-1", children: "Email Address" }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-300 mb-1", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " bg-transparent text-white px-2 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm", children: "+91" }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "designation", className: "block min-w-[100px] text-sm font-medium text-gray-300 mb-1", children: "Designation" }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mb-3", children: "By submitting this form, you acknowledge that we collect non-personal campaign data for analytics purposes." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-sm",
                children: "Submit Application"
              }
            )
          ] })
        ] }) })
      ] }) })
    },
    "enrollment-modal"
  ) });
}
export {
  EnrollmentModal as default
};
