
import { Search, Globe, Cpu, Zap, Layout, Users, TrendingUp } from "lucide-react";
import { WorkshopProvider, useWorkshop } from "../../context/WorkshopContext";
import { SEO } from "../../components/SEO";
import WSFormFree from "../landingpage/workshopAIDM/WSFormFree";
import { FaCalendarAlt, FaClock, FaUserGraduate } from "react-icons/fa";

// Section 1: Hero
const WSHeroSeason2 = () => {
    const { zoomMeetingDetails } = useWorkshop();


    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-[#050A14] via-[#0A0F1F] to-[#050A14]">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>
            <div className="absolute top-20 right-10 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-20 w-full bg-black/30 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="w-36 md:w-44">
                        <img src="/redesign/logo-bg-black.webp" alt="AcceleratorX logo" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20">
                            <span className="text-orange-400 font-medium text-sm">Workshop on AI Browser Agents</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-amber-100">
                                Building AI Browsers Workshop
                            </span>
                        </h1>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300 max-w-xl">
                                Learn to build autonomous agents that can navigate the web, interact with complex apps, and automate workflows just like a human.
                            </p>
                            <p className="text-base text-gray-400 max-w-xl font-normal leading-relaxed">
                                In this live session, we'll dive deep into Browser-use, MCP, and vision-based agents. You'll learn how to connect LLMs to real-time browser environments to automate research, testing, and multi-step web tasks.
                            </p>
                        </div>

                        <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-lg border border-orange-500/20">
                            <div className="text-yellow-400 text-sm font-medium">
                                Master Agentic Web Automation — Build Skills for the Future of AI
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mt-6">
                            {[
                                { icon: <Zap className="text-orange-400 mb-1" size={20} />, label: "Duration", value: "2 Hours" },
                                { icon: <FaCalendarAlt className="text-orange-400 mb-1" size={20} />, label: "Date", value: "14th Mar" },
                                { icon: <FaClock className="text-orange-400 mb-1" size={20} />, label: "Time", value: "4:00 PM IST" },
                                { icon: <FaUserGraduate className="text-orange-400 mb-1" size={20} />, label: "Level", value: "Intermediate" },
                            ].map((item, index) => (
                                <div key={index} className="group bg-gradient-to-br from-[#1a100a]/80 to-[#150a06]/60 backdrop-blur-xl rounded-lg p-3 border border-orange-500/10 hover:border-orange-400/30 transition-all duration-300 flex flex-col items-center">
                                    {item.icon}
                                    <p className="text-gray-400 text-[10px] uppercase tracking-wider">{item.label}</p>
                                    <p className="text-white font-semibold text-xs sm:text-sm group-hover:text-orange-300 transition-colors text-center">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12">
                        <div className="relative mx-auto max-w-md">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-xl blur-md"></div>
                            <div className="relative bg-[#111827] p-5 rounded-xl shadow-xl border border-white/5">
                                <div id="workshop-registration-form">
                                    <WSFormFree />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 2: Intro
const WSIntroSeason2 = () => (
    <section className="bg-[#050A14] py-12">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Build <span className="text-orange-500">Autonomous</span> Web Agents
                    </h2>
                    <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto">
                        Stop writing rigid scripts. Start building agents that understand the web, see elements, and make decisions in real-time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[
                        { value: "100%", label: "Hands-on Workshop" },
                        { value: "Free", label: "Live Session" },
                        { value: "Modern", label: "Agentic Frameworks" },
                    ].map((stat, index) => (
                        <div key={index} className="bg-[#0A1020] p-4 rounded-lg border border-orange-900/20 text-center">
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[
                        {
                            icon: <Globe className="w-5 h-5 text-orange-500" />,
                            title: "Browser-use Mastery",
                            description: "Master the leading open-source framework for AI-controlled browsers."
                        },
                        {
                            icon: <Cpu className="w-5 h-5 text-orange-500" />,
                            title: "MCP Integration",
                            description: "Connect your agents to external tools via Model Context Protocol."
                        },
                        {
                            icon: <Search className="w-5 h-5 text-orange-500" />,
                            title: "Vision-Based Navigation",
                            description: "Teach agents to interact with web elements just like a human eye would."
                        },
                    ].map((feature, index) => (
                        <div key={index} className="bg-[#0A1020] rounded-lg p-4 flex flex-col items-start gap-3 border border-orange-900/20">
                            <div className="rounded-md bg-orange-500/10 p-2">{feature.icon}</div>
                            <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// Section 3: About
const WSAboutSeason2 = () => {
    const tools = [
        { name: "Browser-use", img: "https://raw.githubusercontent.com/browser-use/browser-use/main/docs/static/img/logo.png" },
        { name: "LangChain", img: "/assets/genAITools/langchain.webp" },
        { name: "OpenAI", img: "/assets/genAITools/gpt4.webp" },
        { name: "Claude", img: "/assets/genAITools/claude.webp" },
        { name: "Playwright", img: "https://playwright.dev/img/playwright-logo.svg" },
    ];

    return (
        <div className="bg-[#050A14] py-12 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-3/5 space-y-6">
                        <div className="bg-[#0A1020] rounded-lg border border-orange-900/20 overflow-hidden p-6">
                            <div className="inline-flex items-center gap-2 bg-orange-500/10 rounded-md px-3 py-1 mb-4">
                                <span className="text-orange-400 text-sm font-medium">Workshop Highlights</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-[#111827] p-4 rounded-md border border-orange-500/10">
                                    <h3 className="font-semibold text-white text-lg mb-3">Core Modules</h3>
                                    <ul className="space-y-2">
                                        {["Architecture of Web Agents", "Setting up Browser-use", "Connecting LLMs to Browsers", "Handling Dynamic Content", "Multi-Agent Coordination"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <span className="text-xs bg-orange-500/20 p-1 rounded-sm">{i + 1}</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-[#111827] p-4 rounded-md border border-amber-500/10">
                                    <h3 className="font-semibold text-white text-lg mb-3">Learning Outcomes</h3>
                                    <ul className="space-y-2">
                                        {["Build a Web Explorer Agent", "Automate Data Extraction", "Perform Visual Web Audits", "Integrate MCP Servers", "Deploy to Cloud Environments"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <span className="text-xs bg-amber-500/20 p-1 rounded-sm text-amber-400">{i + 1}</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/5 space-y-6">
                        <div className="bg-gradient-to-r from-orange-900/60 to-amber-900/60 rounded-lg p-5 text-white shadow-md">
                            <div className="flex items-center gap-3 mb-3">
                                <Search className="w-6 h-6" />
                                <h3 className="text-xl font-bold">Interactive Learning</h3>
                            </div>
                            <p className="text-gray-200 mb-3 text-sm">Build real agents during the live session and get hands-on experience with Browser-use.</p>
                            <div className="bg-black/20 p-3 rounded-md text-xs text-gray-300 border border-white/10">
                                ⚠️ Recording will be shared with registrants.
                            </div>
                        </div>
                        <div className="bg-[#0A1020] rounded-lg p-5 border border-orange-900/20">
                            <h3 className="text-lg font-bold text-white mb-3">Tools Highlight</h3>
                            <div className="flex flex-wrap gap-4">
                                {tools.map((tool, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1">
                                        <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center">
                                            <img src={tool.img} alt={tool.name} className="w-full h-auto object-contain" />
                                        </div>
                                        <span className="text-[10px] text-gray-400">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 4: Who Should Enroll
const WSWhoSeason2 = () => (
    <section className="bg-[#050A14] py-12">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 rounded-md px-3 py-1.5 mb-3">
                        <Users className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-400 text-sm font-medium">Built for Builders</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Who is this <span className="text-orange-500">Workshop</span> for?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { icon: <Cpu />, title: "Developers", desc: "Build agentic browser workflows." },
                        { icon: <Layout />, title: "Product Managers", desc: "Understand next-gen automation." },
                        { icon: <Search />, title: "Data Engineers", desc: "Scale web data extraction." },
                        { icon: <TrendingUp />, title: "Growth Hackers", desc: "Automate cross-platform tasks." }
                    ].map((item, i) => (
                        <div key={i} className="p-5 rounded-lg bg-white/5 border border-white/10 hover:border-orange-500/20 transition-all">
                            <div className="p-2 rounded-md bg-orange-500/10 w-fit mb-3 text-orange-400">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// Section 5: Mentor
// const WSMentorSeason2 = () => (
//     <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
//         <div className="relative container mx-auto px-4">
//             <div className="text-center mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
//                     Learn From the Builders
//                 </h2>
//                 <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mt-4" />
//             </div>
//             <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 max-w-screen-sm mx-auto">
//                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                     <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-orange-500/30">
//                         <img src="/assets/mentor/dummyuser.webp" alt="Aditya Kachave" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="flex-1 text-center sm:text-left">
//                         <h3 className="text-xl font-bold text-white mb-2">Aditya Kachave</h3>
//                         <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
//                             <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-orange-500/10 text-orange-400 border border-orange-500/20">
//                                 <Briefcase className="w-3 h-3" /> 5+ Years Experience
//                             </span>
//                         </div>
//                         <div className="space-y-2 text-gray-300 text-sm">
//                             <div className="flex items-start gap-2">
//                                 <Sparkles className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
//                                 <p>AI Infrastructure & Automation Lead</p>
//                             </div>
//                             <div className="flex items-start gap-2">
//                                 <Award className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
//                                 <p>Helping 2000+ builders master agentic systems.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// Section 6: CTA
const WSCTASeason2 = () => (
    <div className="bg-[#050A14] py-12">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#0A1020] rounded-lg p-8 border border-orange-900/20 shadow-md text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build AI Browsers?</h2>
                <p className="text-orange-400 font-medium mb-8">Register Now — Start Your Agentic Transformation</p>
                <button
                    onClick={() => document.getElementById("workshop-registration-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md transition-all"
                >
                    Register Now
                </button>
            </div>
        </div>
    </div>
);

const Season2Page = () => {
    return (
        <WorkshopProvider>
            <div className="min-h-screen bg-[#050A14] text-white font-sans overflow-x-hidden selection:bg-orange-500 selection:text-white">
                <SEO title="AI Browsers Workshop | AcceleratorX" description="Join the Workshop on Building AI Browsers and Autonomous Web Agents." />
                <WSHeroSeason2 />
                <WSIntroSeason2 />
                <WSAboutSeason2 />
                <WSWhoSeason2 />
                {/* <WSMentorSeason2 /> */}
                <WSCTASeason2 />
            </div>
        </WorkshopProvider>
    );
};

export default Season2Page;
