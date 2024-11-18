import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import companyLogo from "/assets/companylogo.png";

export default function Navbar({
  onEnrollClick,
}: {
  onEnrollClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { label: "About", path: "/aboutus" },
    { label: "Blog", path: "/blogs" },
    { label: "Hire With Us", path: "/hirewithus" },
    { label: "Become a Mentor", path: "/becomeamentor" },
  ];

  const courses = [
    { label: "Product Management", path: "/courses/product-management" },
    { label: "Data Analytics", path: "/courses/data-analytics" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-black/95 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.a
              href="/"
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <img
                src={companyLogo}
                alt="company logo"
                className="w-auto h-14"
              />
            </motion.a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center cursor-pointer text-gray-300 hover:text-white text-sm font-medium"
              >
                Courses <ChevronDown size={16} className="ml-1" />
              </motion.div>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-black border border-white/10 rounded-lg shadow-lg z-50"
                    style={{ pointerEvents: isDropdownOpen ? "auto" : "none" }}
                  >
                    {courses.map((course) => (
                      <Link
                        key={course.label}
                        to={course.path}
                        className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white text-sm font-medium"
                      >
                        {course.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Menu Items */}
            {menuItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05, color: "#fff" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-white text-sm font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Apply Now Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1a71f6] text-white px-6 py-2 rounded-lg text-sm font-medium"
              onClick={onEnrollClick}
            >
              Apply Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/95"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {/* Courses Dropdown */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white text-sm font-medium"
                >
                  Courses <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 space-y-2"
                    >
                      {courses.map((course) => (
                        <Link
                          key={course.label}
                          to={course.path}
                          className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white text-sm font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {course.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Menu Items */}
              {menuItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className="block text-gray-300 hover:text-white text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#1a71f6] text-white px-4 py-2 rounded-lg text-sm font-medium mt-4"
                onClick={() => {
                  setIsOpen(false);
                  onEnrollClick();
                }}
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
