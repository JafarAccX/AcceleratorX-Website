// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer
//       className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat min-h-[600px] flex flex-col justify-end"
//       style={{
//         backgroundImage: "url('/redesign/footer/footer-website.webp')",
//         backgroundPosition: 'center center'
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@400;600;700&display=swap');
//       `}</style>

//       {/* Background Gradient/Filter to improve text readability if needed */}
//       <div className="absolute inset-0 bg-blue-50/10 pointer-events-none"></div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

//           {/* Left Side: CTA Content */}
//           <div className="space-y-8 max-w-2xl">
//             <h2 className="text-4xl  font-extrabold text-gray-900 leading-[1.1] tracking-tight">
//               Don’t wait—revolutionize your <br />
//               <span className="text-blue-600">AI workflow</span> and <span className="text-blue-600">AI specialised</span> <br />
//               job roles today.
//             </h2>

//             <p className="text-xl md:text-2xl font-bold text-gray-900">
//               Click below to get started.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-4">
//               <Link
//                 to="/request-demo"
//                 className="px-8 py-3.5 rounded-full border-2 border-slate-800 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-base md:text-lg"
//               >
//                 Request Your Free Demo Now
//               </Link>
//               <Link
//                 to="/contact"
//                 className="px-8 py-3.5 rounded-full bg-blue-600 border-2 border-blue-600 text-white font-semibold hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 text-base md:text-lg"
//               >
//                 Contact Us Today
//               </Link>
//             </div>
//           </div>

//           {/* Right Side: Guy + X Graphic */}
//           <div className="relative flex justify-center lg:justify-end h-full min-h-[400px] lg:min-h-[500px]">

//             <div className="relative w-full max-w-lg lg:absolute lg:right-0 lg:bottom-12 lg:-mr-12 xl:-mr-24">
//               {/* The Guy Image */}
//               <img
//                 src="/redesign/footer/footer-guy.webp"
//                 alt="AI Specialist"
//                 className="relative z-10 w-full h-auto object-contain drop-shadow-2xl mx-auto"
//                 style={{ maxHeight: '600px' }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Minimal Footer */}
//         <div className="border-t border-gray-400/40 pt-8 text-sm text-gray-600 font-medium">
//           <div className="flex flex-col gap-4">
//             <p className="text-gray-800 font-semibold">
//               © Copyright {new Date().getFullYear()} &nbsp;·&nbsp; Built with love by AcceleratorX Team ♡
//             </p>

//             <p className="leading-relaxed opacity-90 max-w-6xl text-xs md:text-sm">
//               Advance your career with industry-driven programs in Data Analytics, Product Management, and Generative AI, designed by experts for real-world success.
//             </p>

//             <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-800 text-xs md:text-sm font-bold tracking-wide mt-2">
//               <Link to="/courses" className="hover:text-blue-600 transition-colors">· Programs</Link>
//               <Link to="/about-us" className="hover:text-blue-600 transition-colors">· Company</Link>
//               <Link to="/contact" className="hover:text-blue-600 transition-colors">· Contact Us</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import companyLogo from "/redesign/logo-no-bg.webp";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

type FooterLink = {
  label: string;
  url: string;
  icon?: React.ReactNode;
};

const footerLinks: {
  [key: string]: {
    title: string;
    links: FooterLink[];
  };
} = {
  company: {
    title: "COMPANY",
    links: [
      { label: "Home", url: "/" },
      { label: "Product", url: "/#products" },
      { label: "Blogs", url: "/blogs" },
      { label: "Services", url: "/#services" },
    ],
  },
  help: {
    title: "HELP",
    links: [
      { label: "Customer Support", url: "/support" },
      { label: "Terms & Conditions", url: "/terms-and-conditions" },
      { label: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
  resources: {
    title: "RESOURCES",
    links: [
      { label: "Free eBooks", url: "/#ebooks" },
      { label: "Development Tutorial", url: "/#tutorials" },
      { label: "Free course Playlist", url: "/#playlist" },
    ],
  },
  social: {
    title: "Connect With Us",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/acceleratorxorg/",
        icon: <Linkedin className="w-5 h-5" />,
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/acceleratorxorg",
        icon: <Instagram className="w-5 h-5" />,
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/acceleratorxorg/",
        icon: <Facebook className="w-5 h-5" />,
      },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#999] pt-20 pb-10 relative border-t border-white/[0.03]">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#3E38E0]/50 to-transparent shadow-[0_0_50px_rgba(62,56,222,0.3)]" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
          
          {/* Brand Identity Column */}
          <div className="lg:max-w-[340px] flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <Link to="/" className="group inline-block transition-transform duration-300 hover:scale-105">
              <img
                src={companyLogo}
                alt="AcceleratorX"
                className="w-auto h-12 lg:h-14 object-contain brightness-0 invert"
                draggable={false}
              />
            </Link>
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#A0A8B8] font-medium tracking-tight">
              Empowering the next generation of AI leaders through industry-validated, mentor-led programs in Product, Data, and Generative Intelligence.
            </p>
            <div className="flex items-center gap-5">
              {footerLinks.social.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 transform"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
            {["company", "help", "resources"].map((key, idx) => (
              <div key={key} className={`${idx === 2 ? 'col-span-2 md:col-span-1' : 'col-span-1'}`}>
                <h3 className="text-white font-bold text-[12px] sm:text-[13px] tracking-[0.25em] uppercase mb-8 flex items-center gap-2">
                  <span className="w-4 h-[1.5px] bg-[#3E38E0]" />
                  {footerLinks[key].title}
                </h3>
                <ul className="space-y-4">
                  {footerLinks[key].links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        to={link.url} 
                        className="text-[#94A3B8] hover:text-[#3E38E0] transition-colors text-[14px] font-medium block relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#3E38E0] after:transition-all hover:after:w-full"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] font-medium text-[#64748B] text-center md:text-left">
            &copy; {new Date().getFullYear()} AcceleratorX. All rights reserved. Registered trademark of A2M Technologies Pvt. Ltd.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <span className="opacity-30">/</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
            <span className="opacity-30">/</span>
            <span className="text-white/40 italic">Built for the future of AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}