import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Check } from "lucide-react";
import toast from "react-hot-toast";
import { useUser } from "../../context/UserContext";
import { Job } from "../../types/job";
import { jobService } from "../../services/jobService";
import { jobApplicationService } from "../../services/jobApplicationService";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverLetter: string;
  portfolioUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  experienceYears: string;
  currentCompany: string;
  applicantRole: string;
  expectedSalary: string;
  noticePeriod: string;
  additionalNotes: string;
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  textarea?: boolean;
  pattern?: string;
  helperText?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
  textarea = false,
  pattern,
  helperText,
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {textarea ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    )}
    {helperText && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
  </div>
);

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const SuccessModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="w-full max-w-md rounded-2xl bg-[#0E1628] p-8 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
        <Check className="h-8 w-8 text-green-500" />
      </div>
      <h3 className="mb-2 text-2xl font-bold text-white">Application Submitted!</h3>
      <p className="mb-6 text-white/60">
        Thank you for applying. We'll review your application and get back to you soon.
      </p>
      <button
        onClick={onClose}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 font-medium text-white transition-all hover:from-blue-700 hover:to-blue-800"
      >
        Got it
      </button>
    </div>
  </div>
);

export default function JobApplication() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useUser();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
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
    additionalNotes: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        if (!id) return;
        const data = await jobService.getJobById(id);
        setJob(data);
        setError(null);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch job details";
        setError(errorMessage);
        console.error("Error fetching job:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const validateForm = (): boolean => {
    if (!isValidUrl(formData.resumeUrl)) {
      toast.error("Please provide a valid resume URL");
      return false;
    }

    if (formData.portfolioUrl && !isValidUrl(formData.portfolioUrl)) {
      toast.error("Please provide a valid portfolio URL or leave it empty");
      return false;
    }

    if (formData.linkedinUrl && !isValidUrl(formData.linkedinUrl)) {
      toast.error("Please provide a valid LinkedIn URL or leave it empty");
      return false;
    }

    if (formData.githubUrl && !isValidUrl(formData.githubUrl)) {
      toast.error("Please provide a valid GitHub URL or leave it empty");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (!user || !job) {
        toast.error("Please login to apply for this job");
        setSubmitting(false);
        return;
      }

      // Check if user has already applied
      const hasApplied = await jobApplicationService.hasUserApplied(user.id, id || "");
      if (hasApplied) {
        toast.error("You have already applied to this job!");
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
        cover_letter: formData.coverLetter || undefined,
        portfolio_url: formData.portfolioUrl || undefined,
        linkedin_url: formData.linkedinUrl || undefined,
        github_url: formData.githubUrl || undefined,
        experience_years: parseInt(formData.experienceYears) || 0,
        current_company: formData.currentCompany || undefined,
        applicant_role: formData.applicantRole || undefined,
        expected_salary: formData.expectedSalary || undefined,
        notice_period: formData.noticePeriod || undefined,
        additional_notes: formData.additionalNotes || undefined,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      setShowSuccess(true);
    } catch (err) {
      console.error("Error submitting application:", err);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080B16]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-[#080B16] pt-20 sm:pt-24 pb-6 sm:pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate("/jobs")}
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Jobs
            </button>
          </div>
          <div className="rounded-xl bg-[#0E1628] p-8 text-center">
            <p className="text-red-500">{error || "Job not found"}</p>
            <button
              onClick={() => navigate("/jobs")}
              className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              View All Jobs
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080B16] pt-20 sm:pt-24 pb-6 sm:pb-12">
      {showSuccess && <SuccessModal onClose={() => navigate("/jobs")} />}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate(`/jobs/${id}`)}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Job Details
          </button>
        </div>

        <div className="rounded-xl bg-[#0E1628] p-6 sm:p-8">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Apply for {job.title}</h1>
            <p className="mt-2 text-white/60">Please fill out the form below to apply for this position.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              label="Full Name"
              value={formData.fullName}
              onChange={(value) => setFormData({ ...formData, fullName: value })}
              required
            />

            <FormField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              required
            />

            <FormField
              label="Phone"
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
              required
              pattern="^\+?[1-9]\d{9,14}$"
              helperText="Enter a valid phone number with country code"
            />

            <FormField
              label="Resume URL"
              value={formData.resumeUrl}
              onChange={(value) => setFormData({ ...formData, resumeUrl: value })}
              placeholder="Enter the URL to your resume (e.g. Google Drive, Dropbox)"
              required
              type="url"
              helperText="Please provide a publicly accessible link to your resume"
            />

            <FormField
              label="Cover Letter"
              textarea
              value={formData.coverLetter}
              onChange={(value) => setFormData({ ...formData, coverLetter: value })}
              placeholder="Tell us why you're interested in this position..."
            />

            <FormField
              label="Portfolio URL"
              value={formData.portfolioUrl}
              onChange={(value) => setFormData({ ...formData, portfolioUrl: value })}
              type="url"
            />

            <FormField
              label="LinkedIn URL"
              value={formData.linkedinUrl}
              onChange={(value) => setFormData({ ...formData, linkedinUrl: value })}
              type="url"
            />

            <FormField
              label="GitHub URL"
              value={formData.githubUrl}
              onChange={(value) => setFormData({ ...formData, githubUrl: value })}
              type="url"
            />

            <FormField
              label="Years of Experience"
              value={formData.experienceYears}
              onChange={(value) => setFormData({ ...formData, experienceYears: value })}
              required
              type="number"
            />

            <FormField
              label="Current Company"
              value={formData.currentCompany}
              onChange={(value) => setFormData({ ...formData, currentCompany: value })}
            />

            <FormField
              label="Applicant Role"
              value={formData.applicantRole}
              onChange={(value) => setFormData({ ...formData, applicantRole: value })}
            />

            <FormField
              label="Expected Salary"
              value={formData.expectedSalary}
              onChange={(value) => setFormData({ ...formData, expectedSalary: value })}
            />

            <FormField
              label="Notice Period"
              value={formData.noticePeriod}
              onChange={(value) => setFormData({ ...formData, noticePeriod: value })}
            />

            <FormField
              label="Additional Notes"
              textarea
              value={formData.additionalNotes}
              onChange={(value) => setFormData({ ...formData, additionalNotes: value })}
              placeholder="Any additional information you'd like to provide..."
            />

            <div className="mt-8">
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
