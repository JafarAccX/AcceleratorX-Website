import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WSFIOSection from "../WorkshopDASecond/WSIOSection";
import FAQSection from "./WSFAQSection";

const WSTestimonialPM = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };

  return (
    <div className="bg-[#0A0F1D]  relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/10 via-violet-500/5 to-transparent rounded-bl-full pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/10 via-indigo-500/5 to-transparent rounded-tr-full pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <WSFIOSection />
        <div className=" lg:hidden flex items-center justify-center py-10">
          <button
            onClick={scrollToForm}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300"
          >
            Reserve Your Spot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <FAQSection />

      <div className="relative z-10 py-20 max-w-3xl mx-auto text-center">
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Limited Seats.
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Reserve Yours Now.
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          This is a live, interactive session, not just a passive lecture. We keep it small so everyone gets value.
        </motion.p>

        <motion.div
          className="py-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            onClick={() => {
              const form = document.getElementById("workshop-registration-form");
              if (form) {
                form.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }
            }}
            className="rounded-full px-6 py-3 text-sm font-semibold text-black bg-gray-200 shadow-md hover:bg-white transition"
          >
            Register Now—It's Free ↗
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WSTestimonialPM;
