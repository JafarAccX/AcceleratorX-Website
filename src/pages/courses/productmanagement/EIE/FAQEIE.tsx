import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Could you describe AcceleratorX and its core mission or function?",
    answer:
      "AcceleratorX is an online upskilling platform dedicated to transforming ambitious individuals into industry leaders. It offers AI-powered programs for freshers and professionals in high-demand fields like AI Product Management, Generative AI, Data Analytics and AI Digital Marketing Skills, with a focus on cutting-edge technology, personalised mentorship and 100% job assistance.",
  },
  {
    question: "How will the program content be delivered?",
    answer:
      "The delivery mode of the AI Product Management program is 100% live and instructor-led.",
  },
  {
    question: "How long does the AI PM program take to complete?",
    answer: "The duration of the AI Product Management program is 16 weeks.",
  },
  {
    question: "What does BYDP stand for, and what is its purpose within the curriculum?",
    answer:
      "BYDP stands for Build Your Dream Product (or sometimes a similar Capstone/Final Project). Its purpose is to have you work on a recruiter-ready, real-world capstone project to create a strong portfolio, which is essential for demonstrating measurable impact to potential employers.",
  },
  {
    question: "Which tools and technologies will be taught in this program?",
    answer:
      "You will master a comprehensive set of industry tools that are used by top AI Product Managers in top product companies.",
  },
  {
    question: "What are the eligibility requirements or prerequisites for enrolling?",
    answer:
      "You need no prior knowledge to join the AcceleratorX AI Product Management program. This program is beginner-friendly with no specific prerequisites required for the core curriculum. It's suitable for students, professionals, freelancers, and business owners.",
  },
  {
    question: "Is mandatory attendance required for the program sessions?",
    answer:
      "The platform emphasises 100% live sessions for an interactive learning experience. It is strongly recommended to attend the live sessions, but mandatory attendance is not enforced.",
  },
  {
    question: "If I miss a live class, how can I catch up on the material?",
    answer:
      "Live sessions are also recorded, and you receive lifetime access to all program materials, including these recordings, allowing you to catch up on missed content at your own pace.",
  },
  {
    question: "What are the submission deadlines for program assignments?",
    answer: "Specific deadlines are usually provided within the program calendar upon enrollment. Weekly assignments are common to ensure continuous progress.",
  },
  {
    question: "What opportunities are there for direct Q&A or interaction with the instructors?",
    answer:
      "The programs offer extensive interaction, including live instructor-led sessions with a mandatory Q&A session, dedicated mentoring and project reviews and bi-Weekly Career Review Calls.",
  },
  {
    question: "Does the program curriculum include specific preparation for job interviews?",
    answer:
      "Yes. AcceleratorX AI Product Management Program comes with 100% job assistance, including personalised career guidance, resume building, dedicated interview preparation and mock interviews.",
  },
  {
    question: "What career or professional opportunities can I expect after completing the program?",
    answer:
      "AcceleratorX AI Product Management program prepares you for high-demand AI Product Manager roles. Including roles like AI Product Manager, AI Product Specialist, AI Product Marketer, and Product Growth Consultant. Overall, the goal is to equip you with A-Ready Skills to accelerate your career.",
  },
];

export default function FAQEIE() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#0a0a0a] text-white py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Got questions? We've got the Answers
          </motion.h3>
          <motion.p
            className="text-gray-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Everything Learners Need to Know About AcceleratorX
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className={`border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm
                       hover:border-gray-700 transition-all duration-300
                       ${openIndex === index ? "bg-gray-900/50" : "bg-gray-900/20"}`}
            >
              <button
                className="flex justify-between items-center w-full text-left group"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span
                  className={`text-lg font-medium transition-colors duration-300
                              ${openIndex === index ? "text-[#5CB338]" : "text-white"}`}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                    scale: openIndex === index ? 1.1 : 1,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className={`p-1 rounded-full transition-colors duration-300
                          ${openIndex === index ? "text-amber-400 bg-amber-400/10" : "text-gray-400 bg-gray-800/50"}
                          group-hover:bg-amber-400/10 group-hover:text-amber-400`}
                >
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </motion.div>
              </button>

              <AnimatePresence mode="sync">
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{
                      duration: 0.15,
                      ease: [0.32, 0, 0.67, 0],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="text-gray-400 pt-4 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
