import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, MapPin, Briefcase, Clock, CheckCircle, XCircle, Clock3 } from "lucide-react";
import { jobService } from "../../services/jobService";
import { useUser } from "../../context/UserContext";

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-500";
      case "reviewed":
        return "bg-blue-500/10 text-blue-500";
      case "shortlisted":
        return "bg-green-500/10 text-green-500";
      case "rejected":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "pending":
        return <Clock3 className="h-4 w-4" />;
      case "reviewed":
        return <Clock className="h-4 w-4" />;
      case "shortlisted":
        return <CheckCircle className="h-4 w-4" />;
      case "rejected":
        return <XCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 ${getStatusColor()}`}>
      {getStatusIcon()}
      <span className="text-sm font-medium capitalize">{status}</span>
    </div>
  );
};

const ApplicationCard = ({ application }: { application: any }) => (
  <div className="rounded-xl bg-[#0E1628] p-6 transition-all duration-300 hover:shadow-2xl outline outline-1 outline-white/5">
    <div className="flex items-start justify-between">
      <div>
        <Link
          to={`/jobs/${application.job_id}`}
          className="text-xl font-semibold text-white hover:text-blue-400 transition-colors"
        >
          {application.jobs.title}
        </Link>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-white/60">
          <div className="flex items-center gap-1.5">
            <Building2 className="h-4 w-4" />
            <span>{application.jobs.company}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            <span>{application.jobs.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="h-4 w-4" />
            <span>{application.jobs.job_type}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>Applied on {new Date(application.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      <StatusBadge status={application.status} />
    </div>
  </div>
);

export default function AppliedJobs() {
  const { user } = useUser();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        if (!user) return;
        const data = await jobService.getUserApplications(user.id);
        setApplications(data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [user]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080B16]">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080B16] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-white">Applied Jobs</h1>
          <p className="text-lg text-white/60">Track the status of your job applications</p>
        </div>

        <div className="space-y-4">
          {applications.length > 0 ? (
            applications.map((application: any) => <ApplicationCard key={application.id} application={application} />)
          ) : (
            <div className="rounded-xl bg-[#0E1628] p-8 text-center">
              <p className="text-lg text-white/60">
                You haven't applied to any jobs yet.{" "}
                <Link to="/jobs" className="text-blue-400 hover:text-blue-300">
                  Browse open positions
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
