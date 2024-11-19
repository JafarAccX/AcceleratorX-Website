import React, { useEffect, useState } from "react";
import { ChevronLeft, Calendar, Clock, User } from "lucide-react";
import ReactMarkdown from 'react-markdown';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  content: string;
  date?: string;
  readTime?: string;
  author?: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Since we're not using actual integration, let's create mock data
        const mockBlogs: Blog[] = [
          {
            id: 1,
            title: "Leveraging Data Analytics in Product Management",
            excerpt: "Discover how data analytics empowers product managers to make informed decisions, prioritize features, and deliver products that users love.",
            coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3",
            content: `
# Leveraging Data Analytics in Product Management

Data analytics has revolutionized the way we approach product management in the modern digital landscape. This comprehensive guide explores how data-driven decision-making can transform your product strategy and lead to better outcomes.

## Understanding the Power of Data Analytics

In today's competitive market, intuition alone isn't enough. Data analytics provides the concrete insights needed to make informed decisions and drive product success. Let's explore how this transformation happens.

### Why Data Analytics Matters

Data analytics empowers product managers in several crucial ways:

* **Informed Decision Making**
  - Eliminates guesswork from product strategy
  - Provides concrete evidence for feature prioritization
  - Enables accurate measurement of success

* **User Understanding**
  - Reveals actual user behavior patterns
  - Identifies pain points and opportunities
  - Tracks user journey and engagement

* **Strategic Planning**
  - Guides roadmap development
  - Informs resource allocation
  - Supports stakeholder communication

## Key Metrics That Drive Success

Understanding and tracking the right metrics is crucial for product success. Here are the essential metrics every product manager should monitor:

### 1. User Engagement Metrics

* **Daily Active Users (DAU)**
  - Measures daily product engagement
  - Indicates product stickiness
  - Helps identify usage patterns

* **Session Duration**
  - Shows user engagement depth
  - Identifies potential usability issues
  - Tracks feature effectiveness

### 2. Business Performance Indicators

* **Conversion Rates**
  - Measures user journey effectiveness
  - Identifies optimization opportunities
  - Tracks business goal achievement

* **Customer Lifetime Value (CLV)**
  - Projects long-term user value
  - Guides acquisition strategy
  - Informs retention efforts

## Implementing Data-Driven Strategies

Success in data-driven product management requires a systematic approach. Here's how to implement effective strategies:

### 1. Data Collection Framework

1. **Define Clear Objectives**
   - Set specific, measurable goals
   - Identify key performance indicators
   - Establish measurement timeframes

2. **Choose the Right Tools**
   - Select appropriate analytics platforms
   - Implement tracking mechanisms
   - Ensure data accuracy and reliability

### 2. Analysis and Action

1. **Regular Data Review**
   - Schedule periodic analysis sessions
   - Look for trends and patterns
   - Document key findings

2. **Action Planning**
   - Develop data-backed strategies
   - Set clear implementation timelines
   - Monitor results and adjust

## Best Practices for Success

To maximize the benefits of data analytics in product management:

* **Stay Focused on Objectives**
  - Align metrics with business goals
  - Avoid vanity metrics
  - Maintain clear success criteria

* **Ensure Data Quality**
  - Implement proper tracking
  - Validate data accuracy
  - Clean and maintain datasets

* **Foster Data Culture**
  - Share insights across teams
  - Encourage data-driven decisions
  - Provide training and support

## Tools and Resources

Essential tools for data-driven product management:

1. **Analytics Platforms**
   - Google Analytics
   - Mixpanel
   - Amplitude

2. **Visualization Tools**
   - Tableau
   - Power BI
   - Data Studio

## Looking Ahead

The future of product management lies in leveraging data analytics effectively. As technology evolves, the ability to harness data insights becomes increasingly crucial for product success.

> "The goal is to turn data into information, and information into insight." - Carly Fiorina

---

*Want to learn more about data-driven product management? Explore our other resources or reach out to our team for personalized guidance.*`,
            date: "2023-11-15",
            readTime: "8 min",
            author: "Sarah Johnson"
          },
          {
            id: 2,
            title: "Machine Learning Fundamentals",
            excerpt: "Explore the basic concepts of machine learning and its applications in real-world scenarios.",
            coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3",
            content: "# Machine Learning Fundamentals\n\nMachine learning is transforming industries across the globe...",
            date: "2024-01-10",
            readTime: "8 min read",
            author: "Jane Smith"
          },
          {
            id: 3,
            title: "The Future of AI",
            excerpt: "Discover what the future holds for artificial intelligence and its impact on society.",
            coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
            content: "# The Future of AI\n\nArtificial Intelligence is rapidly evolving and shaping our future...",
            date: "2024-01-05",
            readTime: "6 min read",
            author: "Alex Johnson"
          },
        ];
        
        setBlogs(mockBlogs);
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
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-blue-600/20 rounded"></div>
        </div>
      </div>
    );
  }

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-black py-24">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={handleClose}
            className="flex items-center text-white hover:text-blue-400 mb-6 group transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Blogs
          </button>

          <article className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            <img
              src={selectedBlog.coverImage}
              alt={selectedBlog.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedBlog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedBlog.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{selectedBlog.author}</span>
                </div>
              </div>
              <h1 
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent" 
                dangerouslySetInnerHTML={{ __html: selectedBlog.title }}
              />
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
                <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-4 text-center">Latest Blog Posts</h1>
        <p className="text-blue-400 text-center mb-12 text-lg">Discover insights and knowledge from our experts</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <h2 
                  className="text-xl font-bold mb-3 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent"
                  dangerouslySetInnerHTML={{ __html: blog.title }}
                />
                <div 
                  className="text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                />
                <button
                  onClick={() => handleReadMore(blog)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  Read More
                  <ChevronLeft className="w-4 h-4 ml-1 rotate-180" />
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
