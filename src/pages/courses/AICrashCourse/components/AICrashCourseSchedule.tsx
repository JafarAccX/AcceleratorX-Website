

import { Check, Calendar, Briefcase, Clock, Battery } from "lucide-react";

const AICrashCourseSchedule = () => {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-white">

            <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                    Can I <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Manage</span> This With My Job?
                </h2>
                <p className="font-sans text-gray-400 text-lg">
                    You don't need to quit your job to learn AI properly.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">

                {/* Left Column: Benefits */}
                <div className="flex-1 max-w-xl">
                    <h3 className="font-heading text-2xl font-bold mb-8">Designed for Busy Professionals</h3>
                    <div className="space-y-8">
                        <BenefitItem
                            title="Live sessions outside work hours"
                            desc="Scheduled for evenings (8 PM - 10 PM) or weekends."
                        />
                        <BenefitItem
                            title="Recordings always available"
                            desc="Missed a session? Watch high-quality replays anytime."
                        />
                        <BenefitItem
                            title="Clear, structured roadmap"
                            desc="No time wasted searching for what to learn next."
                        />
                        <BenefitItem
                            title="Focused learning"
                            desc="High-impact curriculum designed to respect your time."
                        />
                    </div>
                </div>

                {/* Right Column: Schedule Card */}
                <div className="flex-1 w-full max-w-xl bg-[#0a0a0a] border border-[#252525] rounded-2xl p-6 md:p-8 relative">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="font-heading font-bold text-lg">Your Weekly Schedule</h4>
                        <Calendar className="text-gray-500" />
                    </div>

                    <div className="space-y-3">
                        <ScheduleRow day="Mon" leftText="Work" rightText="Free" rightColor="dark" />
                        <ScheduleRow day="Tue" leftText="Work" rightText="Free" rightColor="dark" />
                        <ScheduleRow day="Wed" leftText="Work" rightText="Free" rightColor="dark" />
                        <ScheduleRow day="Thu" leftText="Work" rightText="Free" rightColor="dark" />
                        <ScheduleRow day="Fri" leftText="Work" rightText="Free" rightColor="dark" />

                        {/* Weekend Rows */}
                        <div className="flex items-center gap-4 text-sm font-medium">
                            <span className="font-sans w-8 text-gray-500 flex-shrink-0">Sat</span>
                            <div className="grid grid-cols-2 gap-2 flex-1">
                                <div className="font-sans bg-[#AC0AE7] text-white rounded-lg py-2.5 flex items-center justify-center font-semibold">
                                    Class
                                </div>
                                <div className="font-sans bg-[#1A1A1A] text-gray-400 rounded-lg py-2.5 flex items-center justify-center">
                                    Free
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm font-medium">
                            <span className="font-sans w-8 text-gray-500 flex-shrink-0">Sun</span>
                            <div className="grid grid-cols-2 gap-2 flex-1">
                                <div className="font-sans bg-[#AC0AE7] text-white rounded-lg py-2.5 flex items-center justify-center font-semibold">
                                    Class
                                </div>
                                <div className="font-sans bg-[#1A1A1A] text-gray-400 rounded-lg py-2.5 flex items-center justify-center">
                                    Free
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Features */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400 text-sm md:text-base font-medium">
                <div className="font-sans flex items-center gap-3">
                    <Briefcase className="text-[#AC0AE7]" /> Designed for full-time professionals
                </div>
                <div className="font-sans flex items-center gap-3">
                    <Clock className="text-[#AC0AE7]" /> No daily time pressure
                </div>
                <div className="font-sans flex items-center gap-3">
                    <Battery className="text-[#AC0AE7]" /> Learn at a sustainable pace
                </div>
            </div>

        </section>
    );
};

const BenefitItem = ({ title, desc }: { title: string, desc: string }) => (
    <div className="flex gap-4">
        <div className="w-6 h-6 rounded-full bg-[#AC0AE7] flex items-center justify-center flex-shrink-0 mt-1">
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
        <div>
            <h4 className="font-heading font-bold text-lg mb-1">{title}</h4>
            <p className="font-sans text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

const ScheduleRow = ({ day, leftText, rightText, rightColor }: { day: string, leftText: string, rightText: string, rightColor: 'purple' | 'dark' }) => (
    <div className="flex items-center gap-4 text-sm font-medium">
        <span className="font-sans w-8 text-gray-500 flex-shrink-0">{day}</span>
        <div className="grid grid-cols-2 gap-2 flex-1">
            <div className="font-sans bg-[#1A1A1A] text-gray-400 rounded-lg py-2.5 flex items-center justify-center">
                {leftText}
            </div>
            <div className={`font-sans rounded-lg py-2.5 flex items-center justify-center ${rightColor === 'purple'
                ? 'bg-[#AC0AE7] text-white'
                : 'bg-[#1A1A1A] text-gray-400'
                }`}>
                {rightText}
            </div>
        </div>
    </div>
);

export default AICrashCourseSchedule;
