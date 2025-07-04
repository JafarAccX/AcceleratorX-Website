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

  // const plans = [
  //   {
  //     name: "Basic",
  //     price: "$49.99",
  //     description: "For individuals",
  //     features: ["Up to 50 Mbps", "Unlimited data", "24/7 customer support", "Free installation", "No contract"],
  //     buttonText: "Select",
  //     highlighted: false,
  //   },
  //   {
  //     name: "Pro",
  //     price: "$79.99",
  //     description: "For families",
  //     features: ["Up to 100 Mbps", "Unlimited data", "Priority customer support", "Free installation", "No contract"],
  //     buttonText: "Start with Plus",
  //     highlighted: true,
  //   },
  //   {
  //     name: "Enterprise",
  //     price: "$149.99",
  //     description: "For businesses",
  //     features: ["Up to 200 Mbps", "Unlimited data", "Dedicated account manager", "Free installation", "No contract"],
  //     buttonText: "Select",
  //     highlighted: false,
  //   },
  // ];

  const steps = [
    {
      id: 1,
      title: "Product Thinking for AI",
      description: "How AI product design is different and why most builders get it wrong.",
      icon: Lightbulb, // idea/product thinking
      reverse: false,
    },
    {
      id: 2,
      title: "Real Use-Cases & Frameworks",
      description: "See working examples from B2B, consumer, and internal AI tools.",
      icon: Plug, // integration/use-case
      reverse: true,
    },
    {
      id: 4,
      title: "From Idea to MVP",
      description: "How to validate, prototype, and launch in days (not months).",
      icon: Rocket, // launch/MVP
      reverse: false,
    },
    {
      id: 5,
      title: "Avoiding Common Traps",
      description: `Why most AI apps fail — and how to avoid building "yet another wrapper."`,
      icon: AlertTriangle, // warning/caution
      reverse: false,
    },
    {
      id: 6,
      title: "Ask-Me-Anything",
      description: `Live Q&A with industry practitioners and AI builders.`,
      icon: HelpCircle, // Q&A / help
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

      {/*<section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />

        <div className="relative z-10 max-w-7xl mx-auto">
           
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Flexible Plans for Everyone
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
            >
              Choose the plan that best suits your needs and enjoy seamless connectivity.
            </motion.p>
          </div>

           
          <motion.div
            variants={containerVariants2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: index === 0 ? 5 : index === 2 ? -5 : 0,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className={`relative group perspective-1000 ${plan.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
              >
                 
                <div
                  className={`
                relative p-8 rounded-2xl backdrop-blur-xl border transition-all duration-300
                ${
                  plan.highlighted
                    ? "bg-blue-900/30 border-blue-500/50 shadow-2xl shadow-blue-500/20"
                    : "bg-gray-800/40 border-gray-700/50 hover:border-gray-600/50"
                }
              `}
                >
 
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                   
                  <div className="mb-8">
                    <span
                      className={`text-4xl md:text-5xl font-bold ${plan.highlighted ? "text-blue-400" : "text-white"}`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-lg ml-2">/month</span>
                  </div>

                   
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 mb-8 ${
                      plan.highlighted
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30"
                        : "bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 border border-gray-600/50"
                    }`}
                  >
                    {plan.buttonText}
                  </motion.button>

                   
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.1 * featureIndex,
                          ease: "easeOut",
                        }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.highlighted ? "bg-blue-600/20" : "bg-gray-700/50"
                          }`}
                        >
                          <Check className={`w-3 h-3 ${plan.highlighted ? "text-blue-400" : "text-gray-400"}`} />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                   
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        
        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-blue-300/20 rounded-full blur-sm"
        />
      </section> */}
      <InstructorSection />
      <WhoShouldAttendSection />
      <div className=" flex items-center justify-center  py-10">
        <button
          onClick={scrollToForm}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-white font-medium shadow-lg shadow-indigo-500/25   transition-all duration-300"
        >
          Reserve Your Spot
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0  transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default WSAboutPM;
