import  { useState } from "react";
import { Calendar, BookOpen, Cloud, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import EnrollmentModal from "../../../components/EnrollmentModal";

interface MonthData {
  title: string;
  goal: string;
  weeks: {
    title: string;
    goal: string;
    content: string[];
    assignments?: string[];
  }[];
}

const GENLearningJourneyAd = () => {
  const [activeMonth, setActiveMonth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const months: MonthData[] = [
    {
      title: "Month 1: Foundations of Generative AI",
      goal: "Build a strong foundation in Generative AI concepts, tools, and practical applications.",
      weeks: [
        {
          title: "WEEK 1 – Foundations of Generative AI",
          goal: "Understand what GenAI is, how it works, and explore hands-on creative tools.",
          content: [
            "Session 1: Introduction to Generative AI",
            "Session 2: Exploring AI Ecosystem Tools (2025 Stack)",
            "Session 3: AI for Everyday Work",
            "Mini Project: AI Productivity Toolkit — Create 5 real-world prompts that automate your work."
          ],
        },
        {
          title: "WEEK 2 – Deep Dive into LLMs & Prompt Mastery",
          goal: "Understand how large language models actually 'think' and how to guide them precisely.",
          content: [
            "Session 4: Inside the Mind of an LLM",
            "Session 5: Prompt Engineering to Context Engineering",
            "Session 6: Practical Prompt Lab (Agent Communication)"
          ],
        },
        {
          title: "WEEK 3 – Image, Video, and Visual Generation",
          goal: "Use AI for creative production — image and video generation.",
          content: [
            "Session 7: Image Generation: Diffusion Models",
            "Session 8: AI Video Generation",
            "Session 9: Hands-on Visual AI Lab"
          ],
        },
        {
          title: "WEEK 4 – Audio, Voice & Music Generation",
          goal: "Understand and apply AI to voice and sound.",
          content: [
            "Session 10: AI Voice Synthesis & TTS",
            "Session 11: AI Music Creation",
            "Session 12: Lab + Project"
          ],
        },
      ],
    },
    {
      title: "Month 2: Machine Learning & AI Ethics",
      goal: "Learn machine learning fundamentals, model fine-tuning, and responsible AI practices.",
      weeks: [
        {
          title: "WEEK 5 – Machine Learning & Model Fine-Tuning",
          goal: "Learn how LLMs are trained and fine-tune small models for your domain.",
          content: [
            "Session 13: Basics of ML & DL Simplified",
            "Session 14: Fine-Tuning Open Models (LoRA, QLoRA)",
            "Session 15: Lab: Training a Mini-Model"
          ],
        },
        {
          title: "WEEK 6 – AI Ethics, Bias & Responsible Design",
          goal: "Learn safe and ethical AI building for compliance and trustworthiness.",
          content: [
            "Session 16: AI Ethics & Global Regulations (EU AI Act, India DPDP, US AI Safety Rules)",
            "Session 17: Detecting & Reducing Bias",
            "Session 18: Practical Exercise: Audit an existing AI system for fairness"
          ],
        },
        {
          title: "WEEK 7 – Vibe Coding: Assisted AI Development (I)",
          goal: "Build applications visually with the help of AI pair coders.",
          content: [
            "Session 19: Intro to Vibe Coding & Tools",
            "Session 20: Hands-On: Building with Cursor AI & Windsurf",
            "Session 21: Project Build Live"
          ],
        },
        {
          title: "WEEK 8 – Vibe Coding (II) & Model Deployment",
          goal: "Learn to deploy your projects and host them publicly.",
          content: [
            "Session 22: Replit, Bolt.new, and Lovable for Quick Deployment",
            "Session 23: Deploying to Cloud",
            "Session 24: Monitoring & Optimization"
          ],
        },
      ],
    },
    {
      title: "Month 3: AI Agents & Automation",
      goal: "Master AI agent building, multi-agent systems, and workflow automation.",
      weeks: [
        {
          title: "WEEK 9 – Introduction to AI Agents",
          goal: "Move from models → autonomous reasoning systems.",
          content: [
            "Session 25: What Are AI Agents? Real world examples",
            "Session 26: Tools for Building Agents",
            "Session 27: Lab: Build Your First AI Agent (LangChain)"
          ],
        },
        {
          title: "WEEK 10 – Building AI Agents (CrewAI & LangGraph Live)",
          goal: "Build a multi-step reasoning agent.",
          content: [
            "Session 28 (Live Build): CrewAI Team of Agent",
            "Session 29: LangGraph Visual Agent Building",
            "Session 30: Building MCP Server, Intro To ACP"
          ],
        },
        {
          title: "WEEK 11 – Multi-Agent Systems & Real-World Use Cases",
          goal: "Create complex automations involving multiple agents.",
          content: [
            "Session 31: Multi-Agent Collaboration Patterns",
            "Session 32: APIs and Databases with Agents",
            "Session 33: Mini Project: 'Customer Support Crew' – 3-agent system (intake → research → response)"
          ],
        },
        {
          title: "WEEK 12 – AI Automation Using n8n",
          goal: "Automate workflows visually and connect your AI models to tasks.",
          content: [
            "Session 34: Intro to n8n & Node Logic",
            "Session 35: n8n workflow - 1",
            "Session 36: n8n Lab"
          ],
        },
      ],
    },
    {
      title: "Month 4: Advanced Automation & Capstone",
      goal: "Combine all skills for full automation solutions and complete your capstone project.",
      weeks: [
        {
          title: "WEEK 13 – Full Automation + Integrations",
          goal: "Combine AI + Agents + Automation into deployable solutions.",
          content: [
            "Session 37: n8n workflow - 2",
            "Session 38: Flowise - 1",
            "Session 39: Mini Project Discussion: 'AI Copilot'"
          ],
        },
        {
          title: "WEEK 14 – Capstone & Future Skills",
          goal: "Build a deployable project, present, and get feedback.",
          content: [
            "Session 40: Demo Day & Career Mapping"
          ],
        },
      ],
    },
  ];

  const icons = {
    month1: BookOpen,
    month2: Cloud,
    month3: Rocket,
    month4: Rocket,
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Your Path to AI Mastery</h2>
            <p className="text-gray-300 text-lg max-w-2xl">
               A comprehensive 14-week program covering Generative AI, AI Agents, and Automation
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
                  <h4 className="text-lg font-semibold text-white mb-2">{week.title}</h4>
                  <p className="text-blue-300 text-sm mb-3 italic">{week.goal}</p>
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
      {/* CTA Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-300 text-lg mb-6">Ready to start your AI learning journey?</p>
        <button
          onClick={handleModalOpen}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
        >
          <Rocket className="w-5 h-5 mr-2" />
          Begin Your Journey
        </button>
      </div>
      <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} />
    </section>
  );
};

export default GENLearningJourneyAd;
