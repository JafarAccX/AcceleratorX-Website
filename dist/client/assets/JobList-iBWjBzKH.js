import { e as createLucideIcon, j as jsxRuntimeExports, B as Briefcase, L as Link, r as reactExports, m, S as SEO, X } from "./main-MWsp8Q-I.js";
import { B as Building2 } from "./building-2-DN6ub41p.js";
import { M as MapPin } from "./map-pin-DQEd5QCP.js";
import { C as Clock } from "./clock-BThgchxx.js";
import { a as useGetAllJobs } from "./jobs-Cbbov3QE.js";
import { D as DollarSign } from "./dollar-sign-D1KFlRVx.js";
import { C as ChevronLeft } from "./chevron-left-DwhL3cFm.js";
import { C as ChevronRight } from "./chevron-right-BV2h7ZHe.js";
import "./useQuery-DphF5QgC.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Filter = createLucideIcon("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const JobCard = ({ job }) => {
  const extractSkillsFromDescription = (description) => {
    const skillsMatch = description.match(/Skills:\s*(.+)$/);
    if (skillsMatch) {
      return skillsMatch[1].split(",").map((skill) => skill.trim()).filter(Boolean).slice(0, 6);
    }
    return [];
  };
  const skills = job.RequiredSkills ? job.RequiredSkills.split(",").map((skill) => skill.trim()).filter(Boolean) : extractSkillsFromDescription(job.JobDescription);
  const truncateDescription = (text, maxLength = 120) => {
    const plainText = text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\\-/g, "-").replace(/\r\n/g, " ").replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    return plainText.length > maxLength ? plainText.substring(0, maxLength) + "..." : plainText;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-lg p-6 bg-[#0E1628] border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 flex-1", children: [
        job.CompanyLogoURL && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white mb-1 line-clamp-2", children: job.JobName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-400 gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: job.CompanyName })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `px-3 py-1 rounded-full text-xs font-medium ${job.Active && !job.Deleted ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
          children: job.Active && !job.Deleted ? "Active" : "Closed"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mb-4 text-gray-400 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 14 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: job.JobType.replace("fulltime", "Full-time").replace("parttime", "Part-time") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: job.Location || `${job.City}, ${job.Country}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: job.RequiredExperience || "Not specified" })
      ] })
    ] }),
    job.Salary && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-400 font-semibold", children: [
      "₹",
      job.Salary
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-sm leading-relaxed", children: truncateDescription(job.JobDescription) }) }),
    skills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white mb-2", children: "Required Skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        skills.slice(0, 4).map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-medium border border-blue-500/30",
            children: skill
          },
          index
        )),
        skills.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-1 bg-gray-500/20 text-gray-400 rounded-md text-xs", children: [
          "+",
          skills.length - 4,
          " more"
        ] })
      ] })
    ] }),
    job.Category && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs font-medium border border-purple-500/30", children: job.Category }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-4 border-t border-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: `/jobs/${job.Id}`,
        className: "inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0E1628]",
        children: "View Details"
      }
    ) })
  ] });
};
const JobList = () => {
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [jobsPerPage, setJobsPerPage] = reactExports.useState(20);
  const { data: jobsResponse, isLoading } = useGetAllJobs(currentPage, jobsPerPage);
  const jobs = reactExports.useMemo(() => jobsResponse?.jobs || [], [jobsResponse?.jobs]);
  const paginationInfo = jobsResponse?.pagination;
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [selectedCompany, setSelectedCompany] = reactExports.useState("");
  const [selectedJobType, setSelectedJobType] = reactExports.useState("");
  const [selectedLocation, setSelectedLocation] = reactExports.useState("");
  const [selectedExperience, setSelectedExperience] = reactExports.useState("");
  const [selectedSalaryRange, setSelectedSalaryRange] = reactExports.useState("");
  const [selectedSkills, setSelectedSkills] = reactExports.useState([]);
  const uniqueCompanies = Array.from(new Set(jobs?.map((job) => job.CompanyName) || []));
  const uniqueJobTypes = Array.from(new Set(jobs?.map((job) => job.JobType) || []));
  const uniqueLocations = Array.from(new Set(jobs?.map((job) => `${job.City}, ${job.Country}`) || []));
  const allSkills = jobs ? Array.from(new Set(jobs.flatMap((job) => job.RequiredSkills || []))) : [];
  const experienceRanges = reactExports.useMemo(() => ["0-1", "1-3", "3-5", "5-10", "10+"], []);
  const salaryRanges = m.useMemo(
    () => [
      { label: "0-50K", min: 0, max: 5e4 },
      { label: "50K-100K", min: 5e4, max: 1e5 },
      { label: "100K-150K", min: 1e5, max: 15e4 },
      { label: "150K+", min: 15e4, max: Infinity }
    ],
    []
  );
  const filteredJobs = reactExports.useMemo(() => {
    if (!jobs) return [];
    let result = [...jobs];
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (job) => job.JobName.toLowerCase().includes(term) || job.CompanyName.toLowerCase().includes(term)
      );
    }
    if (selectedCompany) {
      result = result.filter((job) => job.CompanyName === selectedCompany);
    }
    if (selectedJobType) {
      result = result.filter((job) => job.JobType === selectedJobType);
    }
    if (selectedLocation) {
      result = result.filter((job) => `${job.City}, ${job.Country}` === selectedLocation);
    }
    if (selectedExperience) {
      const [minExp] = selectedExperience.replace("+", "").split("-").map(Number);
      result = result.filter((job) => {
        if (typeof job.RequiredExperience === "number") {
          return job.RequiredExperience >= minExp;
        }
        return false;
      });
    }
    if (selectedSalaryRange) {
      const selectedRange = salaryRanges.find((r) => r.label === selectedSalaryRange);
      if (selectedRange) {
        result = result.filter((job) => {
          if (typeof job.Salary === "number") {
            return job.Salary >= selectedRange.min && job.Salary < selectedRange.max;
          }
          return false;
        });
      }
    }
    if (selectedSkills.length > 0) {
      result = result.filter(
        (job) => selectedSkills.every((skill) => job.RequiredSkills?.includes(skill))
      );
    }
    return result;
  }, [
    jobs,
    searchTerm,
    selectedCompany,
    selectedJobType,
    selectedLocation,
    selectedExperience,
    selectedSalaryRange,
    selectedSkills,
    salaryRanges
  ]);
  reactExports.useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [
    searchTerm,
    selectedCompany,
    selectedJobType,
    selectedLocation,
    selectedExperience,
    selectedSalaryRange,
    selectedSkills
  ]);
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCompany("");
    setSelectedJobType("");
    setSelectedLocation("");
    setSelectedExperience("");
    setSelectedSalaryRange("");
    setSelectedSkills([]);
  };
  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };
  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };
  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCompany) count++;
    if (selectedJobType) count++;
    if (selectedLocation) count++;
    if (selectedExperience) count++;
    if (selectedSalaryRange) count++;
    count += selectedSkills.length;
    return count;
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleJobsPerPageChange = (newLimit) => {
    setJobsPerPage(newLimit);
    setCurrentPage(1);
  };
  const getPageNumbers = () => {
    if (!paginationInfo) return [];
    const { currentPage: currentPage2, totalPages } = paginationInfo;
    const pages = [];
    const maxPageNumbers = 5;
    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage2 - Math.floor(maxPageNumbers / 2));
      const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);
      if (endPage === totalPages) {
        startPage = Math.max(1, totalPages - maxPageNumbers + 1);
      }
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
    return pages;
  };
  if (!jobs || jobs.length <= 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-slate-800 rounded-lg shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-100 mb-2", children: "No Jobs Available" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: "Check back later for new opportunities" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 mt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-white", children: [
        "Available Jobs",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400 text-lg", children: [
          "(",
          paginationInfo?.totalJobs || 0,
          " total, showing ",
          filteredJobs.length,
          ")"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-96", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            placeholder: "Search jobs...",
            className: "w-full pl-10 bg-transparent pr-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setShowFilters(!showFilters),
          className: "flex items-center gap-2 bg-slate-800 hover:bg-slate-700 py-2 px-4 rounded-lg text-white font-medium transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "h-5 w-5" }),
            "Filters",
            getActiveFiltersCount() > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center", children: getActiveFiltersCount() })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "Jobs per page:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: jobsPerPage,
          onChange: (e) => handleJobsPerPageChange(Number(e.target.value)),
          className: "p-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 10, children: "10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 20, children: "20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 50, children: "50" })
          ]
        }
      )
    ] }),
    showFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 p-6 bg-slate-800 rounded-xl shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: "Filter Jobs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: clearFilters, className: "text-sm text-gray-400 hover:text-white flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
            "Clear all filters"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setShowFilters(false),
              className: "text-sm bg-slate-700 hover:bg-slate-600 py-1 px-3 rounded text-white",
              children: "Close"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-gray-300 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4" }),
            "Company"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: selectedCompany,
              onChange: (e) => setSelectedCompany(e.target.value),
              className: "w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Companies" }),
                uniqueCompanies.map((company) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: company, children: company }, company))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-gray-300 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4" }),
            "Job Type"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: selectedJobType,
              onChange: (e) => setSelectedJobType(e.target.value),
              className: "w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Types" }),
                uniqueJobTypes.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: type, children: type }, type))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-gray-300 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
            "Location"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: selectedLocation,
              onChange: (e) => setSelectedLocation(e.target.value),
              className: "w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Locations" }),
                uniqueLocations.map((location) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: location, children: location }, location))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-gray-300 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
            "Experience (years)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: selectedExperience,
              onChange: (e) => setSelectedExperience(e.target.value),
              className: "w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Any Experience" }),
                experienceRanges.map((range) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: range, children: [
                  range,
                  " years"
                ] }, range))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-gray-300 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-4 w-4" }),
            "Salary Range"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: selectedSalaryRange,
              onChange: (e) => setSelectedSalaryRange(e.target.value),
              className: "w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Any Salary" }),
                salaryRanges.map((range) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: range.label, children: range.label }, range.label))
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-300 mb-2", children: "Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: selectedSkills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-1",
            children: [
              skill,
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeSkill(skill), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 text-blue-200 hover:text-white" }) })
            ]
          },
          skill
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: "",
            onChange: (e) => {
              if (e.target.value) {
                addSkill(e.target.value);
                e.target.value = "";
              }
            },
            className: "w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Add skill..." }),
              allSkills.filter((skill) => !selectedSkills.includes(skill)).map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: skill, children: skill }, skill))
            ]
          }
        )
      ] })
    ] }),
    getActiveFiltersCount() > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap gap-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "Active filters:" }),
      selectedCompany && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1", children: [
        "Company: ",
        selectedCompany,
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedCompany(""), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 text-gray-400 hover:text-white" }) })
      ] }),
      selectedJobType && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1", children: [
        "Type: ",
        selectedJobType,
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedJobType(""), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 text-gray-400 hover:text-white" }) })
      ] }),
      selectedLocation && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1", children: [
        "Location: ",
        selectedLocation,
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedLocation(""), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 text-gray-400 hover:text-white" }) })
      ] }),
      selectedExperience && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1", children: [
        "Experience: ",
        selectedExperience,
        " years",
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedExperience(""), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 text-gray-400 hover:text-white" }) })
      ] }),
      selectedSalaryRange && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1", children: [
        "Salary: ",
        selectedSalaryRange,
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedSalaryRange(""), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 text-gray-400 hover:text-white" }) })
      ] }),
      selectedSkills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1",
          children: [
            "Skill: ",
            skill,
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeSkill(skill), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 text-gray-400 hover:text-white" }) })
          ]
        },
        skill
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearFilters, className: "text-blue-400 hover:text-blue-300 text-sm underline", children: "Clear all" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full flex justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-pulse flex space-x-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-slate-700 h-12 w-12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-4 py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-slate-700 rounded w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-slate-700 rounded" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-slate-700 rounded w-5/6" })
        ] })
      ] })
    ] }) }) : filteredJobs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full flex justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-slate-800 rounded-lg shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-100 mb-2", children: "No Matching Jobs Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-4", children: "Try adjusting your filters to see more results" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearFilters, className: "text-blue-400 hover:text-blue-300 underline", children: "Clear all filters" })
    ] }) }) : filteredJobs.map((job) => /* @__PURE__ */ jsxRuntimeExports.jsx(JobCard, { job }, job.Id)) }),
    paginationInfo && paginationInfo.totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-400 text-sm", children: [
        "Showing page ",
        paginationInfo.currentPage,
        " of ",
        paginationInfo.totalPages,
        "(",
        paginationInfo.totalJobs,
        " total jobs)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handlePageChange(currentPage - 1),
            disabled: !paginationInfo.hasPreviousPage,
            className: `flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${paginationInfo.hasPreviousPage ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 text-gray-500 cursor-not-allowed"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
              "Previous"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          paginationInfo.currentPage > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handlePageChange(1),
                className: "px-3 py-2 rounded-lg text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white transition-all",
                children: "1"
              }
            ),
            paginationInfo.currentPage > 4 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 text-gray-400", children: "..." })
          ] }),
          getPageNumbers().map((pageNum) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handlePageChange(pageNum),
              className: `px-3 py-2 rounded-lg text-sm font-medium transition-all ${pageNum === paginationInfo.currentPage ? "bg-blue-600 text-white" : "bg-slate-800 hover:bg-slate-700 text-white"}`,
              children: pageNum
            },
            pageNum
          )),
          paginationInfo.currentPage < paginationInfo.totalPages - 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            paginationInfo.currentPage < paginationInfo.totalPages - 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 text-gray-400", children: "..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handlePageChange(paginationInfo.totalPages),
                className: "px-3 py-2 rounded-lg text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white transition-all",
                children: paginationInfo.totalPages
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handlePageChange(currentPage + 1),
            disabled: !paginationInfo.hasNextPage,
            className: `flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${paginationInfo.hasNextPage ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 text-gray-500 cursor-not-allowed"}`,
            children: [
              "Next",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
  ] });
};
export {
  JobList as default
};
