"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
import { dataAnalyticsmodules, dataAnalyticsTools } from "../../../../utils/constants";

// --- Data & Constants ---

const SECTIONS = [
  { id: "why-this-program", label: "Why this Program" },
  { id: "curriculum", label: "Learning Journey - Curriculum" },
  { id: "tools", label: "Tools Which You Master as a Professional" },
  { id: "mentors", label: "Mentors" },
  { id: "certificate", label: "The Certificate Recognized By The Industry" },
  { id: "career", label: "High-Paying Career Opportunities" },
  { id: "pricing", label: "Make an Investment for the AI Ready Future" },
];

const MENTORS = [
  {
    name: "Ravi Ahlawat",
    role: "Senior PM at Paytm",
    image: "/assets/mentor/ravi.webp",
  },
  {
    name: "Aakash Maurya",
    role: "Sr. ML Engineer at Nagarro",
    image: "/assets/mentor/akash.webp",
  },
  {
    name: "Nitish Setty",
    role: "Analytics Lead at DataFlow",
    image: "/assets/mentor/nitish.webp",
  },
  {
    name: "Shubham Swaraj",
    role: "BI Developer at InsightTech",
    image: "/assets/mentor/Shubham.webp",
  },
  {
    name: "Chloe Thomas",
    role: "Senior AI Engineer - Google",
    image: "/assets/mentor/himangi.webp",
  },
  {
    name: "Kumar Savino",
    role: "Associate Director at Walmart",
    image: "/assets/mentor/preeti.webp",
  },
];

// --- Components ---

