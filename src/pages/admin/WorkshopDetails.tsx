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
}

const WorkshopDetails: React.FC = () => {
  const [workshops, setWorkshops] = useState<WorkshopData[]>([]);
  const [filteredWorkshops, setFilteredWorkshops] = useState<WorkshopData[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortField, setSortField] = useState<keyof WorkshopData>("created_at");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const fetchWorkshops = useCallback(async (isRefreshing = false) => {
    try {
      if (isRefreshing) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      
      const { data: workshopData, error, count } = await supabase
        .from("workshop_registrations")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      const sortedData = workshopData || [];
      setWorkshops(sortedData);
      setFilteredWorkshops(sortedData);
      
      if (count) {
        setTotalPages(Math.ceil(count / ITEMS_PER_PAGE));
      }

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
      if (!role || (role !== "admin" && role !== "workshop_viewer")) {
        navigate("/login");
        return;
      }
      await fetchWorkshops();
    };

    checkAuthAndFetchData();
  }, [fetchWorkshops, navigate]);

  // Handle sorting changes
  useEffect(() => {
    if (workshops.length > 0) {
      const sortedData = [...workshops].sort((a, b) => {
        if (sortField === "created_at") {
          return sortOrder === "asc"
            ? new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
            : new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }
        return 0;
      });
      setFilteredWorkshops(sortedData);
    }
  }, [sortField, sortOrder, workshops]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredWorkshops(workshops);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = workshops.filter((workshop) => {
        return (
          workshop.name.toLowerCase().includes(lowercaseQuery) ||
          workshop.email.toLowerCase().includes(lowercaseQuery) ||
          workshop.phone.toLowerCase().includes(lowercaseQuery) ||
          workshop.education.toLowerCase().includes(lowercaseQuery) ||
          workshop.designation.toLowerCase().includes(lowercaseQuery) ||
          workshop.years_of_experience.toLowerCase().includes(lowercaseQuery)
        );
      });
      setFilteredWorkshops(filtered);
    }
    setCurrentPage(1);
  }, [searchQuery, workshops]);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredWorkshops.slice(startIndex, endIndex);
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

  const handleSort = (field: keyof WorkshopData) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // const exportToCSV = () => {
  //   if (!workshops.length) return;

  //   const headers = [
  //     "Name",
  //     "Email",
  //     "Phone",
  //     "Education",
  //     "Designation",
  //     "Years of Experience",
  //     "Registration Date",
  //   ];

  //   const csvData = workshops.map((workshop) => [
  //     workshop.name,
  //     workshop.email,
  //     workshop.phone,
  //     workshop.education,
  //     workshop.designation,
  //     workshop.years_of_experience,
  //     new Date(workshop.created_at).toLocaleString(),
  //   ]);

  //   const csvContent =
  //     "data:text/csv;charset=utf-8," +
  //     [headers.join(","), ...csvData.map((row) => row.join(","))].join("\n");

  //   const encodedUri = encodeURI(csvContent);
  //   const link = document.createElement("a");
  //   link.setAttribute("href", encodedUri);
  //   link.setAttribute(
  //     "download",
  //     `workshop_registrations_${new Date().toISOString()}.csv`
  //   );
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 py-8 mt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">
              Workshop Registrations
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all workshop registrations with their details
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-4">
            <button
              onClick={() => fetchWorkshops(true)}
              disabled={refreshing}
              className={`inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto ${
                refreshing ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "Refreshing..." : "Refresh"}
            </button>
            {/* <button
              onClick={exportToCSV}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </button> */}

            <button
              onClick={() => {
                authService.logout();
                navigate("/login");
              }}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Search Box */}
        <div className="mt-4 relative">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, phone..."
              className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      {[
                        { key: "name", label: "Name" },
                        { key: "email", label: "Email" },
                        { key: "phone", label: "Phone" },
                        { key: "education", label: "Education" },
                        { key: "designation", label: "Designation" },
                        {
                          key: "years_of_experience",
                          label: "Years of Experience",
                        },
                        { key: "created_at", label: "Registration Date" },
                      ].map(({ key, label }) => (
                        <th
                          key={key}
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          {label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {loading ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-3 py-4 text-sm text-gray-500 text-center"
                        >
                          Loading...
                        </td>
                      </tr>
                    ) : getCurrentPageData().length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-3 py-4 text-sm text-gray-500 text-center"
                        >
                          {searchQuery.trim() !== "" 
                            ? "No matching workshop registrations found" 
                            : "No workshop registrations found"}
                        </td>
                      </tr>
                    ) : (
                      getCurrentPageData().map((workshop) => (
                        <tr key={workshop.id}>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {workshop.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {workshop.email}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {workshop.phone}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {workshop.education}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {workshop.designation}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {workshop.years_of_experience}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {new Date(workshop.created_at).toLocaleString()}
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
                Showing page <span className="font-medium">{currentPage}</span> of{" "}
                <span className="font-medium">{totalPages}</span>
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
