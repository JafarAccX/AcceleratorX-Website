
import React, { useState } from "react";
import { SiLangchain, SiNvidia, SiHuggingface } from "react-icons/si";
import Season2EnrollmentModal from "./Season2EnrollmentModal";

const Season2Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-orange-500 selection:text-white">
            <Season2EnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow animation-delay-2000"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="relative z-10">
                {/* Navbar Placeholder - if needed, otherwise content wrapper */}

                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">

                    <div className="animate-fade-in-up">
                        {/* Logo/Brand placeholder if not global */}
                        <div className="mb-8 flex justify-center items-center text-2xl font-bold tracking-tight">
                            <span>Accelerator</span><span className="text-blue-500">X</span>
                        </div>

                        <div className="inline-block mb-8">
                            <span className="px-6 py-2 rounded-full border border-orange-500/50 bg-orange-500/10 text-orange-400 font-medium text-sm md:text-base backdrop-blur-sm animate-pulse">
                                BUILD SESSION
                            </span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 animate-title">
                        Gen AI <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-200 via-orange-400 to-amber-500">
                            CRASH COURSE
                        </span>
                    </h1>

                    <div className="max-w-2xl mx-auto mb-12 space-y-4 animate-text">
                        <p className="text-orange-500 text-xl md:text-2xl font-semibold">
                            All Practical. All Live.
                        </p>
                        <p className="text-gray-400 text-lg">
                            Not another theory-heavy course.<br />
                            Not passive learning.
                        </p>
                    </div>



                    <div className="animate-fade-in-up animation-delay-4000">
                        <p className="text-orange-400 mb-6 font-medium">Your AI Crash Course designed for people who are done watching and ready to build.</p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 rounded-full border border-orange-500 text-white font-bold text-lg hover:bg-orange-500 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]"
                        >
                            Just Pure Learning, Pure Building
                        </button>
                    </div>
                </section>


                {/* WHAT NEXT AI BOOM IS EXPECTING */}
                <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
                    {/* Top Header Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-32 text-center relative z-10">
                        What <span className="text-orange-500">Next AI Boom</span> <br />
                        is Expecting?
                    </h2>

                    <div className="relative max-w-5xl mx-auto pb-20">
                        {/* Connecting Line SVG - Desktop */}
                        <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ top: '-40px' }}>
                            <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none" preserveAspectRatio="none">
                                <path d="M 200 80 
                                         L 200 180 
                                         Q 200 230 250 230 
                                         L 700 230
                                         Q 750 230 750 280
                                         L 750 380
                                         Q 750 430 700 430
                                         L 300 430
                                         Q 250 430 250 480
                                         L 250 580
                                         Q 250 630 300 630
                                         L 700 630
                                         Q 750 630 750 680
                                         L 750 750"
                                    stroke="url(#gradient-line)" strokeWidth="2" fill="none" strokeDasharray="8 8" className="opacity-60" />
                                <defs>
                                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                                        <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Steps Container */}
                        <div className="space-y-12 md:space-y-0 relative z-10">

                            {/* Step 1 - Left */}
                            <div className="flex md:justify-start md:pl-20 relative">
                                <div className="hidden md:block absolute right-[60%] top-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316]"></div>
                                <div className="group relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                                    <div className="relative bg-neutral-900 border border-orange-500/30 p-8 rounded-lg w-full md:w-[350px] backdrop-blur-sm hover:border-orange-500/70 transition-all clip-path-polygon">
                                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/50 rounded-tr-lg"></div>
                                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/50 rounded-bl-lg"></div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">Real World AI Understanding</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 - Right */}
                            <div className="flex md:justify-end md:pr-20 md:-mt-10 relative">
                                <div className="group relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                                    <div className="relative bg-neutral-900 border border-orange-500/30 p-8 rounded-lg w-full md:w-[350px] backdrop-blur-sm hover:border-orange-500/70 transition-all">
                                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/50 rounded-tl-lg"></div>
                                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/50 rounded-br-lg"></div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white text-right">Building AI Agents</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 - Left */}
                            <div className="flex md:justify-start md:pl-32 md:-mt-10 relative">
                                <div className="group relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                                    <div className="relative bg-neutral-900 border border-orange-500/30 p-8 rounded-lg w-full md:w-[350px] backdrop-blur-sm hover:border-orange-500/70 transition-all">
                                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/50 rounded-tr-lg"></div>
                                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/50 rounded-bl-lg"></div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">Solving Different Problems with AI</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 - Right */}
                            <div className="flex md:justify-end md:pr-10 md:-mt-10 relative">
                                <div className="group relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                                    <div className="relative bg-neutral-900 border border-orange-500/30 p-8 rounded-lg w-full md:w-[400px] backdrop-blur-sm hover:border-orange-500/70 transition-all">
                                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/50 rounded-tl-lg"></div>
                                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/50 rounded-br-lg"></div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white text-right">Understanding of Tools, Frameworks to Build Agents</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* WHAT YOU'LL BUILD */}
                <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        What <span className="text-orange-500">You'll Build</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-16">(ALL LIVE, ALL PRACTICAL)</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            <ListItem number="1" text="Understanding LLMs & LLM Fine-Tuning" />
                            <ListItem number="2" text="Understanding LLMs & LLM Fine-Tuning — Part 2" />

                            <div className="py-4"></div>

                            <ListItem number="3" text="Build with CrewAI" />
                            <ListItem number="4" text="Practical Multi-AI Agents & Advanced Use Cases (CrewAI)" />

                            <div className="py-4"></div>

                            <ListItem number="5" text="Building MCP Servers" />
                            <ListItem number="6" text="Building MCP-Supported Apps (Exclusive)" />

                            <div className="py-4"></div>

                            <ListItem number="7" text="ACP: Building Agents That Communicate with Each Other" />
                            <ListItem number="8" text="Building AI Browser Agents" />
                            <ListItem number="9" text="Building AI Coding Agents (Hugging Face)" icon={<SiHuggingface className="inline ml-2 text-yellow-400" />} />
                        </div>

                        <div className="space-y-8">
                            <ListItem number="10" text="Building AI Agents with LangGraph" />
                            <ListItem number="11" text="Introduction to Agent-Building Platform — AutoGen" />

                            <div className="py-4"></div>

                            <ListItem number="12" text="LangChain — Part 1" icon={<SiLangchain className="inline ml-2 text-white" />} />
                            <ListItem number="13" text="LangChain — Part 2" />
                            <ListItem number="14" text="Building AI Applications with LangChain" />

                            <div className="py-4"></div>

                            <ListItem number="15" text="NAT Toolkit (NVIDIA) — With Real Examples" icon={<SiNvidia className="inline ml-2 text-green-500" />} />
                            <ListItem number="16" text="Building Live Voice Agents using Google ADK" />

                            <div className="py-4"></div>

                            <ListItem number="17" text="Learner Bootcamp — 1" />
                            <ListItem number="18" text="Learner Bootcamp — 2" />
                            <ListItem number="19" text="Learner Bootcamp — 3" />
                            <ListItem number="20" text="Learner Bootcamp — 4" />
                        </div>
                    </div>
                </section>

                {/* PRICING SECTION */}
                <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-orange-500">PRICING</h2>
                    <p className="text-xl text-gray-400 mb-12">(NO NONSENSE)</p>

                    <div className="relative mb-12 inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl blur opacity-30"></div>
                        <div className="relative bg-neutral-900 border border-orange-500/50 rounded-xl p-8 md:p-12 hover:border-orange-500 transition-all">
                            <div className="absolute top-0 right-0 px-4 py-1 bg-orange-500 text-black text-sm font-bold rounded-bl-xl rounded-tr-xl">
                                Limited Seats Only
                            </div>
                            <p className="text-2xl text-white mb-4">For just</p>
                            <div className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200 mb-6 font-mono">
                                ₹4,499 + GST
                            </div>
                            <p className="text-orange-400 text-lg">
                                ≈ ₹250 per session <span className="text-gray-500 text-sm">(less than your one Swiggy order)</span>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <p className="text-gray-300 text-lg">
                            That's it. <br />
                            Existing learners get <span className="text-orange-500 font-bold">add-on scholarships.</span>
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-md transition-all"
                        >
                            <div className="absolute inset-0 w-0 bg-orange-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-orange-500 text-xl font-bold group-hover:text-black uppercase tracking-widest border border-orange-500 px-10 py-4 rounded-md">
                                Enroll Now
                            </span>
                        </button>

                        <div className="pt-8 flex items-center justify-center gap-4 text-orange-500 animate-pulse">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <p className="font-semibold tracking-widest">REGISTRATIONS OPEN</p>
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

const ListItem = ({ number, text, icon }: { number: string; text: string; icon?: React.ReactNode }) => (
    <div className="flex items-start gap-4 group">
        <span className="text-orange-500 font-bold text-xl min-w-[2rem]">{number}.</span>
        <span className="text-gray-300 text-lg group-hover:text-white transition-colors cursor-default">
            {text} {icon}
        </span>
    </div>
);

export default Season2Page;
