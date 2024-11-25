import React, { useState } from "react";
import { Calendar, Clock, User } from "lucide-react";
import { Blog } from "../../utils/types";

interface BlogPostProps {
  blog: Blog;
  onBack?: () => void;
}

export function BlogPost({ blog, onBack }: BlogPostProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const createMarkup = (content: string) => {
    return { __html: content };
  };

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">
      <div className="relative h-[250px]">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        {blog.category && (
          <span className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            {blog.category}
          </span>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h2>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          {blog.date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
          )}
          {blog.readTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          )}
          {blog.author && (
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{blog.author}</span>
            </div>
          )}
        </div>
        
        <div 
          className={`prose prose-sm max-w-none ${!isExpanded ? 'line-clamp-3' : ''}`}
          dangerouslySetInnerHTML={createMarkup(isExpanded ? blog.content : blog.excerpt)}
        />
        
        <button
          onClick={toggleExpand}
          className="mt-4 text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </article>
  );
}