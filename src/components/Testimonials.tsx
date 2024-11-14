import React from 'react';

const testimonials = [
  {
    name: "Sophia Martinez",
    role: "Financial Analyst",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    content: "Inno's customer support is exceptional. They are always ready to help with any issues we encounter, making our experience seamless."
  },
  {
    name: "Michael Brown",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    content: "The integration of Inno's services into our existing infrastructure was smooth and efficient. We couldn't have asked for a better partner."
  },
  {
    name: "Emma Wilson",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    content: "The level of security and innovation is unparalleled. It is refreshing to work with a company that truly understands modern fintech needs."
  },
  // Duplicate testimonials for continuous scroll
  {
    name: "David Chen",
    role: "Investment Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    content: "The analytics and reporting tools provided by Inno have given us deeper insights into our financial performance."
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
    content: "Inno's commitment to security and innovation reassures me that my investments are well-protected and poised for growth."
  },
  {
    name: "James Wilson",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    content: "Their innovative approach to fintech has given us a competitive edge. Their services are a game-changer."
  }
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Our Clien<span className="text-blue-500">ts</span>
        </h2>
        <p className="text-gray-400">
          Join thousands of satisfied customers who trust Inno with their financial future
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* First row - Left to Right */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[400px] mx-4"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - Right to Left */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {[...testimonials.reverse(), ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[400px] mx-4"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}