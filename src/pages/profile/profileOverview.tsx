import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useUpdateUser, useUploadProfilePicture } from "../../hooks/customer";
import {
  User, Mail, Phone, Globe, Award, Linkedin,
  Github, Plus, Save, Camera, Calendar, Briefcase, DollarSign, Clock, BookOpen, GraduationCap
} from "lucide-react";
import { Customer } from "../../types/customer";
// Project Components
import ProjectManager from "./components/ProjectManager";

export default function ProfileOverview() {
  // const navigate = useNavigate();
  const { user, logout } = useUser();
  const { mutateAsync: UpdateUser } = useUpdateUser();
  const { mutateAsync: uploadPicture, isPending: isUploadingPicture } = useUploadProfilePicture();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'activity'>('profile');
  const [isLoading, setIsLoading] = useState(false);

  // Initialize with correct types
  const [formData, setFormData] = useState<Partial<Customer>>({});
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({ ...user });
    }
  }, [user]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && user) {
      try {
        await uploadPicture({ custId: user.CustId, file });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getSkillsArray = () => {
    if (!formData.Skills) return [];
    return formData.Skills.split(',').map(s => s.trim()).filter(Boolean);
  };

  const handleAddSkill = async () => {
    if (!newSkill.trim()) return;
    const currentSkills = getSkillsArray();
    if (currentSkills.includes(newSkill.trim())) {
      setNewSkill('');
      return;
    }
    const updatedSkills = [...currentSkills, newSkill.trim()].join(',');

    // Optimistic update
    setFormData(prev => ({ ...prev, Skills: updatedSkills }));
    setNewSkill('');

    // Save immediately as requested
    await saveSkills(updatedSkills);
  };

  const handleRemoveSkill = async (skillToRemove: string) => {
    const currentSkills = getSkillsArray();
    const updatedSkills = currentSkills.filter(s => s !== skillToRemove).join(',');

    setFormData(prev => ({ ...prev, Skills: updatedSkills }));
    await saveSkills(updatedSkills);
  };

  const saveSkills = async (skillsString: string) => {
    try {

      const payload = {
        firstName: formData.FirstName || "",
        middleName: formData.MiddleName || "",
        lastName: formData.LastName || "",
        // mobile: formData.Mobile, // Mobile cannot be updated via this endpoint
        email: formData.Email || undefined,
        designation: formData.Designation || "",
        currentCompany: formData.CurrentCompany || undefined,
        linkedinUrl: formData.LinkedinUrl || undefined,
        githubUrl: formData.GithubUrl || undefined,
        portfolio: formData.Portfolio || undefined,
        dob: formData.DOB || undefined,
        gender: formData.Gender || undefined,
        education: formData.Education,
        yearOfPassing: formData.YearOfPassing,
        yearOfExperience: formData.YearOfExperience ? Number(formData.YearOfExperience) : undefined,
        expectedSalary: formData.ExpectedSalary ? Number(formData.ExpectedSalary) : undefined,
        noticePeriod: formData.NoticePeriod ? Number(formData.NoticePeriod) : undefined,

        skills: skillsString
      };

      await UpdateUser({ custId: user?.CustId || '', userData: payload });
    } catch (err) {
      console.error("Failed to save skills", err);
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    setIsLoading(true);
    try {
      const payload = {
        firstName: formData.FirstName || "",
        middleName: formData.MiddleName || "",
        lastName: formData.LastName || "",
        // mobile: formData.Mobile, // Mobile cannot be updated via this endpoint
        email: formData.Email || undefined,
        designation: formData.Designation || "",
        currentCompany: formData.CurrentCompany || undefined,

        linkedinUrl: formData.LinkedinUrl || undefined,
        githubUrl: formData.GithubUrl || undefined,
        portfolio: formData.Portfolio || undefined,

        dob: formData.DOB || undefined,
        gender: formData.Gender || undefined,

        education: formData.Education,
        yearOfPassing: formData.YearOfPassing,

        yearOfExperience: formData.YearOfExperience ? Number(formData.YearOfExperience) : undefined,
        expectedSalary: formData.ExpectedSalary ? Number(formData.ExpectedSalary) : undefined,
        noticePeriod: formData.NoticePeriod ? Number(formData.NoticePeriod) : undefined,
      };

      await UpdateUser({ custId: user.CustId, userData: payload });
    } catch (error) {
      console.error("Failed to update profile", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT COLUMN: User Card & Navigation */}
        <div className="lg:col-span-3 space-y-6">
          {/* User Card */}
          <div className="bg-white rounded-3xl shadow-sm p-6 text-center border border-gray-100">
            <div className="relative inline-block mb-4 group">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mx-auto ring-4 ring-white shadow-lg">
                {formData.ProfilePicture ? (
                  <img src={formData.ProfilePicture} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white text-3xl font-bold">
                    {formData.FirstName?.[0]}{formData.LastName?.[0]}
                  </div>
                )}
              </div>
              <button
                onClick={handleCameraClick}
                disabled={isUploadingPicture}
                className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-blue-600 transition disabled:opacity-50"
              >
                <Camera size={16} />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <h2 className="text-xl font-bold text-gray-900">{formData.FirstName} {formData.LastName}</h2>
            <p className="text-gray-500 text-sm mb-4">{formData.Designation || "Designation not set"}</p>
            <p className="text-gray-400 text-xs mb-6">{formData.CurrentCompany || "Company not set"}</p>

            <div className="flex justify-center gap-4 mb-6">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl font-medium shadow-blue-200 shadow-lg hover:bg-blue-700 transition">
                Share
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl font-medium hover:bg-gray-200 transition">
                View Public
              </button>
            </div>

            <div className="flex justify-around text-center border-t border-gray-100 pt-6">
              <div>
                <div className="text-xl font-bold text-gray-900">0</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Projects</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">0</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Likes</div>
              </div>
            </div>
          </div>

          {/* Navigation Menu (Desktop) */}
          <div className="bg-white rounded-3xl shadow-sm p-4 border border-gray-100 hidden lg:block">
            <nav className="space-y-1">
              {[
                { id: 'profile', label: 'Profile Settings', icon: User },
                { id: 'projects', label: 'My Projects', icon: Award },
                { id: 'billing', label: 'Billing', icon: DollarSignIcon },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </button>
              ))}
              <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all mt-4">
                <LogOutIcon size={20} />
                Sign Out
              </button>
            </nav>
          </div>
        </div>

        {/* MIDDLE COLUMN: Main Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Tabs (Mobile) */}
          <div className="lg:hidden flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {['profile', 'projects'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2 rounded-full whitespace-nowrap ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden min-h-[600px]">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                {activeTab === 'profile' && 'Profile Settings'}
                {activeTab === 'projects' && 'My Projects'}
              </h1>
              {activeTab === 'profile' && (
                <button
                  onClick={handleSaveProfile}
                  disabled={isLoading}
                  className="bg-green-600 text-white px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-green-700 transition disabled:opacity-50"
                >
                  <Save size={18} />
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
              )}
            </div>

            <div className="p-6">
              {/* PROFILE FORM */}
              {activeTab === 'profile' && (
                <div className="space-y-8">
                  {/* Personal Info */}
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <User size={18} className="text-blue-500" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputGroup label="First Name" name="FirstName" value={formData.FirstName} onChange={handleInputChange} />
                      <InputGroup label="Middle Name" name="MiddleName" value={formData.MiddleName} onChange={handleInputChange} />
                      <InputGroup label="Last Name" name="LastName" value={formData.LastName} onChange={handleInputChange} />

                      <InputGroup label="Email" name="Email" value={formData.Email} onChange={handleInputChange} icon={Mail} disabled />
                      <InputGroup label="Phone" name="Mobile" value={formData.Mobile} onChange={handleInputChange} icon={Phone} disabled />

                      <InputGroup label="Date of Birth" name="DOB" type="date" value={formData.DOB?.split('T')[0]} onChange={handleInputChange} icon={Calendar} />

                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Gender</label>
                        <div className="relative">
                          <select
                            name="Gender"
                            value={formData.Gender || ''}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition outline-none text-gray-900 appearance-none"
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </section>

                  <hr className="border-gray-100" />

                  {/* Professional Info */}
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Briefcase size={18} className="text-blue-500" />
                      Professional Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputGroup label="Designation" name="Designation" value={formData.Designation} onChange={handleInputChange} />
                      <InputGroup label="Current Company" name="CurrentCompany" value={formData.CurrentCompany} onChange={handleInputChange} />

                      <InputGroup label="Years of Experience" name="YearOfExperience" type="number" value={formData.YearOfExperience} onChange={handleInputChange} icon={Clock} />
                      <InputGroup label="Expected Salary" name="ExpectedSalary" type="number" value={formData.ExpectedSalary} onChange={handleInputChange} icon={DollarSign} />
                      <InputGroup label="Notice Period (Days)" name="NoticePeriod" type="number" value={formData.NoticePeriod} onChange={handleInputChange} icon={Clock} />
                    </div>
                  </section>

                  <hr className="border-gray-100" />

                  {/* Education */}
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <GraduationCap size={18} className="text-blue-500" />
                      Education
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputGroup label="Education / Degree" name="Education" value={formData.Education} onChange={handleInputChange} icon={BookOpen} />
                      <InputGroup label="Year of Passing" name="YearOfPassing" value={formData.YearOfPassing} onChange={handleInputChange} icon={Calendar} />
                    </div>
                  </section>

                  <hr className="border-gray-100" />

                  {/* Links */}
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Globe size={18} className="text-blue-500" />
                      Social Profiles
                    </h3>
                    <div className="space-y-4">
                      <InputGroup label="LinkedIn URL" name="LinkedinUrl" value={formData.LinkedinUrl} onChange={handleInputChange} icon={Linkedin} />
                      <InputGroup label="GitHub URL" name="GithubUrl" value={formData.GithubUrl} onChange={handleInputChange} icon={Github} />
                      <InputGroup label="Portfolio URL" name="Portfolio" value={formData.Portfolio} onChange={handleInputChange} icon={Globe} />
                    </div>
                  </section>
                </div>
              )}

              {/* PROJECT MANAGER */}
              {activeTab === 'projects' && (
                <ProjectManager />
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Widgets */}
        <div className="lg:col-span-3 space-y-6">
          {/* Skills Widget */}
          <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Skills</h3>

            {/* Add Skill Input */}
            <div className="flex gap-2 mb-4">
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
                placeholder="Add a skill..."
                className="flex-1 px-3 py-2 w-[100px] bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition"
              />
              <button
                onClick={handleAddSkill}
                disabled={!newSkill.trim()}
                className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition"
              >
                <Plus size={18} />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {getSkillsArray().length > 0 ? (
                getSkillsArray().map((skill, i) => (
                  <div key={i} className="group flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition">
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="hover:text-red-500 opacity-50 group-hover:opacity-100 transition"
                    >
                      &times;
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm">No skills listed yet.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Components
const InputGroup = ({ label, name, value, onChange, icon: Icon, type = "text", disabled = false }: any) => (
  <div className="relative group">
    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">{label}</label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value || ''}
        onChange={onChange}
        disabled={disabled}
        className={`w-full ${Icon ? 'pl-11' : 'pl-4'} pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition outline-none disabled:opacity-60 disabled:cursor-not-allowed text-gray-900 placeholder-gray-400`}
        placeholder={`Enter ${label}`}
      />
    </div>
  </div>
);

// Placeholder Icons
const DollarSignIcon = ({ size, className }: any) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const LogOutIcon = ({ size, className }: any) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
