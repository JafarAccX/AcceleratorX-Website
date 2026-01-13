import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogService } from '../../services/blogService';
import { BlogPost } from '../../utils/types';
import { OutputData } from '@editorjs/editorjs';
import EditorJSHTML from 'editorjs-html';
import { Clock, Calendar, User } from 'lucide-react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isFixed, setIsFixed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(300);

  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Helper function to create URL-friendly slugs
  const slugify = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  // EditorJS to HTML parser with ID injection for TOC
  const EditorJsToHtml = (data: OutputData): string => {
    try {
      if (!data || typeof data !== 'object' || !('blocks' in data)) {
        console.warn('Invalid EditorJS data:', data);
        return '<p class="text-gray-500">No content available</p>';
      }

      const parser = EditorJSHTML({
        header: (block: any) => {
          const { text, level } = block.data;
          const slug = slugify(text);
          return `<h${level} id="${slug}" class="scroll-mt-32 font-bold mb-4 mt-8 text-gray-900" style="font-family: 'Cormorant Infant', serif;">${text}</h${level}>`;
        },
        paragraph: (block: any) => {
          return `<p class="mb-6 leading-relaxed text-gray-700">${block.data.text}</p>`;
        },
        list: (block: any) => {
          const type = block.data.style === 'ordered' ? 'ol' : 'ul';
          const items = block.data.items.map((i: string) => `<li class="mb-2">${i}</li>`).join('');
          return `<${type} class="list-disc pl-5 mb-6 space-y-2 text-gray-700">${items}</${type}>`;
        },
        image: (block: any) => {
          return `<figure class="mb-6">
            <img src="${block.data.file.url}" alt="${block.data.caption || ''}" class="w-full rounded-lg" />
            ${block.data.caption ? `<figcaption class="text-sm text-gray-600 mt-2 text-center">${block.data.caption}</figcaption>` : ''}
          </figure>`;
        },
        quote: (block: any) => {
          return `<blockquote class="border-l-4 border-blue-500 pl-4 italic mb-6 text-gray-700">${block.data.text}</blockquote>`;
        },
        code: (block: any) => {
          return `<pre class="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto"><code>${block.data.code}</code></pre>`;
        }
      });

      const parsed = parser.parse(data);

      // Handle both array and string returns from parser
      let html = '';
      if (Array.isArray(parsed)) {
        html = parsed.join('');
      } else if (typeof parsed === 'string') {
        html = parsed;
      } else {
        console.warn('EditorJS parser returned unexpected type:', typeof parsed, parsed);
        return '<p class="text-gray-500">Error rendering content</p>';
      }

      if (!html || html.trim() === '') {
        console.warn('EditorJS parsed to empty HTML');
        return '<p class="text-gray-500">No content available</p>';
      }

      return html;
    } catch (error) {
      console.error('Error parsing EditorJS content:', error);
      return '<p class="text-red-500">Error rendering content</p>';
    }
  };

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const data = await blogService.getBlogBySlug(slug);
        if (!data) {
          navigate('/blogs');
          return;
        }

        console.log('Blog data fetched:', data);
        console.log('Blog content:', data.Content);

        setBlog(data);

        // Extract TOC from blocks
        if (data.Content && 'blocks' in data.Content) {
          const blocks = (data.Content as unknown as OutputData).blocks;
          console.log('Content blocks:', blocks);

          const headers = blocks
            .filter((block: any) => block.type === 'header')
            .map((block: any) => ({
              id: slugify(block.data.text),
              text: block.data.text,
              level: block.data.level
            }));
          setToc(headers);
          if (headers.length > 0) setActiveSection(headers[0].id);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        navigate('/blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug, navigate]);

  // Sticky sidebar and scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      // 1. Sticky Sidebar Logic
      if (containerRef.current && sidebarRef.current) {
        const containerTop = containerRef.current.offsetTop;
        const containerBottom = containerTop + containerRef.current.offsetHeight;
        const sidebarHeight = sidebarRef.current.offsetHeight;

        const scrollY = window.scrollY;
        const headerOffset = 100;

        const shouldStartFixed = scrollY > containerTop - headerOffset;
        const shouldStopFixed = (scrollY + headerOffset + sidebarHeight) > containerBottom;

        const newIsFixed = shouldStartFixed && !shouldStopFixed;
        setIsFixed(newIsFixed);

        // Update sidebar width only when transitioning to fixed
        if (newIsFixed && sidebarRef.current.parentElement) {
          setSidebarWidth(sidebarRef.current.parentElement.offsetWidth);
        }
      }

      // 2. Scroll Spy for TOC
      if (toc.length > 0) {
        for (const item of toc) {
          const element = document.getElementById(item.id);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          if (rect.top < 200 && rect.top > -200) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h2>
          <button
            onClick={() => navigate('/blogs')}
            className="text-blue-600 hover:text-blue-700"
          >
            Return to blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.Title} | AcceleratorX Blog</title>
        <meta name="description" content={blog.SEO_MetaDescription || blog.Title} />
        <meta property="og:title" content={blog.Title} />
        <meta property="og:description" content={blog.SEO_MetaDescription || blog.Title} />
        <meta property="og:image" content={blog.CoverImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@400;600;700&display=swap');
        
        .blog-content {
          color: #374151;
          font-size: 1.125rem;
          line-height: 1.75;
        }
        
        .blog-content h1, .blog-content h2, .blog-content h3, 
        .blog-content h4, .blog-content h5, .blog-content h6 {
          font-family: 'Cormorant Infant', serif;
          color: #111827;
          font-weight: 700;
        }
        
        .blog-content h1 { font-size: 2.5rem; line-height: 1.2; margin-top: 2rem; margin-bottom: 1rem; }
        .blog-content h2 { font-size: 2rem; line-height: 1.3; margin-top: 2rem; margin-bottom: 1rem; }
        .blog-content h3 { font-size: 1.75rem; line-height: 1.4; margin-top: 1.5rem; margin-bottom: 0.75rem; }
        .blog-content h4 { font-size: 1.5rem; line-height: 1.4; margin-top: 1.5rem; margin-bottom: 0.75rem; }
        .blog-content h5 { font-size: 1.25rem; line-height: 1.5; margin-top: 1.25rem; margin-bottom: 0.5rem; }
        .blog-content h6 { font-size: 1.1rem; line-height: 1.5; margin-top: 1.25rem; margin-bottom: 0.5rem; }
        
        .blog-content p {
          margin-bottom: 1.5rem;
          color: #4b5563;
        }
        
        .blog-content ul, .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .blog-content li {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
        
        .blog-content img {
          border-radius: 0.5rem;
          margin: 1.5rem 0;
        }
        
        .blog-content blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          font-style: italic;
          margin: 1.5rem 0;
          color: #6b7280;
        }
        
        .blog-content pre {
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        .blog-content code {
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
        }
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Hero Section - Split Layout */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {blog.Categories?.map((category) => (
                    <span
                      key={category.Id}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {category.Name}
                    </span>
                  ))}
                </div>

                <h1
                  className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: 'Cormorant Infant, serif' }}
                >
                  {blog.Title}
                </h1>

                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{formatDate(blog.PublishedAt || blog.CreatedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>5 min read</span>
                  </div>
                </div>

                {blog.SEO_MetaDescription && (
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {blog.SEO_MetaDescription}
                  </p>
                )}
              </div>

              {/* Right: Cover Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={blog.CoverImage}
                    alt={blog.Title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" ref={containerRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Main Content (8 columns) */}
            <div className="lg:col-span-8">
              <article
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: EditorJsToHtml(blog.Content as unknown as OutputData)
                }}
              />
            </div>

            {/* Right: Sidebar (4 columns) */}
            <div className="lg:col-span-4">
              <div
                ref={sidebarRef}
                className={`${isFixed
                  ? 'fixed top-24 z-10'
                  : 'relative'
                  }`}
                style={isFixed ? { width: `${sidebarWidth}px` } : {}}
              >
                <div className="space-y-6">
                  {/* Author Card */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold overflow-hidden">
                        {blog.Author?.ProfileImage ? (
                          <img
                            src={blog.Author.ProfileImage}
                            alt={blog.Author.FullName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-8 h-8" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Author</h3>
                        <p className="text-sm text-gray-600">{blog.Author?.FullName || 'Anonymous'}</p>
                      </div>
                    </div>
                    {blog.Author?.Bio && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {blog.Author.Bio}
                      </p>
                    )}
                    <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                      COO @AcceleratorX
                    </div>
                  </div>

                  {/* Table of Contents */}
                  {toc.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3
                        className="text-xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'Cormorant Infant, serif' }}
                      >
                        Table of Contents
                      </h3>
                      <nav className="space-y-2">
                        {toc.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`block w-full text-left py-2 px-3 rounded-lg transition-all duration-200 ${activeSection === item.id
                              ? 'bg-blue-50 text-blue-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }`}
                            style={{
                              paddingLeft: `${(item.level - 1) * 0.75 + 0.75}rem`,
                              fontSize: item.level === 1 ? '0.95rem' : '0.875rem'
                            }}
                          >
                            {item.text}
                          </button>
                        ))}
                      </nav>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
