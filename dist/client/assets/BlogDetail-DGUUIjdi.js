import { g as getDefaultExportFromCjs, j as jsxRuntimeExports, e as useParams, r as reactExports, c as _t, H as Helmet, L as Link } from "./main-Bmt1QOda.js";
import { b as blogService } from "./blogService-CgGOt7FG.js";
var edjsHTML_node;
var hasRequiredEdjsHTML_node;
function requireEdjsHTML_node() {
  if (hasRequiredEdjsHTML_node) return edjsHTML_node;
  hasRequiredEdjsHTML_node = 1;
  var e = { code: ({ data: e2 }) => `<pre><code>${e2.code}</code></pre>`, embed: ({ data: e2 }) => {
    const t = e2.service;
    return "vimeo" === t ? `<iframe src="${e2.embed}" height="${e2.height}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>` : "youtube" === t ? `<iframe width="${e2.width}" height="${e2.height}" src="${e2.embed}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : (console.error("[editorjs-html]: Only Youtube & Vimeo embeds are available by default. Write your own embed parser for other options."), "");
  }, header: ({ data: e2 }) => `<h${e2.level}>${e2.text}</h${e2.level}>`, image: ({ data: e2 }) => {
    const t = e2.caption ? e2.caption : "Image";
    return `<img src="${e2?.file?.url || e2?.url}" alt="${t}" />`;
  }, list: ({ data: e2 }) => {
    const t = "unordered" === e2.style ? "ul" : "ol", r = (e3, t2) => {
      const o = e3.map(((e4) => {
        if (!e4.content && !e4.items) return `<li>${e4}</li>`;
        let o2 = "";
        return e4.items?.length && (o2 = r(e4.items, t2)), e4.content ? `<li>${e4.content}${o2}</li>` : void 0;
      }));
      return `<${t2}>${o.join("")}</${t2}>`;
    };
    return r(e2.items, t);
  }, paragraph: ({ data: e2 }) => {
    const t = e2.alignment || e2.align;
    return t ? `<p style="text-align:${t}"> ${e2.text} </p>` : `<p>${e2.text}</p>`;
  }, quote: ({ data: e2 }) => `<blockquote>${e2.text}</blockquote> - ${e2.caption}`, delimiter: ({ data: e2 }) => "<br/>" };
  edjsHTML_node = (t = {}, r = { strict: false }) => {
    const o = { ...e, ...t };
    return { parse: (e2) => (({ blocks: e3 }, t2, r2) => e3.reduce(((e4, o2) => {
      if (o2.type in t2) return e4 + t2[o2.type](o2);
      const i = `[editorjs-html]: Parser function for ${o2.type} does not exist`;
      if (r2.strict) throw new Error(i);
      return console.error(i), e4;
    }), ""))(e2, o, r), parseBlock: (e2) => ((e3, t2, r2) => {
      if (e3.type in t2) return t2[e3.type](e3);
      const o2 = `[editorjs-html]: Parser function for ${e3.type} does not exist`;
      if (r2.strict) throw new Error(o2);
      console.error(o2);
    })(e2, o, r) };
  };
  return edjsHTML_node;
}
var edjsHTML_nodeExports = requireEdjsHTML_node();
const EditorJSHTML = /* @__PURE__ */ getDefaultExportFromCjs(edjsHTML_nodeExports);
const Comment = ({
  comment,
  depth = 0,
  onReply,
  onLike,
  replyingTo,
  replyForm,
  onReplyFormChange,
  onReplySubmit,
  submittingReply,
  likedComments
}) => {
  const isMaxDepth = depth >= 3;
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative ${depth > 0 ? "ml-4 pl-4 border-l border-gray-700" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-white text-sm", children: comment.AuthorName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: formatDate(comment.CreatedAt) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-sm mt-2 whitespace-pre-wrap", children: comment.Content }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mt-2 space-x-3 text-xs text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => onLike(comment.Id),
                className: `flex items-center space-x-1 hover:text-red-400 transition ${likedComments.has(comment.Id) ? "text-red-500" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: likedComments.has(comment.Id) ? "currentColor" : "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: comment.LikesCount || 0 })
                ]
              }
            ),
            !isMaxDepth && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onReply(comment.Id),
                className: "hover:text-blue-400",
                children: "Reply"
              }
            )
          ] })
        ] }),
        replyingTo === comment.Id && !isMaxDepth && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: (e) => onReplySubmit?.(e, comment.Id),
            className: "mt-3 ml-6 border-l border-gray-700 pl-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 3,
                  value: replyForm?.content || "",
                  onChange: (e) => onReplyFormChange?.("content", e.target.value),
                  placeholder: "Write your reply...",
                  className: "w-full px-3 py-2 bg-gray-800/20 border border-gray-600 rounded-md \n                       text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mt-2 space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: submittingReply,
                    className: "px-3 py-1.5 bg-blue-600 text-white rounded-md text-xs hover:bg-blue-700",
                    children: submittingReply ? "Posting..." : "Reply"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => onReply(null),
                    className: "px-3 py-1.5 bg-gray-700 text-white rounded-md text-xs hover:bg-gray-600",
                    children: "Cancel"
                  }
                )
              ] })
            ]
          }
        ),
        comment.Replies && comment.Replies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4 border-l border-gray-800 pl-4 space-y-2", children: comment.Replies.map((reply) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Comment,
          {
            comment: reply,
            depth: depth + 1,
            onReply,
            onLike,
            replyingTo,
            replyForm,
            onReplyFormChange,
            onReplySubmit,
            submittingReply,
            likedComments
          },
          reply.Id
        )) })
      ]
    }
  );
};
const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [liked, setLiked] = reactExports.useState(false);
  const [likesCount, setLikesCount] = reactExports.useState(0);
  const [comments, setComments] = reactExports.useState([]);
  const [commentForm, setCommentForm] = reactExports.useState({
    authorName: "",
    authorEmail: "",
    content: ""
  });
  const [submittingComment, setSubmittingComment] = reactExports.useState(false);
  const [likedComments, setLikedComments] = reactExports.useState(/* @__PURE__ */ new Set());
  const [replyingTo, setReplyingTo] = reactExports.useState(null);
  const [replyForm, setReplyForm] = reactExports.useState({
    authorName: "",
    authorEmail: "",
    content: ""
  });
  const [submittingReply, setSubmittingReply] = reactExports.useState(false);
  const loadUserData = reactExports.useCallback(() => {
    try {
      const saved = localStorage.getItem("blogCommentUser");
      if (saved) {
        const userData = JSON.parse(saved);
        setCommentForm((p) => ({
          ...p,
          authorName: userData.authorName || "",
          authorEmail: userData.authorEmail || ""
        }));
        setReplyForm((p) => ({
          ...p,
          authorName: userData.authorName || "",
          authorEmail: userData.authorEmail || ""
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
  const saveLikedComments = (likedSet) => {
    try {
      const key = `blogLikedComments_${slug}`;
      localStorage.setItem(key, JSON.stringify(Array.from(likedSet)));
    } catch (e) {
      console.error("Error saving liked comments", e);
    }
  };
  const saveUserData = (authorName, authorEmail) => {
    try {
      localStorage.setItem(
        "blogCommentUser",
        JSON.stringify({ authorName, authorEmail })
      );
    } catch (e) {
      console.error("Error saving user data", e);
    }
  };
  const incrementView = reactExports.useCallback(async (postId) => {
    try {
      await blogService.createBlogView(postId);
    } catch (e) {
      console.error("Error incrementing view", e);
    }
  }, []);
  const fetchComments = async (postId) => {
    try {
      const data = await blogService.getBlogComments(postId);
      setComments(data);
    } catch (e) {
      console.error("Error fetching comments", e);
    }
  };
  const fetchBlog = reactExports.useCallback(async () => {
    if (!slug) return;
    try {
      const data = await blogService.getBlogBySlug(slug);
      if (!data) {
        _t.error("Blog not found");
        return;
      }
      setBlog(data);
      setLikesCount(data.LikesCount);
      await incrementView(data.Id);
      await fetchComments(data.Id);
    } catch {
      _t.error("Failed to fetch blog");
    } finally {
      setLoading(false);
    }
  }, [slug, incrementView]);
  reactExports.useEffect(() => {
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
      _t.error("Failed to like blog");
    }
  };
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!blog || !commentForm.authorName.trim() || !commentForm.content.trim()) {
      _t.error("Fill required fields");
      return;
    }
    setSubmittingComment(true);
    try {
      await blogService.createBlogComment(
        blog.Id,
        commentForm.content,
        commentForm.authorName,
        commentForm.authorEmail || void 0
      );
      saveUserData(commentForm.authorName, commentForm.authorEmail);
      _t.success("Comment posted");
      setCommentForm({ authorName: "", authorEmail: "", content: "" });
      await fetchComments(blog.Id);
    } catch {
      _t.error("Failed to post comment");
    } finally {
      setSubmittingComment(false);
    }
  };
  const handleCommentLike = async (commentId) => {
    if (likedComments.has(commentId)) {
      _t("You already liked this");
      return;
    }
    try {
      await blogService.createBlogCommentLike(commentId);
      const newSet = new Set(likedComments).add(commentId);
      setLikedComments(newSet);
      saveLikedComments(newSet);
      setComments(
        (prev) => prev.map(
          (c) => c.Id === commentId ? { ...c, LikesCount: c.LikesCount + 1 } : c
        )
      );
    } catch {
      _t.error("Failed to like comment");
    }
  };
  const handleReplyClick = reactExports.useCallback(
    (commentId) => {
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
            console.error("Error parsing saved user data:", error);
          }
        }
        setReplyForm({ authorName, authorEmail, content: "" });
        setReplyingTo(commentId);
      }
    },
    [replyingTo]
  );
  const handleReplyFormChange = reactExports.useCallback(
    (field, value) => {
      setReplyForm((p) => ({ ...p, [field]: value }));
    },
    []
  );
  const handleReplySubmit = async (e, parentCommentId) => {
    e.preventDefault();
    if (!blog || !replyForm.authorName.trim() || !replyForm.content.trim()) {
      _t.error("Fill required fields");
      return;
    }
    setSubmittingReply(true);
    try {
      await blogService.createBlogComment(
        blog.Id,
        replyForm.content,
        replyForm.authorName,
        replyForm.authorEmail || void 0,
        parentCommentId || void 0
      );
      saveUserData(replyForm.authorName, replyForm.authorEmail);
      _t.success("Reply posted");
      setReplyForm({ authorName: "", authorEmail: "", content: "" });
      setReplyingTo(null);
      await fetchComments(blog.Id);
    } catch {
      _t.error("Failed to post reply");
    } finally {
      setSubmittingReply(false);
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-black flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin h-12 w-12 border-t-2 border-b-2 border-blue-500 rounded-full" }) });
  if (!blog)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-black text-white flex items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Blog Not Found | AcceleratorX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "robots", content: "noindex, nofollow" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-4", children: "Blog Not Found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blogs", className: "text-blue-400 hover:text-blue-300", children: "← Back to Blogs" })
      ] })
    ] });
  const metaTitle = blog.SEO_MetaTitle || blog.Title || "Blog Post | AcceleratorX";
  const metaDescription = blog.SEO_MetaDescription || blog.Excerpt || "Read this insightful blog post on AcceleratorX.";
  const canonicalUrl = `https://www.acceleratorx.org/blogs/${blog.Slug}`;
  const ogImage = blog.CoverImage || "https://www.acceleratorx.org/companylogo-new.webp";
  const publishedDate = blog.PublishedAt ? new Date(blog.PublishedAt).toISOString() : new Date(blog.CreatedAt).toISOString();
  const modifiedDate = blog.UpdatedAt ? new Date(blog.UpdatedAt).toISOString() : publishedDate;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metaTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "title", content: metaTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: metaDescription }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: canonicalUrl }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: canonicalUrl }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: metaTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: metaDescription }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image", content: ogImage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:site_name", content: "AcceleratorX" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "article:published_time", content: publishedDate }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "article:modified_time", content: modifiedDate }),
      blog.Author?.FullName && /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "article:author", content: blog.Author.FullName }),
      blog.Categories && blog.Categories.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "article:section", content: blog.Categories[0].Name }),
      blog.Tags && blog.Tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "article:tag", content: tag.Name }, tag.Id)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "twitter:url", content: canonicalUrl }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "twitter:title", content: metaTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "twitter:description", content: metaDescription }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "twitter:image", content: ogImage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "author", content: blog.Author?.FullName || "AcceleratorX" }),
      blog.Tags && blog.Tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: blog.Tags.map((tag) => tag.Name).join(", ") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-black text-white pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "max-w-4xl mx-auto px-4 py-12", children: [
      blog.CoverImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[400px] mb-8 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: blog.CoverImage,
          alt: blog.Title,
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-4", children: blog.Title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8 pb-8 border-b border-gray-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
          blog.Author?.ProfileImage && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: blog.Author.ProfileImage,
              alt: blog.Author.FullName,
              className: "w-10 h-10 rounded-full"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: blog.Author?.FullName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: new Date(blog.CreatedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: blog.ViewsCount })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleLike,
              disabled: liked,
              className: `flex items-center space-x-2 px-4 py-2 rounded-lg ${liked ? "bg-red-600 text-white" : "bg-gray-800/20 text-gray-300 hover:bg-gray-700"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-5 h-5",
                    fill: liked ? "currentColor" : "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: likesCount })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "prose prose-lg prose-invert max-w-none BlogContent",
          dangerouslySetInnerHTML: { __html: renderContent(blog.Content) }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-8 border-t border-gray-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleCommentSubmit,
            className: "mt-6  rounded-2xl p-6 shadow-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-4 text-white", children: "Leave a Comment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                !localStorage.getItem("blogCommentUser") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-gray-400 mb-1", children: "Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Enter your name",
                        value: commentForm.authorName,
                        onChange: (e) => setCommentForm((p) => ({
                          ...p,
                          authorName: e.target.value
                        })),
                        className: "w-full px-4 py-2.5 bg-gray-800/20 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:outline-none",
                        required: true
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-gray-400 mb-1", children: "Email (optional)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "email",
                        placeholder: "Enter your email",
                        value: commentForm.authorEmail,
                        onChange: (e) => setCommentForm((p) => ({
                          ...p,
                          authorEmail: e.target.value
                        })),
                        className: "w-full px-4 py-2.5 bg-gray-800/20 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-gray-400 mb-1", children: "Comment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      rows: 4,
                      placeholder: "Write your comment...",
                      value: commentForm.content,
                      onChange: (e) => setCommentForm((p) => ({ ...p, content: e.target.value })),
                      className: "w-full px-4 py-2.5 bg-gray-800/20 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:outline-none",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: submittingComment,
                    className: "px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                    children: submittingComment ? "Posting..." : "Post Comment"
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-semibold mb-6 text-white", children: [
          "Comments (",
          comments.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: comments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-center py-8", children: "No comments yet. Be the first to comment!" }) : comments.map((comment) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Comment,
          {
            comment,
            onReply: handleReplyClick,
            onLike: handleCommentLike,
            replyingTo,
            replyForm,
            onReplyFormChange: handleReplyFormChange,
            onReplySubmit: handleReplySubmit,
            submittingReply,
            likedComments
          },
          comment.Id
        )) })
      ] })
    ] }) })
  ] });
};
export {
  BlogDetail as default
};
