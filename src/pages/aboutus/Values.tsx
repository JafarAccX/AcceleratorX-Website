import { motion } from "framer-motion";

const Values = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@400;600;700&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ">

          {/* Left Column: Image and Heading */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: 'Cormorant Infant, serif' }}
            >
              Trusted by 2200+ <br /> Learners
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              <img
                src="/assets/group.webp"
                alt="AcceleratorX Learners"
                className="w-full h-full object-cover aspect-[4/3] "
              />
            </motion.div>
          </div>

          {/* Right Column: Vision Text */}
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-500 font-bold tracking-wider text-sm uppercase mb-4 block">
                Our Vision
              </span>
              <h3
                className="text-4xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: 'Cormorant Infant, serif' }}
              >
                What We Stand For
              </h3>

              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  At AcceleratorX, we are on a mission to shape visionary leaders who
                  dare to redefine the future. We believe in harnessing ambition and
                  transforming it into unstoppable momentum, turning ideas into action
                  and dreams into impactful careers. Our commitment is to empower
                  individuals with immersive, hands-on learning experiences that
                  challenge limits, unlock potential, and open doors to a world of
                  opportunity.
                </p>

                <p>
                  Our programs are meticulously crafted for those who strive not just
                  to learn but to lead, with a focus on real-world application,
                  mentorship from top industry experts, and a powerful support
                  network. Through a curriculum that bridges theory and practice, we
                  guide our students in mastering high-impact skills, building their
                  personal brand, and navigating competitive markets with confidence
                  and purpose. With access to elite mentors from companies like Tata,
                  Walmart, and PayPal, and an unmatched placement support system, we
                  create a seamless path from ambition to achievement. At
                  AcceleratorX, the future starts with you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
