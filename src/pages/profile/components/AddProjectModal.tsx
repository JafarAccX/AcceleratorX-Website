import { useState, useRef } from 'react';
import { X, Upload } from 'lucide-react';


import { projectService } from '../../../services/projectService';
import { Project } from '../../../types/project.types';
import { toast } from 'react-hot-toast';

interface AddProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    project?: Project | null;
}

export default function AddProjectModal({ isOpen, onClose, onSuccess, project }: AddProjectModalProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        Title: project?.Title || '',
        Description: project?.Description || '',
        GitHubURL: project?.GitHubURL || '',
        PortfolioURL: project?.PortfolioURL || '',
        LiveURL: project?.LiveURL || '',
        VideoURL: project?.VideoURL || '',
        IsPublic: project ? project.IsPublic : true,
    });

    const [existingImages, setExistingImages] = useState(project?.Images || []);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [deletedImageIds, setDeletedImageIds] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        console.log('=== MODAL SUBMIT ===');
        console.log('Form Data:', formData);
        console.log('Existing Images:', existingImages);
        console.log('Selected Files:', selectedFiles);
        console.log('Deleted Image IDs:', deletedImageIds);

        try {
            if (project) {
                await projectService.updateProject(project.Id, formData, selectedFiles, deletedImageIds);
                toast.success("Project updated successfully");
            } else {
                await projectService.createProject(formData, selectedFiles);
                toast.success("Project created successfully");
            }
            onSuccess();
        } catch (error) {
            console.error('Submit error:', error);
            toast.error(project ? "Failed to update project" : "Failed to create project");
        } finally {
            setLoading(false);
        }
    };


    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFiles(prev => [...prev, ...Array.from(e.target.files!)]);
        }
    };

    const removeExistingImage = (id: string, index: number) => {
        setDeletedImageIds(prev => [...prev, id]);
        setExistingImages(prev => prev.filter((_, i) => i !== index));
    };

    const removeNewFile = (index: number) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">{project ? 'Edit Project' : 'Add New Project'}</h2>
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
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Project Images</label>

                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-blue-400 transition cursor-pointer mb-4"
                        >
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                            />
                            <Upload className="mb-2" />
                            <p className="text-sm">Click to upload images</p>
                        </div>

                        {/* Image Preview List */}
                        {(existingImages.length > 0 || selectedFiles.length > 0) && (
                            <div className="grid grid-cols-4 gap-2">
                                {/* Existing Images */}
                                {existingImages.map((img, idx) => (
                                    <div key={`existing-${img.Id}`} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 group border border-gray-200">
                                        <img src={img.ImageURL} alt="" className="w-full h-full object-cover" />
                                        <button
                                            type="button"
                                            onClick={() => removeExistingImage(img.Id, idx)}
                                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition shadow-sm"
                                        >
                                            <X size={12} />
                                        </button>
                                    </div>
                                ))}

                                {/* New Files */}
                                {selectedFiles.map((file, idx) => (
                                    <div key={`new-${idx}`} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 group border border-blue-200">
                                        <img src={URL.createObjectURL(file)} alt="" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-blue-500/10 pointer-events-none"></div>
                                        <button
                                            type="button"
                                            onClick={() => removeNewFile(idx)}
                                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition shadow-sm"
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
                            {loading ? (project ? 'Updating...' : 'Creating...') : (project ? 'Update Project' : 'Create Project')}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
