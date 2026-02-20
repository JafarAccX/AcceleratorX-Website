import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogService } from '../../services/blogService';
import { BlogPost } from '../../utils/types';
import { OutputData } from '@editorjs/editorjs';
import EditorJSHTML from 'editorjs-html';
import { Calendar, User, ChevronDown } from 'lucide-react';

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
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

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
          return `<h${level} id="${slug}" class="scroll-mt-32 font-bold mb-4 mt-8 text-gray-900 dark:text-white transition-colors duration-300 font-heading" >${text}</h${level}>`;
        },
        paragraph: (block: any) => {
          return `<p class="mb-6 leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300 font-sans">${block.data.text}</p>`;
        },
        list: (block: any) => {
          const type = block.data.style === 'ordered' ? 'ol' : 'ul';
          const items = block.data.items.map((i: string) => `<li class="mb-2">${i}</li>`).join('');
          return `<${type} class="list-disc pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">${items}</${type}>`;
        },
        image: (block: any) => {
          return `<figure class="mb-6">
            <img src="${block.data.file.url}" alt="${block.data.caption || ''}" class="w-full rounded-lg" />
            ${block.data.caption ? `<figcaption class="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center transition-colors duration-300">${block.data.caption}</figcaption>` : ''}
          </figure>`;
        },
        quote: (block: any) => {
          return `<blockquote class="border-l-4 border-blue-500 dark:border-blue-400 pl-4  mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-300">${block.data.text}</blockquote>`;
        },
        code: (block: any) => {
          return `<pre class="bg-gray-100 dark:bg-[#171717] p-4 rounded-lg mb-6 overflow-x-auto transition-colors duration-300 border border-transparent dark:border-[#848484]/30"><code class="text-gray-900 dark:text-gray-100">${block.data.code}</code></pre>`;
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

            // Auto-expand parent section if the active item is a child (level > 2)
            if (item.level > 2) {
              const hierarchy = organizeTocHierarchy();
              const parent = hierarchy.find(h =>
                h.children?.some(child => child.id === item.id)
              );
              if (parent && !expandedSections.has(parent.id)) {
                setExpandedSections(prev => new Set(prev).add(parent.id));
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc, expandedSections]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toggleSection = (itemId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  // Organize TOC items hierarchically
  const organizeTocHierarchy = () => {
    const organized: Array<TocItem & { children?: TocItem[] }> = [];
    let currentParent: (TocItem & { children?: TocItem[] }) | null = null;

    toc.forEach(item => {
      if (item.level === 2) {
        // H2 is a parent
        currentParent = { ...item, children: [] };
        organized.push(currentParent);
      } else if (item.level > 2 && currentParent) {
        // H3, H4, etc. are children of the current H2
        currentParent.children!.push(item);
      } else if (item.level === 1) {
        // H1 stands alone
        organized.push({ ...item, children: [] });
        currentParent = null;
      }
    });

    return organized;
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
      <div className="min-h-screen bg-white dark:bg-[#000000] flex items-center justify-center transition-colors duration-300">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#000000] flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 font-heading">Blog post not found</h2>
          <button
            onClick={() => navigate('/blogs')}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
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
          font-family: 'Epilogue', system-ui, sans-serif;
          font-weight: 700;
        }
        .dark .blog-content h1, .dark .blog-content h2, .dark .blog-content h3,
        .dark .blog-content h4, .dark .blog-content h5, .dark .blog-content h6 {
          color: #ffffff;
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
        .dark .blog-content pre {
          background-color: #171717;
          border: 1px solid rgba(132, 132, 132, 0.3);
        }
        
        .blog-content code {
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
        }
        .dark .blog-content code {
          color: #f3f4f6;
        }
      `}</style>

      <div className="min-h-screen bg-white dark:bg-[#000000] transition-colors duration-300 font-sans">
        {/* Hero Section - Split Layout */}
        {/* Hero Section */}
        <div
          className="relative w-full h-[600px] pt-20  flex items-center justify-center bg-cover bg-center bg-no-repeat mb-12"
          style={{
            backgroundImage: `url('/redesign/blog-n-job-bg.webp')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {blog.Categories?.map((category) => (
                    <span
                      key={category.Id}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium transition-colors duration-300"
                    >
                      {category.Name}
                    </span>
                  ))}
                </div>

                <h1
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300 font-heading"
                >
                  {blog.Title}
                </h1>

                <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{formatDate(blog.PublishedAt || blog.CreatedAt)}</span>
                  </div>

                </div>

                {blog.SEO_MetaDescription && (
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {blog.SEO_MetaDescription}
                  </p>
                )}
              </div>

              {/* Right: Cover Image */}
              <div className="relative rounded-md">
                <img
                  src={blog.CoverImage}
                  alt={blog.Title}
                  className="w-full object-contain rounded-md"
                />
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
              <div className="space-y-8">
                {/* Author Card - Static (not sticky) */}
                <div className="p-4 bg-white dark:bg-[#171717] rounded-2xl  transition-colors duration-300 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 font-heading">
                    Author
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex-shrink-0 flex items-center justify-center text-white text-xl font-bold overflow-hidden shadow-md">
                      {blog.Author?.ProfileImage ? (
                        <img
                          src={blog.Author.ProfileImage}
                          alt={blog.Author.FullName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-lg leading-tight transition-colors duration-300">
                        {blog.Author?.FullName || 'AcceleratorX Team'}
                      </h4>
                    </div>
                  </div>
                  {blog.Author?.Bio && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed transition-colors duration-300">
                      {blog.Author.Bio}
                    </p>
                  )}
                </div>

                {/* Table of Contents - Sticky */}
                {toc.length > 0 && (
                  <div
                    ref={sidebarRef}
                    className={`hidden lg:block ${isFixed
                      ? 'fixed top-24 z-10'
                      : 'relative'
                      }`}
                    style={isFixed ? { width: `${sidebarWidth}px` } : {}}
                  >
                    <div className="p-6 bg-white dark:bg-[#171717] rounded-2xl transition-colors duration-300 shadow-sm">
                      <h3
                        className="text-xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 font-heading"
                      >
                        Table of Contents
                      </h3>
                      <nav className="space-y-1">
                        {organizeTocHierarchy().map((item) => (
                          <div key={item.id} className="mb-1">
                            {/* Parent Item (H1 or H2) */}
                            <div className="flex items-start group">
                              <button
                                onClick={() => scrollToSection(item.id)}
                                className={`flex-1 text-left py-1.5 pr-2 text-xs transition-colors duration-200 leading-snug ${activeSection === item.id
                                  ? 'text-gray-900 dark:text-white font-semibold'
                                  : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                  }`}
                                style={{
                                  fontSize: '0.95rem',
                                }}
                              >
                                {item.text}
                              </button>

                              {/* Toggle button for items with children */}
                              {item.children && item.children.length > 0 && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSection(item.id);
                                  }}
                                  className="mt-1 p-1 hover:bg-gray-200 dark:hover:bg-[#1f1f1f] rounded text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                  aria-label={expandedSections.has(item.id) ? 'Collapse' : 'Expand'}
                                >
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${expandedSections.has(item.id) ? 'rotate-180' : ''
                                      }`}
                                  />
                                </button>
                              )}
                            </div>

                            {/* Children Items (H3, H4, etc.) */}
                            {item.children && item.children.length > 0 && expandedSections.has(item.id) && (
                              <div className="ml-0 mt-1 space-y-1 pl-3 border-l-2 border-gray-200 dark:border-[#848484]/30 transition-colors duration-300">
                                {item.children.map((child) => (
                                  <button
                                    key={child.id}
                                    onClick={() => scrollToSection(child.id)}
                                    className={`block w-full text-left py-1 transition-colors duration-200 leading-snug ${activeSection === child.id
                                      ? 'text-gray-900 dark:text-white font-medium'
                                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                      }`}
                                    style={{
                                      fontSize: '0.875rem',
                                    }}
                                  >
                                    {child.text}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
