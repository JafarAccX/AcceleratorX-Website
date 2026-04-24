import {
    Users,
    Brain,
    Zap,
    Layout,
    Code2,
    Terminal,
    Database
} from "lucide-react";
import {
    FaCalendarAlt,
    FaClock,
    FaUserGraduate
} from "react-icons/fa";
import { WorkshopProvider } from "../../context/WorkshopContext";
import { SEO } from "../../components/seo/SEO";
import WSFormFree from "../landingpage/workshopAIDM/WSFormFree";

// Section 1: Hero
const WSHeroCodingAgents = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-[#050A14] via-[#0A0F1F] to-[#050A14]">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>
            <div className="absolute top-20 right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-20 w-full bg-black/30 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="w-48 md:w-64">
                        <img src="/assets/accelerator.png" alt="AcceleratorX logo" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                            <span className="text-yellow-400 font-medium text-sm">Workshop on AI Coding Agents</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-100">
                                Building AI Coding Agents with Hugging Face
                            </span>
                        </h1>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300 max-w-xl">
                                Harness the power of Hugging Face and Open Source LLMs to build autonomous coding agents that write, test, and debug code.
                            </p>
                            <p className="text-base text-gray-400 max-w-xl font-normal leading-relaxed">
                                In this live session, you'll learn how to use smolagents, Transformers, and specialized coding models. We'll build an agent capable of solving complex programming tasks and integrating with local development tools.
                            </p>
                        </div>

                        <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
                            <div className="text-blue-400 text-sm font-medium">
                                Master Open Source AI — Build Autonomous Coding Workflows
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mt-6">
                            {[
                                { icon: <Zap className="text-blue-400 mb-1" size={20} />, label: "Duration", value: "2 Hours" },
                                { icon: <FaCalendarAlt className="text-blue-400 mb-1" size={20} />, label: "Date", value: "15th Mar" },
                                { icon: <FaClock className="text-blue-400 mb-1" size={20} />, label: "Time", value: "4:00 PM IST" },
                                { icon: <FaUserGraduate className="text-blue-400 mb-1" size={20} />, label: "Level", value: "Intermediate" },
                            ].map((item, index) => (
                                <div key={index} className="group bg-gradient-to-br from-[#0a101a]/80 to-[#060a15]/60 backdrop-blur-xl rounded-lg p-3 border border-blue-500/10 hover:border-blue-400/30 transition-all duration-300 flex flex-col items-center">
                                    {item.icon}
                                    <p className="text-gray-400 text-[10px] uppercase tracking-wider">{item.label}</p>
                                    <p className="text-white font-semibold text-xs sm:text-sm group-hover:text-blue-300 transition-colors text-center">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12">
                        <div className="relative mx-auto max-w-md">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-xl blur-md"></div>
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
const WSIntroCodingAgents = () => (
    <section className="bg-[#050A14] py-12">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        The Future of <span className="text-blue-500">Autonomous</span> Coding
                    </h2>
                    <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto">
                        Stop using just chat. Build agents that have tools, can run code, and iteratively improve their own outputs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[
                        { value: "100%", label: "Live Code-Along" },
                        { value: "HF", label: "Open Source Tech" },
                        { value: "Agents", label: "Task Automation" },
                    ].map((stat, index) => (
                        <div key={index} className="bg-[#0A1020] p-4 rounded-lg border border-blue-900/20 text-center">
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[
                        {
                            icon: <Code2 className="w-5 h-5 text-blue-500" />,
                            title: "Smolagents Framework",
                            description: "Master Hugging Face's latest framework for building lightweight, powerful agents."
                        },
                        {
                            icon: <Database className="w-5 h-5 text-blue-500" />,
                            title: "Hugging Face Hub",
                            description: "Learn to select and implement specialized coding models for your agents."
                        },
                        {
                            icon: <Terminal className="w-5 h-5 text-blue-500" />,
                            title: "Tool Integration",
                            description: "Give your agents access to compilers, debuggers, and knowledge bases."
                        },
                    ].map((feature, index) => (
                        <div key={index} className="bg-[#0A1020] rounded-lg p-4 flex flex-col items-start gap-3 border border-blue-900/20">
                            <div className="rounded-md bg-blue-500/10 p-2">{feature.icon}</div>
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
const WSAboutCodingAgents = () => {
    const tools = [
        { name: "Hugging Face", img: "/redesign/advance-gen-ai/tools/Datasets.png", },
        { name: "Python", img: "/redesign/advance-gen-ai/tools/Python.png" },
        { name: "PyTorch", img: "/redesign/advance-gen-ai/tools/pytorch.png" },
        { name: "Transformers", img: "/redesign/advance-gen-ai/tools/Transformers.png" },
    ];

    return (
        <div className="bg-[#050A14] py-12 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-3/5 space-y-6">
                        <div className="bg-[#0A1020] rounded-lg border border-blue-900/20 overflow-hidden p-6">
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-3 py-1 mb-4">
                                <span className="text-blue-400 text-sm font-medium">Workshop Highlights</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-[#111827] p-4 rounded-md border border-blue-500/10">
                                    <h3 className="font-semibold text-white text-lg mb-3">Core Modules</h3>
                                    <ul className="space-y-2">
                                        {["Agentic Workflow Design", "Using Smolagents", "Coding Model Optimization", "Security in Agent Workflows", "Production Deployment"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <span className="text-xs bg-blue-500/20 p-1 rounded-sm">{i + 1}</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-[#111827] p-4 rounded-md border border-indigo-500/10">
                                    <h3 className="font-semibold text-white text-lg mb-3">Learning Outcomes</h3>
                                    <ul className="space-y-2">
                                        {["Build a Coding Assistant", "Implement RAG for Code", "Automate Refactoring Tasks", "Self-Correcting Agent Logic", "Multi-Agent Code Reviews"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <span className="text-xs bg-indigo-500/20 p-1 rounded-sm text-indigo-400">{i + 1}</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/5 space-y-6">
                        <div className="bg-gradient-to-r from-blue-900/60 to-indigo-900/60 rounded-lg p-5 text-white shadow-md">
                            <div className="flex items-center gap-3 mb-3">
                                <Code2 className="w-6 h-6" />
                                <h3 className="text-xl font-bold">Interactive Learning</h3>
                            </div>
                            <p className="text-gray-200 mb-3 text-sm">Build and test coding agents in real-time during the 2-hour live session.</p>

                        </div>
                        <div className=" rounded-lg p-5 border border-blue-900/20">
                            <h3 className="text-lg font-bold text-white mb-3">Tools Highlight</h3>
                            <div className="grid grid-cols-2 gap-1">
                                {tools.map((tool, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1">
                                        <div className=" w-24 h-24 rounded-lg flex items-center justify-center">
                                            <img src={tool.img} alt={tool.name} className="w-full h-auto object-contain" />
                                        </div>
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
const WSWhoCodingAgents = () => (
    <section className="bg-[#050A14] py-12">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-3 py-1.5 mb-3">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 text-sm font-medium">Built for Builders</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Who is this <span className="text-blue-500">Workshop</span> for?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { icon: <Terminal />, title: "Developers", desc: "Build agentic coding workflows." },
                        { icon: <Brain />, title: "AI Engineers", desc: "Implement open source agents." },
                        { icon: <Zap />, title: "DevOps", desc: "Automate code testing and fixes." },
                        { icon: <Layout />, title: "Tech Enthusiasts", desc: "Learn the next wave of coding." }
                    ].map((item, i) => (
                        <div key={i} className="p-5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all">
                            <div className="p-2 rounded-md bg-blue-500/10 w-fit mb-3 text-blue-400">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// Section 6: CTA
const WSCTACodingAgents = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="bg-[#050A14] py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-[#0A1020] rounded-lg p-8 border border-blue-900/20 shadow-md text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build AI Coding Agents?</h2>
                    <p className="text-blue-400 font-medium mb-8">Register Now — Start Your Agentic Coding Transformation</p>
                    <button
                        onClick={() => document.getElementById("workshop-registration-form")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all"
                    >
                        Register Now
                    </button>
                </div>
                {/* Footer section */}
                <div className="mt-8 flex flex-col items-center space-y-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                        <img src="/favicon.svg" alt="AcceleratorX icon" className="h-5 w-5" />
                        <span className="text-white text-sm font-medium">AcceleratorX</span>
                    </div>
                    <p className="text-gray-500 text-xs">{currentYear} AcceleratorX. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

const CodingAgentsPage = () => {
    return (
        <WorkshopProvider>
            <div className="min-h-screen bg-[#050A14] text-white font-sans selection:bg-blue-500 selection:text-white">
                <SEO title="AI Coding Agents Workshop | AcceleratorX" description="Join the Workshop on Building AI Coding Agents with Hugging Face and Open Source models." />
                <WSHeroCodingAgents />
                <WSIntroCodingAgents />
                <WSAboutCodingAgents />
                <WSWhoCodingAgents />
                <WSCTACodingAgents />
            </div>
        </WorkshopProvider>
    );
};

export default CodingAgentsPage;
