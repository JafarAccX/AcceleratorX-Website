const downloadInvoice = async (orderId: string) => {
  try {
    const apiUrl = import.meta.env.VITE_BACKEND_URL.replace(/\/$/, ""); // Remove trailing slash if present
    console.log("API URL:", apiUrl);
    console.log("Order ID:", orderId);

    const invoiceUrl = `${apiUrl}/invoice/${orderId}`; // Changed from /api/invoice to /invoice
    console.log("Full API URL:", invoiceUrl);

    const response = await fetch(invoiceUrl, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Failed to generate invoice: ${response.status}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `invoice-${orderId}.pdf`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.log("Invoice API Error:", error);
    console.log("Error downloading invoice:", error);
  }
};
