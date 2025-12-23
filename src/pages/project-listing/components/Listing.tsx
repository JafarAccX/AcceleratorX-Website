import { useState, useEffect } from 'react';
import { projectService } from '../../../services/projectService';
import { Project } from '../../../types/project.types';
import { Search } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Listing = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        fetchProjects();
    }, [page, search]);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const response = await projectService.getProjects(page, 12, search);
            if (response.success && response.data) {
                setProjects(response.data.projects);
                setTotalPages(response.data.totalPages);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearch(searchInput);
        setPage(1);
    };



    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16" id="projects-listing">
            {/* Centered Search Bar */}
            <div className="flex justify-center mb-16">
                <form onSubmit={handleSearch} className="relative w-full max-w-2xl">
                    <div className="relative flex items-center w-full h-14 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400">
                        <div className="pl-6 text-gray-400">
                            <Search className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder="Search any topics, technology or just anything...."
                            className="w-full h-full pl-4 pr-32 bg-transparent border-none focus:ring-0 text-gray-700 placeholder:text-gray-400 text-base"
                        />
                        <div className="absolute right-2">
                            <button
                                type="submit"
                                className="h-10 px-8 bg-[#2B7FFF] text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-sm text-sm"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Projects Grid */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="h-[280px] bg-white rounded-3xl animate-pulse shadow-sm border border-slate-100"></div>
                    ))}
                </div>
            ) : projects.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">No projects found</h3>
                    <p className="text-slate-500">
                        {search ? 'Try adjusting your search terms' : 'Be the first to build something amazing!'}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.Id} project={project} rank={index + 1 + (page - 1) * 12} />
                    ))}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-16 gap-2">
                    <button
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-gray-500 hover:text-gray-900"
                    >
                        <span className="sr-only">Previous</span>
                        ←
                    </button>

                    <div className="flex items-center gap-2 mx-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                            <button
                                key={pageNum}
                                onClick={() => setPage(pageNum)}
                                className={`w-10 h-10 rounded-lg font-medium transition-all ${page === pageNum
                                    ? 'bg-[#2B7FFF] text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-white text-gray-500 hover:bg-gray-50'
                                    }`}
                            >
                                {pageNum}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-gray-500 hover:text-gray-900"
                    >
                        <span className="sr-only">Next</span>
                        →
                    </button>
                </div>
            )}
        </div>
    );
};

export default Listing;
