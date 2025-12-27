import { motion } from 'framer-motion';
import { Heart, Trophy, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../../types/project.types';

interface ProjectCardProps {
    project: Project;
    rank?: number;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    // Determine cover image (use first image or a placeholder)
    const coverImage = project.Images && project.Images.length > 0
        ? project.Images[0].ImageURL
        : 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop';

    const likesCount = Number(project.LikesCount) || 0;
    const commentsCount = Number(project.CommentsCount) || 0;
    const score = project.Score || 0;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-slate-700 h-[280px] w-full cursor-pointer"
        >
            <Link to={`/projects/${project.Id}`} className="block w-full h-full relative">

                {/* Image Section */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src={coverImage}
                        alt={project.Title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:bg-black/50 transition-all duration-300" />
                </div>

                {/* Score/Rank Badges */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                    {score > 0 && (
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                            <Trophy className="w-3 h-3 text-yellow-400" />
                            <span className="text-xs font-bold">{score}</span>
                        </div>
                    )}
                </div>

                {/* Top Right External Link Icon (shows on hover) */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>

                {/* Main Content Content (Visible Initially) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20 transform transition-transform duration-300 translate-y-2 group-hover:-translate-y-2">


                    <div className="flex items-center gap-3 mb-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-[1.5px]">
                            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border border-white/10">
                                {project.Owner?.ProfileImage ? (
                                    <img src={project.Owner.ProfileImage} alt={project.Owner.Name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-white text-[10px] font-bold">
                                        {project.Owner?.Name?.substring(0, 1).toUpperCase() || 'U'}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="text-white max-w-[300px]">
                            <h3 className="text-lg font-bold text-white mt-3 mb-1 line-clamp-1">{project.Title}</h3>
                            <p className="text-xs text-gray-300 line-clamp-2 mb-3 leading-relaxed">{project.Description}</p>

                        </div>
                    </div>

                    {/* Hidden Info (Slides up on hover) */}
                    <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        <p className="text-sm font-semibold leading-tight">{project.Owner?.Name || 'Unknown Builder'}</p>
                        {/* <p className="text-[10px] text-gray-300 opacity-80">Full Stack Developer</p> */}

                        <div className="flex items-center gap-4 text-xs font-medium text-white/90 pt-2 border-t border-white/10">
                            <div className="flex items-center gap-1.5">
                                <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                                <span>{likesCount}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MessageCircle className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                                <span>{commentsCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
