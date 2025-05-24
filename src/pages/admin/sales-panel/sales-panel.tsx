import React, { useState } from "react";
import CreatePaymentLinkForm from "./sales-payment-form";
import PaymentStatusPanel from "./PaymentStatusPanel";

interface PaymentManagementProps {
  apiUrl: string;
}

const PaymentManagement: React.FC<PaymentManagementProps> = ({ apiUrl }) => {
  const [activeTab, setActiveTab] = useState<"create" | "status">("create");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Payment Management System</h1>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === "create" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("create")}
        >
          Create Payment Link
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === "status" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("status")}
        >
          Payment Status
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="mt-4">
        {activeTab === "create" ? <CreatePaymentLinkForm apiUrl={apiUrl} /> : <PaymentStatusPanel apiUrl={apiUrl} />}
      </div>
    </div>
  );
};

export default PaymentManagement;
