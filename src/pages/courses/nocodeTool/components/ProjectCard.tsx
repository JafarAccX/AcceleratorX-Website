import React from "react";
import { Project } from "../../../../utils/types";

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isHovered,
  onHover,
  onLeave,
}) => {
  return (
    <div
      className="relative group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-blue-500 rounded-lg">{project.icon}</div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
          </div>
          <p className="text-gray-300">{project.description}</p>
        </div>
      </div>

      <div
        className={`absolute inset-0 border-2 border-blue-500 rounded-xl transition-all duration-300 ${
          isHovered ? "scale-105 opacity-100" : "scale-100 opacity-0"
        }`}
      />
    </div>
  );
};

export default ProjectCard;
