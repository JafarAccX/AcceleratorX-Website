import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const GENFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question:
        "I'm a product manager with no AI background. Can I take this course?",
      answer:
        "Absolutely! This course is designed for PMs and aspiring PMs with no prior AI or coding experience. You'll learn GenAI concepts and tools from scratch, with a focus on practical product management applications.",
    },
    {
      question: "What kind of PM projects will I work on?",
      answer:
        "You'll build hands-on projects like GenAI-powered product research assistants, roadmap generators, stakeholder update bots, and a capstone PM dashboard. All projects are tailored to real-world product management challenges.",
    },
    {
      question: "Will I get a certification after completing the course?",
      answer:
        "Yes, you'll receive a certification in GenAI for Product Management after completing the course and final project. This credential will help you stand out in PM job applications and career growth.",
    },
    {
      question:
        "How will this course help my PM career?",
      answer:
        "You'll gain job-ready GenAI skills, build a portfolio of PM-focused AI projects, and learn how to automate and optimize product workflows. This will make you a valuable asset for any product team embracing AI.",
    },
    {
      question:
        "What support will I get during the course?",
      answer:
        "You'll have access to live Q&A sessions, a PM/GenAI learning community, and lifetime access to course materials and updates. Our team is here to help you succeed!",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we offer a 15-day refund policy if you're not satisfied and have made full payment, subject to our terms and conditions.",
    },
  ];

  return (
    <section className="relative py-12 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1.5 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-400 text-xs font-medium">FAQ</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm">
              Get answers to common questions about GenAI for Product Managers
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-4 py-3 flex items-center justify-between text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-sm font-medium text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-3 text-sm text-gray-400 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Still have questions? Contact our support team at{" "}
              <a
                href="mailto:support@acceleratorx.com"
                className="text-blue-400 hover:text-blue-300"
              >
                support@acceleratorx.co
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default GENFAQ;
