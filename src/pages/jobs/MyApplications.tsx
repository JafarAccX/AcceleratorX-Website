import React from "react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useGetCustomerApplications } from "../../hooks/customer";
import { ArrowUpRight } from "lucide-react";

const statusColors: Record<string, string> = {
  applied: "bg-blue-50 text-blue-700 border border-blue-100",
  pending: "bg-yellow-50 text-yellow-700 border border-yellow-100",
  reviewing: "bg-purple-50 text-purple-700 border border-purple-100",
  shortlisted: "bg-green-50 text-green-700 border border-green-100",
  rejected: "bg-red-50 text-red-700 border border-red-100",
  offered: "bg-blue-100 text-blue-800 border border-blue-200",
  accepted: "bg-green-100 text-green-800 border border-green-200",
  declined: "bg-gray-100 text-gray-800 border border-gray-200",
  redirected: "bg-orange-50 text-orange-700 border border-orange-100",
};

const MyApplications: React.FC = () => {
  const { user } = useUser();
  const { data: myJobs, isLoading } = useGetCustomerApplications(user?.CustId || "");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">My Job Applications</h2>

        {myJobs?.length === 0 ? (
          <div className="mt-12 text-center p-12 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-500 text-lg">You have not applied for any jobs yet.</p>
          </div>
        ) : (
          <>
            <p className="text-gray-500 mb-8">
              You have applied for <span className="font-semibold text-gray-900">{myJobs?.length}</span> job(s).
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myJobs?.map((application) => (
                <div
                  key={application.Id}
                  className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center min-h-[120px] gap-4 p-5 border-b border-gray-100">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 p-2 flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={application.CompanyLogoURL}
                        alt={application.CompanyName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link to={`/jobs/${application.JobId}`} className="block">
                        <h3 className="text-lg font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                          {application.JobName}
                        </h3>
                      </Link>
                      <p className="text-sm font-medium text-gray-500 truncate">{application.CompanyName}</p>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider whitespace-nowrap ${statusColors[application.Result.toLowerCase()] || "bg-gray-100 text-gray-600 border border-gray-200"
                        }`}
                    >
                      {application.Result}
                    </span>
                  </div>
                  <div className="p-5 text-sm grid grid-cols-2 gap-4 bg-gray-50/50 flex-grow">
                    <div>
                      <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold mb-1">Applied On</p>
                      <p className="font-semibold text-gray-700">
                        {application.CreatedDate ? format(parseISO(application.CreatedDate), "PPP") : "Not available"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold mb-1">Location</p>
                      <p className="font-semibold text-gray-700">
                        {application.City}, {application.Country}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/jobs/${application.JobId}`}
                    className="flex items-center justify-center gap-2 p-3 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors border-t border-gray-100"
                  >
                    View Job Details
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyApplications;
