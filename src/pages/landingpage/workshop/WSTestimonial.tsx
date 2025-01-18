import React from "react";

const WSTestimonial = () => {
  const testimonialImages = [
    "/assets/testimonialsLogo/feedback1.png",
    "/assets/testimonialsLogo/feedback2.png",
    "/assets/testimonialsLogo/feedback4.png",
    "/assets/testimonialsLogo/feedback5.png",
    "/assets/testimonialsLogo/feedback6.png",
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMzLjE4IDAgNi4xNzUtLjgyNyA4Ljc3MS0yLjI4bDkuMjI5IDIuMjgtNC4yOTItOC4xMjFjMi42ODgtMy4xMjcgNC4yOTItNy4yMjEgNC4yOTItMTEuODc5IDAtOS45NDEtOC4wNTktMTgtMTgtMTh6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Participants Say
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it - hear from our workshop alumni
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {testimonialImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg h-[400px]"
            >
              <img
                src={image}
                alt={`Testimonial ${index + 1}`}
                className="w-full h-full object-fill transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 pt-8 border-t border-gray-800/50">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} AcceleratorX. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WSTestimonial;
