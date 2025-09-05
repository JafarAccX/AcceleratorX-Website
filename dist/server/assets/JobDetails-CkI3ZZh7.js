import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronLeft, X, ExternalLink, Building2, Globe, MapPin, Briefcase, Clock } from "lucide-react";
import { u as useGetJobById } from "./jobs-js9rpcj3.js";
import { useState } from "react";
import { u as useApplyForJob } from "./customer-D8jXU4yb.js";
import { u as useUser } from "../entry-server.js";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import { useParams, useNavigate } from "react-router";
import "@tanstack/react-query";
import "axios";
import "react-dom/server";
import "@remix-run/router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-dom";
import "react-icons/pi";
function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showApplying, setShowApplying] = useState(false);
  const { user } = useUser();
  const applyForJobMutation = useApplyForJob();
  const { data: job, isLoading: loading, error, isError } = useGetJobById(id ?? "");
  const handleApplyClick = async () => {
    if (!user?.CustId || !id) {
      toast.error("Sign-Up to Apply");
      navigate("/sign-up");
      return;
    }
    if (job?.EasyApply) {
      applyForJobMutation.mutate(
        {
          CustId: user.CustId,
          JobId: id,
          Result: "APPLIED"
        },
        {
          onSuccess: () => {
            toast.success("Application submitted successfully!");
            setShowApplying(false);
            navigate("/jobs");
          },
          onError: () => {
            toast.error("Already applied");
          }
        }
      );
    } else {
      if (!job?.JobApplyURL) {
        toast.error("Job application URL not available");
        return;
      }
      try {
        applyForJobMutation.mutate(
          {
            CustId: user.CustId,
            JobId: id,
            Result: "REDIRECTED"
            // Different status for external applications
          },
          {
            onSuccess: () => {
              console.log("External application attempt logged");
            },
            onError: (error2) => {
              console.warn("Failed to log external application attempt:", error2);
            }
          }
        );
        toast.success("Redirecting to company application page...");
        window.open(job.JobApplyURL, "_blank");
        setShowApplying(false);
      } catch (error2) {
        console.error("Failed to process external application:", error2);
        toast.error("Failed to open application page. Please try again.");
      }
    }
  };
  const preprocessMarkdown = (text) => {
    return text.replace(/\\-/g, "-").replace(/([^\n])(\* )/g, "$1\n$2").replace(/(\*\*[^\n]+?:\*\*)/g, "\n\n$1\n\n").replace(/ +/g, " ").trim();
  };
  const cleanedDescription = preprocessMarkdown(job?.JobDescription || "");
  const extractSkillsFromDescription = (description) => {
    const skillsMatch = description.match(/Skills:\s*(.+)$/);
    if (skillsMatch) {
      return skillsMatch[1].split(",").map((skill) => skill.trim()).filter(Boolean);
    }
    return [];
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#080B16]", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) });
  }
  if (isError || !job) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen pt-20 sm:pt-24 pb-6 sm:pb-12 bg-[#080B16] text-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => navigate("/jobs"),
          className: "inline-flex items-center gap-2 text-sm text-white/60 hover:text-white",
          children: [
            /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
            "Back to Jobs"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-[#0E1628] p-8 text-center border border-gray-700", children: [
        /* @__PURE__ */ jsx("p", { className: "text-red-500", children: JSON.stringify(error) || "Job not found" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => navigate("/jobs"),
            className: "mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600",
            children: "View All Jobs"
          }
        )
      ] })
    ] }) });
  }
  const skills = job.RequiredSkills ? job.RequiredSkills.split(",").map((skill) => skill.trim()).filter(Boolean) : extractSkillsFromDescription(job.JobDescription);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20 sm:pt-24 pb-6 sm:pb-12 bg-[#080B16] text-white", children: [
    showApplying && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm",
          onClick: () => setShowApplying(false)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative bg-[#1A1A1A] rounded-lg p-6 shadow-lg border border-gray-700 max-w-md w-full m-4 z-10", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowApplying(false),
            className: "absolute top-3 right-3 text-gray-400 hover:text-white transition",
            children: /* @__PURE__ */ jsx(X, { size: 20 })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: job.EasyApply ? "Apply with Profile" : "External Application" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-6 text-sm leading-relaxed", children: job.EasyApply ? "Your profile will be shared with employers. Ensure your details are up-to-date to improve your chances." : "This position requires applying directly on the company's website. You'll be redirected to their application page." }),
        !job.EasyApply && job.JobApplyURL && /* @__PURE__ */ jsxs("div", { className: "mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-blue-300 text-sm", children: [
            /* @__PURE__ */ jsx(ExternalLink, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "External application required" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-400 mt-1", children: [
            "You will be redirected to: ",
            new URL(job.JobApplyURL).hostname
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-4 justify-end", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleApplyClick,
            className: `px-4 py-2 text-sm font-medium rounded-md transition ${job.EasyApply ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-orange-600 hover:bg-orange-700 text-white"}`,
            children: job.EasyApply ? "Proceed" : "Apply on Company Site"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => navigate("/jobs"),
          className: "inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition",
          children: [
            /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
            "Back to Jobs"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-gray-700 bg-[#0E1628] p-6 sm:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 flex-1", children: [
              job.CompanyLogoURL && /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: job.CompanyLogoURL,
                  alt: `${job.CompanyName} logo`,
                  className: "w-full h-full object-contain",
                  onError: (e) => {
                    e.target.style.display = "none";
                  }
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-bold text-white mb-2", children: job.JobName }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xl text-gray-300 mb-2", children: [
                  /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5" }),
                  /* @__PURE__ */ jsx("span", { children: job.CompanyName })
                ] }),
                job.CompanyURL && /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: job.CompanyURL,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    className: "inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition",
                    children: [
                      /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
                      "Company Website"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col items-end gap-2", children: /* @__PURE__ */ jsx(
              "span",
              {
                className: `px-4 py-2 rounded-full text-sm font-medium ${job.Active && !job.Deleted ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                children: job.Active && !job.Deleted ? "Active" : "Closed"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-800/30 rounded-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-300", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-gray-400" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Location" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: job.Location || `${job.City}, ${job.Country}` })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-300", children: [
              /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4 text-gray-400" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Job Type" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium capitalize", children: job.JobType.replace("fulltime", "Full-time") })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-300", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-gray-400" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Experience" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium capitalize", children: job.RequiredExperience || "Not specified" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-300", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-gray-400" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Posted" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: new Date(job.CreatedDate).toLocaleDateString() })
              ] })
            ] })
          ] }),
          job.Salary && /* @__PURE__ */ jsx("div", { className: "mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-green-400 text-xl font-semibold", children: [
            "₹",
            job.Salary
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-white mb-4", children: "Job Description" }),
          /* @__PURE__ */ jsx(ReactMarkdown, { children: cleanedDescription })
        ] }),
        skills.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-white mb-4", children: "Required Skills" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: skills.map((skill, index) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition",
              children: skill
            },
            index
          )) })
        ] }),
        job.Category && /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-white mb-4", children: "Category" }),
          /* @__PURE__ */ jsx("span", { className: "px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30", children: job.Category })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-gray-700", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowApplying(true),
              disabled: job.Deleted || !job.Active,
              className: `w-full sm:w-auto px-8 py-3 text-lg font-medium rounded-lg transition ${job.Deleted || !job.Active ? "bg-gray-600 text-gray-400 cursor-not-allowed" : job.EasyApply ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-orange-600 hover:bg-orange-700 text-white"}`,
              children: job.Deleted || !job.Active ? "Position No Longer Available" : job.EasyApply ? "Apply for this Position" : "Apply on Company Site"
            }
          ),
          !job.EasyApply && job.JobApplyURL && /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-400 mt-2", children: [
            "This will redirect you to ",
            new URL(job.JobApplyURL).hostname
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  JobDetails as default
};
