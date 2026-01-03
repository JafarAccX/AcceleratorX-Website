import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetUserByCustId } from "../../hooks/customer";
import {
    User, Mail, Globe, Linkedin,
    Github, BookOpen, Clock, DollarSign, Calendar, Briefcase, GraduationCap
} from "lucide-react";
import LottieLoader from "../../components/LottieLoader";
import { projectService } from "../../services/projectService";
import { Project } from "../../types/project.types";
import ProjectCard from "../project-listing/components/ProjectCard";

export default function PublicProfile() {
    const { custId } = useParams<{ custId: string }>();
    const { data: userResponse, isLoading, error } = useGetUserByCustId(custId || "");
    const [activeTab, setActiveTab] = useState<'profile' | 'projects'>('profile');
    const [projects, setProjects] = useState<Project[]>([]);
    const [loadingProjects, setLoadingProjects] = useState(false);

    const user = (userResponse as any)?.data || userResponse;

    useEffect(() => {
        if (user?.CustId && activeTab === 'projects') {
            fetchUserProjects();
        }
    }, [user?.CustId, activeTab]);

    const fetchUserProjects = async () => {
        if (!user?.CustId) return;
        try {
            setLoadingProjects(true);
            // CustId in user object is string, but service expects number for authorId
            // Attempting to parse, fallback to ignoring if NaN (though backend should handle it ideally)
            const authorId = parseInt(user.CustId, 10);
            if (!isNaN(authorId)) {
                const response = await projectService.getProjects(1, 100, undefined, authorId);
                if (response.success && response.data) {
                    setProjects(response.data.projects);
                }
            }
        } catch (err) {
            console.error("Failed to fetch user projects", err);
        } finally {
            setLoadingProjects(false);
        }
    };

    if (isLoading) return <div className="min-h-screen flex items-center justify-center"><LottieLoader /></div>;
    if (error || !user) return <div className="min-h-screen flex items-center justify-center text-red-500">Profile not found</div>;

    const getSkillsArray = () => {
        if (!user.Skills) return [];
        return user.Skills.split(',').map((s: string) => s.trim()).filter(Boolean);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT COLUMN: User Card */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white rounded-3xl shadow-sm p-6 text-center border border-gray-100">
                        <div className="relative inline-block mb-4 group">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mx-auto ring-4 ring-white shadow-lg">
                                {user.ProfilePicture ? (
                                    <img src={user.ProfilePicture} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white text-3xl font-bold">
                                        {user.FirstName?.[0]}{user.LastName?.[0]}
                                    </div>
                                )}
                            </div>
                        </div>

                        <h2 className="text-xl font-bold text-gray-900">{user.FirstName} {user.LastName}</h2>
                        <p className="text-gray-500 text-sm mb-4">{user.Designation || "Designation not set"}</p>
                        <p className="text-gray-400 text-xs mb-6">{user.CurrentCompany || "Company not set"}</p>

                        <div className="flex justify-center gap-4 mb-6">
                            {/* Public view actions could go here, e.g. "Connect" if we had that feature */}
                        </div>

                        <div className="flex justify-around text-center border-t border-gray-100 pt-6">
                            <div>
                                <div className="text-xl font-bold text-gray-900">0</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Projects</div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-900">0</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Likes</div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Widget (Read Only) */}
                    <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {getSkillsArray().length > 0 ? (
                                getSkillsArray().map((skill: string, i: number) => (
                                    <div key={i} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                                        {skill}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400 text-sm">No skills listed.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* MIDDLE COLUMN: Main Content */}
                <div className="lg:col-span-9 space-y-6">
                    {/* Tabs */}
                    <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide mb-4">
                        {['profile', 'projects'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden min-h-[600px]">
                        <div className="p-6">
                            {/* PROFILE DETAILS */}
                            {activeTab === 'profile' && (
                                <div className="space-y-8">
                                    {/* Personal Info */}
                                    <section>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <User size={18} className="text-blue-500" />
                                            About
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Displaying read-only info */}
                                            <InfoItem label="Full Name" value={`${user.FirstName} ${user.MiddleName || ''} ${user.LastName}`} />
                                            <InfoItem label="Email" value={user.Email} icon={Mail} />
                                            {/* Phone usually private? displaying if verified maybe? Keeping it for now assuming public profile rules. 
                             Actually, protecting phone/email might be better for privacy default. 
                             Let's show what is available but maybe hide sensitive contacts if needed. 
                             For now, matching profileOverview but read-only.
                         */}
                                            {/* <InfoItem label="Phone" value={user.Mobile} icon={Phone} /> */}
                                            {/* Excluding sensitive info like DOB/Gender/Phone for public view unless implicitly allowed. 
                             Let's show professional info mainly.
                         */}
                                        </div>
                                    </section>

                                    <hr className="border-gray-100" />

                                    {/* Professional Info */}
                                    <section>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <Briefcase size={18} className="text-blue-500" />
                                            Professional Details
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InfoItem label="Designation" value={user.Designation} />
                                            <InfoItem label="Current Company" value={user.CurrentCompany} />
                                            <InfoItem label="Years of Experience" value={user.YearOfExperience ? `${user.YearOfExperience} Years` : null} icon={Clock} />
                                            <InfoItem label="Expected Salary" value={user.ExpectedSalary ? `${user.ExpectedSalary} LPA` : null} icon={DollarSign} />
                                            <InfoItem label="Notice Period" value={user.NoticePeriod ? `${user.NoticePeriod} Days` : null} icon={Clock} />
                                        </div>
                                    </section>

                                    <hr className="border-gray-100" />

                                    {/* Education */}
                                    <section>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <GraduationCap size={18} className="text-blue-500" />
                                            Education
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InfoItem label="Education" value={user.Education} icon={BookOpen} />
                                            <InfoItem label="Year of Passing" value={user.YearOfPassing} icon={Calendar} />
                                        </div>
                                    </section>

                                    <hr className="border-gray-100" />

                                    {/* Links */}
                                    <section>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <Globe size={18} className="text-blue-500" />
                                            Social Profiles
                                        </h3>
                                        <div className="space-y-4">
                                            <LinkItem label="LinkedIn" value={user.LinkedinUrl} icon={Linkedin} />
                                            <LinkItem label="GitHub" value={user.GithubUrl} icon={Github} />
                                            <LinkItem label="Portfolio" value={user.Portfolio} icon={Globe} />
                                        </div>
                                    </section>
                                </div>
                            )}

                            {/* PROJECT MANAGER (Read Only Mode needed? generic ProjectManager likely has edit controls. 
                  If reuse is hard, I might need to make ProjectManager support read-only prop or just list projects here manually.
                  For now, I will use ProjectManager passing a read-only flag if possible, or just re-implement a simple list to avoid editing risks.
                  Let's check ProjectManager code mainly, but I cannot see it in context. 
                  Safest bet: Implement a simple public project list here.
              */}
                            {activeTab === 'projects' && (
                                <div>
                                    {loadingProjects ? (
                                        <div className="flex justify-center py-10">
                                            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    ) : projects.length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {projects.map((project, idx) => (
                                                <ProjectCard key={project.Id} project={project} rank={idx + 1} />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-10">
                                            <p className="text-gray-500">No public projects found.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper Components
const InfoItem = ({ label, value, icon: Icon }: any) => {
    if (!value) return null;
    return (
        <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">{label}</label>
            <div className={`text-gray-900 font-medium flex items-center gap-2`}>
                {Icon && <Icon size={16} className="text-gray-400" />}
                {value}
            </div>
        </div>
    );
}

const LinkItem = ({ label, value, icon: Icon }: any) => {
    if (!value) return null;
    return (
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
            {Icon && <Icon size={20} className="text-blue-600" />}
            <div className="flex-1 overflow-hidden">
                <p className="text-xs text-gray-500 font-semibold uppercase">{label}</p>
                <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate block">
                    {value}
                </a>
            </div>
        </div>
    )
}
