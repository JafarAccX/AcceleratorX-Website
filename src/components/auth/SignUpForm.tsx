// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Toaster, toast } from "react-hot-toast";
// import { useUser } from "../../context/UserContext";
// // import { supabase } from "../../lib/supabaseClient";
// import { useCreateUser, useGetUserByMobile } from "../../hooks/customer";
// import { CreateCustomerPayload } from "../../types/customer";
// import Timer from "./timer";

// const LoadingSpinner = () => (
//   <motion.div
//     className="inline-block h-4 w-4 border-2 border-white rounded-full border-t-transparent"
//     animate={{ rotate: 360 }}
//     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//   />
// );

// interface WindowOverride extends Window {
//   OTPless?: any;
// }

// export interface SignUpFormProps {
//   onSuccess?: () => void;
// }

// export const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess }) => {
//   const navigate = useNavigate();
//   const { setUser } = useUser();
//   const [formState, setFormState] = useState<Partial<CreateCustomerPayload>>({
//     callingCode: "+91",
//     mobileVerified: false,
//     emailVerified: false,
//     active: true,
//     certificateGenerated: false,
//     role: "user",
//   });

//   const { mutateAsync: createUser } = useCreateUser();
//   const [otp, setOtp] = useState("");
//   const [showOTP, setShowOTP] = useState(false);
//   const [timer, setTimer] = useState(0);

//   const { data: existingUser, isLoading, error } = useGetUserByMobile(formState?.mobile || "");

//   console.log(error);

//   const handleInputChange = (field: keyof CreateCustomerPayload, value: any) => {
//     setFormState((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSendOTP = async () => {
//     if (!formState.mobile || formState.mobile.length !== 10) {
//       toast.error("Please enter a valid 10-digit phone number");
//       return;
//     }

//     const OTPLess = (window as WindowOverride)?.OTPless;
//     if (!OTPLess) {
//       toast.error("OTP service not available. Please try again later.");
//       return;
//     }

//     try {
//       if (existingUser) {
//         toast.error("This phone number is already registered. Please sign in instead.");
//         return;
//       }

//       const OTPlessSignin = new OTPLess();

//       const { success, error } = await OTPlessSignin.initiate({
//         channel: "PHONE",
//         phone: formState.mobile,
//         countryCode: "+91",
//         otpLength: 6,
//         expiry: 60,
//       });

//       if (success) {
//         setShowOTP(true);
//         setTimer(60);
//         toast.success("OTP sent successfully");
//       } else {
//         throw new Error(error || "Failed to send OTP");
//       }
//     } catch (error) {
//       const errorMessage = error instanceof Error ? error.message : "Failed to send OTP. Please try again.";
//       toast.error(errorMessage);
//       setShowOTP(false);
//     }
//   };

//   const handleVerifyOtp = async (otp: string) => {
//     if (!otp || otp.length !== 6) {
//       toast.error("Please enter a valid 6-digit OTP");
//       return;
//     }

//     const OTPLess = (window as WindowOverride)?.OTPless;
//     if (!OTPLess) {
//       toast.error("OTP service not available. Please try again later.");
//       return;
//     }

//     try {
//       const OTPlessSignin = new OTPLess();

//       const { response, success, error } = await OTPlessSignin.verify({
//         otp: otp,
//         channel: "PHONE",
//         phone: formState.mobile,
//         countryCode: "+91",
//       });

//       if (success && response?.verification === "COMPLETED") {
//         // setFormState(formState.mobileVerified);
//         handleInputChange("mobileVerified", true);
//         setShowOTP(false);
//         setOtp("");
//         toast.success("Phone number verified successfully");
//       } else {
//         throw new Error(error || "Failed to verify OTP");
//       }
//     } catch (error) {
//       const errorMessage = error instanceof Error ? error.message : "Invalid OTP. Please try again.";
//       toast.error(errorMessage);
//       setOtp("");
//     }
//   };

//   const handleResendOTP = async () => {
//     setTimer(60);
//     await handleSendOTP();
//   };

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//   if (!phoneVerified) {
//     toast.error("Please verify your phone number first");
//     return;
//   }

//   if (!fullName.trim()) {
//     toast.error("Please enter your full name");

//     return;
//   }

//   if (!email.trim()) {
//     toast.error("Please enter your email address");

//     return;
//   }

//   if (!educationLevel.trim()) {
//     toast.error("Please enter your education level");

//     return;
//   }

//   if (!workExperience.trim()) {
//     toast.error("Please enter your work experience");

//     return;
//   }

