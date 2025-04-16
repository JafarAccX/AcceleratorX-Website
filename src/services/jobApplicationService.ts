
import { supabase } from '../lib/supabaseClient';
import { ApplicationStatus, JobApplication } from '../types/job';

// URL validation helper
const isValidUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

export const jobApplicationService = {
    // Submit a new job application
    async submitApplication(application: Omit<JobApplication, 'id' | 'createdAt' | 'updatedAt' | 'status'>) {
        // Validate URLs before submission
        if (!isValidUrl(application.resume_url)) {
            throw new Error('Invalid resume URL. Please provide a valid URL to your resume.');
        }

        if (application.portfolio_url && !isValidUrl(application.portfolio_url)) {
            throw new Error('Invalid portfolio URL. Please provide a valid URL or leave it empty.');
        }

        if (application.linkedin_url && !isValidUrl(application.linkedin_url)) {
            throw new Error('Invalid LinkedIn URL. Please provide a valid URL or leave it empty.');
        }

        if (application.github_url && !isValidUrl(application.github_url)) {
            throw new Error('Invalid GitHub URL. Please provide a valid URL or leave it empty.');
        }

        const { data, error } = await supabase
            .from('job_applications')
            .insert([{
                job_id: application.job_id,
                user_id: application.user_id,  // Use user_id directly from profiles
                full_name: application.full_name,
                email: application.email,
                phone: application.phone,
                resume_url: application.resume_url,
                cover_letter: application.cover_letter,
                portfolio_url: application.portfolio_url,
                linkedin_url: application.linkedin_url,
                github_url: application.github_url,
                experience_years: application.experience_years,
                current_company: application.current_company,
                applicant_role: application.applicant_role,
                expected_salary: application.expected_salary,
                notice_period: application.notice_period,
                additional_notes: application.additional_notes,
                status: 'pending'
            }])
            .select();

        if (error) throw error;
        return data;
    },

    // Get all applications for a specific job (admin only)
    async getApplicationsByJobId(jobId: string) {
        const { data, error } = await supabase
            .from('job_applications')
            .select(`
                *,
                job:jobs(*),
                user:profiles(user_id, email, full_name)
            `)
            .eq('job_id', jobId)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    },

    // Get all applications for the current user
    async getUserApplications(userId: string): Promise<JobApplication[]> {
        const { data, error } = await supabase
            .from('job_applications')
            .select(`
                *,
                job:jobs (
                    id,
                    title,
                    company,
                    location
                )
            `)
            .eq('user_id', userId)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    },

    // Get application statistics for admin dashboard
    async getApplicationStatistics() {
        const { data, error } = await supabase
            .from('job_applications')
            .select(`
                *,
                job:jobs (
                    id,
                    title,
                    company,
                    location
                ),
                profile:profiles (
                    id,
                    name,
                    email,
                    phone
                )
            `)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    },

    // Check if user has already applied to a job
    async hasUserApplied(userId: string, jobId: string): Promise<boolean> {
        if (!userId || !jobId) {
            throw new Error('User ID and Job ID are required');
        }

        const { data, error } = await supabase
            .from('job_applications')
            .select('id')
            .eq('user_id', userId)
            .eq('job_id', jobId);

        if (error) {
            console.error('Error checking application:', error);
            throw error;
        }

        return data !== null && data.length > 0;
    },

    // Update application status (admin only)
    async updateApplicationStatus(applicationId: string, status: ApplicationStatus, notes?: string) {
        const { error } = await supabase
            .from('job_applications')
            .update({
                status,
                interviewer_notes: notes,
                updated_at: new Date().toISOString()
            })
            .eq('id', applicationId);

        if (error) throw error;
    }
};
