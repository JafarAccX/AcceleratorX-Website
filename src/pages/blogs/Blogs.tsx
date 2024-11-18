import React, { useEffect, useState } from "react";
import { ChevronLeft, Clock, Calendar } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
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
          "https://dev-acceleratorxblogs.pantheonsite.io/wp-json/wp/v2/posts?per_page=10"
        );
        const data = await response.json();

        // Transform WordPress data into the Blog structure
        const transformedBlogs = data.map((post: any) => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          coverImage: post.featured_media_src_url || "/placeholder.jpg", // Add placeholder if no image
          category: post.categories?.[0]?.name || "Uncategorized",
          date: new Date(post.date).toLocaleDateString(),
          readTime: "5 min read", // Static for now
          author: {
            name: post.author_name || "Unknown Author",
            avatar: post.author_avatar_urls?.["96"] || "/default-avatar.jpg",
          },
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
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 group"
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
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {selectedBlog.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {selectedBlog.date}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedBlog.readTime}
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {selectedBlog.title}
              </h1>

              <div className="flex items-center mb-8">
                <img
                  src={selectedBlog.author.avatar}
                  alt={selectedBlog.author.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-900 font-medium">
                    {selectedBlog.author.name}
                  </p>
                  <p className="text-gray-500 text-sm">Author</p>
                </div>
              </div>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-white mb-2">
          Latest Blog Posts
        </h1>
        <p className="text-xl text-white mb-12">
          Discover insights about technology, development, and best practices
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h2>

                <div
                  className="text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {blog.author.name}
                      </p>
                      <p className="text-sm text-gray-500">{blog.date}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleReadMore(blog)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
