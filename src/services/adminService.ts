import { supabase } from '../lib/supabaseClient';

export interface EnrollmentData {
  id: number;
  full_name: string;
  phone_number: string;
  email: string;
  education_level: string;
  created_at: string;
  course: string;
  work_experience: string;
  designation: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
}

export interface HiringQueryData {
  id: number;
  created_at: string;
  name: string;
  email: string;
  years_of_experience: string;
  last_role: string;
  last_company: string;
  linkedin_url: string;
  cv_link: string;
  applying_role: string;
  mobile_no: string;
}

export interface EnquiryData {
  id: number;
  full_name: string;
  email: string;
  company_name: string;
  company_domain: string;
  project_details: string;
  created_at: string;
}

export interface WorkshopRegistrationData {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  education: string;
  designation: string;
  years_of_experience: string;
  workshop_type: 'DAWorkshop' | 'PMWorkshop' | 'GENAIWorkshop';
}

export interface AdSpendData {
  id: number;
  date: string;
  course: string;
  ad_spend: number;
  created_at: string;
}

export interface CoursePerformanceData {
  course: string;
  total_enrollments: number;
  unique_leads: number;
  total_spend: number;
  lifetime_cpl: number;
  unique_sources: number;
  traffic_sources: string[];
}

export interface MonthlyCPLData {
  month: string;
  course: string;
  total_ad_spend: number;
  total_leads: number;
  average_cpl: number;
}

