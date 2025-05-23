import React from "react";
import { format, parseISO } from "date-fns";
import { useUser } from "../../context/UserContext";
import { useGetCustomerApplications } from "../../hooks/customer";

const statusColors: Record<string, string> = {
  applied: "bg-blue-900 text-blue-300",
  pending: "bg-yellow-900 text-yellow-300",
  shortlisted: "bg-green-900 text-green-300",
  rejected: "bg-red-900 text-red-300",
};

const MyApplications: React.FC = () => {
  const { user } = useUser();
  const { data: myJobs, isLoading } = useGetCustomerApplications(user?.CustId || "");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <h2 className="text-3xl font-bold mb-6 text-white">My Job Applications</h2>

      {myJobs?.length === 0 ? (
        <div className="text-center text-gray-400">
          <p>You have not applied for any jobs yet.</p>
        </div>
      ) : (
        <>
          <p className="text-gray-400 mb-4">
            You have applied for <strong>{myJobs?.length}</strong> job(s).
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myJobs?.map((application) => (
              <div
                key={application.Id}
                className="bg-gray-800 rounded-2xl border border-gray-700 hover:shadow-lg transition duration-200 overflow-hidden"
              >
                <div className="flex items-center min-h-[120px] gap-4 p-4 border-b border-gray-700">
                  <img
                    src={application.CompanyLogoURL}
                    alt={application.CompanyName}
                    className="w-12 h-12 object-cover rounded-md bg-white"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{application.JobName}</h3>
                    <p className="text-sm text-gray-400">{application.CompanyName}</p>
                  </div>
                  <span
                    className={`ml-auto px-3 py-1 text-sm font-medium rounded-full ${
                      statusColors[application.Result.toLowerCase()] || "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {application.Result}
                  </span>
                </div>
                <div className="p-4 text-sm text-gray-300 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400">Applied On</p>
                    <p className="font-medium">
                      {application.CreatedDate ? format(parseISO(application.CreatedDate), "PPP") : "Not available"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="font-medium">
                      {application.City}, {application.Country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyApplications;
