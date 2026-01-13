import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat min-h-[600px] flex flex-col justify-end"
      style={{
        backgroundImage: "url('/redesign/footer/footer-website.webp')",
        backgroundPosition: 'center center'
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@400;600;700&display=swap');
      `}</style>

      {/* Background Gradient/Filter to improve text readability if needed */}
      <div className="absolute inset-0 bg-blue-50/10 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

          {/* Left Side: CTA Content */}
          <div className="space-y-8 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Don’t wait—revolutionize your <br />
              <span className="text-blue-600">AI workflow</span> and <span className="text-blue-600">AI specialised</span> <br />
              job roles today.
            </h2>

            <p className="text-xl md:text-2xl font-bold text-gray-900">
              Click below to get started.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/request-demo"
                className="px-8 py-3.5 rounded-full border-2 border-slate-800 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-base md:text-lg"
              >
                Request Your Free Demo Now
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-blue-600 border-2 border-blue-600 text-white font-semibold hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 text-base md:text-lg"
              >
                Contact Us Today
              </Link>
            </div>
          </div>

          {/* Right Side: Guy + X Graphic */}
          <div className="relative flex justify-center lg:justify-end h-full min-h-[400px] lg:min-h-[500px]">

            <div className="relative w-full max-w-lg lg:absolute lg:right-0 lg:bottom-12 lg:-mr-12 xl:-mr-24">
              {/* The Guy Image */}
              <img
                src="/redesign/footer/footer-guy.webp"
                alt="AI Specialist"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl mx-auto"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Minimal Footer */}
        <div className="border-t border-gray-400/40 pt-8 text-sm text-gray-600 font-medium">
          <div className="flex flex-col gap-4">
            <p className="text-gray-800 font-semibold">
              © Copyright {new Date().getFullYear()} &nbsp;·&nbsp; Built with love by AcceleratorX Team ♡
            </p>

            <p className="leading-relaxed opacity-90 max-w-6xl text-xs md:text-sm">
              Advance your career with industry-driven programs in Data Analytics, Product Management, and Generative AI, designed by experts for real-world success.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-800 text-xs md:text-sm font-bold tracking-wide mt-2">
              <Link to="/courses" className="hover:text-blue-600 transition-colors">· Programs</Link>
              <Link to="/about-us" className="hover:text-blue-600 transition-colors">· Company</Link>
              <Link to="/contact" className="hover:text-blue-600 transition-colors">· Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
