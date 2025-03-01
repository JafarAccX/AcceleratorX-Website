//Working Form File

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import { useWorkshop } from "../../../context/WorkshopContext";
import { useNavigate } from "react-router-dom";
import { WORKSHOP_PRICE } from "../../../utils/constants_price";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});


interface FormData {
  name: string;
  email: string;
  phone: string;
  education: string;
  designation: string;
  yearsOfExperience: string;
}

const WSForm = () => {
  const { workshopType, zoomMeetingDetails } = useWorkshop();
  const navigate = useNavigate();
  // console.log('WSForm - Current workshop type:', workshopType);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    education: "",
    designation: "",
    yearsOfExperience: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [registrationId, setRegistrationId] = useState<string | null>(null);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [paymentCancelled, setPaymentCancelled] = useState(false);
  const [showCancellationModal, setShowCancellationModal] = useState(false);

  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  console.log("API URL:", apiUrl);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handlePayment = async (registrationId: string) => {
    console.log("Initiating payment for registration:", registrationId);
    const res = await initializeRazorpay();
    if (!res) {
      console.error("Razorpay SDK failed to load");
      toast.error("Razorpay SDK failed to load");
      return false;
    }

    try {
      console.log("Creating order with backend...");
      const response = await fetch(`${apiUrl.replace('/api', '')}/workshop/create-workshop-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: WORKSHOP_PRICE.amount,
          registrationId,
        }),
      });

      const responseData = await response.json();
      console.log("Backend response:", responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to create order");
      }

      if (!responseData.success) {
        throw new Error(responseData.error || "Failed to create order");
      }

      console.log("Order created successfully:", responseData.data);

      return new Promise((resolve, reject) => {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: WORKSHOP_PRICE.amountInPaise, // amount in paise
          currency: "INR",
          name: "AcceleratorX",
          description: `${workshopType} Registration`,
          order_id: responseData.data.orderId,
          handler: async function (response: any) {
            console.log("Payment successful, verifying...", response);
            try {
              const verificationResponse = await fetch(
                `${apiUrl.replace('/api', '')}/workshop/verify-workshop-payment`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                    registrationId,
                  }),
                }
              );

              const verificationData = await verificationResponse.json();
              console.log("Payment verification response:", verificationData);

              if (!verificationResponse.ok) {
                throw new Error(
                  verificationData.error || "Payment verification failed"
                );
              }

              if (verificationData.success) {
                console.log("Payment verified successfully");
                setPaymentVerified(true);
                // Redirect to success page
                navigate(
                  `/workshop-payment/success/${response.razorpay_order_id}`
                );
                resolve(true);
              } else {
                throw new Error("Payment verification failed");
              }
            } catch (error: any) {
              console.error("Payment verification error:", error);
              toast.error(error.message || "Payment verification failed");
              reject(error);
            }
          },
          modal: {
            ondismiss: function () {
              console.log("Payment modal dismissed");
              handlePaymentCancellation(responseData.data.tempId);
              reject(new Error("Payment cancelled"));
            },
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone,
          },
          theme: {
            color: "#4F46E5",
          },
        };

        console.log("Opening Razorpay modal with options:", options);
        try {
          if (!window.Razorpay) {
            throw new Error("Razorpay SDK not loaded");
          }
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        } catch (error) {
          console.error("Error creating Razorpay instance:", error);
          toast.error("Failed to initialize payment. Please try again.");
          reject(error);
        }
      });
    } catch (error: any) {
      console.error("Payment error:", error);
      toast.error(error.message || "Failed to initiate payment");
      return false;
    }
  };

  const handlePaymentCancellation = async (tempId: string) => {
    try {
      const response = await fetch(
        `${apiUrl.replace('/api', '')}/workshop/cancel-workshop-payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tempId,
          }),
        }
      );

      if (!response.ok) {
        console.error("Failed to notify backend about payment cancellation");
      }
    } catch (error) {
      console.error("Error handling payment cancellation:", error);
    } finally {
      setPaymentCancelled(true);
      setIsSubmitting(false);
      setShowCancellationModal(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validation
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize Razorpay first
      console.log("Initializing Razorpay...");
      const razorpayLoaded = await initializeRazorpay();
      if (!razorpayLoaded) {
        throw new Error("Failed to load Razorpay SDK");
      }

      console.log("Creating order...");
      const registrationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        education: formData.education,
        designation: formData.designation,
        years_of_experience: formData.yearsOfExperience,
        workshop_type: workshopType,
      };

      console.log("Registration data:", registrationData);
      const response = await fetch(`${apiUrl.replace('/api', '')}/workshop/create-workshop-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: WORKSHOP_PRICE.amount,
          registrationData,
        }),
      });

      const responseData = await response.json();
      console.log("Order creation response:", responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to create order");
      }

      if (!responseData.success) {
        throw new Error(responseData.error || "Failed to create order");
      }

      console.log("Order created successfully:", responseData.data);

      // Store tempId for payment verification
      const tempId = responseData.data.tempId;

      // Wait for a small delay to ensure Razorpay is fully initialized
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return new Promise((resolve, reject) => {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: WORKSHOP_PRICE.amountInPaise, // amount in paise
          currency: "INR",
          name: "AcceleratorX",
          description: `${workshopType} Registration`,
          order_id: responseData.data.orderId,
          handler: async function (response: any) {
            console.log("Payment successful, verifying...", response);
            try {
              const verificationResponse = await fetch(
                `${apiUrl.replace('/api', '')}/workshop/verify-workshop-payment`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                    tempId,
                    registrationData,
                  }),
                }
              );

              const verificationData = await verificationResponse.json();
              console.log("Payment verification response:", verificationData);

              if (!verificationResponse.ok) {
                throw new Error(
                  verificationData.error || "Payment verification failed"
                );
              }

              if (verificationData.success) {
                console.log("Payment verified successfully");
                setPaymentVerified(true);
                // Redirect to success page
                navigate(
                  `/workshop-payment/success/${response.razorpay_order_id}`
                );
                resolve(true);
              } else {
                throw new Error("Payment verification failed");
              }
            } catch (error: any) {
              console.error("Payment verification error:", error);
              toast.error(error.message || "Payment verification failed");
              reject(error);
            }
          },
          modal: {
            ondismiss: function () {
              console.log("Payment modal dismissed");
              handlePaymentCancellation(tempId);
              reject(new Error("Payment cancelled"));
            },
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone,
          },
          theme: {
            color: "#4F46E5",
          },
        };

        console.log("Opening Razorpay modal with options:", options);
        try {
          if (typeof window.Razorpay !== "function") {
            throw new Error("Razorpay SDK not initialized properly");
          }
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        } catch (error) {
          console.error("Error creating Razorpay instance:", error);
          toast.error("Failed to initialize payment. Please try again.");
          reject(error);
        }
      });
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(error.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="bg-[#111] rounded-2xl shadow-2xl p-6 w-full border border-gray-800/30 "
      id="workshop-form"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
              placeholder="Full Name"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
              placeholder="Email Address"
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
              placeholder="Phone Number"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
              placeholder="Education (Highest Qualification)"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
              placeholder="Current Designation"
            />
          </div>

          <div className="relative">
            <select
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-sm appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-gray-500">
                Years of Experience
              </option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {paymentCancelled && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 text-sm">
              Your previous payment attempt was cancelled. You can try again by
              clicking the register button below.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 transform hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-sm flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Registering...</span>
            </>
          ) : paymentCancelled ? (
            "Retry Payment"
          ) : (
            "Register Now"
          )}
        </button>

        <p className="text-xs md:text-sm text-gray-400 text-center">
          By continuing, you agree to our Terms and Privacy Policy
        </p>
      </form>

      {/* Payment Cancellation Modal */}
      {showCancellationModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowCancellationModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Payment Cancelled
              </h3>
              <p className="text-gray-600 mb-6">
                Your payment was cancelled. Would you like to try again?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowCancellationModal(false);
                    setPaymentCancelled(false);
                    handleSubmit(new Event("submit") as any);
                  }}
                  className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Retry Payment
                </button>
                <button
                  onClick={() => {
                    setShowCancellationModal(false);
                    setPaymentCancelled(false);
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showModal && paymentVerified && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You for Registering!
              </h3>
              <p className="text-gray-600 mb-6">
                We're excited to have you join us for the workshop on{" "}
                {zoomMeetingDetails.time}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Zoom Meeting Details:
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Meeting ID: {zoomMeetingDetails.meetingId}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Time: {zoomMeetingDetails.time}
                </p>
                <a
                  href={zoomMeetingDetails.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                >
                  Add to Calendar
                </a>
              </div>
              <p className="text-sm text-gray-500">See you in the workshop!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WSForm;
