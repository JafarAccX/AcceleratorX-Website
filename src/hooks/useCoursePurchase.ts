import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "../context/UserContext";
import { api } from "../api";

// Razorpay type declaration
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Batch {
  Id: string;
  Batch: string;
  Course: string;
  StartDate: string;
  EndDate: string | null;
  IsFree: boolean;
}

export const useCoursePurchase = (courseId: string, courseName: string) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated } = useUser();
  const [isProcessing, setIsProcessing] = useState(false);
  const [batches, setBatches] = useState<Batch[]>([]);
  const [selectedBatchId, setSelectedBatchId] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  // Fetch active batches for this course
  useEffect(() => {
    const fetchBatches = async () => {
      if (!courseId) return;
      try {
        const baseUrl = apiUrl?.endsWith("/api") ? apiUrl.slice(0, -4) : apiUrl;
        const response = await fetch(`${baseUrl}/course-checkout/batches/${courseId}`);
        const result = await response.json();

        if (result.success && result.data) {
          const batchList = result.data.batches || result.data;
          if (Array.isArray(batchList) && batchList.length > 0) {
            setBatches(batchList);
            // Auto-select first batch if available
            setSelectedBatchId(batchList[0].Id);
          }
        }
      } catch (error) {
        console.error("Error fetching batches:", error);
      }
    };
    fetchBatches();
  }, [courseId, apiUrl]);

  // Initialize Razorpay SDK
  const initializeRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle payment cancellation
  const handlePaymentCancellation = async (enrollmentId: string) => {
    try {
      const baseUrl = apiUrl?.endsWith("/api") ? apiUrl.slice(0, -4) : apiUrl;
      await fetch(`${baseUrl}/course-checkout/cancel-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enrollmentId }),
      });
    } catch (error) {
      console.error("Error handling payment cancellation:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBuyCourse = async (amount: number, batchId?: string) => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      // Redirect to sign-in with current path as callback
      navigate("/sign-in", { state: { from: location } });
      return;
    }

    const targetBatchId = batchId || selectedBatchId;
    if (!targetBatchId) {
      toast.error("Please select a batch first");
      return;
    }

    setIsProcessing(true);

    try {
      // Initialize Razorpay
      const razorpayLoaded = await initializeRazorpay();
      if (!razorpayLoaded) {
        throw new Error("Failed to load Razorpay SDK");
      }

      // Calculate total amount with 18% GST
      const totalAmount = Math.round(amount * 1.18);

      // Create order
      const orderResponse = await api.post("/course-checkout/create-order", {
        courseId,
        batchId: targetBatchId,
        amount: totalAmount,
      });

      if (!orderResponse.data.success) {
        throw new Error(orderResponse.data.error || "Failed to create order");
      }

      const { orderId, enrollmentId } = orderResponse.data.data;
      const amountInPaise = Math.round(totalAmount * 100);

      // Open Razorpay modal
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amountInPaise,
        currency: "INR",
        name: "AcceleratorX",
        description: courseName,
        order_id: orderId,
        handler: async function (response: any) {
          try {
            // Verify payment
            const verificationResponse = await api.post("/course-checkout/verify-payment", {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              enrollmentId,
            });

            if (verificationResponse.data.success) {
              toast.success("Payment successful! Welcome to the program.");
              navigate(`/course-payment/success/${response.razorpay_order_id}`);
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (error: any) {
            console.error("Payment verification error:", error);
            toast.error(error.message || "Payment verification failed");
          } finally {
             setIsProcessing(false);
          }
        },
        modal: {
          ondismiss: function () {
            handlePaymentCancellation(enrollmentId);
          },
        },
        prefill: {
          name: user ? `${user.FirstName} ${user.LastName}` : "",
          email: user?.Email || "",
          contact: user?.Mobile || "",
        },
        theme: {
          color: "#2563EB",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        console.error("Payment failed:", response.error);
        toast.error(`Payment failed: ${response.error.description}`);
        setIsProcessing(false);
      });
      paymentObject.open();
    } catch (error: any) {
      console.error("Course purchase error:", error);
      toast.error(error.message || "Failed to process payment. Please try again.");
      setIsProcessing(false);
    }
  };

  return {
    isProcessing,
    batches,
    selectedBatchId,
    setSelectedBatchId,
    handleBuyCourse,
  };
};
