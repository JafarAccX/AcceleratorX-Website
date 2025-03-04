import React, { useState, useEffect, useCallback } from "react";
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
  Search,
} from "lucide-react";
import BackButton from "../../components/common/BackButton";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =
  import.meta.env.VITE_SUPABASE_SERVICE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const ITEMS_PER_PAGE = 100;

type SortOrder = "asc" | "desc";

interface WorkshopData {
  id: string;
  name: string;
  email: string;
  phone: string;
  education: string;
  designation: string;
  years_of_experience: string;
  created_at: string;
  workshop_type: string;
  payment_status: "pending" | "completed" | "failed";
  razorpay_order_id?: string;
  razorpay_payment_id?: string;
  is_free: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
  landing_page_url?: string;
  fbclid?: string;
  gclid?: string;
  ttclid?: string;
  msclkid?: string;
}

const WorkshopDetails: React.FC = () => {
  const [workshops, setWorkshops] = useState<WorkshopData[]>([]);
  const [filteredWorkshops, setFilteredWorkshops] = useState<WorkshopData[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortField, setSortField] = useState<keyof WorkshopData>("created_at");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [searchQuery, setSearchQuery] = useState("");
  const [workshopTypeFilter, setWorkshopTypeFilter] = useState<string>("all");
  const [utmFilter, setUtmFilter] = useState({
    source: "",
    medium: "",
    campaign: "",
  });
  const [showUtmStats, setShowUtmStats] = useState(false);
  const navigate = useNavigate();

  const fetchWorkshops = useCallback(async (isRefreshing = false) => {
    try {
      if (isRefreshing) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      let allWorkshops: any[] = [];
      let hasMore = true;
      let page = 0;
      const pageSize = 1000; // Increased page size

      while (hasMore) {
        const start = page * pageSize;
        const end = start + pageSize - 1;

        const {
          data: workshopData,
          error,
          count,
        } = await supabase
          .from("workshop_registrations")
          .select("*", { count: "exact" })
          .order("created_at", { ascending: false })
          .range(start, end);

        if (error) {
          throw error;
        }

        if (workshopData && workshopData.length > 0) {
          allWorkshops = [...allWorkshops, ...workshopData];
          if (workshopData.length < pageSize) {
            hasMore = false;
          }
        } else {
          hasMore = false;
        }

        page++;
      }

      setWorkshops(allWorkshops);
      setFilteredWorkshops(allWorkshops);
      setTotalPages(Math.ceil(allWorkshops.length / ITEMS_PER_PAGE));

      if (isRefreshing) {
        toast.success("Data refreshed successfully");
      }
    } catch (error) {
      console.error("Error fetching workshop data:", error);
      toast.error("Failed to fetch workshop data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Check authentication and fetch data
  useEffect(() => {
    const checkAuthAndFetchData = async () => {
      const role = authService.getRole();
      if (!role || (role !== "admin" && role !== "sales" && role !== "performance_marketer")) {
        navigate("/login");
        return;
      }
      await fetchWorkshops();
    };

    checkAuthAndFetchData();

    // Set up polling every 30 seconds
    const pollInterval = setInterval(() => {
      fetchWorkshops(true);
    }, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(pollInterval);
  }, [fetchWorkshops, navigate]);

  // Handle sorting changes
  useEffect(() => {
    if (workshops.length > 0) {
      const sortedData = [...workshops].sort((a, b) => {
        if (sortField === "created_at") {
          return sortOrder === "asc"
            ? new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
            : new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime();
        }
        return 0;
      });
      setFilteredWorkshops(sortedData);
    }
  }, [sortField, sortOrder, workshops]);

  useEffect(() => {
    if (workshops.length > 0) {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = workshops.filter((workshop) => {
        const matchesSearch =
          workshop.name.toLowerCase().includes(lowercaseQuery) ||
          workshop.email.toLowerCase().includes(lowercaseQuery) ||
          workshop.phone.toLowerCase().includes(lowercaseQuery) ||
          workshop.education.toLowerCase().includes(lowercaseQuery) ||
          workshop.designation.toLowerCase().includes(lowercaseQuery) ||
          workshop.years_of_experience.toLowerCase().includes(lowercaseQuery) ||
          (workshop.workshop_type?.toLowerCase() || "").includes(
            lowercaseQuery
          );

        const matchesType =
          workshopTypeFilter === "all" ||
          workshop.workshop_type === workshopTypeFilter;

        const matchesUtm =
          (utmFilter.source === "" ||
            workshop.utm_source?.toLowerCase() === utmFilter.source.toLowerCase()) &&
          (utmFilter.medium === "" ||
            workshop.utm_medium?.toLowerCase() === utmFilter.medium.toLowerCase()) &&
          (utmFilter.campaign === "" ||
            workshop.utm_campaign?.toLowerCase() === utmFilter.campaign.toLowerCase());

        return matchesSearch && matchesType && matchesUtm;
      });
      setFilteredWorkshops(filtered);
    }
  }, [workshops, searchQuery, workshopTypeFilter, utmFilter]);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredWorkshops.slice(startIndex, endIndex);
  };

  const handleDownloadCSV = () => {
    try {
      const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const formattedDate = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
        const formattedTime = date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        return `${formattedDate} ${formattedTime}`;
      };

      const escapeCSV = (str: string) => {
        if (!str) return "";
        str = str.toString();
        if (str.includes(",") || str.includes('"') || str.includes("\n")) {
          return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
      };

      const headers = [
        "Name",
        "Email",
        "Phone",
        "Education",
        "Designation",
        "Years of Experience",
        "Workshop Type",
        "Registration Date",
        "Registration Type",
        "Payment Status",
        "Order ID",
        "Payment ID",
        "UTM Source",
        "UTM Medium",
        "UTM Campaign",
        "Referrer",
      ];

      const csvContent = [
        headers.join(","),
        ...filteredWorkshops.map((workshop) =>
          [
            escapeCSV(workshop.name),
            escapeCSV(workshop.email),
            escapeCSV(workshop.phone),
            escapeCSV(workshop.education),
            escapeCSV(workshop.designation),
            escapeCSV(workshop.years_of_experience),
            escapeCSV(
              workshop.workshop_type
                ? workshop.workshop_type === "DAWorkshop"
                  ? "Data Analytics Workshop"
                  : workshop.workshop_type === "DASecondWorkshop"
                  ? "DA Second Workshop"
                  : workshop.workshop_type === "PMWorkshop"
                  ? "Product Management Workshop"
                  : workshop.workshop_type === "GENAIWorkshop"
                  ? "GenAI Workshop"
                  : workshop.workshop_type === "DMWorkshop"
                  ? "Digital Marketing Workshop"
                  : "Not specified"
                : "Not specified"
            ),
            escapeCSV(formatDate(workshop.created_at)),
            escapeCSV(
              workshop.is_free ? "Free Registration" : "Paid Registration"
            ),
            escapeCSV(
              workshop.payment_status === "completed"
                ? "Paid"
                : workshop.payment_status === "pending"
                ? "Pending"
                : "Failed"
            ),
            escapeCSV(workshop.razorpay_order_id || "N/A"),
            escapeCSV(workshop.razorpay_payment_id || "N/A"),
            escapeCSV(workshop.utm_source || "N/A"),
            escapeCSV(workshop.utm_medium || "N/A"),
            escapeCSV(workshop.utm_campaign || "N/A"),
            escapeCSV(workshop.referrer || "N/A"),
          ].join(",")
        ),
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `workshop_registrations_${new Date().toISOString().split("T")[0]}.csv`
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

  const calculateUtmStats = (data: WorkshopData[]) => {
    const stats = {
      sources: {} as Record<string, number>,
      mediums: {} as Record<string, number>,
      campaigns: {} as Record<string, number>,
      referrers: {} as Record<string, number>,
    };

    data.forEach((workshop) => {
      if (workshop.utm_source) {
        stats.sources[workshop.utm_source] =
          (stats.sources[workshop.utm_source] || 0) + 1;
      }
      if (workshop.utm_medium) {
        stats.mediums[workshop.utm_medium] =
          (stats.mediums[workshop.utm_medium] || 0) + 1;
      }
      if (workshop.utm_campaign) {
        stats.campaigns[workshop.utm_campaign] =
          (stats.campaigns[workshop.utm_campaign] || 0) + 1;
      }
      if (workshop.referrer) {
        stats.referrers[workshop.referrer] =
          (stats.referrers[workshop.referrer] || 0) + 1;
      }
    });

    return stats;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading workshop data...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 py-8 mt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Workshop Registrations
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              View and manage all workshop registrations
            </p>
            <BackButton />
          </div>
          <div className="flex gap-2">
            <button
              onClick={fetchWorkshops}
              disabled={refreshing}
              className={`inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                refreshing ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <RefreshCw
                className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </button>
            <button
              onClick={handleDownloadCSV}
              className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CSV
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Workshop Type Filter */}
              <div>
                <label
                  htmlFor="workshop-type"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Workshop Type
                </label>
                <select
                  id="workshop-type"
                  value={workshopTypeFilter}
                  onChange={(e) => setWorkshopTypeFilter(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                  <option value="all">All Workshops</option>
                  <option value="DAWorkshop">DA Workshop</option>
                  <option value="DASecondWorkshop">DA Workshop (Second)</option>
                  <option value="PMWorkshop">PM Workshop</option>
                  <option value="GENAIWorkshop">GenAI Workshop</option>
                  <option value="DMWorkshop">Digital Marketing Workshop</option>
                </select>
              </div>

              {/* Search */}
              <div>
                <label
                  htmlFor="search-query"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Search
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="search-query"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, email, or phone"
                    className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            {/* UTM Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <label
                  htmlFor="utm-source"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  UTM Source
                </label>
                <input
                  id="utm-source"
                  type="text"
                  placeholder="Filter by source"
                  value={utmFilter.source}
                  onChange={(e) =>
                    setUtmFilter((prev) => ({ ...prev, source: e.target.value }))
                  }
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  htmlFor="utm-medium"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  UTM Medium
                </label>
                <input
                  id="utm-medium"
                  type="text"
                  placeholder="Filter by medium"
                  value={utmFilter.medium}
                  onChange={(e) =>
                    setUtmFilter((prev) => ({ ...prev, medium: e.target.value }))
                  }
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  htmlFor="utm-campaign"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  UTM Campaign
                </label>
                <input
                  id="utm-campaign"
                  type="text"
                  placeholder="Filter by campaign"
                  value={utmFilter.campaign}
                  onChange={(e) =>
                    setUtmFilter((prev) => ({ ...prev, campaign: e.target.value }))
                  }
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => setShowUtmStats(!showUtmStats)}
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  {showUtmStats ? "Hide UTM Stats" : "Show UTM Stats"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Sr. No.
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Education
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Designation
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Years of Experience
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Registration Date
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Workshop Type
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Registration Type
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Payment Status
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Payment Details
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        UTM Source
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        UTM Medium
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        UTM Campaign
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Referrer
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {loading ? (
                      <tr>
                        <td
                          colSpan={8}
                          className="px-3 py-4 text-sm text-gray-500 text-center"
                        >
                          Loading...
                        </td>
                      </tr>
                    ) : getCurrentPageData().length === 0 ? (
                      <tr>
                        <td
                          colSpan={8}
                          className="px-3 py-4 text-sm text-gray-500 text-center"
                        >
                          {searchQuery.trim() !== ""
                            ? "No matching workshop registrations found"
                            : "No workshop registrations found"}
                        </td>
                      </tr>
                    ) : (
                      getCurrentPageData().map((workshop, index) => (
                        <tr
                          key={workshop.id}
                          className={index % 2 === 0 ? undefined : "bg-gray-50"}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {workshop.name}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {workshop.email}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {workshop.phone}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {workshop.education}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {workshop.designation}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {workshop.years_of_experience}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {new Date(workshop.created_at).toLocaleString()}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {workshop.workshop_type
                              ? workshop.workshop_type === "DAWorkshop"
                                ? "DA Workshop"
                                : workshop.workshop_type === "DASecondWorkshop"
                                ? "DA Second Workshop"
                                : workshop.workshop_type === "PMWorkshop"
                                ? "PM Workshop"
                                : workshop.workshop_type === "GENAIWorkshop"
                                ? "GenAI Workshop"
                                : workshop.workshop_type === "DMWorkshop"
                                ? "Digital Marketing Workshop"
                                : "Not specified"
                              : "Not specified"}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                workshop.is_free
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {workshop.is_free
                                ? "Free Registration"
                                : "Paid Registration"}
                            </span>
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                workshop.payment_status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : workshop.payment_status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {workshop.payment_status === "completed"
                                ? "Paid"
                                : workshop.payment_status === "pending"
                                ? "Pending"
                                : "Failed"}
                            </span>
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {workshop.razorpay_payment_id ? (
                              <div>
                                <p>Order ID: {workshop.razorpay_order_id}</p>
                                <p>
                                  Payment ID: {workshop.razorpay_payment_id}
                                </p>
                              </div>
                            ) : (
                              "No payment initiated"
                            )}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {workshop.utm_source || "N/A"}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {workshop.utm_medium || "N/A"}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {workshop.utm_campaign || "N/A"}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {workshop.referrer || "N/A"}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* UTM Statistics */}
        {showUtmStats && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              UTM Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Sources */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  UTM Sources
                </h3>
                <div className="max-h-60 overflow-y-auto">
                  {Object.keys(calculateUtmStats(filteredWorkshops).sources).length > 0 ? (
                    <ul className="space-y-2">
                      {Object.entries(calculateUtmStats(filteredWorkshops).sources)
                        .sort(([, countA], [, countB]) => countB - countA)
                        .map(([source, count]) => (
                          <li key={source} className="flex justify-between items-center text-sm">
                            <span className="text-gray-700 truncate mr-2" title={source}>
                              {source || "(empty)"}
                            </span>
                            <span className="text-gray-900 font-medium bg-blue-100 px-2 py-0.5 rounded-full">
                              {count}
                            </span>
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 italic">No source data available</p>
                  )}
                </div>
              </div>

              {/* Mediums */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  UTM Mediums
                </h3>
                <div className="max-h-60 overflow-y-auto">
                  {Object.keys(calculateUtmStats(filteredWorkshops).mediums).length > 0 ? (
                    <ul className="space-y-2">
                      {Object.entries(calculateUtmStats(filteredWorkshops).mediums)
                        .sort(([, countA], [, countB]) => countB - countA)
                        .map(([medium, count]) => (
                          <li key={medium} className="flex justify-between items-center text-sm">
                            <span className="text-gray-700 truncate mr-2" title={medium}>
                              {medium || "(empty)"}
                            </span>
                            <span className="text-gray-900 font-medium bg-green-100 px-2 py-0.5 rounded-full">
                              {count}
                            </span>
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 italic">No medium data available</p>
                  )}
                </div>
              </div>

              {/* Campaigns */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  UTM Campaigns
                </h3>
                <div className="max-h-60 overflow-y-auto">
                  {Object.keys(calculateUtmStats(filteredWorkshops).campaigns).length > 0 ? (
                    <ul className="space-y-2">
                      {Object.entries(calculateUtmStats(filteredWorkshops).campaigns)
                        .sort(([, countA], [, countB]) => countB - countA)
                        .map(([campaign, count]) => (
                          <li key={campaign} className="flex justify-between items-center text-sm">
                            <span className="text-gray-700 truncate mr-2" title={campaign}>
                              {campaign || "(empty)"}
                            </span>
                            <span className="text-gray-900 font-medium bg-purple-100 px-2 py-0.5 rounded-full">
                              {count}
                            </span>
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 italic">No campaign data available</p>
                  )}
                </div>
              </div>

              {/* Referrers */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                  Referrers
                </h3>
                <div className="max-h-60 overflow-y-auto">
                  {Object.keys(calculateUtmStats(filteredWorkshops).referrers).length > 0 ? (
                    <ul className="space-y-2">
                      {Object.entries(calculateUtmStats(filteredWorkshops).referrers)
                        .sort(([, countA], [, countB]) => countB - countA)
                        .map(([referrer, count]) => (
                          <li key={referrer} className="flex justify-between items-center text-sm">
                            <span className="text-gray-700 truncate mr-2" title={referrer}>
                              {referrer || "(empty)"}
                            </span>
                            <span className="text-gray-900 font-medium bg-amber-100 px-2 py-0.5 rounded-full">
                              {count}
                            </span>
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 italic">No referrer data available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing page <span className="font-medium">{currentPage}</span>{" "}
                of <span className="font-medium">{totalPages}</span>
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkshopDetails;
