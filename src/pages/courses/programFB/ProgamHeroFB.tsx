import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EnrollmentModal from "../../../components/EnrollmentModal";

interface CounterProps {
  end: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.round(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <span className="text-lg font-bold text-white">
      {count}
      {suffix}
    </span>
  );
};

const LogoItem = ({ src, alt }) => (
  <div className="bg-white p-2 rounded shadow-md flex items-center justify-center">
    <img
      src={src}
      alt={alt}
      className="h-6 w-auto opacity-100 hover:opacity-100 transition-opacity"
    />
  </div>
);

export default function ProgramHeroFB() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownload, setIsDownload] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };

  const handleModalSubmit = () => {
    if (isDownload) {
      window.location.href =
        "https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AcceleratorX%20Brochure%20(3).pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FjY2VsZXJhdG9yWCBCcm9jaHVyZSAoMykucGRmIiwiaWF0IjoxNzMxOTQxODg0LCJleHAiOjE3NjM0Nzc4ODR9.5CmoBe0dKWL49WdTTjTp0MPJ101YW2uP4ZuJVyiGguA&t=2024-11-18T14%3A58%3A05.029Z";
    }
    handleModalClose();
  };

  return (
    <>
      {/* Simple Navbar with Logo */}
      <nav className="bg-black flex flex-row items-center py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto ">
          <img
            src="/companylogo.png"
            alt="AcceleratorX Logo"
            className="w-auto h-20 text-center"
          />
        </div>
      </nav>
      {/* Add margin-top to account for fixed navbar */}
      <div className="pt-5">
        <div className="relative pt-24 pb-16 overflow-hidden">
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
                  className="bg-gray-900/30 backdrop-blur-sm px-2 py-1 rounded-full inline-block mb-6 border border-[#211951]"
                  style={{
                    boxShadow:
                      "0 0 10px rgba(144, 205, 244, 0.5), 0 0 20px rgba(144, 205, 244, 0.3)",
                  }}
                >
                  <span className="text-gray-300 font-semibold text-sm sm:text-base">
                    Next Cohort Starts on 25th Jan
                  </span>
                </motion.div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  Launch Your Career in
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Product Management
                  </span>
                </h1>
                <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-400">
                  Master the skills needed to become a successful Product
                  Manager. Join our comprehensive program designed by industry
                  experts from top tech companies.
                </p>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-blue-600 text-white px-6 md:px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto border-2 border-blue-600 text-white px-6 md:px-8 py-3 rounded-full hover:bg-blue-600/10 transition"
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsDownload(true);
                    }}
                  >
                    Download Curriculum
                  </motion.button>
                </div>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
                  <div>
                    <Counter end={16} />
                    <p className="text-sm text-gray-400">Week Program</p>
                  </div>
                  <div>
                    <Counter end={2} />
                    <p className="text-sm text-gray-400">Specialisations</p>
                  </div>
                  {/* <div>
                    <Counter end={32000} suffix="+" />
                    <p className="text-sm text-gray-400">Jobs</p>
                  </div> */}
                  {/* <div>
                    <Counter end={32} suffix="LPA+" />
                    <p className="text-sm text-gray-400">Salary</p>
                  </div> */}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mt-8 lg:mt-0 flex flex-col gap-6"
              >
                <img
                  src="/assets/productpagebanneraccex.png"
                  alt="Product Management Workshop"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="flex flex-col items-center">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                    <LogoItem
                      src="/assets/caseStudiesLogo/paytm.webp"
                      alt="Company Logo 1"
                    />
                    <LogoItem src="/assets/cequens.png" alt="Company Logo 2" />
                    <LogoItem src="/assets/paypal.webp" alt="Company Logo 3" />
                    <LogoItem src="/assets/walmart.webp" alt="Company Logo 4" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <EnrollmentModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onSubmit={handleModalSubmit}
          />
        </div>
      </div>
    </>
  );
}
