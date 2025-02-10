import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Search, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';
import { supabase } from "../../lib/supabaseClient";
import BackButton from "../../components/common/BackButton";

interface ScholarshipEntry {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  education: string;
  is_enthusiastic: boolean;
  is_ai_related: boolean;
  career_likelihood: string;
  scholarship_reasons: string;
  course_motivation: string;
}

const ScholarshipDetails: React.FC = () => {
  const navigate = useNavigate();
  const [scholarships, setScholarships] = useState<ScholarshipEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredScholarships, setFilteredScholarships] = useState<ScholarshipEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("scholarship_applications")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        setScholarships(data || []);
        setFilteredScholarships(data || []);
        setError(null);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
        setError("Failed to load scholarship data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = scholarships.filter((entry) =>
      Object.values(entry).some(
        (value) =>
          value !== null &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredScholarships(filtered);
  }, [searchTerm, scholarships]);

  const exportToExcel = () => {
    const exportData = filteredScholarships.map(entry => ({
      Date: formatDate(entry.created_at),
      Name: entry.name,
      Email: entry.email,
      Phone: entry.phone,
      Education: entry.education,
      'AI Related Experience': entry.is_ai_related ? 'Yes' : 'No',
      'Enthusiastic About AI': entry.is_enthusiastic ? 'Yes' : 'No',
      'Career Likelihood': entry.career_likelihood,
      'Scholarship Reasons': entry.scholarship_reasons,
      'Course Motivation': entry.course_motivation
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Scholarships");
    XLSX.writeFile(workbook, "scholarship_applications.xlsx");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const formatBoolean = (value: boolean) => {
    return value ? (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Yes
      </span>
    ) : (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        No
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 mt-10">
          <BackButton />
          <div className="flex justify-between items-center mt-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Scholarship Applications
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                View and manage scholarship applications
              </p>
            </div>
            <button
              onClick={exportToExcel}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Export to Excel
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Education
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      AI Related
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Enthusiastic
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Career Likelihood
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredScholarships.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="px-6 py-4 text-center">
                        No scholarship applications found
                      </td>
                    </tr>
                  ) : (
                    filteredScholarships.map((entry) => (
                      <tr key={entry.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(entry.created_at)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {entry.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {entry.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {entry.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {entry.education}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {formatBoolean(entry.is_ai_related)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {formatBoolean(entry.is_enthusiastic)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {entry.career_likelihood}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <button
                            onClick={() => {
                              alert(
                                `Scholarship Reasons:\n${entry.scholarship_reasons}\n\nCourse Motivation:\n${entry.course_motivation}`
                              );
                            }}
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ScholarshipDetails;
