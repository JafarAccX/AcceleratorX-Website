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
      className="bg-white dark:bg-[#171717] border border-[#EBEBEB] dark:border-[#848484]/30 hover:shadow-lg transition-all duration-300 group"
      style={{
        borderRadius: '25px',
        boxShadow: '0px 1px 6px 3px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="p-5 md:p-6 flex flex-col md:flex-row gap-6 md:items-start justify-between">
        {/* Main Content Info */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3">
            <span className="text-xs md:text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider transition-colors duration-300">
              {job.CompanyName}
            </span>
            <span className="text-gray-300 dark:text-gray-700 hidden md:inline transition-colors duration-300">•</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
              {formatTimeAgo(job.CreatedDate)}
            </span>
            <span
              className="ml-auto md:ml-0 px-2.5 py-1 text-[10px] font-bold uppercase rounded-md tracking-tight transition-colors duration-300"
              style={{
                color: job.Category === 'GENERATIVE AI' ? '#FF6B35' :
                  job.Category === 'AI DATA ANALYSIS' ? '#4A90E2' :
                    job.Category === 'PRODUCT MANAGEMENT' ? '#9B59B6' :
                      job.Category === 'AI DIGITAL MARKETING' ? '#2ECC71' : '#3498DB',
                backgroundColor: 'rgba(0,0,0,0.03)'
              }}
            >
              {job.Category || 'GENERAL'}
            </span>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {job.JobName}
            </h3>
            {/* Location and Job Type */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-blue-500 dark:text-blue-400" />
                <span className="font-medium">{job.City || job.Location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-blue-500 dark:text-blue-400" />
                <span className="capitalize font-medium">
                  {job.JobType.replace('fulltime', 'Full-time').replace('parttime', 'Part-time').replace('internship', 'Internship').replace('contract', 'Contract')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex md:flex-col items-center gap-3 w-full md:w-auto">
          <Link
            to={`/jobs/${job.Id}`}
            className="flex-1 md:flex-none text-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-500/10 transition-all active:scale-95"
          >
            Apply now
          </Link>
          <Link
            to={`/jobs/${job.Id}`}
            className="flex-1 md:flex-none text-center px-6 py-2.5 border border-gray-200 dark:border-[#848484]/30 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 text-sm font-bold rounded-xl transition-all"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
