import React, { useState } from "react";
import {
  Shield,
  Lock,
  Share2,
  Settings,
  FileText,
  MessageSquare,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import ContentSection from "../../components/ContentSection";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Shield,
    content:
      "At Inno, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you share with us. Whether you're exploring our services or actively engaging with our Web3 fintech solutions, your privacy is of paramount importance. We ensure that all your interactions with our platform are secure, transparent, and aligned with the highest standards of data protection.",
  },
  {
    id: "data-collection",
    title: "Data Collection and Usage",
    icon: Lock,
    content:
      "We collect various types of information, including personal details, transaction data, and usage patterns, to enhance your experience with our services.",
  },
  {
    id: "data-sharing",
    title: "Data Sharing and Disclosure",
    icon: Share2,
    content:
      "Inno does not sell your personal information to third parties. However, we may share your data with trusted partners and service providers who assist us in operating our platform, delivering services, and serving you. These entities are bound by strict confidentiality agreements and are only permitted to use your information as necessary to perform their services.",
  },
  {
    id: "security",
    title: "Security Measures",
    icon: Settings,
    content:
      "We implement a variety of security measures to ensure the protection of your personal information. These include encryption, secure access protocols, and regular security audits. Our team is dedicated to maintaining the highest security standards, ensuring that your data is safe from unauthorized access, alteration, or disclosure.",
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    icon: FileText,
    content:
      "Inno may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or industry standards. We will notify you of any significant changes through our platform or via email. We encourage you to review this policy regularly to stay informed about how we protect your information and ensure your privacy.",
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: MessageSquare,
    content:
      "If you have any questions about this Privacy Policy, please contact our support team.",
  },
];

export default function Privacy() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const currentSection = sections.find(
    (section) => section.id === activeSection
  )!;

  return (
    <div className="min-h-screen bg-gradient-to-b py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl text-white sm:text-5xl font-bold mb-4">
            Privacy <span className="text-indigo-500">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your privacy is our top priority. At Inno, we safeguard your data
            with advanced security protocols, ensuring transparency and full
            control over your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Revised 09-15-2024</p>
        </div>

        <div className="flex gap-8">
          <Sidebar
            sections={sections}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <ContentSection
                key={currentSection.id}
                title={currentSection.title}
                content={currentSection.content}
                Icon={currentSection.icon}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
