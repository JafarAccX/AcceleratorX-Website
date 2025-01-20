import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import EnrollmentModal from "../../../../components/EnrollmentModal";
import { Phone, Users } from "lucide-react";
import productPageBannerEIE from "/assets/productpageBannerEIE.png";

const navLinks = [
  { name: "Highlights", id: "highlights" },
  { name: "Learning Journey", id: "learning-journey" },
  { name: "Benefits", id: "benefits" },
  { name: "Mentors", id: "mentors" },
  { name: "Pricing", id: "pricing" },
  { name: "FAQ", id: "faq" },
];

export default function ProgramHeroEIE() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };

  const handleModalSubmit = () => {
    if (isDownload) {
      window.location.href =
        "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/PM%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL1BNIEJyb2NodXJlLnBkZiIsImlhdCI6MTczNzM3NDkyNywiZXhwIjozMzI3MzM3NDkyN30.jPzAbYFDvcoA-nDaPMo6DAazFa7yrp4jhGkmHKcbd4o&t=2025-01-20T12%3A08%3A49.189Z";
    }
    handleModalClose();
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header if any
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveLink(id);
    }
  };

  return (
    <div className="relative pt-10 pb-10 border-b border-green-800 overflow-hidden bg-black">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center py-4">
            <ul className="flex space-x-6 mt-4 overflow-x-auto no-scrollbar">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className={`text-sm font-medium px-3 py-2 rounded-full transition-all duration-300
                              ${
                                activeLink === link.id
                                  ? "text-black bg-[#5CB338]"
                                  : "text-gray-400 hover:text-white hover:bg-white/10"
                              }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#5CB338]/20 backdrop-blur-sm px-4 py-2 rounded-md inline-block mb-6 border border-[#5CB338]"
            >
              <span className="text-[#fff] font-semibold text-sm sm:text-base">
                #1 IN EXECUTIVE EDUCATION
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Professional Certificate in
              <span className="bg-[#5CB338] bg-clip-text text-transparent">
                {" "}
                Product Management
              </span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300">
              Get Certified and Master the fundamentals of product management
              with the most hands-on product management program. Build Your
              Dream Product (BYDP) as part of the program.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 mb-8">
              <div className="border-r border-[#5CB338]/30">
                <h3 className="text-[#5CB338] font-bold">Type</h3>
                <p className="text-gray-300">Professional Certificate</p>
              </div>
              <div className="border-r border-[#5CB338]/30">
                <h3 className="text-[#5CB338] font-bold">Start Date</h3>
                <p className="text-gray-300">Jan 25, 2025</p>
              </div>
              <div>
                <h3 className="text-[#5CB338] font-bold">Duration</h3>
                <p className="text-gray-300">4 Months</p>
              </div>
            </div>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#5CB338] text-white font-semibold px-8 md:px-10 py-3 rounded-md hover:bg-[#FFD700] transition flex items-center justify-center"
                onClick={() => setIsModalOpen(true)}
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border-2 border-[#5CB338] text-[#5CB338] px-8 md:px-10 py-3 rounded-md hover:bg-[#5CB338]/10 transition font-semibold"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsDownload(true);
                }}
              >
                Download Syllabus
              </motion.button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-white">
              <Phone className="h-5 w-5 text-[#5CB338]" />
              <span>For enquiries call: 9916859555</span>
            </div>
            <div className="mt-4 flex items-center gap-4 text-white">
              <Users className="h-5 w-5 text-[#5CB338]" />
              <span>50+ people have already enrolled in the last 2 Months</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={productPageBannerEIE}
                alt="Product Management Workshop"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="flex justify-center mt-4">
              <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <p className="text-sm font-medium text-amber-400">
                  *15 Days Money Back Guarantee Program
                </p>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        isDownload={isDownload}
      />
    </div>
  );
}
