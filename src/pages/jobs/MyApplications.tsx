import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { format, parseISO } from "date-fns";
import { useUser } from "../../context/UserContext";
import { JobApplication } from "../../types/job";
import { jobApplicationService } from "../../services/jobApplicationService";

const MyApplications: React.FC = () => {
  const { user } = useUser();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadMyApplications();
    }
  }, [user]);

  const loadMyApplications = async () => {
    try {
      const data = await jobApplicationService.getUserApplications(user!.id);
      setApplications(data);
    } catch (error) {
      console.error("Error loading applications:", error);
      toast.error("Failed to load your applications");
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "reviewed":
        return "bg-blue-100 text-blue-800";
      case "shortlisted":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-white">My Job Applications</h2>

      {applications.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 text-white">You haven't applied to any jobs yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {applications.map((application) => (
            <div key={application.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-black">{application.job?.title}</h3>
                  <p className="text-gray-600">{application.job?.company}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                  {application.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600 text-black">Applied On</p>
                  <p className="font-medium text-black">
                    {application.created_at
                      ? format(parseISO(application.created_at), "PPP") || "Invalid date"
                      : "Not available"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 text-black">Location</p>
                  <p className="font-medium text-black">{application.job?.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyApplications;
