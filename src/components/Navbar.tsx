import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "/assets/companylogo.png";

const xsatNavItems = [
  { label: "About", href: "#about" },
  { label: "Why Appear", href: "#whyappear" },
  { label: "Key Dates", href: "#dates" },
  { label: "Exam Info", href: "#exam" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({
  onEnrollClick,
}: {
  onEnrollClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isXSATRoute = location.pathname === "/xsat";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "About", path: "/about-us" },
    { label: "Blog", path: "/blogs" },
    { label: "Careers", path: "/careers" },
    // { label: "Hire With Us", path: "/hire-with-us" },
    { label: "XSAT", path: "/xsat" },
    // { label: "Workshop", path: "/workshop/da-masterclass-with-ai" },
  ];

  const courses = [
    { label: "Product Management", path: "/courses/product-management" },
    { label: "Data Analytics", path: "/courses/data-analytics" },
    { label: "No-Code Development", path: "/courses/no-code-tool-program" },
  ];

  if (isXSATRoute) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled ? "bg-black backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl mt-2 font-bold text-white"
            >
              <Link to="https://acceleratorx.org/">
                <img src="/xsat-bg.png" alt="xsat" className="w-auto h-10" />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {xsatNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </button>
              ))}
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

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black/95 py-4"
              >
                <div className="flex flex-col space-y-4">
                  {xsatNavItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-white hover:text-gray-300 transition-colors px-4"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-[9999] bg-black/95 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex ml-4 items-center justify-between h-16">
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
                className="w-auto h-16 object-contain"
              />
            </motion.a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Sale Badge */}
            {/* <span className="animate-bounce bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
              Sale is Live
            </span> */}
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
                    className="absolute left-0 mt-2 w-48 bg-black border border-white/10 rounded-lg shadow-lg z-[9999]"
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium relative ${
                    item.label === "XSAT"
                      ? "bg-[#1A1A1A] text-[#FFBB00] hover:text-[#FFBB00] font-semibold px-6 py-2 rounded-2xl flex items-center gap-2 border border-[#FFBB00]/20"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {item.label === "XSAT" && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  )}
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
              Join AcceX Squad
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
                    className={`block text-sm font-medium relative ${
                      item.label === "XSAT"
                        ? "bg-[#1A1A1A] text-[#FFBB00] hover:text-[#FFBB00] font-semibold px-6 py-2 rounded-2xl flex items-center gap-2 border border-[#FFBB00]/20"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    {item.label === "XSAT" && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                    )}
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
                Join AcceX Squad{" "}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
