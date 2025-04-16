import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Building2, MapPin, Briefcase, Clock, ChevronLeft } from "lucide-react";
import { Job } from "../../types/job";
import { jobService } from "../../services/jobService";

export default function JobDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        if (!id) {
          setError("Job ID is required");
          return;
        }
        const data = await jobService.getJobById(id);
        setJob(data);
        setError(null);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch job details";
        setError(errorMessage);
        console.error("Error fetching job:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080B16]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-[#080B16] pt-20 sm:pt-24 pb-6 sm:pb-12">
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
          <div className="rounded-xl bg-[#0E1628] p-8 text-center">
            <p className="text-red-500">{error || "Job not found"}</p>
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

  return (
    <div className="min-h-screen bg-[#080B16] pt-20 sm:pt-24 pb-6 sm:pb-12">
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

        <div className="rounded-xl bg-[#0E1628] p-6 sm:p-8">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">{job.title}</h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4" />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" />
                <span>{job.job_type}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>Posted {new Date(job.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white">Description</h2>
              <p className="mt-2 text-white">{job.description}</p>
            </div>

            {/* Requirements */}
            {/* {job.requirements && job.requirements.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">Requirements</h2>
                <ul className="mt-2 list-disc pl-6 text-white/80 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )} */}

            {/* Responsibilities */}
            {/* {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">Responsibilities</h2>
                <ul className="mt-2 list-disc pl-6 text-white/80 space-y-1">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            )} */}

            {/* Skills */}
            {job.skills && job.skills.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">Required Skills</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/70">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8">
            <button
              onClick={() => navigate(`/jobs/${job.id}/apply`)}
              className="w-full rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600 sm:w-auto"
            >
              Apply for this Position
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
