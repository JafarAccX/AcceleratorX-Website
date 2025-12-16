import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "/companylogo-new.webp";
import { useUser } from "../context/UserContext";
import ProfileMenu from "./navbar/ProfileMenu";

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
    { label: "New Events", path: "/events" },
  ];

  const courses = [
    { label: "AI Product Management", path: "/courses/product-management" },
    { label: "Generative AI for Product Managers", path: "/courses/gen-ai-for-pms" },
    { label: "AI Digital Marketing", path: "/courses/ai-digital-marketing" },
    { label: "AI Data Analytics", path: "/courses/data-analytics" },
    { label: "Generative AI", path: "/courses/generative-ai" },
    // {
    //   label: "AI Performance Marketing",
    //   path: "/courses/advance-performance-marketing-with-ai",
    // },
    // {
    //   label: "Automation with n8n",
    //   path: "/courses/n8n-automation",
    // },
  ];

  if (isXSATRoute) {
    return (
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
            <div className="hidden md:flex items-center space-x-8">
              {xsatNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-white/90 hover:text-white ${hoverTransition} relative group py-2`}
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
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden text-white/90 hover:text-white p-2 rounded-lg hover:bg-white/10 ${hoverTransition}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden backdrop-blur-md bg-black/95 rounded-b-2xl border-t border-white/5 overflow-hidden ${menuTransition} ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="flex flex-col space-y-2 p-4">
              {xsatNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-white/90 hover:text-white ${hoverTransition} py-2 px-4 rounded-lg hover:bg-white/5`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <nav
      className={`fixed w-full z-[9999] backdrop-blur-md bg-black/95 border-b border-white/10 ${menuTransition}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className={`relative group ${hoverTransition}`}>
            <Link to="/" className="flex items-center space-x-2 hover:opacity-90">
              <img src={companyLogo} alt="AcceleratorX company new logo - best product management courses" className="w-auto h-16 object-contain" />
            </Link>

            {/* Lottie badge overlayed on logo (client-side only) */}
            {/* Christmas GIF overlay */}
            <div className="absolute -top-8 -left-8 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6">
              <img
                src="/xmas-lottie/Snowing.gif"
                alt="Snowing effect"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -top-8 left-4 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6">
              <img
                src="/xmas-lottie/Snowing.gif"
                alt="Snowing effect"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -top-8 left-16 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6">
              <img
                src="/xmas-lottie/Snowing.gif"
                alt="Snowing effect"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -top-8 left-24 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6">
              <img
                src="/xmas-lottie/Snowing.gif"
                alt="Snowing effect"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -top-8 left-32 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6">
              <img
                src="/xmas-lottie/Snowing.gif"
                alt="Snowing effect"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -top-8 left-48 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6">
              <img
                src="/xmas-lottie/Snowing.gif"
                alt="Snowing effect"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -top-8 left-64 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6">
              <img
                src="/xmas-lottie/Snowing.gif"
                alt="Snowing effect"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Courses Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-gray-300 group-hover:text-white text-sm font-medium py-2 ${hoverTransition}`}
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
                <div className="bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl overflow-hidden">
                  {courses.map((course) => (
                    <Link
                      key={course.label}
                      to={course.path}
                      className={`block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 ${hoverTransition} text-sm font-medium`}
                    >
                      {course.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Menu Items */}
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`relative group ${hoverTransition} ${item.label === "XSAT" || item.label === "EVENTS"
                  ? "bg-[#1A1A1A] text-[#FFBB00] hover:text-[#FFBB00] font-semibold px-6 py-2 rounded-xl flex items-center gap-2 border border-[#FFBB00]/20 hover:border-[#FFBB00]/40"
                  : "text-gray-300 hover:text-white py-2"
                  }`}
              >
                {item.label}
                {item.label === "XSAT" ||
                  (item.label === "EVENTS" && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  ))}
                {item.label !== "XSAT" && (
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-white ${dropdownTransition} group-hover:w-full`}
                  />
                )}
              </Link>
            ))}

            {/* CTA Button */}
            {/* <button
              className={`bg-[#1a71f6] hover:bg-[#1a71f6]/90 text-white px-6 py-2 rounded-xl text-sm font-medium ${hoverTransition} hover:shadow-lg`}
              onClick={onEnrollClick}
            >
              Join AcceX Squad
            </button> */}

            {isAuthenticated ? (
              <ProfileMenu />
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/sign-in" className={`text-gray-300 hover:text-white ${hoverTransition} py-2 px-4`}>
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  className={`bg-[#1a71f6] hover:bg-[#1a71f6]/90 text-white px-6 py-2 rounded-xl text-sm font-medium ${hoverTransition} hover:shadow-lg`}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-white/90 hover:text-white p-2 rounded-lg hover:bg-white/10 ${hoverTransition}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden backdrop-blur-md bg-black/95 border-t border-white/5 overflow-hidden ${menuTransition} ${isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-4 space-y-4">
          {/* Courses Dropdown */}
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center justify-between w-full text-gray-300 hover:text-white text-sm font-medium py-2 ${hoverTransition}`}
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
              className={`overflow-hidden ${dropdownTransition} ${isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="mt-2 space-y-2 pl-4 border-l border-white/10">
                {courses.map((course) => (
                  <Link
                    key={course.label}
                    to={course.path}
                    className={`block py-2 text-gray-300 hover:text-white ${hoverTransition} text-sm font-medium`}
                    onClick={() => setIsOpen(false)}
                  >
                    {course.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`block text-sm font-medium ${hoverTransition} ${item.label === "XSAT" || item.label === "EVENTS"
                ? "bg-[#1A1A1A] text-[#FFBB00] hover:text-[#FFBB00] font-semibold px-6 py-2.5 rounded-xl flex items-center gap-2 border border-[#FFBB00]/20"
                : "text-gray-300 hover:text-white py-2"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              {item.label === "XSAT" ||
                (item.label === "EVENTS" && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                ))}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          {/* <button
            className={`w-full bg-[#1a71f6] hover:bg-[#1a71f6]/90 text-white px-6 py-2.5 rounded-xl text-sm font-medium ${hoverTransition} hover:shadow-lg`}
            onClick={() => {
              setIsOpen(false);
              onEnrollClick();
            }}
          >
            Join AcceX Squad
          </button> */}
          {isAuthenticated ? (
            <ProfileMenu />
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <Link
                to="/sign-in"
                onClick={() => setIsOpen(false)}
                className={`text-gray-300 hover:text-white w-full ${hoverTransition} py-2 px-4`}
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                onClick={() => setIsOpen(false)}
                className={`bg-[#1a71f6] hover:bg-[#1a71f6]/90  w-full text-white px-6 py-2 rounded-xl text-sm font-medium ${hoverTransition} hover:shadow-lg`}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
