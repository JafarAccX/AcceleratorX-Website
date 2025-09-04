import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Edit2, MailIcon, PhoneCall, LogOut, Save, X, User, Mail, Phone, Award, Building, Briefcase, DollarSign, Clock, Link, Linkedin } from "lucide-react";
import { u as useUser } from "../entry-server.js";
import { FaGithubAlt } from "react-icons/fa";
import { b as useUpdateUser } from "./customer-D8jXU4yb.js";
import { useNavigate } from "react-router";
import "react-dom/server";
import "@remix-run/router";
import "react-dom";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-hot-toast";
import "axios";
import "react-icons/pi";
import "@tanstack/react-query";
function Profile() {
  const navigate = useNavigate();
  const { mutateAsync: UpdateUser } = useUpdateUser();
  const { user, logout } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    CallingCode: user?.CallingCode,
    MobileVerified: user?.MobileVerified,
    EmailVerified: user?.EmailVerified,
    Active: user?.Active,
    CertificateGenerated: user?.CertificateGenerated,
    Role: user?.Role
  });
  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...user
    }));
  }, [user, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    try {
      const payload = {
        mobile: formData.Mobile || "",
        email: formData.Email || "",
        designation: formData.Designation || "",
        firstName: formData.FirstName || "",
        middleName: formData.MiddleName || "",
        lastName: formData.LastName || "",
        dob: formData.DOB || "",
        gender: formData.Gender || "",
        mobileVerified: formData.MobileVerified || false,
        emailVerified: formData.EmailVerified || false,
        referralCode: formData.ReferralCode || "",
        role: formData.Role || "",
        profilePicture: formData.ProfilePicture || "",
        resume: formData.Resume || "",
        coverLetter: formData.CoverLetter || "",
        portfolio: formData.Portfolio || "",
        linkedinUrl: formData.LinkedinUrl || "",
        githubUrl: formData.GithubUrl || "",
        yearOfExperience: formData.YearOfExperience || 0,
        expectedSalary: formData.ExpectedSalary || 0,
        noticePeriod: formData.NoticePeriod || 0,
        currentCompany: formData.CurrentCompany || "",
        skills: formData.Skills || "",
        certificateGenerated: formData.CertificateGenerated || false
      };
      const data = UpdateUser({
        custId: user.CustId,
        userData: payload
      });
      const updatedUser = { ...user, ...data };
      localStorage.setItem("userData", JSON.stringify(updatedUser));
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  if (!user) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]" }),
      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]" }),
      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full animate-bounce" })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-900 to-black mt-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-72 md:h-64 overflow-hidden bg-gradient-to-r from-blue-700/90 to-purple-700/90", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-noise opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 h-full flex items-end pb-8 mt-5", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-end gap-6 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex  items-center gap-4   p-6   w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsx("div", { className: "w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-xl", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full rounded-xl bg-gray-900 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text", children: user.FirstName?.[0]?.toUpperCase() + user.LastName?.[0]?.toUpperCase() || "U" }) }) }),
            isEditing && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Edit2, { className: "w-6 h-6 text-white/80" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mb-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold  text-white drop-shadow-md mb-1", children: user.FirstName + " " + user.LastName || "User" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center justify-start", children: [
                /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(MailIcon, { size: 20 }) }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300/90 font-medium", children: user.Email })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center justify-start", children: [
                /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(PhoneCall, { size: 20 }) }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300/90 font-medium", children: user.Mobile })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 md:min-w-[300px] mb-2", children: [
          !isEditing && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setIsEditing((prev) => !prev),
                className: "flex items-center gap-2 px-5 py-2.5 bg-blue-600/90 hover:bg-blue-700 text-white rounded-xl transition-all hover:scale-[1.02] shadow-lg",
                children: [
                  /* @__PURE__ */ jsx(Edit2, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium hidden md:block", children: "Edit Profile" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: handleLogout,
                className: "flex items-center gap-2  px-5  py-2.5 bg-red-600/90 hover:bg-red-700 text-white rounded-xl transition-all hover:scale-[1.02] shadow-lg",
                children: [
                  /* @__PURE__ */ jsx(LogOut, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium ", children: "Sign Out" })
                ]
              }
            )
          ] }),
          isEditing && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleSubmit,
                form: "profile-form",
                className: "flex items-center gap-2 px-5 py-2.5 bg-green-600/90 hover:bg-green-700 text-white rounded-xl transition-all hover:scale-[1.02] shadow-lg",
                children: [
                  /* @__PURE__ */ jsx(Save, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium   ", children: "Save" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setIsEditing((prev) => !prev),
                className: "flex items-center gap-2 px-5 py-2.5 bg-gray-600/90 hover:bg-gray-700 text-white rounded-xl transition-all hover:scale-[1.02] shadow-lg",
                children: [
                  /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Discard" })
                ]
              }
            )
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 py-8 ", children: /* @__PURE__ */ jsxs(
      "form",
      {
        id: "profile-form",
        onSubmit: handleSubmit,
        className: " flex flex-col gap-6 rounded-2xl p-4 shadow-xl border border-gray-700/30",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-white mb-4", children: "Personal Information" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "First Name" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(User, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "FirstName",
                      disabled: !isEditing,
                      value: formData.FirstName || "",
                      onChange: (e) => setFormData({ ...formData, FirstName: e.target.value }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "Middle Name" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(User, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "MiddleName",
                      disabled: !isEditing,
                      value: formData.MiddleName || "",
                      onChange: (e) => setFormData({ ...formData, MiddleName: e.target.value }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "Last Name" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(User, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "LastName",
                      disabled: !isEditing,
                      value: formData.LastName || "",
                      onChange: (e) => setFormData({ ...formData, LastName: e.target.value }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "Email" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      name: "Email",
                      disabled: !isEditing,
                      value: formData.Email || "",
                      onChange: (e) => setFormData({ ...formData, Email: e.target.value }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "Mobile" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "Mobile",
                      disabled: true,
                      value: formData.Mobile || "",
                      className: "w-full pl-10 pr-4 py-3.5 bg-gray-700/20 border border-gray-600/30 rounded-xl text-white placeholder-gray-500"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "Gender" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(User, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      name: "Gender",
                      disabled: !isEditing,
                      value: formData.Gender || "",
                      onChange: (e) => setFormData({ ...formData, Gender: e.target.value }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`,
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "", children: "Select Gender" }),
                        /* @__PURE__ */ jsx("option", { value: "Male", children: "Male" }),
                        /* @__PURE__ */ jsx("option", { value: "Female", children: "Female" }),
                        /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-white mb-4", children: "Professional Information" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "Designation" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "Designation",
                      disabled: !isEditing,
                      value: formData.Designation || "",
                      onChange: (e) => setFormData({ ...formData, Designation: e.target.value }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "Current Company" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Building, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "CurrentCompany",
                      disabled: !isEditing,
                      value: formData.CurrentCompany || "",
                      onChange: (e) => setFormData({ ...formData, CurrentCompany: e.target.value }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "Years of Experience" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Briefcase, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "number",
                      name: "YearOfExperience",
                      disabled: !isEditing,
                      value: formData.YearOfExperience || "",
                      onChange: (e) => setFormData({ ...formData, YearOfExperience: e.target.value ? parseInt(e.target.value) : null }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "Expected Salary" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(DollarSign, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "number",
                      name: "ExpectedSalary",
                      disabled: !isEditing,
                      value: formData.ExpectedSalary || "",
                      onChange: (e) => setFormData({ ...formData, ExpectedSalary: e.target.value ? parseInt(e.target.value) : null }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "Notice Period (days)" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "number",
                      name: "NoticePeriod",
                      disabled: !isEditing,
                      value: formData.NoticePeriod || "",
                      onChange: (e) => setFormData({ ...formData, NoticePeriod: e.target.value ? parseInt(e.target.value) : null }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-white mb-4", children: "Profile Links" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "Portfolio URL" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Link, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "url",
                      name: "Portfolio",
                      disabled: !isEditing,
                      value: formData.Portfolio || "",
                      onChange: (e) => setFormData({ ...formData, Portfolio: e.target.value }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "LinkedIn URL" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "url",
                      placeholder: "https://www.linkedin.com/in/username/",
                      name: "LinkedinUrl",
                      disabled: !isEditing,
                      value: formData.LinkedinUrl || "",
                      onChange: (e) => setFormData({ ...formData, LinkedinUrl: e.target.value }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-400 mb-2 pl-1", children: "GitHub URL" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(FaGithubAlt, { className: "w-5 h-5 text-gray-500 absolute left-3 top-3.5" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "url",
                      name: "GithubUrl",
                      disabled: !isEditing,
                      value: formData.GithubUrl || "",
                      onChange: (e) => setFormData({ ...formData, GithubUrl: e.target.value }),
                      className: `w-full pl-10 pr-4 py-3.5 ${isEditing ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60" : "bg-gray-700/20"} border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${isEditing && "focus:ring-2 focus:ring-blue-500/50"}`
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ]
      }
    ) })
  ] });
}
export {
  Profile as default
};
