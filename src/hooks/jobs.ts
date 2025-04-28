import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import jobsApi from '../api/jobsApi';
import { SearchJobsParams } from '../types/jobs';


// Create a new job
export const useCreateJob = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: jobsApi.createJob,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['jobs'] });
        },
    });
};

// Get all jobs
export const useGetAllJobs = () => {
    return useQuery({
        queryKey: ['jobs'],
        queryFn: jobsApi.getAllJobs,
    });
};

// Get job by ID
export const useGetJobById = (jobId: string) => {
    return useQuery({
        queryKey: ['job', jobId],
        queryFn: () => jobsApi.getJobById(jobId),
        enabled: !!jobId,
    });
};

// Update job by ID
export const useUpdateJob = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: jobsApi.updateJob,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['job', data.Id] });
            queryClient.invalidateQueries({ queryKey: ['jobs'] });
            queryClient.invalidateQueries({ queryKey: ['jobsByCompany', data.CompanyName] });
        },
    });
};

// Delete job by ID (soft delete)
export const useDeleteJob = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: jobsApi.deleteJob,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['job', variables] });
            queryClient.invalidateQueries({ queryKey: ['jobs'] });
        },
    });
};

// Hard delete job by ID
export const useHardDeleteJob = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: jobsApi.hardDeleteJob,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['job', variables] });
            queryClient.invalidateQueries({ queryKey: ['jobs'] });
        },
    });
};

// Get jobs by company name
export const useGetJobsByCompany = (companyName: string) => {
    return useQuery({
        queryKey: ['jobsByCompany', companyName],
        queryFn: () => jobsApi.getJobsByCompany(companyName),
        enabled: !!companyName,
    });
};

// Search jobs
export const useSearchJobs = (params: SearchJobsParams) => {
    const queryParams = { ...params };

    return useQuery({
        queryKey: ['jobsSearch', queryParams],
        queryFn: () => jobsApi.searchJobs(queryParams),
        enabled: !!(queryParams.query || queryParams.location || queryParams.jobType),
    });
};

// Get all applications for a job
export const useGetJobApplications = (jobId: string) => {
    return useQuery({
        queryKey: ['jobApplications', jobId],
        queryFn: () => jobsApi.getJobApplications(jobId),
        enabled: !!jobId,
    });
};