"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

const faqs = [
  {
    question: "Is this beginner-friendly?",
    answer:
      "Yes! You don’t need prior coding knowledge or ML experience.",
  },
  {
    question: "Do I need to know Python?",
    answer:
      "No. AutoML tools reduce the need for coding — we’ll show you the easiest workflows.",
  },
  {
    question: "Will there be a recording?",
    answer: "No. This is a live-only session.",
  },
];

export default function WSTestimonialDASecond() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 👈 First FAQ open by default

  return (
    <>
      {/* FAQs Section */}
      <section className="relative z-10 px-6 py-20 text-white max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">FAQs</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-md transition-all duration-300"
              >
                {/* Question Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full text-left group"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className="text-white bg-white/10 p-2 rounded-full transition-transform group-hover:scale-105">
                    {isOpen ? (
                      <FiArrowUpRight className="text-white" />
                    ) : (
                      <FiArrowRight className="text-white" />
                    )}
                  </span>
                </button>

                {/* Answer Section */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mt-4 text-sm text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      

      <section className="relative z-10 bg-gradient-to-b from-[#0A0F1C] to-[#121a2e] px-6 py-24 text-white overflow-hidden">
  {/* Grid Pattern using pseudo-element or custom div */}
  <div
    className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:36px_36px]"
  />

  {/* Optional background glow */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-purple-500/10 blur-3xl rounded-full pointer-events-none z-0" />

  {/* CTA Content */}
  <div className="relative z-10 max-w-3xl mx-auto text-center">
    <motion.h2
      className="text-4xl md:text-5xl font-bold leading-tight"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Let’s build your first AutoML model — together.
    </motion.h2>

    <motion.p
      className="mt-4 text-lg text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      Start learning how to automate data analysis and model building with AI, fast and effectively.
    </motion.p>

    <motion.div
      className="mt-10"
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
        Claim Your Free Spot ↗
      </button>
    </motion.div>
  </div>
</section>

    </>
  );
}
