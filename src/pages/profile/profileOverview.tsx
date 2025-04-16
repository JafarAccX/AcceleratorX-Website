import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Skeleton } from "@mui/material";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit2,
  LogOut,
  Save,
  X,
  CreditCard,
  XCircle,
  CheckCircle2,
} from "lucide-react";
import { supabase } from "../../lib/supabaseClient";
import { useProfile } from "../../context/ProfileContext";

// Define types for better type safety
interface PaymentDetail {
  id: string;
  amount_paid: number;
  payment_status: string;
  payment_type?: string;
  emi_tenure?: number;
  next_emi_date?: string;
  created_at: string;
  courses?: {
    title: string;
    thumbnail_url?: string;
  };
}

export default function Profile() {
  const navigate = useNavigate();
  const { profile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    phone_number: "",
    full_name: "",
    email: "",
    education_level: "",
    work_experience: "",
    designation: "",
  });
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Payment History Skeleton Component
  const PaymentHistorySkeleton = () => (
    <div className="space-y-3">
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-gray-700/20 rounded-xl p-5 border border-gray-700/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton
                variant="rectangular"
                width={56}
                height={56}
                className="rounded-lg"
                sx={{ bgcolor: "grey.800" }}
              />
              <div>
                <Skeleton variant="text" width={220} height={28} className="mb-2" sx={{ bgcolor: "grey.800" }} />
                <Skeleton variant="text" width={180} height={20} sx={{ bgcolor: "grey.800" }} />
              </div>
            </div>
            <div className="text-right">
              <Skeleton variant="text" width={120} height={28} className="mb-2" sx={{ bgcolor: "grey.800" }} />
              <Skeleton variant="text" width={100} height={24} sx={{ bgcolor: "grey.800" }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Fetch Payment Details
  const fetchPaymentDetails = async () => {
    setIsLoading(true);
    try {
      // Simulate network delay for smoother loading experience
      await new Promise((resolve) => setTimeout(resolve, 500));

      const { data, error } = await supabase
        .from("enrollments")
        .select(
          `
          *,
          courses:course_id (
            title
          )
          `,
        )
        .eq("user_id", profile?.id)
        .order("created_at", { ascending: false });

      if (error) {
        // More specific error handling
        if (error.code === "PGRST116") {
          // No rows returned is not necessarily an error
          setPaymentDetails([]);
        } else {
          throw error;
        }
      } else {
        // Transform data to match PaymentDetail interface
        const transformedData =
          data?.map((enrollment) => ({
            id: enrollment.id,
            amount_paid: enrollment.final_amount,
            payment_status: enrollment.payment_status,
            payment_type: enrollment.is_emi ? "emi" : "full",
            emi_tenure: enrollment.emi_tenure,
            created_at: enrollment.created_at,
            courses: {
              title: enrollment.courses?.title,
              thumbnail_url: "", // Removed as per schema
            },
          })) || [];

        setPaymentDetails(transformedData);
      }
    } catch (error) {
      console.error("Error fetching payment details:", error);
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred while fetching payment details",
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data setup and navigation
  useEffect(() => {
    if (!profile) {
      navigate("/");
      return;
    }

    setFormData({
      id: profile.id || "",
      full_name: profile.full_name || "",
      email: profile.email || "",
      phone_number: profile.phone_number || "",
      education_level: profile.education_level || "",
      work_experience: profile.work_experience || "",
      designation: profile.designation || "",
    });

    // Fetch payment details when user is available
    fetchPaymentDetails();
  }, [profile, navigate]);

  // Profile Update Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    try {
      const { data, error } = await supabase
        .from("profiles")
        .update({
          full_name: formData.full_name,
          email: formData.email,
          phone_number: formData.phone_number,
          education_level: formData.education_level,
          work_experience: formData.work_experience,
          designation: formData.designation,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", profile.id)
        .select()
        .single();

      if (error) throw error;

      // Update local storage with flattened structure
      const updatedUser = { ...profile, ...data };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      //   otplessAuth.setUser(updatedUser);

      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  // Logout Handler
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Loading state for initial user check
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Enhanced Profile Header */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-r from-blue-700/90 to-purple-700/90">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-end pb-8">
          <div className="flex items-end gap-6 w-full">
            <div className="relative group">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">
                    {user.name?.[0]?.toUpperCase() || "U"}
                  </span>
                </div>
              </div>
              {isEditing && (
                <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                  <Edit2 className="w-6 h-6 text-white/80" />
                </div>
              )}
            </div>

            <div className="flex-1 mb-2">
              <h1 className="text-3xl font-bold text-white drop-shadow-md mb-1">{user.name || "User"}</h1>
              <p className="text-gray-300/90 font-medium">{user.email || user.phone}</p>
            </div>

            <div className="flex gap-3 mb-2">
              {!isEditing ? (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/90 hover:bg-blue-700 text-white rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                  >
                    <Edit2 className="w-5 h-5" />
                    <span className="font-medium">Edit Profile</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-5 py-2.5 bg-red-600/90 hover:bg-red-700 text-white rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    form="profile-form"
                    className="flex items-center gap-2 px-5 py-2.5 bg-green-600/90 hover:bg-green-700 text-white rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                  >
                    <Save className="w-5 h-5" />
                    <span className="font-medium">Save Changes</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-600/90 hover:bg-gray-700 text-white rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                  >
                    <X className="w-5 h-5" />
                    <span className="font-medium">Discard</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Profile Form */}
      <div className="max-w-7xl mx-auto px-4 py-8 -mt-12">
        <form
          id="profile-form"
          onSubmit={handleSubmit}
          className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: User, label: "Name", name: "name" },
              { icon: Mail, label: "Email", name: "email" },
              { icon: Phone, label: "Phone", name: "phone", disabled: true },
              { icon: MapPin, label: "City", name: "city" },
              { icon: MapPin, label: "State", name: "state" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label className="block text-sm font-medium text-gray-400 mb-2 pl-1">{field.label}</label>
                <div className="relative">
                  <field.icon className="w-5 h-5 text-gray-500 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    name={field.name}
                    disabled={!isEditing || field.disabled}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3.5 ${
                      isEditing && !field.disabled
                        ? "bg-gray-700/40 hover:bg-gray-700/60 focus:bg-gray-700/60"
                        : "bg-gray-700/20"
                    } border border-gray-600/30 rounded-xl text-white placeholder-gray-500 transition-all ${
                      !field.disabled && "focus:ring-2 focus:ring-blue-500/50"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>

      {/* Enhanced Payment History Section */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/30">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-purple-400" />
              Payment History
            </h2>
          </div>

          {isLoading ? (
            <PaymentHistorySkeleton />
          ) : paymentDetails.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="mb-4 p-5 bg-gray-700/30 rounded-full">
                <CreditCard className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">No payment history found</h3>
              <p className="text-gray-500 max-w-md">
                Your completed payments will appear here once you enroll in a course.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {paymentDetails.map((payment) => (
                <div
                  key={payment.id}
                  className="group bg-gray-700/20 hover:bg-gray-700/30 border border-gray-700/30 rounded-xl p-5 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-700/30 rounded-lg">
                        <CreditCard className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">{payment.courses?.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {new Date(payment.created_at).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold text-white mb-1.5">
                        ₹{payment.amount_paid.toLocaleString("en-IN")}
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/15 to-green-600/10">
                        {payment.payment_status === "completed" ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-medium text-green-400">Successful</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-red-400" />
                            <span className="text-sm font-medium text-red-400">Failed</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  {payment.payment_type === "emi" && (
                    <div className="mt-4 pt-4 border-t border-gray-700/30">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>
                          EMI Plan: {payment.emi_tenure} months • Next Payment:{" "}
                          {payment.next_emi_date ? new Date(payment.next_emi_date).toLocaleDateString() : "N/A"}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
