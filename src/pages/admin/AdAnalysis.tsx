import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell
} from "recharts";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Use the same courses as EnrollmentAnalytics
const AVAILABLE_COURSES = ["Data Analytics", "Product Management"];

interface AdSpendData {
  date: string;
  course: string;
  ad_spend: number;
  leads: number;
  cpl: number;
  weekNumber: number;
  month: string;
}

interface LeadStats {
  totalLeads: number;
  pmLeads: number;
  dataLeads: number;
}

interface AdMetrics {
  totalSpend: number;
  totalLeads: number;
  avgCPL: number;
  bestCPL: number;
  dateRange: string;
  dailyCPL: { [key: string]: number };
  weeklyCPL: { [key: string]: number };
  monthlyCPL: { [key: string]: number };
}

interface CourseCPL {
  course: string;
  totalSpend: number;
  totalLeads: number;
  cpl: number;
}

interface DailyMetrics {
  date: string;
  leads: number;
  spend: number;
  cpl: number;
  course?: string;
}

const DATE_RANGES = [
  { label: 'Last 7 Days', getValue: () => ({ start: new Date(new Date().setDate(new Date().getDate() - 7)), end: new Date() }) },
  { label: 'Last 30 Days', getValue: () => ({ start: new Date(new Date().setDate(new Date().getDate() - 30)), end: new Date() }) },
  { label: 'This Month', getValue: () => ({ 
    start: new Date(new Date().getFullYear(), new Date().getMonth(), 1), 
    end: new Date() 
  }) },
  { label: 'Last Month', getValue: () => ({ 
    start: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
    end: new Date(new Date().getFullYear(), new Date().getMonth(), 0)
  }) },
  { label: 'Last 3 Months', getValue: () => ({ start: new Date(new Date().setMonth(new Date().getMonth() - 3)), end: new Date() }) },

  { label: 'Custom Range', getValue: () => ({ start: startDate, end: endDate }) }
];

