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
      <div className="flex min-h-screen items-center justify-center bg-[#080B16]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError || !job) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-6 sm:pb-12 bg-[#080B16] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate("/jobs")}
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Jobs
            </button>
          </div>
          <div className="rounded-xl bg-[#0E1628] p-8 text-center border border-gray-700">
            <p className="text-red-500">{JSON.stringify(error) || "Job not found"}</p>
            <button
              onClick={() => navigate("/jobs")}
              className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
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
    <div className="min-h-screen pt-20 sm:pt-24 pb-6 sm:pb-12 bg-[#080B16] text-white">
      {/* Application Modal */}
      {showApplying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowApplying(false)}
          ></div>

          <div className="relative bg-[#1A1A1A] rounded-lg p-6 shadow-lg border border-gray-700 max-w-md w-full m-4 z-10">
            <button
              onClick={() => setShowApplying(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-semibold text-white mb-4">
              {job.EasyApply ? "Apply with Profile" : "External Application"}
            </h3>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              {job.EasyApply
                ? "Your profile will be shared with employers. Ensure your details are up-to-date to improve your chances."
                : "This position requires applying directly on the company's website. You'll be redirected to their application page."}
            </p>

            {!job.EasyApply && job.JobApplyURL && (
              <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <div className="flex items-center gap-2 text-blue-300 text-sm">
                  <ExternalLink size={16} />
                  <span>External application required</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  You will be redirected to: {new URL(job.JobApplyURL).hostname}
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
        {/* Back Button */}


        <div className=" p-6 sm:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4 flex-1">
                {job.CompanyLogoURL && (
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
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
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{job.JobName}</h1>
                  <div className="flex items-center gap-2 text-xl text-gray-300 mb-2">
                    <Building2 className="h-5 w-5" />
                    <span>{job.CompanyName}</span>
                  </div>
                  {job.CompanyURL && (
                    <a
                      href={job.CompanyURL}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition"
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-800/30 rounded-lg">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm font-medium">{job.Location || `${job.City}, ${job.Country}`}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Briefcase className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Job Type</p>
                  <p className="text-sm font-medium capitalize">{job.JobType.replace("fulltime", "Full-time")}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Experience</p>
                  <p className="text-sm font-medium capitalize">{job.RequiredExperience || "Not specified"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Posted</p>
                  <p className="text-sm font-medium">{new Date(job.CreatedDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {job.Salary && (
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-xl font-semibold">₹{job.Salary}</p>
              </div>
            )}
          </div>

          {/* Job Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Job Description</h2>
            <ReactMarkdown>{cleanedDescription}</ReactMarkdown>
          </div>

          {/* Required Skills */}
          {skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Category */}
          {job.Category && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Category</h2>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30">
                {job.Category}
              </span>
            </div>
          )}

          {/* Apply Button */}
          <div className="pt-6 border-t border-gray-700">
            <button
              onClick={() => setShowApplying(true)}
              disabled={job.Deleted || !job.Active}
              className={`w-full sm:w-auto px-8 py-3 text-lg font-medium rounded-lg transition ${job.Deleted || !job.Active
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : job.EasyApply
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-orange-600 hover:bg-orange-700 text-white"
                }`}
            >
              {job.Deleted || !job.Active
                ? "Position No Longer Available"
                : job.EasyApply
                  ? "Apply for this Position"
                  : "Apply on Company Site"}
            </button>

            {!job.EasyApply && job.JobApplyURL && (
              <p className="text-xs text-gray-400 mt-2">
                This will redirect you to {new URL(job.JobApplyURL).hostname}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
