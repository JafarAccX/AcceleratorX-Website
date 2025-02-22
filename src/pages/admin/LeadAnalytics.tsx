import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { authService } from "../../services/authService";
import { LogOut, RefreshCw, Calculator, X, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =
  import.meta.env.VITE_SUPABASE_SERVICE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const COURSES = [
  "Product Management",
  "Data Analytics",
  "Generative AI",
  "Advance Performance Marketing With AI",
];

const TIME_PERIODS = [
  { label: "Today", days: 0 },
  { label: "Yesterday", days: 1 },
  { label: "Last 7 Days", days: 7 },
  { label: "Last 30 Days", days: 30 },
  // { label: "Last 3 Months", days: 90 },
  // { label: "Last 6 Months", days: 180 },
  // { label: "Last Year", days: 365 },
  { label: "Custom Range", days: 0 },
] as const;

interface EnrollmentStats {
  course: string;
  count: number;
}

interface MonthlyStats {
  month: string;
  [key: string]: number | string;
}

interface CPLData {
  course: string;
  adSpend: number;
  leads: number;
  cpl: number;
}

interface TrendData {
  name: string;
  value: number;
  previousValue: number;
  percentageChange: number;
}

interface SourceStats {
  source: string;
  medium: string;
  campaign: string;
  total_enrollments: number;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const SOURCE_PLATFORMS = [
  "All Platforms",
  "Facebook",
  "Instagram",
  "Google",
  "Direct",
  "Others",
] as const;

const PAGE_SIZE = 1000;

const CACHE_KEY = "enrollment_analytics_cache";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache duration
const REALTIME_REFRESH_INTERVAL = 10000; // 10 seconds

const TABS = {
  LEAD: "Lead Analytics",
  WORKSHOP: "Workshop Analytics",
} as const;

interface EnrollmentData {
  course: string;
  created_at: string;
  utm_source?: string;
  gclid?: string;
  is_workshop?: boolean;
}

const PerformanceAnalytics: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<keyof typeof TABS>("LEAD");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [courseStats, setCourseStats] = useState<EnrollmentStats[]>([]);
  const [workshopStats, setWorkshopStats] = useState<EnrollmentStats[]>([]);
  const [monthlyStats, setMonthlyStats] = useState<MonthlyStats[]>([]);
  const [startDate, setStartDate] = useState<Date>(
    new Date(new Date().setMonth(new Date().getMonth() - 6))
  );
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [showCustomDateRange, setShowCustomDateRange] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<
    (typeof TIME_PERIODS)[number]
  >(TIME_PERIODS[3]);
  const [trendData, setTrendData] = useState<TrendData[]>([]);
  const [cplData, setCPLData] = useState<CPLData[]>(
    COURSES.map((course) => ({
      course,
      adSpend: 0,
      leads: 0,
      cpl: 0,
    }))
  );
  const [sourceFilter, setSourceFilter] = useState({
    source: "",
    medium: "",
    campaign: "",
    platform: "All Platforms",
  });
  const [sourceStats, setSourceStats] = useState<SourceStats[]>([]);
  const [lastFetchTime, setLastFetchTime] = useState<number>(0);

  // Note: No Code Development is already disabled in COURSES array,
  // so it will automatically be excluded from CPL calculations

  const handlePeriodChange = (period: (typeof TIME_PERIODS)[number]) => {
    setSelectedPeriod(period);
    if (period.label === "Custom Range") {
      setShowCustomDateRange(true);
      return;
    }

    setShowCustomDateRange(false);
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - period.days);
    setStartDate(start);
    setEndDate(end);

    // Clear cache and fetch fresh data with new date range
    localStorage.removeItem(CACHE_KEY);
    fetchAnalytics(true);
  };

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  const calculateCPL = (adSpend: number, leads: number) => {
    return leads > 0 ? adSpend / leads : 0;
  };

  const handleCPLDataChange = (
    course: string,
    field: "adSpend" | "leads",
    value: number
  ) => {
    setCPLData((prevData) =>
      prevData.map((item) => {
        if (item.course === course) {
          const newItem = {
            ...item,
            [field]: value,
          };
          return {
            ...newItem,
            cpl: calculateCPL(
              field === "adSpend" ? value : item.adSpend,
              field === "leads" ? value : item.leads
            ),
          };
        }
        return item;
      })
    );
  };

  const getDateRangeForPeriod = (
    period: (typeof TIME_PERIODS)[number]
  ): { start: Date; end: Date } => {
    const end = new Date();
    end.setHours(22, 0, 0, 0); // Set end time to 10 PM

    if (period.label === "Today") {
      const start = new Date();
      start.setHours(0, 0, 0, 0); // Set start time to 12 AM
      return { start, end };
    }

    if (period.label === "Yesterday") {
      const start = new Date();
      start.setDate(start.getDate() - 1);
      start.setHours(0, 0, 0, 0);
      const yesterdayEnd = new Date();
      yesterdayEnd.setDate(yesterdayEnd.getDate() - 1);
      yesterdayEnd.setHours(23, 59, 59, 999);
      return { start, end: yesterdayEnd };
    }

    const start = new Date();
    start.setDate(end.getDate() - period.days);
    start.setHours(0, 0, 0, 0);
    return { start, end };
  };

  // Add cache management functions
  const getCachedData = () => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }
    return null;
  };

  const setCachedData = (data: any) => {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );
  };

  // Add this function to handle paginated data fetching
  const fetchAllData = async (startDate: Date, endDate: Date) => {
    let allData: any[] = [];
    let hasMore = true;
    let page = 0;
    const pageSize = 1000; // Supabase's limit

    while (hasMore) {
      console.log(`Fetching page ${page + 1}...`);
      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .gte("created_at", startDate.toISOString())
        .lte("created_at", endDate.toISOString())
        .range(page * pageSize, (page + 1) * pageSize - 1)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching data:", error);
        throw error;
      }

      if (data && data.length > 0) {
        allData = [...allData, ...data];
        page++;
      } else {
        hasMore = false;
      }

      // Add a small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    return allData;
  };

  // Modify fetchAnalytics to use the new fetching logic
  const fetchAnalytics = async (forceRefresh: boolean = false) => {
    try {
      if (!forceRefresh) {
        const cachedData = getCachedData();
        if (cachedData) {
          console.log("Using cached data:", cachedData);
          setCourseStats(cachedData.courseStats);
          setWorkshopStats(cachedData.workshopStats);
          setMonthlyStats(cachedData.monthlyStats);
          setTrendData(cachedData.trendData);
          setSourceStats(cachedData.sourceStats);
          setLoading(false);
          return;
        }
      }

      setRefreshing(true);
      const { start, end } = getDateRangeForPeriod(selectedPeriod);

      // Fetch all data with pagination
      const allData = await fetchAllData(start, end);

      if (!allData || allData.length === 0) {
        console.error("No data fetched");
        toast.error("No data available for the selected period");
        setRefreshing(false);
        setLoading(false);
        return;
      }

      console.log("Fetched data:", allData.length, "records");

      // Apply source filtering
      const filteredData = allData.filter((entry) => {
        if (sourceFilter.platform === "All Platforms") return true;
        if (sourceFilter.platform === "Others") {
          return !["Facebook", "Instagram", "Google", "Direct"].includes(
            entry.source || ""
          );
        }
        return entry.source === sourceFilter.platform;
      });

      // Separate lead and workshop data
      const leadData = filteredData.filter((entry) => !entry.is_workshop);
      const workshopData = filteredData.filter((entry) => entry.is_workshop);

      console.log(
        "Lead data:",
        leadData.length,
        "Workshop data:",
        workshopData.length
      );

      // Process lead stats
      const leadStats = COURSES.map((course) => ({
        course,
        count: leadData.filter((entry) => entry.course === course).length,
      }));

      // Process workshop stats
      const workshopStats = COURSES.map((course) => ({
        course,
        count: workshopData.filter((entry) => entry.course === course).length,
      }));

      // Process monthly stats for both leads and workshops
      const monthlyStatsData = processMonthlyStats(filteredData);

      // Process trend data
      const newTrendData = processTrendData(filteredData);

      // Process source stats
      const sourceStatsData = processSourceStats(filteredData);

      // Cache the processed data
      const dataToCache = {
        courseStats: leadStats,
        workshopStats: workshopStats,
        monthlyStats: monthlyStatsData,
        trendData: newTrendData,
        sourceStats: sourceStatsData,
      };
      setCachedData(dataToCache);

      // Update state
      setCourseStats(leadStats);
      setWorkshopStats(workshopStats);
      setMonthlyStats(monthlyStatsData);
      setTrendData(newTrendData);
      setSourceStats(sourceStatsData);

      setLastFetchTime(Date.now());
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching analytics:", error);
      toast.error("Failed to fetch analytics data");
      setRefreshing(false);
      setLoading(false);
    }
  };

  // Modify the refresh button click handler
  const handleRefresh = () => {
    console.log("🔄 Manual refresh triggered");
    localStorage.removeItem(CACHE_KEY); // Clear the cache
    fetchAnalytics(true); // Force refresh
  };

  // Modify the useEffect to use the new parameter
  useEffect(() => {
    const role = authService.getRole();
    if (role !== "admin") {
      navigate("/admin");
      return;
    }
    fetchAnalytics(false); // Don't force refresh on mount
  }, [navigate, startDate, endDate]);

  // Modify the real-time subscription to use the new parameter
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
        (payload) => {
          // Check if enough time has passed since last fetch
          if (Date.now() - lastFetchTime >= REALTIME_REFRESH_INTERVAL) {
            fetchAnalytics(true); // Force refresh on real-time update
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [lastFetchTime]);

  // Add new function to handle source filter changes
  const handleSourceFilterChange = (
    field: "platform" | "source" | "medium" | "campaign",
    value: string
  ) => {
    setSourceFilter((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear cache and fetch fresh data with new filters
    localStorage.removeItem(CACHE_KEY);
    fetchAnalytics(true);
  };

  // Modify date picker handlers to trigger refresh
  const handleStartDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      localStorage.removeItem(CACHE_KEY);
      fetchAnalytics(true);
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    if (date) {
      setEndDate(date);
      localStorage.removeItem(CACHE_KEY);
      fetchAnalytics(true);
    }
  };

  const processMonthlyStats = (data: EnrollmentData[]) => {
    const monthlyEnrollments: { [key: string]: { [key: string]: number } } = {};

    data.forEach((enrollment) => {
      if (enrollment.course && COURSES.includes(enrollment.course)) {
        const date = new Date(enrollment.created_at);
        const monthYear = date.toLocaleString("default", {
          month: "short",
          year: "numeric",
        });

        if (!monthlyEnrollments[monthYear]) {
          monthlyEnrollments[monthYear] = {
            ...COURSES.reduce(
              (acc, course) => ({
                ...acc,
                [course]: 0,
                [`${course}_workshop`]: 0,
              }),
              {}
            ),
          };
        }

        const key = enrollment.is_workshop
          ? `${enrollment.course}_workshop`
          : enrollment.course;
        monthlyEnrollments[monthYear][key]++;
      }
    });

    return Object.entries(monthlyEnrollments)
      .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime())
      .map(([month, courses]) => ({
        month,
        ...courses,
      }));
  };

  const processTrendData = (data: EnrollmentData[]) => {
    const currentPeriodData = data;
    const previousPeriodData: EnrollmentData[] = []; // You might want to fetch this from a previous period

    return COURSES.map((course) => {
      const currentValue = currentPeriodData.filter(
        (entry) => entry.course === course && !entry.is_workshop
      ).length;
      const previousValue = previousPeriodData.filter(
        (entry) => entry.course === course && !entry.is_workshop
      ).length;

      const percentageChange =
        previousValue === 0
          ? currentValue > 0
            ? 100
            : 0
          : ((currentValue - previousValue) / previousValue) * 100;

      return {
        name: course,
        value: currentValue,
        previousValue,
        percentageChange,
      };
    });
  };

  const processSourceStats = (data: EnrollmentData[]) => {
    const sourceData = data.reduce(
      (acc: { [key: string]: number }, enrollment) => {
        const source = enrollment.utm_source
          ? enrollment.utm_source.toLowerCase() === "fb"
            ? "Facebook"
            : enrollment.utm_source.toLowerCase() === "ig"
            ? "Instagram"
            : enrollment.gclid
            ? "Google"
            : enrollment.utm_source
          : "Direct";

        acc[source] = (acc[source] || 0) + 1;
        return acc;
      },
      {}
    );

    return Object.entries(sourceData).map(([source, count]) => ({
      source,
      medium: "all",
      campaign: "all",
      total_enrollments: count,
    }));
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
      className="min-h-screen bg-gray-50 py-8 mt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Performance Analytics
            </h1>
            <div className="flex gap-4">
              <button
                onClick={handleRefresh}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={refreshing}
              >
                <RefreshCw
                  className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}`}
                />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            {Object.entries(TABS).map(([key, label]) => (
              <button
                key={key}
                className={`px-6 py-3 font-medium text-sm ${
                  activeTab === key
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(key as keyof typeof TABS)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Time Period Selector */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {TIME_PERIODS.map((period) => (
                  <button
                    key={period.label}
                    onClick={() => handlePeriodChange(period)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedPeriod.label === period.label
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {period.label}
                  </button>
                ))}
              </div>

              {showCustomDateRange && (
                <div className="flex gap-4 items-center">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={handleStartDateChange}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      maxDate={endDate}
                      className="form-input rounded-md border-gray-300 text-gray-900"
                      dateFormat="MMM d, yyyy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>
                    <DatePicker
                      selected={endDate}
                      onChange={handleEndDateChange}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      maxDate={new Date()}
                      className="form-input rounded-md border-gray-300 text-gray-900"
                      dateFormat="MMM d, yyyy"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "LEAD" ? (
              // Lead Analytics Content
              <div>
                <h2 className="text-xl font-semibold mb-4">Lead Analytics</h2>

                {/* Trend Data */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {trendData.map((trend) => (
                    <motion.div
                      key={trend.name}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-xl shadow-sm"
                    >
                      <h3 className="text-sm font-medium text-gray-600">
                        {trend.name}
                      </h3>
                      <p className="mt-2 text-3xl font-semibold text-gray-900">
                        {trend.value.toLocaleString()}
                      </p>
                      <div className="flex items-center mt-2">
                        <TrendingUp
                          className={`h-4 w-4 ${
                            trend.percentageChange >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        />
                        <span
                          className={`ml-2 text-sm ${
                            trend.percentageChange >= 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {trend.percentageChange >= 0 ? "+" : ""}
                          {trend.percentageChange.toFixed(1)}%
                        </span>
                        <span className="text-sm text-gray-600 ml-2">
                          vs previous period
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Course Distribution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Course Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={courseStats}
                          dataKey="count"
                          nameKey="course"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label
                        >
                          {courseStats.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Monthly Trends */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Monthly Trends
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        {COURSES.map((course, index) => (
                          <Bar
                            key={course}
                            dataKey={course}
                            fill={COLORS[index % COLORS.length]}
                            name={course}
                          />
                        ))}
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Source Performance */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Source Performance
                  </h3>
                  {/* ... existing source performance code ... */}
                </div>
              </div>
            ) : (
              // Workshop Lead Analytics Content
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Workshop Lead Analytics
                </h2>

                {/* Workshop Course Distribution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Workshop Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={workshopStats}
                          dataKey="count"
                          nameKey="course"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label
                        >
                          {workshopStats.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Workshop Monthly Trends */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Workshop Monthly Trends
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        {COURSES.map((course, index) => (
                          <Bar
                            key={course}
                            dataKey={`${course}_workshop`}
                            fill={COLORS[index % COLORS.length]}
                            name={`${course} Workshop`}
                          />
                        ))}
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Workshop Source Performance */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Workshop Source Performance
                  </h3>
                  {/* ... similar to source performance but filtered for workshops ... */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceAnalytics;
