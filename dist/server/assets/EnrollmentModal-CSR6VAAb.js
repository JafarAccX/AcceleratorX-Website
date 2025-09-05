import { jsx, jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { b as useCourseContext } from "../entry-server.js";
import toast from "react-hot-toast";
import { c as createEnrollment } from "./enrollmentApi-DmeHaJMK.js";
import { g as getUTMDataForDB, t as trackFormSubmission } from "./metaPixel-D4Z7npuX.js";
import { useNavigate } from "react-router";
import "react-dom/server";
import "@remix-run/router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "react-dom";
import "react-icons/pi";
const whatsappSerriApi = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjNjYTkxODE3NTVlMGY1ODIwYjEwYyIsIm5hbWUiOiJBY2NlbGVyYXRvciBYIiwiYXBwTmFtZSI6IkFpU2Vuc3kiLCJjbGllbnRJZCI6IjY3ZjNjOTA2MGEzNTkyMGMxYjBkN2MzMiIsImFjdGl2ZVBsYW4iOiJOT05FIiwiaWF0IjoxNzQ0MDMwMzUzfQ.q9ozhtK50kTdicqiWrOavUe42s2EhphWIPfl_E8I2Ns";
const daBroucher = {
  title: "AI Powered Data Analytics",
  url: "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AI%20Powered%20DA%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FJIFBvd2VyZWQgREEgQnJvY2h1cmUucGRmIiwiaWF0IjoxNzQ2Mjc3MTU1LCJleHAiOjE4NzI0MjExNTV9.NWSk8RPs_nwupsr5Wfu6-EGpUzFFaVPrMKOVZmICPgw"
};
const genAiBroucher = {
  title: "Generative AI",
  url: "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AcceleratorX%20Gen%20AI.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FjY2VsZXJhdG9yWCBHZW4gQUkucGRmIiwiaWF0IjoxNzQ2NDQwMTE0LCJleHAiOjE4MDk1MTIxMTR9.AFFhiMscFVvpzecvbkax-r6zDxugIz2LPmabyvm9m7o"
};
const pmAiBroucher = {
  title: "Product Management",
  url: "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AcceleratorX%20PM%20Brochure.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80Njc1NTVlNS1jOGMxLTQwOTYtYmQxMC03YzkzODVjZWEyMjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXN1bWVzL0FjY2VsZXJhdG9yWCBQTSBCcm9jaHVyZS5wZGYiLCJpYXQiOjE3NTE4NzI1NjYsImV4cCI6MTc4MzQwODU2Nn0.5EEcYzrdRpA7nqzfqWvOjyM4zV9Di4JKpcx7n6qS898"
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    course: "",
    workExperience: "",
    designation: ""
  });
  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (formData.phone.length < 10 || formData.phone.length > 12) {
      toast.error("Please enter a valid phone number (10-12 digits)");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
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
      const broucherData = selectedCourse === "Data Analytics" ? daBroucher : selectedCourse === "Product Management" ? pmAiBroucher : genAiBroucher;
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
      toast.success("Enrollment submitted successfully!");
      if (onSubmit) onSubmit();
      setTimeout(() => {
        onClose();
        navigate("/thank-you", { state: { courseName: formData.course } });
      }, 1e3);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit enrollment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4 overflow-y-auto",
      children: /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-md mx-auto mt-10 md:mt-0 bg-gray-800/95 rounded-xl shadow-xl overflow-y-auto md:my-6 ", children: /* @__PURE__ */ jsxs("div", { className: "h-[85vh] md:h-auto flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-gray-800/95 px-4 py-3 border-b border-gray-700 z-10", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute right-3 top-3 text-gray-400 hover:text-white transition-colors p-1",
              children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 pr-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold text-white", children: "Enroll Now" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-gray-300", children: selectedCourse ? `You are enrolling for the ${selectedCourse} course.` : "Start Your Product Management or Data Analytics Journey or No Code Development Journey." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: " shadow-2xl p-6 w-full border border-gray-800/30", id: "course-form", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "p-4 space-y-3 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center ", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block min-w-[100px] text-sm font-medium text-gray-300 mb-1", children: "Full Name" }),
              /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block min-w-[100px] text-sm font-medium text-gray-300 mb-1", children: "Email Address" }),
              /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-300 mb-1", children: "Phone Number" }),
              /* @__PURE__ */ jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsx("span", { className: " bg-transparent text-white px-2 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm", children: "+91" }),
                /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "designation", className: "block min-w-[100px] text-sm font-medium text-gray-300 mb-1", children: "Designation" }),
              /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "education", className: "block text-sm font-medium text-gray-300 mb-1", children: "Education" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "education",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  value: formData.education,
                  onChange: (e) => setFormData({ ...formData, education: e.target.value }),
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                    /* @__PURE__ */ jsx("option", { value: "High School", children: "High School" }),
                    /* @__PURE__ */ jsx("option", { value: "Bachelor's", children: "Bachelor's" }),
                    /* @__PURE__ */ jsx("option", { value: "Master's", children: "Master's" }),
                    /* @__PURE__ */ jsx("option", { value: "PhD", children: "PhD" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "workExperience", className: "block text-sm font-medium text-gray-300 mb-1", children: "Experience" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "workExperience",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  value: formData.workExperience,
                  onChange: (e) => setFormData({ ...formData, workExperience: e.target.value }),
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                    /* @__PURE__ */ jsx("option", { value: "0-1", children: "0-1 yrs" }),
                    /* @__PURE__ */ jsx("option", { value: "1-3", children: "1-3 yrs" }),
                    /* @__PURE__ */ jsx("option", { value: "3-5", children: "3-5 yrs" }),
                    /* @__PURE__ */ jsx("option", { value: "5+", children: "5+ yrs" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mb-3", children: "By submitting this form, you acknowledge that we collect non-personal campaign data for analytics purposes." }),
            /* @__PURE__ */ jsx(
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
