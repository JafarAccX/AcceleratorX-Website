import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { authService } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { RefreshCw, Download, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const ITEMS_PER_PAGE = 10;

type SortOrder = 'asc' | 'desc';

interface EnrollmentData {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  education_level: string;
  course: string;
  created_at: string;
  work_experience: string;
  designation: string;
}

interface LeadData {
  id: string;
  name: string;
  email: string;
  phone: string;
  education: string;
  course: string;
  city?: string;
  state?: string;
  ip_address?: string;
  ip_state?: string;
  ip_postal?: string;
  ip_city?: string;
  en: string;                    // Event name
  form_destination: string;      // Form submission URL
  form_length: number;          // Number of fields in the form
  event_time: number;           // Event time in milliseconds
  tfd: number;                  // Time from document load
  dl: string;                   // Current page URL
  dr: string;                   // Referrer URL
  cid: string;                  // Client ID
  ul: string;                   // User language
  seg: string;                  // Segment indicator
  sr: string;                   // Screen resolution
  uap: string;                  // Platform (Operating System)
  uafvl: string;               // User Agent Full Version List
  tag_exp: string;             // Tag Experiment IDs
  eu: string;                  // EU compliance indicator
  are: string;                 // Active Resource Engagement
  pae: string;                 // Passive Active Engagement
  npa: string;                 // Non-Personalized Ads indicator
  traffic_source?: string;
  created_at: string;
  fbclid?: string;
  gclid?: string;
  ttclid?: string;
  msclkid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  postal_code?: string;
  country?: string;
  latitude?: string;
  longitude?: string;
  browser_language?: string;
  screen_resolution?: string;
  platform?: string;
  user_agent?: string;
}

const AdminPage: React.FC = () => {
  const [enrollments, setEnrollments] = useState<EnrollmentData[]>([]);
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLeadsPage, setCurrentLeadsPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [activeTab, setActiveTab] = useState<'enrollments' | 'leads'>('leads');
  const navigate = useNavigate();
  const userRole = authService.getRole();

  useEffect(() => {
    if (userRole === 'enrollment') {
      setActiveTab('enrollments');
    }
  }, [userRole]);

  const sortData = (data: EnrollmentData[]) => {
    return [...data].sort((a, b) => {
      const multiplier = sortOrder === 'asc' ? 1 : -1;
      return multiplier * (new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    });
  };

  const handleSort = () => {
    setSortOrder(current => current === 'asc' ? 'desc' : 'asc');
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(enrollments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const sortedEnrollments = sortData(enrollments);
  const currentEnrollments = sortedEnrollments.slice(startIndex, endIndex);

  const totalLeadsPages = Math.ceil(leads.length / ITEMS_PER_PAGE);
  const leadsStartIndex = (currentLeadsPage - 1) * ITEMS_PER_PAGE;
  const leadsEndIndex = leadsStartIndex + ITEMS_PER_PAGE;
  const sortedLeads = [...leads].sort((a, b) => {
    const multiplier = sortOrder === 'asc' ? 1 : -1;
    return multiplier * (new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
  });
  const currentLeads = sortedLeads.slice(leadsStartIndex, leadsEndIndex);

  const fetchEnrollments = async () => {
    try {
      setRefreshing(true);
      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setEnrollments(data || []);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
      toast.error('Failed to fetch enrollment data');
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch enrollments
        const { data: enrollmentData, error: enrollmentError } = await supabase
          .from('enrollments')
          .select('*');

        if (enrollmentError) throw enrollmentError;

        // Fetch leads
        const { data: leadsData, error: leadsError } = await supabase
          .from('leads')
          .select('*');

        if (leadsError) throw leadsError;
        setLeads(leadsData || []);

        // Cross-verify enrollment data with leads
        const verifiedEnrollments = enrollmentData?.filter(enrollment => {
          return leadsData?.some(lead => 
            lead.email.toLowerCase() === enrollment.email.toLowerCase() &&
            lead.phone === enrollment.phone_number &&
            lead.name.toLowerCase() === enrollment.full_name.toLowerCase()
          );
        }) || [];

        setEnrollments(verifiedEnrollments);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownloadCSV = () => {
    try {
      const headers = ['S.No', 'Full Name', 'Email', 'Phone Number', 'Education Level', 'Course', 'Work Experience', 'Designation', 'Date'];
      const csvContent = [
        headers.join(','),
        ...sortedEnrollments.map((enrollment, index) => [
          index + 1,
          enrollment.full_name,
          enrollment.email,
          enrollment.phone_number,
          enrollment.education_level,
          enrollment.course,
          enrollment.work_experience,
          enrollment.designation,
          new Date(enrollment.created_at).toLocaleDateString()
        ].join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `enrollments_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('CSV downloaded successfully');
    } catch (error) {
      console.error('Error downloading CSV:', error);
      toast.error('Failed to download CSV');
    }
  };

  const handleDownloadLeadsCSV = () => {
    try {
      const headers = [
        'S.No',
        'Name',
        'Email',
        'Phone',
        'Education',
        'Course',
        'IP Address',
        'City',
        'State',
        'Postal Code',
        'Country',
        'Latitude',
        'Longitude',
        'Facebook Click ID',
        'Google Click ID',
        'TikTok Click ID',
        'Microsoft Click ID',
        'UTM Source',
        'UTM Medium',
        'UTM Campaign',
        'UTM Term',
        'UTM Content',
        'Referrer',
        'Full URL',
        'Browser Language',
        'Screen Resolution',
        'Platform',
        'User Agent',
        'Created At'
      ];
      
      const csvContent = [
        headers.join(','),
        ...sortedLeads.map((lead, index) => [
          index + 1,
          lead.name,
          lead.email,
          lead.phone,
          lead.education,
          lead.course,
          lead.ip_address,
          lead.city,
          lead.state,
          lead.postal_code,
          lead.country,
          lead.latitude,
          lead.longitude,
          lead.fbclid,
          lead.gclid,
          lead.ttclid,
          lead.msclkid,
          lead.utm_source,
          lead.utm_medium,
          lead.utm_campaign,
          lead.utm_term,
          lead.utm_content,
          lead.referrer,
          lead.full_url,
          lead.browser_language,
          lead.screen_resolution,
          lead.platform,
          lead.user_agent,
          new Date(lead.created_at).toLocaleString()
        ].map(field => `"${field || ''}"`).join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `leads_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('Leads CSV downloaded successfully');
    } catch (error) {
      console.error('Error downloading leads CSV:', error);
      toast.error('Failed to download leads CSV');
    }
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
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Lead Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">
              View and manage all enrollment submissions
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={fetchEnrollments}
              disabled={refreshing}
              className={`flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors ${
                refreshing ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button
              onClick={() => {
                authService.logout();
                navigate('/login');
              }}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {userRole !== 'enrollment' && (
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                <button
                  onClick={() => setActiveTab('enrollments')}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === 'enrollments'
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Enrollments
                </button>
                <button
                  onClick={() => setActiveTab('leads')}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === 'leads'
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Leads
                </button>
              </nav>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {(activeTab === 'enrollments' || userRole === 'enrollment') ? (
                <>
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={handleDownloadCSV}
                      className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      Download CSV
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            S.No
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Full Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phone Number
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Education Level
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Work Experience
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Designation
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                            <button
                              onClick={handleSort}
                              className="ml-1 p-1 rounded hover:bg-gray-200 transition-colors inline-flex items-center"
                            >
                              <ArrowUpDown className="h-4 w-4 text-blue-500" />
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {currentEnrollments.map((enrollment, index) => (
                          <tr key={enrollment.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{startIndex + index + 1}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{enrollment.full_name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{enrollment.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{enrollment.phone_number}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{enrollment.education_level}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{enrollment.course}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{enrollment.work_experience}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{enrollment.designation}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {new Date(enrollment.created_at).toLocaleDateString()}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {totalPages > 1 && (
                    <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className={`p-2 rounded-lg hover:bg-gray-100 ${
                            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <span className="text-sm text-gray-700">
                          Page {currentPage} of {totalPages}
                        </span>
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className={`p-2 rounded-lg hover:bg-gray-100 ${
                            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="text-sm text-gray-500">
                        Showing {startIndex + 1} to {Math.min(endIndex, enrollments.length)} of {enrollments.length} entries
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="overflow-x-auto">
                  <div className="flex justify-between p-4">
                    <div className="text-sm text-gray-500">
                      Showing detailed lead information including tracking and location data
                    </div>
                    <button
                      onClick={handleDownloadLeadsCSV}
                      className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      Download Leads CSV
                    </button>
                  </div>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Basic Info
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course Details
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Traffic Source
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          UTM Data
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Technical Info
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                          Date
                          <button
                            onClick={handleSort}
                            className="ml-1 p-1 rounded hover:bg-gray-200 transition-colors inline-flex items-center"
                          >
                            <ArrowUpDown className="h-4 w-4 text-blue-500" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentLeads.map((lead, index) => (
                        <tr key={lead.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{leadsStartIndex + index + 1}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm">
                              <p className="font-medium text-gray-900">{lead.name}</p>
                              <p className="text-gray-500">{lead.email}</p>
                              <p className="text-gray-500">{lead.phone}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm">
                              <p className="text-gray-900">{lead.course}</p>
                              <p className="text-gray-500">{lead.education}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm">
                              <p className="text-gray-900">{[lead.city, lead.state].filter(Boolean).join(', ')}</p>
                              <p className="text-gray-500">{lead.country} {lead.postal_code}</p>
                              <p className="text-gray-500 text-xs">IP: {lead.ip_address}</p>
                              <p className="text-gray-500 text-xs">
                                {lead.latitude && lead.longitude ? `${lead.latitude}, ${lead.longitude}` : ''}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm">
                              <p className="text-gray-900">{lead.referrer || 'Direct'}</p>
                              {lead.fbclid && <p className="text-gray-500 text-xs">FB: {lead.fbclid}</p>}
                              {lead.gclid && <p className="text-gray-500 text-xs">Google: {lead.gclid}</p>}
                              {lead.ttclid && <p className="text-gray-500 text-xs">TikTok: {lead.ttclid}</p>}
                              {lead.msclkid && <p className="text-gray-500 text-xs">MS: {lead.msclkid}</p>}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm">
                              {lead.utm_source && (
                                <p className="text-gray-900">
                                  {lead.utm_source}/{lead.utm_medium}
                                </p>
                              )}
                              {lead.utm_campaign && (
                                <p className="text-gray-500 text-xs">
                                  Campaign: {lead.utm_campaign}
                                </p>
                              )}
                              {lead.utm_term && (
                                <p className="text-gray-500 text-xs">
                                  Term: {lead.utm_term}
                                </p>
                              )}
                              {lead.utm_content && (
                                <p className="text-gray-500 text-xs">
                                  Content: {lead.utm_content}
                                </p>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm">
                              <p className="text-gray-900">{lead.platform}</p>
                              <p className="text-gray-500 text-xs">{lead.browser_language}</p>
                              <p className="text-gray-500 text-xs">{lead.screen_resolution}</p>
                              <p className="text-gray-500 text-xs truncate max-w-xs" title={lead.user_agent}>
                                {lead.user_agent}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {new Date(lead.created_at).toLocaleDateString()}
                            </div>
                            <div className="text-xs text-gray-500">
                              {new Date(lead.created_at).toLocaleTimeString()}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {totalLeadsPages > 1 && (
                    <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setCurrentLeadsPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentLeadsPage === 1}
                          className={`p-2 rounded-lg hover:bg-gray-100 ${
                            currentLeadsPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <span className="text-sm text-gray-700">
                          Page {currentLeadsPage} of {totalLeadsPages}
                        </span>
                        <button
                          onClick={() => setCurrentLeadsPage(prev => Math.min(prev + 1, totalLeadsPages))}
                          disabled={currentLeadsPage === totalLeadsPages}
                          className={`p-2 rounded-lg hover:bg-gray-100 ${
                            currentLeadsPage === totalLeadsPages ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="text-sm text-gray-500">
                        Showing {leadsStartIndex + 1} to {Math.min(leadsEndIndex, leads.length)} of {leads.length} entries
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AdminPage;
