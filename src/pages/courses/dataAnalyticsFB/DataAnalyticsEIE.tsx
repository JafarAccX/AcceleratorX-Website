import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Who is this Data Analytics program for?",
    answer: "This program is ideal for students, working professionals, entrepreneurs, AI enthusiasts and Data Analysts who want to master data-driven decision-making and grow their careers with AI-powered analytics skills.",
  },
  {
    question: "What makes the AcceleratorX AI Data Analytics Program different from other programs?",
    answer: "Unlike traditional programs, this program combines AI-driven learning, hands-on projects, and real-world analytics tools, helping you learn faster, helping you build a strong data analyst portfolio and stay ahead in a data-first world.",
  },
  {
    question: "Are the classes live or self-paced?",
    answer: "AcceleratorX AI Data Analytics Program is 100% live with mentor-led sessions and AI-assisted guidance to give you flexibility without compromising personal support.",
  },
  {
    question: "What kind of projects will I work on?",
    answer: "You'll work on real business and AI data challenges, from customer behaviour analysis to AI-powered dashboards. Each project adds to your portfolio, helping you stand out to recruiters.",
  },
  {
    question: "What support will I get during and after the program?",
    answer: "You'll get personalised mentor assistance, end-to-end career guidance, data analytics mock interviews, and access to a thriving community of data analysts even after program completion.",
  },
  {
    question: "Can this program help me transition into a data analytics career?",
    answer: "Yes, this program is designed for a career change to high-paying data analytics job. With AI tools, practical projects, and placement assistance, you'll be job-ready for roles like Data Analyst, Business Analyst, Financial Analyst, Product Analyst and many more roles.",
  },
  {
    question: "How do I enroll and start learning?",
    answer: "Simply click on \"Enrol Now\", choose your plan, and get immediate access to the AI Data Analytics learning portal, no technical background required to begin.",
  },
];

const DateAnalyticsFAQEIE: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1A5D1A]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1A5D1A]/5 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-[#1A5D1A] text-center mb-12 text-lg">
          Everything you need to know about Data Analytics Program
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out 
                ${
                  openIndex === index
                    ? "shadow-lg shadow-[#1A5D1A]/20 border border-[#1A5D1A]/20"
                    : "hover:shadow-md hover:shadow-[#1A5D1A]/10 border border-gray-100"
                }`}
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left group"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`text-lg font-medium transition-colors duration-300 
                  ${
                    openIndex === index
                      ? "text-[#1A5D1A]"
                      : "text-gray-800 group-hover:text-[#1A5D1A]"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-all duration-300 
                    ${
                      openIndex === index
                        ? "rotate-180 text-[#1A5D1A]"
                        : "text-gray-400 group-hover:text-[#1A5D1A]"
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#F4F9F4]
                  ${openIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <p className="px-6 py-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DateAnalyticsFAQEIE;
