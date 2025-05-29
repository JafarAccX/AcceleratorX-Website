export interface Customer {
    id: string;
    CustId: string;
    CallingCode: string;
    Mobile: string;
    Email: string | null;
    Designation: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    DOB: string | null;
    Gender: string | null;
    MobileVerified: boolean;
    EmailVerified: boolean;
    ReferralCode: string | null;
    Role: string;
    ProfilePicture: string | null;
    Resume: string | null;
    CoverLetter: string | null;
    Portfolio: string | null;
    LinkedinUrl: string | null;
    GithubUrl: string | null;
    YearOfExperience: number | null;
    ExpectedSalary: number | null;
    NoticePeriod: number | null;
    CurrentCompany: string | null;
    Active: boolean;
    Skills: string | null;
    CertificateGenerated: boolean;
    JoinDate: string;
    LastUpdateDate: string;
}

export interface CreateCustomerPayload {
    callingCode: string;
    mobile: string;
    email?: string;
    designation: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dob?: string;
    gender?: string;
    mobileVerified: boolean;
    emailVerified: boolean;
    referralCode?: string;
    role: string;
    profilePicture?: string;
    resume?: string;
    coverLetter?: string;
    portfolio?: string;
    linkedinUrl?: string;
    githubUrl?: string;
    yearOfExperience?: number;
    expectedSalary?: number;
    noticePeriod?: number;
    currentCompany?: string;
    active: boolean;
    skills?: string;
    certificateGenerated: boolean;
    joinDate: string;
}

export interface UpdateCustomerPayload {
    email?: string;
    designation: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dob?: string;
    gender?: string;
    profilePicture?: string;
    resume?: string;
    coverLetter?: string;
    portfolio?: string;
    linkedinUrl?: string;
    githubUrl?: string;
    yearOfExperience?: number;
    expectedSalary?: number;
    noticePeriod?: number;
    currentCompany?: string;
    skills?: string;
    lastUpdateDate?: string; // optional, defaults to current date if not provided
}


export const Gender = {
    MALE: 'Male',
    FEMALE: 'Female',
    TRANSGENDER: 'Transgender',
    OTHERS: 'Others',
    UNKNOWN: 'Unknown',
};
export type GenderType = keyof typeof Gender;

// export interface UpdateCustomerPayload extends CreateCustomerPayload {
//     lastUpdateDate?: string;
// }

export interface JobApplication {
    Id: string;
    JobId: string;
    CustId: string;
    Result: 'Pending' | 'Reviewing' | 'Shortlisted' | 'Rejected' | 'Offered' | 'Accepted' | 'Declined';
    CreatedDate: string;
    Deleted: boolean;
    CompanyName?: string;
    CompanyLogoURL?: string;
    JobName?: string;
    City?: string;
    Country?: string;
    JobType?: string;
    Name?: string;
    Email?: string;
    Mobile?: string;
    Skills?: string;
    YearOfExperience?: number;
}

export interface ApplicationStats {
    TotalActive: number;
    Pending: number;
    InReview: number;
    Shortlisted: number;
    Rejected: number;
    Offered: number;
    Accepted: number;
    Declined: number;
    Withdrawn: number;
}

export interface ApplyForJobPayload {
    JobId: string;
    CustId: string;
    Result: string
}

export interface UpdateApplicationStatusPayload {
    Result: 'Pending' | 'Reviewing' | 'Shortlisted' | 'Rejected' | 'Offered' | 'Accepted' | 'Declined';
}

export interface WithdrawApplicationPayload {
    CustId: string;
}