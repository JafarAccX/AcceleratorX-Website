import { useState, useEffect } from 'react';
import { projectService } from '../../../services/projectService';
import { Project } from '../../../types/project.types';
import { Plus, Trash2, Eye, EyeOff, Edit3 } from 'lucide-react';
import AddProjectModal from './AddProjectModal';
import { toast } from 'react-hot-toast';

export default function ProjectManager() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        fetchMyProjects();
    }, []);

    const fetchMyProjects = async () => {
        setLoading(true);
        try {
            const res = await projectService.getUserProjects(1, 100); // Fetch all for now
            if (res.success && res.data) {
                setProjects(res.data.projects);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleProjectAdded = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        fetchMyProjects();
    };

    const handleEdit = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleToggleVisibility = async (project: Project) => {
        try {
            console.log('Toggling visibility for project:', project.Id);
            const res = await projectService.toggleVisibility(project.Id);
            console.log('Toggle response:', res);
            if (res.success && res.data) {
                toast.success(`Project is now ${res.data.IsPublic ? 'Public' : 'Private'}`);
                // Optimistic update
                setProjects(projects.map(p =>
                    p.Id === project.Id ? { ...p, IsPublic: res.data!.IsPublic } : p
                ));
            }
        } catch (error: any) {
            console.error('Toggle visibility error:', error);
            console.error('Error response:', error.response?.data);
            toast.error(error.response?.data?.message || "Failed to toggle visibility");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        try {
            await projectService.deleteProject(id);
            toast.success("Project deleted successfully");
            setProjects(projects.filter(p => p.Id !== id));
        } catch (e) {
            console.error(e);
            toast.error("Failed to delete project");
        }
    };

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Your Projects</h3>
                    <p className="text-sm text-gray-500">Showcase your work to the world.</p>
                </div>
                <button
                    onClick={() => { setSelectedProject(null); setIsModalOpen(true); }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-medium hover:bg-blue-700 transition"
                >
                    <Plus size={18} />
                    Add Project
                </button>
            </div>

            {/* List */}
            {loading ? (
                <div className="text-center py-10 text-gray-400">Loading projects...</div>
            ) : projects.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                    <p className="text-gray-500 mb-4">You haven't added any projects yet.</p>
                    <button onClick={() => { setSelectedProject(null); setIsModalOpen(true); }} className="text-blue-600 font-medium hover:underline">
                        Create your first project
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    {projects.map(project => (
                        <div key={project.Id} className="flex items-center gap-4 bg-white border border-gray-200 p-4 rounded-xl hover:shadow-md transition">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                {project.Images && project.Images.length > 0 ? (
                                    <img src={project.Images[0].ImageURL} alt="" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Img</div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-900 truncate">{project.Title}</h4>
                                <p className="text-sm text-gray-500 truncate">{project.Description}</p>
                                <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                                    <span className="flex items-center gap-1">❤️ {project.LikesCount || 0}</span>
                                    <span className="flex items-center gap-1">💬 {project.CommentsCount || 0}</span>
                                    <button
                                        onClick={(e) => { e.preventDefault(); handleToggleVisibility(project); }}
                                        className={`px-2 py-0.5 rounded-full text-xs font-medium border ${project.IsPublic ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'} transition`}
                                    >
                                        {project.IsPublic ? 'Public' : 'Private'}
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href={`/projects/${project.Id}`} target="_blank" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition" title="View">
                                    <Eye size={18} />
                                </a>
                                <button
                                    onClick={() => handleEdit(project)}
                                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                    title="Edit"
                                >
                                    <Edit3 size={18} />
                                </button>
                                <button onClick={() => handleDelete(project.Id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition" title="Delete">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <AddProjectModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSuccess={handleProjectAdded}
                    project={selectedProject}
                />
            )}
        </div>
    );
}
