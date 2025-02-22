import React, { useState, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  ComposedChart,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { EnrollmentData } from "../types/analytics";
import { ArrowLeft } from "lucide-react";
import DatePicker from "react-datepicker";
import { toast } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

interface EnrollmentAnalyticsProps {
  data: EnrollmentData[];
  timeRange: "day" | "week" | "month";
  selectedCourse: string | null;
  onTimeRangeChange: (range: "day" | "week" | "month") => void;
  onCourseSelect: (course: string | null) => void;
}

const COURSE_COLORS = {
  "Product Management": "#0066CC",
  "Data Analytics": "#00855F",
  "Generative AI": "#CC9900",
  "Advance Performance Marketing With AI": "#CC4400",
};

// Add a mapping for potential variations in course names
const COURSE_NAME_MAP: { [key: string]: string } = {
  "Product Management": "Product Management",
  "Data Analytics": "Data Analytics",
  "Generative AI": "Generative AI",
  "Advance Performance Marketing With AI":
    "Advance Performance Marketing With AI",
  // Add any variations that might come from the database
  PM: "Product Management",
  DA: "Data Analytics",
  GENAI: "Generative AI",
  DM: "Advance Performance Marketing With AI",
};

const COURSES = Object.keys(COURSE_COLORS);

const TIME_PERIODS = [
  { label: "Today", days: 0 },
  { label: "Yesterday", days: 1 },
  { label: "Last 7 Days", days: 7 },
  { label: "Last 30 Days", days: 30 },
  { label: "Custom Range", days: 0 },
] as const;

export const EnrollmentAnalytics: React.FC<EnrollmentAnalyticsProps> = ({
  data,
  timeRange,
  selectedCourse,
  onTimeRangeChange,
  onCourseSelect,
}) => {
  const [selectedView, setSelectedView] = useState<
    "trend" | "distribution" | "detail"
  >(selectedCourse ? "detail" : "trend");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState<
    "day" | "week" | "month"
  >("day");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<
    (typeof TIME_PERIODS)[number]
  >(TIME_PERIODS.find((p) => p.label === "Last 30 Days") || TIME_PERIODS[0]);
  const [showCustomDateRange, setShowCustomDateRange] = useState(false);
  const [startDate, setStartDate] = useState<Date>(() => {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    date.setHours(0, 0, 0, 0);
    return date;
  });
  const [endDate, setEndDate] = useState<Date>(() => {
    const date = new Date();
    date.setHours(23, 59, 59, 999);
    return date;
  });
  const [tempStartDate, setTempStartDate] = useState<Date>(startDate);
  const [tempEndDate, setTempEndDate] = useState<Date>(endDate);

  // Process data for overall stats
  const totalLeads = data.length;

  // Calculate today's leads
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayLeads = data.filter((e) => new Date(e.created_at) >= today).length;

  const courseStats = COURSES.map((course) => ({
    course,
    count: data.filter((e) => {
      const mappedCourse = COURSE_NAME_MAP[e.course] || e.course;
      return mappedCourse === course;
    }).length,
    todayCount: data.filter((e) => {
      const mappedCourse = COURSE_NAME_MAP[e.course] || e.course;
      return mappedCourse === course && new Date(e.created_at) >= today;
    }).length,
    color: COURSE_COLORS[course as keyof typeof COURSE_COLORS],
  }));

  // Process time-based data
  const processTimeData = (filteredData: EnrollmentData[] = data) => {
    const timeData: { [key: string]: { [key: string]: number } } = {};

    // Filter data based on selected date range
    const dateFilteredData = filteredData.filter(
      (e) =>
        new Date(e.created_at) >= startDate && new Date(e.created_at) <= endDate
    );

    // Sort data by date first
    const sortedData = [...dateFilteredData].sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );

    // Fill in all dates in the range with 0 counts
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      let timeKey: string;

      switch (selectedTimeFilter) {
        case "day":
          timeKey = currentDate.toISOString().split("T")[0];
          currentDate.setDate(currentDate.getDate() + 1);
          break;
        case "week":
          const weekStart = new Date(currentDate);
          weekStart.setDate(currentDate.getDate() - currentDate.getDay());
          timeKey = weekStart.toISOString().split("T")[0];
          currentDate.setDate(currentDate.getDate() + 7);
          break;
        case "month":
          timeKey = `${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
          ).padStart(2, "0")}`;
          currentDate.setMonth(currentDate.getMonth() + 1);
          break;
      }

      if (!timeData[timeKey]) {
        timeData[timeKey] = Object.fromEntries(
          COURSES.map((course) => [course, 0])
        );
      }
    }

    // Fill in actual data
    sortedData.forEach((enrollment) => {
      const date = new Date(enrollment.created_at);
      let timeKey: string;

      switch (selectedTimeFilter) {
        case "day":
          timeKey = date.toISOString().split("T")[0];
          break;
        case "week":
          const weekStart = new Date(date);
          weekStart.setDate(date.getDate() - date.getDay());
          timeKey = weekStart.toISOString().split("T")[0];
          break;
        case "month":
          timeKey = `${date.getFullYear()}-${String(
            date.getMonth() + 1
          ).padStart(2, "0")}`;
          break;
      }

      const mappedCourse = COURSE_NAME_MAP[enrollment.course];
      if (mappedCourse && timeData[timeKey]) {
        timeData[timeKey][mappedCourse]++;
      }
    });

    return Object.entries(timeData)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([time, counts]) => ({
        time,
        ...counts,
        total: Object.values(counts).reduce((sum, count) => sum + count, 0),
      }));
  };

  const timeData = processTimeData();

  // Process source distribution
  const processSourceDistribution = (
    courseName: string | null = null,
    startDate?: Date,
    endDate?: Date
  ) => {
    const sourceData: { [key: string]: number } = {};
    const filteredData = courseName
      ? data.filter((e) => COURSE_NAME_MAP[e.course] === courseName)
      : data;

    // Apply date filtering if dates are provided
    const dateFilteredData =
      startDate && endDate
        ? filteredData.filter((e) => {
            const date = new Date(e.created_at);
            return date >= startDate && date <= endDate;
          })
        : filteredData;

    dateFilteredData.forEach((enrollment) => {
      const source = enrollment.utm_source
        ? enrollment.utm_source.toLowerCase() === "fb"
          ? "Facebook"
          : enrollment.utm_source.toLowerCase() === "ig"
          ? "Instagram"
          : enrollment.gclid
          ? "Google"
          : enrollment.utm_source
        : "Direct";

      sourceData[source] = (sourceData[source] || 0) + 1;
    });

    const total = Object.values(sourceData).reduce(
      (sum, count) => sum + count,
      0
    );
    return Object.entries(sourceData).map(([source, count]) => ({
      source,
      count,
      percentage: total > 0 ? (count / total) * 100 : 0,
    }));
  };

  // Add more detailed analytics functions
  const getDetailedAnalytics = (courseData: EnrollmentData[]) => {
    // Time-based metrics
    const hourlyDistribution = courseData.reduce((acc, curr) => {
      const hour = new Date(curr.created_at).getHours();
      acc[hour] = (acc[hour] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    const peakHour = Object.entries(hourlyDistribution).sort(
      (a, b) => b[1] - a[1]
    )[0];

    // Source analysis
    const sourceAnalysis = courseData.reduce(
      (acc, curr) => {
        const source = curr.utm_source
          ? curr.utm_source.toLowerCase() === "fb"
            ? "Facebook"
            : curr.utm_source.toLowerCase() === "ig"
            ? "Instagram"
            : curr.gclid
            ? "Google"
            : curr.utm_source
          : "Direct";

        if (!acc[source]) {
          acc[source] = {
            count: 0,
            hourlyDistribution: {},
            weekdayDistribution: {},
            campaigns: new Set(),
            mediums: new Set(),
          };
        }

        acc[source].count++;

        // Track hourly distribution per source
        const hour = new Date(curr.created_at).getHours();
        acc[source].hourlyDistribution[hour] =
          (acc[source].hourlyDistribution[hour] || 0) + 1;

        // Track weekday distribution per source
        const weekday = new Date(curr.created_at).toLocaleDateString("en-US", {
          weekday: "long",
        });
        acc[source].weekdayDistribution[weekday] =
          (acc[source].weekdayDistribution[weekday] || 0) + 1;

        // Track unique campaigns and mediums
        if (curr.utm_campaign) acc[source].campaigns.add(curr.utm_campaign);
        if (curr.utm_medium) acc[source].mediums.add(curr.utm_medium);

        return acc;
      },
      {} as Record<
        string,
        {
          count: number;
          hourlyDistribution: Record<number, number>;
          weekdayDistribution: Record<string, number>;
          campaigns: Set<string>;
          mediums: Set<string>;
        }
      >
    );

    // Growth metrics
    const growthAnalysis = courseData.reduce((acc, curr) => {
      const date = new Date(curr.created_at).toISOString().split("T")[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const sortedDates = Object.keys(growthAnalysis).sort();
    const growthRate = sortedDates.map((date, index) => {
      if (index === 0) return { date, growth: 0 };
      const prevDate = sortedDates[index - 1];
      const growth =
        ((growthAnalysis[date] - growthAnalysis[prevDate]) /
          growthAnalysis[prevDate]) *
        100;
      return { date, growth };
    });

    return {
      peakHour: {
        hour: peakHour?.[0],
        count: peakHour?.[1],
        distribution: hourlyDistribution,
      },
      sourceAnalysis,
      growthMetrics: {
        daily: growthAnalysis,
        growthRate,
      },
    };
  };

  // Process course-specific data with enhanced analytics
  const getCourseSpecificAnalysis = (courseName: string) => {
    const courseData = data.filter(
      (e) => COURSE_NAME_MAP[e.course] === courseName
    );

    const detailedAnalytics = getDetailedAnalytics(courseData);

    return {
      totalEnrollments: courseData.length,
      sourceBreakdown: courseData.reduce((acc, curr) => {
        const source = curr.utm_source
          ? curr.utm_source.toLowerCase() === "fb"
            ? "Facebook"
            : curr.utm_source.toLowerCase() === "ig"
            ? "Instagram"
            : curr.gclid
            ? "Google"
            : curr.utm_source
          : "Direct";
        acc[source] = (acc[source] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      dailyTrend: processTimeData(courseData),
      hourlyDistribution: detailedAnalytics.peakHour.distribution,
      detailedMetrics: {
        peakHour: {
          hour: detailedAnalytics.peakHour.hour,
          count: detailedAnalytics.peakHour.count,
          percentage:
            ((detailedAnalytics.peakHour.count || 0) / courseData.length) * 100,
        },
        sourceAnalysis: detailedAnalytics.sourceAnalysis,
        growthMetrics: detailedAnalytics.growthMetrics,
      },
    };
  };

  // Add ref for overview section
  const overviewRef = useRef<HTMLDivElement>(null);

  // Modify the getLeadTrendData function to filter data based on the selected date range
  const getLeadTrendData = (courseName: string | null = null) => {
    const timeData: { [key: string]: number } = {};
    const filteredData = data.filter((e) => {
      const dateMatches =
        new Date(e.created_at) >= startDate &&
        new Date(e.created_at) <= endDate;
      const courseMatches = courseName
        ? COURSE_NAME_MAP[e.course] === courseName
        : true;
      return dateMatches && courseMatches;
    });

    // Sort data chronologically
    const sortedData = [...filteredData].sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );

    // Fill in all dates in the range with 0 counts
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      let timeKey: string;
      switch (selectedTimeFilter) {
        case "day":
          timeKey = currentDate.toISOString().split("T")[0];
          currentDate.setDate(currentDate.getDate() + 1);
          break;
        case "week":
          const weekStart = new Date(currentDate);
          weekStart.setDate(currentDate.getDate() - currentDate.getDay());
          timeKey = weekStart.toISOString().split("T")[0];
          currentDate.setDate(currentDate.getDate() + 7);
          break;
        case "month":
          timeKey = `${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
          ).padStart(2, "0")}`;
          currentDate.setMonth(currentDate.getMonth() + 1);
          break;
      }
      timeData[timeKey] = 0;
    }

    // Fill in actual counts
    sortedData.forEach((entry) => {
      const date = new Date(entry.created_at);
      let timeKey: string;
      switch (selectedTimeFilter) {
        case "day":
          timeKey = date.toISOString().split("T")[0];
          break;
        case "week":
          const weekStart = new Date(date);
          weekStart.setDate(date.getDate() - date.getDay());
          timeKey = weekStart.toISOString().split("T")[0];
          break;
        case "month":
          timeKey = `${date.getFullYear()}-${String(
            date.getMonth() + 1
          ).padStart(2, "0")}`;
          break;
      }
      if (timeKey in timeData) {
        timeData[timeKey]++;
      }
    });

    // Calculate trend (percentage change)
    return Object.entries(timeData)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([time, count], index, array) => {
        let trend = 0;
        if (index > 0) {
          const prevCount = array[index - 1][1];
          trend =
            prevCount === 0 ? 100 : ((count - prevCount) / prevCount) * 100;
        }
        return {
          time,
          count,
          trend,
        };
      });
  };

  // Add loading overlay component
  const LoadingOverlay = () => (
    <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mb-4"></div>
        <p className="text-gray-700 font-medium">Loading data...</p>
      </div>
    </div>
  );

  // Modify the handleCourseSelect function to include smooth scrolling
  const handleCourseSelect = async (course: string) => {
    setIsLoading(true);
    onCourseSelect(course);
    setSelectedView("detail");

    // Simulate data loading
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Smooth scroll to overview section
    overviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    setIsLoading(false);
  };

  // Add the Source Distribution component with time filter
  const SourceDistributionWithTimeFilter = ({
    courseName = null,
  }: {
    courseName?: string | null;
  }) => {
    const [timeFilter, setTimeFilter] = useState<
      "day" | "week" | "month" | "custom"
    >("day");
    const [customStartDate, setCustomStartDate] = useState<Date>(new Date());
    const [customEndDate, setCustomEndDate] = useState<Date>(new Date());
    const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);

    const getFilteredDates = () => {
      const end = new Date();
      const start = new Date();

      switch (timeFilter) {
        case "day":
          start.setHours(0, 0, 0, 0);
          end.setHours(23, 59, 59, 999);
          break;
        case "week":
          start.setDate(end.getDate() - 7);
          start.setHours(0, 0, 0, 0);
          end.setHours(23, 59, 59, 999);
          break;
        case "month":
          start.setMonth(end.getMonth() - 1);
          start.setHours(0, 0, 0, 0);
          end.setHours(23, 59, 59, 999);
          break;
        case "custom":
          return {
            start: customStartDate,
            end: customEndDate,
          };
      }

      return { start, end };
    };

    const { start, end } = getFilteredDates();
    const sourceData = processSourceDistribution(courseName, start, end);

    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Source Distribution
          </h3>
          <div className="flex items-center gap-4">
            <select
              value={timeFilter}
              onChange={(e) => {
                setTimeFilter(e.target.value as typeof timeFilter);
                setShowCustomDatePicker(e.target.value === "custom");
              }}
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="day">Daily</option>
              <option value="week">Weekly</option>
              <option value="month">Monthly</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        </div>

        {showCustomDatePicker && (
          <div className="mb-4 flex items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                value={customStartDate.toISOString().split("T")[0]}
                onChange={(e) => setCustomStartDate(new Date(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                value={customEndDate.toISOString().split("T")[0]}
                onChange={(e) => setCustomEndDate(new Date(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        )}

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sourceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="source"
                tick={{
                  fill: "#111827",
                  fontSize: 12,
                  fontWeight: 500,
                }}
                height={60}
                interval={0}
                angle={-45}
                textAnchor="end"
                dy={20}
              />
              <YAxis
                tick={{
                  fill: "#111827",
                  fontSize: 12,
                  fontWeight: 500,
                }}
                tickFormatter={(value) => `${Math.round(value)}`}
                label={{
                  value: "Number of Leads",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#111827",
                  fontSize: 13,
                  fontWeight: 600,
                  dx: -10,
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "6px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  padding: "12px",
                  fontSize: "14px",
                }}
                formatter={(value: number, name: string) => [
                  <span
                    className="font-semibold text-gray-900"
                    style={{ fontSize: "14px" }}
                  >
                    {name === "percentage" ? `${value.toFixed(1)}%` : value}
                  </span>,
                  <span
                    className="font-medium text-gray-700"
                    style={{ fontSize: "14px" }}
                  >
                    {name === "percentage" ? "Percentage" : "Number of Leads"}
                  </span>,
                ]}
              />
              <Legend
                wrapperStyle={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#111827",
                  paddingTop: "20px",
                }}
              />
              <Bar
                dataKey="count"
                fill="#4F46E5"
                name="Number of Leads"
                radius={[4, 4, 0, 0]}
                opacity={0.8}
              />
              <Line
                type="monotone"
                dataKey="count"
                name="Trend"
                stroke="#10B981"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, stroke: "#059669", strokeWidth: 2 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  // Add TimeFilterControls component after the Summary Cards section
  const TimeFilterControls = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-xl font-semibold text-gray-900">Time Range</h3>
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
      </div>

      {showCustomDateRange && (
        <div className="mt-4 space-y-4">
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
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
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
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                dateFormat="MMM d, yyyy"
              />
            </div>
            <div className="flex items-end gap-2">
              <button
                onClick={handleApplyCustomRange}
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Apply Range
              </button>
              <button
                onClick={handleClearCustomRange}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Add time range handlers
  const handlePeriodChange = (period: (typeof TIME_PERIODS)[number]) => {
    setSelectedPeriod(period);

    if (period.label === "Custom Range") {
      setShowCustomDateRange(true);
      setTempStartDate(startDate);
      setTempEndDate(endDate);
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
        start.setDate(end.getDate() - 6);
        start.setHours(0, 0, 0, 0);
        break;
      case "Last 30 Days":
        start.setDate(end.getDate() - 29);
        start.setHours(0, 0, 0, 0);
        break;
    }

    setStartDate(start);
    setEndDate(end);
  };

  const handleApplyCustomRange = () => {
    if (!tempStartDate || !tempEndDate) {
      toast.error("Please select both start and end dates");
      return;
    }

    if (tempEndDate < tempStartDate) {
      toast.error("End date cannot be before start date");
      return;
    }

    const maxDateRange = 365;
    const daysDiff = Math.ceil(
      (tempEndDate.getTime() - tempStartDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysDiff > maxDateRange) {
      toast.error(`Date range cannot exceed ${maxDateRange} days`);
      return;
    }

    const start = new Date(tempStartDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(tempEndDate);
    end.setHours(23, 59, 59, 999);

    setStartDate(start);
    setEndDate(end);
    setShowCustomDateRange(false);
  };

  const handleClearCustomRange = () => {
    setShowCustomDateRange(false);
    const defaultPeriod = TIME_PERIODS.find((p) => p.label === "Last 30 Days");
    if (defaultPeriod) {
      handlePeriodChange(defaultPeriod);
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Total Leads Card */}
        <div className="col-span-1 md:col-span-2 rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Leads</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {totalLeads}
          </p>
        </div>

        {/* Today's Leads Card */}
        <div className="col-span-1 md:col-span-2 rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-gray-500">Today's Leads</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {todayLeads}
          </p>
        </div>

        {/* Source Distribution Summary */}
        <div className="col-span-1 md:col-span-2 rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-gray-500">Top Source</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {processSourceDistribution(selectedCourse).sort(
              (a, b) => b.count - a.count
            )[0]?.source || "N/A"}
          </p>
          <p className="mt-1 text-sm text-gray-600">
            {processSourceDistribution(selectedCourse)
              .sort((a, b) => b.count - a.count)[0]
              ?.percentage.toFixed(1)}
            % of total
          </p>
        </div>

        {/* Course-wise Summary */}
        {courseStats.map((stat) => (
          <div
            key={stat.course}
            onClick={() => handleCourseSelect(stat.course)}
            className="col-span-1 md:col-span-2 rounded-lg bg-white p-6 shadow cursor-pointer hover:shadow-lg transition-all relative"
            style={{ borderLeft: `4px solid ${stat.color}` }}
          >
            {isLoading && <LoadingOverlay />}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  {stat.course}
                </h3>
                <p className="mt-2 text-3xl font-semibold text-gray-900">
                  {stat.count}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-500">Today</span>
                <p className="text-lg font-semibold text-gray-700">
                  {stat.todayCount}
                </p>
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-600">
              {((stat.count / totalLeads) * 100).toFixed(1)}% of total
            </p>
          </div>
        ))}
      </div>

      {/* Add TimeFilterControls */}
      <TimeFilterControls />

      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Analytics Overview
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <select
                value={selectedTimeFilter}
                onChange={(e) =>
                  setSelectedTimeFilter(
                    e.target.value as "day" | "week" | "month"
                  )
                }
                className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="day">Daily</option>
                <option value="week">Weekly</option>
                <option value="month">Monthly</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Trend Graph */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="mb-4 text-xl font-semibold text-gray-900">Lead Trend</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={getLeadTrendData()}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="time"
                angle={-45}
                textAnchor="end"
                height={100}
                interval={0}
                tick={{
                  fill: "#111827",
                  fontSize: 12,
                  fontWeight: 500,
                }}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  switch (selectedTimeFilter) {
                    case "day":
                      return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                    case "week":
                      return `Week ${date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}`;
                    case "month":
                      return date.toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      });
                  }
                }}
                dy={20}
                minTickGap={5}
              />
              <YAxis
                tick={{
                  fill: "#111827",
                  fontSize: 12,
                  fontWeight: 500,
                }}
                tickFormatter={(value) => `${Math.round(value)}`}
                label={{
                  value: "Number of Leads",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#111827",
                  fontSize: 13,
                  fontWeight: 600,
                  dx: -10,
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "6px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  padding: "12px",
                  fontSize: "14px",
                }}
                formatter={(value: number) => [
                  <span
                    className="font-semibold text-gray-900"
                    style={{ fontSize: "14px" }}
                  >
                    {value}
                  </span>,
                  <span
                    className="font-medium text-gray-700"
                    style={{ fontSize: "14px" }}
                  >
                    Leads
                  </span>,
                ]}
                labelFormatter={(label) => (
                  <div
                    className="font-semibold text-gray-900 mb-2"
                    style={{ fontSize: "14px" }}
                  >
                    {new Date(label).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                )}
              />
              <Bar
                dataKey="count"
                name="Leads"
                fill="#4F46E5"
                radius={[4, 4, 0, 0]}
                opacity={0.8}
              />
              <Line
                type="monotone"
                dataKey="count"
                name="Trend"
                stroke="#10B981"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, stroke: "#059669", strokeWidth: 2 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {selectedCourse ? (
        <div className="space-y-6 relative" ref={overviewRef}>
          {isLoading && <LoadingOverlay />}
          {/* Back button and title */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                onCourseSelect(null);
                setSelectedView("trend");
              }}
              className="flex items-center gap-2 text-indigo-700 hover:text-indigo-800 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Overview
            </button>
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCourse} Analysis
            </h2>
          </div>

          {/* Course Lead Trend */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Lead Trend
              </h3>
              <div className="flex items-center gap-4">
                <select
                  value={selectedTimeFilter}
                  onChange={(e) =>
                    setSelectedTimeFilter(
                      e.target.value as "day" | "week" | "month"
                    )
                  }
                  className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="day">Daily</option>
                  <option value="week">Weekly</option>
                  <option value="month">Monthly</option>
                </select>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={getLeadTrendData(selectedCourse)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="time"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                    tick={{ fill: "#111827", fontSize: 12, fontWeight: 500 }}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      switch (selectedTimeFilter) {
                        case "day":
                          return date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          });
                        case "week":
                          return `Week ${date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}`;
                        case "month":
                          return date.toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          });
                      }
                    }}
                  />
                  <YAxis
                    tick={{ fill: "#111827", fontSize: 12, fontWeight: 500 }}
                    label={{
                      value: "Number of Leads",
                      angle: -90,
                      position: "insideLeft",
                      fill: "#111827",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #E5E7EB",
                      borderRadius: "6px",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      padding: "12px",
                      fontSize: "14px",
                    }}
                    formatter={(value: number) => [
                      <span
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "14px" }}
                      >
                        {value}
                      </span>,
                      <span
                        className="font-medium text-gray-700"
                        style={{ fontSize: "14px" }}
                      >
                        Leads
                      </span>,
                    ]}
                    labelFormatter={(label) => (
                      <div
                        className="font-semibold text-gray-900 mb-2"
                        style={{ fontSize: "14px" }}
                      >
                        {new Date(label).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    )}
                  />
                  <Bar
                    dataKey="count"
                    name="Leads"
                    fill={
                      COURSE_COLORS[
                        selectedCourse as keyof typeof COURSE_COLORS
                      ] || "#4F46E5"
                    }
                    radius={[4, 4, 0, 0]}
                    opacity={0.8}
                  />
                  <Line
                    type="monotone"
                    dataKey="count"
                    name="Trend"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, stroke: "#059669", strokeWidth: 2 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Source Distribution */}
          <SourceDistributionWithTimeFilter courseName={selectedCourse} />

          {/* Course-specific metrics */}
          {(() => {
            const analysis = getCourseSpecificAnalysis(selectedCourse);
            const sourceBreakdown = Object.entries(analysis.sourceBreakdown)
              .map(([source, count]) => ({
                source,
                count,
                percentage: (count / analysis.totalEnrollments) * 100,
                details: analysis.detailedMetrics.sourceAnalysis[source],
              }))
              .sort((a, b) => b.count - a.count);

            return (
              <>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-sm font-medium text-gray-500">
                      Total Enrollments
                    </h3>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">
                      {analysis.totalEnrollments}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-sm font-medium text-gray-500">
                      Top Source
                    </h3>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">
                      {sourceBreakdown.sort((a, b) => b.count - a.count)[0]
                        ?.source || "N/A"}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {sourceBreakdown
                        .sort((a, b) => b.count - a.count)[0]
                        ?.percentage.toFixed(1)}
                      % of enrollments
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-sm font-medium text-gray-500">
                      Peak Hour
                    </h3>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">
                      {Object.entries(analysis.hourlyDistribution).sort(
                        (a, b) => b[1] - a[1]
                      )[0]?.[0] || "N/A"}
                      :00
                    </p>
                  </div>
                </div>

                {/* Source Distribution Chart */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Source Distribution
                    </h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sourceBreakdown}
                            dataKey="count"
                            nameKey="source"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label={({
                              cx,
                              cy,
                              midAngle,
                              innerRadius,
                              outerRadius,
                              value,
                              index,
                            }) => {
                              const RADIAN = Math.PI / 180;
                              const radius =
                                25 + innerRadius + (outerRadius - innerRadius);
                              const x =
                                cx + radius * Math.cos(-midAngle * RADIAN);
                              const y =
                                cy + radius * Math.sin(-midAngle * RADIAN);

                              return (
                                <text
                                  x={x}
                                  y={y}
                                  fill="#374151"
                                  textAnchor={x > cx ? "start" : "end"}
                                  dominantBaseline="central"
                                >
                                  {`${sourceBreakdown[index]?.source} (${value})`}
                                </text>
                              );
                            }}
                          >
                            {sourceBreakdown.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={
                                  ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][
                                    index % 4
                                  ]
                                }
                              />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "1px solid #E5E7EB",
                              borderRadius: "6px",
                              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                              padding: "12px",
                              fontSize: "14px",
                            }}
                            formatter={(value: number) => [
                              <span
                                className="font-semibold text-gray-900"
                                style={{ fontSize: "14px" }}
                              >
                                {`${value} registrations (${(
                                  (value / totalLeads) *
                                  100
                                ).toFixed(1)}%)`}
                              </span>,
                              <span
                                className="font-medium text-gray-700"
                                style={{ fontSize: "14px" }}
                              >
                                Count
                              </span>,
                            ]}
                            labelFormatter={(label) => (
                              <span
                                className="font-semibold text-gray-900"
                                style={{ fontSize: "14px" }}
                              >
                                {`Source: ${label}`}
                              </span>
                            )}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Hourly Distribution
                    </h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={Object.entries(analysis.hourlyDistribution).map(
                            ([hour, count]) => ({
                              hour: `${hour}:00`,
                              count,
                            })
                          )}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="hour" />
                          <YAxis />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "1px solid #E5E7EB",
                              borderRadius: "6px",
                              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                              padding: "12px",
                              fontSize: "14px",
                            }}
                            formatter={(value: number) => [
                              <span
                                className="font-semibold text-gray-900"
                                style={{ fontSize: "14px" }}
                              >
                                {value}
                              </span>,
                              <span
                                className="font-medium text-gray-700"
                                style={{ fontSize: "14px" }}
                              >
                                Count
                              </span>,
                            ]}
                            labelFormatter={(label) => (
                              <span
                                className="font-semibold text-gray-900"
                                style={{ fontSize: "14px" }}
                              >
                                {`Source: ${label}`}
                              </span>
                            )}
                          />
                          <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* New detailed metrics */}
                <div className="col-span-full">
                  <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Detailed Source Analysis
                    </h3>
                    <div className="space-y-4">
                      {sourceBreakdown.map(
                        ({ source, count, percentage, details }) => (
                          <div
                            key={source}
                            className="border-b border-gray-200 pb-4"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-md font-medium text-gray-700">
                                {source}
                              </h4>
                              <span className="text-sm text-gray-500">
                                {count} leads ({percentage.toFixed(1)}%)
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-gray-600 mb-1">
                                  Peak Hours
                                </h5>
                                <div className="text-sm text-gray-500">
                                  {Object.entries(details.hourlyDistribution)
                                    .sort((a, b) => b[1] - a[1])
                                    .slice(0, 3)
                                    .map(([hour, count]) => (
                                      <div key={hour}>
                                        {hour}:00 - {count} leads
                                      </div>
                                    ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-gray-600 mb-1">
                                  Best Days
                                </h5>
                                <div className="text-sm text-gray-500">
                                  {Object.entries(details.weekdayDistribution)
                                    .sort((a, b) => b[1] - a[1])
                                    .slice(0, 3)
                                    .map(([day, count]) => (
                                      <div key={day}>
                                        {day} - {count} leads
                                      </div>
                                    ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-gray-600 mb-1">
                                  Campaigns
                                </h5>
                                <div className="text-sm text-gray-500">
                                  {Array.from(details.campaigns)
                                    .slice(0, 3)
                                    .map((campaign) => (
                                      <div key={campaign} className="truncate">
                                        {campaign}
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Growth Analysis */}
                <div className="col-span-full">
                  <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Growth Analysis
                    </h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                          data={
                            analysis.detailedMetrics.growthMetrics.growthRate
                          }
                          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis
                            dataKey="date"
                            tickFormatter={(date) =>
                              new Date(date).toLocaleDateString()
                            }
                          />
                          <YAxis
                            yAxisId="left"
                            label={{
                              value: "Growth Rate (%)",
                              angle: -90,
                              position: "insideLeft",
                            }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "1px solid #E5E7EB",
                              borderRadius: "6px",
                              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                              padding: "12px",
                              fontSize: "14px",
                            }}
                            formatter={(value: any) => [
                              `${value.toFixed(1)}%`,
                              "Growth Rate",
                            ]}
                            labelFormatter={(label) =>
                              new Date(label).toLocaleDateString()
                            }
                          />
                          <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="growth"
                            stroke="#8884d8"
                            dot={false}
                          />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      ) : (
        // Overview Analysis
        <>
          {/* Overview Section */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Course Distribution Chart */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Course Distribution
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={courseStats}
                      dataKey="count"
                      nameKey="course"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      onClick={(data) => {
                        if (data && data.payload) {
                          onCourseSelect(data.payload.course);
                          setSelectedView("detail");
                        }
                      }}
                      label={({
                        cx,
                        cy,
                        midAngle,
                        innerRadius,
                        outerRadius,
                        value,
                        index,
                      }) => {
                        const RADIAN = Math.PI / 180;
                        const radius =
                          25 + innerRadius + (outerRadius - innerRadius);
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                          <text
                            x={x}
                            y={y}
                            fill="#111827"
                            textAnchor={x > cx ? "start" : "end"}
                            dominantBaseline="central"
                            style={{ fontSize: "12px", fontWeight: 500 }}
                          >
                            {`${courseStats[index]?.course} (${value})`}
                          </text>
                        );
                      }}
                    >
                      {courseStats.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          style={{ cursor: "pointer" }}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #E5E7EB",
                        borderRadius: "6px",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        padding: "12px",
                        fontSize: "14px",
                      }}
                      formatter={(value: number, name: string) => [
                        <span
                          className="font-semibold text-gray-900"
                          style={{ fontSize: "14px" }}
                        >
                          {value}
                        </span>,
                        <span
                          className="font-medium text-gray-700"
                          style={{ fontSize: "14px" }}
                        >
                          {name}
                        </span>,
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Course Trend Chart */}
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Course Trends
                </h3>
                <div className="flex items-center gap-4">
                  <select
                    value={selectedTimeFilter}
                    onChange={(e) =>
                      setSelectedTimeFilter(
                        e.target.value as "day" | "week" | "month"
                      )
                    }
                    className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="day">Daily</option>
                    <option value="week">Weekly</option>
                    <option value="month">Monthly</option>
                  </select>
                </div>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={getLeadTrendData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis
                      dataKey="time"
                      tick={{ fill: "#111827", fontSize: 12, fontWeight: 500 }}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      interval={0}
                      tickFormatter={(value) => {
                        const date = new Date(value);
                        switch (selectedTimeFilter) {
                          case "day":
                            return date.toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            });
                          case "week":
                            return `Week ${date.toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}`;
                          case "month":
                            return date.toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            });
                        }
                      }}
                    />
                    <YAxis
                      tick={{ fill: "#111827", fontSize: 12, fontWeight: 500 }}
                      label={{
                        value: "Number of Leads",
                        angle: -90,
                        position: "insideLeft",
                        fill: "#111827",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #E5E7EB",
                        borderRadius: "6px",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        padding: "12px",
                        fontSize: "14px",
                      }}
                      formatter={(value: number, name: string) => [
                        <span
                          className="font-semibold text-gray-900"
                          style={{ fontSize: "14px" }}
                        >
                          {value}
                        </span>,
                        <span
                          className="font-medium text-gray-700"
                          style={{ fontSize: "14px" }}
                        >
                          {name}
                        </span>,
                      ]}
                      labelFormatter={(label) => (
                        <div
                          className="font-semibold text-gray-900 mb-2"
                          style={{ fontSize: "14px" }}
                        >
                          {new Date(label).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      )}
                    />
                    <Legend
                      wrapperStyle={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#111827",
                      }}
                    />
                    {COURSES.map((course) => (
                      <Line
                        key={course}
                        type="monotone"
                        dataKey={course}
                        stroke={
                          COURSE_COLORS[course as keyof typeof COURSE_COLORS]
                        }
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                          r: 8,
                          onClick: () => {
                            onCourseSelect(course);
                            setSelectedView("detail");
                          },
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Source Distribution */}
          <SourceDistributionWithTimeFilter />
        </>
      )}
    </div>
  );
};

export default EnrollmentAnalytics;
