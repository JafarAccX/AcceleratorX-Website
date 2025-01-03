import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const weeklyContent = [
  {
    week: 1,
    title: "Product Management Basics",
    content: [
      "Understanding Product Management Basics",
      "Gaining User Understanding",
      "Performing Product Critique",
    ],
  },
  {
    week: 2,
    title: "User Journey & Market Research",
    content: [
      "Exploring Product Adoption Life Cycle",
      "Mapping User Journeys",
      "Conducting Market Research",
      "Practicing Guesstimation",
    ],
  },
  {
    week: 3,
    title: "Competitor Analysis & Strategy",
    content: [
      "Understanding Competitor Analysis",
      "Building Product Strategy",
      "Creating Your Dream Product",
    ],
  },
  {
    week: 4,
    title: "Development & Roadmapping",
    content: [
      "Exploring Development Methodologies",
      "Defining Product Vision and Roadmap",
      "Creating Product Documentation",
    ],
  },
  {
    week: 5,
    title: "Wireframes & Prioritization",
    content: [
      "Designing High-Fidelity Wireframes",
      "Utilizing UI/UX Tools",
      "Learning Feature Prioritization",
      "Participating in Industry Sessions",
    ],
  },
  {
    week: 6,
    title: "MVP & Usability Testing",
    content: [
      "Developing MVPs",
      "Defining Metrics",
      "Building Your Dream Product (BYDP)",
      "Executing Usability Testing",
    ],
  },
  {
    week: 7,
    title: "Product Teardown & Marketing",
    content: [
      "Performing Product Teardowns",
      "Engaging in Case Study and Q&A",
      "Exploring Product Marketing Strategies",
    ],
  },
  {
    week: 8,
    title: "Go-to-Market Strategy",
    content: [
      "Presenting Product Teardowns",
      "Learning GTM Strategy",
      "Understanding Habit-Forming Products",
      "Participating in Industry Sessions",
    ],
  },
  {
    week: 9,
    title: "Launch & User Segmentation",
    content: [
      "Preparing Launch Checklists",
      "Segmenting Users",
      "Participating in Case Study and Q&A",
      "Engaging in Interview Sessions",
    ],
  },
  {
    week: 10,
    title: "Analytics & Testing",
    content: [
      "Presenting GTM Strategy",
      "Practicing A/B Testing",
      "Exploring Product Analytics",
    ],
  },
  {
    week: 11,
    title: "Technical Foundations & Analytics",
    content: [
      "Understanding Google Analytics",
      "Tech 101 for PMs",
      "Discussing BYDP",
      "Participating in Mock Interviews",
    ],
  },
  {
    week: 12,
    title: "APIs & Databases",
    content: [
      "Learning APIs and Postman",
      "Engaging in Industry Sessions",
      "Exploring Databases and SQL",
      "Practicing SQL",
    ],
  },
  {
    week: 13,
    title: "Retention & Monetization",
    content: [
      "Exploring Retention Techniques",
      "Learning Monetization Strategies",
      "Understanding Growth Management",
      "Focusing on Acquisition and Activation",
    ],
  },
  {
    week: 14,
    title: "Product-Led Growth",
    content: [
      "Exploring Product-Led Growth",
      "Participating in Mock Interviews",
    ],
  },
  {
    week: 15,
    title: "AI in Product Management",
    content: [
      "Exploring Components of AI Management",
      "Understanding the AI Landscape",
      "Leveraging AI in Products",
    ],
  },
  {
    week: 16,
    title: "Building AI Products",
    content: [
      "Learning How to Build AI Products",
      "Exploring AI Ethics",
      "Participating in Industry Sessions",
    ],
  },
  {
    week: 17,
    title: "Final Project Presentation",
    content: [
      "Finalizing BYDP Projects",
      "Mock Interviews - 4",
      "Q&A Sessions",
      "Planning Your Career Roadmap",
    ],
  },
];


export default function WeeklyContent() {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
      {weeklyContent.map((week, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <button
            onClick={() => setActiveWeek(activeWeek === week.week ? null : week.week)}
            className="w-full flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-[#5CB338]/5 transition-all group"
          >
            <div>
              <h3 className="text-lg font-semibold group-hover:text-[#5CB338] text-left flex items-center gap-2">
                <span className="text-sm font-medium text-[#5CB338] bg-[#5CB338]/10 px-2 py-0.5 rounded">
                  Week {week.week}
                </span>
                {week.title}
              </h3>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-[#5CB338] transition-transform ${
                activeWeek === week.week ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {activeWeek === week.week && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 pl-4 space-y-2"
            >
              {week.content.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: itemIndex * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5CB338]" />
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
