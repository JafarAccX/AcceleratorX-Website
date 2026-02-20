import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import companyLogo from "/redesign/logo-no-bg.webp";
import { useUser } from "../../context/UserContext";
import ProfileMenu from "../navbar/ProfileMenu";

// Add CSS classes for transitions
const dropdownTransition = "transition-all duration-300 ease-in-out";
const menuTransition = "transition-all duration-300 ease-in-out transform";
const hoverTransition = "transition-all duration-200 ease-in-out";

const xsatNavItems = [
  { label: "About", href: "#about" },
  { label: "Why Appear", href: "#whyappear" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPlatformsDropdownOpen, setIsPlatformsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useUser();
  const location = useLocation();
  const isXSATRoute = location.pathname === "/xsat";

  useEffect(() => {
    // Skip on server-side
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    // Skip on server-side
    if (typeof window === 'undefined') return;

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "About", path: "/about-us" },
    { label: "Blog", path: "/blogs" },
    { label: "Jobs Portal", path: "/jobs" },
  ];

  const platforms = [
    { label: "BuildRX", path: "https://buildrx.org" },
    { label: "LMS", path: "https://lms.acceleratorx.org" },
  ];

  const courses = [
    { label: "AI Product Management", path: "/courses/product-management" },
    { label: "AI Digital Marketing", path: "/courses/ai-digital-marketing" },
    { label: "AI Data Analytics", path: "/courses/data-analytics" },
    { label: "AI Data Science", path: "/courses/data-science" },
    { label: "Generative AI", path: "/courses/generative-ai" },
    { label: "Advance Gen AI", path: "/courses/advance-generative-ai" },
  ];

  if (isXSATRoute) {
    return (
      <>
        <header
          className={`fixed top-0 left-0 right-0 z-[9999] backdrop-blur-sm ${menuTransition} ${isScrolled ? "bg-black/80 shadow-lg border-b border-white/5" : "bg-transparent"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <div className="text-2xl mt-2 font-bold text-white">
                <Link to="https://acceleratorx.org/" className={`${hoverTransition} hover:opacity-90`}>
                  <img src="/xsat-bg.webp" alt="xsat" className="w-auto h-10" />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6">
                {xsatNavItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`font-sans text-white/90 hover:text-white ${hoverTransition} relative group py-2`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-white ${dropdownTransition} group-hover:w-full`}
                    />
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                className={`md:hidden text-white/90 hover:text-white p-2 rounded-lg hover:bg-white/10 ${hoverTransition}`}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Sheet */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] md:hidden"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 w-[280px] bg-black z-[100000] shadow-2xl md:hidden p-6 overflow-y-auto flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <img src="/xsat-bg.webp" alt="xsat" className="h-8 w-auto" />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col space-y-4">
                  {xsatNavItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className={`font-sans text-left text-lg text-white/90 hover:text-white ${hoverTransition} py-3 px-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFBB00]/20 to-transparent border border-[#FFBB00]/10">
                    <p className="font-sans text-sm text-white/70 mb-4">Ready to accelerate?</p>
                    <button className="font-sans w-full bg-[#FFBB00] text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                      Register Now
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-[10px] w-full left-1/2 -translate-x-1/2 z-[9999] md:w-[calc(100%-140px)] max-w-[1300px] ${menuTransition}`}
      >
        <div className="h-[60px] rounded-[100px] backdrop-blur-[10px] bg-white/70 dark:bg-[#000000]/70 shadow-lg px-6 sm:px-8 w-full border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className={`relative group ${hoverTransition}`}>
              <Link to="/" className="flex items-center space-x-2 hover:opacity-90">
                <img src={companyLogo} alt="AcceleratorX company new logo - best product management courses" className="w-auto h-12 object-contain" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Courses Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`font-sans flex items-center gap-1 text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white text-sm leading-[1.2em] font-medium py-2 ${hoverTransition}`}
                >
                  Courses
                  <ChevronDown
                    size={16}
                    className={`${dropdownTransition}`}
                    style={{
                      transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                </button>

                <div
                  className={`absolute left-0 top-full pt-2 w-64 ${dropdownTransition} ${isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                >
                  <div className=" dark:bg-black/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden">
                    {courses.map((course) => (
                      <Link
                        key={course.label}
                        to={course.path}
                        className={`font-sans block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 ${hoverTransition} text-xs font-medium`}
                      >
                        {course.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              {menuItems.map((item) => {
                const isExternal = item.path.startsWith("http");
                const isHighlighted = item.label === "XSAT";
                const baseClasses = `font-sans relative group ${hoverTransition} ${isHighlighted
                  ? "bg-gray-100/50 dark:bg-gray-800/50 text-[#FFBB00] hover:text-[#FFBB00] font-semibold px-4 py-1.5 rounded-lg flex items-center border border-[#FFBB00]/20 hover:border-[#FFBB00]/40"
                  : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
                  }`;

                return isExternal ? (
                  <a
                    key={item.label}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={baseClasses}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={baseClasses}
                  >
                    {item.label}
                    {!isHighlighted && (
                      <span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white ${dropdownTransition} group-hover:w-full`}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Our Platforms Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsPlatformsDropdownOpen(true)}
                onMouseLeave={() => setIsPlatformsDropdownOpen(false)}
              >
                <button
                  className={`font-sans flex items-center gap-1 text-[#FFBB00] font-semibold bg-gray-100/50 dark:bg-gray-800/50 px-4 py-1.5 rounded-lg border border-[#FFBB00]/20 hover:border-[#FFBB00]/40 ${hoverTransition}`}
                >
                  Our Platforms
                  <ChevronDown
                    size={16}
                    className={`${dropdownTransition}`}
                    style={{
                      transform: isPlatformsDropdownOpen ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                </button>

                <div
                  className={`absolute left-0 top-full pt-2 w-48 ${dropdownTransition} ${isPlatformsDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                >
                  <div className="dark:bg-black/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden">
                    {platforms.map((platform) => (
                      <a
                        key={platform.label}
                        href={platform.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-sans block px-4 py-2.5 text-[#FFBB00] hover:bg-[#FFBB00]/10 ${hoverTransition} text-sm font-semibold border-b border-gray-100 dark:border-gray-800 last:border-0`}
                      >
                        {platform.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>



              {isAuthenticated ? (
                <ProfileMenu />
              ) : (
                <div className="flex items-center p-1  ml-4 group">
                  <Link
                    to="/sign-in"
                    className={`font-sans text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${hoverTransition} px-4 py-1.5 text-sm font-medium rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50`}
                  >
                    Login
                  </Link>
                  {/* <Link
                    to="/sign-up"
                    className={`font-sans bg-[#1a71f6] hover:bg-[#1a71f6]/90 text-white px-5 py-1.5 rounded-full text-sm font-medium ${hoverTransition} shadow-md`}
                  >
                    Sign Up
                  </Link> */}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className={`md:hidden text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/50 ${hoverTransition}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99999] md:hidden"
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[300px] bg-white dark:bg-[#000000] z-[100000] shadow-2xl md:hidden p-2 overflow-y-auto flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <img src={companyLogo} alt="Logo" className="h-10 w-auto" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-2 h-full">
                {/* Courses Dropdown */}
                <div className="mb-2">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="font-sans flex items-center justify-between w-full text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white text-lg font-semibold py-3 px-4 rounded-xl  transition-colors"
                  >
                    Courses
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden rounded-xl mt-1 mx-2"
                      >
                        <div className="flex flex-col p-2">
                          {courses.map((course) => (
                            <Link
                              key={course.label}
                              to={course.path}
                              className="font-sans py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white  rounded-lg text-sm font-medium transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {course.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Menu Items */}
                {menuItems.map((item) => {
                  const isExternal = item.path.startsWith("http");
                  const isHighlighted = item.label === "XSAT";
                  const baseClasses = `font-sans flex items-center justify-between py-3 px-4 rounded-xl text-lg font-semibold transition-colors ${isHighlighted
                    ? "text-[#FFBB00]"
                    : "text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white "
                    }`;

                  return isExternal ? (
                    <a
                      key={item.label}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={baseClasses}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.label}</span>
                      {isHighlighted && (
                        <span className="flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                      )}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={baseClasses}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.label}</span>
                      {isHighlighted && (
                        <span className="flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                      )}
                    </Link>
                  );
                })}

                {/* Mobile Our Platforms Dropdown */}
                <div className="mb-2">
                  <button
                    onClick={() => setIsPlatformsDropdownOpen(!isPlatformsDropdownOpen)}
                    className="font-sans flex items-center justify-between w-full text-[#FFBB00] hover:text-[#FFBB00]/80 text-lg font-semibold py-3 px-4 rounded-xl transition-colors"
                  >
                    Our Platforms
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${isPlatformsDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isPlatformsDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden rounded-xl mt-1 mx-2"
                      >
                        <div className="flex flex-col p-2">
                          {platforms.map((platform) => (
                            <a
                              key={platform.label}
                              href={platform.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-sans py-3 px-4 text-[#FFBB00] hover:bg-[#FFBB00]/10 rounded-lg text-sm font-medium transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {platform.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100">
                  {isAuthenticated ? (
                    <ProfileMenu />
                  ) : (
                    <div className="flex flex-col space-y-3">
                      <Link
                        to="/sign-in"
                        onClick={() => setIsOpen(false)}
                        className="font-sans w-full text-center py-3 px-6 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        Login
                      </Link>
                      <Link
                        to="/sign-up"
                        onClick={() => setIsOpen(false)}
                        className="font-sans w-full text-center py-3 px-6 rounded-xl bg-[#1a71f6] text-white font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-[0.98]"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
