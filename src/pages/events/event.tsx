"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, Award, Clock, Zap, Star } from "lucide-react";
import CreateEventPage from "./eventForm";
import { SEO } from "../../components/seo/SEO";

export default function EventManagementPage() {
  // const [activeTab, setActiveTab] = useState<string>("Overview");
  // const tabs = ["Overview", "About", "Timeline", "Who Should Join?", "Testimonials"];

  return (
    <div className="min-h-screen bg-gradient-to-br relative mt-14 from-gray-900 to-black text-white">
      <SEO />
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <motion.div
          className="flex justify-between items-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mt-2">Product Inovation Challenge – The 7-Day Break-In </h1>
        </motion.div>

        {/* Tabs */}
        {/* <motion.div
          className="border-b border-gray-800 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <Link to={`#${tab}`}>
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-1 relative ${
                    activeTab === tab ? "text-white" : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      layoutId="activeTab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </Link>
            ))}
          </div>
        </motion.div> */}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Event Details */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <EventDetails />
          </motion.div>

          {/* Right Column - When & Where */}
          <motion.div
            className=" rounded-xl flex flex-col items-center gap-4 justify-start"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              className=" flex-shrink-0 w-full "
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-4 rounded-xl border border-purple-800/30">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Clock size={18} className="mr-2 text-purple-400" />
                  <span>Registrations closing soon</span>
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Registrations close on May 4th — miss it now, and it's waitlist only. Don't scroll past your
                  breakthrough.
                </p>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "40%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400 ">
                  <span>0</span>
                  <span>20+</span>
                  <span>50</span>
                </div>
              </div>
            </motion.div>
            <div className="w-full " id="registration">
              <CreateEventPage />
            </div>
          </motion.div>
        </div>

        {/* Footer Actions */}
        {/* <motion.div
          className="mt-6 flex flex-wrap justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Share Event</span>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}

// Testimonial type
type Testimonial = {
  text: string;
  author: string;
  role?: string;
};

export function EventDetails() {
  // For testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials: Testimonial[] = [
    {
      text: "After the last challenge, I built a mini AI tool, got 3 interviews, and finally landed a PM internship. The mock interview was a game-changer.",
      author: "Aarti V.",
      role: "Ex-Attendee",
    },
    {
      text: "The Product Inovation Challenge pushed me to think like a product manager. The mentorship and feedback were invaluable for my career transition.",
      author: "Rahul S.",
      role: "Product Manager",
    },
    {
      text: "Building a product in 7 days seemed impossible, but with the AI tools and guidance, I created something I'm proud to showcase in interviews.",
      author: "Priya M.",
      role: "Ex-Attendee",
    },
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Timeline data
  const timelineData = [
    { day: "Day 1", activity: "Kickoff + Team Formation + Challenge Brief" },
    { day: "Day 2", activity: "Problem Identification + Ideation" },
    { day: "Day 3", activity: "Prototype Building (with AI Tools)" },
    { day: "Day 4", activity: "Mentorship Session + Mid-Review" },
    { day: "Day 5", activity: "Resume Workshop + Branding Tips" },
    { day: "Day 6", activity: "Final Mock Interview + Product Pitch Prep" },
    { day: "Day 7", activity: "Demo Day + Winner Announcement (₹50K Prize)" },
  ];

  // Who should join data
  const whoShouldJoin = [
    "You're trying to break into product roles",
    "You want to build a strong personal brand",
    "You're a student or early-stage professional",
    "You enjoy solving problems and building solutions",
    "You want hands-on AI + product exposure",
    "You're tired of theory and ready to do the work",
  ];

  const scrollToForm = () => {
    const form = document.getElementById("registration");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.error('Form element not found with ID "registration"');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto  ">
        {/* Hero Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/90 rounded-xl py-6 px-4 md:p-8 border border-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <motion.h1
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Build your brand. Crack the PM code. Get hired.
              </motion.h1>

              <div className="flex items-center text-amber-400 mb-4">
                <div className="bg-amber-400/10 rounded-md p-1 mr-2">
                  <Calendar size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-gray-300 text-sm">May 8th 2025 - May 14th 2025</div>
                  <div className="text-amber-400 text-sm">Daily tasks and live sessions (1–2 hours/day)</div>
                </div>
              </div>

              <div className="flex items-center text-purple-400 mb-6">
                <div className="bg-purple-500/10 rounded-md p-1 mr-2">
                  <MapPin size={18} />
                </div>
                <span>Online (Zoom)</span>
              </div>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {/* <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-medium text-lg shadow-lg shadow-purple-900/30 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now!
                </motion.button> */}
                <p className="text-amber-400 mt-3 font-medium">Limited spots available.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* What's the Product Inovation Challenge Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/90 rounded-xl p-6 md:p-8 border border-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Award className="mr-3 text-purple-400" size={24} />
            <span>What's the Product Inovation Challenge?</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Product Inovation is a 7-day challenge where you'll form a team of 3 (or go solo), build a product using any
            AI tool, and position yourself like a top-tier product manager. Along the way, you'll get access to live
            mentor sessions, resume reviews, a mock interview, and a shot at winning Rs 50,000*.
          </p>

          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-800/20">
            <h3 className="text-xl font-semibold mb-4">Why This Challenge?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Use AI tools to build a real product in 7 days",
                "Work solo or in teams of 3 – choose your own path",
                "Learn how to brand yourself like a product",
                "Resume review & mock interview with real PMs",
                "Win Rs 50,000* cash – show your product, tell your story",
                "100% free – zero excuses, just hustle",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="mr-2 mt-1 text-purple-400">•</div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 font-medium text-center text-lg">
              <span className="text-gray-400">This isn't a passive course.</span>
              <br />
              <span className="text-purple-400">This is your proving ground.</span>
            </p>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/90 rounded-xl p-6 md:p-8 border border-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Clock className="mr-3 text-purple-400" size={24} />
            <span>Challenge Timeline (What Happens Each Day)</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 px-4 text-left text-purple-400">Day</th>
                  <th className="py-3 px-4 text-left text-purple-400">Activity</th>
                </tr>
              </thead>
              <tbody>
                {timelineData.map((item, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-gray-800/50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <td className="py-3 px-4 font-medium">{item.day}</td>
                    <td className="py-3 px-4 text-gray-300">{item.activity}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Who Should Join Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="bg-gradient-to-br from-gray-800/30 to-gray-900/90 rounded-xl p-6 md:p-8 border border-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="mr-3 text-purple-400" size={24} />
              <span>Who Should Join?</span>
            </h2>

            <p className="text-gray-300 mb-4">This challenge is perfect for you if...</p>

            <ul className="space-y-3 ">
              {whoShouldJoin.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3 flex-shrink-0">
                    <Zap size={14} />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            className="bg-gradient-to-br from-gray-800/30 to-gray-900/90 rounded-xl p-6 md:p-8 border border-gray-800 flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Star className="mr-3 text-purple-400" size={24} />
              <span>Testimonials</span>
            </h2>

            <div className="relative flex-1 flex flex-col">
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <div className="h-full relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      className="absolute inset-0 flex flex-col justify-center"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-gradient-to-r h-full mb-10 from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-800/20 space-y-8">
                        <p className="text-gray-300  mb-4">"{testimonials[currentTestimonial].text}"</p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                            <span className="font-bold">{testimonials[currentTestimonial].author.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium">{testimonials[currentTestimonial].author}</p>
                            <p className="text-sm text-gray-400">{testimonials[currentTestimonial].role}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Carousel controls */}
              <div className="mt-auto pt-40 flex justify-between items-center">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === index ? "bg-purple-500 w-6" : "bg-gray-600"
                        }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* <div className="flex space-x-2">
                  <button
                    onClick={() =>
                      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                    }
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-800/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">This 7-day challenge isn't just another event</h2>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            It's your shot to build a product, brand yourself, and stand out in a sea of job seekers. You'll learn from
            top PMs, compete for Rs 50,000*, and walk away with a personal story stronger than any resume.
          </p>

          <motion.button
            onClick={() => scrollToForm()}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-medium text-lg shadow-lg shadow-purple-900/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Register Now!
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
