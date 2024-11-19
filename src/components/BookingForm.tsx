import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  X,
  User,
  Mail,
  Phone,
  GraduationCap,
  Users,
} from "lucide-react";
import { format, addDays } from "date-fns";
import { createClient } from "@supabase/supabase-js";

// Supabase setup
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const BookingForm = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const nextFourDays = Array.from({ length: 4 }, (_, i) =>
    addDays(new Date(), i)
  );

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  // Fetch booked slots for the selected date
  useEffect(() => {
    const fetchBookedSlots = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("bookings")
          .select("booking_time")
          .eq("booking_date", format(selectedDate, "yyyy-MM-dd"));

        if (error) throw error;

        setBookedSlots(data.map((slot) => slot.booking_time));
      } catch (error) {
        console.error("Error fetching booked slots:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookedSlots();
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedTime) {
      alert("Please select a time slot.");
      return;
    }

    try {
      const { error } = await supabase.from("bookings").insert([
        {
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          education: e.target.education.value,
          mentor: e.target.mentor.value,
          booking_date: format(selectedDate, "yyyy-MM-dd"),
          booking_time: selectedTime,
        },
      ]);

      if (error) throw error;

      alert(
        `Session booked successfully for ${format(
          selectedDate,
          "PP"
        )} at ${selectedTime}!`
      );
      onClose();
    } catch (error) {
      console.error("Error booking session:", error);
      alert("Failed to book the session. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
          className="w-full max-w-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.2)] overflow-hidden my-4 border border-slate-700/50"
        >
          {/* Header */}
          <div className="relative p-4 sm:p-5 border-b border-slate-700/50 bg-slate-800/50">
            <button
              onClick={onClose}
              className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors duration-200 hover:bg-slate-700/50 p-1 rounded-full"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              Book Mentor Session
            </h2>
          </div>

          <div className="p-4 sm:p-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="flex items-center text-xs font-medium text-gray-300 mb-1"
                  >
                    <User className="w-3 h-3 mr-1" /> Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-2.5 py-1.5 bg-gray-800/50 text-white rounded-md"
                    placeholder="Full name"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="flex items-center text-xs font-medium text-gray-300 mb-1"
                  >
                    <Mail className="w-3 h-3 mr-1" /> Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-2.5 py-1.5 text-white bg-gray-800/50 rounded-md"
                    placeholder="Email address"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="flex items-center text-xs font-medium text-gray-300 mb-1"
                  >
                    <Phone className="w-3 h-3 mr-1" /> Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-2.5 py-1.5 text-white bg-gray-800/50 rounded-md"
                    placeholder="Phone number"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="education"
                    className="flex items-center text-xs font-medium text-gray-300 mb-1"
                  >
                    <GraduationCap className="w-3 h-3 mr-1" /> Education
                  </label>
                  <select
                    id="education"
                    name="education"
                    required
                    className="w-full px-2.5 py-1.5 text-white bg-gray-800/50 rounded-md"
                  >
                    <option value="">Select...</option>
                    <option value="bachelors">Bachelor's</option>
                    <option value="masters">Master's</option>
                    <option value="phd">Ph.D.</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Mentor Selection */}
              <div className="relative">
                <label
                  htmlFor="mentor"
                  className="flex items-center text-xs font-medium text-gray-300 mb-1"
                >
                  <Users className="w-3 h-3 mr-1" /> Mentor
                </label>
                <select
                  id="mentor"
                  name="mentor"
                  required
                  className="w-full px-2.5 py-1.5 text-white bg-gray-800/50 rounded-md"
                >
                  <option value="">Select mentor...</option>
                  <option value="ruchir">Ruchir Rana</option>
                  <option value="anurag">Anurag Goel</option>
                </select>
              </div>

              {/* Date Selection */}
              <div>
                <label className="flex items-center text-xs font-medium text-gray-300 mb-1">
                  <Calendar className="w-3 h-3 mr-1" /> Select Date
                </label>
                <div className="flex gap-2">
                  {nextFourDays.map((date) => (
                    <button
                      key={date.toISOString()}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={`px-3 py-2 rounded-lg ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? "bg-blue-500 text-white"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {format(date, "EEE, MMM dd")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="flex items-center text-xs font-medium text-gray-300 mb-1">
                  <Clock className="w-3 h-3 mr-1" /> Select Time Slot
                </label>
                <div className="flex gap-2 flex-wrap">
                  {timeSlots.map((slot) =>
                    bookedSlots.includes(slot) ? (
                      <button
                        key={slot}
                        type="button"
                        disabled
                        className="px-3 py-2 rounded-lg bg-gray-600 text-gray-400 cursor-not-allowed"
                      >
                        {slot}
                      </button>
                    ) : (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`px-3 py-2 rounded-lg ${
                          selectedTime === slot
                            ? "bg-blue-500 text-white"
                            : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                        }`}
                      >
                        {slot}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* No Slots Message */}
              {bookedSlots.length === timeSlots.length && (
                <p className="text-red-500 text-sm mt-2">
                  No slots available for the selected date.
                </p>
              )}

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Book Session
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingForm;
