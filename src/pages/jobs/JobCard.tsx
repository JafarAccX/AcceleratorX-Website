import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import { Job } from "../../types/jobs";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);

    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else {
      return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div
      className="bg-[#FCFCFC] border border-[#EBEBEB] hover:shadow-lg transition-all duration-200"
      style={{
        borderRadius: '25px',
        boxShadow: '0px 1px 6px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="p-6 flex gap-4 items-start justify-between">
        {/* Header with Company and Time */}
        <div className="flex flex-col items-start  justify-between mb-3">
          <div className="flex gap-12">
            <div className="flex items-start  gap-2">
              <span className="text-sm font-medium text-gray-700 uppercase">
                {job.CompanyName}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-500">
                {formatTimeAgo(job.CreatedDate)}
              </span>
            </div>
            <span
              className="px-3 py-1 text-xs font-semibold uppercase rounded"
              style={{
                color: job.Category === 'GENERATIVE AI' ? '#FF6B35' :
                  job.Category === 'AI DATA ANALYSIS' ? '#4A90E2' :
                    job.Category === 'PRODUCT MANAGEMENT' ? '#9B59B6' :
                      job.Category === 'AI DIGITAL MARKETING' ? '#2ECC71' : '#3498DB',
                backgroundColor: 'transparent'
              }}
            >
              {job.Category || 'GENERAL'}
            </span>

          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {job.JobName}
            </h3>
            {/* Location and Job Type */}
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-gray-400" />
                <span>{job.City || job.Location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} className="text-gray-400" />
                <span className="capitalize">
                  {job.JobType.replace('fulltime', 'Full-time').replace('parttime', 'Part-time').replace('internship', 'Internship').replace('contract', 'Contract')}
                </span>
              </div>
            </div>
          </div>

        </div>


        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-3">
          <Link
            to={`/jobs/${job.Id}`}
            className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-full transition-colors duration-200"
          >
            Apply now
          </Link>
          <Link
            to={`/jobs/${job.Id}`}
            className="px-6 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-full transition-colors duration-200"
          >
            Know more
          </Link>
        </div>


      </div>
    </div>
  );
};

export default JobCard;
