import React, { useState } from "react";
import toast from "react-hot-toast";
import { useWorkshop } from "../../../context/WorkshopContext";
import { useNavigate, useLocation } from "react-router-dom";
import { trackFormSubmission, getUTMDataForDB } from "../../../utils/metaPixel";
import { generateFormEventId } from "../../../utils/unifiedTracking";
import { registerForZoomMeeting } from "../../../routes/utils/registration";
import { createWorkshopRegistration, WorkshopRegistrationData } from "../../../api/workshopApi";
import axios from "axios";

const omniAccessToken = import.meta.env.VITE_OMNI_ACCESS_TOKEN;

interface WorkshopFormData {
  name: string;
  email: string;
  phone: string;
  education: string;
  designation: string;
  yearsOfExperience: string;
  yearsOfPassing: string;
}

const WSFormFree = () => {
  const { workshopType, zoomMeetingDetails } = useWorkshop();
  console.log("WSFormFree render with workshopType:", workshopType);
  console.log("zoomMeetingDetails:", zoomMeetingDetails);
  const navigate = useNavigate();
  const location = useLocation(); // Added this line
  const [formData, setFormData] = useState<WorkshopFormData>({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    yearsOfExperience: "",
    yearsOfPassing: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // console.log("workshopType ", workshopType);
  // console.log("zoomMeetingDetails ", zoomMeetingDetails);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Added conditional redirect function
  const handleRedirect = (submissionData: WorkshopRegistrationData) => {
    if (location.pathname === "/workshop/pm-masterclass") {
      navigate("/registration-sucessfull");
    } else {
      navigate("/workshop-registration/success", {
        state: {
          registrationDetails: {
            name: submissionData.name,
            email: formData.email,
            workshop_type: submissionData.workshop_type,
          },
          zoomDetails: {
            link: zoomMeetingDetails.link,
            meetingId: zoomMeetingDetails.meetingId,
            time: zoomMeetingDetails.time,
            whatsappLink: zoomMeetingDetails.whatsappLink,
          },
        },
      });
    }
  };

  async function sendWhatsAppMessage({
    phone,
    name,
    masterclass,
    sessionDate,
    link,
  }: {
    phone: string;
    name: string;
    masterclass: string;
    sessionDate: string;
    link: string;
  }) {
    try {
      const cleaned = sessionDate.replace("India", "").trim();
      const [rawDate, time] = cleaned.split(/(?<=\d{4})\s/);
      const newdate = rawDate.replace(/(\d+)(st|nd|rd|th)/, "$1");

      const response = await fetch("https://wb.omni.tatatelebusiness.com/whatsapp-cloud/messages", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Authorization": `Bearer ${omniAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "to": (() => {
            const cleanedPhone = phone.replace(/^\+/, '');
            // Assume India (+91) if 10 digits
            return cleanedPhone.length === 10 ? `91${cleanedPhone}` : cleanedPhone;
          })(),
          "type": "template",
          "source": "external",
          "template": {
            "name": "registration_confirmation",
            "language": {
              "code": "en"
            },
            "components": [
              {
                "type": "body",
                "parameters": [
                  {
                    "type": "text",
                    "text": name
                  },
                  {
                    "type": "text",
                    "text": masterclass
                  },
                  {
                    "type": "text",
                    "text": newdate
                  },
                  {
                    "type": "text",
                    "text": time
                  },
                  {
                    "type": "text",
                    "text": link
                  }
                ]
              }
            ]
          },
          "metaData": {
            "custom_callback_data": ""
          }
        }),
      });

      console.log("WhatsApp API response status:", response);

      const responseData = await response.json();
      console.log("WhatsApp API response data:", responseData);

      if (!response.ok) {
        const err = responseData;
        console.error("WhatsApp API error:", err);
        throw new Error("WhatsApp message sending failed");
      }
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validation
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
      // Get UTM data for tracking
      const utmData = getUTMDataForDB();

      // Convert camelCase to snake_case for database
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
        created_at: new Date().toISOString(),
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
        msclkid: utmData.msclkid,
      };

      // Call the new API endpoint to submit the data
      await createWorkshopRegistration(submissionData);

      // Track form submission with Meta Pixel
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

      // Register for Zoom meeting and send WhatsApp message
      try {
        const zoomData = await registerForZoomMeeting(
          formData.name,
          formData.email,
          formData.phone,
          zoomMeetingDetails.meetingCode,
        );
        const zoomJoinLink = zoomData.join_url;
        await sendWhatsAppMessage({
          phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
          name: formData.name,
          masterclass: zoomMeetingDetails.title,
          sessionDate: zoomMeetingDetails.time,
          link: zoomJoinLink,
        });
      } catch (error) {
        console.error("Error in post-registration actions:", error);
        // Non-critical error, so we can still show success to the user
      }

      toast.success("Registration successful!");

      // Clear form and redirect
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        designation: "",
        yearsOfExperience: "",
        yearsOfPassing: "",
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

  return (
    <div id="workshop-form">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm"
              placeholder="Full Name"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm"
              placeholder="Email Address"
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm"
              placeholder="Phone Number"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm"
              placeholder="Education (Highest Qualification)"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm"
              placeholder="Current Designation"
            />
          </div>

          <div className="relative">
            <select
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm appearance-none"
            >
              <option value="">Years of Experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>

          <div className="relative">
            <select
              name="yearsOfPassing"
              value={formData.yearsOfPassing}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm appearance-none"
            >
              <option value="">Year of Passing</option>
              <option value="<2000">Before 2000</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 transform hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-sm flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Registering...</span>
            </>
          ) : (
            "Register Now"
          )}
        </button>

        <p className="text-xs md:text-sm text-gray-400 text-center">
          By continuing, you agree to our Terms and Privacy Policy
        </p>
      </form>
    </div>
  );
};

export default WSFormFree;
