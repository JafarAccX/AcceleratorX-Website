import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { a as api } from "../entry-server.js";
import toast from "react-hot-toast";
const API_URL = "https://api.acceleratorx.org";
const customersApi = {
  // Create a new user
  createUser: async (userData) => {
    const response = await axios.post(`${API_URL}/api/user`, userData);
    return response.data;
  },
  // Get user by CustId
  getUserByCustId: async (custId) => {
    const response = await api.get(`${API_URL}/api/user/${custId}`);
    return response.data;
  },
  // Get user by Mobile
  getUserByMobile: async (number) => {
    const response = await api.get(`${API_URL}/api/user/signup/${number}`);
    return response.data;
  },
  // Update user by CustId
  updateUser: async ({ custId, userData }) => {
    const response = await api.put(`${API_URL}/api/user/${custId}`, userData);
    return response.data;
  },
  // Delete user by CustId
  deleteUser: async (custId) => {
    const response = await api.delete(`${API_URL}/api/user/${custId}`);
    return response.data;
  },
  // Apply for a job
  applyForJob: async (applicationData) => {
    const response = await api.post(`${API_URL}/api/applications`, applicationData);
    return response.data;
  },
  // Get application by ID
  getApplicationById: async (applicationId) => {
    const response = await api.get(`${API_URL}/api/applications/${applicationId}`);
    return response.data;
  },
  // Get all applications for a customer
  getCustomerApplications: async (custId) => {
    const response = await api.get(`${API_URL}/api/applications/customer/${custId}`);
    return response.data;
  },
  // Get application statistics for a customer
  getCustomerApplicationStats: async (custId) => {
    const response = await api.get(`${API_URL}/api/applications/customer/${custId}/stats`);
    return response.data;
  },
  // Check if a customer has applied to a job
  checkJobApplication: async ({ custId, jobId }) => {
    const response = await api.get(`${API_URL}/api/applications/check/${custId}/${jobId}`);
    return response.data;
  },
  // Update application status
  updateApplicationStatus: async ({
    applicationId,
    statusData
  }) => {
    const response = await api.put(`${API_URL}/api/applications/${applicationId}/status`, statusData);
    return response.data;
  },
  // Withdraw application
  withdrawApplication: async ({
    applicationId,
    withdrawData
  }) => {
    const response = await api.put(`${API_URL}/api/applications/${applicationId}/withdraw`, withdrawData);
    return response.data;
  }
};
const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: customersApi.updateUser,
    onSuccess: (data) => {
      toast.success("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["user", data.CustId] });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Failed to update profile. Please try again."
      );
    }
  });
};
const useApplyForJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: customersApi.applyForJob,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["applications", variables.CustId] });
      queryClient.invalidateQueries({ queryKey: ["jobApplications", variables.JobId] });
      queryClient.invalidateQueries({
        queryKey: ["applicationCheck", variables.CustId, variables.JobId]
      });
      toast.success("Application submitted successfully!");
    }
  });
};
const useGetCustomerApplications = (custId) => {
  return useQuery({
    queryKey: ["applications", custId],
    queryFn: () => customersApi.getCustomerApplications(custId),
    enabled: !!custId
  });
};
export {
  useGetCustomerApplications as a,
  useUpdateUser as b,
  useApplyForJob as u
};
