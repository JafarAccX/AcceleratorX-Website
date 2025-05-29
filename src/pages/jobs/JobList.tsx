// export default JobList;
import React, { useState, useEffect, useMemo } from "react";
import { Search, Filter, Briefcase, MapPin, Clock, DollarSign, X } from "lucide-react";
import JobCard from "./JobCard";

import { useGetAllJobs } from "../../hooks/jobs";

export interface Job {
  Id: string;
  CompanyName: string;
  CompanyLogoURL: string;
  JobName: string;
  City?: string;
  Country?: string;
  Location: string;
  JobType: string;
  Duration?: string; // Made optional as it might not always be present
  JobDescription: string;
  RequiredSkills: string | null;
  RequiredExperience: string | number | null; // Updated to handle both string and number
  Salary: number | null;
  CreatedDate: string;
  ExpiryDate: string | null;
  Active: boolean;
  Deleted: boolean;
  CompanyURL: string | null; // New field
  JobApplyURL: string | null; // New field
  EasyApply: boolean; // New field
  Category: string; // New field
}

const JobList = () => {
  const { data: jobs, isLoading } = useGetAllJobs();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  // Initialize filteredJobs when jobs data is loaded
  useEffect(() => {
    if (jobs) {
      setFilteredJobs(jobs);
    }
  }, [jobs]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filters
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedJobType, setSelectedJobType] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState<string>("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const uniqueCompanies = Array.from(new Set(jobs?.map((job) => job.CompanyName) || []));
  const uniqueJobTypes = Array.from(new Set(jobs?.map((job) => job.JobType) || []));
  const uniqueLocations = Array.from(new Set(jobs?.map((job) => `${job.City}, ${job.Country}`) || []));

  // Get all unique skills from all jobs
  const allSkills = jobs ? Array.from(new Set(jobs.flatMap((job) => job.RequiredSkills || []))) : [];

  // Experience ranges - defined with useMemo to prevent recreation on each render
  const experienceRanges = useMemo(() => ["0-1", "1-3", "3-5", "5-10", "10+"], []);

  // Salary ranges - defined outside of component or using useMemo to prevent recreating on each render
  const salaryRanges = React.useMemo(
    () => [
      { label: "0-50K", min: 0, max: 50000 },
      { label: "50K-100K", min: 50000, max: 100000 },
      { label: "100K-150K", min: 100000, max: 150000 },
      { label: "150K+", min: 150000, max: Infinity },
    ],
    [],
  );

  // Apply filters whenever they change
  useEffect(() => {
    if (!jobs) return;

    let result = [...jobs];

    // Search term filter (job title or company name)
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (job) =>
          job.JobName.toLowerCase().includes(term) ||
          job.CompanyName.toLowerCase().includes(term) ||
          (job.JobDescription && job.JobDescription.toLowerCase().includes(term)),
      );
    }

    // Company filter
    if (selectedCompany) {
      result = result.filter((job) => job.CompanyName === selectedCompany);
    }

    // Job type filter
    if (selectedJobType) {
      result = result.filter((job) => job.JobType === selectedJobType);
    }

    // Location filter
    if (selectedLocation) {
      result = result.filter((job) => `${job.City}, ${job.Country}` === selectedLocation);
    }

    // Experience filter
    if (selectedExperience) {
      const [minExp, maxExp] = selectedExperience.split("-").map((val) => (val === "+" ? Infinity : Number(val)));
      result = result.filter((job) => {
        const exp = Number(job.RequiredExperience) || 0;
        return exp >= minExp && (maxExp === Infinity ? true : exp <= maxExp);
      });
    }

    // Salary filter
    if (selectedSalaryRange) {
      const range = salaryRanges.find((r) => r.label === selectedSalaryRange);
      if (range) {
        result = result.filter((job) => {
          const salary = job.Salary || 0;
          return salary >= range.min && salary <= range.max;
        });
      }
    }

    // Skills filter
    if (selectedSkills.length > 0) {
      result = result.filter((job) => {
        if (!job.RequiredSkills) return false;
        return selectedSkills.every((skill) => job.RequiredSkills?.includes(skill));
      });
    }

    setFilteredJobs(result);
  }, [
    jobs,
    searchTerm,
    selectedCompany,
    selectedJobType,
    selectedLocation,
    selectedExperience,
    selectedSalaryRange,
    selectedSkills,
    salaryRanges,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCompany("");
    setSelectedJobType("");
    setSelectedLocation("");
    setSelectedExperience("");
    setSelectedSalaryRange("");
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
    if (selectedExperience) count++;
    if (selectedSalaryRange) count++;
    count += selectedSkills.length;
    return count;
  };

  if (!jobs || jobs.length <= 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-6 bg-slate-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-100 mb-2">No Jobs Available</h2>
          <p className="text-gray-400">Check back later for new opportunities</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Search and Filter Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Available Jobs <span className="text-gray-400 text-lg">({filteredJobs.length})</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search jobs..."
              className="w-full pl-10 bg-transparent pr-4 py-2 rounded-lg  border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 py-2 px-4 rounded-lg text-white font-medium transition-all"
          >
            <Filter className="h-5 w-5" />
            Filters
            {getActiveFiltersCount() > 0 && (
              <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getActiveFiltersCount()}
              </span>
            )}
          </button>
        </div>
      </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Company Filter */}
            <div>
              <label className=" text-gray-300 mb-2 flex items-center gap-2">
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
              <label className=" text-gray-300 mb-2 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Job Type
              </label>
              <select
                value={selectedJobType}
                onChange={(e) => setSelectedJobType(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Types</option>
                {uniqueJobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className=" text-gray-300 mb-2 flex items-center gap-2">
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

            {/* Experience Filter */}
            <div>
              <label className=" text-gray-300 mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Experience (years)
              </label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Experience</option>
                {experienceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range} years
                  </option>
                ))}
              </select>
            </div>

            {/* Salary Range Filter */}
            <div>
              <label className=" text-gray-300 mb-2 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Salary Range
              </label>
              <select
                value={selectedSalaryRange}
                onChange={(e) => setSelectedSalaryRange(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Salary</option>
                {salaryRanges.map((range) => (
                  <option key={range.label} value={range.label}>
                    {range.label}
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

          {selectedExperience && (
            <span className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              Experience: {selectedExperience} years
              <button onClick={() => setSelectedExperience("")}>
                <X className="h-3 w-3 text-gray-400 hover:text-white" />
              </button>
            </span>
          )}

          {selectedSalaryRange && (
            <span className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              Salary: {selectedSalaryRange}
              <button onClick={() => setSelectedSalaryRange("")}>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="text-center p-6 bg-slate-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-100 mb-2">No Matching Jobs Found</h2>
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
    </div>
  );
};

export default JobList;
