import  { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Crown } from "lucide-react";

const weeklyContent = [
  {
    week: 1,
    title: "Product Management Basics",
    content: ["Understanding Product Management Basics", "Gaining User Understanding", "Performing Product Critique"],
  },
  {
    week: 2,
    title: "User Journey and Market Research",
    content: [
      "Exploring Product Adoption Life Cycle",
      "Mapping User Journeys",
      "Conducting Market Research",
      "Practicing Guesstimation",
    ],
  },
  {
    week: 3,
    title: "Competitor Analysis& Strategies",
    content: ["Understanding Competitor Analysis", "Building Product Strategy", "Creating Your Dream Product"],
  },
  {
    week: 4,
    title: "Developing & Road mapping",
    content: [
      "Exploring Development Methodologies",
      "Defining Product Vision and Roadmap",
      "Creating Product Documentation",
    ],
  },
  {
    week: 5,
    title: "wireframes& Prioritization",
    content: [
      "Designing High-Fidelity Wireframes",
      "Utilizing UI/UX Tools",
      "Learning Feature Prioritization",
      "Participating in Industry Sessions",
    ],
  },
  {
    week: 6,
    title: "MVP & usability testing",
    content: [
      "Developing MVPs",
      "Defining Metrics",
      "Building Your Dream Product (BYDP)",
      "Executing Usability Testing",
    ],
  },
  {
    week: 7,
    title: "product teardown& Marketing",
    content: [
      "Performing Product Teardowns",
      "Engaging in Case Study and Q&A",
      "Exploring Product Marketing Strategies",
    ],
  },
  {
    week: 8,
    title: "Go to Market strategy",
    content: [
      "Presenting Product Teardowns",
      "Learning GTM Strategy",
      "Understanding Habit-Forming Products",
      "Participating in Industry Sessions",
    ],
  },
  {
    week: 9,
    title: "Lauch& Testing",
    content: [
      "Preparing Launch Checklists",
      "Segmenting Users",
      "Participating in Case Study and Q&A",
      "Engaging in Interview Sessions",
    ],
  },
  {
    week: 10,
    title: "Analytics&Testing",
    content: ["Presenting GTM Strategy", "Practicing A/B Testing", "Exploring Product Analytics"],
  },
  {
    week: 11,
    title: "Technical Foundation& Analytics",
    content: [
      "Understanding Google Analytics",
      "Tech 101 for PMs",
      "Discussing BYDP",
      "Participating in Mock Interviews",
    ],
  },
  {
    week: 12,
    title: "APIs& Databases",
    content: [
      "Learning APIs and Postman",
      "Engaging in Industry Sessions",
      "Exploring Databases and SQL",
      "Practicing SQL",
    ],
  },
  {
    week: 13,
    title: "Retension & Montization",
    content: [
      "Exploring Retention Techniques",
      "Learning Monetization Strategies",
      "Understanding Growth Management",
      "Focusing on Acquisition and Activation",
    ],
  },
  {
    week: 14,
    title: "Product-led Growth",
    content: ["Exploring Product-Led Growth", "Participating in Mock Interviews"],
  },
  {
    week: 15,
    title: "AI in Product Management",
    content: ["Exploring Components of AI Management", "Understanding the AI Landscape", "Leveraging AI in Products"],
    highlight: true,
  },
  {
    week: 16,
    title: "Building AI Products",
    content: ["Learning How to Build AI Products", "Exploring AI Ethics", "Participating in Industry Sessions"],
    highlight: true,
  },
  {
    week: 17,
    title: "Financial project presentation",
    content: ["Finalizing BYDP Projects", "Mock Interviews - 4", "Q&A Sessions", "Planning Your Career Roadmap"],
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
                <span
                  className={`text-sm font-medium ${
                    week.highlight ? "text-amber-400 bg-amber-400/10" : "text-[#5CB338] bg-[#5CB338]/10"
                  } px-2 py-0.5 rounded flex items-center gap-1`}
                >
                  Week {week.week}
                  {week.highlight && (
                    <Crown className="w-4 h-4 text-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.5)] animate-pulse" />
                  )}
                </span>
                {week.title}
              </h3>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-[#5CB338] transition-transform ${activeWeek === week.week ? "rotate-180" : ""}`}
            />
          </button>

          {activeWeek === week.week && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
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
