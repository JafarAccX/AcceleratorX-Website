import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../../types/job';
import { MapPin, Clock, Building2, Briefcase } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            {job.title}
          </h2>
          <div className="flex items-center text-gray-600 gap-4">
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
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          job.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {job.is_active ? 'Active' : 'Closed'}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-1 text-gray-600">
          <Briefcase size={16} />
          <span>{job.job_type}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Clock size={16} />
          <span>{job.experience_level}</span>
        </div>
        {job.salary_range && (
          <div className="text-gray-600">
            <span>₹{job.salary_range}</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Required Skills</h3>
        <div className="flex flex-wrap gap-2">
          {job.skills?.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          to={`/jobs/${job.id}`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
