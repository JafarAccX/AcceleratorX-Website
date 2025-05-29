// Types
export interface Job {
    Id: string;
    CompanyName: string;
    CompanyLogoURL: string;
    JobName: string;
    City?: string; // Made optional since we now have Location
    Country?: string; // Made optional since we now have Location
    Location: string; // New field that combines city, state, country
    JobType: string;
    Duration?: string; // Made optional as it might not always be present
    JobDescription: string;
    RequiredSkills: string | null;
    RequiredExperience: string | number | null; // Updated to handle both string and number
    Salary: number | null;
    CreatedDate: string;
    ExpiryDate: string | null;
    Active: boolean;
    Deleted: boolean;
    CompanyURL: string | null; // New field
    JobApplyURL: string | null; // New field
    EasyApply: boolean; // New field
    Category: string; // New field
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
