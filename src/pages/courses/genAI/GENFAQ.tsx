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
      question: "Can I take this Generative AI and Agentic AI program if I'm new to AI?",
      answer: "Yes! You don't need any prior experience. We guide you from the basics to advanced AI concepts step by step.",
    },
    {
      question: "What kind of AI projects will I work on?",
      answer: "You will be solving real-world problem with AI while building projects like AI content automation, smart chatbots, multi-agent workflows, capstone AI SaaS product and many more.",
    },
    {
      question: "Do I get a certification for this Gen AI & AI Agent No-Code Automation Program?",
      answer: "Yes! Once you complete the program, you will receive an industry-recognised AI certification to showcase your skills.",
    },
    {
      question: "How will this program boost my career?",
      answer: "You will gain hands-on experience on building AI solutions and, solving complex problem using AI. You will build a strong project portfolio, get interview prep, and receive career guidance for India's top mentors in AI domain to land AI roles.",
    },
    {
      question: "What if I get stuck?",
      answer: "All the learners will have access to our exclusive AI community for doubt clearing anytime you need help and there's is a mandatory QNA session in the end of each session for better understanding of each topic.",
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
              Your Questions About Our AI Program, Answered
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
    </section>
  );
};

export default GENFAQ;
