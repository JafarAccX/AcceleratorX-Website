import React, { useState } from 'react';

const AIDMFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need coding skills?",
      answer: "No, this is a low-code / no-code AI Marketing program, designed for beginners, marketers, career switchers and founders."
    },
    {
      question: "Will the AI Marketing sessions be recorded?",
      answer: "Yes, you will get sessions recordings, AI Marketing labs and ready to use templates to practice anytime."
    },
    {
      question: "Will I get placement support or career support in the AI Marketing certification?",
      answer: "Yes, you'll build a capstone portfolio in AI-powered digital marketing, receive mentor reviews, and get selective industry introductions"
    },
    {
      question: "What if i miss a live AI Marketing class?",
      answer: "No worries, you can always watch the recording, complete the lab submission, and also join weekly mentor office hours."
    },
    {
      question: "What's the refund policy for the AI Marketing program?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with the program quality. Contact our support team for assistance."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-4  my-20">
      {/* Background Gradient Blob */}

       {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/backgrounds/dm.webp" 
          alt="Digital Marketing Background" 
          className="w-full h-full object-fill opacity-30"
        />
        {/* Dark overlay to maintain readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            "Still Have Questions? We've Got Answers."
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700/50 rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-sm"
            >
              <button
                className="w-full text-left p-4 bg-gray-800/50 hover:bg-gray-700/50 transition duration-300 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-white">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-800/30">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDMFAQ;
