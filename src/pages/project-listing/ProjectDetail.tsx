import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectService } from '../../services/projectService';
import { Share2, Heart, MessageCircle, Github, ExternalLink, Globe, Send, UserPlus, MessageSquare } from 'lucide-react';
import { Project, ProjectComment } from '../../types/project.types';
import { toast } from 'react-hot-toast';
import { useUser } from '../../context/UserContext';
import ProjectCommentThread from './ProjectCommentThread';
import ProjectCard from './components/ProjectCard';

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated, user } = useUser();
    const [project, setProject] = useState<Project | null>(null);
    const [comments, setComments] = useState<ProjectComment[]>([]);
    const [otherProjects, setOtherProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [liked, setLiked] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [submittingComment, setSubmittingComment] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyForm, setReplyForm] = useState({ content: '' });
    const [submittingReply, setSubmittingReply] = useState(false);

    useEffect(() => {
        if (id) {
            window.scrollTo(0, 0);
            fetchProject();
            fetchComments();
        }
    }, [id]);

    const fetchProject = async () => {
        try {
            setLoading(true);
            const response = await projectService.getProjectById(id!);
            if (response.success && response.data) {
                setProject(response.data);
                const likedKey = `project_liked_${id}`;
                setLiked(localStorage.getItem(likedKey) === 'true');
                if (response.data.Owner?.CustId) {
                    fetchOwnerProjects(response.data.Owner.CustId, response.data.Id);
                }
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to load project');
        } finally {
            setLoading(false);
        }
    };

    const fetchOwnerProjects = async (authorId: number, currentProjectId: string) => {
        try {
            const response = await projectService.getProjects(1, 4, undefined, authorId);
            if (response.success && response.data) {
                const others = response.data.projects
                    .filter((p: Project) => p.Id !== currentProjectId)
                    .slice(0, 3);
                setOtherProjects(others);
            }
        } catch (error) {
            console.error('Error fetching other projects:', error);
        }
    };

    const fetchComments = async () => {
        try {
            const response = await projectService.getProjectComments(id!);
            if (response.success && response.data) {
                setComments(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    console.log("project data :", project)

    const handleLike = async () => {
        if (!isAuthenticated) {
            toast.error('Please sign in to like this project');
            navigate('/sign-in', { state: { from: location } });
            return;
        }

        try {
            if (liked) {
                await projectService.unlikeProject(id!);
                setLiked(false);
                localStorage.removeItem(`project_liked_${id}`);
                if (project) {
                    setProject({
                        ...project,
                        LikesCount: Math.max(0, Number(project.LikesCount || 0) - 1)
                    });
                }
                toast.success('Unliked');
            } else {
                await projectService.likeProject(id!);
                setLiked(true);
                localStorage.setItem(`project_liked_${id}`, 'true');
                if (project) {
                    setProject({
                        ...project,
                        LikesCount: Number(project.LikesCount || 0) + 1
                    });
                }
                toast.success('Liked!');
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Failed to update like');
        }
    };

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isAuthenticated) {
            toast.error('Please sign in to comment');
            navigate('/sign-in', { state: { from: location } });
            return;
        }

        if (!newComment.trim()) {
            toast.error('Please enter a comment');
            return;
        }

        try {
            setSubmittingComment(true);
            await projectService.addComment(id!, newComment);
            setNewComment('');
            toast.success('Comment posted!');
            await fetchComments();
            if (project) {
                setProject({
                    ...project,
                    CommentsCount: Number(project.CommentsCount || 0) + 1
                });
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Failed to post comment');
        } finally {
            setSubmittingComment(false);
        }
    };

    const handleReply = (parentId: string | null) => {
        setReplyingTo(parentId);
        setReplyForm({ content: '' });
    };

    const handleReplyFormChange = (key: string, value: string) => {
        setReplyForm({ ...replyForm, [key]: value });
    };

    const handleReplySubmit = async (e: React.FormEvent, parentId: string | null) => {
        e.preventDefault();
        if (!isAuthenticated) {
            toast.error('Please sign in to reply');
            navigate('/sign-in', { state: { from: location } });
            return;
        }

        if (!replyForm.content.trim()) {
            toast.error('Please enter a reply');
            return;
        }

        try {
            setSubmittingReply(true);
            await projectService.replyComment(id!, parentId!, replyForm.content);
            setReplyForm({ content: '' });
            setReplyingTo(null);
            toast.success('Reply posted!');
            await fetchComments();
            if (project) {
                setProject({
                    ...project,
                    CommentsCount: Number(project.CommentsCount || 0) + 1
                });
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Failed to post reply');
        } finally {
            setSubmittingReply(false);
        }
    };

    const handleShare = async (platform: string) => {
        const url = window.location.href;
        const text = `Check out this project: ${project?.Title}`;

        try {
            await projectService.trackShare(id!, platform);
            if (project) {
                setProject({
                    ...project,
                    SharesCount: Number(project.SharesCount || 0) + 1
                });
            }

            switch (platform) {
                case 'twitter': window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank'); break;
                case 'facebook': window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank'); break;
                case 'linkedin': window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank'); break;
                case 'copy': await navigator.clipboard.writeText(url); toast.success('Link copied to clipboard!'); break;
            }
            setShowShareMenu(false);
        } catch (error) {
            console.error(error);
            toast.error('Failed to share');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center text-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Project not found</h2>
                    <button onClick={() => navigate('/projects')} className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    // Privacy Check
    // If project is NOT public AND (user is not authenticated OR user is not the owner)
    // Note: user.CustId is string, project.Owner.CustId is number. Comparing as strings or numbers.
    const isOwner = user && project.Owner && String(user.CustId) === String(project.Owner.CustId);
    if (!project.IsPublic && !isOwner) {
        return (
            <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center text-center">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md mx-4">
                    <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Private Project</h2>
                    <p className="text-gray-500 mb-6">This project is private and is not available for public view.</p>
                    <button onClick={() => navigate('/projects')} className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors w-full">
                        Browse Public Projects
                    </button>
                </div>
            </div>
        );
    }

    const likesCount = Number(project.LikesCount) || 0;
    const commentsCount = Number(project.CommentsCount) || 0;
    const sharesCount = Number(project.SharesCount) || 0;

    return (
        <div className="min-h-screen bg-[#F0F4F8] text-[#1A1A1A] font-sans pb-20">
            <main className="max-w-7xl pt-24 mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col justify-between items-start mb-6">
                    <h1 className="text-4xl md:text-5xl font-['Cormorant_Infant'] font-bold text-[#1A1A1A] leading-tight flex-1">
                        {project.Title}
                    </h1>
                    {/* <div className="flex items-end justify-end gap-2 w-full text-gray-500 mt-2 md:mt-0">
                        <Eye size={18} />
                        <span className="text-sm font-medium">23.5M</span>
                    </div> */}
                </div>
                <hr className="my-6" />

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main Content Column */}
                    <div className="flex-1 min-w-0">

                        {/* Author & Actions Bar */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-transparent mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg overflow-hidden border-2 border-white shadow-sm">
                                    {project.Owner?.ProfileImage ? (
                                        <img src={project.Owner.ProfileImage} alt={project.Owner?.Name} className="w-full h-full object-cover" />
                                    ) : (
                                        project.Owner?.Name?.substring(0, 2).toUpperCase() || 'CX'
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-none">{project.Owner?.Name || 'Unknown'}</h3>
                                    <p className="text-gray-500 text-sm">Posted on {new Date(project.CreatedAt).toLocaleDateString()}</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                {project.GitHubURL && (
                                    <a href={project.GitHubURL} target="_blank" rel="noopener noreferrer" className="bg-[#24292e] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#2f363d] transition-colors">
                                        <Github size={16} /> GitHub
                                    </a>
                                )}
                                {project.PortfolioURL && (
                                    <a href={project.PortfolioURL} target="_blank" rel="noopener noreferrer" className="bg-[#2B7FFF] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors">
                                        <Globe size={16} /> Portfolio
                                    </a>
                                )}
                                {project.LiveURL && (
                                    <a href={project.LiveURL} target="_blank" rel="noopener noreferrer" className="bg-[#FFD100] text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-yellow-400 transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Media Section */}
                        <div className="grid grid-cols-1  gap-4 mb-8">
                            {/* Main Media Area */}
                            <div className=" bg-black rounded-2xl overflow-hidden shadow-sm aspect-video relative group">
                                {project.VideoURL ? (
                                    <>
                                        <iframe
                                            src={project.VideoURL}
                                            title="Project Video"
                                            className="w-full h-full"
                                            allowFullScreen
                                        />
                                        <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                                            <h3 className="text-white font-bold text-lg">{project.Title}</h3>
                                        </div>
                                    </>
                                ) : (
                                    <img
                                        src={project.Images?.[0]?.ImageURL || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=900&fit=crop"}
                                        alt={project.Title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                        </div>

                        {/* About Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-8 bg-[#2B7FFF] rounded-full"></div>
                                <h2 className="text-2xl font-bold font-sans">About:</h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="whitespace-pre-wrap leading-relaxed">{project.Description}</p>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center gap-8 py-6 border-t border-gray-200">
                            <button
                                onClick={handleLike}
                                className={`flex items-center gap-2 transition-colors group ${liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
                            >
                                <Heart size={20} className={liked ? 'fill-current' : ''} />
                                <span className="font-semibold">{likesCount > 1000 ? (likesCount / 1000).toFixed(1) + 'k' : likesCount}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                                <MessageCircle size={20} />
                                <span className="font-semibold">{commentsCount > 1000 ? (commentsCount / 1000).toFixed(1) + 'k' : commentsCount}</span>
                            </button>
                            <button onClick={() => setShowShareMenu(!showShareMenu)} className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors relative">
                                <Share2 size={20} />
                                <span className="font-semibold">{sharesCount > 1000 ? (sharesCount / 1000).toFixed(1) + 'k' : sharesCount}</span>
                                <AnimatePresence>
                                    {showShareMenu && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute bottom-full left-0 mb-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[160px] z-20"
                                        >
                                            {['twitter', 'facebook', 'linkedin', 'copy'].map(platform => (
                                                <button key={platform} onClick={() => handleShare(platform)} className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm font-medium capitalize text-gray-700">
                                                    {platform === 'copy' ? 'Copy Link' : platform}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>

                        <div className="w-full h-px bg-gray-300 my-8" />

                        {/* Comments Section */}
                        <div className="mb-12">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-1 h-8 bg-[#2B7FFF] rounded-full"></div>
                                <h2 className="text-2xl font-bold font-sans">Comments:</h2>
                            </div>

                            {/* Comment Input */}
                            {isAuthenticated ? (
                                <form onSubmit={handleCommentSubmit} className="mb-8 flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                                        {/* Current user avatar placeholder */}
                                        <div className="w-full h-full bg-indigo-500 flex items-center justify-center text-white font-bold">U</div>
                                    </div>
                                    <div className="flex-1 relative">
                                        <textarea
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                            placeholder="Add a comment..."
                                            rows={2}
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 resize-none"
                                        />
                                        <button
                                            type="submit"
                                            disabled={submittingComment || !newComment.trim()}
                                            className="absolute bottom-3 right-3 p-1.5 bg-[#2B7FFF] text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                                        >
                                            <Send size={14} />
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-center mb-8">
                                    <Link to="/sign-in" state={{ from: location }} className="text-blue-600 font-bold hover:underline">Sign in</Link> to join the discussion.
                                </div>
                            )}

                            <div className="space-y-6">
                                {comments.map((comment) => (
                                    <ProjectCommentThread
                                        key={comment.Id}
                                        comment={comment}
                                        onReply={handleReply}
                                        replyingTo={replyingTo}
                                        replyForm={replyForm}
                                        onReplyFormChange={handleReplyFormChange}
                                        onReplySubmit={handleReplySubmit}
                                        submittingReply={submittingReply}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* More Projects from Author - Moved to bottom of main column in layout shown in Screenshot 2? 
                            Actually screenshot 2 shows "More from Aditya J" at the bottom below comments.
                          */}
                        {otherProjects.length > 0 && (
                            <div className="mt-12">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-1 h-8 bg-[#2B7FFF] rounded-full"></div>
                                    <h2 className="text-2xl font-bold font-sans">More from {project.Owner?.Name?.split(' ')[0]}:</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {otherProjects.map((other, idx) => (
                                        <ProjectCard key={other.Id} project={other} rank={idx + 10} />
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Sidebar Column */}
                    <div className="w-full lg:w-[320px] flex-shrink-0 space-y-6">

                        <div className="hidden lg:flex flex-col gap-4">
                            {project.Images && project.Images.length > 0 ? (
                                project.Images.slice(0, 3).map((img, idx) => (
                                    <div key={img.Id || idx} className="flex-1 max-h-[200px] rounded-xl overflow-hidden border border-gray-100 relative group cursor-pointer">
                                        <img
                                            src={img.ImageURL}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                    </div>
                                ))
                            ) : (
                                // Placeholder if no images
                                [1, 2, 3].map((_, idx) => (
                                    <div key={idx} className="flex-1 rounded-xl overflow-hidden border border-gray-100 bg-gray-100 flex items-center justify-center">
                                        <span className="text-gray-300 text-xs">Image {idx + 1}</span>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Author Profile Card */}
                        <div className="bg-white rounded-[2rem] p-8 text-center shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 font-sans">Author</h3>

                            <div className="relative w-24 h-24 mx-auto mb-4">
                                <div className="w-full h-full rounded-full bg-purple-600 p-0.5 border-2 border-dashed border-purple-300">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                        {project.Owner?.ProfileImage ? (
                                            <img src={project.Owner.ProfileImage} alt="" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                                                {project.Owner?.Name?.substring(0, 1) || 'A'}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">{project.Owner?.Name}</h4>
                            <p className="text-gray-500 mb-6 text-sm">Dev-ops</p>

                            <div className="space-y-3">
                                <button className="w-full py-2.5 bg-[#2B7FFF] hover:bg-blue-600 text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2">
                                    <UserPlus size={18} /> Follow
                                </button>
                                <button className="w-full py-2.5 bg-[#FFD100] hover:bg-yellow-400 text-black rounded-full font-medium transition-colors flex items-center justify-center gap-2">
                                    <MessageSquare size={18} /> Message
                                </button>
                            </div>
                        </div>

                        {/* Side Feature Cards (Based on Leaderboard design style, maybe re-use or simplified) */}
                        <div className="bg-[#EFF6FF] rounded-[2rem] p-6 border border-blue-50">
                            <h3 className="font-bold text-lg mb-2 text-center text-[#1A1A1A]">Top Contributor</h3>
                            <p className="text-sm text-gray-500 text-center">
                                Ranked #5 globally in Dev-ops category this week.
                            </p>
                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
};

export default ProjectDetail;
