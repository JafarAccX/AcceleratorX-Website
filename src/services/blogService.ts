import { BlogPost, BlogCategory, BlogTag, BlogComment } from "../utils/types";

// API base URL - adjust this to match your backend URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3020';

interface GetBlogPostsParams {
  page?: number;
  limit?: number;
  category?: string;
  tag?: string;
  author?: string;
  search?: string;
}

interface GetBlogPostsResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface ApiResponse<T = void> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export const blogService = {
  async getBlogs(params: GetBlogPostsParams = {}): Promise<BlogPost[]> {
    try {
      console.log('🌐 [BLOG SERVICE] Fetching blogs with params:', params);
      console.log('🌐 [BLOG SERVICE] API URL:', API_BASE_URL);
      
      const queryParams = new URLSearchParams();
      if (params.page) queryParams.append('page', params.page.toString());
      if (params.limit) queryParams.append('limit', params.limit.toString());
      if (params.category) queryParams.append('category', params.category);
      if (params.tag) queryParams.append('tag', params.tag);
      if (params.author) queryParams.append('author', params.author);
      if (params.search) queryParams.append('search', params.search);

      const url = `${API_BASE_URL}api/blogs?${queryParams}`;
      console.log('🌐 [BLOG SERVICE] Full URL:', url);

      const response = await fetch(url);
      console.log('🌐 [BLOG SERVICE] Response status:', response.status);
      console.log('🌐 [BLOG SERVICE] Response ok:', response.ok);
      
      const result: ApiResponse<GetBlogPostsResponse> = await response.json();
      console.log('🌐 [BLOG SERVICE] Response data:', {
        success: result.success,
        message: result.message,
        postsCount: result.data?.posts?.length || 0,
        total: result.data?.total
      });

      if (!result.success) {
        console.error('🌐 [BLOG SERVICE] ❌ API returned error:', result.message);
        throw new Error(result.message || 'Failed to fetch blogs');
      }

      console.log('🌐 [BLOG SERVICE] ✅ Returning', result.data?.posts?.length || 0, 'blogs');
      return result.data?.posts || [];
    } catch (error) {
      console.error('🌐 [BLOG SERVICE] ❌ Error fetching blogs:', error);
      throw error;
    }
  },

  async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const response = await fetch(`${API_BASE_URL}api/blogs/${slug}`);
      const result: ApiResponse<BlogPost> = await response.json();

      if (!result.success) {
        if (response.status === 404) return null;
        throw new Error(result.message || 'Failed to fetch blog');
      }

      return result.data || null;
    } catch (error) {
      console.error('Error fetching blog by slug:', error);
      throw error;
    }
  },

  async getBlogCategories(): Promise<BlogCategory[]> {
    try {
      const response = await fetch(`${API_BASE_URL}api/blogs/meta/categories`);
      const result: ApiResponse<BlogCategory[]> = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch categories');
      }

      return result.data || [];
    } catch (error) {
      console.error('Error fetching blog categories:', error);
      throw error;
    }
  },

  async getBlogTags(): Promise<BlogTag[]> {
    try {
      const response = await fetch(`${API_BASE_URL}api/blogs/meta/tags`);
      const result: ApiResponse<BlogTag[]> = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch tags');
      }

      return result.data || [];
    } catch (error) {
      console.error('Error fetching blog tags:', error);
      throw error;
    }
  },

  async getBlogComments(postId: string): Promise<BlogComment[]> {
    try {
      const response = await fetch(`${API_BASE_URL}api/blogs/${postId}/comments`);
      const result: ApiResponse<BlogComment[]> = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch comments');
      }

      return result.data || [];
    } catch (error) {
      console.error('Error fetching blog comments:', error);
      throw error;
    }
  },

  async createBlogView(postId: string, ipAddress?: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}api/blogs/views`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          PostId: postId,
          IPAddress: ipAddress,
        }),
      });

      const result: ApiResponse<void> = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to record view');
      }
    } catch (error) {
      console.error('Error creating blog view:', error);
      // Don't throw error for view tracking
    }
  },

  async createBlogLike(postId: string, userId?: string, ipAddress?: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}api/blogs/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          PostId: postId,
          UserId: userId,
          IPAddress: ipAddress,
        }),
      });

      const result: ApiResponse<void> = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to record like');
      }
    } catch (error) {
      console.error('Error creating blog like:', error);
      throw error;
    }
  },

  async createBlogComment(
    postId: string,
    content: string,
    authorName: string,
    authorEmail?: string,
    parentId?: string
  ): Promise<BlogComment> {
    try {
      const response = await fetch(`${API_BASE_URL}api/blogs/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          PostId: postId,
          ParentId: parentId,
          AuthorName: authorName,
          AuthorEmail: authorEmail,
          Content: content,
        }),
      });

      const result: ApiResponse<BlogComment> = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to create comment');
      }

      return result.data!;
    } catch (error) {
      console.error('Error creating blog comment:', error);
      throw error;
    }
  },

  async createBlogCommentLike(
    commentId: string,
    userId?: string,
    ipAddress?: string
  ): Promise<{ liked: boolean }> {
    try {
      const response = await fetch(`${API_BASE_URL}api/blogs/comments/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          CommentId: commentId,
          UserId: userId,
          IPAddress: ipAddress,
        }),
      });

      const result: ApiResponse<{ liked: boolean }> = await response.json();
      if (!result.success) {
        throw new Error(result.message || 'Failed to toggle comment like');
      }

      return result.data!;
    } catch (error) {
      console.error('Error toggling blog comment like:', error);
      throw error;
    }
  }
};