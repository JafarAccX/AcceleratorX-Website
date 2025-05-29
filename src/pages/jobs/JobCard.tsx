import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Building2, Briefcase } from "lucide-react";
import { Job } from "../../types/jobs";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  // Parse skills from JobDescription if RequiredSkills is null
  const extractSkillsFromDescription = (description: string): string[] => {
    const skillsMatch = description.match(/Skills:\s*(.+)$/);
    if (skillsMatch) {
      return skillsMatch[1]
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
        .slice(0, 6); // Limit to 6 skills for display
    }
    return [];
  };

  const skills = job.RequiredSkills
    ? job.RequiredSkills.split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
    : extractSkillsFromDescription(job.JobDescription);

  const truncateDescription = (text: string, maxLength: number = 120): string => {
    // Remove markdown and get plain text
    const plainText = text
      .replace(/\*\*(.+?)\*\*/g, "$1") // Remove bold markdown
      .replace(/\\-/g, "-") // Fix escaped hyphens
      .replace(/\r\n/g, " ")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return plainText.length > maxLength ? plainText.substring(0, maxLength) + "..." : plainText;
  };

  return (
    <div className="rounded-xl shadow-lg p-6 bg-[#0E1628] border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3 flex-1">
          {job.CompanyLogoURL && (
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src={job.CompanyLogoURL}
                alt={`${job.CompanyName} logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold text-white mb-1 line-clamp-2">{job.JobName}</h2>
            <div className="flex items-center text-gray-400 gap-1">
              <Building2 size={16} />
              <span className="truncate">{job.CompanyName}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              job.Active && !job.Deleted ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {job.Active && !job.Deleted ? "Active" : "Closed"}
          </span>
        </div>
      </div>

      {/* Job Details */}
      <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
        <div className="flex items-center gap-1">
          <Briefcase size={14} />
          <span className="capitalize">
            {job.JobType.replace("fulltime", "Full-time").replace("parttime", "Part-time")}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={14} />
          <span>{job.Location || `${job.City}, ${job.Country}`}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span className="capitalize">{job.RequiredExperience || "Not specified"}</span>
        </div>
      </div>

      {/* Salary */}
      {job.Salary && (
        <div className="mb-4">
          <span className="text-green-400 font-semibold">₹{job.Salary}</span>
        </div>
      )}

      {/* Description */}
      <div className="mb-4 flex-1">
        <p className="text-gray-300 text-sm leading-relaxed">{truncateDescription(job.JobDescription)}</p>
      </div>

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-white mb-2">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-medium border border-blue-500/30"
              >
                {skill}
              </span>
            ))}
            {skills.length > 4 && (
              <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-md text-xs">
                +{skills.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Category */}
      {job.Category && (
        <div className="mb-4">
          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs font-medium border border-purple-500/30">
            {job.Category}
          </span>
        </div>
      )}

      {/* Action Button */}
      <div className="flex justify-end pt-4 border-t border-gray-700">
        <Link
          to={`/jobs/${job.Id}`}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0E1628]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
