import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContentSectionProps {
  title: string;
  content: string;
  Icon: LucideIcon;
}

export default function ContentSection({
  title,
  content,
  Icon,
}: ContentSectionProps) {
  return (
    <div
      className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-gray-800"
    >
      <div className="flex items-center mb-6">
        <Icon className="h-8 w-8 text-indigo-500 mr-3" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p
          
        className="text-gray-300 leading-relaxed text-lg"
      >
        {content}
      </p>
    </div>
  );
}
