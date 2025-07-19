import React, { useState } from "react";
import { Calendar, BookOpen, Cloud, Rocket, ChevronLeft, ChevronRight } from "lucide-react";

interface MonthData {
  title: string;
  goal: string;
  weeks: {
    title: string;
    content: string[];
    assignments?: string[];
  }[];
}

const GENLearningJourney = () => {
  const [activeMonth, setActiveMonth] = useState(0);

  const months: MonthData[] = [
    {
      title: "Month 1: GenAI Foundations for PMs",
      goal: "Build a strong foundation in GenAI, focusing on product management use cases and tools.",
      weeks: [
        {
          title: "Week 1: GenAI in Product Management",
          content: [
            "Overview of GenAI and its impact on PM roles",
            "Key GenAI tools for product managers",
            "Case studies: GenAI in real product teams",
          ],
        },
        {
          title: "Week 2: Prompt Engineering for PMs",
          content: [
            "Crafting effective prompts for product research",
            "Automating user feedback analysis",
            "Hands-on with ChatGPT, Claude, Gemini",
          ],
        },
        {
          title: "Week 3: GenAI for Roadmapping & Planning",
          content: [
            "Using GenAI for roadmap generation",
            "Sprint planning and backlog grooming with AI",
            "Integrating GenAI into PM workflows",
          ],
        },
        {
          title: "Week 4: AI-Driven User Insights",
          content: [
            "Leveraging GenAI for user persona creation",
            "Automating competitor analysis",
            "Synthesizing user feedback with AI",
          ],
        },
      ],
    },
    {
      title: "Month 2: Building & Deploying GenAI Solutions",
      goal: "Learn to build, deploy, and integrate GenAI-powered solutions for product management.",
      weeks: [
        {
          title: "Week 5: No-Code GenAI Tools for PMs",
          content: [
            "Introduction to no-code GenAI platforms",
            "Building AI-powered workflows with n8n, Zapier",
            "Automating product ops tasks",
          ],
        },
        {
          title: "Week 6: AI Agent Building for PMs",
          content: [
            "Designing and deploying GenAI agents",
            "Integrating agents into product workflows",
            "Best practices for PMs using AI agents",
          ],
        },
        {
          title: "Week 7: GenAI for Stakeholder Communication",
          content: [
            "Automating stakeholder updates with GenAI",
            "AI-powered reporting and dashboards",
            "Personalizing communication at scale",
          ],
        },
        {
          title: "Week 8: Responsible AI for PMs",
          content: [
            "Ethical considerations in GenAI for products",
            "Ensuring compliance and transparency",
            "Building trust with AI-driven features",
          ],
        },
      ],
    },
    {
      title: "Month 3: Capstone Project & Career Growth",
      goal: "Apply your GenAI skills to a real-world PM project and prepare for advanced PM roles.",
      weeks: [
        {
          title: "Weeks 9-10: Capstone Project",
          content: [
            "Define a product challenge and GenAI solution",
            "Develop, test, and iterate your GenAI-powered feature",
            "Present your project to mentors and peers",
          ],
        },
        {
          title: "Weeks 11-12: Career Acceleration",
          content: [
            "Building your GenAI PM portfolio",
            "Interview prep for AI-focused PM roles",
            "Exploring freelance and consulting opportunities",
          ],
        },
      ],
    },
  ];

  const icons = {
    month1: BookOpen,
    month2: Cloud,
    month3: Rocket,
  };

  const nextMonth = () => {
    setActiveMonth((prev) => (prev + 1) % months.length);
  };

  const prevMonth = () => {
    setActiveMonth((prev) => (prev - 1 + months.length) % months.length);
  };

  const MonthIcon = icons[`month${activeMonth + 1}` as keyof typeof icons];

  return (
    <section className="relative py-12 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-0 right-0 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-3 relative z-10">
        <div className=" mx-auto flex flex-col gap-4">
          {/* Section Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">Learning Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Your GenAI PM Learning Path</h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              A 3-month journey to master GenAI for product management and accelerate your PM career
            </p>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              className="p-2 rounded-full bg-[#111827] text-white hover:bg-[#1F2937] transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              {months.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveMonth(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeMonth === index ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to month ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextMonth}
              className="p-2 rounded-full bg-[#111827] text-white hover:bg-[#1F2937] transition-colors"
              aria-label="Next month"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Current Month Content */}
          <div className=" ">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 p-2.5 rounded-lg bg-st-500/10">
                <MonthIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{months[activeMonth].title}</h3>
                <p className="text-gray-300">{months[activeMonth].goal}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {months[activeMonth].weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="bg-[#1F2937]/70 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">{week.title}</h4>
                  <ul className="space-y-2">
                    {week.content.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-gray-300 text-sm flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0 mt-2"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GENLearningJourney;
