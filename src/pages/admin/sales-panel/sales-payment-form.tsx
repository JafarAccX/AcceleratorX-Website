import React, { useState } from "react";

// Define types if not imported
interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

interface CreatePaymentLinkRequest {
  salesPersonName: string;
  salesPersonNumber: string;
  organization: string;
  customerName: string;
  customerContact: string;
  customerEmail: string;
  amount: number;
  courseName: string;
  currency?: string;
  expireBy?: number; // Unix timestamp
  description?: string;
}

interface PaymentLinkFormData {
  salesPersonName: string;
  salesPersonNumber: string;
  organization: string;
  customerName: string;
  customerContact: string;
  customerEmail: string;
  amount: number;
  courseName: string;
  currency: string;
  description: string;
}

interface CreatePaymentLinkFormProps {
  apiUrl: string; // Prop for your backend API base URL
}

const CreatePaymentLinkForm: React.FC<CreatePaymentLinkFormProps> = ({ apiUrl }) => {
  const [formData, setFormData] = useState<PaymentLinkFormData>({
    salesPersonName: "",
    salesPersonNumber: "",
    organization: "",
    customerName: "",
    customerContact: "",
    customerEmail: "",
    amount: 1,
    courseName: "Gen AI",
    currency: "INR",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [paymentLinkUrl, setPaymentLinkUrl] = useState<string | null>(null);

  const courseOptions = ["Gen AI", "Product Management", "Data Analytics", "Performance Marketing"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "amount" ? parseFloat(value) : value,
    });
  };

  const getExpiryTimestamp = (): number => {
    // Get current date/time
    const now = new Date();
    // Add 1 hour
    const expiryTime = new Date(now.getTime() + 60 * 60 * 1000);
    // Convert to Unix timestamp (seconds)
    return Math.floor(expiryTime.getTime() / 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);
    setPaymentLinkUrl(null);

    try {
      const expireByUnixTimestamp = getExpiryTimestamp();

      const requestBody: CreatePaymentLinkRequest = {
        ...formData,
        amount: formData.amount,
        expireBy: expireByUnixTimestamp,
      };

      const response = await fetch(`${apiUrl}/sales/payment-links`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const responseData: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || responseData.message || "Failed to create payment link");
      }

      setSuccessMessage(responseData.message || "Payment link created successfully");
      setPaymentLinkUrl(responseData.data?.razorpayData?.short_url || null);
    } catch (err: any) {
      console.error("Error creating payment link:", err);
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Create Payment Link</h2>
      <form onSubmit={handleSubmit}>
        {/* Sales Person Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Sales Person Details</h3>
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salesPersonName">
                Sales Person Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="salesPersonName"
                type="text"
                name="salesPersonName"
                value={formData.salesPersonName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salesPersonNumber">
                Sales Person Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="salesPersonNumber"
                type="text"
                name="salesPersonNumber"
                value={formData.salesPersonNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organization">
                Organization
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="organization"
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Customer & Payment Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Customer & Payment Details</h3>
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
                Customer Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="customerName"
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerContact">
                Customer Contact
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="customerContact"
                type="text"
                name="customerContact"
                value={formData.customerContact}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerEmail">
                Customer Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="customerEmail"
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                Amount
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="amount"
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                min="1"
                step="1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currency">
                Currency
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                required
              >
                <option value="INR">INR</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseName">
                Course Name
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="courseName"
                name="courseName"
                value={formData.courseName}
                onChange={handleInputChange}
                required
              >
                {courseOptions.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder={`Payment for ${formData.courseName} course`}
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Payment Link"}
          </button>
        </div>
      </form>

      {loading && <p className="mt-4 text-blue-600">Creating payment link...</p>}
      {error && <p className="mt-4 text-red-600">Error: {error}</p>}
      {successMessage && (
        <div className="mt-4 text-green-600">
          <p>{successMessage}</p>
          {paymentLinkUrl && (
            <p>
              Payment Link:{" "}
              <a href={paymentLinkUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {paymentLinkUrl}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatePaymentLinkForm;
