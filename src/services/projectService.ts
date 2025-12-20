import { api } from '../api';
import {
    ApiResponse,
    ProjectListResponse,
    Project,
    CreateProjectRequest,
    ProjectComment
} from '../types/project.types';

export const projectService = {
    // Public Endpoints
    async getProjects(page = 1, limit = 10, search?: string) {
        const params: any = { page, limit };
        if (search) params.search = search;

        const response = await api.get<ApiResponse<ProjectListResponse>>('/api/projects', { params });
        return response.data;
    },

    async getUserProjects(page = 1, limit = 10, search?: string) {
        const params: any = { page, limit };
        if (search) params.search = search;

        const response = await api.get<ApiResponse<ProjectListResponse>>('/api/projects/my-projects', { params });
        return response.data;
    },

    async getProjectById(id: string) {
        const response = await api.get<ApiResponse<Project>>(`/api/projects/${id}`);
        return response.data;
    },

    async getProjectComments(id: string) {
        const response = await api.get<ApiResponse<ProjectComment[]>>(`/api/projects/${id}/comments`);
        return response.data;
    },

    async trackShare(id: string, platform: string) {
        const response = await api.post<ApiResponse>(`/api/projects/${id}/share`, { Platform: platform });
        return response.data;
    },

    // Protected Endpoints
    async createProject(data: CreateProjectRequest) {
        const response = await api.post<ApiResponse<{ Id: string }>>('/api/projects', data);
        return response.data;
    },

    async likeProject(id: string) {
        const response = await api.post<ApiResponse>(`/api/projects/${id}/like`);
        return response.data;
    },

    async unlikeProject(id: string) {
        const response = await api.delete<ApiResponse>(`/api/projects/${id}/like`);
        return response.data;
    },

    async addComment(id: string, comment: string) {
        const response = await api.post<ApiResponse<ProjectComment>>(`/api/projects/${id}/comments`, { Comment: comment });
        return response.data;
    },

    async replyComment(id: string, commentId: string, comment: string) {
        // Backend expects specific reply route: POST /:id/comments/:commentId/reply
        const response = await api.post<ApiResponse<ProjectComment>>(`/api/projects/${id}/comments/${commentId}/reply`, { Comment: comment });
        return response.data;
    },

    async deleteProject(id: string) {
        const response = await api.delete<ApiResponse>(`/api/projects/${id}`);
        return response.data;
    },

    async toggleVisibility(id: string) {
        const response = await api.patch<ApiResponse<{ IsPublic: boolean }>>(`/api/projects/${id}/visibility`);
        return response.data;
    }
};
