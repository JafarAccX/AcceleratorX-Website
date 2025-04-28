import axios from 'axios';
import { CreateJobPayload, Job, SearchJobsParams, UpdateJobPayload } from '../types/jobs';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3020/api';


// Jobs API functions
const jobsApi = {
    // Create a new job
    createJob: async (jobData: CreateJobPayload): Promise<Job> => {
        const response = await axios.post(`${API_URL}/jobs`, jobData);
        return response.data;
    },

    // Get all jobs
    getAllJobs: async (): Promise<Job[]> => {
        const response = await axios.get(`${API_URL}/jobs`);
        return response.data;
    },

    // Get job by ID
    getJobById: async (jobId: string): Promise<Job> => {
        const response = await axios.get(`${API_URL}/jobs/${jobId}`);
        return response.data;
    },

    // Update job by ID
    updateJob: async ({ jobId, jobData }: { jobId: string; jobData: UpdateJobPayload }): Promise<Job> => {
        const response = await axios.put(`${API_URL}/jobs/${jobId}`, jobData);
        return response.data;
    },

    // Delete job by ID (soft delete)
    deleteJob: async (jobId: string): Promise<{ message: string }> => {
        const response = await axios.delete(`${API_URL}/jobs/${jobId}`);
        return response.data;
    },

    // Hard delete job by ID
    hardDeleteJob: async (jobId: string): Promise<{ message: string }> => {
        const response = await axios.delete(`${API_URL}/jobs/${jobId}/hard`);
        return response.data;
    },

    // Get jobs by company name
    getJobsByCompany: async (companyName: string): Promise<Job[]> => {
        const response = await axios.get(`${API_URL}/jobs/company/${companyName}`);
        return response.data;
    },

    // Search jobs
    searchJobs: async (params: SearchJobsParams): Promise<Job[]> => {
        const response = await axios.get(`${API_URL}/jobs/search`, { params });
        return response.data;
    },

    // Get all applications for a job
    getJobApplications: async (jobId: string): Promise<any[]> => {
        const response = await axios.get(`${API_URL}/applications/job/${jobId}`);
        return response.data;
    },
};

export default jobsApi