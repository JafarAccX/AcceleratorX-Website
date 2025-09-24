import { SEO } from "../../../components/SEO";

const N8nAutomationEntry = () => {
  // Array of brochure images
  const brochureImages = [
    { src: "/assets/n8n-broucher-lp/1.webp", alt: "n8n Mastery Program Overview" },
    { src: "/assets/n8n-broucher-lp/2.webp", alt: "The Automation Revolution" },
    { src: "/assets/n8n-broucher-lp/3.webp", alt: "Why n8n?" },
    { src: "/assets/n8n-broucher-lp/4.webp", alt: "Program Structure" },
    { src: "/assets/n8n-broucher-lp/5.webp", alt: "Course Modules" },
    { src: "/assets/n8n-broucher-lp/6.webp", alt: "Learning Outcomes" },
    { src: "/assets/n8n-broucher-lp/7.webp", alt: "Hands-on Projects" },
    { src: "/assets/n8n-broucher-lp/8.webp", alt: "Career Opportunities" },
    { src: "/assets/n8n-broucher-lp/9.webp", alt: "Success Stories" }, 
    { src: "/assets/n8n-broucher-lp/11.webp", alt: "Enrollment Information" },
    { src: "/assets/n8n-broucher-lp/12.webp", alt: "Program Benefits" },
    { src: "/assets/n8n-broucher-lp/13.webp", alt: "Contact Information" },
    { src: "/assets/n8n-broucher-lp/15.webp", alt: "Get Started Today" },
  ];

  return (
    <>
      <SEO 
        title="n8n Mastery Program - Master Workflow Automation | AcceleratorX"
        description="Join our comprehensive n8n Mastery Program and learn workflow automation from beginner to expert level. Master the future of business automation."
      />
      
      <div className="min-h-screen w-full bg-black">
        {/* Hero Section - First brochure image */}
        <div className="relative w-full h-screen flex items-center justify-center">
          <img
            src={brochureImages[0].src}
            alt={brochureImages[0].alt}
            // className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
            loading="eager"
            className="w-full h-auto object-cover" 
          />
          
          {/* Floating CTA on hero */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 px-4 w-full max-w-sm">
            <button
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeJxgV3bMDrcy4m8bGdEIHqR0GLZrvVeZ5QF0itPIQqgDaC2g/viewform?usp=sharing&ouid=112961186201792362694', '_blank', 'noopener,noreferrer')}
              className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black active:scale-95"
            >
              🚀 Join the Waitlist
            </button>
          </div>
          
        </div>

        {/* Brochure Content Sections */}
        <div className="w-full max-w-5xl mx-auto my-16">
          {brochureImages.slice(1).map((image, index) => (
            <div key={index + 1} className="w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-gradient-to-r from-gray-900 to-black py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">n8n Automation</span>?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already transforming their careers with workflow automation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeJxgV3bMDrcy4m8bGdEIHqR0GLZrvVeZ5QF0itPIQqgDaC2g/viewform?usp=sharing&ouid=112961186201792362694', '_blank', 'noopener,noreferrer')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black active:scale-95"
              >
                🎯 Secure Your Spot
              </button>
              
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">487%</div>
                <div className="text-gray-300">Growth in automation roles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">₹2.8L+</div>
                <div className="text-gray-300">Average salary premium</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">8,500+</div>
                <div className="text-gray-300">Active job openings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default N8nAutomationEntry;