import React, { useState } from "react";
import { HelpCircle, ChevronDown, Rocket } from "lucide-react";
import EnrollmentModal from "../../../components/EnrollmentModal";

interface FAQItem {
  question: string;
  answer: string;
}

const GENFAQAd = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const faqs: FAQItem[] = [
    {
      question:
        "I'm new to AI and have no technical background. Will I be able to understand this course?",
      answer:
        "Yes! This course is designed for beginners with no coding or AI experience. We start with the basics and gradually move to advanced applications, using a hands-on approach to make AI learning simple and practical. By the end of the course, you'll be able to build AI-powered tools and automation solutions with ease.",
    },
    {
      question: "What kind of real-world projects will I be working on?",
      answer:
        "Unlike most AI courses that focus on theory or require coding, this program is entirely hands-on and beginner-friendly. It covers Generative AI, AI agents, automation, and cloud deployment using 25+ AI tools. You’ll also learn monetization strategies, making it ideal for both professionals and entrepreneurs",
    },
    {
      question: "Will I get a certification after completing the course?",
      answer:
        "Yes, you will receive an industry-recognized certification in Generative AI & AI Agent Building upon completing the course and final project. This certification adds value to your resume and portfolio, helping you stand out in job applications and freelancing opportunities.",
    },
    {
      question:
        "I’m interested in AI for career growth. How will this course help me professionally?",
      answer:
        "This course provides job-ready AI skills that are in high demand. You’ll gain hands-on experience with AI tools, learn automation strategies, and build a portfolio of real-world projects, making you a strong candidate for AI-related roles or freelancing opportunities.",
    },
    {
      question:
        "Will I get support during the course if I have questions or get stuck?",
      answer:
        "Yes, you’ll have access to live sessions, Q&A support, and a learning community to assist you. Even after completing the course, you’ll retain lifetime access to materials and updates, keeping you up to date with AI advancements.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, We offer a 15 days refund policy if you're not satisfied and made full payment with the course content or experience depending on the terms and conditions.",
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
              Get answers to common questions about our AI program
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

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg mb-6">
              Ready to start your AI journey? Join us today!
            </p>
            <button
              onClick={handleModalOpen}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Enroll Now
            </button>
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
      <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} />
    </section>
  );
};

export default GENFAQAd;

<style jsx global>{`
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
