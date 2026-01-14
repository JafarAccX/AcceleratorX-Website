import { useState, useEffect, useMemo } from "react";
import { Search, Briefcase, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import JobCard from "./JobCard";

import { useGetAllJobs } from "../../hooks/jobs";
import { SEO } from "../../components/SEO";

export interface Job {
  Id: string;
  CompanyName: string;
  CompanyLogoURL: string;
  JobName: string;
  City?: string;
  Country?: string;
  Location: string;
  JobType: string;
  Duration?: string;
  JobDescription: string;
  RequiredSkills: string | null;
  RequiredExperience: string | number | null;
  Salary: number | null;
  CreatedDate: string;
  ExpiryDate: string | null;
  Active: boolean;
  Deleted: boolean;
  CompanyURL: string | null;
  JobApplyURL: string | null;
  EasyApply: boolean;
  Category: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalJobs: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  jobsPerPage: number;
}

const JobList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce search term
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Filters
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedJobType, setSelectedJobType] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const filters = useMemo(() => ({
    searchTerm: debouncedSearchTerm,
    companyName: selectedCompany,
    jobType: selectedJobType,
    location: selectedLocation,
    category: selectedCategory,
    skills: selectedSkills.length > 0 ? selectedSkills.join(',') : undefined
  }), [debouncedSearchTerm, selectedCompany, selectedJobType, selectedLocation, selectedCategory, selectedSkills]);

  const { data: jobsResponse, isLoading } = useGetAllJobs(currentPage, 10, filters);

  // Extract jobs and pagination info from response
  const jobs = useMemo(() => jobsResponse?.jobs || [], [jobsResponse?.jobs]);
  const paginationInfo = jobsResponse?.pagination;

  const uniqueCompanies = Array.from(new Set(jobs?.map((job) => job.CompanyName) || []));
  const uniqueLocations = Array.from(new Set(jobs?.map((job) => job.Location).filter(Boolean) || []));

  // Get all unique skills from all jobs (RequiredSkills is a VARCHAR, likely comma-separated)
  const allSkills = jobs
    ? Array.from(new Set(
      jobs
        .filter(job => job.RequiredSkills)
        .flatMap(job => job.RequiredSkills!.split(',').map(s => s.trim()))
    ))
    : [];

  // Category list
  const categoryList = [
    "Data Analytics",
    "Product Management Intern",
    "Generative AI",
    "Product Intern",
    "DA Intern",
    "Product Manager",
  ];

  // Common Job Types
  const jobTypes = ["Full-time", "Internship", "Part-time", "Contract", "Remote"];

  // Jobs are already filtered by backend
  const filteredJobs = useMemo(() => jobs, [jobs]);

  // Reset to first page when filters change
  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchTerm,
    selectedCompany,
    selectedJobType,
    selectedLocation,
    selectedCategory,
    selectedSkills,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCompany("");
    setSelectedJobType("");
    setSelectedLocation("");
    setSelectedCategory("");
    setSelectedSkills([]);
  };

  const addSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCompany) count++;
    if (selectedJobType) count++;
    if (selectedLocation) count++;
    if (selectedCategory) count++;
    count += selectedSkills.length;
    return count;
  };

  // Pagination handlers
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    if (!paginationInfo) return [];

    const { currentPage, totalPages } = paginationInfo;
    const pages = [];
    const maxPageNumbers = 5; // How many page numbers to show.

    if (totalPages <= maxPageNumbers) {
      // If total pages are less than or equal to maxPageNumbers, show all pages.
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // If total pages are more than maxPageNumbers, calculate start and end pages.
      let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
      const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

      // Adjust startPage if endPage is at the end.
      if (endPage === totalPages) {
        startPage = Math.max(1, totalPages - maxPageNumbers + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
    return pages;
  };



  return (
    <>
      <SEO />

      {/* Hero Section */}
      <section
        className="relative min-h-[400px] bg-cover bg-center pt-32 pb-20 overflow-hidden"
        style={{ backgroundImage: "url('/redesign/background/course-gb.webp')" }}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>

        <div className="relative container mx-auto px-4 h-full flex flex-col items-center md:flex-row justify-betweenborder: 1px solid #EBEBEB ">
          <div className="max-w-xl">
            <h1
              className="text-gray-900 mb-6"
              style={{
                fontFamily: 'Cormorant Infant, serif',
                fontWeight: 600,
                fontSize: '68px',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              Everything you need,{" "}
              <span className="text-blue-600">in one place.</span>
            </h1>

          </div>
          <p className="text-xs md:text-base text-gray-600 max-w-xl font-medium">
            Discover your next career opportunity from top companies hiring across various domains and technologies.
          </p>

        </div>
      </section>

      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Main Layout with Sidebar */}
          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <aside className="w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Filters</h2>



                {/* Category */}
                <div className="mb-6">
                  <button className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3">
                    <span>Category</span>
                  </button>
                  <div className="space-y-2">
                    {categoryList.map((category) => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.checked ? category : '')}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>



                {getActiveFiltersCount() > 0 && (
                  <button
                    onClick={clearFilters}
                    className="w-full mt-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Job title or keyword"
                      className="w-full pl-10 pr-4 py-3 rounded-full text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      placeholder="City, state or zip"
                      className="w-full pl-10 pr-4 py-3 rounded-full text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-colors">
                    Find jobs
                  </button>
                </div>
              </div>

              {/* Job Cards - Single Column */}
              <div className="space-y-4">

                {/* Filters Panel */}
                {showFilters && (
                  <div className="mb-8 p-6 bg-slate-800 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg font-semibold text-white">Filter Jobs</h2>
                      <div className="flex gap-3">
                        <button onClick={clearFilters} className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                          <X className="h-4 w-4" />
                          Clear all filters
                        </button>
                        <button
                          onClick={() => setShowFilters(false)}
                          className="text-sm bg-slate-700 hover:bg-slate-600 py-1 px-3 rounded text-white"
                        >
                          Close
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Company Filter */}
                      <div>
                        <label className="text-gray-300 mb-2 flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          Company
                        </label>
                        <select
                          value={selectedCompany}
                          onChange={(e) => setSelectedCompany(e.target.value)}
                          className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">All Companies</option>
                          {uniqueCompanies.map((company) => (
                            <option key={company} value={company}>
                              {company}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Job Type Filter */}
                      <div>
                        <label className="text-gray-300 mb-2 flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          Job Type
                        </label>
                        <select
                          value={selectedJobType}
                          onChange={(e) => setSelectedJobType(e.target.value)}
                          className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">All Types</option>
                          {jobTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Location Filter */}
                      <div>
                        <label className="text-gray-300 mb-2 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Location
                        </label>
                        <select
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">All Locations</option>
                          {uniqueLocations.map((location) => (
                            <option key={location} value={location}>
                              {location}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Skills Filter */}
                    <div className="mt-6">
                      <label className="block text-gray-300 mb-2">Skills</label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {selectedSkills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                          >
                            {skill}
                            <button onClick={() => removeSkill(skill)}>
                              <X className="h-3 w-3 text-blue-200 hover:text-white" />
                            </button>
                          </span>
                        ))}
                      </div>
                      <select
                        value=""
                        onChange={(e) => {
                          if (e.target.value) {
                            addSkill(e.target.value);
                            e.target.value = "";
                          }
                        }}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Add skill...</option>
                        {allSkills
                          .filter((skill) => !selectedSkills.includes(skill))
                          .map((skill) => (
                            <option key={skill} value={skill}>
                              {skill}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Active Filters Display */}
                {getActiveFiltersCount() > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2 items-center">
                    <span className="text-gray-400 text-sm">Active filters:</span>

                    {selectedCompany && (
                      <span className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        Company: {selectedCompany}
                        <button onClick={() => setSelectedCompany("")}>
                          <X className="h-3 w-3 text-gray-400 hover:text-white" />
                        </button>
                      </span>
                    )}

                    {selectedJobType && (
                      <span className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        Type: {selectedJobType}
                        <button onClick={() => setSelectedJobType("")}>
                          <X className="h-3 w-3 text-gray-400 hover:text-white" />
                        </button>
                      </span>
                    )}

                    {selectedLocation && (
                      <span className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        Location: {selectedLocation}
                        <button onClick={() => setSelectedLocation("")}>
                          <X className="h-3 w-3 text-gray-400 hover:text-white" />
                        </button>
                      </span>
                    )}



                    {selectedSkills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        Skill: {skill}
                        <button onClick={() => removeSkill(skill)}>
                          <X className="h-3 w-3 text-gray-400 hover:text-white" />
                        </button>
                      </span>
                    ))}

                    <button onClick={clearFilters} className="text-blue-400 hover:text-blue-300 text-sm underline">
                      Clear all
                    </button>
                  </div>
                )}

                {/* Job Cards Grid */}
                <div className="flex flex-col gap-6">
                  {isLoading ? (
                    <div className="col-span-full flex justify-center py-12">
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-700 h-12 w-12"></div>
                        <div className="flex-1 space-y-4 py-1">
                          <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                          <div className="space-y-2">
                            <div className="h-4 bg-slate-700 rounded"></div>
                            <div className="h-4 bg-slate-700 rounded w-5/6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : filteredJobs.length === 0 ? (
                    <div className="col-span-full flex justify-center py-12">
                      <div className="text-center p-6">
                        <h2 className="text-xl font-bold mb-2 text-black">No Matching Jobs Found</h2>
                        <p className="text-gray-400 mb-4">Try adjusting your filters to see more results</p>
                        <button onClick={clearFilters} className="text-blue-400 hover:text-blue-300 underline">
                          Clear all filters
                        </button>
                      </div>
                    </div>
                  ) : (
                    filteredJobs.map((job) => <JobCard key={job.Id} job={job} />)
                  )}
                </div>

                {/* Pagination Controls */}
                {paginationInfo && paginationInfo.totalPages > 1 && (
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Pagination Info */}
                    <div className="text-gray-400 text-sm">
                      Showing page {paginationInfo.currentPage} of {paginationInfo.totalPages}({paginationInfo.totalJobs} total
                      jobs)
                    </div>

                    {/* Pagination Navigation */}
                    <div className="flex items-center gap-2">
                      {/* Previous Button */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={!paginationInfo.hasPreviousPage}
                        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${paginationInfo.hasPreviousPage
                          ? "bg-slate-800 hover:bg-slate-700 text-white"
                          : "bg-slate-900 text-gray-500 cursor-not-allowed"
                          }`}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                      </button>

                      {/* Page Numbers */}
                      <div className="flex items-center gap-1">
                        {paginationInfo.currentPage > 3 && (
                          <>
                            <button
                              onClick={() => handlePageChange(1)}
                              className="px-3 py-2 rounded-lg text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white transition-all"
                            >
                              1
                            </button>
                            {paginationInfo.currentPage > 4 && <span className="px-2 text-gray-400">...</span>}
                          </>
                        )}

                        {getPageNumbers().map((pageNum: number) => (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${pageNum === paginationInfo.currentPage
                              ? "bg-blue-600 text-white"
                              : "bg-slate-800 hover:bg-slate-700 text-white"
                              }`}
                          >
                            {pageNum}
                          </button>
                        ))}

                        {paginationInfo.currentPage < paginationInfo.totalPages - 2 && (
                          <>
                            {paginationInfo.currentPage < paginationInfo.totalPages - 3 && (
                              <span className="px-2 text-gray-400">...</span>
                            )}
                            <button
                              onClick={() => handlePageChange(paginationInfo.totalPages)}
                              className="px-3 py-2 rounded-lg text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white transition-all"
                            >
                              {paginationInfo.totalPages}
                            </button>
                          </>
                        )}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={!paginationInfo.hasNextPage}
                        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${paginationInfo.hasNextPage
                          ? "bg-slate-800 hover:bg-slate-700 text-white"
                          : "bg-slate-900 text-gray-500 cursor-not-allowed"
                          }`}
                      >
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobList;
