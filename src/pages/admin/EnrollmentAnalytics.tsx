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
const supabaseKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const COURSES = [
  // "No Code Development",  // Temporarily disabled
  "Data Analytics",
  "Product Management"
];

const TIME_PERIODS = [
  { label: "Today", days: 0 },
  { label: "Yesterday", days: 1 },
  { label: "Last 7 Days", days: 7 },
  { label: "Last 30 Days", days: 30 },
  // { label: "Last 3 Months", days: 90 },
  // { label: "Last 6 Months", days: 180 },
  // { label: "Last Year", days: 365 },
  { label: "Custom Range", days: 0 }
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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const EnrollmentAnalytics: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [courseStats, setCourseStats] = useState<EnrollmentStats[]>([]);
  const [monthlyStats, setMonthlyStats] = useState<MonthlyStats[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date(new Date().setMonth(new Date().getMonth() - 6)));
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [showCustomDateRange, setShowCustomDateRange] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<typeof TIME_PERIODS[number]>(TIME_PERIODS[3]);
  const [trendData, setTrendData] = useState<TrendData[]>([]);
  const [cplData, setCPLData] = useState<CPLData[]>(
    COURSES.map(course => ({
      course,
      adSpend: 0,
      leads: 0,
      cpl: 0
    }))
  );

  // Note: No Code Development is already disabled in COURSES array, 
  // so it will automatically be excluded from CPL calculations

  const handlePeriodChange = (period: typeof TIME_PERIODS[number]) => {
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
    setCPLData(prevData =>
      prevData.map(item => {
        if (item.course === course) {
          const newItem = {
            ...item,
            [field]: value
          };
          return {
            ...newItem,
            cpl: calculateCPL(
              field === "adSpend" ? value : item.adSpend,
              field === "leads" ? value : item.leads
            )
          };
        }
        return item;
      })
    );
  };

  const getDateRangeForPeriod = (period: typeof TIME_PERIODS[number]): { start: Date; end: Date } => {
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

  const fetchAnalytics = async () => {
    try {
      setRefreshing(true);
      
      // First, get total count of all enrollments
      const { count: totalCount, error: countError } = await supabase
        .from("enrollments")
        .select("*", { count: 'exact', head: true });

      if (countError) {
        console.error('Error fetching total count:', countError);
        throw countError;
      }

      // console.log('Total enrollments in database:', totalCount);

      // Get distribution of courses with case-insensitive matching
      const { data: courseDistribution, error: distributionError } = await supabase
        .from("enrollments")
        .select('course')
        .order('course');

      if (distributionError) {
        console.error('Error fetching course distribution:', distributionError);
        throw distributionError;
      }

      const courseGroups = courseDistribution?.reduce((acc: { [key: string]: number }, item) => {
        let course = item.course || 'No Course';
        // Normalize course names to match our COURSES array
        COURSES.forEach(validCourse => {
          if (course.toLowerCase().trim() === validCourse.toLowerCase().trim()) {
            course = validCourse; // Use the exact case from COURSES
          }
        });
        acc[course] = (acc[course] || 0) + 1;
        return acc;
      }, {});

      // console.log('Course distribution (all):', courseGroups);

      // Get sample of entries to analyze data quality
      const { data: sampleData, error: sampleError } = await supabase
        .from("enrollments")
        .select('id, full_name, phone_number, email, course, created_at')
        .order('created_at', { ascending: false })
        .limit(10);

      if (sampleError) {
        console.error('Error fetching sample data:', sampleError);
        throw sampleError;
      }

      // console.log('Recent entries sample:', sampleData);

      // Determine date range based on selected period or custom dates
      let queryStartDate: Date;
      let queryEndDate: Date;

      if (selectedPeriod.label === "Custom Range") {
        queryStartDate = startDate;
        queryEndDate = endDate;
      } else {
        const dateRange = getDateRangeForPeriod(selectedPeriod);
        queryStartDate = dateRange.start;
        queryEndDate = dateRange.end;
      }

      // console.log('Fetching analytics with date range:', {
      //   startDate: queryStartDate.toISOString(),
      //   endDate: queryEndDate.toISOString()
      // });

      // Fetch all enrollments within date range using pagination
      let allCourseData: any[] = [];
      let page = 0;
      const pageSize = 1000;
      let hasMore = true;

      while (hasMore) {
        const { data: pageData, error: pageError } = await supabase
          .from("enrollments")
          .select("*")
          .gte("created_at", queryStartDate.toISOString())
          .lte("created_at", queryEndDate.toISOString())
          .range(page * pageSize, (page + 1) * pageSize - 1);

        if (pageError) {
          console.error(`Error fetching page ${page}:`, pageError);
          throw pageError;
        }

        if (!pageData || pageData.length === 0) {
          hasMore = false;
        } else {
          allCourseData = [...allCourseData, ...pageData];
          page++;
        }
      }

      // console.log(`Total records fetched after pagination: ${allCourseData.length}`);

      // Normalize course names in the fetched data
      const normalizedCourseData = allCourseData.map(item => ({
        ...item,
        course: item.course ? COURSES.find(c => 
          c.toLowerCase().trim() === item.course.toLowerCase().trim()
        ) || item.course : null
      }));

      // Analyze the fetched data
      const dataAnalysis = {
        total: normalizedCourseData.length,
        withCourse: normalizedCourseData.filter(e => e.course !== null).length,
        withoutCourse: normalizedCourseData.filter(e => e.course === null).length,
        courseBreakdown: normalizedCourseData.reduce((acc: { [key: string]: number }, item) => {
          const course = item.course || 'No Course';
          acc[course] = (acc[course] || 0) + 1;
          return acc;
        }, {}),
        uniquePhoneNumbers: new Set(normalizedCourseData.map(e => e.phone_number)).size,
        uniqueEmails: new Set(normalizedCourseData.map(e => e.email)).size,
      };

      // console.log('Data Analysis:', dataAnalysis);

      // Get previous period data with pagination
      let allPreviousPeriodData: any[] = [];
      const previousPeriodStart = new Date(queryStartDate);
      const periodLength = queryEndDate.getTime() - queryStartDate.getTime();
      previousPeriodStart.setTime(previousPeriodStart.getTime() - periodLength);

      page = 0;
      hasMore = true;

      while (hasMore) {
        const { data: pageData, error: pageError } = await supabase
          .from("enrollments")
          .select("*")
          .gte("created_at", previousPeriodStart.toISOString())
          .lt("created_at", queryStartDate.toISOString())
          .range(page * pageSize, (page + 1) * pageSize - 1);

        if (pageError) {
          console.error(`Error fetching previous period page ${page}:`, pageError);
          throw pageError;
        }

        if (!pageData || pageData.length === 0) {
          hasMore = false;
        } else {
          allPreviousPeriodData = [...allPreviousPeriodData, ...pageData];
          page++;
        }
      }

      // Normalize previous period course names
      const normalizedPreviousPeriodData = allPreviousPeriodData.map(item => ({
        ...item,
        course: item.course ? COURSES.find(c => 
          c.toLowerCase().trim() === item.course.toLowerCase().trim()
        ) || item.course : null
      }));

      // Calculate course statistics
      const courseCount: { [key: string]: number } = {};
      const previousCourseCount: { [key: string]: number } = {};

      // Initialize counts
      COURSES.forEach(course => {
        courseCount[course] = 0;
        previousCourseCount[course] = 0;
      });

      // Count current period
      normalizedCourseData.forEach(enrollment => {
        if (enrollment.course && COURSES.includes(enrollment.course)) {
          courseCount[enrollment.course]++;
        }
      });

      // Count previous period
      normalizedPreviousPeriodData.forEach(enrollment => {
        if (enrollment.course && COURSES.includes(enrollment.course)) {
          previousCourseCount[enrollment.course]++;
        }
      });

      // Calculate trend data
      const newTrendData = COURSES.map(course => {
        const currentValue = courseCount[course];
        const previousValue = previousCourseCount[course];
        const percentageChange = previousValue === 0 
          ? (currentValue > 0 ? 100 : 0)
          : ((currentValue - previousValue) / previousValue) * 100;

        return {
          name: course,
          value: currentValue,
          previousValue,
          percentageChange
        };
      });

      // Prepare monthly statistics
      const monthlyEnrollments: { [key: string]: { [key: string]: number } } = {};
      
      normalizedCourseData.forEach((enrollment) => {
        if (enrollment.course && COURSES.includes(enrollment.course)) {
          const date = new Date(enrollment.created_at);
          const monthYear = date.toLocaleString("default", { month: "short", year: "numeric" });
          
          if (!monthlyEnrollments[monthYear]) {
            monthlyEnrollments[monthYear] = COURSES.reduce((acc, course) => ({
              ...acc,
              [course]: 0
            }), {});
          }
          
          monthlyEnrollments[monthYear][enrollment.course]++;
        }
      });

      const monthlyStatsData = Object.entries(monthlyEnrollments)
        .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime())
        .map(([month, courses]) => ({
          month,
          ...courses,
        }));

      const courseStatsData = Object.entries(courseCount)
        .map(([course, count]) => ({
          course,
          count,
        }))
        .sort((a, b) => b.count - a.count); // Sort by count in descending order

      // console.log('Processed statistics:', {
      //   totalEnrollments: normalizedCourseData.length,
      //   courseStats: courseStatsData,
      //   monthlyStats: monthlyStatsData,
      //   trendData: newTrendData
      // });

      setCourseStats(courseStatsData);
      setMonthlyStats(monthlyStatsData);
      setTrendData(newTrendData);

      // Update CPL data
      const newCPLData = cplData.map(item => ({
        ...item,
        leads: courseCount[item.course] || 0,
        cpl: calculateCPL(item.adSpend, courseCount[item.course] || 0)
      }));

      setCPLData(newCPLData);

    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setRefreshing(false);
      toast.success("Data refreshed successfully");

      setLoading(false);
    }
  };

  useEffect(() => {
    const role = authService.getRole();
    if (role !== "admin") {
      navigate("/admin");
      return;
    }
    fetchAnalytics();
  }, [navigate, startDate, endDate]);

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
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto pt-8 mt-16">
        {/* Header Section */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <p className="mt-2 text-sm text-gray-600">
              Course-wise enrollment statistics and trends
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/admin/analytics/adanalysis"
              className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
            >
              <TrendingUp className="h-4 w-4" />
              Ad Analysis
            </Link>
            <button
              onClick={fetchAnalytics}
              disabled={refreshing}
              className={`flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors ${
                refreshing ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>

        {/* Time Period Selector */}
        <div className="mb-8 bg-white p-4 rounded-xl shadow-md">
          <div className="flex flex-wrap gap-3">
            {TIME_PERIODS.map((period) => (
              <button
                key={period.label}
                onClick={() => handlePeriodChange(period)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedPeriod.label === period.label
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>

          {showCustomDateRange && (
            <div className="mt-4 flex gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  className="border border-gray-300 rounded-md px-3 py-2"
                  maxDate={endDate}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date: Date) => setEndDate(date)}
                  className="border border-gray-300 rounded-md px-3 py-2"
                  minDate={startDate}
                  maxDate={new Date()}
                />
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {courseStats.map((stat, index) => (
            <div
              key={stat.course}
              className="bg-white p-6 rounded-xl shadow-md border-l-4"
              style={{ borderLeftColor: COLORS[index % COLORS.length] }}
            >
              <h3 className="text-lg font-semibold text-gray-900">{stat.course}</h3>
              <p className="mt-2 text-3xl font-bold">{stat.count}</p>
              <p className="text-sm text-gray-500 mt-1">Total Enrollments</p>
              {trendData[index] && (
                <div className={`mt-2 text-sm ${
                  trendData[index].percentageChange >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {trendData[index].percentageChange >= 0 ? '↑' : '↓'}{' '}
                  {Math.abs(trendData[index].percentageChange)}%
                  <span className="text-gray-500 ml-1">vs previous period</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Course Distribution Chart */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Course Distribution</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={courseStats}
                    dataKey="count"
                    nameKey="course"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    label={({ course, percent }) =>
                      `${course} (${(percent * 100).toFixed(0)}%)`
                    }
                  >
                    {courseStats.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Trends Chart */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Monthly Enrollment Trends</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {COURSES.map((course, index) => (
                    <Bar 
                      key={course} 
                      dataKey={course} 
                      fill={COLORS[index]} 
                      stackId="stack"
                      radius={[4, 4, 0, 0]}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* CPL Display Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {cplData.map((data) => (
            <div key={data.course} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3">{data.course}</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Ad Spend</p>
                  <p className="text-lg font-semibold">₹{data.adSpend.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Leads</p>
                  <p className="text-lg font-semibold">{data.leads}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Cost Per Lead</p>
                  <p className="text-lg font-semibold text-indigo-600">
                    ₹{data.cpl.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default EnrollmentAnalytics;
