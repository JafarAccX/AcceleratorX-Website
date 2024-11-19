import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ChevronLeft, Calendar, Clock, User } from "lucide-react";

interface BlogPostProps {
  title: string;
  content: string;
  date?: string;
  readTime?: string;
  author?: string;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  date,
  readTime,
  author,
  onBack
}) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 mb-4 hover:text-gray-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Blogs
        </button>

        {/* Blog Metadata */}
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          {date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{date}</span>
            </div>
          )}
          {readTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{readTime}</span>
            </div>
          )}
          {author && (
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span className="text-sm">{author}</span>
            </div>
          )}
        </div>

        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
          {title}
        </h1>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none 
          prose-headings:font-bold prose-headings:text-blue-600 
          prose-h1:text-4xl prose-h1:mb-8 
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
          prose-li:my-2 prose-li:pl-2
          prose-strong:text-black prose-strong:font-semibold
          prose-em:text-gray-600 prose-em:italic
          prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-8
          prose-hr:my-12">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
