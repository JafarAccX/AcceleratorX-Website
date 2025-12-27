import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle, Calendar, Copy } from "lucide-react";
import toast from "react-hot-toast";
import { W as WORKSHOP_PRICE } from "./constants_price-pJIfbaHl.js";
import { useParams, useNavigate } from "react-router";
const supabaseUrl = "https://grdwabozcrwjwdytwpqa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZHdhYm96Y3J3andkeXR3cHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4Mjk2ODYsImV4cCI6MjA0NzQwNTY4Nn0.zD19Z3vROhfr7I_IL9Ru0bB500ClQi0D5A_QpiYWQYg";
const supabase = createClient(supabaseUrl, supabaseKey);
const Success = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const { data, error } = await supabase.from("workshop_payments").select(
          `
            *,
            registration:workshop_registrations (
              name,
              email,
              workshop_type
            )
          `
        ).eq("razorpay_order_id", orderId).single();
        if (error) throw error;
        setPaymentDetails(data);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
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
  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) });
  }
  if (!paymentDetails) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Payment Not Found" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "We couldn't find the payment details for this order." })
    ] }) });
  }
  const workshopType = paymentDetails.registration?.workshop_type;
  const zoomDetails = {
    PMWorkshop: {
      link: "https://zoom.us/meeting/register/vcxHdRWkT6qgEbk5prfW-w",
      meetingId: "vcxHdRWkT6qgEbk5prfW",
      time: "Feb 20, 2025 07:00 PM India"
    },
    DAWorkshop: {
      link: "https://zoom.us/meeting/register/uPioIFXERpis6-dpMTSyNQ",
      meetingId: "uPioIFXERpis6-dpMTSyNQ",
      time: "Feb 19, 2025 07:30 PM India"
    },
    GENAIWorkshop: {
      link: "https://zoom.us/meeting/register/_UMsYvzPRayKLzneFMoawQ",
      meetingId: "_UMsYvzPRayKLzneFMoawQ",
      time: "29 Jun, 2025 11:00 AM India"
    },
    DMWorkshop: {
      link: "https://zoom.us/meeting/register/KVSQCqQxRl-OUCNUlS_NNw",
      meetingId: "KVSQCqQxRl-OUCNUlS_NNw",
      time: "July 24, 2025 08:30 PM India"
    }
  };
  const currentZoomDetails = workshopType ? zoomDetails[workshopType] : null;
  if (!currentZoomDetails) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Workshop Details Not Found" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "We couldn't find the workshop details for this payment." })
    ] }) });
  }
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8",
      children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-white shadow-xl rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { delay: 0.2, type: "spring", stiffness: 150 },
              className: "mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6",
              children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-10 h-10 text-green-500" })
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "Payment Successful!" }),
          /* @__PURE__ */ jsxs("p", { className: "text-blue-100", children: [
            "Amount Paid: ₹",
            WORKSHOP_PRICE.amount
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-8 py-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Workshop Details" }),
          /* @__PURE__ */ jsx("div", { className: "bg-blue-50 rounded-xl p-6 space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 text-blue-600 mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900", children: "Date & Time" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: currentZoomDetails.time })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-8 py-8 border-b border-gray-200", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Transaction Details" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Amount Paid" }),
              /* @__PURE__ */ jsxs("span", { className: "text-gray-900 font-medium", children: [
                "₹",
                paymentDetails.amount
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Payment ID" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium", children: paymentDetails.razorpay_payment_id }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => handleCopyClick(paymentDetails.razorpay_payment_id),
                    className: "text-blue-600 hover:text-blue-700",
                    children: /* @__PURE__ */ jsx(Copy, { className: "w-4 h-4" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Date" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium", children: new Date(paymentDetails.payment_date).toLocaleString() })
            ] })
          ] })
        ] })
      ] }) })
    }
  );
};
export {
  Success as default
};
