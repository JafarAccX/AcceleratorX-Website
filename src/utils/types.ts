import { ReactNode } from "react";

export interface Tool {
  name: string;
  image: string;
  description: string;
  category: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description: string;
}

// Blog-related types matching the new backend schema
export interface BlogAuthor {
  Id: string;
  FullName: string;
  Email: string;
  ProfileImage?: string;
  Bio?: string;
  CreatedAt: string;
}

export interface BlogCategory {
  Id: string;
  Name: string;
  Slug: string;
}

export interface BlogTag {
  Id: string;
  Name: string;
}

export interface BlogPost {
  Id: string;
  Title: string;
  Slug: string;
  AuthorId?: string;
  Author?: BlogAuthor;
  CoverImage?: string;
  Excerpt?: string;
  Content: Record<string, unknown>; // JSONB content
  Status: 'draft' | 'published' | 'archived';
  PublishedAt?: string;
  ViewsCount: number;
  LikesCount: number;
  SEO_MetaTitle?: string;
  SEO_MetaDescription?: string;
  CreatedAt: string;
  UpdatedAt: string;
  Deleted: boolean;
  Categories?: BlogCategory[];
  Tags?: BlogTag[];
}

export interface BlogComment {
  Id: string;
  PostId?: string;
  ParentId?: string;
  AuthorName: string;
  AuthorEmail?: string;
  Content: string;
  LikesCount: number;
  IsApproved: boolean;
  CreatedAt: string;
  Replies?: BlogComment[];
}

// Legacy Blog interface for backward compatibility
export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  cover_image: string; // Changed from coverImage to match DB column
  content: string;
  date?: string;
  read_time?: string; // Changed from readTime to match DB column
  author?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
}
