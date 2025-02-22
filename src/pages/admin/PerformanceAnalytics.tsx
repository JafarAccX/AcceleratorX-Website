import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { authService } from "../../services/authService";
import { LogOut, RefreshCw, ArrowLeft } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  EnrollmentData,
  WorkshopData,
  CachedData,
  TABS,
  PAGE_SIZE,
  CACHE_KEY,
  CACHE_DURATION,
  REALTIME_REFRESH_INTERVAL,
} from "./types/analytics";
import WorkshopAnalytics from "./components/WorkshopAnalytics";
import EnrollmentAnalytics from "./components/EnrollmentAnalytics";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =
  import.meta.env.VITE_SUPABASE_SERVICE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const TIME_PERIODS = [
  { label: "Today", days: 0 },
  { label: "Yesterday", days: 1 },
  { label: "Last 7 Days", days: 7 },
  { label: "Last 30 Days", days: 30 },
  { label: "Custom Range", days: 0 },
] as const;

const PerformanceAnalytics: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<keyof typeof TABS>("ENROLLMENT");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [tabSwitching, setTabSwitching] = useState(false);
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month">("day");
  const [selectedWorkshopType, setSelectedWorkshopType] = useState<
    string | null
  >(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date>(() => {
    const date = new Date(2023, 9, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  });
  const [endDate, setEndDate] = useState<Date>(() => {
    const date = new Date();
    date.setHours(23, 59, 59, 999);
    return date;
  });
  const [showCustomDateRange, setShowCustomDateRange] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<
    (typeof TIME_PERIODS)[number]
  >({ label: "Custom Range", days: 0 });
  const [lastFetchTime, setLastFetchTime] = useState<number>(0);
  const [tempStartDate, setTempStartDate] = useState<Date>(() => {
    const date = new Date(2023, 9, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  });
  const [tempEndDate, setTempEndDate] = useState<Date>(() => {
    const date = new Date();
    date.setHours(23, 59, 59, 999);
    return date;
  });

  const [data, setData] = useState<{
    enrollments: EnrollmentData[];
    workshops: WorkshopData[];
  }>({ enrollments: [], workshops: [] });

  // Helper function for date formatting
  const formatDateForSupabase = (date: Date) => {
    const d = new Date(date);
    return d.toISOString();
  };

  // Fetch data function
  const fetchData = async (forceRefresh: boolean = false) => {
    console.log("Starting data fetch...", {
      forceRefresh,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      timeRange,
      activeTab,
    });

    try {
      setRefreshing(true);
      const formattedStartDate = formatDateForSupabase(startDate);
      const formattedEndDate = formatDateForSupabase(endDate);

      // Check cache first
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (!forceRefresh && cachedData) {
        const parsed: CachedData = JSON.parse(cachedData);
        if (Date.now() - parsed.timestamp < CACHE_DURATION) {
          console.log("Using cached data", {
            cacheAge: Date.now() - parsed.timestamp,
            dataSize: {
              enrollments: parsed.allData.enrollments.length,
              workshops: parsed.allData.workshops.length,
            },
          });
          setData(parsed.allData);
          setRefreshing(false);
          return;
        }
        console.log("Cache expired, fetching fresh data");
      }

      // Fetch all data with pagination
      let allEnrollments: any[] = [];
      let allWorkshops: any[] = [];
      let hasMoreEnrollments = true;
      let hasMoreWorkshops = true;
      let enrollmentPage = 0;
      let workshopPage = 0;

      while (hasMoreEnrollments || hasMoreWorkshops) {
        const [enrollmentsRes, workshopsRes]: [
          { data: any[] | null; count: number | null; error: any },
          { data: any[] | null; count: number | null; error: any }
        ] = await Promise.all([
          hasMoreEnrollments
            ? supabase
                .from("enrollments")
                .select("*", { count: "exact" })
                .gte("created_at", formattedStartDate)
                .lte("created_at", formattedEndDate)
                .order("created_at", { ascending: false })
                .range(
                  enrollmentPage * PAGE_SIZE,
                  (enrollmentPage + 1) * PAGE_SIZE - 1
                )
            : Promise.resolve({ data: [], count: 0, error: null }),
          hasMoreWorkshops
            ? supabase
                .from("workshop_registrations")
                .select("*", { count: "exact" })
                .gte("created_at", formattedStartDate)
                .lte("created_at", formattedEndDate)
                .order("created_at", { ascending: false })
                .range(
                  workshopPage * PAGE_SIZE,
                  (workshopPage + 1) * PAGE_SIZE - 1
                )
            : Promise.resolve({ data: [], count: 0, error: null }),
        ]);

        if (enrollmentsRes.error) {
          console.error("Error fetching enrollments:", enrollmentsRes.error);
          throw enrollmentsRes.error;
        }
        if (workshopsRes.error) {
          console.error("Error fetching workshops:", workshopsRes.error);
          throw workshopsRes.error;
        }

        // Process enrollments
        if (hasMoreEnrollments) {
          if (enrollmentsRes.data && enrollmentsRes.data.length > 0) {
            allEnrollments = [...allEnrollments, ...enrollmentsRes.data];
            enrollmentPage++;
            hasMoreEnrollments = enrollmentsRes.data.length === PAGE_SIZE;
          } else {
            hasMoreEnrollments = false;
          }
        }

        // Process workshops
        if (hasMoreWorkshops) {
          if (workshopsRes.data && workshopsRes.data.length > 0) {
            allWorkshops = [...allWorkshops, ...workshopsRes.data];
            workshopPage++;
            hasMoreWorkshops = workshopsRes.data.length === PAGE_SIZE;
          } else {
            hasMoreWorkshops = false;
          }
        }

        // Log progress
        console.log("Pagination progress:", {
          enrollments: {
            fetched: allEnrollments.length,
            total: enrollmentsRes.count,
            hasMore: hasMoreEnrollments,
          },
          workshops: {
            fetched: allWorkshops.length,
            total: workshopsRes.count,
            hasMore: hasMoreWorkshops,
          },
        });

        // Add a small delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      console.log("Data fetch completed", {
        enrollments: {
          total: allEnrollments.length,
        },
        workshops: {
          total: allWorkshops.length,
        },
      });

      const newData = {
        enrollments: allEnrollments,
        workshops: allWorkshops,
      };

      // Cache the data
      const cacheData: CachedData = {
        timestamp: Date.now(),
        allData: newData,
        processedData: {},
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
      console.log("Data cached successfully");

      setData(newData);
      setLastFetchTime(Date.now());
    } catch (error) {
      console.error("Error in fetchData:", error);
      toast.error("Failed to fetch data. Please check console for details.");
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  // Add a debug effect to log data changes
  useEffect(() => {
    console.log("Data updated:", {
      enrollmentsCount: data.enrollments.length,
      workshopsCount: data.workshops.length,
      activeTab,
      timeRange,
    });
  }, [data, activeTab, timeRange]);

  // Time range handlers
  const handlePeriodChange = async (period: (typeof TIME_PERIODS)[number]) => {
    console.log("Period change requested:", {
      newPeriod: period.label,
      currentPeriod: selectedPeriod.label,
    });

    setSelectedPeriod(period);
    setLoading(true);

    if (period.label === "Custom Range") {
      console.log("Switching to custom range mode");
      setShowCustomDateRange(true);
      setTempStartDate(startDate);
      setTempEndDate(endDate);
      setLoading(false);
      return;
    }

    setShowCustomDateRange(false);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const start = new Date();

    switch (period.label) {
      case "Today":
        start.setHours(0, 0, 0, 0);
        break;
      case "Yesterday":
        start.setDate(end.getDate() - 1);
        start.setHours(0, 0, 0, 0);
        end.setDate(end.getDate() - 1);
        break;
      case "Last 7 Days":
        start.setDate(end.getDate() - 6); // -6 because we want to include today
        start.setHours(0, 0, 0, 0);
        break;
      case "Last 30 Days":
        start.setDate(end.getDate() - 29); // -29 because we want to include today
        start.setHours(0, 0, 0, 0);
        break;
      default:
        break;
    }

    console.log("Setting new date range:", {
      start: start.toISOString(),
      end: end.toISOString(),
      period: period.label,
    });

    setStartDate(start);
    setEndDate(end);
    await fetchData(true); // Force refresh when changing period
  };

  const handleApplyCustomRange = async () => {
    if (!tempStartDate || !tempEndDate) {
      toast.error("Please select both start and end dates");
      return;
    }

    if (tempEndDate < tempStartDate) {
      toast.error("End date cannot be before start date");
      return;
    }

    const maxDateRange = 365; // Maximum allowed date range in days
    const daysDiff = Math.ceil(
      (tempEndDate.getTime() - tempStartDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysDiff > maxDateRange) {
      toast.error(`Date range cannot exceed ${maxDateRange} days`);
      return;
    }

    setLoading(true);
    const start = new Date(tempStartDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(tempEndDate);
    end.setHours(23, 59, 59, 999);

    console.log("Applying custom date range:", {
      start: start.toISOString(),
      end: end.toISOString(),
      daysDiff,
    });

    setStartDate(start);
    setEndDate(end);
    await fetchData(true); // Force refresh for custom range
    setLoading(false);
  };

  // Add a function to format date ranges for display
  const getDateRangeDisplay = () => {
    if (showCustomDateRange) {
      return `${tempStartDate.toLocaleDateString()} - ${tempEndDate.toLocaleDateString()}`;
    }

    const formatOptions: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    return `${startDate.toLocaleDateString(
      undefined,
      formatOptions
    )} - ${endDate.toLocaleDateString(undefined, formatOptions)}`;
  };

  const handleClearCustomRange = () => {
    setShowCustomDateRange(false);
    const defaultPeriod = TIME_PERIODS.find((p) => p.label === "Last 30 Days");
    if (defaultPeriod) {
      handlePeriodChange(defaultPeriod);
    }
  };

  // Tab change handler
  const handleTabChange = (tab: keyof typeof TABS) => {
    setTabSwitching(true);
    setActiveTab(tab);
    setSelectedWorkshopType(null);
    setSelectedCourse(null);
    setTimeout(() => setTabSwitching(false), 300);
  };

  const handleCourseSelect = (course: string | null) => {
    setSelectedCourse(course);
    console.log("Selected course:", course);
  };

  const handleWorkshopSelect = (workshopType: string | null) => {
    setSelectedWorkshopType(workshopType);
    console.log("Selected workshop type:", workshopType);
  };

  // Initial data fetch
  useEffect(() => {
    const role = authService.getRole();
    if (role !== "admin" && role !== "sales") {
      navigate("/admin");
      return;
    }
    fetchData(false);
  }, [navigate]);

  // Real-time subscription
  useEffect(() => {
    const subscription = supabase
      .channel("enrollment_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "enrollments",
        },
        () => {
          if (Date.now() - lastFetchTime >= REALTIME_REFRESH_INTERVAL) {
            fetchData(true);
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [lastFetchTime]);

  if (loading || tabSwitching) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mb-4"></div>
          <p className="text-gray-700">
            {tabSwitching ? "Switching view..." : "Loading data..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-10 bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Performance Analytics
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                View detailed analytics for enrollments and workshops
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => fetchData(true)}
              className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              disabled={refreshing}
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
              className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-4" aria-label="Analytics Tabs">
            <button
              onClick={() => handleTabChange("ENROLLMENT")}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                activeTab === "ENROLLMENT"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Lead Analytics
            </button>
            <button
              onClick={() => handleTabChange("WORKSHOP")}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                activeTab === "WORKSHOP"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Workshop Analytics
            </button>
          </nav>
        </div>

        {/* Time Range Controls */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            {TIME_PERIODS.map((period) => (
              <button
                key={period.label}
                onClick={() => handlePeriodChange(period)}
                className={`
                  rounded-md px-4 py-2 text-sm font-medium transition-all
                  ${
                    selectedPeriod.label === period.label
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow"
                  }
                `}
              >
                {period.label}
              </button>
            ))}
          </div>

          {showCustomDateRange && (
            <div className="bg-white p-4 rounded-lg shadow space-y-4">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <DatePicker
                    selected={tempStartDate}
                    onChange={(date) => date && setTempStartDate(date)}
                    selectsStart
                    startDate={tempStartDate}
                    endDate={tempEndDate}
                    maxDate={new Date()}
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm text-black w-full"
                    placeholderText="Select start date"
                    dateFormat="MMM d, yyyy"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <DatePicker
                    selected={tempEndDate}
                    onChange={(date) => date && setTempEndDate(date)}
                    selectsEnd
                    startDate={tempStartDate}
                    endDate={tempEndDate}
                    minDate={tempStartDate}
                    maxDate={new Date()}
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm text-black w-full"
                    placeholderText="Select end date"
                    dateFormat="MMM d, yyyy"
                  />
                </div>
                <div className="flex items-end gap-2">
                  <button
                    onClick={handleApplyCustomRange}
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
                  >
                    Apply Range
                  </button>
                  <button
                    onClick={handleClearCustomRange}
                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Selected Range: {getDateRangeDisplay()}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-8">
          {activeTab === "WORKSHOP" ? (
            <WorkshopAnalytics
              data={data.workshops}
              timeRange={timeRange}
              selectedWorkshopType={selectedWorkshopType}
              onTimeRangeChange={setTimeRange}
              onWorkshopSelect={handleWorkshopSelect}
            />
          ) : (
            <EnrollmentAnalytics
              data={data.enrollments}
              timeRange={timeRange}
              selectedCourse={selectedCourse}
              onTimeRangeChange={setTimeRange}
              onCourseSelect={handleCourseSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
