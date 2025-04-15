import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import { useWorkshop } from "../../../context/WorkshopContext";
import { useNavigate } from "react-router-dom";
import { trackFormSubmission, getUTMDataForDB } from "../../../utils/metaPixel";
import { registerForZoomMeeting } from "../../../routes/utils/registration";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const whatsappSerriApi = import.meta.env.VITE_WHATSAPP_SERRI_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

interface FormData {
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
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    yearsOfExperience: "",
    yearsOfPassing: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function sendWhatsAppMessage({
    apiKey,
    campaignName,
    phone,
    name,
    masterclass,
    sessionDate,

    link,
  }: {
    apiKey: string;
    campaignName: string;
    phone: string;
    name: string;
    masterclass: string;
    sessionDate: string;
    link: string;
  }) {
    try {
      const cleaned = sessionDate.replace("India", "").trim();

      const [rawDate, time] = cleaned.split(/(?<=\d{4})\s/); // Split after the year

      const newdate = rawDate.replace(/(\d+)(st|nd|rd|th)/, "$1");

      console.log("masterclass", masterclass);
      const response = await fetch("https://backend.api-wa.co/campaign/serri-india/api/v2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiKey: apiKey,
          campaignName: campaignName,
          destination: phone,
          userName: name,
          templateParams: ["$FirstName", masterclass, newdate, time, link],
          source: "registration form",
          paramsFallbackValue: {
            FirstName: "user",
            value: "fallback value",
          },
          media: {},
          buttons: [],
          carouselCards: [],
          location: {},
          attributes: {},
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        console.error("WhatsApp API error:", err);
        throw new Error("WhatsApp message sending failed");
      }

      //       // console.log('WhatsApp message sent successfully!');
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
      // console.log("UTM Data captured:", utmData);

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

      // console.log("Submitting workshop registration with UTM data:", submissionData);

      /**
       * * Insert data into Supabase table
       */
      const { error } = await supabase.from("workshop_registrations").insert([submissionData]);

      /**
       * * * Check for errors during insertion
       * * * Handle unique constraint errors for phone and email
       */
      if (error) {
        console.error("Supabase error:", error);
        if (error.code === "23505") {
          if (error.message.includes("workshop_registrations_phone_key")) {
            toast.error(
              "This phone number is already registered for a workshop. Please use a different number or contact support if you need to update your registration.",
            );
          } else if (error.message.includes("workshop_registrations_email_key")) {
            // Handle email constraint error by adding a unique suffix
            const timestamp = new Date().getTime();
            const uniqueEmail = `${formData.email.split("@")[0]}+${timestamp}@${formData.email.split("@")[1]}`;

            // Update submission data with unique email
            submissionData.email = uniqueEmail;

            // Try again with the modified email
            const { error: retryError } = await supabase.from("workshop_registrations").insert([submissionData]);

            if (retryError) {
              console.error("Retry error:", retryError);
              toast.error("Registration failed. Please try again later.");
              throw retryError;
            } else {
              // Continue with successful registration flow below
              // Track form submission with Meta Pixel
              try {
                await trackFormSubmission({
                  name: formData.name,
                  email: formData.email, // Use original email for tracking
                  phone: formData.phone,
                  education: formData.education,
                  designation: formData.designation,
                  course: workshopType,
                  workExperience: formData.yearsOfExperience,
                  yearsOfPassing: formData.yearsOfPassing,
                });
              } catch (trackingError) {
                console.error("Error tracking form submission:", trackingError);
              }

              await sendWhatsAppMessage({
                apiKey: whatsappSerriApi,
                campaignName: "registration_confirmation",
                phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
                name: formData.name,
                masterclass: zoomMeetingDetails.title,
                sessionDate: zoomMeetingDetails.time,
                link: zoomMeetingDetails.link,
              });

              // Show success toast and redirect to success page
              toast.success("Registration successful!");

              // Reset form data
              setFormData({
                name: "",
                email: "",
                phone: "",
                education: "",
                designation: "",
                yearsOfExperience: "",
                yearsOfPassing: "",
              });

              // Redirect to success page with registration details (using original email)
              navigate("/workshop-registration/success", {
                state: {
                  registrationDetails: {
                    name: submissionData.name,
                    email: formData.email, // Use original email for display
                    workshop_type: submissionData.workshop_type,
                  },
                  zoomDetails: {
                    link: zoomMeetingDetails.link,
                    meetingId: zoomMeetingDetails.meetingId,
                    time: zoomMeetingDetails.time,
                  },
                },
              });

              return; // Exit early since we've handled everything
            }
          } else {
            toast.error(
              "This registration already exists. Please contact support if you need to update your registration.",
            );
          }
        } else {
          toast.error("Registration failed. Please try again later.");
        }
        throw error;
      }

      console.log("making regestration");

      await registerForZoomMeeting(formData.name, formData.email, formData.phone, zoomMeetingDetails.meetingCode)
        .then(async (data) => {
          // Success: maybe show a confirmation message
          console.log("Zoom registration successful:", data);
          await sendWhatsAppMessage({
            apiKey: whatsappSerriApi,
            campaignName: "registration_confirmation",
            phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
            name: formData.name,
            masterclass: zoomMeetingDetails.title,
            sessionDate: zoomMeetingDetails.time,
            link: zoomMeetingDetails.link,
          });
        })
        .catch((error) => {
          // Error: show a friendly error message
          console.error("Error registering for Zoom meeting:", error);
          toast.error(error.message || "Zoom registration failed. Please try again.");
        });

      console.log("masterclass titile", zoomMeetingDetails.title);
      // Track form submission with Meta Pixel
      try {
        await trackFormSubmission({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          education: formData.education,
          designation: formData.designation,
          course: workshopType, // Use workshop type as course
          workExperience: formData.yearsOfExperience,
          yearsOfPassing: formData.yearsOfPassing,
        });
        // console.log("Form submission tracked successfully");
      } catch (trackingError) {
        console.error("Error tracking form submission:", trackingError);
        // Continue with registration process even if tracking fails
      }

      await sendWhatsAppMessage({
        apiKey: whatsappSerriApi,
        campaignName: "registration_confirmation",
        phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
        name: formData.name,
        masterclass: zoomMeetingDetails.title,
        sessionDate: zoomMeetingDetails.time,
        link: zoomMeetingDetails.link,
      });

      // Show success toast and redirect to success page
      toast.success("Registration successful!");

      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        designation: "",
        yearsOfExperience: "",
        yearsOfPassing: "",
      });

      // Redirect to success page with registration details
      navigate("/workshop-registration/success", {
        state: {
          registrationDetails: {
            name: submissionData.name,
            email: submissionData.email,
            workshop_type: submissionData.workshop_type,
          },
          zoomDetails: {
            link: zoomMeetingDetails.link,
            meetingId: zoomMeetingDetails.meetingId,
            time: zoomMeetingDetails.time,
          },
        },
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#111] rounded-2xl shadow-2xl p-6 w-full border border-gray-800/30" id="workshop-form">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
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
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
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
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
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
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
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
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
              placeholder="Current Designation"
            />
          </div>

          <div className="relative">
            <select
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm appearance-none"
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
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm appearance-none"
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
