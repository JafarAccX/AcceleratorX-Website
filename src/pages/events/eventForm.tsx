"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, Users, AlertCircle } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const whatsappSerriApi = import.meta.env.VITE_WHATSAPP_SERRI_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

type FormData = {
  eventName: string;
  participant1: string;
  participantsnumber1: string;
  participant2: string;
  participantsnumber2: string;
  participant3: string;
  participantsnumber3: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
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

export default function CreateEventPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    eventName: "",
    participant1: "",
    participantsnumber1: "",
    participant2: "",
    participantsnumber2: "",
    participant3: "",
    participantsnumber3: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // If participant1 is provided, participantsnumber1 is required and vice versa
    if (formData.participant1 && !formData.participantsnumber1) {
      newErrors.participantsnumber1 = "Participant number is required";
    }

    if (!formData.participant1 && formData.participantsnumber1) {
      newErrors.participant1 = "Participant name is required";
    }

    // Same validation for participant2 and participant3
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      const { data, error } = await supabase.from("Events").insert([formData]).select();

      if (error) {
        throw error;
      }

      console.log(data);
      setFormSuccess("Event created successfully!");

      // await sendWhatsAppMessage({
      //   apiKey: whatsappSerriApi,
      //   campaignName: "registration_confirmation",
      //   phone: formData.phone.startsWith("+") ? "9856478956" : `+91${"9856235984"}`,
      //   name: formData.name,
      //   masterclass: zoomMeetingDetails.title,
      //   sessionDate: zoomMeetingDetails.time,
      //   link: zoomJoinLink,
      // });

      // Reset form
      setFormData({
        eventName: "PM TearDown",
        participant1: "",
        participantsnumber1: "",
        participant2: "",
        participantsnumber2: "",
        participant3: "",
        participantsnumber3: "",
      });

      // Redirect to event page after short delay
      //   setTimeout(() => {
      //     router.push(`/event/${data[0].id}`);
      //   }, 1500);
    } catch (error: any) {
      console.error("Error creating event:", error);
      setFormError(error.message || "Failed to create event. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen    text-white">
      <div className="max-w-3xl mx-auto">
        {/* Form */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/70 to-gray-900/90 rounded-xl p-6 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {formError && (
            <motion.div
              className="mb-6  bg-red-900/30 border border-red-500/30 rounded-lg text-red-400 flex items-center"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <AlertCircle className="mr-2" size={18} />
              {formError}
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Users size={18} className="mr-2 text-purple-400" />
                <h3 className="text-lg font-medium">Participants</h3>
              </div>

              {/* Participant 1 */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Participant 1</h4>
                <div className="grid grid-cols-1  gap-4">
                  <div>
                    <input
                      type="text"
                      name="participant1"
                      value={formData.participant1}
                      onChange={handleChange}
                      className={`w-full bg-gray-800/50 border ${
                        errors.participant1 ? "border-red-500/50" : "border-gray-700"
                      } rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`}
                      placeholder="Participant name"
                    />
                    {errors.participant1 && <p className="mt-1 text-sm text-red-400">{errors.participant1}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="participantsnumber1"
                      value={formData.participantsnumber1}
                      onChange={handleChange}
                      className={`w-full bg-gray-800/50 border ${
                        errors.participantsnumber1 ? "border-red-500/50" : "border-gray-700"
                      } rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`}
                      placeholder="Contact number"
                    />
                    {errors.participantsnumber1 && (
                      <p className="mt-1 text-sm text-red-400">{errors.participantsnumber1}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Participant 2 */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Participant 2 (Optional)</h4>
                <div className="grid grid-cols-1  gap-4">
                  <div>
                    <input
                      type="text"
                      name="participant2"
                      value={formData.participant2}
                      onChange={handleChange}
                      className={`w-full bg-gray-800/50 border ${
                        errors.participant2 ? "border-red-500/50" : "border-gray-700"
                      } rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`}
                      placeholder="Participant name"
                    />
                    {errors.participant2 && <p className="mt-1 text-sm text-red-400">{errors.participant2}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="participantsnumber2"
                      value={formData.participantsnumber2}
                      onChange={handleChange}
                      className={`w-full bg-gray-800/50 border ${
                        errors.participantsnumber2 ? "border-red-500/50" : "border-gray-700"
                      } rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`}
                      placeholder="Contact number"
                    />
                    {errors.participantsnumber2 && (
                      <p className="mt-1 text-sm text-red-400">{errors.participantsnumber2}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Participant 3 */}
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-3">Participant 3 (Optional)</h4>
                <div className="grid grid-cols-1  gap-4">
                  <div>
                    <input
                      type="text"
                      name="participant3"
                      value={formData.participant3}
                      onChange={handleChange}
                      className={`w-full bg-gray-800/50 border ${
                        errors.participant3 ? "border-red-500/50" : "border-gray-700"
                      } rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`}
                      placeholder="Participant name"
                    />
                    {errors.participant3 && <p className="mt-1 text-sm text-red-400">{errors.participant3}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="participantsnumber3"
                      value={formData.participantsnumber3}
                      onChange={handleChange}
                      className={`w-full bg-gray-800/50 border ${
                        errors.participantsnumber3 ? "border-red-500/50" : "border-gray-700"
                      } rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300`}
                      placeholder="Contact number"
                    />
                    {errors.participantsnumber3 && (
                      <p className="mt-1 text-sm text-red-400">{errors.participantsnumber3}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Link
                to="/"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300 text-gray-300"
              >
                Cancel
              </Link>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
