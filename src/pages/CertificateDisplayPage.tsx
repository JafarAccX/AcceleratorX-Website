import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaDownload, FaSpinner, FaExclamationCircle } from 'react-icons/fa';
import certificateApi, { CertificateData } from '../api/certificateApi';
import { SEO } from '../components/seo/SEO';

const CertificateDisplayPage: React.FC = () => {
  const { certificateId } = useParams<{ certificateId: string }>();
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log(certificateId);
  useEffect(() => {
    const fetchCertificate = async () => {
      if (!certificateId) {
        setError('No Certificate ID provided.');
        setLoading(false);
        return;
      }
      try {
        const response = await certificateApi.getCertificateById(certificateId);
        if (response.success) {
          setCertificate(response.certificate);
        } else {
          setError(response.message || 'Failed to fetch certificate.');
        }
      } catch (err) {
        setError('An error occurred while fetching the certificate. Please check the ID and try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [certificateId]);

  const handleDownload = () => {
    if (certificate?.CertificateURL) {
      window.open(certificate.CertificateURL, '_blank');
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <FaSpinner style={styles.icon} className="animate-spin" />
        <p style={styles.text}>Loading Certificate...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <FaExclamationCircle style={{...styles.icon, color: '#e53e3e'}} />
        <p style={{...styles.text, color: '#e53e3e'}}>{error}</p>
      </div>
    );
  }

  if (!certificate) {
    return (
        <div style={styles.container}>
            <p style={styles.text}>No certificate data found.</p>
        </div>
    );
  }

  return (
    <>
      <SEO />
      <div style={styles.page}>
        <div style={styles.card}>
            <h1 style={styles.header}>Certificate of Completion</h1>

            <p style={styles.programText}>has successfully completed the program</p>
            <h3 style={styles.programName}>{certificate.Program}</h3>
            {certificate.Specialization && <p style={styles.specialization}>Specialization in {certificate.Specialization}</p>}
            <div style={styles.details}>
                <p><strong>Issue Date:</strong> {new Date(certificate.IssueDate).toLocaleDateString()}</p>
                <p><strong>Certificate ID:</strong> {certificate.CertificateId}</p>
            </div>
            <button style={styles.button} onClick={handleDownload}>
                <FaDownload style={{ marginRight: '8px' }} />
                Download Certificate
            </button>
        </div>
    </div>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f4f8',
        padding: '20px',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%',
        borderTop: '8px solid #4a90e2',
    },
    header: {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '20px',
    },
    recipient: {
        fontSize: '1.2rem',
        color: '#555',
    },
    name: {
        fontSize: '2.2rem',
        color: '#4a90e2',
        margin: '10px 0',
    },
    programText: {
        fontSize: '1.2rem',
        color: '#555',
        marginTop: '20px',
    },
    programName: {
        fontSize: '1.8rem',
        color: '#333',
        margin: '10px 0',
    },
    specialization: {
        fontSize: '1.1rem',
        color: '#555',
        fontStyle: 'italic',
    },
    details: {
        marginTop: '30px',
        color: '#666',
        fontSize: '0.9rem',
    },
    button: {
        marginTop: '30px',
        backgroundColor: '#4a90e2',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '15px 30px',
        fontSize: '1rem',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    icon: {
        fontSize: '3rem',
        marginBottom: '1rem',
        color: '#4a90e2',
    },
    text: {
        fontSize: '1.5rem',
        color: '#333',
    },
};

export default CertificateDisplayPage;
