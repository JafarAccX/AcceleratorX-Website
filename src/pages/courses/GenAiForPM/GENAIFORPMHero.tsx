import { useState } from "react";
import { ArrowRight } from "lucide-react";
import EnrollmentModal from "../../../components/EnrollmentModal"; 

const GENHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownload, setIsDownload] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };

  const handleModalSubmit = async () => {
    if (isDownload) {
      try {
        const response = await fetch(
          "hhttps://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AI%20Product%20Management.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80Njc1NTVlNS1jOGMxLTQwOTYtYmQxMC03YzkzODVjZWEyMjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXN1bWVzL0FJIFByb2R1Y3QgTWFuYWdlbWVudC5wZGYiLCJpYXQiOjE3NTI5NDAyNTgsImV4cCI6MTkxMDYyMDI1OH0.G_76x9UvPkLjExI9dTtDhmvkh3fQdwwWZ1lugGzv1l4"
        );

        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "AcceleratorX-GenAI-Brochure.pdf";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }
      } catch (error) {
        console.error("Error downloading brochure:", error);
      }
    }
    handleModalClose();
  };

  return (
    <>


      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <img src="/backgrounds/bg1-.png" alt="GenAI for PM Hero" className="absolute w-full h-full object-cover opacity-40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-4 bg-white text-transparent bg-clip-text">
            Ultimate 8-Week Generative AI Program for Product Managers
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Learn GenAI, Build Real Products, and Launch Your PM Career Into the Future — No Tech Background Needed
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Limited Slots | No Coding Required | Starts This Month
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Join the Waitlist Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsDownload(true);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 text-white font-semibold hover:bg-white/5 transition-colors"
              >
                Download Brochure
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Enrollment Modal */}
            <EnrollmentModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              onSubmit={handleModalSubmit}
              isDownload={isDownload}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes rotBGimg {
          from {
            transform: rotate(0deg) scale(2);
          }
          to {
            transform: rotate(360deg) scale(2);
          }
        }

        .animate-rotBGimg {
          animation: rotBGimg 12s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .7; }
        }
      `}</style>
    </>
  );
};

export default GENHero;
