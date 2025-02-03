import React, { useState } from "react";
import {
  Award,
  BookOpen,
  Brain,
  ChevronDown,
  GraduationCap,
  LightbulbIcon,
  Medal,
  Menu,
  Network,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  Rocket,
  BookCheck,
  Target,
  Pencil,
  CheckCircle2,
} from "lucide-react";

function XSATHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const logos = {
    row: [
      "/assets/xsatLogo/cisco.webp",
      "/assets/xsatLogo/dell.webp",
      "/assets/xsatLogo/hp.webp",
      "/assets/xsatLogo/microsoft.webp",
      "/assets/xsatLogo/juniper.webp",
      "/assets/xsatLogo/obeya.png",
      "/assets/xsatLogo/aruba.webp",
      "/assets/xsatLogo/fortinet.webp",
      "/assets/xsatLogo/google.webp",
      "/assets/xsatLogo/jio.webp",
      "/assets/xsatLogo/logitech.png",
      "/assets/xsatLogo/redington.webp",
      "/assets/xsatLogo/vi.webp",
      "/assets/xsatLogo/tata.webp",
      "/assets/xsatLogo/redhat.webp",
      "/assets/xsatLogo/coworks.png",
      "/assets/xsatLogo/coworks.png",
      "/assets/xsatLogo/coworks.png",
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          <div className="text-2xl font-bold">
            <span className="text-gray-900">X</span>
            <span className="text-blue-600">SAT</span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#about"
              className="nav-link text-gray-600 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#why-xsat"
              className="nav-link text-gray-600 hover:text-gray-900"
            >
              Why XSAT
            </a>
            <a
              href="#companies"
              className="nav-link text-gray-600 hover:text-gray-900"
            >
              Companies
            </a>
            <a
              href="#faq"
              className="nav-link text-gray-600 hover:text-gray-900"
            >
              FAQ
            </a>
            <button className="register-button-hover bg-[#FFB067] text-black font-semibold px-6 py-2 rounded-lg border-2 border-black hover:bg-[#FFA050] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Register Now
            </button>
          </div>

          {/* Mobile Navigation Overlay */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-x-0 top-16 bg-white border-b border-gray-100 shadow-lg">
              <div className="px-4 py-4 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <a
                  href="#about"
                  onClick={toggleMenu}
                  className="block text-gray-600 hover:text-gray-900 py-2 transition-colors"
                >
                  About
                </a>
                <a
                  href="#why-xsat"
                  onClick={toggleMenu}
                  className="block text-gray-600 hover:text-gray-900 py-2 transition-colors"
                >
                  Why XSAT
                </a>
                <a
                  href="#companies"
                  onClick={toggleMenu}
                  className="block text-gray-600 hover:text-gray-900 py-2 transition-colors"
                >
                  Companies
                </a>
                <a
                  href="#faq"
                  onClick={toggleMenu}
                  className="block text-gray-600 hover:text-gray-900 py-2 transition-colors"
                >
                  FAQ
                </a>
                <button
                  onClick={toggleMenu}
                  className="w-full bg-[#FFB067] text-black font-semibold px-6 py-2 rounded-lg border-2 border-black hover:bg-[#FFA050] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  Register Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 hero-gradient -z-10"></div>

          {/* Floating Icons */}
          <div className="absolute top-10 left-10 floating-icon hidden sm:block">
            <Trophy className="w-8 h-8 text-yellow-500 opacity-60" />
          </div>
          <div
            className="absolute top-20 right-20 floating-icon hidden sm:block"
            style={{ animationDelay: "1s" }}
          >
            <BookCheck className="w-8 h-8 text-blue-500 opacity-60" />
          </div>
          <div
            className="absolute bottom-40 left-16 floating-icon hidden sm:block"
            style={{ animationDelay: "2s" }}
          >
            <Target className="w-8 h-8 text-green-500 opacity-60" />
          </div>
          <div
            className="absolute bottom-20 right-16 floating-icon hidden sm:block"
            style={{ animationDelay: "3s" }}
          >
            <Rocket className="w-8 h-8 text-red-500 opacity-60" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left relative">
              <div className="flex justify-center lg:justify-start mb-8">
                <Sparkles className="hero-sparkle w-8 h-8 sm:w-12 sm:h-12 text-red-500" />
              </div>

              <div className="relative inline-block">
                <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  India's First Industrial
                  <br className="hidden sm:block" />
                  <span className="sm:inline relative">
                    Scholarship Test
                    <div className="absolute -right-4 -top-4 transform rotate-12">
                      <Star className="w-6 h-6 text-yellow-500 animate-pulse" />
                    </div>
                  </span>
                </h1>
              </div>

              <p className="hero-description text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl lg:max-w-none mx-auto">
                Turn your product management aspirations into reality with XSAT.
                <br />
                <span className="font-semibold text-blue-600">
                  Win scholarships worth ₹1 Crore+
                </span>
              </p>

              <button className="hero-button register-button-hover shine-effect w-full sm:w-auto bg-[#FFB067] text-black font-semibold px-8 sm:px-12 py-3 sm:py-4 text-lg rounded-lg border-2 border-black hover:bg-[#FFA050] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Register Now
              </button>

              {/* Features List */}
              <div className="mt-8 space-y-4 max-w-md mx-auto lg:mx-0">
                {[
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
                    text: "Industry-recognized certification",
                  },
                  {
                    icon: <Medal className="w-5 h-5 text-yellow-500" />,
                    text: "Merit-based scholarships up to 100%",
                  },
                  {
                    icon: <Users className="w-5 h-5 text-blue-500" />,
                    text: "1:1 Mentorship from industry experts",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="feature-item flex items-center gap-3 text-left"
                  >
                    {feature.icon}
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="mt-12 flex justify-center lg:justify-start gap-8 sm:gap-16">
                {[
                  { label: "Students Enrolled", value: "10,000+" },
                  { label: "Success Rate", value: "85%" },
                  { label: "Scholarships Awarded", value: "₹1Cr+" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Scholarship Image */}
            <div className="relative hidden lg:block">
              <div className="scholarship-image-container relative">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                  alt="Students studying"
                  className="rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover-float"
                />

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-6 hover-float">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-6 hover-float">
                  <Pencil className="w-8 h-8 text-blue-500" />
                </div>
              </div>

              {/* Achievement Badges */}
              <div className="absolute -right-4 top-1/4 bg-white px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] badge-float">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Top Rated</span>
                </div>
              </div>
              <div
                className="absolute -left-4 bottom-1/4 bg-white px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] badge-float"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span className="font-semibold">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scholarship Cards */}
          <div className="hero-cards grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Full Scholarship",
                amount: "100%",
                benefits: [
                  "Complete course access",
                  "1-on-1 mentorship",
                  "Placement support",
                ],
              },
              {
                title: "Merit Scholarship",
                amount: "75%",
                benefits: [
                  "Course access",
                  "Group mentorship",
                  "Career guidance",
                ],
              },
              {
                title: "Performance Grant",
                amount: "50%",
                benefits: [
                  "Basic course access",
                  "Community access",
                  "Learning resources",
                ],
              },
            ].map((card, index) => (
              <div
                key={index}
                className="card-hover border-2 border-black rounded-xl p-4 sm:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {card.title}
                </h3>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
                  {card.amount}
                </div>
                <ul className="text-left text-gray-600">
                  {card.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 mb-2 text-sm sm:text-base"
                    >
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Companies Section */}
        <section
          id="companies"
          className="py-12 sm:py-24 bg-gray-50 border-y-2 border-black"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              Empowered By
            </h2>
            <p className="text-center text-gray-600 mb-8 sm:mb-12">
              Backed by a group of more than 140 industry leaders
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8">
              {logos.row.map((logo, index) => (
                <div
                  key={index}
                  className="border-2 border-black rounded-xl p-3 sm:p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center h-16 sm:h-24"
                >
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About XSAT Section */}
        <section id="about" className="py-12 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
              About XSAT
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "What is X-SAT?",
                  description:
                    "A pioneering nationwide scholarship test to identify and support aspiring product management professionals.",
                },
                {
                  icon: <Brain className="w-6 h-6" />,
                  title: "Test Format",
                  description:
                    "60-minute online assessment featuring real-world product scenarios and challenges.",
                },
                {
                  icon: <GraduationCap className="w-6 h-6" />,
                  title: "Skills Tested",
                  description:
                    "Product Sense, User-Centric Thinking, Market Analysis, and Guesstimates.",
                },
                {
                  icon: <Trophy className="w-6 h-6" />,
                  title: "Scholarships",
                  description:
                    "Win exciting cash prizes and scholarships worth more than 1 Cr.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-2 border-black rounded-xl p-4 sm:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Appear Section */}
        <section
          id="why-xsat"
          className="py-12 sm:py-24 bg-gray-50 border-y-2 border-black"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
              Why Appear for XSAT?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <LightbulbIcon className="w-6 h-6" />,
                  title: "Test Your PM Skills",
                  description:
                    "Evaluate your aptitude in critical Product Management skills through our assessment.",
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "Win Full Scholarships",
                  description:
                    "Win scholarships worth up to 100% for our flagship Product Management program.",
                },
                {
                  icon: <Medal className="w-6 h-6" />,
                  title: "Earn Recognition",
                  description:
                    "Stand out in the competitive product management industry.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Access Top Mentors",
                  description:
                    "Connect with mentors from companies like Tata, Walmart, and PayPal.",
                },
                {
                  icon: <Network className="w-6 h-6" />,
                  title: "Industry Network",
                  description:
                    "Join a community of aspiring product leaders and industry veterans.",
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: "Shape Your Future",
                  description:
                    "Launch your product management career with confidence.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-2 border-black rounded-xl p-4 sm:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "Who can take X-SAT?",
                  answer:
                    "Anyone passionate about Product Management—no prior experience needed.",
                },
                {
                  question: "Is the test free?",
                  answer: "Contact us for pricing details.",
                },
                {
                  question: "How do I prepare?",
                  answer:
                    "We provide comprehensive study materials and guidance.",
                },
                {
                  question: "What's included in the scholarship?",
                  answer:
                    "Full course access, mentorship, and career support based on your scholarship level.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-2 border-black rounded-xl p-4 sm:p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <button className="w-full flex justify-between items-center">
                    <span className="text-base sm:text-lg font-semibold">
                      {item.question}
                    </span>
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  </button>
                  <p className="mt-4 text-gray-600 text-sm sm:text-base">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default XSATHomePage;
