import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is AcceleratorX?",
    answer:
      "AcceleratorX drives professional growth with expert-led learning and comprehensive career support. Join us to explore new opportunities, refine your product management skills and speed up your path to success.",
  },
  {
    question: "Who is eligible to apply for the Course?",
    answer:
      "The course is open to individuals who holds a graduation degree or pursuing their graduation. Those working in different domains and roles such as Sales, Marketing, Project, Program, Developer, Designer seeking to transition into a product management role.",
  },
  {
    question: "How can I enroll in the Course?",
    answer:
      "To enroll in the course, simply click on the registration button and fill in all the required details. Once you complete the payment, your seat will be reserved, or our counselor will reach out to you to assist with the process.",
  },
  {
    question: "What are the different modes of payment available for the Course?",
    answer:
      "Payment for the course can be made through our online portal, using UPI, net banking, credit card, debit card or opting for EMI plans through our partnered financial institutions.",
  },
  {
    question: "What is the mode of delivery for the Course?",
    answer:
      "The course is delivered online through live classes, providing flexibility and convenience for participants to engage with the material and instructors from anywhere.",
  },
  {
    question: "What is the duration of the Course?",
    answer: "The course spans a total of 16 weeks and our detailed schedule will be available on the website.",
  },
  {
    question: "What are the timings for the classes in the Course?",
    answer: "Classes are scheduled for weekday evenings and during the first half of weekends.",
  },
  {
    question: "Is there a minimum attendance requirement for the Course?",
    answer: "Yes, participants are required to maintain a minimum attendance of 70% throughout the course.",
  },
  {
    question: "What happens if I miss a live session during the Course?",
    answer:
      "If you miss any live sessions, recordings will be made available on your LMS portal within 24 hours after the class concludes.",
  },
  {
    question: "Will I have the opportunity to ask questions directly to the instructors during the Course?",
    answer:
      "Yes, you will have access to a dedicated forum within the Learning Management System (LMS) where you can directly address your doubts with our instructors. Additionally, dedicated doubt resolution sessions will be held, and there will be a specific time window after each class to clarify any questions you may have.",
  },
  {
    question: "What is BYDP?",
    answer:
      "BYDP stands for 'Build Your Dream Product.' It is an opportunity for participants to develop a product from scratch, culminating in the presentation of a Minimum Viable Product (MVP) and a Go-To-Market (GTM) strategy. Participants will have the chance to feature their products on the Wall of Product, showcasing exceptional creations to the world and potential recruiters. This initiative allows you to build the product you have always wanted to create and develop a solid product portfolio to effectively showcase your skills.",
  },
  {
    question: "What tools are covered in the Course?",
    answer:
      "The course covers a variety of essential tools, including: Whimsical, Amplitude, Optimizely, Jira, Asana, MySQL, Mixpanel, Miro, Postman, Figma.",
  },
  {
    question: "What specializations are included with the Course?",
    answer:
      "The course covers a variety of essential tools, including: Whimsical, Amplitude, Optimizely, Jira, Asana, MySQL, Mixpanel, Miro, Google Analytics, Postman, Figma.",
  },
  {
    question: "What support will I receive after completing the Course?",
    answer:
      "Upon completion of the program, you will receive the following support: Lifetime Access to all recorded classes and course content, a mentorship call with our expert, lifetime access to our dedicated job portal, and the opportunity to showcase your profile on the exclusive AI Product Managers wall.",
  },
  {
    question: "Is there any dedicated interview preparation included in the Course?",
    answer:
      "Yes, the course includes interview preparation sessions, mock interviews, and comprehensive study materials.",
  },
  {
    question: "What is included in the placement support offered with the Course?",
    answer:
      "The placement support includes a dedicated job portal, resume-building tools, and priority access to job listings.",
  },
  {
    question: "Is there a deadline for submitting assignments in the Course?",
    answer: "Yes, participants will be given a deadline of one week to submit their assignments.",
  },
  {
    question: "Is there a deadline for the submission of the BYDP?",
    answer: "Yes, the submission deadline for the BYDP project is set for one week before the final presentation.",
  },
  {
    question: "What are the future aspects of pursuing the Course?",
    answer:
      "By enrolling in this course, you will build a product portfolio through the BYDP initiative, acquire essential skills for a career in product management, and enjoy lifetime access to course content and the job portal.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#0a0a0a] text-white py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your Questions Answered
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Find answers to common questions about AcceleratorX and our services.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-800 pb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left py-4"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-500" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 py-4">{faq.answer}</p>
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
