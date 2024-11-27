import React from "react";

interface SectionHeadingProps {
  title: string;
  description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
}) => {
  return (
    <div className="space-y-4 mb-16 text-center">
      <h2 className="text-4xl font-bold leading-tight">
        <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeading;
