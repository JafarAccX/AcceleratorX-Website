import { useState } from 'react';
import { X } from 'lucide-react';
import { projectService } from '../../../services/projectService';
import { toast } from 'react-hot-toast';

interface AddProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export default function AddProjectModal({ isOpen, onClose, onSuccess }: AddProjectModalProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        Title: '',
        Description: '',
        GitHubURL: '',
        PortfolioURL: '',
        LiveURL: '',
        VideoURL: '',
        IsPublic: true,
        Images: [] as string[] // For now, just a list of URLs. File upload requires separate handling.
    });

    const [imageUrlInput, setImageUrlInput] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await projectService.createProject(formData);
            onSuccess();
        } catch (error) {
            console.error(error);
            toast.error("Failed to create project");
        } finally {
            setLoading(false);
        }
    };

    const addImage = () => {
        if (!imageUrlInput) return;
        setFormData(prev => ({ ...prev, Images: [...prev.Images, imageUrlInput] }));
        setImageUrlInput('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">Add New Project</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Project Title</label>
                            <input
                                required
                                value={formData.Title}
                                onChange={e => setFormData({ ...formData, Title: e.target.value })}
                                className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                                placeholder="e.g. AI Portfolio Website"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                            <textarea
                                required
                                rows={3}
                                value={formData.Description}
                                onChange={e => setFormData({ ...formData, Description: e.target.value })}
                                className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none"
                                placeholder="Describe what you built..."
                            />
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">GitHub URL</label>
                            <input
                                type="url"
                                value={formData.GitHubURL}
                                onChange={e => setFormData({ ...formData, GitHubURL: e.target.value })}
                                className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none transition"
                                placeholder="https://github.com/..."
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Live Demo URL</label>
                            <input
                                type="url"
                                value={formData.LiveURL}
                                onChange={e => setFormData({ ...formData, LiveURL: e.target.value })}
                                className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none transition"
                                placeholder="https://..."
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Portfolio URL</label>
                            <input
                                type="url"
                                value={formData.PortfolioURL}
                                onChange={e => setFormData({ ...formData, PortfolioURL: e.target.value })}
                                className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none transition"
                                placeholder="https://portfolio..."
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Video Demo URL</label>
                            <input
                                type="url"
                                value={formData.VideoURL}
                                onChange={e => setFormData({ ...formData, VideoURL: e.target.value })}
                                className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none transition"
                                placeholder="https://youtube.com/..."
                            />
                        </div>
                    </div>

                    {/* Visibility */}
                    <div className="flex items-center gap-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.IsPublic}
                                onChange={e => setFormData({ ...formData, IsPublic: e.target.checked })}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900">Make Publicly Visible</span>
                        </label>
                    </div>

                    {/* Images */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Project Images (URLs)</label>
                        <div className="flex gap-2 mb-3">
                            <input
                                value={imageUrlInput}
                                onChange={e => setImageUrlInput(e.target.value)}
                                className="flex-1 px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none"
                                placeholder="Paste image URL..."
                            />
                            <button type="button" onClick={addImage} className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200">
                                Add
                            </button>
                        </div>

                        {/* Image Preview List */}
                        {formData.Images.length > 0 && (
                            <div className="grid grid-cols-4 gap-2">
                                {formData.Images.map((img, idx) => (
                                    <div key={idx} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 group">
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, Images: prev.Images.filter((_, i) => i !== idx) }))}
                                            className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                                        >
                                            <X size={12} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                        <button type="button" onClick={onClose} className="px-5 py-2.5 text-gray-600 font-medium hover:bg-gray-50 rounded-xl transition">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 disabled:opacity-50"
                        >
                            {loading ? 'Creating...' : 'Create Project'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
