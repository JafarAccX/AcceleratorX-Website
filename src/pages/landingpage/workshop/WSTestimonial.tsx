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
    <div className="bg-gradient-to-b from-white via-gray-50 to-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-green-50/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMzLjE4IDAgNi4xNzUtLjgyNyA4Ljc3MS0yLjI4bDkuMjI5IDIuMjgtNC4yOTItOC4xMjFjMi42ODgtMy4xMjcgNC4yOTItNy4yMjEgNC4yOTItMTEuODc5IDAtOS45NDEtOC4wNTktMTgtMTgtMTh6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')] bg-repeat opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center text-black">
            What Our Participants Say
          </h2>
          <p className="text-gray-500 text-lg">
            Don't just take our word for it - hear from our workshop alumni
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {testimonialImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-[400px] bg-white"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative h-full">
                <img
                  src={image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-full object-fill transform transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonial Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">500+</span>
            </div>
            <p className="text-gray-600 font-medium">Happy Participants</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">4.9</span>
            </div>
            <p className="text-gray-600 font-medium">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">98%</span>
            </div>
            <p className="text-gray-600 font-medium">Success Rate</p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200">
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
