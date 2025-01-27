import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabaseClient";
import { Check } from "lucide-react";
import toast from "react-hot-toast";
import { Dialog, Transition } from "@headlessui/react";

interface FormData {
  name: string;
  email: string;
  mobile_no: string;
  yearsOfExperience: string;
  lastRole: string;
  lastCompany: string;
  linkedinUrl: string;
  cvLink: string;
  applyingRole: string;
}

const CareersHero: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile_no: "",
    yearsOfExperience: "",
    lastRole: "",
    lastCompany: "",
    linkedinUrl: "",
    cvLink: "",
    applyingRole: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const validateForm = () => {
    if (!formData.name.trim()) {
      throw new Error("Name is required");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error("Please enter a valid email address");
    }

    // Mobile number validation (10 digits)
    if (formData.mobile_no.length !== 10) {
      throw new Error("Please enter a valid 10-digit mobile number");
    }

    if (!formData.yearsOfExperience.trim()) {
      throw new Error("Years of experience is required");
    }

    if (!formData.lastRole.trim()) {
      throw new Error("Last role is required");
    }

    if (!formData.lastCompany.trim()) {
      throw new Error("Last company is required");
    }

    if (!formData.linkedinUrl.trim() || !formData.linkedinUrl.includes("linkedin.com")) {
      throw new Error("Please enter a valid LinkedIn URL");
    }

    if (!formData.cvLink.trim()) {
      throw new Error("CV link is required");
    }

    if (!formData.applyingRole.trim()) {
      throw new Error("Please select a role you're applying for");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      validateForm();

      // Check if email or mobile already exists
      const { data: existingRecords, error: checkError } = await supabase
        .from("hiring_queries")
        .select("email, mobile_no")
        .or(`email.eq.${formData.email},mobile_no.eq.${formData.mobile_no}`)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        console.error("Error checking duplicates:", checkError);
        throw new Error("Failed to check for existing applications");
      }

      if (existingRecords) {
        if (existingRecords.email === formData.email) {
          throw new Error("This email has already been used to submit an application");
        }
        if (existingRecords.mobile_no === formData.mobile_no) {
          throw new Error("This mobile number has already been used to submit an application");
        }
      }

      // Insert new application
      const { error: submitError } = await supabase
        .from("hiring_queries")
        .insert({
          name: formData.name,
          email: formData.email,
          years_of_experience: formData.yearsOfExperience,
          last_role: formData.lastRole,
          last_company: formData.lastCompany,
          linkedin_url: formData.linkedinUrl,
          cv_link: formData.cvLink,
          applying_role: formData.applyingRole,
          mobile_no: formData.mobile_no,
        });

      if (submitError) {
        console.error("Submission error:", submitError);
        if (submitError.code === "23505") {
          if (submitError.message?.includes("email")) {
            throw new Error("This email has already been used to submit an application");
          }
          if (submitError.message?.includes("mobile")) {
            throw new Error("This mobile number has already been used to submit an application");
          }
          throw new Error("This application has already been submitted");
        }
        throw new Error("Failed to submit application. Please try again.");
      }

      setIsOpen(false);
      setIsThankYouOpen(true);
      toast.success("Application submitted successfully!");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile_no: "",
        yearsOfExperience: "",
        lastRole: "",
        lastCompany: "",
        linkedinUrl: "",
        cvLink: "",
        applyingRole: "",
      });

      // Auto close thank you modal after 5 seconds
      setTimeout(() => {
        setIsThankYouOpen(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting application:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to submit application";
      setErrorMessage(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "mobile_no") {
      // Only allow numbers and limit to 10 digits
      const mobileValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: mobileValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const roles = [
    {
      title: "Full Stack Developer",
      description: "Looking for experienced developers who can work with modern web technologies.",
      requirements: "3+ years of experience with React, Node.js, and databases"
    },
    {
      title: "UI/UX Designer",
      description: "Seeking creative designers to craft beautiful and intuitive user experiences.",
      requirements: "2+ years of experience with Figma and modern design tools"
    },
    {
      title: "Product Manager",
      description: "Join us to lead product strategy and development initiatives.",
      requirements: "4+ years of experience in product management"
    },
    {
      title: "DevOps Engineer",
      description: "Help us build and maintain robust cloud infrastructure.",
      requirements: "3+ years of experience with AWS/Azure and CI/CD"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Get Hired with AcceleratorX
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of our mission to revolutionize the future of technology. We're looking for passionate individuals who want to make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-3">{role.title}</h3>
              <p className="text-gray-400 mb-4">{role.description}</p>
              <p className="text-sm text-gray-500 mb-4">{role.requirements}</p>
              <button
                onClick={() => {
                  setSelectedRole(role.title);
                  setFormData(prev => ({ ...prev, applyingRole: role.title }));
                  setIsOpen(true);
                }}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Application Form Modal */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white mb-4">
                      Apply for {selectedRole}
                    </Dialog.Title>

                    {/* Error Message */}
                    {errorMessage && (
                      <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-lg">
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <div className="relative mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-600/50 bg-gray-800 px-3 text-gray-400 sm:text-sm">
                            +91
                          </span>
                          <input
                            type="tel"
                            id="mobile_no"
                            name="mobile_no"
                            value={formData.mobile_no}
                            onChange={handleChange}
                            className="block w-full rounded-none rounded-r-md bg-gray-800 border-gray-600/50 focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-white placeholder-gray-400"
                            placeholder="9901256666"
                            required
                            pattern="[0-9]{10}"
                          />
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="yearsOfExperience"
                          placeholder="Years of Experience"
                          required
                          value={formData.yearsOfExperience}
                          onChange={handleChange}
                          className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="lastRole"
                          placeholder="Last Role"
                          required
                          value={formData.lastRole}
                          onChange={handleChange}
                          className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="lastCompany"
                          placeholder="Last Company"
                          required
                          value={formData.lastCompany}
                          onChange={handleChange}
                          className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <input
                          type="url"
                          name="linkedinUrl"
                          placeholder="LinkedIn URL"
                          required
                          value={formData.linkedinUrl}
                          onChange={handleChange}
                          className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <input
                          type="url"
                          name="cvLink"
                          placeholder="CV Link"
                          required
                          value={formData.cvLink}
                          onChange={handleChange}
                          className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700"
                          disabled={loading}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                          disabled={loading}
                        >
                          {loading ? 'Submitting...' : 'Submit'}
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* Thank You Modal */}
        <Transition appear show={isThankYouOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setIsThankYouOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-8 text-center align-middle shadow-xl transition-all border border-green-500/20">
                    <div className="mx-auto flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-500/20">
                      <Check className="w-8 h-8 text-green-500" />
                    </div>
                    
                    <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-white mb-4">
                      Application Submitted!
                    </Dialog.Title>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4"
                    >
                      <p className="text-gray-300">
                        Thank you for your interest in joining our team! We've received your application and will review it shortly.
                      </p>
                      <p className="text-sm text-gray-400">
                        We'll contact you via phone if your profile matches our requirements.
                      </p>
                    </motion.div>

                    <div className="mt-8">
                      <button
                        type="button"
                        onClick={() => setIsThankYouOpen(false)}
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-500 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-colors duration-200"
                      >
                        Close
                      </button>
                    </div>

                    {/* Auto-close progress bar */}
                    <div className="mt-6">
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "100%" }}
                          animate={{ width: "0%" }}
                          transition={{ duration: 5, ease: "linear" }}
                          className="h-full bg-green-500"
                        />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default CareersHero;