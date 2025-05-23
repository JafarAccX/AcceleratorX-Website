import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import customersApi from '../api/customersApi';
import toast from "react-hot-toast";


// Create a new user
export const useCreateUser = () => {
    // const queryClient = useQueryClient();

    return useMutation({
        mutationFn: customersApi.createUser,
        onSuccess: () => {
            // You can invalidate related queries if needed
            console.log("customer created")
        },
    });
};

// Get user by CustId
export const useGetUserByCustId = (custId: string) => {
    return useQuery({
        queryKey: ['user', custId],
        queryFn: () => customersApi.getUserByCustId(custId),
        enabled: !!custId, // Only fetch if custId is provided
    });
};
// Get user by CustId
export const useGetUserByMobile = (number: string) => {
    return useQuery({
        queryKey: ['user', number],
        queryFn: () => customersApi.getUserByMobile(number),
        enabled: number.length === 10, // Only fetch if custId is provided
    });
};

// Update user by CustId
export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: customersApi.updateUser,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['user', data.CustId] });
        },
    });
};

// Delete user by CustId
export const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: customersApi.deleteUser,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['user', variables] });
        },
    });
};

// React Query Hooks for Job Applications

// Apply for a job
export const useApplyForJob = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: customersApi.applyForJob,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['applications', variables.CustId] });
            queryClient.invalidateQueries({ queryKey: ['jobApplications', variables.JobId] });
            queryClient.invalidateQueries({
                queryKey: ['applicationCheck', variables.CustId, variables.JobId]
            });
            toast.success("Application submitted successfully!");

        },
    });
};

// Get application by ID
export const useGetApplicationById = (applicationId: string) => {
    return useQuery({
        queryKey: ['application', applicationId],
        queryFn: () => customersApi.getApplicationById(applicationId),
        enabled: !!applicationId,
    });
};

// Get all applications for a customer
export const useGetCustomerApplications = (custId: string) => {
    return useQuery({
        queryKey: ['applications', custId],
        queryFn: () => customersApi.getCustomerApplications(custId),
        enabled: !!custId,
    });
};

// Get application statistics for a customer
export const useGetCustomerApplicationStats = (custId: string) => {
    return useQuery({
        queryKey: ['applicationStats', custId],
        queryFn: () => customersApi.getCustomerApplicationStats(custId),
        enabled: !!custId,
    });
};

// Check if a customer has applied to a job
export const useCheckJobApplication = (custId: string, jobId: string) => {
    return useQuery({
        queryKey: ['applicationCheck', custId, jobId],
        queryFn: () => customersApi.checkJobApplication({ custId, jobId }),
        enabled: !!custId && !!jobId,
    });
};

// Update application status
export const useUpdateApplicationStatus = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: customersApi.updateApplicationStatus,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['application', data.Id] });
            queryClient.invalidateQueries({ queryKey: ['applications', data.CustId] });
            queryClient.invalidateQueries({ queryKey: ['jobApplications', data.JobId] });
            queryClient.invalidateQueries({ queryKey: ['applicationStats', data.CustId] });
        },
    });
};

// Withdraw application
export const useWithdrawApplication = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: customersApi.withdrawApplication,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['application', variables.applicationId] });
            // We would need customer ID and job ID in the response to invalidate related queries properly
            // For now, we'll invalidate broader queries
            queryClient.invalidateQueries({ queryKey: ['applications'] });
            queryClient.invalidateQueries({ queryKey: ['jobApplications'] });
        },
    });
};
