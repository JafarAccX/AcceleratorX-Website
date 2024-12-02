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
  created_at: string;
  traffic_source?: string;
}

const AdminPage: React.FC = () => {
  const [enrollments, setEnrollments] = useState<EnrollmentData[]>([]);
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLeadsPage, setCurrentLeadsPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [activeTab, setActiveTab] = useState<'enrollments' | 'leads'>('enrollments');
  const navigate = useNavigate();

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
        setEnrollments(enrollmentData || []);

        // Fetch leads
        const { data: leadsData, error: leadsError } = await supabase
          .from('leads')
          .select('*');

        if (leadsError) throw leadsError;
        setLeads(leadsData || []);
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
      const headers = ['S.No', 'Full Name', 'Email', 'Phone Number', 'Education Level', 'Course', 'Date'];
      const csvContent = [
        headers.join(','),
        ...sortedEnrollments.map((enrollment, index) => [
          index + 1,
          enrollment.full_name,
          enrollment.email,
          enrollment.phone_number,
          enrollment.education_level,
          enrollment.course,
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
            <h1 className="text-3xl font-bold text-gray-900">Enrollment Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">
              View and manage all enrollment submissions ({enrollments.length} total)
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
              onClick={handleDownloadCSV}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download CSV
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

        <div className="mb-6">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab('enrollments')}
              className={`px-4 py-2 rounded ${
                activeTab === 'enrollments'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Enrollments
            </button>
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2 rounded ${
                activeTab === 'leads'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Leads
            </button>
          </div>
        </div>

        {activeTab === 'enrollments' ? (
          <>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        S.No
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Education
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Course
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
            </div>
          </>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        S.No
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Course
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        IP Address
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        IP Location
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Source
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={handleSort}>
                        Date <ArrowUpDown className="inline h-4 w-4" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentLeads.map((lead, index) => (
                      <tr key={lead.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {leadsStartIndex + index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.course}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {lead.ip_address || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {lead.ip_city && lead.ip_state && lead.ip_postal 
                            ? `${lead.ip_city}, ${lead.ip_state} ${lead.ip_postal}`
                            : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.traffic_source || 'Direct'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={() => setCurrentLeadsPage(p => Math.max(1, p - 1))}
                disabled={currentLeadsPage === 1}
                className="flex items-center px-4 py-2 border rounded-md text-sm disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </button>
              <span className="text-sm text-gray-700">
                Page {currentLeadsPage} of {totalLeadsPages}
              </span>
              <button
                onClick={() => setCurrentLeadsPage(p => Math.min(totalLeadsPages, p + 1))}
                disabled={currentLeadsPage === totalLeadsPages}
                className="flex items-center px-4 py-2 border rounded-md text-sm disabled:opacity-50"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default AdminPage;
