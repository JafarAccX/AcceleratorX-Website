import { motion } from "framer-motion";

const Values = () => {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[64px] animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-[64px] animate-float-delayed"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Our Value<span className="text-blue-500">s</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative space-y-8"
        >
          {/* Card with glass effect */}
          <div className="backdrop-blur-sm bg-black/30 rounded-2xl border border-blue-500/20 p-8">
            <p className="text-gray-300 mb-8">
              At AcceleratorX, we are on a mission to shape visionary leaders who
              dare to redefine the future. We believe in harnessing ambition and
              transforming it into unstoppable momentum, turning ideas into action
              and dreams into impactful careers. Our commitment is to empower
              individuals with immersive, hands-on learning experiences that
              challenge limits, unlock potential, and open doors to a world of
              opportunity.
            </p>

            <p className="text-gray-300">
              Our programs are meticulously crafted for those who strive not just
              to learn but to lead, with a focus on real-world application,
              mentorship from top industry experts, and a powerful support
              network. Through a curriculum that bridges theory and practice, we
              guide our students in mastering high-impact skills, building their
              personal brand, and navigating competitive markets with confidence
              and purpose. With access to elite mentors from companies like Tata,
              Walmart, and PayPal, and an unmatched placement support system, we
              create a seamless path from ambition to achievement. At
              AcceleratorX, we don't just prepare you for a career; we equip you
              to make waves. Join us to build, lead, and succeed in the arena of
              tomorrow's leaders. The future starts with you.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Values;
