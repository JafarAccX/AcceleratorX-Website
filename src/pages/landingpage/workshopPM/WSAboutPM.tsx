import { AlertTriangle, ArrowRight, HelpCircle, Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Plug } from "lucide-react";
import InstructorSection from "./InsturcteorSection";
import WhoShouldAttendSection from "./WhoShouldAttendSection";
import WSTools from "./WSTools";

const WSAboutPM = () => {
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


  const steps = [
    {
      id: 1,
      title: "AI Product Execution Using Gemini, Claude & Cursor",
      description: "How to go from 'idea' to a functional prototype in 60 minutes.",
      icon: Lightbulb,
      reverse: false,
    },
    {
      id: 2,
      title: "Designing AI Workflows",
      description: "Prompt chains, multi-agent flows, system prompts, context design, and real integrations.",
      icon: Rocket,
      reverse: true,
    },
    {
      id: 3,
      title: "Using Claude & Cursor for Rapid Prototyping",
      description: "Build mini-apps, automations, APIs, and workflows without waiting on dev teams.",
      icon: Plug,
      reverse: false,
    },
    {
      id: 4,
      title: "Building AI Features into Real Products",
      description: "Connect AI models with platforms like Airtable, Slack, HubSpot, Gmail, and more.",
      icon: AlertTriangle,
      reverse: false,
    },
    {
      id: 5,
      title: "Deploying & Testing AI Systems",
      description: "Run real scenarios, measure output quality, and iterate fast.",
      icon: HelpCircle,
      reverse: false,
    },
    {
      id: 6,
      title: "Live Q&A",
      description: "Solve your actual AI product challenges on the spot.",
      icon: HelpCircle,
      reverse: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-[#0A0F1D] py-16 ">
      <WSTools />

      <section className="py-20 px-6 bg-gray-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/20 via-violet-500/10 to-transparent rounded-bl-full pointer-events-none blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/20 via-indigo-500/10 to-transparent rounded-tr-full pointer-events-none blur-3xl"></div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What You'll Learn</h2>
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-16 md:space-y-24"
          >
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Complete Step Card */}
                  <div
                    className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-lg ${
                      isEven ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 text-center ${isEven ? "md:text-left" : "md:text-right"}`}>
                      <motion.h3
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold text-white mb-4"
                      >
                        {step.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-300 text-lg md:text-xl leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    </div>

                    {/* Icon */}
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
                      <div className="relative">
                        {/* Connection line to next step */}
                        {index < steps.length - 1 && (
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 md:h-24 bg-gradient-to-b from-blue-500 to-transparent opacity-60" />
                        )}

                        {/* Icon container */}
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800/80 backdrop-blur-sm border border-blue-500/30 rounded-2xl flex items-center justify-center relative">
                          <step.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />

                          {/* Blue dot indicator */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Subtle floating elements */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full blur-sm"
        />

        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-blue-300/30 rounded-full blur-sm"
        />
      </section>

      <InstructorSection />
      <WhoShouldAttendSection />
      <div className=" flex items-center justify-center  py-10">
        <button
          onClick={scrollToForm}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-white font-medium shadow-lg shadow-indigo-500/25   transition-all duration-300"
        >
          Book Your Free Slot
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0  transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default WSAboutPM;
