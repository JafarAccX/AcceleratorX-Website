import React, { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import { Code2, Smartphone } from "lucide-react";
import { Project } from "../../../utils/types";

export const projects: Project[] = [
  {
    title: "Professional Portfolio",
    description:
      "Showcase your work with a stunning, responsive portfolio website that highlights your skills and achievements.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "Mobile Application",
    description:
      "Build a fully functional habit tracker or event planner app that demonstrates your mobile development expertise.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=2424&ixlib=rb-4.0.3",
    icon: <Smartphone className="w-6 h-6" />,
  },
];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Build Projects You'll Be Proud Of"
          description="By the end of the course, you'll have built impressive projects that showcase your skills to potential clients or employers."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
