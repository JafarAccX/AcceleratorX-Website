import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useCourseContext } from "../context/courseContext";
import { ArrowRight } from "lucide-react";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence
import BookingForm from "./BookingForm";

const StickyBookNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
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
    config: { tension: 220, friction: 30 },
  });

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
          zIndex: 50,
        }}
        className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-white text-lg font-semibold">
                Got doubts? Book a session with our mentor 1:1
              </p>
              <div className="flex items-center justify-center bg-blue-500/30 px-4 py-1 rounded-full">
                <span className="text-sm font-medium text-white">
                  Only 10 seats remaining
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Book Your Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </animated.div>

      {/* AnimatePresence ensures smooth mount/unmount animations */}
      <AnimatePresence>
        {isFormOpen && (
          <BookingForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyBookNav;
