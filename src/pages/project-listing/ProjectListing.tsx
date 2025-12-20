import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { projectService } from '../../services/projectService';
import { Project } from '../../types/project.types';
import ProjectCountdown from './components/ProjectCountdown';
import { toast } from 'react-hot-toast';

const ProjectListing = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchProjects();
    }, [page, search]);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const response = await projectService.getProjects(page, 12, search); // Limit 12 for grid
            if (response.success && response.data) {
                setProjects(response.data.projects);
                setTotalPages(response.data.totalPages);
            }
        } catch (error) {
            console.error(error);
            // toast.error('Failed to load projects'); // Optional: don't spam toasts on simple load fail
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1); // Reset to page 1
        fetchProjects();
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center bg-gray-50/50">


            {/* PROJECTS GRID */}
            <div className="w-full max-w-7xl mx-auto px-4 pb-20">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="h-80 bg-gray-200 rounded-2xl animate-pulse"></div>
                        ))}
                    </div>
                ) : projects.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        <p className="text-xl">No projects found. Be the first to build something!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.Id} project={project} />
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-12 gap-2">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 hover:bg-gray-50"
                        >Prev</button>
                        <span className="px-4 py-2 text-gray-600">Page {page} of {totalPages}</span>
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 hover:bg-gray-50"
                        >Next</button>
                    </div>
                )}
            </div>

            {/* Footer Text */}
            <div className="text-center text-gray-400 text-sm py-8">
                © 2025 AcceleratorX. All rights reserved.
            </div>
        </div>
    );
};

// Sub-component for Project Card
const ProjectCard = ({ project }: { project: Project }) => {
    // Determine Cover Image: Use first image or fallback
    const coverImage = project.Images && project.Images.length > 0 ? project.Images[0].ImageURL : 'https://via.placeholder.com/400x300?text=No+Image';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
        >
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img src={coverImage} alt={project.Title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <span>❤️ {project.LikesCount || 0}</span>
                </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        {project.Owner?.ProfileImage ? (
                            <img src={project.Owner.ProfileImage} alt="" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 text-xs font-bold">
                                {project.Owner?.Name?.charAt(0) || 'U'}
                            </div>
                        )}
                    </div>
                    <span className="text-sm text-gray-600 font-medium truncate">{project.Owner?.Name || 'Unknown Builder'}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{project.Title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">{project.Description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-sm md:text-xs lg:text-sm">
                    <div className="flex gap-3 text-gray-400">
                        {project.GitHubURL && (
                            <a href={project.GitHubURL} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                                GitHub
                            </a>
                        )}
                        {project.LiveURL && (
                            <a href={project.LiveURL} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                                Live Demo
                            </a>
                        )}
                    </div>

                    <a href={`/projects/${project.Id}`} className="text-blue-600 font-medium hover:underline">
                        View Details →
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectListing;