//   if (!designation.trim()) {
//     toast.error("Please enter your designation");

//     return;
//   }

//       if (existingUser) {
//         // console.log("no need to insert the data again", existingUser);

//         throw new Error(error?.message || "Failed to fetch user data");
//       } else {
//         console.log("sending the data to supabase");

//         const data = await createUser(formState as CreateCustomerPayload);

//         toast.success("User data inserted successfully");

//         // Update UserContext with the new user data
//         setUser(data);

//         localStorage.setItem(
//           "userData",
//           JSON.stringify({
//             ...data,
//             isAuthenticated: true,
//           }),
//         );
//       }

//       toast.success("Welcome to the platform!");

//       // Call onSuccess first if it exists
//       if (onSuccess) {
//         onSuccess();
//       }

//       console.log("navigating to profile page");

//       // Navigate after onSuccess
//       navigate("/profile");
//     } catch (error) {
//       console.error("Error during signup:", error);
//       toast.error("Failed to create account");
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900">
//       {/* Left side illustration */}
//       <div className="hidden lg:flex w-1/2 flex-col items-end justify-center p-8 relative">
//         <div className="relative w-full flex items-center justify-center max-w-[600px]">
//           <img src="/assets/signup.png" alt="People Illustration" className="relative z-10 w-full" />
//         </div>
//       </div>

//       {/* Right side form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8">
//         <div className="w-full max-w-[450px] space-y-8">
//           <div className="space-y-3">
//             <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-3">
//               Sign Up
//             </h1>
//           </div>

//           <form
//             className="space-y-6"
//             onSubmit={(e) => {
//               e.preventDefault();
//               if (showOTP) {
//                 handleVerifyOtp(otp);
//               } else if (formState.mobile) {
//                 handleSignUp(e);
//               } else {
//                 handleSendOTP();
//               }
//             }}
//           >
//             <div className="space-y-5">
//               <div className="flex items-center gap-4">
//                 <label htmlFor="email" className="text-blue-50 font-medium min-w-[100px]">
//                   FirstName
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={formState.firstName || ""}
//                   onChange={(e) => handleInputChange("firstName", e.target.value)}
//                   className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                 />
//               </div>

//               <div className="flex items-center gap-4">
//                 <label htmlFor="email" className="text-blue-50 font-medium min-w-[100px]">
//                   LastName
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={formState.lastName || ""}
//                   onChange={(e) => handleInputChange("lastName", e.target.value)}
//                   className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                 />
//               </div>

//               <div className="flex items-center gap-4">
//                 <label htmlFor="email" className="text-blue-50 font-medium min-w-[100px]">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   required
//                   placeholder="Enter your email address"
//                   value={formState.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   disabled={isLoading}
//                   className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                 />
//               </div>

//               <div className="flex items-start  gap-4">
//                 <label htmlFor="phoneNumber" className="text-blue-50 font-medium min-w-[100px] mt-2">
//                   Mobile Number
//                 </label>
//                 <div className="relative focus:ring-2 w-full">
//                   <div className="flex items-center   overflow-hidden w-full">
//                     <span className="rounded-lg text-[#6B7B93] bg-white/10 px-4 py-3 text-sm mr-1">+91</span>
//                     <input
//                       id="phoneNumber"
//                       type="tel"
//                       maxLength={10}
//                       placeholder="Enter mobile number"
//                       value={formState.mobile}
//                       onChange={(e) => handleInputChange("mobile", e.target.value)}
//                       disabled={showOTP || isLoading || !!formState.mobileVerified}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2 "
//                     />
//                   </div>

//                   {!formState.mobileVerified && !showOTP && (
//                     <button
//                       type="button"
//                       onClick={handleSendOTP}
//                       className="mt-3 w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg p-3 font-medium disabled:opacity-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100"
//                       disabled={isLoading || !formState.mobile || formState.mobile.length !== 10}
//                     >
//                       {isLoading ? <LoadingSpinner /> : "Verify Phone Number"}
//                     </button>
//                   )}
//                 </div>
//               </div>

//               {showOTP && (
//                 <div className="flex items-center gap-4">
//                   <label htmlFor="otp" className="text-blue-50 font-medium min-w-[100px]">
//                     Enter OTP
//                   </label>
//                   <input
//                     id="otp"
//                     type="text"
//                     placeholder="Enter 6-digit OTP"
//                     value={otp}
//                     onChange={(e) => {
//                       setOtp(e.target.value);
//                       if (e.target.value.length === 6) {
//                         handleVerifyOtp(e.target.value);
//                       }
//                     }}
//                     maxLength={6}
//                     disabled={isLoading}
//                     className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                   />

