import { supabase } from "../lib/supabaseClient";



const isDevelopment = process.env.NODE_ENV === 'development';

export const jobService = {
    // Get all jobs with optional filters
    async getJobs(filters?: {
        category?: string;
        jobType?: string;
        experienceLevel?: string;
        company?: string;
    }) {
        let query = supabase
            .from('jobs')
            .select('*')
            .eq('is_active', true)
            .order('created_at', { ascending: false });

        if (filters?.category) {
            query = query.eq('category', filters.category);
        }
        if (filters?.jobType) {
            query = query.eq('job_type', filters.jobType);
        }
        if (filters?.experienceLevel) {
            query = query.eq('experience_level', filters.experienceLevel);
        }
        if (filters?.company) {
            query = query.eq('company', filters.company);
        }

        const { data, error } = await query;
        if (error) throw error;

        // Transform the data to match the Job type
        return data.map((job: any) => ({
            id: job.id,
            title: job.title,
            company: job.company,
            location: job.location,
            description: job.description,
            requirements: Array.isArray(job.requirements)
                ? job.requirements
                : job.requirements?.split('\n').filter(Boolean) || [],
            responsibilities: Array.isArray(job.responsibilities)
                ? job.responsibilities
                : job.responsibilities?.split('\n').filter(Boolean) || [],
            skills: Array.isArray(job.skills)
                ? job.skills
                : (typeof job.skills === 'string' ? job.skills.split(',').map(s => s.trim()).filter(Boolean) : []),
            category: job.category,
            jobType: job.job_type,
            experienceLevel: job.experience_level,
            salary: job.salary,
            createdAt: job.created_at,
            deadline: job.deadline,
            isActive: job.is_active
        })) as Job[];
    },

    // Get a single job by ID
    async getJobById(id: string) {
        const { data, error } = await supabase
            .from('jobs')
            .select('*')
            .eq('id', id)
            .eq('is_active', true)
            .single();

        if (error) {
            if (error.code === 'PGRST116') {
                throw new Error('Job not found');
            }
            throw error;
        }

        if (!data) {
            throw new Error('Job not found');
        }

        // Transform the data to match the Job type
        return {
            id: data.id,
            title: data.title,
            company: data.company,
            location: data.location,
            description: data.description,
            requirements: Array.isArray(data.requirements)
                ? data.requirements
                : data.requirements?.split('\n').filter(Boolean) || [],
            responsibilities: Array.isArray(data.responsibilities)
                ? data.responsibilities
                : data.responsibilities?.split('\n').filter(Boolean) || [],
            skills: Array.isArray(data.skills)
                ? data.skills
                : (typeof data.skills === 'string' ? data.skills.split(',').map(s => s.trim()).filter(Boolean) : []),
            category: data.category,
            jobType: data.job_type,
            experienceLevel: data.experience_level,
            salary: data.salary,
            createdAt: data.created_at,
            deadline: data.deadline,
            isActive: data.is_active
        } as Job;
    },

    // Submit a job application
    async submitApplication(application: Omit<JobApplication, 'id' | 'createdAt' | 'status'>) {
        if (isDevelopment) {
            // Mock successful application submission
            return {
                id: Math.random().toString(),
                ...application,
                status: 'pending',
                createdAt: new Date().toISOString()
            } as JobApplication;
        }

        const { data, error } = await supabase
            .from('job_applications')
            .insert([{
                ...application,
                status: 'pending'
            }])
            .select()
            .single();

        if (error) throw error;
        return data as JobApplication;
    },

    // Get user's job applications
    async getUserApplications(userId: string) {
        if (isDevelopment) {
            // Mock user applications
            return mockJobs.slice(0, 2).map(job => ({
                id: Math.random().toString(),
                jobId: job.id,
                userId,
                fullName: 'John Doe',
                email: 'john@example.com',
                phone: '+1234567890',
                resumeUrl: 'https://example.com/resume.pdf',
                experienceYears: 5,
                status: 'pending',
                createdAt: new Date().toISOString(),
                jobs: job
            }));
        }

        const { data, error } = await supabase
            .from('job_applications')
            .select(`
                *,
                jobs (
                    id,
                    title,
                    company,
                    location,
                    job_type,
                    category
                )
            `)
            .eq('user_id', userId)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as (JobApplication & { jobs: Job })[];
    }
};