export const adminService = {
  getEnrollments: async (limit = 1000) => {
    const { data, error } = await supabase
      .from('enrollments')
      .select('*')
      .limit(limit)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as EnrollmentData[];
  },

  getHiringQueries: async (limit = 1000) => {
    const { data, error } = await supabase
      .from('job_applications')
      .select('*')
      .limit(limit)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as HiringQueryData[];
  },

  getEnquiries: async (limit = 1000) => {
    const { data, error } = await supabase
      .from('enquiries')
      .select('*')
      .limit(limit)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as EnquiryData[];
  },

  getWorkshopRegistrations: async (limit = 1000) => {
    const { data, error } = await supabase
      .from('workshop_registrations')
      .select('*')
      .limit(limit)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as WorkshopRegistrationData[];
  },

  getAdSpends: async (limit = 1000) => {
    const { data, error } = await supabase
      .from('ad_spends')
      .select('*')
      .limit(limit)
      .order('date', { ascending: false });

    if (error) throw error;
    return data as AdSpendData[];
  },

  getCoursePerformance: async () => {
    const { data, error } = await supabase
      .from('course_performance')
      .select('*');

    if (error) throw error;
    return data as CoursePerformanceData[];
  },

  getMonthlyCPL: async () => {
    const { data, error } = await supabase
      .from('monthly_cpl')
      .select('*')
      .order('month', { ascending: false });

    if (error) throw error;
    return data as MonthlyCPLData[];
  },

  getDashboardStats: async () => {
    try {
      // Get today's date at midnight for accurate daily counts
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const [
        { data: jobApplications, error: jobError },
        { data: enrollments, error: enrollError },
        { data: workshops, error: workshopError },
        { data: adSpends, error: adError },
        { data: scholarships, error: scholarshipError },
        { data: todayEnrollments, error: todayEnrollError },
        { data: todayWorkshops, error: todayWorkshopError }
      ] = await Promise.all([
        supabase.from('job_applications').select('id'),
        supabase.from('enrollments').select('id'),
        supabase.from('workshop_registrations').select('id'),
        supabase.from('ad_spends').select('ad_spend'),
        supabase.from('scholarship_applications').select('id'),
        // Get today's enrollments
        supabase
          .from('enrollments')
          .select('id')
          .gte('created_at', today.toISOString()),
        // Get today's workshop registrations
        supabase
          .from('workshop_registrations')
          .select('id')
          .gte('created_at', today.toISOString())
      ]);

      if (jobError || enrollError || workshopError || adError || scholarshipError || 
          todayEnrollError || todayWorkshopError) {
        throw new Error('Error fetching dashboard stats');
      }

      // Calculate totals
      const totalJobApplications = jobApplications?.length || 0;
      const totalEnrollments = enrollments?.length || 0;
      const totalWorkshops = workshops?.length || 0;
      const totalAdSpend = adSpends?.reduce((sum, record) => sum + (record.ad_spend || 0), 0) || 0;
      const totalScholarships = scholarships?.length || 0;
      
      // Calculate today's submissions
      const todayTotalEnrollments = todayEnrollments?.length || 0;
      const todayTotalWorkshops = todayWorkshops?.length || 0;

      // Get last month's data for comparison
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      const [
        { data: lastMonthJobs },
        { data: lastMonthEnrollments },
        { data: lastMonthWorkshops },
        { data: lastMonthAdSpends },
        { data: lastMonthScholarships }
      ] = await Promise.all([
        supabase
          .from('job_applications')
          .select('id')
          .lt('created_at', lastMonth.toISOString()),
        supabase
          .from('enrollments')
          .select('id')
          .lt('created_at', lastMonth.toISOString()),
        supabase
          .from('workshop_registrations')
          .select('id')
          .lt('created_at', lastMonth.toISOString()),
        supabase
          .from('ad_spends')
          .select('ad_spend')
          .lt('date', lastMonth.toISOString()),
        supabase
          .from('scholarship_applications')
          .select('id')
          .lt('created_at', lastMonth.toISOString())
      ]);

      // Calculate last month totals
      const lastMonthTotalJobs = lastMonthJobs?.length || 0;
      const lastMonthTotalEnrollments = lastMonthEnrollments?.length || 0;
      const lastMonthTotalWorkshops = lastMonthWorkshops?.length || 0;
      const lastMonthTotalAdSpend = lastMonthAdSpends?.reduce((sum, record) => sum + (record.ad_spend || 0), 0) || 0;
      const lastMonthTotalScholarships = lastMonthScholarships?.length || 0;

      // Calculate percentage changes
      const calculateChange = (current: number, previous: number) => {
        if (!previous) return 0;
        return Math.round(((current - previous) / previous) * 100);
      };

      // Calculate CPL (Cost Per Lead)
      const totalLeads = totalEnrollments + totalWorkshops;
      const averageCPL = totalLeads > 0 ? totalAdSpend / totalLeads : 0;
      const lastMonthTotalLeads = lastMonthTotalEnrollments + lastMonthTotalWorkshops;
      const lastMonthAverageCPL = lastMonthTotalLeads > 0 ? lastMonthTotalAdSpend / lastMonthTotalLeads : 0;

      return {
        totalJobApplications,
        totalEnrollments,
        totalWorkshopRegistrations: totalWorkshops,
        totalAdSpend,
        averageCPL,
        totalScholarships,
        todayEnrollments: todayTotalEnrollments,
        todayWorkshops: todayTotalWorkshops,
        jobApplicationsChange: calculateChange(totalJobApplications, lastMonthTotalJobs),
        enrollmentsChange: calculateChange(totalEnrollments, lastMonthTotalEnrollments),
        workshopsChange: calculateChange(totalWorkshops, lastMonthTotalWorkshops),
        adSpendChange: calculateChange(totalAdSpend, lastMonthTotalAdSpend),
        cplChange: calculateChange(averageCPL, lastMonthAverageCPL),
        scholarshipsChange: calculateChange(totalScholarships, lastMonthTotalScholarships)
      };
    } catch (error) {
      console.error('Error in getDashboardStats:', error);
      throw error;
    }
  },

  getRecentActivity: async (limit = 10) => {
    try {
      const [
        { data: recentEnrollments, error: enrollError },
        { data: recentWorkshops, error: workshopError }
      ] = await Promise.all([
        supabase
          .from('enrollments')
          .select('id, full_name, course, education_level, created_at')
          .order('created_at', { ascending: false })
          .limit(limit),
        supabase
          .from('workshop_registrations')
          .select('id, name, education, created_at')
          .order('created_at', { ascending: false })
          .limit(limit)
      ]);

      if (enrollError || workshopError) {
        throw new Error('Error fetching recent activity');
      }

      const activities = [
        ...(recentEnrollments || []).map(enrollment => ({
          id: enrollment.id,
          type: 'enrollment',
          title: 'Course Enrollment',
          user: enrollment.full_name,
          time: new Date(enrollment.created_at),
          details: `${enrollment.course} - ${enrollment.education_level}`
        })),
        ...(recentWorkshops || []).map(workshop => ({
          id: workshop.id,
          type: 'workshop',
          title: 'Workshop Registration',
          user: workshop.name,
          time: new Date(workshop.created_at),
          details: `Education: ${workshop.education}`
        }))
      ]
      .sort((a, b) => b.time.getTime() - a.time.getTime())
      .slice(0, limit);

      return activities;
    } catch (error) {
      console.error('Error in getRecentActivity:', error);
      throw error;
    }
  }
};
