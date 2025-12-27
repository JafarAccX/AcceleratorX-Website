import { useEffect, useState } from 'react';
import { projectService } from '../../../services/projectService';
import { LeaderboardEntry } from '../../../types/project.types';
import { CheckCircle2, Trophy, User } from 'lucide-react';

const LeaderBoard = () => {
    const [topUsers, setTopUsers] = useState<LeaderboardEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                // Fetch top 7 users
                const response = await projectService.getLeaderboard(7);
                if (response.success && response.data) {
                    setTopUsers(response.data);
                }
            } catch (error) {
                console.error("Failed to fetch leaderboard", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchLeaderboard();
    }, []);

    return (
        <section className="py-16 bg-white w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-[#2B7FFF] font-semibold text-sm uppercase tracking-wider mb-2">TOP BUILDERS</p>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-2">
                        Showcase your solid project which can get
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">
                        yourself a JOB
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Compete with the best developers and earn recognition for your work.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

                    {/* Left Feature Card (Static for now) */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center mb-6 text-white">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-black mb-2">Earn Recognition</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Top performers get featured on the main page and gain visibility.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center mb-6 text-white">
                                <User size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-black">Build Portfolio</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Showcase your best projects to potential employers and clients.
                            </p>
                        </div>
                    </div>

                    {/* Center customer Leaderboard Card */}
                    <div className="bg-[#EFF6FF] rounded-3xl h-full p-6 shadow-sm border border-blue-50 relative overflow-hidden">
                        <h3 className="text-2xl font-serif text-center text-black mb-8">International Leaderboard</h3>

                        <div className="space-y-4 px-2">
                            {isLoading ? (
                                <div className="flex flex-col items-center justify-center py-12">
                                    <div className="animate-pulse flex space-x-4">
                                        <div className="flex-1 space-y-4 py-1">
                                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                            <div className="space-y-2">
                                                <div className="h-4 bg-gray-200 rounded"></div>
                                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-4">Loading leaderboard...</p>
                                </div>
                            ) : topUsers.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                                        <Trophy className="text-yellow-500" size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Be the First!</h4>
                                    <p className="text-gray-500 max-w-xs mx-auto mb-6">
                                        Upload your project now to claim the top spot on the international leaderboard.
                                    </p>
                                </div>
                            ) : (
                                topUsers.map((user, index) => {
                                    const rank = index + 1;
                                    const fullName = `${user.FirstName} ${user.LastName}`;
                                    const points = parseInt(user.TotalScore || '0');

                                    // Mock roles for now as it's not in the API response yet
                                    const roles = ['Full-stack developer', 'Dev-ops', 'Senior SDE 3', 'Full-stack developer', 'SDE 1', 'Frontend Dev', 'Backend Dev'];
                                    const role = roles[index] || 'Developer';

                                    if (rank === 1) {
                                        return (
                                            <div key={user.CustId} className="bg-gradient-to-r from-[#FFE587] to-[#FFFBF2] p-4 rounded-xl flex items-center gap-4 shadow-sm border border-[#FFE587]">
                                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center relative">
                                                    <div className="absolute inset-0 text-[#EAA603]">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                                            <path d="M12 2L2 5V11C2 16.55 6.16 21.74 12 23C17.84 21.74 22 16.55 22 11V5L12 2Z" />
                                                        </svg>
                                                    </div>
                                                    <span className="relative z-10 font-bold text-[#946200] text-lg">{rank}</span>
                                                </div>

                                                <div className="relative flex-shrink-0">
                                                    <img
                                                        src={user.ProfilePicture || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60"}
                                                        alt={fullName}
                                                        className="w-12 h-12 rounded-full object-cover border-2 border-[#EAA603] shadow-sm ml-[-1rem] bg-white"
                                                    />
                                                </div>

                                                <div className="flex-1 min-w-0 ml-[-0.5rem]">
                                                    <h4 className="font-bold text-[#1A1A1A] text-lg leading-tight truncate">{fullName}</h4>
                                                    <p className="text-sm text-[#876F35] truncate">{role}</p>
                                                </div>

                                                <div className="text-right whitespace-nowrap">
                                                    <span className="font-bold text-[#1A1A1A] text-lg">{points.toLocaleString()} PTS</span>
                                                </div>
                                            </div>
                                        );
                                    }

                                    if (rank === 2) {
                                        return (
                                            <div key={user.CustId} className="bg-gradient-to-r from-[#87FFD3] to-[#F0FFF9] p-4 rounded-xl flex items-center gap-4 shadow-sm border border-[#87FFD3]">
                                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center relative">
                                                    <div className="absolute inset-0 text-[#2DAA7E]">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                                            <path d="M12 2L2 5V11C2 16.55 6.16 21.74 12 23C17.84 21.74 22 16.55 22 11V5L12 2Z" />
                                                        </svg>
                                                    </div>
                                                    <span className="relative z-10 font-bold text-[#10563D] text-lg">{rank}</span>
                                                </div>

                                                <div className="relative flex-shrink-0">
                                                    <img
                                                        src={user.ProfilePicture || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&auto=format&fit=crop&q=60"}
                                                        alt={fullName}
                                                        className="w-12 h-12 rounded-full object-cover border-2 border-[#2DAA7E] shadow-sm ml-[-1rem] bg-white"
                                                    />
                                                </div>

                                                <div className="flex-1 min-w-0 ml-[-0.5rem]">
                                                    <h4 className="font-bold text-[#1A1A1A] text-lg leading-tight truncate">{fullName}</h4>
                                                    <p className="text-sm text-[#276F56] truncate">{role}</p>
                                                </div>

                                                <div className="text-right whitespace-nowrap">
                                                    <span className="font-bold text-[#1A1A1A] text-lg">{points.toLocaleString()} PTS</span>
                                                </div>
                                            </div>
                                        );
                                    }

                                    if (rank === 3) {
                                        return (
                                            <div key={user.CustId} className="bg-gradient-to-r from-[#E5BDA8] to-[#FFF5F0] p-4 rounded-xl flex items-center gap-4 shadow-sm border border-[#E5BDA8]">
                                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center relative">
                                                    <div className="absolute inset-0 text-[#A67359]">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                                            <path d="M12 2L2 5V11C2 16.55 6.16 21.74 12 23C17.84 21.74 22 16.55 22 11V5L12 2Z" />
                                                        </svg>
                                                    </div>
                                                    <span className="relative z-10 font-bold text-[#593322] text-lg">{rank}</span>
                                                </div>

                                                <div className="relative flex-shrink-0">
                                                    <img
                                                        src={user.ProfilePicture || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60"}
                                                        alt={fullName}
                                                        className="w-12 h-12 rounded-full object-cover border-2 border-[#A67359] shadow-sm ml-[-1rem] bg-white"
                                                    />
                                                </div>

                                                <div className="flex-1 min-w-0 ml-[-0.5rem]">
                                                    <h4 className="font-bold text-[#1A1A1A] text-lg leading-tight truncate">{fullName}</h4>
                                                    <p className="text-sm text-[#7D5A46] truncate">{role}</p>
                                                </div>

                                                <div className="text-right whitespace-nowrap">
                                                    <span className="font-bold text-[#1A1A1A] text-lg">{points.toLocaleString()} PTS</span>
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div
                                            key={user.CustId}
                                            className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm border border-gray-200"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                                <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 font-bold text-lg">
                                                    {rank}
                                                </div>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-[#1A1A1A] text-lg leading-tight truncate">{fullName}</h4>
                                                <p className="text-sm text-gray-500 truncate">{role}</p>
                                            </div>

                                            <div className="text-right whitespace-nowrap">
                                                <span className="font-bold text-[#1A1A1A] text-lg">{points.toLocaleString()} PTS</span>
                                            </div>
                                        </div>
                                    );
                                }))}
                        </div>
                    </div>

                    {/* Right Feature Card Cards Column */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center mb-6 text-white">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-black">Get Hired</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Connect with companies looking for talented developers like you.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center mb-6 text-white">
                                <User size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-black">Community</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Join a community of builders and share knowledge.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LeaderBoard;
