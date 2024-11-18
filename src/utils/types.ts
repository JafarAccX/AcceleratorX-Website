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
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
}
