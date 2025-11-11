import { u as useNavigate, T as useLocation, r as reactExports, j as jsxRuntimeExports, c as _t, U as generateFormEventId, h as axios } from "./main-DoR0yzTf.js";
import { u as useWorkshop, r as registerForZoomMeeting, W as WorkshopProvider } from "./registration-O6gTmejw.js";
import { d as FaClock, e as FaCalendarAlt, f as FaUserGraduate } from "./index-Bt5v74dI.js";
import { g as getUTMDataForDB, t as trackFormSubmission } from "./metaPixel-Cn55y1S8.js";
import { c as createWorkshopRegistration } from "./workshopApi-BpsQYTfu.js";
const whatsappSerriApi = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjNjYTkxODE3NTVlMGY1ODIwYjEwYyIsIm5hbWUiOiJBY2NlbGVyYXRvciBYIiwiYXBwTmFtZSI6IkFpU2Vuc3kiLCJjbGllbnRJZCI6IjY3ZjNjOTA2MGEzNTkyMGMxYjBkN2MzMiIsImFjdGl2ZVBsYW4iOiJOT05FIiwiaWF0IjoxNzQ0MDMwMzUzfQ.q9ozhtK50kTdicqiWrOavUe42s2EhphWIPfl_E8I2Ns";
const WSFormFree = () => {
  const { workshopType, zoomMeetingDetails } = useWorkshop();
  console.log("WSFormFree render with workshopType:", workshopType);
  console.log("zoomMeetingDetails:", zoomMeetingDetails);
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    yearsOfExperience: "",
    yearsOfPassing: ""
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
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
      _t.error("Please enter a valid email address");
      return;
    }
    if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
      _t.error("Please enter a valid 10-digit phone number");
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
      _t.success("Registration successful!");
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
        _t.error("This email or phone number is already registered.");
      } else {
        _t.error("Registration failed. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "workshop-form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          name: "yearsOfExperience",
          value: formData.yearsOfExperience,
          onChange: handleChange,
          required: true,
          className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm appearance-none",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Years of Experience" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0-1", children: "0-1 years" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1-3", children: "1-3 years" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3-5", children: "3-5 years" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "5-10", children: "5-10 years" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "10+", children: "10+ years" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          name: "yearsOfPassing",
          value: formData.yearsOfPassing,
          onChange: handleChange,
          required: true,
          className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm appearance-none",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Year of Passing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "<2000", children: "Before 2000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2000", children: "2000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2001", children: "2001" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2002", children: "2002" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2003", children: "2003" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2004", children: "2004" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2005", children: "2005" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2006", children: "2006" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2007", children: "2007" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2008", children: "2008" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2009", children: "2009" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2010", children: "2010" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2011", children: "2011" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2012", children: "2012" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2013", children: "2013" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2014", children: "2014" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2015", children: "2015" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2016", children: "2016" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2017", children: "2017" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2018", children: "2018" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2019", children: "2019" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2020", children: "2020" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2021", children: "2021" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2022", children: "2022" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2023", children: "2023" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2024", children: "2024" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2025", children: "2025" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2026", children: "2026" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2027", children: "2027" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2028", children: "2028" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2029", children: "2029" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2030", children: "2030" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: "w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 transform hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-sm flex items-center justify-center gap-2",
        children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Registering..." })
        ] }) : "Register Now"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-gray-400 text-center", children: "By continuing, you agree to our Terms and Privacy Policy" })
  ] }) });
};
const WSHeroAIDM = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-gradient-to-b from-[#050A14] via-[#0A0F1F] to-[#050A14]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 left-10 w-64 h-64 bg-green-600/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 w-full bg-black/30 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-3 flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 md:w-44", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/companylogo-new.webp", alt: "company logo - professional certificate in product management online", className: "w-full h-auto" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12 md:py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-1/2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 font-medium text-sm", children: " AI-Powered Digital Marketing" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-blue-100", children: "Conversion Rate Optimization with AI" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-xl", children: "Master the art of conversion rate optimization using cutting-edge AI tools and strategies. Learn how to analyze user behavior, optimize landing pages, and implement data-driven techniques to dramatically improve your conversion rates." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-wrap items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-yellow-400 text-sm font-medium", children: "Learn CRO with AI – Boost Your Conversion Rates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block sm:hidden animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: scrollToForm,
              className: "px-3 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300",
              children: "Learn CRO for Free – No Experience Needed"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-4 mt-6", children: [
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaClock, { className: "text-emerald-400 mb-1" }), label: "Duration", value: "2 Hours" },
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaCalendarAlt, { className: "text-indigo-400 mb-1" }), label: "Date", value: "Nov 15th" },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaUserGraduate, { className: "text-cyan-400 mb-1" }),
            label: "time",
            value: "11:00 AM"
          },
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaUserGraduate, { className: "text-cyan-400 mb-1" }), label: "Level", value: "All Levels" }
        ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group bg-gradient-to-br from-[#0A1A2A]/80 to-[#061625]/60 backdrop-blur-xl rounded-lg p-3 border border-emerald-500/10 hover:border-indigo-400/30 transition-all duration-300 flex flex-col items-center hover:translate-y-[-2px] hover:shadow-lg",
            children: [
              item.icon,
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold group-hover:text-cyan-300 transition-colors", children: item.value })
            ]
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-5/12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-xl blur-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-[#111827] p-5 rounded-xl shadow-xl border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkshopProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "workshop-registration-form", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WSFormFree, {}) }) }) })
      ] }) })
    ] }) })
  ] });
};
export {
  WSHeroAIDM as default
};
