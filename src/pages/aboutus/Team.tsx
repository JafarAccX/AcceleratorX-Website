import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Team = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4 text-center"
        >
          Meet Our Te<span className="text-indigo-500">am</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12"
        >
          Our diverse team at AcceleratorX is united by a passion for innovation
          in EdTech, dedicated to building a better future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-8"
        >
          <div className="relative group">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/assets/founder/ShahidSir.jpg"
                alt="BOSS"
                className="w-auto h-80 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">
                Shahid Naseem
              </h3>
              <p className="text-gray-400">Founder & CEO</p>
              <a
                href="https://www.linkedin.com/in/shahid-naseem-a16220144?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACLqf7IB07krVxeG5nt9l2a4BO1XPocfXGI&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BupbBsZJ5QCS0FLFBg2pV4g%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-400 mt-2 inline-block"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/assets/founder/Muskaan.jpg"
                alt="Team member"
                className="w-auto h-80 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">
                Misba Muskaan
              </h3>
              <p className="text-gray-400">Director</p>
              <a
                href="https://www.linkedin.com/in/misba-muskaan-560567254/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2BGbU6XBZRB6e6lvHgNq8GA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-400 mt-2 inline-block"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