//                   {timer > 0 ? (
//                     <Timer showOTP={showOTP} />
//                   ) : (
//                     <button
//                       type="button"
//                       onClick={handleResendOTP}
//                       className="w-full text-blue-300 hover:text-blue-200 text-sm mt-2 transition-colors duration-200"
//                       disabled={isLoading}
//                     >
//                       Resend OTP
//                     </button>
//                   )}
//                 </div>
//               )}

//               {formState.mobileVerified && (
//                 <>
//                   <div className="flex items-center gap-4">
//                     <label htmlFor="workExperience" className="text-blue-50 font-medium min-w-[100px]">
//                       Experience
//                     </label>
//                     <input
//                       id="workExperience"
//                       required
//                       placeholder="Enter your work experience"
//                       value={formState.yearOfExperience}
//                       onChange={(e) => handleInputChange("yearOfExperience", e.target.value)}
//                       disabled={isLoading}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <label htmlFor="designation" className="text-blue-50 font-medium min-w-[100px]">
//                       Designation
//                     </label>
//                     <input
//                       id="designation"
//                       required
//                       placeholder="Enter your designation"
//                       value={formState.designation}
//                       onChange={(e) => handleInputChange("designation", e.target.value)}
//                       disabled={isLoading}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   {/* Date of Birth */}
//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">Date of Birth</label>
//                     <input
//                       type="date"
//                       value={formState.dob || ""}
//                       onChange={(e) => handleInputChange("dob", e.target.value)}
//                       className="bg-white/10 border-white/10 text-white focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg p-2"
//                     />
//                   </div>

//                   {/* Gender */}
//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">Gender</label>
//                     <select
//                       value={formState.gender || ""}
//                       onChange={(e) => handleInputChange("gender", e.target.value)}
//                       className="bg-white/10 border-white/10 text-white focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg p-2"
//                     >
//                       <option className="bg-white/10" value="">
//                         Select Gender
//                       </option>
//                       <option className="bg-white/10" value="MALE">
//                         Male
//                       </option>
//                       <option className="bg-white/10" value="FEMALE">
//                         Female
//                       </option>
//                       <option className="bg-white/10" value="OTHER">
//                         Other
//                       </option>
//                     </select>
//                   </div>

//                   {/* LinkedIn URL */}
//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">LinkedIn</label>
//                     <input
//                       type="url"
//                       placeholder="LinkedIn profile link"
//                       value={formState.linkedinUrl || ""}
//                       onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   {/* GitHub URL */}
//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">GitHub</label>
//                     <input
//                       type="url"
//                       placeholder="GitHub profile link"
//                       value={formState.githubUrl || ""}
//                       onChange={(e) => handleInputChange("githubUrl", e.target.value)}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   {/* Expected Salary */}
//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">Expected Salary</label>
//                     <input
//                       type="number"
//                       placeholder="Expected Salary (INR)"
//                       value={formState.expectedSalary || ""}
//                       onChange={(e) => handleInputChange("expectedSalary", Number(e.target.value))}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   {/* Notice Period */}
//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">Notice Period</label>
//                     <input
//                       type="number"
//                       placeholder="Notice period in days"
//                       value={formState.noticePeriod || ""}
//                       onChange={(e) => handleInputChange("noticePeriod", Number(e.target.value))}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   {/* Current Company */}
//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">Current Company</label>
//                     <input
//                       type="text"
//                       placeholder="Current company name"
//                       value={formState.currentCompany || ""}
//                       onChange={(e) => handleInputChange("currentCompany", e.target.value)}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   {/* Resume Upload */}
//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">Resume</label>
//                     <input
//                       type="text"
//                       placeholder="Resume URL"
//                       value={formState.resume || ""}
//                       onChange={(e) => handleInputChange("resume", e.target.value)}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   {/* Cover Letter Upload */}
//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">Cover Letter</label>
//                     <input
//                       type="text"
//                       placeholder="Cover Letter URL"
//                       value={formState.coverLetter || ""}
//                       onChange={(e) => handleInputChange("coverLetter", e.target.value)}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   {/* Portfolio */}
//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">Portfolio</label>
//                     <input
//                       type="url"
//                       placeholder="Portfolio link"
//                       value={formState.portfolio || ""}
//                       onChange={(e) => handleInputChange("portfolio", e.target.value)}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   {/* Referral Code */}
//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">Referral Code</label>
//                     <input
//                       type="text"
//                       placeholder="Referral code (optional)"
//                       value={formState.referralCode || ""}
//                       onChange={(e) => handleInputChange("referralCode", e.target.value)}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <label className="text-blue-50 font-medium min-w-[100px]">Skills</label>
//                     <input
//                       type="text"
//                       placeholder="Skills"
//                       value={formState.skills || ""}
//                       onChange={(e) => handleInputChange("skills", e.target.value)}
//                       className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200 focus:ring-2 border-0 w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg p-3.5 font-medium relative transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? (
//                       <div className="flex items-center justify-center gap-2">
//                         <LoadingSpinner />
//                         <span>Registering...</span>
//                       </div>
//                     ) : (
//                       "Register"
//                     )}
//                   </button>
//                 </>
//               )}
//             </div>
//           </form>