const AccordionItem = ({ module, index }: { module: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
            MODULE {index + 1}
          </span>
          <h4 className="text-lg font-bold text-gray-900">{module.title}</h4>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-5 pt-0 text-gray-600 bg-white border-t border-gray-100">{module.description}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function DataProgramEIE() {
  const [activeSection, setActiveSection] = useState("why-this-program");
  const [isFixed, setIsFixed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const sidebarRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for sticky header

      // Calculate if sidebar should be fixed
      if (containerRef.current && sidebarRef.current) {
        const containerTop = containerRef.current.offsetTop;
        const containerBottom = containerTop + containerRef.current.offsetHeight;
        const sidebarHeight = sidebarRef.current.offsetHeight;
        const viewportCenter = window.scrollY + window.innerHeight / 2;
        const sidebarCenter = containerTop + sidebarHeight / 2;

        // Start fixing when sidebar center reaches viewport center
        const shouldStartFixed = viewportCenter > sidebarCenter;

        // Stop fixing when we reach the end of the container
        // Calculate if the bottom of the fixed sidebar would go past the container bottom
        const sidebarBottom = window.scrollY + window.innerHeight / 2 + sidebarHeight / 2;
        const shouldStopFixed = sidebarBottom > containerBottom;

        setIsFixed(shouldStartFixed && !shouldStopFixed);

        // Update sidebar width to match container column width
        if (!isFixed) {
          setSidebarWidth(sidebarRef.current.offsetWidth);
        }
      }

      // Update active section
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Initial width calculation
    if (sidebarRef.current) {
      setSidebarWidth(sidebarRef.current.offsetWidth);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isFixed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for header
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 text-[#0A0F1E]">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">

        {/* Spacer to maintain layout when sidebar is fixed */}
        {isFixed && <div className="lg:w-1/4 flex-shrink-0" style={{ width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px` }} />}

        {/* Sticky Sidebar */}
        <aside
          ref={sidebarRef}
          className={`lg:w-1/4 self-start flex-shrink-0 transition-all duration-200 ${isFixed ? 'lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:z-10' : ''
            }`}
          style={isFixed ? {
            width: `${sidebarWidth}px`,
            maxWidth: `${sidebarWidth}px`,
            maxHeight: 'calc(100vh - 4rem)'
          } : {}}
        >
          <div className={isFixed ? ' lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4' : ''}>
            <h2 className="text-3xl font-serif font-bold text-[#0A0F1E] mb-8 leading-tight">
              AI Programs that helps to become a Professional
            </h2>

            <nav className="space-y-4 border-l-2 border-gray-200">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block pl-4 py-1 text-left text-sm font-medium transition-all duration-300 w-full ${activeSection === section.id
                    ? "border-l-2 border-blue-600 -ml-0.5 text-blue-600 font-bold"
                    : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:w-3/4 space-y-24">
          {/* Section 1: Why this Program */}
          <section id="why-this-program" className="scroll-mt-24">
            <h3 className="text-2xl font-serif font-bold mb-6">Why this Program</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis nibh tristique augue
              sagittis, sit amet auctor neque ullamcorper. Pellentesque vel faucibus tellus. Nullam ullamcorper ut metus
              sed eleifend. Maecenas sed lorem pharetra, interdum tellus luctus, commodo libero.
            </p>
            <ul className="space-y-3 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </li>
              ))}
            </ul>
            <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Read More <ArrowRight size={16} />
            </button>
            <div className="h-px w-full bg-gray-200 mt-12"></div>
          </section>

          {/* Section 2: Curriculum */}
          <section id="curriculum" className="scroll-mt-24">
            <h3 className="text-2xl font-serif font-bold mb-6">Learning Journey - Curriculum</h3>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis nibh tristique augue
              sagittis.
            </p>
            <div>
              {dataAnalyticsmodules.map((module, idx) => (
                <AccordionItem key={idx} module={module} index={idx} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <button className="px-8 py-3 bg-[#FFC107] hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-colors flex items-center gap-2">
                Download Full Curriculum <ChevronDown size={18} />
              </button>
            </div>
            <div className="h-px w-full bg-gray-200 mt-16"></div>
          </section>

          {/* Section 3: Tools */}
          <section id="tools" className="scroll-mt-24">
            <h3 className="text-2xl font-serif font-bold mb-8">Tools Which You Master as a Professional</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {dataAnalyticsTools.slice(0, 6).map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-gray-50 rounded-lg p-3 inline-block mb-4">
                    <img src={tool.image || "/placeholder.svg"} alt={tool.name} className="w-8 h-8 object-contain" />
                  </div>
                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      TOOL
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{tool.name}</h4>
                  <p className="text-xs text-gray-500">{tool.description.substring(0, 50)}...</p>
                </div>
              ))}
            </div>
            <div className="h-px w-full bg-gray-200 mt-16"></div>
          </section>

          {/* Section 4: Mentors */}
          <section id="mentors" className="scroll-mt-24">
            <h3 className="text-2xl font-serif font-bold mb-8">Mentors from Top Companies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {MENTORS.map((mentor, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 group hover:shadow-md transition-all"
                >
                  <div className="aspect-square bg-gray-200 relative overflow-hidden">
                    <img
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900">{mentor.name}</h4>
                    <p className="text-sm text-gray-500">{mentor.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-px w-full bg-gray-200 mt-16"></div>
          </section>

          {/* Section 5: Certificate */}
          <section id="certificate" className="scroll-mt-24">
            <h3 className="text-2xl font-serif font-bold mb-8">The Certificate Recognized By The Industry</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="bg-[#111] text-white aspect-[4/3] flex flex-col justify-center items-center p-6 relative">
                  <div className="absolute top-4 left-4 text-blue-500 font-bold tracking-widest text-xs">
                    AcceleratorX
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-serif mb-2">Certificate</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-6">of Graduation</div>
                    <div className="text-xl font-bold mb-2">Vipul Sharma</div>
                    <div className="text-[10px] text-gray-400 max-w-[200px] mx-auto">
                      Has successfully completed the AI Data Analytics Program
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  Get Your Nano-Degree in AI Data Analytics
                </h4>
                <p className="text-gray-600 text-sm mb-6">
                  Show the world your expertise in AI Marketing and stand out in a competitive AI Marketing jobs and get
                  hired easily.
                </p>
                <ul className="space-y-3">
                  {[
                    "Industry recognized Nano-Degree in AI Data Analytics",
                    "Verified badge + unique verification ID",
                    "Trusted by 2500+ companies and agencies",
                    "Lifetime exclusive alumni community access",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-700">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <Check size={10} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="h-px w-full bg-gray-200 mt-16"></div>
          </section>

          {/* Section 6: Career Opportunities */}
          <section id="career" className="scroll-mt-24">
            <h3 className="text-2xl font-serif font-bold mb-8">High-Paying Career Opportunities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg text-gray-900 w-2/3">
                      Artificial Intelligence Consultants & Strategists
                    </h4>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">₹12L - 25L</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Help businesses integrate AI solutions and develop AI strategies.
                  </p>
                </div>
              ))}
            </div>
            <div className="h-px w-full bg-gray-200 mt-16"></div>
          </section>

          {/* Section 7: Pricing */}
          <section id="pricing" className="scroll-mt-24">
            <h3 className="text-2xl font-serif font-bold mb-8">Make an Investment for the AI Ready Future</h3>
            <div className="flex justify-center">
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 max-w-sm w-full text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Regular</h4>
                <p className="text-xs text-gray-500 mb-6">Comprehensive AI learning program</p>

                <div className="mb-2">
                  <span className="text-3xl font-bold text-blue-600">₹ 42,499</span>
                  <span className="text-gray-400 text-xs ml-1">+ GST</span>
                </div>

                <ul className="text-left space-y-3 my-8 text-sm text-gray-600">
                  {[
                    "6 month intensive live instructor-led training",
                    "Hands-on projects tackling real-world challenges",
                    "Industry-recognized certification",
                    "Lifetime access to all program materials",
                    "Career mentorship and guidance",
                  ].map((feat, i) => (
                    <li key={i} className="flex gap-2">
                      <Check size={16} className="text-blue-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
