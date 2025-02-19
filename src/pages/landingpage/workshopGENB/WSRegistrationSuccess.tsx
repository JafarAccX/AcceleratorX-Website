import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Video, Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useLocation, Link } from "react-router-dom";

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

const WSRegistrationSuccess = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  if (!state?.registrationDetails || !state?.zoomDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Registration Details Not Found
          </h2>
          <p className="mt-2 text-gray-600">
            Please complete the registration process to view this page.
          </p>
          <Link
            to="/workshop/gen-ai-masterclass-bxwcy"
            className="mt-4 inline-block text-blue-600 hover:text-blue-700"
          >
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
            <h1 className="text-3xl font-bold text-white mb-2">
              Registration Successful!
            </h1>
            <p className="text-blue-100">
              Welcome to the AI Workshop, {state.registrationDetails.name}!
            </p>
          </div>

          {/* Meeting Details */}
          <div className="px-8 py-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Workshop Details
            </h2>
            <div className="bg-blue-50 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Date & Time</h3>
                  <p className="text-gray-600">{state.zoomDetails.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Video className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Zoom Meeting</h3>
                  <p className="text-gray-600 mb-2">
                    Meeting ID: {state.zoomDetails.meetingId}
                  </p>
                  <a
                    href={state.zoomDetails.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Join Meeting
                    <Video className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="px-8 py-6 bg-gray-50 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Email</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-medium">
                  {state.registrationDetails.email}
                </span>
                <button
                  onClick={() =>
                    handleCopyClick(state.registrationDetails.email)
                  }
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Meeting ID</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-medium">
                  {state.zoomDetails.meetingId}
                </span>
                <button
                  onClick={() => handleCopyClick(state.zoomDetails.meetingId)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
            <Link
              to="/workshop/gen-ai-masterclass-bxwcy"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Return to Workshop Page
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WSRegistrationSuccess;
