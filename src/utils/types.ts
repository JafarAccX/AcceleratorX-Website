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
