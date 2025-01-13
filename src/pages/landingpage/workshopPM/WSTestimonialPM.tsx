import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const WSTestimonialPM = () => {
  const testimonials = [
    {
      name: "Sameer Khan",
      role: "Product Manager",
      company: "Tech Solutions",
      image: "/assets/testimonialsLogo/testimonial4.jpeg",
      content:
        "This workshop was a game-changer! It perfectly blended product management fundamentals with AI integration. The real-world case studies and actionable insights were invaluable.",
      rating: 5,
    },
    {
      name: "G Thulasi",
      role: "Learners",
      company: "Innovative Products Inc.",
      image: "/assets/testimonialsLogo/testimonial6.jpeg",
      content:
        "A fantastic experience! The workshop gave me a clear understanding of how to incorporate AI into product strategy, from ideation to execution. The tools and frameworks presented were highly practical.",
      rating: 5,
    },
    {
      name: "Ipshita Pathak",
      role: "Tech Lead",
      company: "FutureTech Solutions",
      image: "/assets/testimonialsLogo/testimonial5.jpeg",
      content:
        "This workshop helped me bridge the gap between AI and product management. The focus on building AI-driven products and scaling them was especially useful for my current projects.",
      rating: 5,
    },
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
                  {/* <p className="text-sm text-gray-400">
                    {testimonial.role} · {testimonial.company}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WSTestimonialPM;
