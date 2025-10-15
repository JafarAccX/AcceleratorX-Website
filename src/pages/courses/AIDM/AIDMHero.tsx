import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCourseContext } from '../../../context/courseContext';
import EnrollmentModal from '../../../components/EnrollmentModal';  
// import { Spotlight } from '../../../components/Spotlight';
// import { BackgroundLines } from '../../../components/background-animations/background-lines';

const AIDMHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadOnOpen, setDownloadOnOpen] = useState(false);
  // const [isDownload, setIsDownload] = useState(false);
  const { setSelectedCourse } = useCourseContext(); 

  const handleEnrollClick = (download = false) => {
    console.log("Download:", download);
    setSelectedCourse("AI Digital Marketing");
    // setIsDownload(download);
  setDownloadOnOpen(download);
  setIsModalOpen(true);
  };

  return (
    <section className="relative mt-20 md:mt-0 border-b border-green-900 bg-black overflow-hidden" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center" >

        <div className="grid lg:grid-cols-2 gap-8 items-center z-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              AI-Powered Digital Marketing
              {/* <span className="bg-[#5CB338] bg-clip-text text-transparent"> Nano-Degree</span> */}
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
              <img
                src="/assets/ai-digital-m/nano_degree.webp"
                alt="AI Digital Marketing"
                className="w-full  object-cover flex gap-0"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setDownloadOnOpen(false);
        }}
        downloadOnOpen={downloadOnOpen}
      />
    </section>
  );
};

export default AIDMHero;
