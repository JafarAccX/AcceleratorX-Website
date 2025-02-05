import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, Calendar, Clock, User, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { Blog } from "../../utils/types";
import { blogService } from "../../services/blogService";

function Blogs() {
  const [state, setState] = useState<{
    selectedBlog: Blog | null;
    blogs: Blog[];
    loading: boolean;
  }>({
    selectedBlog: null,
    blogs: [],
    loading: true,
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const blogs = await blogService.getBlogs();
      setState((prev) => ({ ...prev, blogs, loading: false }));
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to fetch blogs");
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleBlogClick = useCallback((blog: Blog | null) => {
    setState((prev) => ({ ...prev, selectedBlog: blog }));
  }, []);

  const BlogPost = ({ blog, onBack }: { blog: Blog; onBack: () => void }) => (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="relative h-[400px]">
        {blog.cover_image ? (
          <img
            src={blog.cover_image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No cover image</span>
          </div>
        )}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{blog.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
          {blog.date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
          )}
          {blog.read_time && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{blog.read_time} min read</span>
            </div>
          )}
          {blog.author && (
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{blog.author}</span>
            </div>
          )}
        </div>
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </article>
  );

  // if (state.loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
  //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-black">
      {state.selectedBlog ? (
        <div className="py-8 px-4">
          <BlogPost
            blog={state.selectedBlog}
            onBack={() => handleBlogClick(null)}
          />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-12 mt-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Our Blog</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover thought-provoking articles and stay updated with the
              latest insights from our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {state.blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogClick(blog)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48">
                  {blog.cover_image ? (
                    <img
                      src={blog.cover_image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    {blog.date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                    )}
                    {blog.read_time && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{blog.read_time} min read</span>
                      </div>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  {blog.author && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                  )}
                  <div className="mt-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <span className="text-sm font-medium">Read more</span>
                    <ChevronLeft className="w-4 h-4 ml-1 rotate-180" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
