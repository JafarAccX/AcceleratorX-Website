import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Building2, Briefcase } from "lucide-react";
import { Job } from "../../types/jobs";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="rounded-lg shadow-md p-6  shadow-slate-700 bg-slate-900">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold  mb-1">{job.JobName}</h2>
          <div className="flex items-center text-gray-400 gap-4">
            <div className="flex items-center gap-1">
              <Building2 size={16} />
              <span>{job.CompanyName}</span>
            </div>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            job.Active && !job.Deleted ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {job.Active && !job.Deleted ? "Active" : "Closed"}
        </span>
      </div>

      <div className="flex  items-start flex-col gap-4 mb-4 ">
        <div className="flex  items-center gap-4  ">
          <div className="flex items-center gap-1 text-gray-400">
            <Briefcase size={16} />
            <span>{job.JobType}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <MapPin size={16} />
            <span>{job.City + ", " + job.Country}</span>
          </div>
        </div>

        <div className="flex  items-center  gap-4 ">
          <div className="flex items-center gap-1 text-gray-400">
            <Clock size={16} />
            <span>{job.RequiredExperience}</span>
          </div>
          {job.Salary && (
            <div className="text-gray-400">
              <span>₹{job.Salary}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium  mb-2">Required Skills</h3>
        <div className="flex flex-wrap gap-2">{job.RequiredSkills}</div>
      </div>

      <div className="flex justify-end">
        <Link
          to={`/jobs/${job.Id}`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
