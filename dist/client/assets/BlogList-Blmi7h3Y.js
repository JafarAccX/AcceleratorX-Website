import { r as reactExports, c as _t, j as jsxRuntimeExports, L as Link } from "./main-CGjpSgqs.js";
import { b as blogService } from "./blogService-DrKJlbCg.js";
const BlogList = () => {
  const [blogs, setBlogs] = reactExports.useState([]);
  const [categories, setCategories] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("");
  const fetchBlogs = reactExports.useCallback(async () => {
    try {
      console.log("📰 [BLOG LIST] Fetching blogs with filters:", { searchTerm, selectedCategory });
      const params = {
        search: searchTerm || void 0,
        category: selectedCategory || void 0,
        limit: 20
      };
      const fetchedBlogs = await blogService.getBlogs(params);
      console.log("📰 [BLOG LIST] Fetched blogs:", fetchedBlogs.length);
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("📰 [BLOG LIST] Error fetching blogs:", error);
      _t.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  }, [searchTerm, selectedCategory]);
  reactExports.useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, [fetchBlogs]);
  const fetchCategories = async () => {
    try {
      const fetchedCategories = await blogService.getBlogCategories();
      setCategories(fetchedCategories);
    } catch (error) {
      console.error("📰 [BLOG LIST] Error fetching categories:", error);
    }
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleCategoryChange = (categorySlug) => {
    setSelectedCategory(categorySlug === selectedCategory ? "" : categorySlug);
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-black flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12  border-blue-500" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-black text-white pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-4", children: "Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: "Discover insights and stories from our team" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row gap-4 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: "Search blogs...",
          value: searchTerm,
          onChange: handleSearchChange,
          className: "flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleCategoryChange(""),
            className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === "" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`,
            children: "All"
          }
        ),
        categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleCategoryChange(category.Slug),
            className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.Slug ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`,
            children: category.Name
          },
          category.Id
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: blogs.map((blog) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: `/blogs/${blog.Slug}`,
        className: "bg-gray-900 rounded-xl overflow-hidden shadow-lg group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-48", children: blog.CoverImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: blog.CoverImage,
              alt: blog.Title,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-4xl", children: "📝" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2 line-clamp-2", children: blog.Title }),
            blog.Excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-4 line-clamp-3", children: blog.Excerpt }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: blog.Author?.FullName || "Anonymous" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(blog.CreatedAt) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mt-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4 mr-1", fill: "currentColor", viewBox: "0 0 20 20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", clipRule: "evenodd" })
                ] }),
                blog.ViewsCount
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 mr-1", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z", clipRule: "evenodd" }) }),
                blog.LikesCount
              ] })
            ] }) })
          ] })
        ]
      },
      blog.Id
    )) }),
    blogs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg", children: "No blogs found matching your criteria." }) })
  ] }) });
};
export {
  BlogList as default
};
