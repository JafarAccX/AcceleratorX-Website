import React, { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://dev-acceleratorxblogs.pantheonsite.io/wp-json/wp/v2/posts?_embed&per_page=10"
        );
        const data = await response.json();

        // Transform WordPress data into the Blog structure
        const transformedBlogs = data.map((post: any) => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          coverImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
          content: post.content.rendered,
        }));

        setBlogs(transformedBlogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleReadMore = (blog: Blog) => {
    setSelectedBlog(blog);
    window.scrollTo(0, 0);
  };

  const handleClose = () => {
    setSelectedBlog(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-black py-24">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={handleClose}
            className="flex items-center text-white hover:text-gray-300 mb-6 group"
          >
            <ChevronLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Blogs
          </button>

          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img
              src={selectedBlog.coverImage}
              alt={selectedBlog.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4" 
                dangerouslySetInnerHTML={{ __html: selectedBlog.title }}
              />
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 
                  className="text-xl font-bold mb-3 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: blog.title }}
                />
                <div 
                  className="text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                />
                <button
                  onClick={() => handleReadMore(blog)}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
