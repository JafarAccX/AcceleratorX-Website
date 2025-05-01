import React from "react";
import { Link } from "react-router-dom";
import { Job } from "../../types/job";
import { MapPin, Clock, Building2, Briefcase } from "lucide-react";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-100 mb-1">{job.title}</h2>
          <div className="flex items-center text-gray-300 gap-4">
            <div className="flex items-center gap-1">
              <Building2 size={16} />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            job.is_active ? "bg-emerald-900 text-emerald-200" : "bg-red-900 text-red-200"
          }`}
        >
          {job.is_active ? "Active" : "Closed"}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-1 text-gray-300">
          <Briefcase size={16} />
          <span>{job.job_type}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-300">
          <Clock size={16} />
          <span>{job.experience_level}</span>
        </div>
        {job.salary_range && (
          <div className="text-gray-300">
            <span>₹{job.salary_range}</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-200 mb-2">Required Skills</h3>
        <div className="flex flex-wrap gap-2">
          {job.skills?.map((skill, index) => (
            <span key={index} className="bg-blue-900 text-blue-100 text-sm px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          to={`/jobs/${job.id}`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-800 bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-400 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