const AdAnalysis: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date(new Date().setDate(new Date().getDate() - 30)));
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [adSpends, setAdSpends] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [adData, setAdData] = useState<AdSpendData[]>([]);
  const [leadStats, setLeadStats] = useState<LeadStats>({
    totalLeads: 0,
    pmLeads: 0,
    dataLeads: 0
  });
  const [metrics, setMetrics] = useState<AdMetrics>({
    totalSpend: 0,
    totalLeads: 0,
    avgCPL: 0,
    bestCPL: Infinity,
    dateRange: 'Last 30 Days',
    dailyCPL: {},
    weeklyCPL: {},
    monthlyCPL: {}
  });
  const [selectedRange, setSelectedRange] = useState(DATE_RANGES[1]); // Default to Last 30 Days
  const [leadTrends, setLeadTrends] = useState<{ date: string; leads: number }[]>([]);
  const [sourceStats, setSourceStats] = useState<{ source: string; leads: number; percentage: number }[]>([]);
  const [courseCPL, setCourseCPL] = useState<CourseCPL[]>([
    { course: 'Product Management', totalSpend: 0, totalLeads: 0, cpl: 0 },
    { course: 'Data Analytics', totalSpend: 0, totalLeads: 0, cpl: 0 }
  ]);
  const [dailyMetrics, setDailyMetrics] = useState<DailyMetrics[]>([]);
  const [leadTrendFilter, setLeadTrendFilter] = useState<'overall' | 'pm' | 'da'>('overall');
  const [spendTrendFilter, setSpendTrendFilter] = useState<'overall' | 'pm' | 'da'>('overall');
  const [cplTrendFilter, setCplTrendFilter] = useState<'overall' | 'pm' | 'da'>('overall');
  const [spendVsLeadsFilter, setSpendVsLeadsFilter] = useState<'overall' | 'pm' | 'da'>('overall');

  const fetchAdData = async () => {
    try {
      setLoading(true);
      console.log('Fetching ad data for date range:', {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      });
      
      // Fetch ad spends with pagination
      let allAdSpends: any[] = [];
      let page = 0;
      const PAGE_SIZE = 1000;
      
      while (true) {
        const { data: adSpendData, error: adSpendError, count } = await supabase
          .from('ad_spends')
          .select('*', { count: 'exact' })
          .gte('date', startDate.toISOString().split('T')[0])
          .lte('date', endDate.toISOString().split('T')[0])
          .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);

        if (adSpendError) {
          console.error('Error fetching ad spends:', adSpendError);
          throw adSpendError;
        }

        if (!adSpendData || adSpendData.length === 0) break;
        
        allAdSpends = [...allAdSpends, ...adSpendData];
        if (adSpendData.length < PAGE_SIZE) break;
        page++;
      }

      console.log('Fetched all ad spend data:', allAdSpends);

      // Fetch all enrollments with pagination
      let allEnrollments: any[] = [];
      page = 0;
      
      while (true) {
        const { data: enrollmentData, error: enrollmentError, count } = await supabase
          .from('enrollments')
          .select('course, created_at', { count: 'exact' })
          .gte('created_at', startDate.toISOString())
          .lte('created_at', endDate.toISOString())
          .in('course', AVAILABLE_COURSES)
          .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);

        if (enrollmentError) {
          console.error('Error fetching enrollments:', enrollmentError);
          throw enrollmentError;
        }

        if (!enrollmentData || enrollmentData.length === 0) break;
        
        allEnrollments = [...allEnrollments, ...enrollmentData];
        console.log(`Fetched ${allEnrollments.length} enrollments so far...`);
        
        if (enrollmentData.length < PAGE_SIZE) break;
        page++;
      }

      console.log('Fetched all enrollment data:', allEnrollments);

      // Process the data
      const processedData = processAdData(allAdSpends, allEnrollments);
      console.log('Processed data:', processedData);
      
      setAdData(processedData);

      // Calculate metrics
      const metrics = calculateMetrics(processedData);
      setMetrics({
        ...metrics,
        dateRange: `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
      });

    } catch (error) {
      console.error('Error in fetchAdData:', error);
      toast.error('Failed to fetch ad data');
    } finally {
      setLoading(false);
    }
  };

  const fetchLeadStats = async () => {
    try {
      console.log('Fetching lead statistics for date range:', {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      });

      // First, get total count for the date range
      const { count: totalCount, error: countError } = await supabase
        .from("enrollments")
        .select("*", { count: 'exact', head: true })
        .gte("created_at", startDate.toISOString())
        .lte("created_at", endDate.toISOString());

      if (countError) {
        console.error('Error fetching total count:', countError);
        throw countError;
      }

      console.log('Total enrollments in selected date range:', totalCount);

      // Fetch all leads within date range using pagination
      let allLeads: any[] = [];
      const pageSize = 1000;
      const totalPages = Math.ceil((totalCount || 0) / pageSize);

      console.log(`Will fetch ${totalPages} pages of size ${pageSize}`);

      for (let page = 0; page < totalPages; page++) {
        const start = page * pageSize;
        const end = start + pageSize - 1;

        console.log(`Fetching records ${start} to ${end} (page ${page + 1}/${totalPages})`);
        
        const { data: pageData, error: pageError } = await supabase
          .from("enrollments")
          .select("*")
          .gte("created_at", startDate.toISOString())
          .lte("created_at", endDate.toISOString())
          .range(start, end)
          .order('created_at', { ascending: false });

        if (pageError) {
          console.error(`Error fetching page ${page + 1}:`, pageError);
          throw pageError;
        }

        if (!pageData || pageData.length === 0) {
          console.log('No more data to fetch');
          break;
        }

        console.log(`Fetched ${pageData.length} leads from page ${page + 1}`);
        allLeads = [...allLeads, ...pageData];
        
        if (pageData.length < pageSize) {
          console.log('Last page reached (incomplete page)');
          break;
        }
      }

      console.log(`Total leads fetched after pagination: ${allLeads.length}/${totalCount}`);

      if (allLeads.length !== totalCount) {
        console.warn(`Warning: Fetched leads count (${allLeads.length}) doesn't match total count (${totalCount})`);
      }

      // Calculate lead statistics
      const pmLeads = allLeads.filter(lead => 
        lead.course?.toLowerCase().trim() === 'product management'
      ).length;

      const dataLeads = allLeads.filter(lead => 
        lead.course?.toLowerCase().trim() === 'data analytics'
      ).length;

      // Calculate source-wise distribution
      const sourceDistribution = allLeads.reduce((acc: { [key: string]: number }, lead) => {
        const source = lead.utm_source || 'Direct';
        acc[source] = (acc[source] || 0) + 1;
        return acc;
      }, {});

      console.log('Lead source distribution:', sourceDistribution);

      // Calculate daily leads trend
      const dailyLeads = allLeads.reduce((acc: { [key: string]: number }, lead) => {
        const date = new Date(lead.created_at).toISOString().split('T')[0];
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});

      console.log('Daily leads trend:', dailyLeads);

      setLeadStats({
        totalLeads: allLeads.length,
        pmLeads,
        dataLeads
      });

      // Update state for new graphs
      setLeadTrends(Object.entries(dailyLeads).map(([date, count]) => ({
        date,
        leads: count
      })));

      setSourceStats(Object.entries(sourceDistribution).map(([source, count]) => ({
        source,
        leads: count,
        percentage: (count / allLeads.length) * 100
      })));

      // Calculate course-specific CPL
      const courseCPLData = calculateCourseCPL(allLeads, adData);
      setCourseCPL(courseCPLData);

      // Calculate daily metrics
      const metrics = calculateDailyMetrics(allLeads, adData, startDate, endDate);
      setDailyMetrics(metrics);

    } catch (error) {
      console.error('Error fetching lead stats:', error);
      toast.error('Failed to fetch lead statistics');
    }
  };

  const handleRefresh = async () => {
    try {
      setLoading(true);
      console.log('Refreshing data...');
      
      fetchLeadStats();
      fetchAdData();

    } catch (error) {
      console.error('Error refreshing data:', error);
      toast.error('Failed to refresh data');
    } finally {
      setLoading(false);
    }
  };

  const processAdData = (adSpends: any[], enrollments: any[]): AdSpendData[] => {
    // Create a map of daily leads by course
    const dailyLeads: { [key: string]: { [key: string]: number } } = {};
    
    enrollments.forEach(enrollment => {
      const date = new Date(enrollment.created_at).toISOString().split('T')[0];
      const course = enrollment.course;
      
      if (!dailyLeads[date]) dailyLeads[date] = {};
      if (!dailyLeads[date][course]) dailyLeads[date][course] = 0;
      
      dailyLeads[date][course]++;
    });

    // Combine with ad spend data
    return adSpends.map(ad => {
      const leads = dailyLeads[ad.date]?.[ad.course] || 0;
      return {
        date: ad.date,
        course: ad.course,
        ad_spend: ad.ad_spend,
        leads,
        cpl: leads > 0 ? ad.ad_spend / leads : ad.ad_spend, // If no leads, CPL is the full spend
        weekNumber: getWeekNumber(new Date(ad.date)),
        month: new Date(ad.date).toLocaleString('default', { month: 'long' })
      };
    });
  };

  const calculateMetrics = (data: AdSpendData[]): AdMetrics => {
    const totalSpend = data.reduce((sum, item) => sum + item.ad_spend, 0);
    const totalLeads = data.reduce((sum, item) => sum + item.leads, 0);
    const avgCPL = totalLeads > 0 ? totalSpend / totalLeads : 0;
    const bestCPL = data.reduce((min, item) => 
      item.leads > 0 ? Math.min(min, item.cpl) : min, 
      Infinity
    );

    const cplMetrics = calculateCPLMetrics(data);

    return {
      totalSpend,
      totalLeads,
      avgCPL,
      bestCPL,
      ...cplMetrics
    };
  };

  const calculateCPLMetrics = (data: AdSpendData[]) => {
    const dailyCPL: { [key: string]: number } = {};
    const weeklyCPL: { [key: string]: number } = {};
    const monthlyCPL: { [key: string]: number } = {};

    data.forEach(item => {
      // Daily CPL
      dailyCPL[item.date] = item.ad_spend / (item.leads || 1);

      // Weekly CPL
      const weekKey = `Week ${item.weekNumber}`;
      if (!weeklyCPL[weekKey]) {
        weeklyCPL[weekKey] = 0;
      }
      weeklyCPL[weekKey] += item.ad_spend / (item.leads || 1);

      // Monthly CPL
      if (!monthlyCPL[item.month]) {
        monthlyCPL[item.month] = 0;
      }
      monthlyCPL[item.month] += item.ad_spend / (item.leads || 1);
    });

    return { dailyCPL, weeklyCPL, monthlyCPL };
  };

  const calculateCourseCPL = (leads: any[], adData: AdSpendData[]) => {
    const courseCPLData: CourseCPL[] = [
      { course: 'Product Management', totalSpend: 0, totalLeads: 0, cpl: 0 },
      { course: 'Data Analytics', totalSpend: 0, totalLeads: 0, cpl: 0 }
    ];

    // Calculate total leads for each course
    leads.forEach(lead => {
      const course = lead.course?.toLowerCase().trim();
      if (course === 'product management') {
        courseCPLData[0].totalLeads++;
      } else if (course === 'data analytics') {
        courseCPLData[1].totalLeads++;
      }
    });

    // Calculate total spend for each course
    adData.forEach(ad => {
      const course = ad.course?.toLowerCase().trim();
      if (course === 'product management') {
        courseCPLData[0].totalSpend += ad.ad_spend;
      } else if (course === 'data analytics') {
        courseCPLData[1].totalSpend += ad.ad_spend;
      }
    });

    // Calculate CPL for each course
    courseCPLData.forEach(data => {
      data.cpl = data.totalLeads > 0 ? data.totalSpend / data.totalLeads : data.totalSpend;
    });

    return courseCPLData;
  };

  const calculateDailyMetrics = (
    leads: any[], 
    adData: AdSpendData[], 
    rangeStartDate: Date,
    rangeEndDate: Date
  ) => {
    // Create a map to store daily metrics for each course
    const dailyMap = new Map<string, Map<string, DailyMetrics>>();
    
    // Create array of all dates in range
    const dates: string[] = [];
    const currentDate = new Date(rangeStartDate);
    while (currentDate <= rangeEndDate) {
      dates.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Initialize all dates with zero values for each course
    dates.forEach(date => {
      const courseMap = new Map<string, DailyMetrics>();
      courseMap.set('Product Management', { date, leads: 0, spend: 0, cpl: 0, course: 'Product Management' });
      courseMap.set('Data Analytics', { date, leads: 0, spend: 0, cpl: 0, course: 'Data Analytics' });
      dailyMap.set(date, courseMap);
    });

    // Add leads data
    leads.forEach(lead => {
      const date = new Date(lead.created_at).toISOString().split('T')[0];
      const courseMap = dailyMap.get(date);
      if (courseMap) {
        const course = lead.course || 'Product Management'; // Default to PM if course is not specified
        const existing = courseMap.get(course);
        if (existing) {
          courseMap.set(course, { ...existing, leads: existing.leads + 1 });
        }
      }
    });

    // Add spend data
    adData.forEach(ad => {
      const date = ad.date;
      const courseMap = dailyMap.get(date);
      if (courseMap) {
        const existing = courseMap.get(ad.course);
        if (existing) {
          courseMap.set(ad.course, { 
            ...existing, 
            spend: existing.spend + ad.ad_spend,
          });
        }
      }
    });

    // Calculate CPL and convert to array
    const metrics: DailyMetrics[] = [];
    dailyMap.forEach((courseMap, date) => {
      courseMap.forEach((data, course) => {
        metrics.push({
          ...data,
          cpl: data.leads > 0 ? data.spend / data.leads : data.spend
        });
      });
    });

    // Sort by date
    return metrics.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const getFilteredMetrics = (metrics: DailyMetrics[], filter: 'overall' | 'pm' | 'da') => {
    if (filter === 'overall') return metrics;
    
    const course = filter === 'pm' ? 'Product Management' : 'Data Analytics';
    return metrics.filter(metric => metric.course === course);
  };

  const FilterButtons = ({ 
    activeFilter, 
    setFilter 
  }: { 
    activeFilter: 'overall' | 'pm' | 'da', 
    setFilter: (filter: 'overall' | 'pm' | 'da') => void 
  }) => (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => setFilter('overall')}
        className={`px-3 py-1 rounded ${
          activeFilter === 'overall'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Overall
      </button>
      <button
        onClick={() => setFilter('pm')}
        className={`px-3 py-1 rounded ${
          activeFilter === 'pm'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Product Management
      </button>
      <button
        onClick={() => setFilter('da')}
        className={`px-3 py-1 rounded ${
          activeFilter === 'da'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Data Analysis
      </button>
    </div>
  );

  const handleAdSpendSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const date = startDate.toISOString().split('T')[0];

      for (const course of AVAILABLE_COURSES) {
        const adSpend = parseFloat(adSpends[course] || '0');
        
        const { error } = await supabase
          .from('ad_spends')
          .upsert({
            date,
            course,
            ad_spend: adSpend
          }, {
            onConflict: 'date,course'
          });

        if (error) throw error;
      }

      toast.success('Ad spend data saved successfully');
      fetchAdData();
      setAdSpends({});

    } catch (error) {
      console.error('Error saving ad spend:', error);
      toast.error('Failed to save ad spend data');
    } finally {
      setLoading(false);
    }
  };

  const handleDateRangeSelect = (range: typeof DATE_RANGES[number]) => {
    setSelectedRange(range);
    if (range.label !== 'Custom Range') {
      const { start, end } = range.getValue();
      setStartDate(start);
      setEndDate(end);
    }
  };

  useEffect(() => {
    console.log('Date range changed, fetching new data');
    fetchLeadStats();
    fetchAdData();
  }, [startDate, endDate]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-8 mt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Ad Analysis</h1>
          <div className="flex gap-4">
            <button
              onClick={handleRefresh}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={loading}
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Date Range Selector */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {DATE_RANGES.map((range) => (
                <button
                  key={range.label}
                  onClick={() => handleDateRangeSelect(range)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedRange.label === range.label
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
            
            <div className="flex gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ">Start Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => {
                    setStartDate(date);
                    setSelectedRange(DATE_RANGES[DATE_RANGES.length - 1]); // Set to Custom Range
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  maxDate={endDate}
                  className="form-input rounded-md border-gray-300"
                  dateFormat="MMM d, yyyy"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date: Date) => {
                    setEndDate(date);
                    setSelectedRange(DATE_RANGES[DATE_RANGES.length - 1]); // Set to Custom Range
                  }}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  maxDate={new Date()}
                  className="form-input rounded-md border-gray-300"
                  dateFormat="MMM d, yyyy"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-sm font-medium text-gray-500">Total Spent</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              ₹{metrics.totalSpend.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">{metrics.dateRange}</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-sm font-medium text-gray-500">Total Leads</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              {metrics.totalLeads.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">{metrics.dateRange}</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-sm font-medium text-gray-500">Average CPL</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              ₹{metrics.avgCPL.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-gray-500 mt-1">{metrics.dateRange}</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-sm font-medium text-gray-500">Best CPL</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              ₹{metrics.bestCPL === Infinity ? 0 : metrics.bestCPL.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-gray-500 mt-1">{metrics.dateRange}</p>
          </motion.div>
        </div>

        {/* Lead Statistics */}
        <div className="mb-8 grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Leads</h3>
            <p className="text-2xl font-bold">{leadStats.totalLeads}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">PM Leads</h3>
            <p className="text-2xl font-bold">{leadStats.pmLeads}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Data Leads</h3>
            <p className="text-2xl font-bold">{leadStats.dataLeads}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Average CPL</h3>
            <p className="text-2xl font-bold">₹{metrics.avgCPL.toFixed(2)}</p>
          </div>
        </div>

        {/* Lead Trend Graph */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Lead Trend</h3>
            <FilterButtons activeFilter={leadTrendFilter} setFilter={setLeadTrendFilter} />
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={getFilteredMetrics(dailyMetrics, leadTrendFilter)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate}
                interval="preserveStartEnd"
              />
              <YAxis />
              <Tooltip 
                labelFormatter={(date) => formatDate(date)}
                formatter={(value: number) => [value, 'Leads']}
              />
              <Area
                type="monotone"
                dataKey="leads"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.3}
                name="Leads"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Spend Trend Graph */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Spend Trend</h3>
            <FilterButtons activeFilter={spendTrendFilter} setFilter={setSpendTrendFilter} />
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={getFilteredMetrics(dailyMetrics, spendTrendFilter)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate}
                interval="preserveStartEnd"
              />
              <YAxis />
              <Tooltip 
                labelFormatter={(date) => formatDate(date)}
                formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Spend']}
              />
              <Area
                type="monotone"
                dataKey="spend"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.3}
                name="Spend"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* CPL Trend Graph */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">CPL Trend</h3>
            <FilterButtons activeFilter={cplTrendFilter} setFilter={setCplTrendFilter} />
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={getFilteredMetrics(dailyMetrics, cplTrendFilter)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate}
                interval="preserveStartEnd"
              />
              <YAxis />
              <Tooltip 
                labelFormatter={(date) => formatDate(date)}
                formatter={(value: number) => [`₹${value.toLocaleString()}`, 'CPL']}
              />
              <Line
                type="monotone"
                dataKey="cpl"
                stroke="#ff7300"
                name="CPL"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Spend vs Leads Graph */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Spend vs Leads</h3>
            <FilterButtons activeFilter={spendVsLeadsFilter} setFilter={setSpendVsLeadsFilter} />
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={getFilteredMetrics(dailyMetrics, spendVsLeadsFilter)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate}
                interval="preserveStartEnd"
              />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip 
                labelFormatter={(date) => formatDate(date)}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="spend"
                stroke="#82ca9d"
                name="Spend (₹)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="leads"
                stroke="#8884d8"
                name="Leads"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Ad Spend Form */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Ad Spend</h2>
          <form onSubmit={handleAdSpendSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {AVAILABLE_COURSES.map((course) => (
                <div key={course}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {course} Budget
                  </label>
                  <div className="relative rounded-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₹</span>
                    </div>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={adSpends[course] || ''}
                      onChange={(e) => {
                        const value = e.target.value.replace(/^0+/, '').replace(/[^\d]/g, '');
                        setAdSpends(prev => ({
                          ...prev,
                          [course]: value
                        }));
                      }}
                      className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? 'Saving...' : 'Save Ad Spend'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default AdAnalysis;

function getWeekNumber(date: Date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A4DE6C"];