//           <div className="text-center">
//             <p className="text-blue-200/60">
//               Already have an account?{" "}
//               <button
//                 onClick={() => navigate("/sign-in")}
//                 className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
//               >
//                 Sign In
//               </button>
//             </p>
//           </div>

//           <Toaster position="top-center" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useUser } from "../../context/UserContext";
// import { supabase } from "../../lib/supabaseClient";
import { useCreateUser, useGetUserByMobile } from "../../hooks/customer";
import { CreateCustomerPayload } from "../../types/customer";
import Timer from "./timer";

const LoadingSpinner = () => (
  <motion.div
    className="inline-block h-4 w-4 border-2 border-white rounded-full border-t-transparent"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
);

interface WindowOverride extends Window {
  OTPless?: any;
}

export interface SignUpFormProps {
  onSuccess?: () => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess }) => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [formState, setFormState] = useState<Partial<CreateCustomerPayload>>({
    callingCode: "+91",
    mobileVerified: false,
    emailVerified: false,
    active: true,
    certificateGenerated: false,
    role: "user",
  });

  const { mutateAsync: createUser } = useCreateUser();
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { data: existingUser, error } = useGetUserByMobile(formState?.mobile || "");

  console.log(error);

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  const handleInputChange = (field: keyof CreateCustomerPayload, value: any) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendOTP = async () => {
    if (!formState.mobile || formState.mobile.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    const OTPLess = (window as WindowOverride)?.OTPless;
    if (!OTPLess) {
      toast.error("OTP service not available. Please try again later.");
      return;
    }

    try {
      if (existingUser) {
        toast.error("This phone number is already registered. Please sign in instead.");
        return;
      }

      const OTPlessSignin = new OTPLess();

      const { success, error } = await OTPlessSignin.initiate({
        channel: "PHONE",
        phone: formState.mobile,
        countryCode: "+91",
        otpLength: 6,
        expiry: 60,
      });

      if (success) {
        setShowOTP(true);
        setTimer(60);
        toast.success("OTP sent successfully");
      } else {
        throw new Error(error || "Failed to send OTP");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send OTP. Please try again.";
      toast.error(errorMessage);
      setShowOTP(false);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    const OTPLess = (window as WindowOverride)?.OTPless;
    if (!OTPLess) {
      toast.error("OTP service not available. Please try again later.");
      return;
    }

    try {
      const OTPlessSignin = new OTPLess();

      const { response, success, error } = await OTPlessSignin.verify({
        otp: otp,
        channel: "PHONE",
        phone: formState.mobile,
        countryCode: "+91",
      });

      if (success && response?.verification === "COMPLETED") {
        // setFormState(formState.mobileVerified);
        handleInputChange("mobileVerified", true);
        setShowOTP(false);
        setOtp("");
        toast.success("Phone number verified successfully");
      } else {
        throw new Error(error || "Failed to verify OTP");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Invalid OTP. Please try again.";
      toast.error(errorMessage);
      setOtp("");
    }
  };

  const handleResendOTP = async () => {
    setTimer(60);
    await handleSendOTP();
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      if (!formState.mobileVerified) {
        toast.error("Please verify your phone number first");
        return;
      }

      if (!formState.firstName?.trim()) {
        toast.error("Please enter your full name");

        return;
      }

      if (!formState.email?.trim()) {
        toast.error("Please enter your email address");

        return;
      }

      if (existingUser) {
        throw new Error(error?.message || "Failed to fetch user data");
      } else {
        console.log("sending the data to supabase");

        // Prepare form data with default values for backend requirements
        const formDataWithDefaults = {
          ...formState,
          // Set default values for fields that backend requires but user doesn't need to fill
          yearOfExperience: formState.yearOfExperience || "0",
          designation: formState.designation || "Not Specified",
          dob: formState.dob || null,
          gender: formState.gender || "OTHER",
          linkedinUrl: formState.linkedinUrl || "",
          githubUrl: formState.githubUrl || "",
          expectedSalary: formState.expectedSalary || 0,
          noticePeriod: formState.noticePeriod || 0,
          currentCompany: formState.currentCompany || "",
          resume: formState.resume || "",
          coverLetter: formState.coverLetter || "",
          portfolio: formState.portfolio || "",
          referralCode: formState.referralCode || "",
          skills: formState.skills || "",
        };

        const data = await createUser(formDataWithDefaults as CreateCustomerPayload);

        toast.success("User data inserted successfully");

        // Update UserContext with the new user data
        setUser(data);

        localStorage.setItem(
          "userData",
          JSON.stringify({
            ...data,
            isAuthenticated: true,
          }),
        );
      }

      toast.success("Welcome to the platform!");

      // Call onSuccess first if it exists
      if (onSuccess) {
        onSuccess();
      }

      console.log("navigating to profile page");

      // Navigate after onSuccess
      navigate("/profile");
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900">
      {/* Left side illustration */}
      <div className="hidden lg:flex w-1/2 flex-col items-end justify-center p-8 relative">
        <div className="relative w-full flex items-center justify-center max-w-[600px]">
          <img src="/assets/signup.png" alt="People Illustration" className="relative z-10 w-full" />
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[450px] space-y-8">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-3">
              Sign Up
            </h1>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (showOTP) {
                handleVerifyOtp(otp);
              } else if (formState.mobile) {
                handleSignUp(e);
              } else {
                handleSendOTP();
              }
            }}
          >
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <label htmlFor="firstName" className="text-blue-50 font-medium min-w-[100px]">
                  FirstName
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formState.firstName || ""}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
                />
              </div>

              <div className="flex items-center gap-4">
                <label htmlFor="lastName" className="text-blue-50 font-medium min-w-[100px]">
                  LastName
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formState.lastName || ""}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
                />
              </div>

              <div className="flex items-center gap-4">
                <label htmlFor="email" className="text-blue-50 font-medium min-w-[100px]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={formState.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={isLoading}
                  className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
                />
              </div>

              <div className="flex items-start  gap-4">
                <label htmlFor="phoneNumber" className="text-blue-50 font-medium min-w-[100px] mt-2">
                  Mobile Number
                </label>
                <div className="relative focus:ring-2 w-full">
                  <div className="flex items-center   overflow-hidden w-full">
                    <span className="rounded-lg text-[#6B7B93] bg-white/10 px-4 py-3 text-sm mr-1">+91</span>
                    <input
                      id="phoneNumber"
                      type="tel"
                      maxLength={10}
                      placeholder="Enter mobile number"
                      value={formState.mobile}
                      onChange={(e) => handleInputChange("mobile", e.target.value)}
                      disabled={showOTP || isLoading || !!formState.mobileVerified}
                      className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2 "
                    />
                  </div>

                  {!formState.mobileVerified && !showOTP && (
                    <button
                      type="button"
                      onClick={handleSendOTP}
                      className="mt-3 w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg p-3 font-medium disabled:opacity-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100"
                      disabled={isLoading || !formState.mobile || formState.mobile.length !== 10}
                    >
                      {isLoading ? <LoadingSpinner /> : "Verify Phone Number"}
                    </button>
                  )}
                </div>
              </div>

              {showOTP && (
                <div className="flex items-center gap-4">
                  <label htmlFor="otp" className="text-blue-50 font-medium min-w-[100px]">
                    Enter OTP
                  </label>
                  <input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value);
                      if (e.target.value.length === 6) {
                        handleVerifyOtp(e.target.value);
                      }
                    }}
                    maxLength={6}
                    disabled={isLoading}
                    className="bg-white/10 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200  focus:ring-2  border-0 placeholder:text-[#6B7B93] w-full text-sm py-3 rounded-lg placeholder:pl-7 p-2"
                  />

                  {timer > 0 ? (
                    <Timer showOTP={showOTP} />
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      className="w-full text-blue-300 hover:text-blue-200 text-sm mt-2 transition-colors duration-200"
                      disabled={isLoading}
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              )}

              {formState.mobileVerified && (
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg p-3.5 font-medium relative transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <LoadingSpinner />
                      <span>Registering...</span>
                    </div>
                  ) : (
                    "Register"
                  )}
                </button>
              )}
            </div>
          </form>

          <div className="text-center">
            <p className="text-blue-200/60">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/sign-in")}
                className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
