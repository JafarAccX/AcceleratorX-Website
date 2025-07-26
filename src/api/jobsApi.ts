import axios from 'axios';
import { CreateJobPayload, Job, SearchJobsParams, UpdateJobPayload } from '../types/jobs';
import { api } from '.';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3020/api';


// Jobs API functions
const jobsApi = {
    // Create a new job
    createJob: async (jobData: CreateJobPayload): Promise<Job> => {
        const response = await api.post(`${API_URL}/api/jobs`, jobData);
        return response.data;
    },

    // Get all jobs
    getAllJobs: async (page: number = 1, limit: number = 20): Promise<{
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
        const response = await axios.get(`${API_URL}/api/jobs`, {
            params: {
                page,
                limit
            }
        });
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