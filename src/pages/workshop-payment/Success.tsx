import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle, Calendar, Video, Copy, Download } from "lucide-react";
import toast from "react-hot-toast";
import { WORKSHOP_PRICE } from "../../utils/constants_price";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface PaymentDetails {
  id: string;
  workshop_registration_id: string;
  razorpay_payment_id: string;
  razorpay_order_id: string;
  amount: number;
  payment_status: string;
  payment_date: string;
  registration?: {
    name: string;
    email: string;
    workshop_type: string;
  };
  zoom_details?: {
    link: string;
    meetingId: string;
    time: string;
  };
}

const Success = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const { data, error } = await supabase
          .from("workshop_payments")
          .select(
            `
            *,
            registration:workshop_registrations (
              name,
              email,
              workshop_type
            )
          `,
          )
          .eq("razorpay_order_id", orderId)
          .single();

        if (error) throw error;
        setPaymentDetails(data);

        // Trigger confetti animation
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (error) {
        console.error("Error fetching payment details:", error);
        toast.error("Failed to load payment details");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [orderId, navigate]);

  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const downloadInvoice = async () => {
    try {
      // Log the API URL and orderId for debugging
      console.log("API URL:", import.meta.env.VITE_API_URL);
      console.log("Order ID:", orderId);

      // Ensure we have the required values
      if (!import.meta.env.VITE_API_URL) {
        throw new Error("API URL is not configured");
      }

      if (!orderId) {
        throw new Error("Order ID is missing");
      }

      const apiUrl = `${import.meta.env.VITE_API_URL}/api/invoice/${orderId}`;
      console.log("Full API URL:", apiUrl);

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/pdf",
        },
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Invoice API Error:", {
          status: response.status,
          statusText: response.statusText,
          errorData,
          url: apiUrl,
        });
        throw new Error(`Failed to generate invoice: ${response.status} ${response.statusText}`);
      }

      // Create a blob from the PDF stream
      const blob = await response.blob();

      // Verify blob content
      if (blob.size === 0) {
        throw new Error("Generated PDF is empty");
      }

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `invoice-${paymentDetails?.razorpay_payment_id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("Invoice downloaded successfully");
    } catch (error) {
      console.error("Error downloading invoice:", error);
      toast.error(error instanceof Error ? error.message : "Failed to download invoice");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!paymentDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Payment Not Found</h2>
          <p className="mt-2 text-gray-600">We couldn't find the payment details for this order.</p>
        </div>
      </div>
    );
  }

  const workshopType = paymentDetails.registration?.workshop_type;
  const zoomDetails = {
    PMWorkshop: {
      link: "https://zoom.us/meeting/register/vcxHdRWkT6qgEbk5prfW-w",
      meetingId: "vcxHdRWkT6qgEbk5prfW",
      time: "Feb 20, 2025 07:00 PM India",
    },
    DAWorkshop: {
      link: "https://zoom.us/meeting/register/uPioIFXERpis6-dpMTSyNQ",
      meetingId: "uPioIFXERpis6-dpMTSyNQ",
      time: "Feb 19, 2025 07:30 PM India",
    },
    GENAIWorkshop: {
      link: "https://zoom.us/meeting/register/yG0rdYoCS3WsWGyBcyV1sg",
      meetingId: "yG0rdYoCS3WsWGyBcyV1sg",
      time: "22 Jun, 2025 11:00 AM India",
    },
    DMWorkshop: {
      link: "https://zoom.us/meeting/register/-EeXRY1GQFmxc9eHG73nnQ",
      meetingId: "-EeXRY1GQFmxc9eHG73nnQ",
      time: "Feb 16, 2025 04:00 PM India",
    },
  };

  const currentZoomDetails = workshopType ? zoomDetails[workshopType as keyof typeof zoomDetails] : null;

  if (!currentZoomDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Workshop Details Not Found</h2>
          <p className="mt-2 text-gray-600">We couldn't find the workshop details for this payment.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-500" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">Payment Successful!</h1>
            <p className="text-blue-100">Amount Paid: ₹{WORKSHOP_PRICE.amount}</p>
          </div>

          {/* Meeting Details */}
          <div className="px-8 py-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Workshop Details</h2>
            <div className="bg-blue-50 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Date & Time</h3>
                  <p className="text-gray-600">{currentZoomDetails.time}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="px-8 py-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Transaction Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Amount Paid</span>
                <span className="text-gray-900 font-medium">₹{paymentDetails.amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Payment ID</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-medium">{paymentDetails.razorpay_payment_id}</span>
                  <button
                    onClick={() => handleCopyClick(paymentDetails.razorpay_payment_id)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Date</span>
                <span className="text-gray-900 font-medium">
                  {new Date(paymentDetails.payment_date).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          {/* <div className="px-8 py-6 bg-gray-50 flex justify-between items-center">
            <button
              onClick={downloadInvoice}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Download className="w-4 h-4" />
              Download Invoice
            </button>
            <a
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Return to Home
            </a>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Success;
