import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const testimonials = [
  {
    name: "Anurag Goel",
    role: "PM",
    company: "Cequens",
    testimonial:
      "The most rewarding part of mentoring here is seeing participants take ownership of building their product. It transforms abstract concepts into a tangible, impactful learning experience.",
    image: "/assets/mentor/anurag.webp",
    rating: 5,
  },
  {
    name: "Ravi Ahlawat",
    role: "PM",
    company: "Paytm",
    testimonial:
      "What I admire about AcceleratorX is the focus on impact. Seeing participants succeed, from acing interviews to thriving in PM roles, makes mentoring here deeply fulfilling.",
    image: "/assets/mentor/ravi.webp",
    rating: 5,
  },
  {
    name: "Udit Bhatia",
    role: "PM",
    company: "M3 Inc",
    testimonial:
      "It’s amazing to see a program that balances hard skills like roadmapping with soft skills like stakeholder communication. Mentoring at AcceleratorX feels meaningful because the growth is so well-rounded.",
    image: "/assets/mentor/udit.webp",
    rating: 5,
  },
];

const TestimonialsFB = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-200 rounded-full opacity-50" />
        <div className="absolute right-1/4 top-1/3 w-32 h-32 bg-blue-200 rounded-full opacity-30" />
        <div className="absolute left-1/3 bottom-1/4 w-48 h-48 bg-blue-200 rounded-full opacity-20" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Trusted by Industry Leaders
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who have transformed their
            businesses with our solutions
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="relative bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-200 min-h-[24rem] flex flex-col">
                {/* Quote Icon */}
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-blue-500 bg-white rounded-full p-1.5 z-10" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-blue-500 text-blue-500"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 font-light flex-grow">
                  "{testimonial.testimonial}"
                </p>

                {/* Author Info */}
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <div className="relative flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
                    />
                    <div className="absolute inset-0 rounded-full shadow-inner" />
                  </div>
                  <div className="ml-3 min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-600 truncate">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsFB;
