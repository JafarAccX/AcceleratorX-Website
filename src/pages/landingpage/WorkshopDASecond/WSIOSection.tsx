import { motion } from "framer-motion";

export default function WSFIOSection() {
  const testimonials = [
  { image: "/assets/testimonialsLogo/feedback1.png" },
  { image: "/assets/testimonialsLogo/feedback2.png" },
  { image: "/assets/testimonialsLogo/feedback3.jpg" },
  { image: "/assets/testimonialsLogo/feedback4.png" },
  { image: "/assets/testimonialsLogo/feedback5.png" },
  { image: "/assets/testimonialsLogo/feedback6.png" },
  { image: "/assets/testimonialsLogo/feedback7.jpeg" },
];

  return (
    <section className="relative z-10 px-6 py-20 text-white max-w-6xl mx-auto">
      {/* Purple Glow Background */}
      <div className="absolute left-[-200px] top-1/4 h-[600px] w-[600px] rounded-full bg-purple-700 opacity-30 blur-[150px] pointer-events-none z-0" />

      {/* Section Heading */}
      <div className="relative z-10 mb-16 max-w-2xl">
        <h2 className="text-4xl font-bold leading-tight">What Past Attendees Say</h2>
         
      </div>

     {/* Testimonials Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
  {/* Column 1: Top-aligned */}
  <div className="flex flex-col space-y-6">
    <TestimonialCard {...testimonials[0]} />
    <TestimonialCard {...testimonials[1]} />
  </div>

  {/* Column 2: Center-aligned */}
  <div className="flex flex-col space-y-6 justify-center">
    <TestimonialCard {...testimonials[2]} />
    <TestimonialCard {...testimonials[3]} />
    <TestimonialCard {...testimonials[4]} />
  </div>

  {/* Column 3: Bottom-aligned */}
  <div className="flex flex-col space-y-6 justify-end">
    <TestimonialCard {...testimonials[5]} />
    <TestimonialCard {...testimonials[6]} />
  </div>
</div>

    </section>
  );
}

function TestimonialCard({ image }: { image: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl border max-w-sm border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-sm transition hover:border-purple-500/30"
    >
      <img
        src={image}
        alt="Testimonial"
        className="rounded-xl object-cover w-full h-auto"
      />
    </motion.div>
  );
}