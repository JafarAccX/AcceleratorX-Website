import axios from 'axios';
import { CreateJobPayload, Job, SearchJobsParams, UpdateJobPayload } from '../types/jobs';
import { api } from '.';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://api.acceleratorx.org/api';


// Jobs API functions
const jobsApi = {
    // Create a new job
    createJob: async (jobData: CreateJobPayload): Promise<Job> => {
        const response = await api.post(`${API_URL}/api/jobs`, jobData);
        return response.data;
    },

    // Get all jobs with filters
    getAllJobs: async (page: number = 1, limit: number = 20, filters?: {
        searchTerm?: string;
        companyName?: string;
        jobType?: string;
        location?: string;
        category?: string;
        experience?: string;
        salaryRange?: string;
        skills?: string;
    }): Promise<{
        jobs: Job[];
        pagination: {
            currentPage: number;
            totalPages: number;
            totalJobs: number;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            jobsPerPage: number;
        };
    }> => {
        const params: any = { page, limit };

        // Add filters to params if they exist
        if (filters) {
            if (filters.searchTerm) params.searchTerm = filters.searchTerm;
            if (filters.companyName) params.companyName = filters.companyName;
            if (filters.jobType) params.jobType = filters.jobType;
            if (filters.location) params.location = filters.location;
            if (filters.category) params.category = filters.category;
            if (filters.experience) params.experience = filters.experience;
            if (filters.salaryRange) params.salaryRange = filters.salaryRange;
            if (filters.skills) params.skills = filters.skills;
        }

        const response = await axios.get(`${API_URL}/api/jobs`, { params });
        return response.data;
    },

    // Get job by ID
    getJobById: async (jobId: string): Promise<Job> => {
        const response = await axios.get(`${API_URL}/api/jobs/${jobId}`);
        return response.data;
    },

    // Update job by ID
    updateJob: async ({ jobId, jobData }: { jobId: string; jobData: UpdateJobPayload }): Promise<Job> => {
        const response = await api.put(`${API_URL}/api/jobs/${jobId}`, jobData);
        return response.data;
    },

    // Delete job by ID (soft delete)
    deleteJob: async (jobId: string): Promise<{ message: string }> => {
        const response = await api.delete(`${API_URL}/api/jobs/${jobId}`);
        return response.data;
    },

    // Hard delete job by ID
    hardDeleteJob: async (jobId: string): Promise<{ message: string }> => {
        const response = await api.delete(`${API_URL}/api/jobs/${jobId}/hard`);
        return response.data;
    },

    // Get jobs by company name
    getJobsByCompany: async (companyName: string): Promise<Job[]> => {
        const response = await axios.get(`${API_URL}/api/jobs/company/${companyName}`);
        return response.data;
    },

    // Search jobs
    searchJobs: async (params: SearchJobsParams): Promise<Job[]> => {
        const response = await axios.get(`${API_URL}/api/jobs/search`, { params });
        return response.data;
    },

    // Get all applications for a job
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getJobApplications: async (jobId: string): Promise<any[]> => {
        const response = await axios.get(`${API_URL}/applications/job/${jobId}`);
        return response.data;
    },
};

export default jobsApi