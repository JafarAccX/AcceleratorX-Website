import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import JobCard from "./JobCard";
import { toast } from "react-hot-toast";
import MyApplications from "./MyApplications";
import { useUser } from "../../context/UserContext";
import { Job } from "../../types/job";

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"listings" | "applications">("listings");
  const [companies, setCompanies] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const { user } = useUser();

  useEffect(() => {
    fetchJobs();
  }, [selectedCompany]);

  const fetchJobs = async () => {
    try {
      let query = supabase.from("jobs").select("*").eq("is_active", true).order("created_at", { ascending: false });

      if (selectedCompany) {
        query = query.eq("company", selectedCompany);
      }

      const { data, error } = await query;

      if (error) throw error;
      setJobs(data || []);

      // Extract unique companies
      const uniqueCompanies = Array.from(new Set(data?.map((job) => job.company) || []));
      setCompanies(uniqueCompanies);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Failed to fetch jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6 mt-8">
        <button
          onClick={() => setActiveTab("listings")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "listings" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Job Listings
        </button>
        {user && (
          <button
            onClick={() => setActiveTab("applications")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "applications" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            My Applications
          </button>
        )}
      </div>

      {/* Company Filter */}
      {activeTab === "listings" && (
        <div className="mb-6">
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="w-64 p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Companies</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Content */}
      {activeTab === "listings" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p>Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          )}
        </div>
      ) : (
        <MyApplications />
      )}
    </div>
  );
};

export default JobList;
