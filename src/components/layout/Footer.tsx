import React from "react";
import companyLogo from "/assets/accelerator.png";
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

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[70px] xl:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">

          {/* Brand Identity Column */}
          <div className="lg:max-w-[340px] flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <Link to="/" className="group inline-block transition-transform duration-300 hover:scale-105">
              <img
                src={companyLogo}
                alt="AcceleratorX"
                className="w-auto h-8 lg:h-8 object-contain"
                draggable={false}
              />
            </Link>
            <p className="text-[14px] sm:text-[14px] leading-[1.6] text-[#A0A8B8] font-medium tracking-tight">
              Be a real AI version product <br /> by joining us.
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