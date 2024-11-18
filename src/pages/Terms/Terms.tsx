import React, { useState } from "react";
import {
  Scale,
  Users,
  Shield,
  AlertTriangle,
  Bookmark,
  HelpCircle,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import ContentSection from "../../components/ContentSection";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: Scale,
    content:
      "By accessing or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.",
  },
  {
    id: "eligibility",
    title: "User Eligibility",
    icon: Users,
    content:
      "You must be at least 18 years old and capable of forming legally binding contracts to use our services. By using our platform, you represent and warrant that you meet all eligibility requirements.",
  },
  {
    id: "security",
    title: "Account Security",
    icon: Shield,
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Please notify us immediately of any unauthorized use of your account.",
  },
  {
    id: "prohibited",
    title: "Prohibited Activities",
    icon: AlertTriangle,
    content:
      "Users must not engage in any unlawful, fraudulent, or harmful activities while using our services. This includes attempting to gain unauthorized access to our systems or other users' accounts.",
  },
  {
    id: "intellectual",
    title: "Intellectual Property",
    icon: Bookmark,
    content:
      "All content, features, and functionality of our platform are owned by Inno and are protected by international copyright, trademark, and other intellectual property laws.",
  },
  {
    id: "support",
    title: "Customer Support",
    icon: HelpCircle,
    content:
      "For any questions or concerns regarding these Terms and Conditions, please contact our customer support team.",
  },
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const currentSection = sections.find(
    (section) => section.id === activeSection
  )!;

  return (
    <div className="min-h-screen bg-gradient-to-b py-24 from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Terms & <span className="text-indigo-500">Conditions</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our
            services. These terms outline your rights and responsibilities as a
            user of our platform.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last Updated: 09-15-2024</p>
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
