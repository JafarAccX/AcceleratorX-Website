




import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import EditorJSHTML from "editorjs-html";
import { OutputData } from "@editorjs/editorjs";
import { blogService } from "../../services/blogService";
import { BlogPost, BlogComment } from "../../utils/types";
import CommentThread from "./CommentThread";
import "./BlogContent.css";

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [commentForm, setCommentForm] = useState({
    authorName: "",
    authorEmail: "",
    content: "",
  });
  const [submittingComment, setSubmittingComment] = useState(false);
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyForm, setReplyForm] = useState({
    authorName: "",
    authorEmail: "",
    content: "",
  });
  const [submittingReply, setSubmittingReply] = useState(false);

  const loadUserData = useCallback(() => {
    try {
      const saved = localStorage.getItem("blogCommentUser");
      if (saved) {
        const userData = JSON.parse(saved);
        setCommentForm((p) => ({
          ...p,
          authorName: userData.authorName || "",
          authorEmail: userData.authorEmail || "",
        }));
        setReplyForm((p) => ({
          ...p,
          authorName: userData.authorName || "",
          authorEmail: userData.authorEmail || "",
        }));
      }

      const likedKey = `blogLikedComments_${slug}`;
      const savedLiked = localStorage.getItem(likedKey);
      if (savedLiked) {
        const likedArray = JSON.parse(savedLiked);
        setLikedComments(new Set(likedArray));
      }
    } catch (e) {
      console.error("Error loading user data", e);
    }
  }, [slug]);

  const saveLikedComments = (likedSet: Set<string>) => {
    try {
      const key = `blogLikedComments_${slug}`;
      localStorage.setItem(key, JSON.stringify(Array.from(likedSet)));
    } catch (e) {
      console.error("Error saving liked comments", e);
    }
  };

  const saveUserData = (authorName: string, authorEmail?: string) => {
    try {
      localStorage.setItem(
        "blogCommentUser",
        JSON.stringify({ authorName, authorEmail })
      );
    } catch (e) {
      console.error("Error saving user data", e);
    }
  };

  const incrementView = useCallback(async (postId: string) => {
    try {
      await blogService.createBlogView(postId);
    } catch (e) {
      console.error("Error incrementing view", e);
    }
  }, []);

  const fetchComments = async (postId: string) => {
    try {
      const data = await blogService.getBlogComments(postId);
      setComments(data);
    } catch (e) {
      console.error("Error fetching comments", e);
    }
  };

  const fetchBlog = useCallback(async () => {
    if (!slug) return;
    try {
      const data = await blogService.getBlogBySlug(slug);
      if (!data) {
        toast.error("Blog not found");
        return;
      }
      setBlog(data);
      setLikesCount(data.LikesCount);
      await incrementView(data.Id);
      await fetchComments(data.Id);
    } catch {
      toast.error("Failed to fetch blog");
    } finally {
      setLoading(false);
    }
  }, [slug, incrementView]);

  useEffect(() => {
    fetchBlog();
    loadUserData();
  }, [fetchBlog, loadUserData]);

  const handleLike = async () => {
    if (!blog) return;
    try {
      await blogService.createBlogLike(blog.Id);
      setLiked(true);
      setLikesCount((c) => c + 1);
    } catch {
      toast.error("Failed to like blog");
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blog || !commentForm.authorName.trim() || !commentForm.content.trim()) {
      toast.error("Fill required fields");
      return;
    }
    setSubmittingComment(true);
    try {
      await blogService.createBlogComment(
        blog.Id,
        commentForm.content,
        commentForm.authorName,
        commentForm.authorEmail || undefined
      );
      saveUserData(commentForm.authorName, commentForm.authorEmail);
      toast.success("Comment posted");
      setCommentForm({ authorName: "", authorEmail: "", content: "" });
      await fetchComments(blog.Id);
    } catch {
      toast.error("Failed to post comment");
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleCommentLike = async (commentId: string) => {
    if (likedComments.has(commentId)) {
      toast("You already liked this");
      return;
    }
    try {
      await blogService.createBlogCommentLike(commentId);
      const newSet = new Set(likedComments).add(commentId);
      setLikedComments(newSet);
      saveLikedComments(newSet);
      setComments((prev) =>
        prev.map((c) =>
          c.Id === commentId ? { ...c, LikesCount: c.LikesCount + 1 } : c
        )
      );
    } catch {
      toast.error("Failed to like comment");
    }
  };

  const handleReplyClick = useCallback(
    (commentId: string | null) => {
      if (replyingTo === commentId) {
        setReplyingTo(null);
      } else {
        const saved = localStorage.getItem("blogCommentUser");
        let authorName = "";
        let authorEmail = "";
        if (saved) {
          try {
            const u = JSON.parse(saved);
            authorName = u.authorName || "";
            authorEmail = u.authorEmail || "";
          } catch (error) {
            console.error('Error parsing saved user data:', error);
          }
        }
        setReplyForm({ authorName, authorEmail, content: "" });
        setReplyingTo(commentId);
      }
    },
    [replyingTo]
  );

  const handleReplyFormChange = useCallback(
    (field: string, value: string) => {
      setReplyForm((p) => ({ ...p, [field]: value }));
    },
    []
  );

  const handleReplySubmit = async (
    e: React.FormEvent,
    parentCommentId: string | null
  ) => {
    e.preventDefault();
    if (!blog || !replyForm.authorName.trim() || !replyForm.content.trim()) {
      toast.error("Fill required fields");
      return;
    }
    setSubmittingReply(true);
    try {
      await blogService.createBlogComment(
        blog.Id,
        replyForm.content,
        replyForm.authorName,
        replyForm.authorEmail || undefined,
        parentCommentId || undefined
      );
      saveUserData(replyForm.authorName, replyForm.authorEmail);
      toast.success("Reply posted");
      setReplyForm({ authorName: "", authorEmail: "", content: "" });
      setReplyingTo(null);
      await fetchComments(blog.Id);
    } catch {
      toast.error("Failed to post reply");
    } finally {
      setSubmittingReply(false);
    }
  };

  const renderContent = (content: Record<string, unknown> | string | null | undefined): string => {
    try {
      if (typeof content === "string") return content;
      if (content && typeof content === "object" && "blocks" in content) {
        const parser = EditorJSHTML();
        const parsed = parser.parse(content as unknown as OutputData);
        const html = Array.isArray(parsed) ? parsed.join("") : parsed;
        return html.replace(
          /<a /g,
          '<a target="_blank" rel="noopener noreferrer" '
        );
      }
      return "<p>No content available</p>";
    } catch {
      return "<p>Error rendering content</p>";
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-blue-500 rounded-full"></div>
      </div>
    );

  if (!blog)
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <Link to="/blogs" className="text-blue-400 hover:text-blue-300">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {blog.CoverImage && (
          <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
            <img
              src={blog.CoverImage}
              alt={blog.Title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mb-4">{blog.Title}</h1>

        <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            {blog.Author?.ProfileImage && (
              <img
                src={blog.Author.ProfileImage}
                alt={blog.Author.FullName}
                className="w-10 h-10 rounded-full"
              />
            )}
            <div className="flex gap-4 items-center">
              <p className="font-medium">{blog.Author?.FullName}</p>
              <p className="text-gray-400 text-sm">
                {new Date(blog.CreatedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>{blog.ViewsCount}</span>
            </div>
            <button
              onClick={handleLike}
              disabled={liked}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                liked
                  ? "bg-red-600 text-white"
                  : "bg-gray-800/20 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill={liked ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>{likesCount}</span>
            </button>
          </div>
        </div>

        <div
          className="prose prose-lg prose-invert max-w-none BlogContent"
          dangerouslySetInnerHTML={{ __html: renderContent(blog.Content) }}
        />

        {/* Comments */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          

          {/* Comment Form */}
          <form
            onSubmit={handleCommentSubmit}
            className="mt-6  rounded-2xl p-6 shadow-lg"
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              Leave a Comment
            </h4>

            <div className="space-y-4">
              {!localStorage.getItem("blogCommentUser") && (
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-400 mb-1">Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={commentForm.authorName}
                      onChange={(e) =>
                        setCommentForm((p) => ({
                          ...p,
                          authorName: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2.5 bg-gray-800/20 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm text-gray-400 mb-1">Email (optional)</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={commentForm.authorEmail}
                      onChange={(e) =>
                        setCommentForm((p) => ({
                          ...p,
                          authorEmail: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2.5 bg-gray-800/20 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm text-gray-400 mb-1">Comment</label>
                <textarea
                  rows={4}
                  placeholder="Write your comment..."
                  value={commentForm.content}
                  onChange={(e) =>
                    setCommentForm((p) => ({ ...p, content: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 bg-gray-800/20 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={submittingComment}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {submittingComment ? "Posting..." : "Post Comment"}
                </button>
              </div>
            </div>
          </form>


          <h3 className="text-2xl font-semibold mb-6 text-white">
            Comments ({comments.length})
          </h3>

          {/* Threaded Comments */}
          <div className="space-y-6">
            {comments.length === 0 ? (
              <p className="text-gray-400 text-center py-8">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              comments.map((comment) => (
                <CommentThread
                  key={comment.Id}
                  comment={comment}
                  onReply={handleReplyClick}
                  onLike={handleCommentLike}
                  replyingTo={replyingTo}
                  replyForm={replyForm}
                  onReplyFormChange={handleReplyFormChange}
                  onReplySubmit={handleReplySubmit}
                  submittingReply={submittingReply}
                  likedComments={likedComments}
                />
              ))
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
