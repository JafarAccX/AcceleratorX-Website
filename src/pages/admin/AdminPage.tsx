import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { authService } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  RefreshCw,
  Download,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
} from "lucide-react";
import BackButton from "../../components/common/BackButton";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =
  import.meta.env.VITE_SUPABASE_SERVICE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const ITEMS_PER_PAGE = 100;

type SortOrder = "asc" | "desc";

interface EnrollmentData {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  education_level: string;
  course: string;
  created_at: string;
  work_experience: string;
  designation: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  referrer: string;
  landing_page_url: string;
  fbclid: string;
  gclid: string;
  ttclid: string;
  msclkid: string;
}

const AdminPage: React.FC = () => {
  const [enrollments, setEnrollments] = useState<EnrollmentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [activeTab, setActiveTab] = useState<
    "enrollments" | "admin-access" | "sales-access"
  >("enrollments");
  const [adminEnrollments, setAdminEnrollments] = useState<EnrollmentData[]>([]);
  const [adminCurrentPage, setAdminCurrentPage] = useState(1);
  const [utmFilter, setUtmFilter] = useState({
    source: "",
    medium: "",
    campaign: "",
  });
  const [courseFilter, setCourseFilter] = useState("");
  const [showUtmStats, setShowUtmStats] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const userRole = authService.getRole();

  useEffect(() => {
    if (userRole === "enrollment") {
      setActiveTab("enrollments");
    }
  }, [userRole]);

  const sortData = (data: EnrollmentData[]) => {
    return [...data].sort((a, b) => {
      const multiplier = sortOrder === "asc" ? 1 : -1;
      return (
        multiplier *
        (new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
      );
    });
  };

  const handleSort = () => {
    setSortOrder((current) => (current === "asc" ? "desc" : "asc"));
    setCurrentPage(1);
  };

  const calculateUtmStats = (data: EnrollmentData[]) => {
    const stats = {
      sources: {} as Record<string, number>,
      mediums: {} as Record<string, number>,
      campaigns: {} as Record<string, number>,
      referrers: {} as Record<string, number>,
    };

    data.forEach((enrollment) => {
      if (enrollment.utm_source) {
        stats.sources[enrollment.utm_source] = (stats.sources[enrollment.utm_source] || 0) + 1;
      }
      if (enrollment.utm_medium) {
        stats.mediums[enrollment.utm_medium] = (stats.mediums[enrollment.utm_medium] || 0) + 1;
      }
      if (enrollment.utm_campaign) {
        stats.campaigns[enrollment.utm_campaign] = (stats.campaigns[enrollment.utm_campaign] || 0) + 1;
      }
      if (enrollment.referrer) {
        stats.referrers[enrollment.referrer] = (stats.referrers[enrollment.referrer] || 0) + 1;
      }
    });

    return stats;
  };

  const filteredEnrollments = sortData(enrollments).filter((enrollment) => {
    const searchMatches =
      searchQuery === "" ||
      enrollment.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      enrollment.phone_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      enrollment.email?.toLowerCase().includes(searchQuery.toLowerCase());

    if (userRole === "ad1" || userRole === "ad2") {
      return (
        searchMatches &&
        (!utmFilter.source || enrollment.utm_source?.includes(utmFilter.source)) &&
        (!utmFilter.medium || enrollment.utm_medium?.includes(utmFilter.medium)) &&
        (!utmFilter.campaign || enrollment.utm_campaign?.includes(utmFilter.campaign))
      );
    }

    return (
      searchMatches &&
      (!utmFilter.source || enrollment.utm_source?.includes(utmFilter.source)) &&
      (!utmFilter.medium || enrollment.utm_medium?.includes(utmFilter.medium)) &&
      (!utmFilter.campaign || enrollment.utm_campaign?.includes(utmFilter.campaign)) &&
      (!courseFilter || enrollment.course?.toLowerCase().includes(courseFilter.toLowerCase()))
    );
  });

  const totalPages = Math.ceil(filteredEnrollments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEnrollments = filteredEnrollments.slice(startIndex, endIndex);
  const utmStats = calculateUtmStats(enrollments);

  const getUniqueCourses = () => {
    const courses = new Set(enrollments.map((e) => e.course));
    return Array.from(courses).filter(Boolean).sort();
  };

  const fetchEnrollments = async () => {
    try {
      setRefreshing(true);
      let query = supabase.from("enrollments").select("*");

      if (userRole === "ad1") {
        query = query.eq("course", "Data Analytics");
      } else if (userRole === "ad2") {
        query = query.eq("course", "Product Management");
      }

      const { data, error } = await query.order("created_at", { ascending: false });

      if (error) throw error;

      if (userRole === "admin" || userRole === "sales") {
        setAdminEnrollments(data || []);
      }
      setEnrollments(data || []);
      toast.success("Data refreshed successfully");
    } catch (error) {
      console.error("Error fetching enrollments:", error);
      toast.error("Failed to fetch enrollment data");
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch enrollments for admin view
        if (userRole === "admin" || userRole === "sales") {
          const { data: adminEnrollmentData, error: adminEnrollmentError } =
            await supabase
              .from("enrollments")
              .select("*")
              .order("created_at", { ascending: false });

          if (adminEnrollmentError) throw adminEnrollmentError;
          setAdminEnrollments(adminEnrollmentData || []);
        }

        // Fetch enrollments based on role
        let query = supabase.from("enrollments").select("*");

        if (userRole === "ad1") {
          query = query.eq("course", "Data Analytics");
        } else if (userRole === "ad2") {
          query = query.eq("course", "Product Management");
        }

        const { data: enrollmentData, error: enrollmentError } = await query;

        if (enrollmentError) throw enrollmentError;
        setEnrollments(enrollmentData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userRole]);

  const handleDownloadCSV = () => {
    try {
      const headers = [
        "S.No",
        "Full Name",
        "Email",
        "Phone Number",
        "Education Level",
        "Course",
        "Work Experience",
        "Designation",
        "Date",
        "UTM Source",
        "UTM Medium",
        "UTM Campaign",
        "UTM Term",
        "UTM Content",
        "Referrer",
        "Landing Page URL",
        "FB Click ID",
        "Google Click ID",
        "TikTok Click ID",
        "MS Click ID",
      ];
      const csvContent = [
        headers.join(","),
        ...filteredEnrollments.map((enrollment, index) => [
          index + 1,
          enrollment.full_name,
          enrollment.email,
          enrollment.phone_number,
          enrollment.education_level,
          enrollment.course,
          enrollment.work_experience,
          enrollment.designation,
          new Date(enrollment.created_at).toLocaleDateString(),
          enrollment.utm_source || "",
          enrollment.utm_medium || "",
          enrollment.utm_campaign || "",
          enrollment.utm_term || "",
          enrollment.utm_content || "",
          enrollment.referrer || "",
          enrollment.landing_page_url || "",
          enrollment.fbclid || "",
          enrollment.gclid || "",
          enrollment.ttclid || "",
          enrollment.msclkid || "",
        ].join(",")),
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `enrollments_${new Date().toISOString().split("T")[0]}.csv`
      );
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("CSV downloaded successfully");
    } catch (error) {
      console.error("Error downloading CSV:", error);
      toast.error("Failed to download CSV");
    }
  };

  const formatDateTimeIST = (dateStr: string) => {
    return new Date(dateStr).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Lead Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">
              View and manage all enrollment submissions
            </p>
            <BackButton />

          </div>
          <div className="flex gap-4">
            <button
              onClick={fetchEnrollments}
              disabled={refreshing}
              className={`flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors ${
                refreshing ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <RefreshCw
                className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </button>
            <button
              onClick={() => {
                authService.logout();
                navigate("/login");
              }}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {userRole !== "enrollment" && (
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                {userRole === "admin" && (
                  <button
                    onClick={() => setActiveTab("admin-access")}
                    className={`py-4 px-6 text-sm font-medium ${
                      activeTab === "admin-access"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Admin Access
                  </button>
                )}
                {userRole === "sales" && (
                  <button
                    onClick={() => setActiveTab("sales-access")}
                    className={`py-4 px-6 text-sm font-medium ${
                      activeTab === "sales-access"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Sales Access
                  </button>
                )}
              </nav>
            </div>
          )}

          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Filters</h3>
              <button
                onClick={() => setShowUtmStats(!showUtmStats)}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                {showUtmStats ? "Hide Stats" : "Show Stats"}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Search by name, email, or phone"
                className="border border-gray-300 rounded-md px-3 py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {userRole !== "ad1" && userRole !== "ad2" && (
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white"
                  value={courseFilter}
                  onChange={(e) => setCourseFilter(e.target.value)}
                >
                  <option value="">All Courses</option>
                  {getUniqueCourses().map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              )}
              {(userRole === "ad1" || userRole === "ad2") && (
                <div className="p-2 border rounded bg-gray-100">
                  Course: {userRole === "ad1" ? "Data Analytics" : "Product Management"}
                </div>
              )}
              <input
                type="text"
                placeholder="Filter by UTM Source"
                className="border border-gray-300 rounded-md px-3 py-2"
                value={utmFilter.source}
                onChange={(e) => setUtmFilter((prev) => ({ ...prev, source: e.target.value }))}
              />
              <input
                type="text"
                placeholder="Filter by UTM Medium"
                className="border border-gray-300 rounded-md px-3 py-2"
                value={utmFilter.medium}
                onChange={(e) => setUtmFilter((prev) => ({ ...prev, medium: e.target.value }))}
              />
              <input
                type="text"
                placeholder="Filter by UTM Campaign"
                className="border border-gray-300 rounded-md px-3 py-2"
                value={utmFilter.campaign}
                onChange={(e) => setUtmFilter((prev) => ({ ...prev, campaign: e.target.value }))}
              />
            </div>
            {courseFilter && (
              <div className="mt-2 text-sm text-gray-600">
                Showing enrollments for: <span className="font-medium">{courseFilter}</span>
                <button
                  onClick={() => setCourseFilter("")}
                  className="ml-2 text-blue-600 hover:text-blue-500"
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          {showUtmStats && (
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Top Sources</h4>
                  <div className="space-y-1">
                    {Object.entries(utmStats.sources)
                      .sort(([, a], [, b]) => b - a)
                      .slice(0, 5)
                      .map(([source, count]) => (
                        <div key={source} className="flex justify-between text-sm">
                          <span className="text-gray-600">{source}</span>
                          <span className="text-gray-900">{count}</span>
                        </div>
                      ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Top Mediums</h4>
                  <div className="space-y-1">
                    {Object.entries(utmStats.mediums)
                      .sort(([, a], [, b]) => b - a)
                      .slice(0, 5)
                      .map(([medium, count]) => (
                        <div key={medium} className="flex justify-between text-sm">
                          <span className="text-gray-600">{medium}</span>
                          <span className="text-gray-900">{count}</span>
                        </div>
                      ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Top Campaigns</h4>
                  <div className="space-y-1">
                    {Object.entries(utmStats.campaigns)
                      .sort(([, a], [, b]) => b - a)
                      .slice(0, 5)
                      .map(([campaign, count]) => (
                        <div key={campaign} className="flex justify-between text-sm">
                          <span className="text-gray-600">{campaign}</span>
                          <span className="text-gray-900">{count}</span>
                        </div>
                      ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Top Referrers</h4>
                  <div className="space-y-1">
                    {Object.entries(utmStats.referrers)
                      .sort(([, a], [, b]) => b - a)
                      .slice(0, 5)
                      .map(([referrer, count]) => (
                        <div key={referrer} className="flex justify-between text-sm">
                          <span className="text-gray-600">{referrer}</span>
                          <span className="text-gray-900">{count}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <div className="flex justify-end mb-4">
                <button
                  onClick={handleDownloadCSV}
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download CSV
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        S.No
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Full Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Phone Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Education Level
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Course
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Work Experience
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Designation
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                        onClick={handleSort}
                      >
                        <div className="flex items-center gap-1">
                          Date
                          <ArrowUpDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        UTM Source
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        UTM Medium
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        UTM Campaign
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Referrer
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentEnrollments.map((enrollment, index) => (
                      <tr key={enrollment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {enrollment.full_name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {enrollment.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {enrollment.phone_number}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {enrollment.education_level}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {enrollment.course}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {enrollment.work_experience}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {enrollment.designation}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {formatDateTimeIST(enrollment.created_at)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {enrollment.utm_source || "-"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {enrollment.utm_medium || "-"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {enrollment.utm_campaign || "-"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {enrollment.referrer || "-"}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {totalPages > 1 && (
                <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg hover:bg-gray-100 ${
                        currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <span className="text-sm text-gray-700">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg hover:bg-gray-100 ${
                        currentPage === totalPages
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Show Admin Access table if in admin tab */}
              {activeTab === "admin-access" && userRole === "admin" && (
                <div className="flex justify-between p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Admin Access - All Enrollment Data
                  </h2>
                  <button
                    onClick={() => {
                      try {
                        const headers = [
                          "S.No",
                          "Full Name",
                          "Email",
                          "Phone Number",
                          "Education Level",
                          "Course",
                          "Work Experience",
                          "Designation",
                          "Date",
                          "UTM Source",
                          "UTM Medium",
                          "UTM Campaign",
                          "UTM Term",
                          "UTM Content",
                          "Referrer",
                          "Landing Page URL",
                          "FB Click ID",
                          "Google Click ID",
                          "TikTok Click ID",
                          "MS Click ID",
                        ];
                        const csvContent = [
                          headers.join(","),
                          ...adminEnrollments.map((enrollment, index) => [
                            index + 1,
                            enrollment.full_name,
                            enrollment.email,
                            enrollment.phone_number,
                            enrollment.education_level,
                            enrollment.course,
                            enrollment.work_experience,
                            enrollment.designation,
                            formatDateTimeIST(enrollment.created_at),
                            enrollment.utm_source || "",
                            enrollment.utm_medium || "",
                            enrollment.utm_campaign || "",
                            enrollment.utm_term || "",
                            enrollment.utm_content || "",
                            enrollment.referrer || "",
                            enrollment.landing_page_url || "",
                            enrollment.fbclid || "",
                            enrollment.gclid || "",
                            enrollment.ttclid || "",
                            enrollment.msclkid || "",
                          ].join(",")),
                        ].join("\n");

                        const blob = new Blob([csvContent], {
                          type: "text/csv;charset=utf-8;",
                        });
                        const link = document.createElement("a");
                        const url = URL.createObjectURL(blob);
                        link.setAttribute("href", url);
                        link.setAttribute(
                          "download",
                          `all_enrollments_${
                            new Date().toISOString().split("T")[0]
                          }.csv`
                        );
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        toast.success("CSV downloaded successfully");
                      } catch (error) {
                        console.error("Error downloading CSV:", error);
                        toast.error("Failed to download CSV");
                      }
                    }}
                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download All Enrollments
                  </button>
                </div>
              )}

              {/* Show Sales Access table if in sales tab */}
              {activeTab === "sales-access" && userRole === "sales" && (
                <div className="flex justify-between p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Sales Access - All Enrollment Data
                  </h2>
                  <button
                    onClick={() => {
                      try {
                        const headers = [
                          "S.No",
                          "Full Name",
                          "Email",
                          "Phone Number",
                          "Education Level",
                          "Course",
                          "Work Experience",
                          "Designation",
                          "Date",
                          "UTM Source",
                          "UTM Medium",
                          "UTM Campaign",
                          "UTM Term",
                          "UTM Content",
                          "Referrer",
                          "Landing Page URL",
                          "FB Click ID",
                          "Google Click ID",
                          "TikTok Click ID",
                          "MS Click ID",
                        ];
                        const csvContent = [
                          headers.join(","),
                          ...adminEnrollments.map((enrollment, index) => [
                            index + 1,
                            enrollment.full_name,
                            enrollment.email,
                            enrollment.phone_number,
                            enrollment.education_level,
                            enrollment.course,
                            enrollment.work_experience,
                            enrollment.designation,
                            formatDateTimeIST(enrollment.created_at),
                            enrollment.utm_source || "",
                            enrollment.utm_medium || "",
                            enrollment.utm_campaign || "",
                            enrollment.utm_term || "",
                            enrollment.utm_content || "",
                            enrollment.referrer || "",
                            enrollment.landing_page_url || "",
                            enrollment.fbclid || "",
                            enrollment.gclid || "",
                            enrollment.ttclid || "",
                            enrollment.msclkid || "",
                          ].join(",")),
                        ].join("\n");

                        const blob = new Blob([csvContent], {
                          type: "text/csv;charset=utf-8;",
                        });
                        const link = document.createElement("a");
                        const url = URL.createObjectURL(blob);
                        link.setAttribute("href", url);
                        link.setAttribute(
                          "download",
                          `all_enrollments_${
                            new Date().toISOString().split("T")[0]
                          }.csv`
                        );
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        toast.success("CSV downloaded successfully");
                      } catch (error) {
                        console.error("Error downloading CSV:", error);
                        toast.error("Failed to download CSV");
                      }
                    }}
                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download All Enrollments
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AdminPage;
