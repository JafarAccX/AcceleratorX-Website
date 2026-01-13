import { useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, Calendar, User, ArrowLeft, Eye, Heart } from "lucide-react";
import toast from "react-hot-toast";
import { BlogPost } from "../../utils/types";
import { blogService } from "../../services/blogService";
import EditorJSHTML from 'editorjs-html';
import type { OutputData } from '@editorjs/editorjs';
import './BlogContent.css';

function Blogs() {
  const [state, setState] = useState<{
    selectedBlog: BlogPost | null;
    blogs: BlogPost[];
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
      console.log('📰 [BLOGS PAGE] Starting to fetch blogs...');
      const blogs = await blogService.getBlogs();
      console.log('📰 [BLOGS PAGE] ✅ Fetched blogs:', blogs.length);
      console.log('📰 [BLOGS PAGE] First blog:', blogs[0]);
      setState((prev) => ({ ...prev, blogs, loading: false }));
    } catch (error) {
      console.error("📰 [BLOGS PAGE] ❌ Error fetching blogs:", error);
      toast.error("Failed to fetch blogs");
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleBlogClick = useCallback((blog: BlogPost | null) => {
    setState((prev) => ({ ...prev, selectedBlog: blog }));
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = (content: Record<string, unknown> | unknown): string => {
    if (!content) return '<p>No content available</p>';

    try {
      // If content is already a string (HTML), return it
      if (typeof content === 'string') {
        return content;
      }

      // If content is EditorJS format, parse it
      if (content && typeof content === 'object' && 'blocks' in content) {
        const editorjsHTML = EditorJSHTML();
        const editorData = content as OutputData;
        if (editorData.blocks && Array.isArray(editorData.blocks)) {
          const htmlArray = editorjsHTML.parse(editorData);
          return Array.isArray(htmlArray) ? htmlArray.join('') : String(htmlArray);
        }
      }

      // Fallback: stringify the object
      return `<pre>${JSON.stringify(content, null, 2)}</pre>`;
    } catch (error) {
      console.error('Error parsing blog content:', error);
      return '<p>Error displaying content</p>';
    }
  };

  const BlogPost = ({ blog, onBack }: { blog: BlogPost; onBack: () => void }) => (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="relative h-[400px]">
        {blog.CoverImage ? (
          <img
            src={blog.CoverImage}
            alt={blog.Title}
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
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{blog.Title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
          {blog.PublishedAt && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blog.PublishedAt)}</span>
            </div>
          )}
          {blog.Author && (
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{blog.Author.FullName}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{blog.ViewsCount} views</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>{blog.LikesCount} likes</span>
          </div>
        </div>
        {blog.Categories && blog.Categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.Categories.map((category) => (
              <span
                key={category.Id}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {category.Name}
              </span>
            ))}
          </div>
        )}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: renderContent(blog.Content) }} />
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
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Blog | AcceleratorX - Insights on AI, Data & Product Management</title>
        <meta name="title" content="Blog | AcceleratorX - Insights on AI, Data & Product Management" />
        <meta
          name="description"
          content="Explore expert articles and insights on AI, Data Analytics, Product Management, and Digital Marketing. Stay updated with the latest trends and best practices."
        />
        <link rel="canonical" href="https://www.acceleratorx.org/blogs" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acceleratorx.org/blogs" />
        <meta property="og:title" content="Blog | AcceleratorX - Insights on AI, Data & Product Management" />
        <meta
          property="og:description"
          content="Explore expert articles and insights on AI, Data Analytics, Product Management, and Digital Marketing."
        />
        <meta property="og:image" content="https://www.acceleratorx.org/redesign/logo-bg-black.webp" />
        <meta property="og:site_name" content="AcceleratorX" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.acceleratorx.org/blogs" />
        <meta property="twitter:title" content="Blog | AcceleratorX - Insights on AI, Data & Product Management" />
        <meta
          property="twitter:description"
          content="Explore expert articles and insights on AI, Data Analytics, Product Management, and Digital Marketing."
        />
        <meta property="twitter:image" content="https://www.acceleratorx.org/redesign/logo-bg-black.webp" />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "AcceleratorX Blog",
            "description": "Expert articles and insights on AI, Data Analytics, Product Management, and Digital Marketing",
            "url": "https://www.acceleratorx.org/blogs",
            "publisher": {
              "@type": "Organization",
              "name": "AcceleratorX",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.acceleratorx.org/redesign/logo-bg-black.webp"
              }
            },
            "blogPost": state.blogs.slice(0, 10).map(blog => ({
              "@type": "BlogPosting",
              "headline": blog.Title,
              "description": blog.Excerpt || "",
              "image": blog.CoverImage || "https://www.acceleratorx.org/redesign/logo-bg-black.webp",
              "datePublished": blog.PublishedAt || blog.CreatedAt,
              "author": {
                "@type": "Person",
                "name": blog.Author?.FullName || "AcceleratorX"
              },
              "url": `https://www.acceleratorx.org/blogs/${blog.Slug}`
            }))
          })}
        </script>
      </Helmet>

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
                key={blog.Id}
                onClick={() => handleBlogClick(blog)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48">
                  {blog.CoverImage ? (
                    <img
                      src={blog.CoverImage}
                      alt={blog.Title}
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
                    {blog.PublishedAt && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(blog.PublishedAt)}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{blog.ViewsCount} views</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {blog.Title}
                  </h2>
                  {blog.Excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.Excerpt}
                    </p>
                  )}
                  {blog.Author && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{blog.Author.FullName}</span>
                    </div>
                  )}
                  {blog.Categories && blog.Categories.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {blog.Categories.slice(0, 2).map((category) => (
                        <span
                          key={category.Id}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                        >
                          {category.Name}
                        </span>
                      ))}
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
