import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCourseContext } from '../../../context/courseContext';
import EnrollmentModal from '../../../components/EnrollmentModal';
import { WorldMap } from '../../../components/background-animations/world-map';
// import { Spotlight } from '../../../components/Spotlight';
// import { BackgroundLines } from '../../../components/background-animations/background-lines';

const AIDMHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const { setSelectedCourse } = useCourseContext();

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };

  const handleModalSubmit = () => {
    if (isDownload) {
      // handle file download if necessary
    }
    handleModalClose();
  };

  const handleEnrollClick = (download = false) => {
    setSelectedCourse("AI Digital Marketing");
    setIsDownload(download);
    setIsModalOpen(true);
  };

  return (
    <section className="relative py-12 border-b border-green-900 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">

      <div className="absolute inset-0 opacity-50 top-20 bottom-0 left-0 right-0" >

        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center z-20">
          {/* Left: Text */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-md bg-[#5CB338]/20 border border-[#5CB338]">
              <span className="text-[#fff] font-semibold text-sm sm:text-base">#1 IN AI MARKETING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              AI-Powered Digital Marketing
              <span className="bg-[#5CB338] bg-clip-text text-transparent"> Nano-Degree</span>
            </h2>

            <p className="text-gray-300 mb-6">
              Master AI-first growth, automation and performance marketing with real projects and capstone.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-[#5CB338] font-bold">Duration</p>
                <p className="text-gray-300">16 weeks</p>
              </div>
              <div>
                <p className="text-[#5CB338] font-bold">Mode</p>
                <p className="text-gray-300">100% live</p>
              </div>
              <div>
                <p className="text-[#5CB338] font-bold">Placement</p>
                <p className="text-gray-300">Job assistance</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleEnrollClick(false)}
                className="w-full sm:w-auto bg-[#5CB338] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#4fb02f] transition"
              >
                Apply Now
              </button>
              <button
                onClick={() => handleEnrollClick(true)}
                className="w-full sm:w-auto border-2 border-[#5CB338] text-[#5CB338] px-8 py-3 rounded-md hover:bg-[#5CB338]/10 transition font-semibold"
              >
                Download Syllabus
              </button>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative mt-6 lg:mt-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              {/* Reuse Spotlight or BackgroundLines if desired; keeping simple image */}
              <img
                src="/assets/ai-digital-m/nano_degree.webp"
                alt="AI Digital Marketing"
                className="w-full max-w-md object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </section>
  );
};

export default AIDMHero;
