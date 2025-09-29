import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import toast from "react-hot-toast";
import { u as useWorkshop, r as registerForZoomMeeting } from "./registration-DRV2p4qq.js";
import { g as getUTMDataForDB, a as generateFormEventId, t as trackFormSubmission } from "./metaPixel-Cw2h-5_I.js";
import { a as api } from "../entry-server.js";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";
const createWorkshopRegistration = async (data) => {
  try {
    const response = await api.post("/workshop-registrations", data);
    return response.data;
  } catch (error) {
    console.error("Error creating workshop registration:", error);
    throw error;
  }
};
const whatsappSerriApi = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjNjYTkxODE3NTVlMGY1ODIwYjEwYyIsIm5hbWUiOiJBY2NlbGVyYXRvciBYIiwiYXBwTmFtZSI6IkFpU2Vuc3kiLCJjbGllbnRJZCI6IjY3ZjNjOTA2MGEzNTkyMGMxYjBkN2MzMiIsImFjdGl2ZVBsYW4iOiJOT05FIiwiaWF0IjoxNzQ0MDMwMzUzfQ.q9ozhtK50kTdicqiWrOavUe42s2EhphWIPfl_E8I2Ns";
const WSFormFree = () => {
  const { workshopType, zoomMeetingDetails } = useWorkshop();
  console.log("WSFormFree render with workshopType:", workshopType);
  console.log("zoomMeetingDetails:", zoomMeetingDetails);
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    yearsOfExperience: "",
    yearsOfPassing: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleRedirect = (submissionData) => {
    if (location.pathname === "/workshop/pm-masterclass") {
      navigate("/registration-sucessfull");
    } else {
      navigate("/workshop-registration/success", {
        state: {
          registrationDetails: {
            name: submissionData.name,
            email: formData.email,
            workshop_type: submissionData.workshop_type
          },
          zoomDetails: {
            link: zoomMeetingDetails.link,
            meetingId: zoomMeetingDetails.meetingId,
            time: zoomMeetingDetails.time
          }
        }
      });
    }
  };
  async function sendWhatsAppMessage({
    apiKey,
    campaignName,
    phone,
    name,
    masterclass,
    sessionDate,
    link
  }) {
    try {
      const cleaned = sessionDate.replace("India", "").trim();
      const [rawDate, time] = cleaned.split(new RegExp("(?<=\\d{4})\\s"));
      const newdate = rawDate.replace(/(\d+)(st|nd|rd|th)/, "$1");
      const response = await fetch("https://backend.api-wa.co/campaign/serri-india/api/v2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          apiKey,
          campaignName,
          destination: phone,
          userName: name,
          templateParams: ["$FirstName", masterclass, newdate, time, link],
          source: "registration form",
          paramsFallbackValue: {
            FirstName: "user",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    setIsSubmitting(true);
    try {
      const utmData = getUTMDataForDB();
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        education: formData.education,
        designation: formData.designation,
        years_of_experience: formData.yearsOfExperience,
        years_of_passing: formData.yearsOfPassing,
        workshop_type: workshopType,
        workshop_title: zoomMeetingDetails?.title || "Untitled",
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        is_free: true,
        // Add UTM data
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
      await createWorkshopRegistration(submissionData);
      try {
        const eventId = generateFormEventId();
        const trackingFormData = new FormData();
        trackingFormData.append("name", formData.name);
        trackingFormData.append("email", formData.email);
        trackingFormData.append("phone", formData.phone);
        trackingFormData.append("education", formData.education);
        trackingFormData.append("designation", formData.designation);
        trackingFormData.append("course", workshopType || "");
        trackingFormData.append("workExperience", formData.yearsOfExperience);
        trackingFormData.append("yearsOfPassing", formData.yearsOfPassing);
        trackingFormData.append("eventId", eventId);
        await trackFormSubmission(trackingFormData);
      } catch (trackingError) {
        console.error("Error tracking form submission:", trackingError);
      }
      try {
        const zoomData = await registerForZoomMeeting(
          formData.name,
          formData.email,
          formData.phone,
          zoomMeetingDetails.meetingCode
        );
        const zoomJoinLink = zoomData.join_url;
        await sendWhatsAppMessage({
          apiKey: whatsappSerriApi,
          campaignName: "registration_confirmation",
          phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
          name: formData.name,
          masterclass: zoomMeetingDetails.title,
          sessionDate: zoomMeetingDetails.time,
          link: zoomJoinLink
        });
      } catch (error) {
        console.error("Error in post-registration actions:", error);
      }
      toast.success("Registration successful!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        designation: "",
        yearsOfExperience: "",
        yearsOfPassing: ""
      });
      handleRedirect(submissionData);
    } catch (error) {
      console.error("Registration failed:", error);
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        toast.error("This email or phone number is already registered.");
      } else {
        toast.error("Registration failed. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { id: "workshop-form", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "name",
          value: formData.name,
          onChange: handleChange,
          required: true,
          className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
          placeholder: "Full Name"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          name: "email",
          value: formData.email,
          onChange: handleChange,
          required: true,
          className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
          placeholder: "Email Address"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "tel",
          name: "phone",
          value: formData.phone,
          onChange: handleChange,
          required: true,
          className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
          placeholder: "Phone Number"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "education",
          value: formData.education,
          onChange: handleChange,
          required: true,
          className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
          placeholder: "Education (Highest Qualification)"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "designation",
          value: formData.designation,
          onChange: handleChange,
          required: true,
          className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
          placeholder: "Current Designation"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs(
        "select",
        {
          name: "yearsOfExperience",
          value: formData.yearsOfExperience,
          onChange: handleChange,
          required: true,
          className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm appearance-none",
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Years of Experience" }),
            /* @__PURE__ */ jsx("option", { value: "0-1", children: "0-1 years" }),
            /* @__PURE__ */ jsx("option", { value: "1-3", children: "1-3 years" }),
            /* @__PURE__ */ jsx("option", { value: "3-5", children: "3-5 years" }),
            /* @__PURE__ */ jsx("option", { value: "5-10", children: "5-10 years" }),
            /* @__PURE__ */ jsx("option", { value: "10+", children: "10+ years" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs(
        "select",
        {
          name: "yearsOfPassing",
          value: formData.yearsOfPassing,
          onChange: handleChange,
          required: true,
          className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm appearance-none",
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Year of Passing" }),
            /* @__PURE__ */ jsx("option", { value: "<2000", children: "Before 2000" }),
            /* @__PURE__ */ jsx("option", { value: "2000", children: "2000" }),
            /* @__PURE__ */ jsx("option", { value: "2001", children: "2001" }),
            /* @__PURE__ */ jsx("option", { value: "2002", children: "2002" }),
            /* @__PURE__ */ jsx("option", { value: "2003", children: "2003" }),
            /* @__PURE__ */ jsx("option", { value: "2004", children: "2004" }),
            /* @__PURE__ */ jsx("option", { value: "2005", children: "2005" }),
            /* @__PURE__ */ jsx("option", { value: "2006", children: "2006" }),
            /* @__PURE__ */ jsx("option", { value: "2007", children: "2007" }),
            /* @__PURE__ */ jsx("option", { value: "2008", children: "2008" }),
            /* @__PURE__ */ jsx("option", { value: "2009", children: "2009" }),
            /* @__PURE__ */ jsx("option", { value: "2010", children: "2010" }),
            /* @__PURE__ */ jsx("option", { value: "2011", children: "2011" }),
            /* @__PURE__ */ jsx("option", { value: "2012", children: "2012" }),
            /* @__PURE__ */ jsx("option", { value: "2013", children: "2013" }),
            /* @__PURE__ */ jsx("option", { value: "2014", children: "2014" }),
            /* @__PURE__ */ jsx("option", { value: "2015", children: "2015" }),
            /* @__PURE__ */ jsx("option", { value: "2016", children: "2016" }),
            /* @__PURE__ */ jsx("option", { value: "2017", children: "2017" }),
            /* @__PURE__ */ jsx("option", { value: "2018", children: "2018" }),
            /* @__PURE__ */ jsx("option", { value: "2019", children: "2019" }),
            /* @__PURE__ */ jsx("option", { value: "2020", children: "2020" }),
            /* @__PURE__ */ jsx("option", { value: "2021", children: "2021" }),
            /* @__PURE__ */ jsx("option", { value: "2022", children: "2022" }),
            /* @__PURE__ */ jsx("option", { value: "2023", children: "2023" }),
            /* @__PURE__ */ jsx("option", { value: "2024", children: "2024" }),
            /* @__PURE__ */ jsx("option", { value: "2025", children: "2025" }),
            /* @__PURE__ */ jsx("option", { value: "2026", children: "2026" }),
            /* @__PURE__ */ jsx("option", { value: "2027", children: "2027" }),
            /* @__PURE__ */ jsx("option", { value: "2028", children: "2028" }),
            /* @__PURE__ */ jsx("option", { value: "2029", children: "2029" }),
            /* @__PURE__ */ jsx("option", { value: "2030", children: "2030" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: "w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 transform hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-sm flex items-center justify-center gap-2",
        children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
          /* @__PURE__ */ jsx("span", { children: "Registering..." })
        ] }) : "Register Now"
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-gray-400 text-center", children: "By continuing, you agree to our Terms and Privacy Policy" })
  ] }) });
};
export {
  WSFormFree as W
};
