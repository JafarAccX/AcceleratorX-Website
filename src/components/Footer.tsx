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
  Mail,
  Phone,
  MapPin,
  Twitter,
  Youtube,
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
  services: {
    title: "Courses",
    links: [
      {
        label: "AI Product Management",
        url: "/courses/product-management",
      },
      { label: "AI Data Analytics", url: "/courses/data-analytics" },
      // { label: "No-Code Development", url: "/courses/no-code-tool-program" },
      { label: "Generative AI", url: "/courses/generative-ai" },
      // {
      //   label: "AI Performance Marketing",
      //   url: "/courses/advance-performance-marketing-with-ai",
      // },
      { label: "AI Digital Marketing", url: "/courses/ai-digital-marketing" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", url: "/about-us" },
      { label: "Blog", url: "/blogs" },
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms & Conditions", url: "/terms-and-conditions" },
      { label: "Refund Policy", url: "/refund-policy" },
      { label: "XSAT", url: "/xsat" },
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
        label: "Youtube",
        url: "https://youtube.com/@acceleratorxorg?si=zmpSEhxhGquISbuO",
        icon: <Youtube className="w-5 h-5" />,
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/acceleratorxorg",
        icon: <Instagram className="w-5 h-5" />,
      },
      {
        label: "Twitter",
        url: "https://x.com/acceleratorxorg?t=zCxLI2yiMQA2voLB8ntuMw&s=08",
        icon: <Twitter className="w-5 h-5" />,
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/acceleratorxorg/",
        icon: <Facebook className="w-5 h-5" />,
      },
    ],
  },
  contact: {
    title: "Contact Us",
    links: [
      {
        label: "support@acceleratorx.co",
        url: "mailto:support@acceleratorx.co",
        icon: <Mail className="w-5 h-5" />,
      },
      {
        label: "+91 9916859555",
        url: "tel:+919916859555",
        icon: <Phone className="w-5 h-5" />,
      },
      {
        label: "L367, 5th Main Road, 6th Sector, HSR Layout, Bangalore, KA 560102, India",
        url: "https://maps.app.goo.gl/PPSRGZyAgWkqUJ6E8",
        icon: <MapPin className="w-5 h-5" />,
      },
    ],
  },
};

export default function Footer() {
  // const location = useLocation();

  // useEffect(() => {
  //   const sitesealContainer = document.getElementById("siteseal");
  //   if (location.pathname === "/") {
  //     if (sitesealContainer && !document.getElementById("siteseal-script")) {
  //       const script = document.createElement("script");
  //       script.id = "siteseal-script";
  //       script.async = true;
  //       script.type = "text/javascript";
  //       script.src =
  //         "https://seal.starfieldtech.com/getSeal?sealID=I0Pkklr2oFJr6LRUc174f6BxE8hDE1T0lghkh2Wng6oca8kd7FoaY1IUHwLT";
  //       sitesealContainer.appendChild(script);
  //     }
  //   } else {
  //     const script = document.getElementById("siteseal-script");
  //     if (script) {
  //       script.remove();
  //     }
  //   }
  // }, [location]);

  return (
    <footer className="bg-gradient-to-b from-[#0B1120]/70 to-[#070914]/70 text-gray-400 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
          {/* Company Info Section */}
          <div className="md:col-span-4 space-y-8">
            <Link to="/" className="inline-block">
              <img
                src={companyLogo}
                alt="AcceleratorX company new logo - best product management courses"
                className="w-auto h-14 object-contain text-left"
              />
            </Link>
            <p className="text-gray-400 max-w-md">
              Advance your career with industry-driven programs in Data Analytics, Product                             Management, and Generative AI, designed by experts for real-world success.
            </p>
            {/* Social Media Icons */}
            <div className="pt-4">
              <p className="font-semibold text-white mb-4 text-lg">
                Connect With Us
              </p>
              <div className="flex items-center gap-4">
                {footerLinks.social.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="bg-white/5 p-2.5 rounded-lg hover:bg-blue-500/20 transition-all duration-300 group"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300" aria-hidden="true">
                      {link.icon}
                    </span>
                    <span className="sr-only" role="text">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            {["services", "company"].map((key) => (
              <div key={key}>
                <p className="font-semibold text-white mb-4 text-lg">
                  {footerLinks[key].title}
                </p>
                <ul className="space-y-3">
                  {footerLinks[key].links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.url} className="text-gray-400 hover:text-white transition-colors duration-300">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4">
            <p className="font-semibold text-white mb-4 text-lg">
              {footerLinks.contact.title}
            </p>
            <ul className="space-y-4">
              {footerLinks.contact.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="mt-1 text-blue-400 flex-shrink-0">{link.icon}</span>
                    <span className="group-hover:text-white">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} AcceleratorX. All rights reserved.
            </p>
            {/* <div id="siteseal" className="flex items-center space-x-4"></div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}