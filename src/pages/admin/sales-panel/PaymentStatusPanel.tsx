import React, { useState, useEffect } from "react";

interface PaymentLink {
  //   id: string;
  //   sales_person_name: string;
  //   sales_person_number: string;
  //   salesPersonEmail: string;
  //   organization: string;
  //   customer_name: string;
  //   customer_contact: string;
  //   customer_email: string;
  //   amount: number;
  //   course_name: string;
  //   currency: string;
  //   description: string;
  //   status: "pending" | "completed" | "expired" | "cancelled";
  //   createdAt: string;
  //   expireBy: number;
  //   razorpay_short_url?: string;
  //   razorpay_payment_link_id?: string;

  id: string;
  created_at: string;
  sales_person_name: string;
  sales_person_number: string;
  organization: string;
  customer_name: string;
  customer_contact: string;
  customer_email: string;
  course_name: string;
  amount: number;
  currency: string;
  expire_by: string;
  description: string;
  razorpay_payment_link_id: string;
  razorpay_short_url: string;
  status: string;
  updated_at: string;
}

// updated_at: "2025-05-19T18:28:14.686+00:00";

interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

interface PaymentStatusPanelProps {
  apiUrl: string;
}

const PaymentStatusPanel: React.FC<PaymentStatusPanelProps> = ({ apiUrl }) => {
  const [paymentLinks, setPaymentLinks] = useState<PaymentLink[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [updateLoading, setUpdateLoading] = useState<string | null>(null);

  // Fetch payment links on component mount
  useEffect(() => {
    fetchPaymentLinks();
  }, []);

  const fetchPaymentLinks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${apiUrl}/sales/payment-links`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData: ApiResponse<{ paymentLinks: PaymentLink[] }> = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || responseData.message || "Failed to fetch payment links");
      }

      setPaymentLinks(responseData.data?.paymentLinks || []);
    } catch (err: any) {
      console.error("Error fetching payment links:", err);
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const updatePaymentStatus = async (id: string, newStatus: string) => {
    setUpdateLoading(id);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(`${apiUrl}/sales/payment-links/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const responseData: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || responseData.message || "Failed to update payment status");
      }

      setSuccessMessage(`Payment status updated to ${newStatus} successfully`);

      // Update the local state
      setPaymentLinks(paymentLinks.map((link) => (link.id === id ? { ...link, status: newStatus as any } : link)));

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (err: any) {
      console.error("Error updating payment status:", err);
      setError(err.message || "An unexpected error occurred");
    } finally {
      setUpdateLoading(null);
    }
  };

  const formatDate = (timestamp: number | string) => {
    let date;
    if (typeof timestamp === "number") {
      // Convert Unix timestamp (seconds) to milliseconds
      date = new Date(timestamp * 1000);
    } else {
      date = new Date(timestamp);
    }
    return date.toLocaleString();
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "expired":
        return "bg-gray-100 text-gray-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-6 rounded shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-black">Payment Links Status</h2>
        <button
          onClick={fetchPaymentLinks}
          className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">Error: {error}</div>
      )}

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">
          <p className="text-gray-600">Loading payment links...</p>
        </div>
      ) : paymentLinks.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No payment links found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto text-black">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left border-b">Customer</th>
                <th className="py-3 px-4 text-left border-b">Course</th>
                <th className="py-3 px-4 text-left border-b">Amount</th>
                <th className="py-3 px-4 text-left border-b">Sales Person</th>
                <th className="py-3 px-4 text-left border-b">Created Date</th>
                <th className="py-3 px-4 text-left border-b">Status</th>
                <th className="py-3 px-4 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paymentLinks.map((link) => (
                <tr key={link.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">
                    <div className="font-medium">{link.customer_name}</div>
                    <div className="text-sm text-gray-600">{link.customer_email}</div>
                    <div className="text-sm text-gray-600">{link.customer_contact}</div>
                  </td>
                  <td className="py-3 px-4 border-b">{link.course_name}</td>
                  <td className="py-3 px-4 border-b">
                    {link.currency} {link.amount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 border-b">
                    <div className="font-medium">{link.sales_person_name}</div>
                    <div className="text-sm text-gray-600">{link.organization}</div>
                  </td>
                  <td className="py-3 px-4 border-b">{formatDate(link.created_at)}</td>
                  <td className="py-3 px-4 border-b">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(link.status)}`}>
                      {link.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 border-b">
                    <div className="flex flex-col space-y-2">
                      {link.razorpay_payment_link_id && (
                        <a
                          href={link.razorpay_short_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 text-sm underline"
                        >
                          Payment Link
                        </a>
                      )}
                      <div className="flex space-x-2">
                        <select
                          className="text-sm border rounded py-1 px-2"
                          onChange={(e) => updatePaymentStatus(link.id, e.target.value)}
                          value={link.status}
                          disabled={updateLoading === link.id}
                        >
                          <option value="pending">Pending</option>
                          <option value="completed">Completed</option>
                          <option value="expired">Expired</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                        {updateLoading === link.id && <span className="text-xs text-blue-500">Updating...</span>}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentStatusPanel;
