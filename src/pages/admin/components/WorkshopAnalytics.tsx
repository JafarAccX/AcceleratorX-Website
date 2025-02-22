import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Line,
} from "recharts";
import { WorkshopData } from "../types/analytics";
import toast from "react-hot-toast";

interface WorkshopAnalyticsProps {
  data: WorkshopData[];
  timeRange: "day" | "week" | "month";
  selectedWorkshopType: string | null;
  onTimeRangeChange: (range: "day" | "week" | "month") => void;
  onWorkshopSelect: (workshopType: string | null) => void;
}

const WORKSHOP_COLORS = {
  PMWorkshop: "#0066CC",
  DAWorkshop: "#00855F",
  GENAIWorkshop: "#CC9900",
  DMWorkshop: "#CC4400",
};

const WORKSHOP_TYPE_MAP: { [key: string]: string } = {
  PMWorkshop: "Product Management",
  DAWorkshop: "Data Analytics",
  GENAIWorkshop: "Generative AI",
  DMWorkshop: "Advance Performance Marketing With AI",
};

const WORKSHOP_KEYS = [
  "PMWorkshop",
  "DAWorkshop",
  "GENAIWorkshop",
  "DMWorkshop",
] as const;

const EXPERIENCE_RANGES = ["0-1", "1-3", "3-5", "5-8", "8+"] as const;

const EXPERIENCE_DISPLAY_MAP: Record<
  (typeof EXPERIENCE_RANGES)[number],
  string
> = {
  "0-1": "0-1 years",
  "1-3": "1-3 years",
  "3-5": "3-5 years",
  "5-8": "5-8 years",
  "8+": "8+ years",
};

const TIME_PERIODS = [
  { label: "Today", days: 0 },
  { label: "Yesterday", days: 1 },
  { label: "Last 7 Days", days: 7 },
  { label: "Last 30 Days", days: 30 },
  { label: "Custom Range", days: 0 },
] as const;

