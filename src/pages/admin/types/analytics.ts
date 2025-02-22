// Types
export interface EnrollmentStats {
    course: string;
    count: number;
  }
  
  export interface MonthlyStats {
    month: string;
    [key: string]: number | string;
  }
  
  export interface CPLData {
    course: string;
    adSpend: number;
    leads: number;
    cpl: number;
  }
  
  export interface TrendData {
    name: string;
    value: number;
    previousValue: number;
    percentageChange: number;
  }
  
  export interface SourceStats {
    source: string;
    medium: string;
    campaign: string;
    total_enrollments: number;
  }
  
  // Constants
  export const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  
  export const SOURCE_PLATFORMS = [
    "All Platforms",
    "Facebook",
    "Instagram",
    "Google",
    "Direct",
    "Others",
  ] as const;
  
  export const PAGE_SIZE = 1000;
  
  export const CACHE_KEY = "analytics_data_cache";
  export const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache duration
  export const REALTIME_REFRESH_INTERVAL = 10000; // 10 seconds
  
  export const TABS = {
    ENROLLMENT: "Enrollment Analytics",
    WORKSHOP: "Workshop Analytics",
  } as const;
  
  export interface EnrollmentData {
    id: string;
    course: string;
    created_at: string;
    education_level: string;
    work_experience: string;
    designation: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    referrer?: string;
    landing_page_url?: string;
    gclid?: string;
    email: string;
    phone_number: string;
  }
  
  export interface WorkshopData {
    id: string;
    workshop_type: string;
    created_at: string;
    updated_at: string;
    payment_status: "pending" | "completed" | "failed";
    is_free: boolean;
    razorpay_payment_id?: string;
    razorpay_order_id?: string;
    education: string;
    designation: string;
    years_of_experience: string;
    email: string;
    phone: string;
  }
  
  export interface AnalyticsData {
    // General Summary
    totalRegistrations: number;
    registrationsByType: {
      workshop_type: string;
      count: number;
      percentage: number;
    }[];
  
    // Payment Analysis
    paymentStatusDistribution: {
      status: string;
      count: number;
      percentage: number;
    }[];
    freeVsPaidDistribution: {
      type: string;
      count: number;
      percentage: number;
    }[];
    paymentCompletionTime: {
      workshop_type: string;
      averageTimeInHours: number;
    }[];
  
    // Source Analysis
    sourceDistribution: {
      source: string;
      course: string;
      count: number;
      percentage: number;
    }[];
  
    // Time-based Analysis
    timeBasedTrends: {
      period: string;
      registrations: number;
    }[];
    seasonalityPatterns: {
      month: string;
      registrations: number;
    }[];
  }
  
  // Add interface for cached data
  export interface CachedData {
    timestamp: number;
    allData: {
      enrollments: EnrollmentData[];
      workshops: WorkshopData[];
    };
    processedData: {
      [key: string]: {
        courseStats: EnrollmentStats[];
        workshopStats: EnrollmentStats[];
        monthlyStats: MonthlyStats[];
        trendData: TrendData[];
        sourceStats: SourceStats[];
        analyticsData: AnalyticsData;
      };
    };
  }
