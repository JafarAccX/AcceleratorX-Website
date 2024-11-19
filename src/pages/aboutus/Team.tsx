import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Quote } from "lucide-react";

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

const LeaderCard = ({
  name,
  role,
  image,
  linkedin,
  quote,
  title,
}: {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  quote: string;
  title: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center relative"
  >
    {/* Background glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 blur-3xl opacity-30 rounded-full"></div>

    {/* Image Card */}
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="relative bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
        <div className="overflow-hidden rounded-xl mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-[320px] object-contain transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="text-center">
          <h3 className="text-white text-2xl font-bold mb-2">{name}</h3>
          <p className="text-blue-400 font-semibold mb-4">{role}</p>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors bg-blue-500/10 px-4 py-2 rounded-full"
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </div>

    {/* Quote Card */}
    <div className="relative p-8">
      <div className="absolute top-0 right-0 text-blue-500 opacity-20">
        <Quote className="w-20 h-20" />
      </div>
      <div className="relative z-10 text-gray-300 backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-blue-500/20">
        <h4 className="text-2xl font-semibold text-blue-400 mb-6">{title}</h4>
        <p className="text-lg leading-relaxed italic">
          <TypewriterEffect text={quote} />
        </p>
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <section className="relative py-20 bg-black min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float-delayed"></div>

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white mb-4 text-center"
        >
          Meet Our Te<span className="text-blue-500">am</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg text-center mb-16 max-w-2xl mx-auto"
        >
          Our diverse team at AcceleratorX is united by a passion for innovation
          in EdTech, dedicated to building a better future.
        </motion.p>

        <div className="max-w-6xl mx-auto">
          {/* Shahid Sir's Card */}
          <LeaderCard
            name="Shahid Naseem"
            role="Founder & CEO"
            image="/assets/founder/Sahid.jpg"
            linkedin="https://www.linkedin.com/in/shahid-naseem-a16220144"
            title="Words from our Founder"
            quote="Innovation in education is not just about technology; it's about creating opportunities that transform lives and shape futures. At AcceleratorX, we're committed to empowering the next generation with the tools and knowledge they need to succeed in an ever-evolving digital world."
          />

          {/* Misba Muskaan's Card */}
          <LeaderCard
            name="Misba Muskaan"
            role="Director"
            image="/assets/founder/Muskaan.jpg"
            linkedin="https://www.linkedin.com/in/misba-muskaan-560567254"
            title="Words from our Director"
            quote="At AcceleratorX, we believe in nurturing talent and fostering an environment where innovation thrives. Our mission is to bridge the gap between education and industry, creating pathways for success in the digital age."
          />
        </div>

        {/* Team Photo Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-400/30 blur-3xl opacity-30"></div>
          <div className="relative rounded-2xl overflow-hidden border border-blue-500/30">
            <div className="aspect-w-16 aspect-h-7">
              <img
                src="/assets/team.jpg"
                alt="AcceleratorX Team"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">Our Team</h3>
              <p className="text-gray-300 text-lg font-semibold">
                The talented and diverse AcceleratorX Team
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-slide"></div>
      </div>
    </section>
  );
};

export default Team;
