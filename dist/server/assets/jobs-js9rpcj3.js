import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { a as api } from "../entry-server.js";
const API_URL = "https://api.acceleratorx.org";
const jobsApi = {
  // Create a new job
  createJob: async (jobData) => {
    const response = await api.post(`${API_URL}/api/jobs`, jobData);
    return response.data;
  },
  // Get all jobs
  getAllJobs: async (page = 1, limit = 20) => {
    const response = await axios.get(`${API_URL}/api/jobs`, {
      params: {
        page,
        limit
      }
    });
    return response.data;
  },
  // Get job by ID
  getJobById: async (jobId) => {
    const response = await axios.get(`${API_URL}/api/jobs/${jobId}`);
    return response.data;
  },
  // Update job by ID
  updateJob: async ({ jobId, jobData }) => {
    const response = await api.put(`${API_URL}/api/jobs/${jobId}`, jobData);
    return response.data;
  },
  // Delete job by ID (soft delete)
  deleteJob: async (jobId) => {
    const response = await api.delete(`${API_URL}/api/jobs/${jobId}`);
    return response.data;
  },
  // Hard delete job by ID
  hardDeleteJob: async (jobId) => {
    const response = await api.delete(`${API_URL}/api/jobs/${jobId}/hard`);
    return response.data;
  },
  // Get jobs by company name
  getJobsByCompany: async (companyName) => {
    const response = await axios.get(`${API_URL}/api/jobs/company/${companyName}`);
    return response.data;
  },
  // Search jobs
  searchJobs: async (params) => {
    const response = await axios.get(`${API_URL}/api/jobs/search`, { params });
    return response.data;
  },
  // Get all applications for a job
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getJobApplications: async (jobId) => {
    const response = await axios.get(`${API_URL}/applications/job/${jobId}`);
    return response.data;
  }
};
const useGetAllJobs = (page = 1, limit = 20) => {
  return useQuery({
    queryKey: ["jobs", page, limit],
    queryFn: () => jobsApi.getAllJobs(page, limit)
  });
};
const useGetJobById = (jobId) => {
  return useQuery({
    queryKey: ["job", jobId],
    queryFn: () => jobsApi.getJobById(jobId),
    enabled: !!jobId
  });
};
export {
  useGetAllJobs as a,
  useGetJobById as u
};
