import axios from 'axios';
import { ApplicationStats, ApplyForJobPayload, CreateCustomerPayload, Customer, JobApplication, UpdateApplicationStatusPayload, UpdateCustomerPayload, WithdrawApplicationPayload } from "../types/customer"

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3020/api';


const customersApi = {
    // Create a new user
    createUser: async (userData: CreateCustomerPayload): Promise<Customer> => {
        const response = await axios.post(`${API_URL}/user`, userData);
        return response.data;
    },

    // Get user by CustId
    getUserByCustId: async (custId: string): Promise<Customer> => {
        const response = await axios.get(`${API_URL}/user/${custId}`);
        return response.data;
    },


    // Get user by Mobile
    getUserByMobile: async (number: string): Promise<Customer> => {
        const response = await axios.get(`${API_URL}/user/signup/${number}`);
        return response.data;
    },

    // Update user by CustId
    updateUser: async ({ custId, userData }: { custId: string; userData: UpdateCustomerPayload }): Promise<Customer> => {
        const response = await axios.put(`${API_URL}/user/${custId}`, userData);
        return response.data;
    },

    // Delete user by CustId
    deleteUser: async (custId: string): Promise<{ message: string }> => {
        const response = await axios.delete(`${API_URL}/user/${custId}`);
        return response.data;
    },

    // Apply for a job
    applyForJob: async (applicationData: ApplyForJobPayload): Promise<JobApplication> => {
        const response = await axios.post(`${API_URL}/applications`, applicationData);
        return response.data;
    },

    // Get application by ID
    getApplicationById: async (applicationId: string): Promise<JobApplication> => {
        const response = await axios.get(`${API_URL}/applications/${applicationId}`);
        return response.data;
    },

    // Get all applications for a customer
    getCustomerApplications: async (custId: string): Promise<JobApplication[]> => {
        const response = await axios.get(`${API_URL}/applications/customer/${custId}`);
        return response.data;
    },

    // Get application statistics for a customer
    getCustomerApplicationStats: async (custId: string): Promise<ApplicationStats> => {
        const response = await axios.get(`${API_URL}/applications/customer/${custId}/stats`);
        return response.data;
    },

    // Check if a customer has applied to a job
    checkJobApplication: async ({ custId, jobId }: { custId: string; jobId: string }): Promise<{
        hasApplied: boolean;
        status: string | null;
        applicationId: string | null;
    }> => {
        const response = await axios.get(`${API_URL}/applications/check/${custId}/${jobId}`);
        return response.data;
    },

    // Update application status
    updateApplicationStatus: async ({
        applicationId,
        statusData,
    }: {
        applicationId: string;
        statusData: UpdateApplicationStatusPayload;
    }): Promise<JobApplication> => {
        const response = await axios.put(`${API_URL}/applications/${applicationId}/status`, statusData);
        return response.data;
    },

    // Withdraw application
    withdrawApplication: async ({
        applicationId,
        withdrawData,
    }: {
        applicationId: string;
        withdrawData: WithdrawApplicationPayload;
    }): Promise<{ message: string }> => {
        const response = await axios.put(`${API_URL}/applications/${applicationId}/withdraw`, withdrawData);
        return response.data;
    },
};

export default customersApi;
