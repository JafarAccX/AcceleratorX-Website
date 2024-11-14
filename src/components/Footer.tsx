import React from 'react';
import { Linkedin, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  services: {
    title: 'Services',
    links: ['Features', 'Solutions', 'Testimonials', 'FAQ']
  },
  company: {
    title: 'Company',
    links: ['About', 'Blog', 'Privacy Policy', 'Terms of Use', 'Contact Us']
  },
  social: {
    title: 'Social',
    links: ['LinkedIn', 'Youtube', 'X (Twitter)']
  }
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Brand */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-white mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="font-bold">in</span>
              </div>
              <span className="font-semibold">Inno</span>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="md:col-span-3">
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}