import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Building2, MapPin, Briefcase, Clock, ChevronLeft, X, ExternalLink, Globe } from "lucide-react";
import { useGetJobById } from "../../hooks/jobs";
import { useState } from "react";
import { useApplyForJob } from "../../hooks/customer";
import { useUser } from "../../context/UserContext";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";

export default function JobDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [showApplying, setShowApplying] = useState(false);
  const { user } = useUser();
  const applyForJobMutation = useApplyForJob();

  const { data: job, isLoading: loading, error, isError } = useGetJobById(id ?? "");

  // Enhanced apply handler for both easy apply and external redirect
  const handleApplyClick = async () => {
    if (!user?.CustId || !id) {
      toast.error("Sign-Up to Apply");
      navigate("/sign-up", { state: { from: location } });
      return;
    }

    if (job?.EasyApply) {
      // Easy apply - process through our backend
      applyForJobMutation.mutate(
        {
          CustId: user.CustId,
          JobId: id,
          Result: "APPLIED",
        },
        {
          onSuccess: () => {
            toast.success("Application submitted successfully!");
            setShowApplying(false);
            navigate("/jobs");
          },
          onError: () => {
            toast.error("Already applied");
          },
        },
      );
    } else {
      // External apply - log attempt and redirect
      if (!job?.JobApplyURL) {
        toast.error("Job application URL not available");
        return;
      }

      try {
        // First log the application attempt to our backend
        applyForJobMutation.mutate(
          {
            CustId: user.CustId,
            JobId: id,
            Result: "REDIRECTED", // Different status for external applications
          },
          {
            onSuccess: () => {
              console.log("External application attempt logged");
            },
            onError: (error) => {
              console.warn("Failed to log external application attempt:", error);
            },
          },
        );

        // Show redirect message and open external URL
        toast.success("Redirecting to company application page...");

        // Open in new tab
        window.open(job.JobApplyURL, "_blank");

        // Close modal and optionally navigate back
        setShowApplying(false);
      } catch (error) {
        console.error("Failed to process external application:", error);
        toast.error("Failed to open application page. Please try again.");
      }
    }
  };

  const preprocessMarkdown = (text: string) => {
    return (
      text
        .replace(/\\-/g, "-") // Fix escaped hyphens
        // Add newlines before bullet points (if not already present)
        .replace(/([^\n])(\* )/g, "$1\n$2")
        // Add two newlines before bold labels like **Job Title:**
        .replace(/(\*\*[^\n]+?:\*\*)/g, "\n\n$1\n\n")
        // Replace multiple spaces with one (optional)
        .replace(/ +/g, " ")
        .trim()
    );
  };

  const cleanedDescription = preprocessMarkdown(job?.JobDescription || "");

  // Parse skills from JobDescription if RequiredSkills is null
  const extractSkillsFromDescription = (description: string): string[] => {
    const skillsMatch = description.match(/Skills:\s*(.+)$/);
    if (skillsMatch) {
      return skillsMatch[1]
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean);
    }
    return [];
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-[#000000] transition-colors duration-300 font-sans">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
      </div>
    );
  }

  if (isError || !job) {
    const errorMessage = isError ? (error instanceof Error ? error.message : "An error occurred") : "Job not found";
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-6 sm:pb-12 bg-white dark:bg-[#000000] text-gray-900 dark:text-white transition-colors duration-300 font-sans">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate("/jobs")}
              className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Jobs
            </button>
          </div>
          <div className="rounded-xl bg-white dark:bg-[#171717] p-8 text-center border border-gray-200 dark:border-[#848484]/30 shadow-sm transition-colors duration-300">
            <p className="text-red-500 dark:text-red-400 transition-colors duration-300">{errorMessage}</p>
            <button
              onClick={() => navigate("/jobs")}
              className="mt-4 rounded-lg bg-blue-500 dark:bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"
            >
              View All Jobs
            </button>
          </div>
        </div>
      </div>
    );
  }

  const skills = job.RequiredSkills
    ? job.RequiredSkills.split(",")
      .map((skill) => skill.trim())
      .filter(Boolean)
    : extractSkillsFromDescription(job.JobDescription);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-6 sm:pb-12 bg-white dark:bg-[#000000] text-gray-900 dark:text-white transition-colors duration-300 font-sans">
      {/* Application Modal */}
      {showApplying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowApplying(false)}
          ></div>

          <div className="relative bg-white dark:bg-[#171717] rounded-lg p-6 shadow-xl border border-gray-200 dark:border-[#848484]/30 max-w-md w-full m-4 z-10 transition-colors duration-300">
            <button
              onClick={() => setShowApplying(false)}
              className="absolute top-3 right-3 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 font-heading">
              {job.EasyApply ? "Apply with Profile" : "External Application"}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed transition-colors duration-300">
              {job.EasyApply
                ? "Your profile will be shared with employers. Ensure your details are up-to-date to improve your chances."
                : "This position requires applying directly on the company's website. You'll be redirected to their application page."}
            </p>

            {!job.EasyApply && job.JobApplyURL && (
              <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg transition-colors duration-300">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm transition-colors duration-300">
                  <ExternalLink size={16} />
                  <span>External application required</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">
                  You will be redirected to: {job.JobApplyURL ? new URL(job.JobApplyURL).hostname : ""}
                </p>
              </div>
            )}

            <div className="flex gap-4 justify-end">
              <button
                onClick={handleApplyClick}
                className={`px-4 py-2 text-sm font-medium rounded-md transition ${job.EasyApply
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-orange-600 hover:bg-orange-700 text-white"
                  }`}
              >
                {job.EasyApply ? "Proceed" : "Apply on Company Site"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="p-0 sm:p-0">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4 flex-1">
                {job.CompanyLogoURL && (
                  <div className="w-16 h-16 rounded-xl bg-gray-50 dark:bg-[#171717] border border-gray-100 dark:border-[#848484]/30 flex items-center justify-center overflow-hidden flex-shrink-0 transition-colors duration-300">
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
                <div className="flex-1">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 font-heading">{job.JobName}</h1>
                  <div className="flex items-center gap-2 text-xl text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-300">
                    <Building2 className="h-5 w-5" />
                    <span>{job.CompanyName}</span>
                  </div>
                  {job.CompanyURL && (
                    <a
                      href={job.CompanyURL}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm transition-colors duration-300"
                    >
                      <Globe className="h-4 w-4" />
                      Company Website
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${job.Active && !job.Deleted ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                >
                  {job.Active && !job.Deleted ? "Active" : "Closed"}
                </span>
              </div>
            </div>

            {/* Job Meta Information */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-[#171717] border border-gray-100 dark:border-[#848484]/30 rounded-lg transition-colors duration-300">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <MapPin className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Location</p>
                  <p className="text-sm font-medium">{job.Location || `${job.City}, ${job.Country}`}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <Briefcase className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Job Type</p>
                  <p className="text-sm font-medium capitalize">{job.JobType.replace("fulltime", "Full-time")}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <Clock className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Experience</p>
                  <p className="text-sm font-medium capitalize">{job.RequiredExperience || "Not specified"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <Clock className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Posted</p>
                  <p className="text-sm font-medium">{new Date(job.CreatedDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {job.Salary && (
              <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg">
                <p className="text-green-700 text-xl font-semibold">₹{job.Salary}</p>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 font-heading">Job Description</h2>
            <div className="prose prose-slate dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 transition-colors duration-300">
              <ReactMarkdown>{cleanedDescription}</ReactMarkdown>
            </div>
          </div>

          {skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 font-heading">Required Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {job.Category && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 font-heading">Category</h2>
              <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg text-sm font-medium border border-purple-100 dark:border-purple-800 transition-colors duration-300">
                {job.Category}
              </span>
            </div>
          )}

          {/* Apply Button */}
          <div className="pt-6 border-t border-gray-200 dark:border-[#848484]/30 transition-colors duration-300">
            <button
              onClick={() => setShowApplying(true)}
              disabled={job.Deleted || !job.Active}
              className={`w-full sm:w-auto px-8 py-3 text-lg font-medium rounded-lg transition-colors duration-300 ${job.Deleted || !job.Active
                ? "bg-gray-200 dark:bg-[#171717] text-gray-500 dark:text-gray-400 cursor-not-allowed border dark:border-[#848484]/30"
                : job.EasyApply
                  ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                  : "bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white"
                }`}
            >
              {job.Deleted || !job.Active
                ? "Position No Longer Available"
                : job.EasyApply
                  ? "Apply for this Position"
                  : "Apply on Company Site"}
            </button>

            {!job.EasyApply && job.JobApplyURL && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 transition-colors duration-300">
                This will redirect you to {job.JobApplyURL ? new URL(job.JobApplyURL).hostname : ""}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
