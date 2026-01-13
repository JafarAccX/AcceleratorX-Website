import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { blogService } from '../../services/blogService';
import { BlogPost, BlogCategory } from '../../utils/types';

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const MotionLink = motion(Link);

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const fetchBlogs = useCallback(async () => {
    try {
      const params = {
        search: searchTerm || undefined,
        category: selectedCategory || undefined,
        limit: 20,
      };
      const fetchedBlogs = await blogService.getBlogs(params);
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error('📰 [BLOG LIST] Error fetching blogs:', error);
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, [fetchBlogs]);

  const fetchCategories = async () => {
    try {
      const fetchedCategories = await blogService.getBlogCategories();
      setCategories(fetchedCategories);
    } catch (error) {
      console.error('📰 [BLOG LIST] Error fetching categories:', error);
    }
  };

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug === selectedCategory ? '' : categorySlug);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center space-x-2">
        <motion.div
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Import Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@600&display=swap');`}
      </style>

      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat mb-12"
        style={{
          backgroundImage: `url('/redesign/blog-section/blog-hero.webp')`
        }}
      >
        <div className="max-w-[1300px] w-full px-6 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 pt-20">
          <div className="max-w-xl text-center md:text-left">
            <h1
              className="mb-4 text-[#1a1a1a]"
              style={{
                fontFamily: '"Cormorant Infant", serif',
                fontWeight: 600,
                fontSize: '68px',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              Everything you need,<br />in one place.
            </h1>
          </div>
          <div className="max-w-sm hidden md:block pt-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis nibh tristique augue sagittis, sit amet auctor neque ullamcorper. Pellentesque vel faucibus tellus.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6">

        {/* Header - "All Blogs" */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-8">All Blogs</h2>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleCategoryChange('')}
              className={`px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all ${selectedCategory === ''
                ? 'bg-black text-white border border-black'
                : 'bg-white text-gray-700 border border-[#9D9D9D] hover:border-gray-900'
                }`}
            >
              All Topics
            </button>
            {categories.map((category) => (
              <button
                key={category.Id}
                onClick={() => handleCategoryChange(category.Slug)}
                className={`px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all ${selectedCategory === category.Slug
                  ? 'bg-black text-white border border-black'
                  : 'bg-white text-gray-700 border border-[#9D9D9D] hover:border-gray-900'
                  }`}
              >
                {category.Name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog) => {

            console.log(blog);

            return (
              <MotionLink
                key={blog.Id}
                to={`/blogs/${blog.Slug}`}
                className="bg-white rounded-[20px] overflow-hidden group flex flex-col h-full hover:shadow-sm transition-shadow duration-300"
                variants={itemVariants}
              >
                {/* Card Image */}
                <div className="relative h-[240px] overflow-hidden p-4 pb-0">
                  <div className="w-full h-full rounded-[12px] overflow-hidden relative">
                    {blog.CoverImage ? (
                      <img
                        src={blog.CoverImage}
                        alt={blog.Title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-300 text-4xl">📝</span>
                      </div>
                    )}
                    {/* Category Tag Overlay if desired, or place below */}
                  </div>
                </div>


                {/* Card Content */}
                <div className="p-6 pt-4 flex flex-col flex-grow">

                  {/* Meta Row: Category & Date */}
                  <div className="flex items-center justify-between text-xs font-semibold tracking-wide uppercase mb-3">
                    <span className="text-blue-600">
                      {blog.Categories && blog.Categories.length > 0 ? blog.Categories[0].Name : 'Article'}
                    </span>
                    <span className="text-gray-500 font-medium normal-case">
                      {formatDate(blog.CreatedAt)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] leading-tight font-bold text-[#0F172A] mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {blog.Title}
                  </h3>



                  <div className="mt-auto pt-4 flex items-center gap-3">
                    {/* Author Avatar */}
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      {blog.Author?.ProfileImage ? (
                        <img src={blog.Author.ProfileImage} alt={blog.Author.FullName} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold">
                          {blog.Author?.FullName?.[0] || 'A'}
                        </div>
                      )}
                    </div>


                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#0F172A]">
                        {blog.Author?.FullName || 'AcceleratorX Team'}
                      </span>
                      <span className="text-xs text-gray-500">
                        Contributor
                      </span>
                    </div>
                  </div>

                </div>
              </MotionLink>
            )
          })}
        </motion.div>

        {blogs.length === 0 && !loading && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory(''); }}
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;