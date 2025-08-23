import React from 'react';
import { FaLinkedin, FaDiscord, FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa';

const WSCommunityDM = () => {
  const socialLinks = [
    { 
      icon: <FaDiscord className="w-5 h-5" />, 
      label: "Discord", 
      color: "hover:text-indigo-400",
      href: "https://discord.gg/w2jP5pym" 
    },
    { 
      icon: <FaLinkedin className="w-5 h-5" />, 
      label: "LinkedIn", 
      color: "hover:text-blue-400",
      href: "https://www.linkedin.com/company/acceleratorxorg/" 
    },
    { 
      icon: <FaWhatsapp className="w-5 h-5" />, 
      label: "WhatsApp", 
      color: "hover:text-green-400",
      href: "https://chat.whatsapp.com/Kh9z1TWzXC3HryD31Sl24B" 
    },
    { 
      icon: <FaInstagram className="w-5 h-5" />, 
      label: "Instagram", 
      color: "hover:text-pink-400",
      href: "https://www.instagram.com/acceleratorxorg/" 
    },
  ];

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 lg:pr-[450px]">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-gray-300 mb-8">Connect with tech enthusiasts and industry experts. Learn, share, and grow together.</p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg ${link.color} transition-colors`}
              >
                {link.icon}
                <span className="text-white">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSCommunityDM;
