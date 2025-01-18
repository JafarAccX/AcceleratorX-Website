import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      "Do I need prior experience in data analytics to join this course?",
    answer:
      "No, this course is designed for beginners. You’ll learn all the foundational concepts and tools required to get started in data analytics.",
  },
  {
    question: "Who is this course best suited for?",
    answer:
      "This course is perfect for students, professionals looking to transition into data analytics, business owners who want to leverage data-driven insights, and anyone interested in learning data analytics from scratch.",
  },
  {
    question: "What tools and technologies will I learn?",
    answer:
      "You’ll gain hands-on experience with Excel, SQL, Python, Tableau, and Power BI, along with an introduction to machine learning concepts.",
  },
  {
    question: "What topics does the course cover?",
    answer:
      "The course includes data cleaning and preparation, exploratory data analysis, data visualization, statistical analysis, predictive modeling, and dashboard creation.",
  },
  {
    question:
      "How long is the course, and how much time will I need to dedicate weekly?",
    answer:
      "The course is 22 weeks long. You’ll need to dedicate 6–10 hours per week for live sessions, assignments, and projects.",
  },
  {
    question: "Are there any live sessions, or is it self-paced?",
    answer:
      "The course includes a mix of live sessions, recorded lectures, and self-paced assignments, giving you flexibility while ensuring interaction with instructors.",
  },
  {
    question: "Will there be assignments or hands-on projects?",
    answer:
      "Yes, you’ll work on real-world datasets for weekly assignments and complete a capstone project that demonstrates your analytics skills.",
  },
  {
    question: "What will I achieve by the end of this course?",
    answer:
      "By the end of this course, you’ll have a strong foundation in data analytics, a portfolio of projects to showcase your skills, and the confidence to tackle analytics problems independently.",
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes, upon completing the course and submitting your capstone project, you’ll receive a professional certificate of completion.",
  },
  {
    question: "Can this course help me land a job in data analytics?",
    answer:
      "Absolutely! This course equips you with in-demand skills and a portfolio to showcase your expertise, which can help you secure freelance projects or full-time roles in data analytics.",
  },
  {
    question: "What technical setup do I need for this course?",
    answer:
      "You’ll need a computer or laptop with an internet connection and the ability to install software like Python, Tableau, and Excel.",
  },
  {
    question: "Do I need to purchase any software for this course?",
    answer:
      "No, the tools used in this course offer free versions or trial plans sufficient for completing the projects and assignments.",
  },
  {
    question: "What if I need help or have questions during the course?",
    answer:
      "You’ll have access to a dedicated support team, peer community discussions, and live Q&A sessions to address your questions.",
  },
  {
    question: "How much does the course cost?",
    answer:
      "The course costs ₹10,000, which includes lifetime access to all materials, recorded sessions, and templates.",
  },
  {
    question: "Can I access the course material after completion?",
    answer:
      "Yes, you’ll have lifetime access to the course content, so you can revisit any topic whenever needed.",
  },
  {
    question:
      "Is this course suitable for someone transitioning into a data analytics career?",
    answer:
      "Yes, this course is specifically designed to help beginners and career switchers build the foundational skills required for a data analytics role.",
  },
  {
    question: "How do I enroll in the course?",
    answer:
      "Click on the 'Enroll Now' button on the course page, complete the payment, and you’ll receive access to the course materials and schedule shortly.",
  },
];

const DataAnalyticsFAQFB: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-8 bg-[#0B1120] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-blue-400 text-center mb-12 text-lg">
          Everything you need to know about Data Analytics Program
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#1A2942] rounded-lg overflow-hidden transition-all duration-300 ease-in-out 
                ${
                  openIndex === index
                    ? "shadow-lg shadow-blue-500/30 border border-blue-500/50"
                    : "hover:shadow-lg hover:shadow-blue-500/20 border border-transparent"
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
                      ? "text-blue-400"
                      : "text-white group-hover:text-blue-400"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-all duration-300 
                    ${
                      openIndex === index
                        ? "rotate-180 text-blue-400"
                        : "text-blue-300 group-hover:text-blue-400"
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#1E304D]
                  ${openIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <p className="px-6 py-4 text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <footer className="mt-16 text-center text-gray-400 pb-8">
          <p>
            &copy; {new Date().getFullYear()} AcceleratorX. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default DataAnalyticsFAQFB;
