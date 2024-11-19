import React, { useEffect, useState } from "react";
import { ChevronLeft, Calendar, Clock, User, ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';

interface Blogs {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  content: string;
  date?: string;
  readTime?: string;
  author?: string;
}

function Blogs() {
  const [Blogss, setBlogss] = useState<Blogs[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlogs, setSelectedBlogs] = useState<Blogs | null>(null);

  useEffect(() => {
    const fetchBlogss = async () => {
      try {
        const mockBlogss: Blogs[] = [
          {
            id: 1,
            title: "Leveraging Data Analytics in Product Management",
            excerpt: "Discover how data analytics empowers product managers to make informed decisions, prioritize features, and deliver products that users love.",
            coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
            content: `# Leveraging Data Analytics in Product Management

In today's data-driven world, product managers must harness the power of analytics to make informed decisions and drive success. Let's explore how data analytics transforms product management.

## The Power of Data-Driven Decisions

### 1. Understanding User Behavior
- Track user interactions
- Analyze usage patterns
- Identify pain points

### 2. Feature Prioritization
- Impact assessment
- User demand analysis
- Resource optimization

### 3. Performance Metrics
- Conversion rates
- User engagement
- Revenue impact

## Implementation Strategy

1. **Data Collection**
   - Define KPIs
   - Set up tracking
   - Ensure data quality

2. **Analysis**
   - Pattern recognition
   - Trend analysis
   - Insight generation

3. **Action Plan**
   - Feature roadmap
   - Implementation timeline
   - Success metrics

> "Without data, you're just another person with an opinion." - W. Edwards Deming

## Best Practices

- Regular data reviews
- Cross-functional collaboration
- Continuous improvement
- Data-driven culture

Remember: Data should inform decisions, not make them. Balance quantitative insights with qualitative understanding for optimal results.`,
            date: "2024-03-15",
            readTime: "8 min",
            author: "Sarah Chen"
          },
          {
            id: 2,
            title: "The Future of AI in Enterprise",
            excerpt: "Explore how artificial intelligence is reshaping business operations and decision-making processes in enterprise environments.",
            coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
            content: "# The Future of AI in Enterprise\n\nArtificial Intelligence is transforming how enterprises operate...",
            date: "2024-03-14",
            readTime: "6 min",
            author: "Michael Torres"
          },
          {
            id: 3,
            title: "Building Scalable Cloud Architecture",
            excerpt: "Learn the essential principles and best practices for designing cloud systems that can grow with your business needs.",
            coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
            content: "# Building Scalable Cloud Architecture\n\nIn the modern digital landscape, scalability is crucial...",
            date: "2024-03-13",
            readTime: "10 min",
            author: "Alex Johnson"
          }
        ];
        
        setBlogss(mockBlogss);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Blogss:", error);
        setLoading(false);
      }
    };

    fetchBlogss();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="space-y-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-blue-400 animate-pulse">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  const BlogsPost = ({ Blogs, onBack }: { Blogs: Blogs; onBack: () => void }) => (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="relative h-[400px]">
        <img
          src={Blogs.coverImage}
          alt={Blogs.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          {Blogs.date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{Blogs.date}</span>
            </div>
          )}
          {Blogs.readTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{Blogs.readTime}</span>
            </div>
          )}
          {Blogs.author && (
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{Blogs.author}</span>
            </div>
          )}
        </div>
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{Blogs.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );

  if (selectedBlogs) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4">
        <BlogsPost Blogs={selectedBlogs} onBack={() => setSelectedBlogs(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Latest Insights
        </h1>
        <p className="text-blue-400 text-center mb-12 text-lg">
          Discover thought-provoking articles from industry experts
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Blogss.map((Blogs) => (
            <div
              key={Blogs.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={Blogs.coverImage}
                  alt={Blogs.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  {Blogs.date && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{Blogs.date}</span>
                    </div>
                  )}
                  {Blogs.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{Blogs.readTime}</span>
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  {Blogs.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{Blogs.excerpt}</p>
                <button
                  onClick={() => setSelectedBlogs(Blogs)}
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
}

export default Blogs;