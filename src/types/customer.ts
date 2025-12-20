// {
//     "Id": "636f624e-935a-4788-813d-c6dc31bb16b3",
//     "CustId": "2025041100001",
//     "CallingCode": 91,
//     "Designation": null,
//     "Mobile": "9359029858",
//     "Email": "satyendra@acceleratorx.co",
//     "FirstName": "satyendra",
//     "MiddleName": null,
//     "LastName": "mourya",
//     "DOB": "1969-12-30T18:30:00.000Z",
//     "Gender": "MALE",
//     "MobileVerified": false,
//     "EmailVerified": false,
//     "ReferralCode": "1d77ddafce1",
//     "Role": "Admin",
//     "ProfilePicture": null,
//     "Resume": null,
//     "CoverLetter": null,
//     "Portfolio": null,
//     "LinkedinUrl": null,
//     "GithubUrl": null,
//     "YearOfExperience": null,
//     "ExpectedSalary": null,
//     "NoticePeriod": null,
//     "CurrentCompany": null,
//     "Active": true,
//     "Skills": null,
//     "CertificateGenerated": false,
//     "JoinDate": "2025-04-11T09:14:27.178Z",
//     "LastUpdateDate": "2025-05-29T07:56:59.140Z",
// "ProfileCreated": true,
// "CourseEnrolled": true,
//     "IsJoiningFeePaid": false,
//     "BannedUser": false,
//     "PlatformDisabledReason": null,
//     "CreatedDate": "2025-04-11T09:14:27.237Z",
//     "UpdatedDate": null
// }

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
    ProfileCreated: boolean,
    CourseEnrolled: boolean,
    JoinDate: string;
    LastUpdateDate: string;
    Education?: string;
    YearOfPassing?: string;
    ReferredBy?: string;
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
    education?: string;
    yearOfPassing?: string;
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