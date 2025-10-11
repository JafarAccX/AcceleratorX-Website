import { f as createLucideIcon, r as reactExports, l as useCourseContext, j as jsxRuntimeExports, k as motion } from "./main-BsE_pOwq.js";
import EnrollmentModal from "./EnrollmentModal-CSsNaZvG.js";
import { B as Brain } from "./brain-Bt4nA7al.js";
import { Z as Zap } from "./zap-CRdiihfT.js";
import { R as Rocket } from "./rocket-Ct8EqRGm.js";
import "./enrollmentApi-Cj02VbS1.js";
import "./metaPixel-DTLSMIdz.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BarChart3 = createLucideIcon("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const modules = [
  {
    title: "Month 1 — Foundations of AI in Digital Marketing",
    weeks: [
      {
        title: "Week 1 — Digital Marketing Foundations with AI",
        topics: [
          "1.1 Introduction to Digital Marketing & AI's Role (Tools: ChatGPT, Perplexity AI)",
          "1.2 Consumer Journey & Funnel Mapping (Tools: Funnelytics, Notion AI)",
          "1.3 Market Research with AI (Marketing Lab) (Tools: ChatGPT, Google Trends, Exploding Topics)"
        ]
      },
      {
        title: "Week 2 — AI-Powered Content Creation (Text + SEO)",
        topics: [
          "2.1 SEO Basics & AI for Keyword Research (Tools: Ubersuggest, SEMrush (free tier), ChatGPT)",
          "2.2 Blog Writing with AI Prompts (Tools: Jasper AI, ChatGPT)",
          "2.3 On-Page SEO & Content Optimization (Tools: SurferSEO, Yoast SEO (demo))"
        ]
      },
      {
        title: "Week 3 — Visual Storytelling with Generative AI",
        topics: [
          "3.1 AI Image Generation for Ads & Social Media",
          "3.2 Creative Design Workflows (Tools: Canva AI, Adobe Firefly)",
          "3.3 Mid-Level Creative Projects (Tools: Runway Gen-3, Kaiber, Leonardo AI, Ideogram, Stable Diffusion XL, Nano Banana)"
        ]
      },
      {
        title: "Week 4 — Video & Audio Marketing with AI",
        topics: [
          "4.1 AI Video Creation & Editing (Tools: Runway Gen-3, Pika Labs, Veo 3)",
          "4.2 Short-Form Content for TikTok/Reels (Tools: CapCut AI, OpusClip)",
          "4.3 AI Voice & Podcasting (Tools: ElevenLabs, Descript)"
        ]
      }
    ],
    icon: Brain
  },
  {
    title: "Month 2 — Growth Channels & Paid Media with AI",
    weeks: [
      {
        title: "Week 5 — Paid Ads with AI",
        topics: [
          "5.1 Google Ads Planning with AI (Tools: Google Ads, ChatGPT)",
          "5.2 Meta Ads Campaign Drafting (Tools: Meta Ads Manager, Canva AI)",
          "5.3 AI for Ad Copywriting & A/B Testing (Tools: Jasper, Copy.ai, GrowthBook)"
        ]
      },
      {
        title: "Week 6 — Social Media Growth & Influencer Marketing",
        topics: [
          "6.1 Social Media Strategy with AI (Tools: Buffer, Metricool, ChatGPT)",
          "6.2 Influencer Discovery & Outreach (Tools: Modash, Nano Banana)",
          "6.3 Engagement Optimization with AI (Tools: Predis.ai, Lately.ai)"
        ]
      },
      {
        title: "Week 7 — Data Analytics for Marketers",
        topics: [
          "7.1 Google Analytics 4 (GA4) Basics (Tools: GA4 Demo, Looker Studio)",
          "7.2 Performance Tracking & KPI Dashboards (Tools: Looker Studio, Tableau Public)",
          "7.3 AI-Powered Insights & Forecasting (Tools: Obviously.ai, ChatGPT Code Interpreter)"
        ]
      },
      {
        title: "Week 8 — Conversion Rate Optimization (CRO)",
        topics: [
          "8.1 Landing Page Design Principles (Tools: Figma, Canva AI)",
          "8.2 Heatmaps & User Behavior (Tools: Hotjar (demo), Microsoft Clarity)",
          "8.3 AI for CRO Recommendations (Tools: ChatGPT, Jasper, GrowthBook)"
        ]
      }
    ],
    icon: BarChart3
  },
  {
    title: "Month 3 — Automation, Email, and E-commerce AI",
    weeks: [
      {
        title: "Week 9 — Marketing Automation & Rollout AI (Part 1)",
        topics: [
          "9.1 Introduction to Workflow Automation (Tools: n8n, Make)",
          "9.2 Automated Lead Capture & CRM Updates (Tools: HubSpot CRM (Free), n8n)",
          "9.3 Rollout AI for Marketing Automation (Hands-On) (Tools: Rollout AI, n8n)"
        ]
      },
      {
        title: "Week 10 — Email & Drip Marketing",
        topics: [
          "10.1 Email Marketing Fundamentals (Tools: Mailchimp, HubSpot)",
          "10.2 AI Copywriting for Email Sequences (Tools: Jasper, Copy.ai)",
          "10.3 A/B Testing & Personalization (Tools: Mailchimp AI, Mutiny)"
        ]
      },
      {
        title: "Week 11 — B2B Growth & LinkedIn Marketing",
        topics: [
          "11.1 LinkedIn Lead Generation with AI (Tools: Apollo.io, Sales Navigator, ChatGPT)",
          "11.2 Cold Outreach Copywriting (Tools: Lavender AI, ChatGPT)",
          "11.3 Automating LinkedIn Campaigns (Tools: Phantombuster, Clay)"
        ]
      },
      {
        title: "Week 12 — E-commerce Marketing with AI",
        topics: [
          "12.1 AI-Powered Product Descriptions (Tools: Jasper, ChatGPT)",
          "12.2 Dynamic Pricing & Personalization (Tools: Obviously.ai, Mutiny)",
          "12.3 Retargeting Campaigns (Tools: Google Ads Remarketing, Meta Pixel)"
        ]
      }
    ],
    icon: Zap
  },
  {
    title: "Month 4 — AI Agents, Growth & Career Launch",
    weeks: [
      {
        title: "Week 13 — Vibe Coding & AI Marketing Agents (Part 1)",
        topics: [
          "13.1 Vibe Coding — Building Agents with Prompts (Tools: Vibe Coding)",
          "13.2 Multi-Agent Marketing Workflows (No-Code) (Tools: CrewAI, AutoGen (GUI mode))",
          "13.3 AI Agent Lab — Automating 'Research Copy Schedule' (Tools: Vibe Coding, n8n Integration)"
        ]
      },
      {
        title: "Week 14 — Rollout AI & AI Marketing Agents (Part 2)",
        topics: [
          "14.1 Rollout AI Deep Dive — Campaign Builder (Tools: Rollout AI)",
          "14.2 Advanced Agent Collaboration — Linking Research, Creative & Analytics Agents (Tools: Rollout AI + n8n)",
          "14.3 Case Simulation — Launching a Multi-Agent Ad Campaign (Tools: Rollout AI, Nano Banana)"
        ]
      },
      {
        title: "Week 15 — Growth Hacking, Storytelling & Experimentation",
        topics: [
          "15.1 Growth Loops & Viral Mechanics (Tools: ChatGPT, Notion AI)",
          "15.2 Creative Storytelling with AI (Tools: Sora, Pika Labs, Runway)",
          "15.3 Rapid A/B Testing & Case Studies (Tools: GrowthBook, Google Optimize (demo))"
        ]
      },
      {
        title: "Week 16 — Career Prep, Capstone & Showcase",
        topics: [
          "16.1 Building a Marketing Portfolio (Tools: Notion, Canva)",
          "16.2 Freelancing & Personal Branding (Tools: Taplio, AuthoredUp, Fiverr, Upwork)",
          "16.3 Final Capstone Showcase & Feedback (Tools: Zoom, Canva, Notion Portfolio)"
        ]
      }
    ],
    icon: Rocket
  }
];
const AIDMRoadmap = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const { setSelectedCourse } = useCourseContext();
  const handleModalSubmit = () => {
  };
  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-400 mb-4", children: "Learning Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338] mb-6", children: [
          "From Scratch to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338]", children: "AI-First Marketer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "A structured 16-week program designed to transform you into an AI-powered marketing professional" })
      ] }),
      modules.map((module, moduleIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-8",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-[#5CB338]", children: module.title })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2  gap-6", children: module.weeks.map((week, weekIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: weekIndex * 0.1 },
            className: "p-4 bg-[#0F0F0F] rounded-xl border border-white/10 hover:border-[#5CB338]/50 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-white mb-2", children: week.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside text-gray-400 text-sm space-y-1", children: week.topics.map((topic, topicIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: topic }, topicIndex)) })
            ]
          },
          weekIndex
        )) })
      ] }, moduleIndex)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          onClick: handleEnrollClick,
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          className: "bg-[#5CB338] relative hover:bg-[#5CB338]/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-[#5CB338]/25",
          children: "Download Full Curriculum"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false),
        onSubmit: handleModalSubmit
      }
    )
  ] });
};
export {
  AIDMRoadmap as default
};
