import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { H as Helmet, L as Link } from "../entry-server.js";
import toast from "react-hot-toast";
import EditorJSHTML from "editorjs-html";
import { b as blogService } from "./blogService-DrKJlbCg.js";
import { useParams } from "react-router";
import "react-dom/server";
import "@remix-run/router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "lucide-react";
import "react-dom";
import "react-icons/pi";
import "framer-motion";
const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const incrementView = useCallback(async (postId) => {
    try {
      await blogService.createBlogView(postId);
    } catch (e) {
      console.error("Error incrementing view", e);
    }
  }, []);
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
    } catch {
      toast.error("Failed to fetch blog");
    } finally {
      setLoading(false);
    }
  }, [slug, incrementView]);
  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);
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
  const renderContent = (content) => {
    try {
      if (typeof content === "string") return content;
      if (content && typeof content === "object" && "blocks" in content) {
        const parser = EditorJSHTML();
        const parsed = parser.parse(content);
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
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-black flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "animate-spin h-12 w-12 border-t-2 border-b-2 border-blue-500 rounded-full" }) });
  if (!blog)
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black text-white flex items-center justify-center", children: [
      /* @__PURE__ */ jsxs(Helmet, { children: [
        /* @__PURE__ */ jsx("title", { children: "Blog Not Found | AcceleratorX" }),
        /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: "Blog Not Found" }),
        /* @__PURE__ */ jsx(Link, { to: "/blogs", className: "text-blue-400 hover:text-blue-300", children: "← Back to Blogs" })
      ] })
    ] });
  const metaTitle = blog.SEO_MetaTitle || blog.Title || "Blog Post | AcceleratorX";
  const metaDescription = blog.SEO_MetaDescription || blog.Excerpt || "Read this insightful blog post on AcceleratorX.";
  const canonicalUrl = `https://www.acceleratorx.org/blogs/${blog.Slug}`;
  const ogImage = blog.CoverImage || "https://www.acceleratorx.org/companylogo-new.webp";
  const publishedDate = blog.PublishedAt ? new Date(blog.PublishedAt).toISOString() : new Date(blog.CreatedAt).toISOString();
  const modifiedDate = blog.UpdatedAt ? new Date(blog.UpdatedAt).toISOString() : publishedDate;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: metaTitle }),
      /* @__PURE__ */ jsx("meta", { name: "title", content: metaTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: metaDescription }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonicalUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: metaTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: metaDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "AcceleratorX" }),
      /* @__PURE__ */ jsx("meta", { property: "article:published_time", content: publishedDate }),
      /* @__PURE__ */ jsx("meta", { property: "article:modified_time", content: modifiedDate }),
      blog.Author?.FullName && /* @__PURE__ */ jsx("meta", { property: "article:author", content: blog.Author.FullName }),
      blog.Categories && blog.Categories.length > 0 && /* @__PURE__ */ jsx("meta", { property: "article:section", content: blog.Categories[0].Name }),
      blog.Tags && blog.Tags.map((tag) => /* @__PURE__ */ jsx("meta", { property: "article:tag", content: tag.Name }, tag.Id)),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: canonicalUrl }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: metaTitle }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: metaDescription }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: ogImage }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: blog.Author?.FullName || "AcceleratorX" }),
      blog.Tags && blog.Tags.length > 0 && /* @__PURE__ */ jsx("meta", { name: "keywords", content: blog.Tags.map((tag) => tag.Name).join(", ") }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.Title,
        "description": metaDescription,
        "image": ogImage,
        "datePublished": publishedDate,
        "dateModified": modifiedDate,
        "author": {
          "@type": "Person",
          "name": blog.Author?.FullName || "AcceleratorX",
          ...blog.Author?.ProfileImage && { "image": blog.Author.ProfileImage },
          ...blog.Author?.Email && { "email": blog.Author.Email }
        },
        "publisher": {
          "@type": "Organization",
          "name": "AcceleratorX",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.acceleratorx.org/companylogo-new.webp"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        ...blog.Categories && blog.Categories.length > 0 && {
          "articleSection": blog.Categories.map((cat) => cat.Name)
        },
        ...blog.Tags && blog.Tags.length > 0 && {
          "keywords": blog.Tags.map((tag) => tag.Name).join(", ")
        }
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-black text-white pt-20", children: /* @__PURE__ */ jsxs("article", { className: "max-w-4xl mx-auto px-4 py-12", children: [
      blog.CoverImage && /* @__PURE__ */ jsx("div", { className: "relative h-[400px] mb-8 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: blog.CoverImage,
          alt: blog.Title,
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: blog.Title }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8 pb-8 border-b border-gray-800", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          blog.Author?.ProfileImage && /* @__PURE__ */ jsx(
            "img",
            {
              src: blog.Author.ProfileImage,
              alt: blog.Author.FullName,
              className: "w-10 h-10 rounded-full"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: blog.Author?.FullName }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: new Date(blog.CreatedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-gray-400", children: [
            /* @__PURE__ */ jsxs(
              "svg",
              {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { children: blog.ViewsCount })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleLike,
              disabled: liked,
              className: `flex items-center space-x-2 px-4 py-2 rounded-lg ${liked ? "bg-red-600 text-white" : "bg-gray-800/20 text-gray-300 hover:bg-gray-700"}`,
              children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-5 h-5",
                    fill: liked ? "currentColor" : "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: likesCount })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "prose prose-lg prose-invert max-w-none BlogContent",
          dangerouslySetInnerHTML: { __html: renderContent(blog.Content) }
        }
      )
    ] }) })
  ] });
};
export {
  BlogDetail as default
};
