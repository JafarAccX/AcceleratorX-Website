import { supabase } from "../utils/supabase";
import { Blog } from "../utils/types";


const transformBlogForDB = (blog: Partial<Blog>) => ({
  title: blog.title,
  excerpt: blog.excerpt,
  cover_image: blog.cover_image,
  content: blog.content,
  author: blog.author,
  read_time: blog.read_time,
  date: blog.date
});

export const blogService = {
  async getBlogs(): Promise<Blog[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getBlogById(id: number): Promise<Blog | null> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async createBlog(blog: Omit<Blog, 'id'>): Promise<Blog> {
    const { data, error } = await supabase
      .from('blogs')
      .insert([transformBlogForDB(blog)])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateBlog(id: number, blog: Partial<Blog>): Promise<Blog> {
    const { data, error } = await supabase
      .from('blogs')
      .update(transformBlogForDB(blog))
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteBlog(id: number): Promise<void> {
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};