import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import EnrollmentModal from "../../../components/EnrollmentModal";
import { useCourseContext } from "../../../context/courseContext";

const StickyBookNavFB = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedCourse } = useCourseContext();

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling 300px
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const springStyles = useSpring({
    transform: isVisible ? "translateY(0)" : "translateY(100%)",
    opacity: isVisible ? 1 : 0,
    config: {
      tension: 180,
      friction: 24,
      mass: 1,
      clamp: true,
    },
  });

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    // Handle modal submit if needed
  };

  if (!selectedCourse) return null;

  return (
    <>
      <animated.div
        style={{
          ...springStyles,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          // Adjusted padding for chat widget while maintaining responsiveness
          paddingRight: "clamp(1rem, 4.5rem, 5vw)",
        }}
        // Modern gradient with subtle transparency and neutral tones
        className="bg-gradient-to-r from-slate-800/95 via-slate-700/95 to-slate-900/95 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] backdrop-blur-sm"
      >
        {/* Container with responsive padding:
            - Smaller padding on mobile for better space utilization
            - Gradually increases padding on larger screens */}
        <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 py-2.5 sm:py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
              <p className="text-white text-sm sm:text-base md:text-lg font-medium leading-tight flex items-center gap-2">
                <span className="animate-bounce hidden sm:inline-block">
                  💡
                </span>
                Application Deadline is{" "}
                <span className="font-bold">30th Dec</span>
                <span className="hidden sm:inline-block animate-pulse">🎯</span>
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-1.5 sm:py-2 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-sm group"
            >
              Apply Now
              <span className="ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300">
                ⚡
              </span>
            </button>
          </div>
        </div>
      </animated.div>

      {/* AnimatePresence ensures smooth mount/unmount animations */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default StickyBookNavFB;
