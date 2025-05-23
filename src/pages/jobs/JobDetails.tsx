import { useParams, useNavigate, Link } from "react-router-dom";
import { Building2, MapPin, Briefcase, Clock, ChevronLeft, X } from "lucide-react";
import { useGetJobById } from "../../hooks/jobs";
import { useState } from "react";
import { useApplyForJob } from "../../hooks/customer";
import { useUser } from "../../context/UserContext";
import toast from "react-hot-toast";

export default function JobDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showAppling, setShowAppling] = useState(false);
  const { user } = useUser();

  const applyForJobMutation = useApplyForJob();

  const { data: job, isLoading: loading, error, isError } = useGetJobById(id ?? "");

  const handleApplyClick = () => {
    console.log("appling for job");
    if (!user?.CustId || !id) {
      throw new Error("user custId or jobid is not present");
    }

    // Call the mutation with the required data
    applyForJobMutation.mutate({
      CustId: user?.CustId,
      JobId: id,
    });
    toast.success("Application submitted successfully!");
    navigate("/jobs");
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
            <p className="text-red-500">{JSON.stringify(error) || "Job not found"}</p>
            <button
              onClick={() => navigate("/jobs")}
              className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              "View All Jobs"
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  pt-20 sm:pt-24 pb-6 sm:pb-12">
      {showAppling && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred background overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowAppling(false)}
          ></div>

          {/* Modal content */}
          <div className="relative bg-black shadow-md shadow-slate-700 rounded-lg  p-6 max-w-md w-full m-4 z-10">
            {/* Close button */}
            <button
              onClick={() => setShowAppling(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 border-2 rounded-md border-black hover:border-slate-700"
            >
              <X size={24} />
            </button>

            <div className="mt-4">
              <h3 className="text-lg font-semibold  mb-4">Appling with Profile</h3>
              <p className="text-gray-300 mb-6">
                Your profile will be shared with potential employers reviewing your application. Make sure your
                information is complete and up-to-date to maximize your chances of being selected.
              </p>

              {/* Action buttons */}
              <div className="flex gap-4 justify-end">
                <Link
                  to="/profile"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-300 hover:border-blue-500 hover:text-blue-500"
                  // onClick={handleUpdateProfile}
                >
                  Update Profile
                </Link>
                <button
                  onClick={() => handleApplyClick()}
                  className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                >
                  Procced
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl  p-6 sm:p-8">
          <div className="mb-6">
            <div className="flex sm:flex-row-reverse  items-center justify-between">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  job.Active && !job.Deleted ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {job.Active && !job.Deleted ? "Active" : "Closed"}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{job.JobName}</h1>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4" />
                <span>{job.CompanyName}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span>{job.City + ", " + job.Country}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" />
                <span>{job.JobType}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>Posted {new Date(job.CreatedDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="max-w-none">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white">Description</h2>
              <p className="mt-2 text-white">{job.JobDescription}</p>
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

            {job.RequiredSkills && job.RequiredSkills.split(",").length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">Required Skills</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.RequiredSkills.split(",").map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full  px-3 py-1 text-sm border-blue-500 text-blue-500 border-2 "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8">
            <button
              onClick={() => setShowAppling(true)}
              disabled={job.Deleted}
              className="w-full rounded-lg disabled:bg-slate-900 bg-blue-500 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600 sm:w-auto"
            >
              Apply for this Position
            </button>
            {/* <button
              onClick={() => navigate(`/jobs/${job.Id}/apply`)}
              disabled={job.Deleted}
              className="w-full rounded-lg disabled:bg-slate-900 bg-blue-500 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600 sm:w-auto"
            >
              Apply for this Position
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
