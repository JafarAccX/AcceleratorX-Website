import React, { useState } from "react";
import { Calendar, BookOpen, Cloud, Rocket, ChevronLeft, ChevronRight, Brain, Users } from "lucide-react";

interface CardData {
  title: string;
  content: string[];
}

interface WeekData {
  title: string;
  cards: CardData[];
}

const GENLearningJourney = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const weeks: WeekData[] = [
    {
      title: "Week 1: GenAI Foundations & Prompt Engineering",
      cards: [
        {
          title: "GenAI in Product Management",
          content: [
            "Overview of GenAI and its impact on PM roles",
            "Key GenAI tools for product managers",
            "Case studies: GenAI in real product teams",
          ],
        },
        {
          title: "Prompt Engineering for PMs",
          content: [
            "Crafting effective prompts for product research",
            "Automating user feedback analysis",
            "Hands-on with ChatGPT, Claude, Gemini",
          ],
        },
      ],
    },
    {
      title: "Week 2: AI-Driven Planning & User Insights",
      cards: [
        {
          title: "GenAI for Roadmapping & Planning",
          content: [
            "Using GenAI for roadmap generation",
            "Sprint planning and backlog grooming with AI",
            "Integrating GenAI into PM workflows",
          ],
        },
        {
          title: "AI-Driven User Insights",
          content: [
            "Leveraging GenAI for user persona creation",
            "Automating competitor analysis",
            "Synthesizing user feedback with AI",
          ],
        },
      ],
    },
    {
      title: "Week 3: No-Code Tools & AI Agents",
      cards: [
        {
          title: "No-Code GenAI Tools for PMs",
          content: [
            "Introduction to no-code GenAI platforms",
            "Building AI-powered workflows with n8n, Zapier",
            "Automating product ops tasks",
          ],
        },
        {
          title: "AI Agent Building for PMs",
          content: [
            "Designing and deploying GenAI agents",
            "Integrating agents into product workflows",
            "Best practices for PMs using AI agents",
          ],
        },
      ],
    },
    {
      title: "Week 4: Communication & Responsible AI",
      cards: [
        {
          title: "GenAI for Stakeholder Communication",
          content: [
            "Automating stakeholder updates with GenAI",
            "AI-powered reporting and dashboards",
            "Personalizing communication at scale",
          ],
        },
        {
          title: "Responsible AI for PMs",
          content: [
            "Ethical considerations in GenAI for products",
            "Ensuring compliance and transparency",
            "Building trust with AI-driven features",
          ],
        },
      ],
    },
    {
      title: "Week 5: Capstone Project Development",
      cards: [
        {
          title: "Project Planning & Development",
          content: [
            "Define a product challenge and GenAI solution",
            "Develop and test your GenAI-powered feature",
            "Iterate based on feedback and testing",
          ],
        },
        {
          title: "Project Implementation & Testing",
          content: [
            "Build working prototype or detailed mockup",
            "Conduct user testing and gather feedback",
            "Refine solution based on insights",
          ],
        },
      ],
    },
    {
      title: "Week 6: Project Presentation & Career Growth",
      cards: [
        {
          title: "Capstone Project Showcase",
          content: [
            "Present your project to mentors and peers",
            "Demonstrate impact and learnings",
            "Receive feedback and iterate",
          ],
        },
        {
          title: "Career Acceleration",
          content: [
            "Building your GenAI PM portfolio",
            "Interview prep for AI-focused PM roles",
            "Exploring freelance and consulting opportunities",
          ],
        },
      ],
    },
    {
      title: "Week 7: Advanced GenAI Product Strategies",
      cards: [
        {
          title: "Scaling GenAI Solutions",
          content: [
            "Strategies for scaling GenAI features in products",
            "Managing AI-driven product roadmaps",
            "Cross-functional collaboration for AI initiatives",
          ],
        },
        {
          title: "AI Product Metrics & Analytics",
          content: [
            "Defining success metrics for GenAI features",
            "Using analytics to improve AI products",
            "A/B testing and user feedback loops",
          ],
        },
      ],
    },
    {
      title: "Week 8: Industry Applications & Future Trends",
      cards: [
        {
          title: "GenAI in Different Industries",
          content: [
            "Case studies: GenAI in healthcare, finance, and more",
            "Adapting GenAI solutions to industry needs",
            "Compliance and ethical considerations by sector",
          ],
        },
        {
          title: "Future of Product Management with AI",
          content: [
            "Emerging trends in GenAI and product management",
            "Preparing for the next wave of AI innovation",
            "Building a long-term GenAI career plan",
          ],
        },
      ],
    },
  ];

  const getWeekIcon = (weekIndex: number) => {
    const icons = [BookOpen, Brain, Cloud, Users, Rocket, Calendar];
    return icons[weekIndex] || BookOpen;
  };

  const nextWeek = () => {
    setActiveWeek((prev) => (prev + 1) % weeks.length);
  };

  const prevWeek = () => {
    setActiveWeek((prev) => (prev - 1 + weeks.length) % weeks.length);
  };

  const WeekIcon = getWeekIcon(activeWeek);

  return (
    <section className="relative py-12 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-0 right-0 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-3 relative z-10">
        <div className="mx-auto flex flex-col gap-4">
          {/* Section Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">Learning Journey</span>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-white mb-3">Your GenAI PM Learning Path</p>
            <p className="text-gray-300 text-lg max-w-2xl">
              An 8-week intensive journey to master GenAI for product management and accelerate your PM career
            </p>
          </div>

          {/* Week Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevWeek}
              className="p-2 rounded-full bg-[#111827] text-white hover:bg-[#1F2937] transition-colors"
              aria-label="Previous week"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              {weeks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWeek(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeWeek === index ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to week ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextWeek}
              className="p-2 rounded-full bg-[#111827] text-white hover:bg-[#1F2937] transition-colors"
              aria-label="Next week"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Current Week Content */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 p-2.5 rounded-lg bg-blue-500/10">
                <WeekIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{weeks[activeWeek].title}</h3>
                <p className="text-gray-300">
                  Week {activeWeek + 1} of 8 - {weeks[activeWeek].cards.length} learning modules
                </p>
              </div>
            </div>

            {/* Cards Grid - Always 2 cards per week */}
            <div className="grid md:grid-cols-2 gap-4">
              {weeks[activeWeek].cards.map((card, cardIndex) => (
                <div 
                  key={cardIndex} 
                  className="bg-[#1F2937]/70 rounded-lg p-4 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:bg-[#1F2937]/90"
                >
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    {card.title}
                  </h4>
                  <ul className="space-y-2">
                    {card.content.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-gray-300 text-sm flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0 mt-2"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
              <span>Week {activeWeek + 1} of 8</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
                    style={{ width: `${((activeWeek + 1) / 8) * 100}%` }}
                  ></div>
                </div>
                <span>{Math.round(((activeWeek + 1) / 8) * 100)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GENLearningJourney;