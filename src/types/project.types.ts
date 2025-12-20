export interface Project {
    Id: string;
    CustId: number;
    Title: string;
    Description: string;
    GitHubURL?: string | null;
    PortfolioURL?: string | null;
    LiveURL?: string | null;
    VideoURL?: string | null;
    IsPublic: boolean;
    Score: number;
    CreatedAt: string; // Dates often come as strings from JSON API
    UpdatedAt?: string | null;
    Deleted: boolean;
    // Joins
    Images?: ProjectImage[];
    Owner?: {
        CustId: number;
        Name: string;
        ProfileImage?: string;
    };
    Stats?: {
        LikesCount: number;
        CommentsCount: number;
        SharesCount: number;
    };
    // Aggregated fields from backend might vary, aligning with controller response
    LikesCount?: string | number;
    CommentsCount?: string | number;
    SharesCount?: string | number;
}

export interface ProjectImage {
    Id: string;
    ProjectId: string;
    ImageURL: string;
    DisplayOrder: number;
    CreatedAt: string;
}

export interface ProjectComment {
    Id: string;
    ProjectId: string;
    CustId: number;
    ParentCommentId?: string | null;
    Comment: string;
    CreatedAt: string;
    Deleted: boolean;
    Author?: {
        CustId: number;
        Name: string;
        ProfileImage?: string;
    };
    Replies?: ProjectComment[];
}

export interface ProjectListResponse {
    projects: Project[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
}

export interface CreateProjectRequest {
    Title: string;
    Description: string;
    GitHubURL?: string;
    PortfolioURL?: string;
    LiveURL?: string;
    VideoURL?: string;
    IsPublic?: boolean;
    Images: string[];
}
