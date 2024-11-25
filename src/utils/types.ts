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
