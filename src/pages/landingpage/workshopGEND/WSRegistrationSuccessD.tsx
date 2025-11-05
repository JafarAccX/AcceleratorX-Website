import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FaLinkedin, FaInstagram, FaYoutube, FaDiscord, FaCopy } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface LocationState {
  registrationDetails: {
    name: string;
    email: string;
    workshop_type: string;
  };
  zoomDetails: {
    link: string;
    meetingId: string;
    time: string;
  };
}

const WSRegistrationSuccessD = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  if (!state?.registrationDetails || !state?.zoomDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Registration Details Not Found</h2>
          <p className="mt-2 text-gray-600">Please complete the registration process to view this page.</p>
          <Link to="/workshop/gen-ai-masterclass-four" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
            Return to Workshop Page
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  // Get the appropriate WhatsApp group link based on workshop type
  const getWhatsAppLink = () => {
    const workshopType = state.registrationDetails.workshop_type.toLowerCase();

    if (workshopType.includes("da") || workshopType.includes("data")) {
      return "https://chat.whatsapp.com/F37nunVbnd3BWRjcA4Bt9Q";
    } else if (workshopType.includes("gen") || workshopType.includes("ai") || workshopType.includes("flowwise")) {
      return "https://chat.whatsapp.com/LNzQFat64Fe7HdfBeHFZ7L";
    } else if (workshopType.includes("pm") || workshopType.includes("product")) {
      return "https://chat.whatsapp.com/IaFM3xfYfmRBO0jwiaDIHN";
    }

    // Default fallback
    return "https://chat.whatsapp.com/LNzQFat64Fe7HdfBeHFZ7L";
  };

  // Social media links
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/company/acceleratorxorg",
      color: "bg-[#0077B5]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      url: "https://www.instagram.com/acceleratorxorg/",
      color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="w-5 h-5" />,
      url: "https://youtube.com/@acceleratorxorg",
      color: "bg-[#FF0000]",
    },
    {
      name: "Discord",
      icon: <FaDiscord className="w-5 h-5" />,
      url: "https://discord.gg/WKAdQuuv",
      color: "bg-[#5865F2]",
    },
  ];

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
            <h1 className="text-3xl font-bold text-white mb-2">Registration Successful!</h1>
            <p className="text-blue-100 text-lg">Welcome, {state.registrationDetails.name}!</p>
          </div>

          {/* Registration Details */}
          <div className="px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Workshop Details</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Workshop Type</p>
                <p className="text-lg font-semibold text-gray-900">{state.registrationDetails.workshop_type}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <p className="text-lg font-semibold text-gray-900">{state.registrationDetails.email}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Workshop Time</p>
                <p className="text-lg font-semibold text-gray-900">{state.zoomDetails.time}</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-sm text-blue-600 font-medium mb-2">Zoom Meeting Details</p>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">Meeting ID:</p>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-gray-900">{state.zoomDetails.meetingId}</span>
                    <button
                      onClick={() => handleCopyClick(state.zoomDetails.meetingId)}
                      className="p-1 hover:bg-blue-100 rounded transition-colors"
                    >
                      <FaCopy className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                </div>
                <a
                  href={state.zoomDetails.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Join Zoom Meeting
                </a>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="px-8 py-6 bg-gray-50 space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <p className="text-gray-700">
                  Check your email for the workshop confirmation and additional details.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <p className="text-gray-700">Join our community to connect with fellow learners and get updates.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <p className="text-gray-700">Mark your calendar and join the workshop on time!</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="px-8 py-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Connect With Us</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={`${social.color} text-white p-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2`}
                >
                  {social.icon}
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>

            {/* WhatsApp Community Button */}
            <div className="mt-6 text-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Join Workshop WhatsApp Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WSRegistrationSuccessD;
