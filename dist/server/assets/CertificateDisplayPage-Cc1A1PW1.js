import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { FaSpinner, FaExclamationCircle, FaDownload } from "react-icons/fa";
import { a as api, S as SEO } from "../entry-server.js";
import { useParams } from "react-router";
import "react-dom/server";
import "@remix-run/router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "lucide-react";
import "react-dom";
import "react-icons/pi";
import "framer-motion";
const certificateApi = {
  getCertificateById: async (certificateId) => {
    const response = await api.get(`/api/certificates/${certificateId}`);
    return response.data;
  }
};
const CertificateDisplayPage = () => {
  const { certificateId } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(certificateId);
  useEffect(() => {
    const fetchCertificate = async () => {
      if (!certificateId) {
        setError("No Certificate ID provided.");
        setLoading(false);
        return;
      }
      try {
        const response = await certificateApi.getCertificateById(certificateId);
        if (response.success) {
          setCertificate(response.certificate);
        } else {
          setError(response.message || "Failed to fetch certificate.");
        }
      } catch (err) {
        setError("An error occurred while fetching the certificate. Please check the ID and try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificate();
  }, [certificateId]);
  const handleDownload = () => {
    if (certificate?.CertificateURL) {
      window.open(certificate.CertificateURL, "_blank");
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxs("div", { style: styles.container, children: [
      /* @__PURE__ */ jsx(FaSpinner, { style: styles.icon, className: "animate-spin" }),
      /* @__PURE__ */ jsx("p", { style: styles.text, children: "Loading Certificate..." })
    ] });
  }
  if (error) {
    return /* @__PURE__ */ jsxs("div", { style: styles.container, children: [
      /* @__PURE__ */ jsx(FaExclamationCircle, { style: { ...styles.icon, color: "#e53e3e" } }),
      /* @__PURE__ */ jsx("p", { style: { ...styles.text, color: "#e53e3e" }, children: error })
    ] });
  }
  if (!certificate) {
    return /* @__PURE__ */ jsx("div", { style: styles.container, children: /* @__PURE__ */ jsx("p", { style: styles.text, children: "No certificate data found." }) });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsx("div", { style: styles.page, children: /* @__PURE__ */ jsxs("div", { style: styles.card, children: [
      /* @__PURE__ */ jsx("h1", { style: styles.header, children: "Certificate of Completion" }),
      /* @__PURE__ */ jsx("p", { style: styles.programText, children: "has successfully completed the program" }),
      /* @__PURE__ */ jsx("h3", { style: styles.programName, children: certificate.Program }),
      certificate.Specialization && /* @__PURE__ */ jsxs("p", { style: styles.specialization, children: [
        "Specialization in ",
        certificate.Specialization
      ] }),
      /* @__PURE__ */ jsxs("div", { style: styles.details, children: [
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Issue Date:" }),
          " ",
          new Date(certificate.IssueDate).toLocaleDateString()
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Certificate ID:" }),
          " ",
          certificate.CertificateId
        ] })
      ] }),
      /* @__PURE__ */ jsxs("button", { style: styles.button, onClick: handleDownload, children: [
        /* @__PURE__ */ jsx(FaDownload, { style: { marginRight: "8px" } }),
        "Download Certificate"
      ] })
    ] }) })
  ] });
};
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    padding: "20px"
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    textAlign: "center",
    maxWidth: "600px",
    width: "100%",
    borderTop: "8px solid #4a90e2"
  },
  header: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px"
  },
  programText: {
    fontSize: "1.2rem",
    color: "#555",
    marginTop: "20px"
  },
  programName: {
    fontSize: "1.8rem",
    color: "#333",
    margin: "10px 0"
  },
  specialization: {
    fontSize: "1.1rem",
    color: "#555",
    fontStyle: "italic"
  },
  details: {
    marginTop: "30px",
    color: "#666",
    fontSize: "0.9rem"
  },
  button: {
    marginTop: "30px",
    backgroundColor: "#4a90e2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "15px 30px",
    fontSize: "1rem",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    fontWeight: "bold",
    transition: "background-color 0.3s ease"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center"
  },
  icon: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#4a90e2"
  },
  text: {
    fontSize: "1.5rem",
    color: "#333"
  }
};
export {
  CertificateDisplayPage as default
};
