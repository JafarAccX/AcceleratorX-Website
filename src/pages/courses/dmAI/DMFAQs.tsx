import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronDown } from "react-icons/fa";

const DMFAQs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What prerequisites are needed for this course?",
      answer:
        "No specific prerequisites are required. Basic marketing knowledge and familiarity with digital platforms is helpful but not mandatory. We'll cover everything from the ground up.",
    },
    {
      question: "How long do I have access to the course materials?",
      answer:
        "You get lifetime access to all course materials, including future updates. This ensures you can learn at your own pace and revisit topics as needed.",
    },
    {
      question: "Is the certification recognized by employers?",
      answer:
        "Yes, our certification is industry-recognized and valued by employers. It demonstrates your proficiency in AI-powered digital marketing strategies.",
    },
    {
      question: "What kind of support is available during the course?",
      answer:
        "You  have access to live sessions, community support, project reviews, and dedicated mentoring to ensure your success throughout the course.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course content or experience.",
    },
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 highlight-text">
            FAQ
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <button
                  className="w-full text-left flex items-center justify-between focus:outline-none"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-lg font-mono text-neon-yellow">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-neon-pink transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="font-mono text-neutral-100/70">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DMFAQs;
