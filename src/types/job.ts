export enum JobCategory {
    Tech = 'Tech',
    Product = 'Product',
    Design = 'Design',
    Data = 'Data',
    Marketing = 'Marketing',
    Sales = 'Sales',
    Other = 'Other'
}

export enum JobType {
    FullTime = 'Full-time',
    PartTime = 'Part-time',
    Contract = 'Contract',
    Freelance = 'Freelance',
    Internship = 'Internship'
}

export enum ExperienceLevel {
    Entry = 'Entry',
    Mid = 'Mid',
    Senior = 'Senior',
    Lead = 'Lead',
    Executive = 'Executive'
}

export enum ApplicationStatus {
    Pending = 'pending',
    Reviewed = 'reviewed',
    Shortlisted = 'shortlisted',
    Rejected = 'rejected'
}

export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    job_type: JobType;
    experience_level: ExperienceLevel;
    category: JobCategory;
    salary_range?: string;
    description: string;
    requirements: string;
    responsibilities: string;
    skills: string[];
    created_at: string;
    updated_at?: string;
    is_active: boolean;
    created_by: string;
}

export interface JobApplication {
    id: string;
    job_id: string;
    user_id: string;
    full_name: string;
    email: string;
    phone: string;
    resume_url: string;
    cover_letter?: string;
    portfolio_url?: string;
    linkedin_url?: string;
    github_url?: string;
    experience_years: number;
    current_company?: string;
    applicant_role?: string;
    expected_salary?: string;
    notice_period?: string;
    status: ApplicationStatus;
    created_at: string;
    updated_at: string;
    additional_notes?: string;
    interviewer_notes?: string;
    job?: Job;
}
