import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { u as useWorkshop, r as registerForZoomMeeting, W as WorkshopProvider } from "./registration-VZkPbkwx.js";
import { W as WORKSHOP_PRICE } from "./constants_price-pJIfbaHl.js";
import { g as getUTMDataForDB, a as generateFormEventId, t as trackFormSubmission } from "./metaPixel-Cw2h-5_I.js";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaClock, FaCalendarAlt, FaUserGraduate, FaLevelUpAlt } from "react-icons/fa";
const whatsappSerriApi = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjNjYTkxODE3NTVlMGY1ODIwYjEwYyIsIm5hbWUiOiJBY2NlbGVyYXRvciBYIiwiYXBwTmFtZSI6IkFpU2Vuc3kiLCJjbGllbnRJZCI6IjY3ZjNjOTA2MGEzNTkyMGMxYjBkN2MzMiIsImFjdGl2ZVBsYW4iOiJOT05FIiwiaWF0IjoxNzQ0MDMwMzUzfQ.q9ozhtK50kTdicqiWrOavUe42s2EhphWIPfl_E8I2Ns";
const WSForm = () => {
  const { workshopType, zoomMeetingDetails } = useWorkshop();
  const navigate = useNavigate();
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
  const [showModal, setShowModal] = useState(false);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [paymentCancelled, setPaymentCancelled] = useState(false);
  const [showCancellationModal, setShowCancellationModal] = useState(false);
  const apiUrl = "https://api.acceleratorx.org";
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        console.error("Failed to load Razorpay script");
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const handlePaymentCancellation = async (registrationId) => {
    try {
      const baseUrl = apiUrl.endsWith("/api") ? apiUrl.slice(0, -4) : apiUrl;
      await fetch(`${baseUrl}/workshop/cancel-workshop-payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          registrationId
        })
      });
    } catch (error) {
      console.error("Error handling payment cancellation:", error);
    } finally {
      setPaymentCancelled(true);
      setIsSubmitting(false);
      setShowCancellationModal(true);
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
      console.log("masterclass", masterclass);
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
      const razorpayLoaded = await initializeRazorpay();
      if (!razorpayLoaded) {
        throw new Error("Failed to load Razorpay SDK");
      }
      const registrationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        education: formData.education,
        designation: formData.designation,
        years_of_experience: formData.yearsOfExperience,
        years_of_passing: formData.yearsOfPassing,
        workshop_type: workshopType,
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
      const baseUrl = apiUrl.endsWith("/api") ? apiUrl.slice(0, -4) : apiUrl;
      const response = await fetch(`${baseUrl}/workshop/create-workshop-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: WORKSHOP_PRICE.amount,
          registrationData
        })
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.error || "Failed to create order");
      }
      if (!responseData.success) {
        throw new Error(responseData.error || "Failed to create order");
      }
      const registrationId = responseData.data.registrationId;
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      return new Promise((resolve, reject) => {
        const options = {
          key: "rzp_live_2joZ73V0yvllu8",
          amount: WORKSHOP_PRICE.amountInPaise,
          // amount in paise
          currency: "INR",
          name: "AcceleratorX",
          description: `${workshopType} Registration`,
          order_id: responseData.data.orderId,
          notes: {
            workshop_type: workshopType,
            registrationId
          },
          handler: async function(response2) {
            try {
              const verificationResponse = await fetch(`${baseUrl}/workshop/verify-workshop-payment`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  razorpay_payment_id: response2.razorpay_payment_id,
                  razorpay_order_id: response2.razorpay_order_id,
                  razorpay_signature: response2.razorpay_signature,
                  registrationId
                })
              });
              const verificationData = await verificationResponse.json();
              if (!verificationResponse.ok) {
                throw new Error(verificationData.error || "Payment verification failed");
              }
              if (verificationData.success) {
                setPaymentVerified(true);
                const eventId = generateFormEventId();
                const trackingFormData = new FormData();
                trackingFormData.append("name", formData.name);
                trackingFormData.append("email", formData.email);
                trackingFormData.append("phone", formData.phone);
                trackingFormData.append("education", formData.education);
                trackingFormData.append("designation", formData.designation);
                trackingFormData.append("course", workshopType);
                trackingFormData.append("workExperience", formData.yearsOfExperience);
                trackingFormData.append("yearsOfPassing", formData.yearsOfPassing);
                trackingFormData.append("eventId", eventId);
                await trackFormSubmission(trackingFormData);
                await registerForZoomMeeting(
                  formData.name,
                  formData.email,
                  formData.phone,
                  zoomMeetingDetails.meetingCode
                ).then(async (data) => {
                  const zoomJoinLink = data.join_url;
                  await sendWhatsAppMessage({
                    apiKey: whatsappSerriApi,
                    campaignName: "registration_confirmation",
                    phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
                    name: formData.name,
                    masterclass: zoomMeetingDetails.title,
                    sessionDate: zoomMeetingDetails.time,
                    link: zoomJoinLink
                  });
                }).catch((error) => {
                  console.error("Error registering for Zoom meeting:", error);
                  toast.error(error.message || "Zoom registration failed. Please try again.");
                });
                toast.success("Registration successful!");
                navigate(`/workshop-payment/success/${response2.razorpay_order_id}`);
                resolve(true);
              } else {
                throw new Error("Payment verification failed");
              }
            } catch (error) {
              console.error("Payment verification error:", error);
              toast.error(error.message || "Payment verification failed");
              reject(error);
            }
          },
          modal: {
            ondismiss: function() {
              handlePaymentCancellation(registrationId);
              reject(new Error("Payment cancelled"));
            }
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone
          },
          theme: {
            color: "#4F46E5"
          }
        };
        try {
          if (typeof window.Razorpay !== "function") {
            console.error("Razorpay SDK not initialized properly");
            throw new Error("Razorpay SDK not initialized properly");
          }
          const paymentObject = new window.Razorpay(options);
          paymentObject.on("payment.failed", function(response2) {
            console.error("Payment failed:", response2.error);
            toast.error(`Payment failed: ${response2.error.description}`);
            reject(new Error(response2.error.description));
          });
          paymentObject.open();
        } catch (error) {
          console.error("Error creating Razorpay instance:", error);
          toast.error("Failed to initialize payment. Please try again.");
          reject(error);
        }
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(error.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "  w-full border border-gray-800/30 ", id: "workshop-form", children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "name",
            value: formData.name,
            onChange: handleChange,
            required: true,
            className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm",
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
            className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm",
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
            className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm",
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
            className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm",
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
            className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm",
            placeholder: "Current Designation"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "select",
            {
              name: "yearsOfExperience",
              value: formData.yearsOfExperience,
              onChange: handleChange,
              required: true,
              className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-sm appearance-none cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", disabled: true, className: "text-gray-500", children: "Years of Experience" }),
                /* @__PURE__ */ jsx("option", { value: "0-1", children: "0-1 years" }),
                /* @__PURE__ */ jsx("option", { value: "1-3", children: "1-3 years" }),
                /* @__PURE__ */ jsx("option", { value: "3-5", children: "3-5 years" }),
                /* @__PURE__ */ jsx("option", { value: "5-10", children: "5-10 years" }),
                /* @__PURE__ */ jsx("option", { value: "10+", children: "10+ years" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }) })
        ] })
      ] }),
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
      ) }),
      paymentCancelled && /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4", children: /* @__PURE__ */ jsx("p", { className: "text-yellow-800 text-sm", children: "Your previous payment attempt was cancelled. You can try again by clicking the register button below." }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: isSubmitting,
          className: "w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 transform hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-sm flex items-center justify-center gap-2",
          children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
            /* @__PURE__ */ jsx("span", { children: "Registering..." })
          ] }) : paymentCancelled ? "Retry Payment" : "Register Now"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-gray-400 text-center", children: "By continuing, you agree to our Terms and Privacy Policy" })
    ] }),
    showCancellationModal && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-8 max-w-md w-full mx-4 relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowCancellationModal(false),
          className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700",
          children: "✕"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-yellow-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          }
        ) }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Payment Cancelled" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Your payment was cancelled. Would you like to try again?" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setShowCancellationModal(false);
                setPaymentCancelled(false);
                handleSubmit(new Event("submit"));
              },
              className: "flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors",
              children: "Retry Payment"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setShowCancellationModal(false);
                setPaymentCancelled(false);
              },
              className: "flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors",
              children: "Cancel"
            }
          )
        ] })
      ] })
    ] }) }),
    showModal && paymentVerified && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-8 max-w-md w-full mx-4 relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowModal(false),
          className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700",
          children: "✕"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-green-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 13l4 4L19 7" }) }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Thank You for Registering!" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-6", children: [
          "We're excited to have you join us for the workshop on ",
          zoomMeetingDetails.time
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg mb-6 text-left", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Zoom Meeting Details:" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 mb-2", children: [
            "Meeting ID: ",
            zoomMeetingDetails.meetingId
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 mb-2", children: [
            "Time: ",
            zoomMeetingDetails.time
          ] }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: zoomMeetingDetails.link,
              target: "_blank",
              rel: "noopener noreferrer nofollow",
              className: "inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors",
              children: "Add to Calendar"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "See you in the workshop!" })
      ] })
    ] }) })
  ] });
};
const WSHeroGENC = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.7;
    }
  }, []);
  const handleEnrollClick = () => {
    const formSection = document.getElementById("workshop-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0A0F1F] to-black ", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative w-full h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "video",
        {
          ref: videoRef,
          className: "absolute inset-0 w-full h-full object-cover",
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
          src: "/make_com_out_6.mp4"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/70 z-10" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-20 flex items-start pb-20  pt-52 lg:pb-0 lg:items-center justify-start h-full px-10 md:px-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl text-white space-y-6 flex flex-col items-center lg:items-start justify-between  h-[400px] pb-24", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-6xl font-bold leading-tight text-center lg:text-start", children: "Social Media Lead Gen Magnet" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-xl md:text-4xl font-bold leading-tight text-center lg:text-start md:flex items-center gap-2 md:gap-0", children: [
          "Make your mark with",
          /* @__PURE__ */ jsxs("span", { className: "pl-8 md:pl-2 flex items-center mx-auto text-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#daaaff] underline flex gap-2 items-center", children: "make.com " }),
            " ",
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/make.webp",
                alt: "make.com",
                className: " w-8 h-8  md:w-12 md:h-12 object-contain bg-white p-2 rounded-md"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleEnrollClick,
            className: "bg-blue-500 text-white px-6 py-3 rounded-full  text-lg font-medium hover:bg-gray-200 transition",
            children: "Register now"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8 },
        className: "absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/90 to-transparent ",
        children: /* @__PURE__ */ jsx("div", { className: "container mx-auto   py-4 flex justify-between items-center", children: /* @__PURE__ */ jsx("div", { className: "w-44 md:w-52 hover:scale-105 transition-transform duration-300", children: /* @__PURE__ */ jsx("img", { src: "/companylogo-new.webp", alt: "AcceleratorX Logo", className: "w-full h-auto" }) }) })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4  ", children: /* @__PURE__ */ jsxs("div", { className: "relative space-y-8 grid grid-cols-1 md:grid-cols-5  items-center justify-center md:gap-12 pt-32 lg:pt-36", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          animate: { x: 0, opacity: 1 },
          transition: { duration: 0.8 },
          className: "flex flex-col gap-4 col-span-3",
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                whileHover: { scale: 1.02 },
                transition: { duration: 0.3 },
                className: "inline-flex max-w-[250px] items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20",
                children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      animate: {
                        rotate: [0, 360]
                      },
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      className: "w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center",
                      children: /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "⚡" })
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "Hands-on AI Workshop" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6 flex items-start justify-center flex-col ", children: [
              /* @__PURE__ */ jsx(
                motion.h1,
                {
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { duration: 0.8 },
                  className: " text-3xl lg:text-4xl font-bold leading-tight",
                  children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "Turn Your Social Media Into a Lead Machine" }),
                    /* @__PURE__ */ jsxs("span", { className: " text-gray-400", children: [
                      /* @__PURE__ */ jsx("br", {}),
                      "– Without Big Team"
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("p", { className: " text-gray-400", children: "Join our hands-on webinar where we’ll walk you through how to use Make.com to build lead-generation workflows that work while you sleep." }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl backdrop-blur-sm border w-full border-blue-500/20", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between  items-center w-full  ", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1", children: "Price" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Avail now to get the offer" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxs("p", { className: "text-3xl font-bold text-white", children: [
                  /* @__PURE__ */ jsx("span", { className: " text-gray-400 font-light line-through mx-4", children: "₹199" }),
                  "₹99"
                ] }) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { opacity: [1, 0.7, 1] },
                transition: { duration: 2, repeat: Infinity },
                className: "text-blue-400  text-sm font-medium",
                children: "* The first 50 people pay ₹99, and then it becomes ₹199!"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6", children: [
              { icon: /* @__PURE__ */ jsx(FaClock, { className: "text-emerald-400 mb-1" }), label: "Duration", value: "2 Hours" },
              {
                icon: /* @__PURE__ */ jsx(FaCalendarAlt, { className: "text-indigo-400 mb-1" }),
                label: "Date",
                value: "29 Jun"
              },
              {
                icon: /* @__PURE__ */ jsx(FaUserGraduate, { className: "text-cyan-400 mb-1" }),
                label: "time",
                value: "11:00 AM IST"
              },
              { icon: /* @__PURE__ */ jsx(FaLevelUpAlt, { className: "text-cyan-400 mb-1" }), label: "Level", value: "All Levels" }
            ].map((item, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "group bg-gradient-to-br from-[#0A1A2A]/80 to-[#061625]/60 backdrop-blur-xl rounded-lg p-3 border border-emerald-500/10 hover:border-indigo-400/30 transition-all duration-300 flex flex-col items-center hover:translate-y-[-2px] hover:shadow-lg",
                children: [
                  item.icon,
                  /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-xs", children: item.label }),
                  /* @__PURE__ */ jsx("p", { className: "text-white font-semibold group-hover:text-cyan-300 transition-colors", children: item.value })
                ]
              },
              index
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { x: 10, opacity: 0 },
          animate: { x: 0.7, opacity: 1 },
          transition: { duration: 0.8 },
          className: "w-full col-span-2  lg:sticky lg:top-32",
          children: /* @__PURE__ */ jsx("div", { className: "relative w-full mx-auto ", children: /* @__PURE__ */ jsx("div", { className: "relative bg-gradient-to-b my-2 from-[#1A1F2B] to-[#141820] p-6 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Reserve Your Spot Now!" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Limited seats available for the next session" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { id: "workshop-registration-form", children: /* @__PURE__ */ jsx(WorkshopProvider, { children: /* @__PURE__ */ jsx(WSForm, {}) }) })
          ] }) }) })
        }
      )
    ] }) })
  ] });
};
export {
  WSHeroGENC as default
};
