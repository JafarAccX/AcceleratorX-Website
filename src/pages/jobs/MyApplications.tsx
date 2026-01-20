import React from "react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useGetCustomerApplications } from "../../hooks/customer";
import { ArrowUpRight } from "lucide-react";

const statusColors: Record<string, string> = {
  applied: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-800/30",
  pending: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-800/30",
  reviewing: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border border-purple-100 dark:border-purple-800/30",
  shortlisted: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-800/30",
  rejected: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-100 dark:border-red-800/30",
  offered: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700/30",
  accepted: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700/30",
  declined: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700",
  redirected: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border border-orange-100 dark:border-orange-800/30",
};

const MyApplications: React.FC = () => {
  const { user } = useUser();
  const { data: myJobs, isLoading } = useGetCustomerApplications(user?.CustId || "");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-[#000000]">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">My Job Applications</h2>

        {myJobs?.length === 0 ? (
          <div className="mt-12 text-center p-12 bg-gray-50 dark:bg-[#171717] rounded-2xl border border-gray-100 dark:border-[#848484]/30">
            <p className="text-gray-500 dark:text-gray-400 text-lg">You have not applied for any jobs yet.</p>
          </div>
        ) : (
          <>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              You have applied for <span className="font-semibold text-gray-900 dark:text-white">{myJobs?.length}</span> job(s).
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myJobs?.map((application) => (
                <div
                  key={application.Id}
                  className="bg-white dark:bg-[#171717] rounded-2xl border border-gray-200 dark:border-[#848484]/30 flex flex-col"
                >
                  <div className="flex items-center min-h-[120px] gap-4 p-5 border-b border-gray-100 dark:border-[#848484]/20">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 dark:bg-[#0A0A0A] border border-gray-100 dark:border-[#848484]/30 p-2 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img
                        src={application.CompanyLogoURL}
                        alt={application.CompanyName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link to={`/jobs/${application.JobId}`} className="block">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate hover:text-blue-600 dark:hover:text-blue-400">
                          {application.JobName}
                        </h3>
                      </Link>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{application.CompanyName}</p>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider whitespace-nowrap ${statusColors[application.Result.toLowerCase()] || "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                        }`}
                    >
                      {application.Result}
                    </span>
                  </div>
                  <div className="p-5 text-sm grid grid-cols-2 gap-4 bg-gray-50/50 dark:bg-[#0A0A0A]/50 flex-grow">
                    <div>
                      <p className="text-gray-400 dark:text-gray-500 text-[11px] uppercase tracking-widest font-bold mb-1">Applied On</p>
                      <p className="font-semibold text-gray-700 dark:text-gray-300">
                        {application.CreatedDate ? format(parseISO(application.CreatedDate), "PPP") : "Not available"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 dark:text-gray-500 text-[11px] uppercase tracking-widest font-bold mb-1">Location</p>
                      <p className="font-semibold text-gray-700 dark:text-gray-300">
                        {application.City}, {application.Country}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/jobs/${application.JobId}`}
                    className="flex items-center justify-center gap-2 p-3 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 border-t border-gray-100 dark:border-[#848484]/20"
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
