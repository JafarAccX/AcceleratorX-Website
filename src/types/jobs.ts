// Types
export interface Job {
    Id: string;
    CompanyName: string;
    CompanyLogoURL: string;
    JobName: string;
    City: string;
    Country: string;
    JobType: string;
    Duration: string;
    JobDescription: string;
    RequiredSkills: string | null;
    RequiredExperience: number | null;
    Salary: number | null;
    CreatedDate: string;
    ExpiryDate: string | null;
    Active: boolean;
    Deleted: boolean;
}

export interface CreateJobPayload {
    companyName: string;
    companyLogoURL: string;
    jobName: string;
    city: string;
    country: string;
    jobType: string;
    duration: string;
    jobDescription: string;
    requiredSkills?: string;
    requiredExperience?: number;
    salary?: number;
    expiryDate?: string;
    active?: boolean;
    deleted?: boolean;
}

export interface UpdateJobPayload extends CreateJobPayload { }

export interface SearchJobsParams {
    query?: string;
    location?: string;
    jobType?: string;
}