export const WorkshopAnalytics: React.FC<WorkshopAnalyticsProps> = ({
  data,
  timeRange,
  selectedWorkshopType,
  onTimeRangeChange,
  onWorkshopSelect,
}) => {
  const [selectedView, setSelectedView] = useState<"overview" | "detail">(
    selectedWorkshopType ? "detail" : "overview"
  );
  const [selectedTimeFilter, setSelectedTimeFilter] = useState<
    "day" | "week" | "month"
  >("day");
  const [selectedPeriod, setSelectedPeriod] = useState<
    (typeof TIME_PERIODS)[number]
  >({ label: "Last 30 Days", days: 30 });
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

  // Debug data
  console.log("Raw Workshop Data:", data);

  // Process workshop type statistics
  const workshopTypeStats = WORKSHOP_KEYS.map((type) => {
    // Normalize workshop type for comparison
    const workshopData = data.filter((w) => {
      const normalizedType = w.workshop_type?.trim().toUpperCase();
      const compareType = type.trim().toUpperCase();
      return normalizedType === compareType;
    });

    console.log(`Workshop Data for ${type}:`, workshopData);

    const latestUpdate =
      workshopData.length > 0
        ? new Date(
            Math.max(
              ...workshopData.map((w) => new Date(w.updated_at).getTime())
            )
          )
        : null;

    return {
      type,
      name: WORKSHOP_TYPE_MAP[type],
      count: workshopData.length,
      lastUpdated: latestUpdate ? latestUpdate.toLocaleString() : "N/A",
      color: WORKSHOP_COLORS[type as keyof typeof WORKSHOP_COLORS],
    };
  });

  console.log("Processed Workshop Stats:", workshopTypeStats);

  // Process experience distribution
  const getExperienceDistribution = (workshopType: string | null = null) => {
    const filteredData = workshopType
      ? data.filter(
          (w) =>
            w.workshop_type?.trim().toUpperCase() ===
            workshopType.trim().toUpperCase()
        )
      : data;

    console.log("Filtered Data for Experience Distribution:", filteredData);

    const distribution = EXPERIENCE_RANGES.map((range) => {
      const count = filteredData.filter((w) => {
        const rawExperience = w.years_of_experience?.trim();
        return rawExperience === range;
      }).length;

      return {
        range,
        displayRange: EXPERIENCE_DISPLAY_MAP[range],
        count,
        percentage:
          filteredData.length > 0 ? (count / filteredData.length) * 100 : 0,
      };
    });

    console.log("Experience Distribution:", distribution);
    return distribution;
  };

  // Get workshop-specific analysis
  const getWorkshopAnalysis = (workshopType: string) => {
    const workshopData = data.filter(
      (w) =>
        w.workshop_type?.trim().toUpperCase() ===
        workshopType.trim().toUpperCase()
    );

    console.log("Workshop-specific Analysis Data:", workshopData);

    const experienceDistribution = getExperienceDistribution(workshopType);
    const latestRegistration =
      workshopData.length > 0
        ? new Date(
            Math.max(
              ...workshopData.map((w) => new Date(w.updated_at).getTime())
            )
          )
        : null;

    return {
      totalRegistrations: workshopData.length,
      experienceDistribution,
      lastUpdated: latestRegistration
        ? latestRegistration.toLocaleString()
        : "N/A",
    };
  };

  // Modify the getLeadTrendData function to use the selected date range
  const getLeadTrendData = (workshopType: string | null = null) => {
    const timeData: { [key: string]: { count: number; trend: number } } = {};
    const filteredData = data.filter((w) => {
      const dateMatches =
        new Date(w.created_at) >= startDate &&
        new Date(w.created_at) <= endDate;
      return workshopType
        ? dateMatches &&
            w.workshop_type?.trim().toUpperCase() ===
              workshopType.trim().toUpperCase()
        : dateMatches;
    });

    const sortedData = [...filteredData].sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );

    sortedData.forEach((entry) => {
      let timeKey: string;
      const date = new Date(entry.created_at);

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

      if (!timeData[timeKey]) {
        timeData[timeKey] = { count: 0, trend: 0 };
      }
      timeData[timeKey].count++;
    });

    // Calculate trend (percentage change)
    const result = Object.entries(timeData)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([time, data], index, array) => {
        let trend = 0;
        if (index > 0) {
          const prevCount = array[index - 1][1].count;
          trend =
            prevCount === 0
              ? 100
              : ((data.count - prevCount) / prevCount) * 100;
        }
        return {
          time,
          count: data.count,
          trend,
        };
      });

    return result;
  };

  // Update the processWorkshopData function to use the date range
  const processWorkshopData = (workshopType: string | null = null) => {
    const filteredData = data.filter((w) => {
      const dateMatches =
        new Date(w.created_at) >= startDate &&
        new Date(w.created_at) <= endDate;
      return workshopType
        ? dateMatches &&
            w.workshop_type?.trim().toUpperCase() ===
              workshopType.trim().toUpperCase()
        : dateMatches;
    });

    // Process experience distribution
    const experienceData = Object.entries(EXPERIENCE_DISPLAY_MAP).reduce(
      (acc, [key, label]) => {
        const count = filteredData.filter(
          (w) => w.years_of_experience?.trim() === key
        ).length;
        if (count > 0) {
          acc.push({ name: label, value: count });
        }
        return acc;
      },
      [] as { name: string; value: number }[]
    );

    // Process registration trend
    const registrationTrend = getLeadTrendData(workshopType);

    return {
      totalRegistrations: filteredData.length,
      experienceDistribution: experienceData,
      registrationTrend,
    };
  };

  // Update the getWorkshopTypeData function
  const getWorkshopTypeData = () => {
    const filteredData = data.filter(
      (w) =>
        new Date(w.created_at) >= startDate && new Date(w.created_at) <= endDate
    );

    return Object.entries(
      filteredData.reduce((acc, curr) => {
        const type = curr.workshop_type?.trim() || "Unknown";
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    ).map(([type, count]) => ({
      type,
      count,
      percentage: (count / filteredData.length) * 100,
    }));
  };

  // Update the getDetailedAnalytics function
  const getDetailedAnalytics = (workshopType: string) => {
    const filteredData = data.filter(
      (w) =>
        w.workshop_type?.trim().toUpperCase() ===
          workshopType.trim().toUpperCase() &&
        new Date(w.created_at) >= startDate &&
        new Date(w.created_at) <= endDate
    );

    // Time-based metrics
    const hourlyDistribution = filteredData.reduce((acc, curr) => {
      const hour = new Date(curr.created_at).getHours();
      acc[hour] = (acc[hour] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    // Experience analysis
    const experienceAnalysis = filteredData.reduce(
      (acc, curr) => {
        const exp = curr.years_of_experience?.trim() || "Unknown";
        if (!acc[exp]) {
          acc[exp] = {
            count: 0,
            hourlyDistribution: {},
            weekdayDistribution: {},
          };
        }

        acc[exp].count++;

        // Track hourly distribution
        const hour = new Date(curr.created_at).getHours();
        acc[exp].hourlyDistribution[hour] =
          (acc[exp].hourlyDistribution[hour] || 0) + 1;

        // Track weekday distribution
        const weekday = new Date(curr.created_at).toLocaleDateString("en-US", {
          weekday: "long",
        });
        acc[exp].weekdayDistribution[weekday] =
          (acc[exp].weekdayDistribution[weekday] || 0) + 1;

        return acc;
      },
      {} as Record<
        string,
        {
          count: number;
          hourlyDistribution: Record<number, number>;
          weekdayDistribution: Record<string, number>;
        }
      >
    );

    return {
      totalRegistrations: filteredData.length,
      hourlyDistribution,
      experienceAnalysis,
      peakHour: Object.entries(hourlyDistribution).sort(
        (a, b) => b[1] - a[1]
      )[0],
      registrationTrend: getLeadTrendData(workshopType),
    };
  };

  // Add the time filter UI component
  const TimeFilterControls = () => (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
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

  return (
    <div className="space-y-8">
      {/* Add TimeFilterControls at the top */}
      <TimeFilterControls />

      {selectedView === "overview" ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshopTypeStats.map((stat) => (
              <div
                key={stat.type}
                onClick={() => {
                  onWorkshopSelect(stat.type);
                  setSelectedView("detail");
                }}
                className="rounded-lg bg-white p-6 shadow cursor-pointer hover:shadow-lg transition-all"
                style={{ borderLeft: `4px solid ${stat.color}` }}
              >
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gray-900">
                    {stat.name}
                  </h3>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.count}
                  </p>
                  <p className="text-sm font-medium text-gray-600">
                    Last Updated: {stat.lastUpdated}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Filter Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Analytics Overview
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">
                    View:
                  </span>
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
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Registration Trend
            </h3>
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
                    tickFormatter={(time) => {
                      const date = new Date(time);
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
                    yAxisId="left"
                    tick={{
                      fill: "#111827",
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                    tickFormatter={(value: any): string =>
                      `${Math.round(value)}`
                    }
                    label={{
                      value: "Number of Registrations",
                      angle: -90,
                      position: "insideLeft",
                      fill: "#111827",
                      fontSize: 13,
                      fontWeight: 600,
                      dx: -10,
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={[-100, 100]}
                    tick={{
                      fill: "#111827",
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                    tickFormatter={(value: any): string =>
                      `${Math.round(value)}%`
                    }
                    label={{
                      value: "Growth %",
                      angle: 90,
                      position: "insideRight",
                      fill: "#111827",
                      fontSize: 13,
                      fontWeight: 600,
                      dx: 10,
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
                        {name === "trend" ? `${value.toFixed(1)}%` : value}
                      </span>,
                      <span
                        className="font-medium text-gray-700"
                        style={{ fontSize: "14px" }}
                      >
                        {name === "trend" ? "Growth Rate" : "Registrations"}
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
                      paddingTop: "20px",
                    }}
                  />
                  <Bar
                    dataKey="count"
                    name="Registrations"
                    fill="#4F46E5"
                    radius={[4, 4, 0, 0]}
                    yAxisId="left"
                  />
                  <Line
                    type="monotone"
                    dataKey="trend"
                    name="Growth Rate"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ fill: "#10B981", stroke: "#10B981", r: 4 }}
                    activeDot={{ r: 6, stroke: "#059669", strokeWidth: 2 }}
                    yAxisId="right"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Workshop Distribution
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={workshopTypeStats.filter((stat) => stat.count > 0)}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis
                      dataKey="name"
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
                      tickFormatter={(value: any): string =>
                        `${Math.round(value)}`
                      }
                      label={{
                        value: "Number of Registrations",
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
                          {name === "percentage"
                            ? `${value.toFixed(1)}%`
                            : value}
                        </span>,
                        <span
                          className="font-medium text-gray-700"
                          style={{ fontSize: "14px" }}
                        >
                          {name === "percentage"
                            ? "Percentage"
                            : "Number of Registrations"}
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
                      name="Number of Registrations"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="percentage"
                      fill="#10B981"
                      name="Percentage"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Experience Distribution (All Workshops)
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={getExperienceDistribution()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis
                      dataKey="displayRange"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      interval={0}
                      tick={{ fill: "#374151", fontSize: 12 }}
                    />
                    <YAxis tick={{ fill: "#374151", fontSize: 12 }} />
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
                          {`${value} registrations`}
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
                          {`Experience: ${label}`}
                        </span>
                      )}
                    />
                    <Bar dataKey="count" name="Registrations">
                      {getExperienceDistribution().map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={`hsl(${
                            index * (360 / EXPERIENCE_RANGES.length)
                          }, 85%, 35%)`}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
      ) : (
        selectedWorkshopType && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  onWorkshopSelect(null);
                  setSelectedView("overview");
                }}
                className="flex items-center gap-2 text-indigo-700 hover:text-indigo-800 font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Overview
              </button>
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
                <h2 className="text-2xl font-bold text-gray-900">
                  {
                    WORKSHOP_TYPE_MAP[
                      selectedWorkshopType as keyof typeof WORKSHOP_TYPE_MAP
                    ]
                  }{" "}
                  Analysis
                </h2>
              </div>
            </div>

            {(() => {
              const analysis = getWorkshopAnalysis(selectedWorkshopType);
              const trendData = getLeadTrendData(selectedWorkshopType);
              const lastTrend = trendData[trendData.length - 1]?.trend || 0;

              return (
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-lg bg-white p-6 shadow">
                      <h3 className="text-sm font-medium text-gray-500">
                        Total Registrations
                      </h3>
                      <p className="mt-2 text-3xl font-bold text-gray-900">
                        {analysis.totalRegistrations}
                      </p>
                      <div className="mt-2 flex items-center text-sm">
                        <span
                          className={`font-medium ${
                            lastTrend >= 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {lastTrend >= 0 ? "↑" : "↓"}{" "}
                          {Math.abs(lastTrend).toFixed(1)}%
                        </span>
                        <span className="text-gray-600 ml-2">
                          vs previous period
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                      <h3 className="text-sm font-medium text-gray-500">
                        Average Registrations
                      </h3>
                      <p className="mt-2 text-3xl font-bold text-gray-900">
                        {(
                          trendData.reduce((acc, curr) => acc + curr.count, 0) /
                            trendData.length || 0
                        ).toFixed(1)}
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        per {selectedTimeFilter}
                      </p>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                      <h3 className="text-sm font-medium text-gray-500">
                        Last Updated
                      </h3>
                      <p className="mt-2 text-3xl font-bold text-gray-900">
                        {new Date(analysis.lastUpdated).toLocaleDateString()}
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        {new Date(analysis.lastUpdated).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>

                  {/* Registration Trend */}
                  <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Registration Trend
                    </h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={trendData}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#E5E7EB"
                          />
                          <XAxis
                            dataKey="time"
                            angle={-45}
                            textAnchor="end"
                            height={80}
                            interval={0}
                            tick={{ fill: "#374151", fontSize: 12 }}
                            tickFormatter={(time) => {
                              const date = new Date(time);
                              switch (selectedTimeFilter) {
                                case "day":
                                  return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  });
                                case "week":
                                  return `Week ${date.toLocaleDateString(
                                    "en-US",
                                    {
                                      month: "short",
                                      day: "numeric",
                                    }
                                  )}`;
                                case "month":
                                  return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    year: "numeric",
                                  });
                              }
                            }}
                          />
                          <YAxis
                            yAxisId="left"
                            tick={{ fill: "#374151", fontSize: 12 }}
                            label={{
                              value: "Number of Registrations",
                              angle: -90,
                              position: "insideLeft",
                              fill: "#374151",
                              fontSize: 12,
                              fontWeight: 600,
                            }}
                          />
                          <YAxis
                            yAxisId="right"
                            orientation="right"
                            domain={[-100, 100]}
                            tick={{ fill: "#374151", fontSize: 12 }}
                            label={{
                              value: "Growth %",
                              angle: 90,
                              position: "right",
                              fill: "#374151",
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
                                {name === "trend"
                                  ? `${value.toFixed(1)}%`
                                  : value}
                              </span>,
                              <span
                                className="font-medium text-gray-700"
                                style={{ fontSize: "14px" }}
                              >
                                {name === "trend"
                                  ? "Growth Rate"
                                  : "Registrations"}
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
                              paddingTop: "20px",
                            }}
                          />
                          <Bar
                            dataKey="count"
                            name="Registrations"
                            fill={
                              WORKSHOP_COLORS[
                                selectedWorkshopType as keyof typeof WORKSHOP_COLORS
                              ]
                            }
                            radius={[4, 4, 0, 0]}
                            yAxisId="left"
                          />
                          <Line
                            type="monotone"
                            dataKey="trend"
                            name="Growth Rate"
                            stroke="#10B981"
                            strokeWidth={2}
                            dot={{ fill: "#10B981", stroke: "#10B981", r: 4 }}
                            activeDot={{
                              r: 6,
                              stroke: "#059669",
                              strokeWidth: 2,
                            }}
                            yAxisId="right"
                          />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Experience Distribution */}
                  <div className="rounded-lg bg-white p-6 shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Experience Distribution
                    </h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={analysis.experienceDistribution}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#E5E7EB"
                          />
                          <XAxis
                            dataKey="displayRange"
                            angle={-45}
                            textAnchor="end"
                            height={80}
                            interval={0}
                            tick={{ fill: "#374151", fontSize: 12 }}
                          />
                          <YAxis tick={{ fill: "#374151", fontSize: 12 }} />
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
                                {`${value} registrations`}
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
                                {`Experience: ${label}`}
                              </span>
                            )}
                          />
                          <Bar dataKey="count" name="Registrations">
                            {analysis.experienceDistribution.map(
                              (entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={`hsl(${
                                    index * (360 / EXPERIENCE_RANGES.length)
                                  }, 85%, 35%)`}
                                />
                              )
                            )}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )
      )}
    </div>
  );
};

export default WorkshopAnalytics;
