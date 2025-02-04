import React from "react";
import { Star, Quote } from "lucide-react";

const WSTestimonialPM = () => {
  const testimonialImages = [
    "/assets/testimonialsLogo/feedback1.png",
    "/assets/testimonialsLogo/feedback2.png",
    "/assets/testimonialsLogo/feedback4.png",
    "/assets/testimonialsLogo/feedback5.png",
    "/assets/testimonialsLogo/feedback6.png",
  ];

  return (
    <div className="bg-[#0A0F1D] py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/10 via-violet-500/5 to-transparent rounded-bl-full pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/10 via-indigo-500/5 to-transparent rounded-tr-full pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          {/* Premium Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2">
              <Quote className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            What Our Participants Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join the ranks of successful professionals who have transformed their product management careers through our workshop
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {testimonialImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-2xl p-[1px]">
                <div className="absolute inset-0 bg-[#0A0F1D] rounded-2xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src={image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-full object-fill transform transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D]/90 via-[#0A0F1D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                      ))}
                    </div>
                    <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mb-3"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-indigo-500/10">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} AcceleratorX. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WSTestimonialPM;
