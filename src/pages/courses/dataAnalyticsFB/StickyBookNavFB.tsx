import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useCourseContext } from "../../../context/courseContext";
import { ArrowRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import BookingForm from "../../../components/BookingForm";

const StickyBookNavFB = () => {
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
    config: { 
      tension: 180, 
      friction: 24,
      mass: 1,
      clamp: true 
    },
  });

  return (
    <>
      <AnimatePresence>
        {isFormOpen && (
          <BookingForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        )}
      </AnimatePresence>
      <animated.div
        style={springStyles}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-sm font-medium text-gray-600">
              Ready to accelerate your career in {selectedCourse || "Data Analytics"}?
            </div>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </animated.div>
    </>
  );
};

export default StickyBookNavFB;
