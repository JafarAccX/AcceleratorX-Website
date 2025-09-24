import { e as useParams, u as useNavigate, b as useUser, r as reactExports, j as jsxRuntimeExports, c as _t } from "./main-Br24Bg9q.js";
import { c as createClient } from "./index-CslnWuPa.js";
import { u as useGetJobById } from "./jobs-Di2N6RJ_.js";
import { C as ChevronLeft } from "./chevron-left-BfOm6alB.js";
import { C as Check } from "./check-_mDtse_9.js";
import "./useQuery-CUn1jP3v.js";
const supabaseUrl = "https://grdwabozcrwjwdytwpqa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZHdhYm96Y3J3andkeXR3cHFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTgyOTY4NiwiZXhwIjoyMDQ3NDA1Njg2fQ.ZsBE6-Ffg4iyZpd9P_341TDaFJxJ6Qt50FlyCHGpT64";
const supabase = createClient(supabaseUrl, supabaseKey);
const isValidUrl$1 = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
const jobApplicationService = {
  // Submit a new job application
  async submitApplication(application) {
    if (!isValidUrl$1(application.resume_url)) {
      throw new Error("Invalid resume URL. Please provide a valid URL to your resume.");
    }
    if (application.portfolio_url && !isValidUrl$1(application.portfolio_url)) {
      throw new Error("Invalid portfolio URL. Please provide a valid URL or leave it empty.");
    }
    if (application.linkedin_url && !isValidUrl$1(application.linkedin_url)) {
      throw new Error("Invalid LinkedIn URL. Please provide a valid URL or leave it empty.");
    }
    if (application.github_url && !isValidUrl$1(application.github_url)) {
      throw new Error("Invalid GitHub URL. Please provide a valid URL or leave it empty.");
    }
    const { data, error } = await supabase.from("job_applications").insert([{
      job_id: application.job_id,
      user_id: application.user_id,
      // Use user_id directly from profiles
      full_name: application.full_name,
      email: application.email,
      phone: application.phone,
      resume_url: application.resume_url,
      cover_letter: application.cover_letter,
      portfolio_url: application.portfolio_url,
      linkedin_url: application.linkedin_url,
      github_url: application.github_url,
      experience_years: application.experience_years,
      current_company: application.current_company,
      applicant_role: application.applicant_role,
      expected_salary: application.expected_salary,
      notice_period: application.notice_period,
      additional_notes: application.additional_notes,
      status: "pending"
    }]).select();
    if (error) throw error;
    return data;
  },
  // Get all applications for a specific job (admin only)
  async getApplicationsByJobId(jobId) {
    const { data, error } = await supabase.from("job_applications").select(`
                *,
                job:jobs(*),
                user:profiles(user_id, email, full_name)
            `).eq("job_id", jobId).order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  },
  // Get all applications for the current user
  async getUserApplications(userId) {
    const { data, error } = await supabase.from("job_applications").select(`
                *,
                job:jobs (
                    id,
                    title,
                    company,
                    location
                )
            `).eq("user_id", userId).order("created_at", { ascending: false });
    if (error) throw error;
    return data || [];
  },
  // Get application statistics for admin dashboard
  async getApplicationStatistics() {
    const { data, error } = await supabase.from("job_applications").select(`
                *,
                job:jobs (
                    id,
                    title,
                    company,
                    location
                ),
                profile:profiles (
                    id,
                    name,
                    email,
                    phone
                )
            `).order("created_at", { ascending: false });
    if (error) throw error;
    return data || [];
  },
  // Check if user has already applied to a job
  async hasUserApplied(userId, jobId) {
    if (!userId || !jobId) {
      throw new Error("User ID and Job ID are required");
    }
    const { data, error } = await supabase.from("job_applications").select("id").eq("user_id", userId).eq("job_id", jobId);
    if (error) {
      console.error("Error checking application:", error);
      throw error;
    }
    return data !== null && data.length > 0;
  },
  // Update application status (admin only)
  async updateApplicationStatus(applicationId, status, notes) {
    const { error } = await supabase.from("job_applications").update({
      status,
      interviewer_notes: notes,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", applicationId);
    if (error) throw error;
  }
};
const FormField = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
  textarea = false,
  pattern,
  helperText
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: [
    label,
    " ",
    required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
  ] }),
  textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      value,
      onChange: (e) => onChange(e.target.value),
      placeholder,
      required,
      className: "w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
      rows: 4
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      value,
      onChange: (e) => onChange(e.target.value),
      placeholder,
      required,
      pattern,
      className: "w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    }
  ),
  helperText && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500", children: helperText })
] });
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
const SuccessModal = ({ onClose }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-2xl bg-[#0E1628] p-8 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-8 w-8 text-green-500" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-2xl font-bold text-white", children: "Application Submitted!" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-white/60", children: "Thank you for applying. We'll review your application and get back to you soon." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: onClose,
      className: "w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 font-medium text-white transition-all hover:from-blue-700 hover:to-blue-800",
      children: "Got it"
    }
  )
] }) });
function JobApplication() {
  const { id } = useParams();
  const { data: job, isLoading: loading, error, isError } = useGetJobById(id ?? "");
  const navigate = useNavigate();
  const { user } = useUser();
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [showSuccess, setShowSuccess] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    fullName: user?.full_name || "",
    email: user?.email || "",
    phone: user?.phone_number || "",
    resumeUrl: "",
    coverLetter: "",
    portfolioUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    experienceYears: "",
    currentCompany: "",
    applicantRole: "",
    expectedSalary: "",
    noticePeriod: "",
    additionalNotes: ""
  });
  const validateForm = () => {
    if (!isValidUrl(formData.resumeUrl)) {
      _t.error("Please provide a valid resume URL");
      return false;
    }
    if (formData.portfolioUrl && !isValidUrl(formData.portfolioUrl)) {
      _t.error("Please provide a valid portfolio URL or leave it empty");
      return false;
    }
    if (formData.linkedinUrl && !isValidUrl(formData.linkedinUrl)) {
      _t.error("Please provide a valid LinkedIn URL or leave it empty");
      return false;
    }
    if (formData.githubUrl && !isValidUrl(formData.githubUrl)) {
      _t.error("Please provide a valid GitHub URL or leave it empty");
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (!user || !job) {
        _t.error("Please login to apply for this job");
        setSubmitting(false);
        return;
      }
      const hasApplied = await jobApplicationService.hasUserApplied(user.id, id || "");
      if (hasApplied) {
        _t.error("You have already applied to this job!");
        setSubmitting(false);
        return;
      }
      if (!validateForm()) {
        setSubmitting(false);
        return;
      }
      await jobApplicationService.submitApplication({
        job_id: job.id,
        user_id: user.id,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        resume_url: formData.resumeUrl,
        cover_letter: formData.coverLetter || void 0,
        portfolio_url: formData.portfolioUrl || void 0,
        linkedin_url: formData.linkedinUrl || void 0,
        github_url: formData.githubUrl || void 0,
        experience_years: parseInt(formData.experienceYears) || 0,
        current_company: formData.currentCompany || void 0,
        applicant_role: formData.applicantRole || void 0,
        expected_salary: formData.expectedSalary || void 0,
        notice_period: formData.noticePeriod || void 0,
        additional_notes: formData.additionalNotes || void 0,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      setShowSuccess(true);
    } catch (err) {
      console.error("Error submitting application:", err);
      _t.error("Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#080B16]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) });
  }
  if (error || !job) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[#080B16] pt-20 sm:pt-24 pb-6 sm:pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => navigate("/jobs"),
          className: "inline-flex items-center gap-2 text-sm text-white/60 hover:text-white",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
            "Back to Jobs"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-[#0E1628] p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: error || "Job not found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#080B16] pt-20 sm:pt-24 pb-6 sm:pb-12", children: [
    showSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessModal, { onClose: () => navigate("/jobs") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => navigate(`/jobs/${id}`),
          className: "inline-flex items-center gap-2 text-sm text-white/60 hover:text-white",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
            "Back to Job Details"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-[#0E1628] p-6 sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl sm:text-3xl font-bold text-white", children: [
            "Apply for ",
            job.title
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/60", children: "Please fill out the form below to apply for this position." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Full Name",
              value: formData.fullName,
              onChange: (value) => setFormData({ ...formData, fullName: value }),
              required: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Email",
              type: "email",
              value: formData.email,
              onChange: (value) => setFormData({ ...formData, email: value }),
              required: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Phone",
              value: formData.phone,
              onChange: (value) => setFormData({ ...formData, phone: value }),
              required: true,
              pattern: "^\\+?[1-9]\\d{9,14}$",
              helperText: "Enter a valid phone number with country code"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Resume URL",
              value: formData.resumeUrl,
              onChange: (value) => setFormData({ ...formData, resumeUrl: value }),
              placeholder: "Enter the URL to your resume (e.g. Google Drive, Dropbox)",
              required: true,
              type: "url",
              helperText: "Please provide a publicly accessible link to your resume"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Cover Letter",
              textarea: true,
              value: formData.coverLetter,
              onChange: (value) => setFormData({ ...formData, coverLetter: value }),
              placeholder: "Tell us why you're interested in this position..."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Portfolio URL",
              value: formData.portfolioUrl,
              onChange: (value) => setFormData({ ...formData, portfolioUrl: value }),
              type: "url"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "LinkedIn URL",
              value: formData.linkedinUrl,
              onChange: (value) => setFormData({ ...formData, linkedinUrl: value }),
              type: "url"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "GitHub URL",
              value: formData.githubUrl,
              onChange: (value) => setFormData({ ...formData, githubUrl: value }),
              type: "url"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Years of Experience",
              value: formData.experienceYears,
              onChange: (value) => setFormData({ ...formData, experienceYears: value }),
              required: true,
              type: "number"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Current Company",
              value: formData.currentCompany,
              onChange: (value) => setFormData({ ...formData, currentCompany: value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Applicant Role",
              value: formData.applicantRole,
              onChange: (value) => setFormData({ ...formData, applicantRole: value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Expected Salary",
              value: formData.expectedSalary,
              onChange: (value) => setFormData({ ...formData, expectedSalary: value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Notice Period",
              value: formData.noticePeriod,
              onChange: (value) => setFormData({ ...formData, noticePeriod: value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              label: "Additional Notes",
              textarea: true,
              value: formData.additionalNotes,
              onChange: (value) => setFormData({ ...formData, additionalNotes: value }),
              placeholder: "Any additional information you'd like to provide..."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: submitting,
              className: "w-full rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed",
              children: submitting ? "Submitting..." : "Submit Application"
            }
          ) })
        ] })
      ] })
    ] })
  ] });
}
export {
  JobApplication as default
};
