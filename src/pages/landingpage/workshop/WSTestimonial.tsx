import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const WSTestimonial = () => {
    const testimonials = [
        {
          name: "Rohan Mehta",
          role: "Data Scientist",
          company: "AnalyticsHub",
          image: "/assets/testimonialsLogo/testimonial1.webp",
          content: "This masterclass provided a perfect balance between theory and practical applications. The tools and case studies discussed gave me new perspectives on solving real-world AI problems.",
          rating: 5
        },
        {
          name: "Gautham Sharma",
          role: "Machine Learning Engineer",
          company: "AI Innovators",
          image: "/assets/testimonialsLogo/testimonial2.webp",
          content: "A fantastic session! The insights on scalable AI architecture and the tools used were extremely helpful. It was a well-structured and highly engaging masterclass.",
          rating: 5
        },
        {
          name: "Kunal Verma",
          role: "Software Developer",
          company: "NextGen Tech",
          image: "/assets/testimonialsLogo/testimonial3.webp",
          content: "The masterclass demystified AI tools and techniques for someone like me transitioning into AI. The case studies were particularly inspiring and practical.",
          rating: 5
        }
      ];
      

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMzLjE4IDAgNi4xNzUtLjgyNyA4Ljc3MS0yLjI4bDkuMjI5IDIuMjgtNC4yOTItOC4xMjFjMi42ODgtMy4xMjcgNC4yOTItNy4yMjEgNC4yOTItMTEuODc5IDAtOS45NDEtOC4wNTktMTgtMTgtMTh6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 lg:pr-[450px] relative z-10">
        <div className="text-center lg:text-left mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Participants Say
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it - hear from our workshop alumni
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                <FaQuoteLeft className="text-white w-4 h-4" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex text-yellow-400 mb-6 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4" />
                ))}
              </div>

              {/* Profile */}
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WSTestimonial;