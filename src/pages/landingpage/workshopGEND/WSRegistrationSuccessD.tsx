import { Link, useLocation } from "react-router-dom";
import { CheckCircle, Calendar, Clock, Video, QrCode, MessageCircle } from "lucide-react";

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
    whatsappLink: string;
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

  // Parse the time string to extract date and time
  const parseTimeDetails = (timeString: string) => {
    // Example: "06th Dec, 2025 08:00 AM India"
    const parts = timeString.split(' ');
    if (parts.length >= 4) {
      const date = `${parts[0]} ${parts[1]} ${parts[2]}`; // "06th Dec, 2025"
      const time = `${parts[3]} ${parts[4]} ${parts[5] || ''}`.trim(); // "08:00 AM India"
      return { date, time };
    }
    return { date: timeString, time: timeString };
  };

  const { date, time } = parseTimeDetails(state.zoomDetails.time);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Success Message */}
        <div className="mb-8 flex items-center justify-center gap-3 text-green-600">
          <CheckCircle className="w-6 h-6" />
          <span className="text-lg font-semibold">You're In! Registration Complete.</span>
        </div>

        {/* WhatsApp Section */}
        <div className="mb-8 bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 rounded-3xl p-10 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile Images */}
            <div className="flex -space-x-6 justify-center md:justify-start">
              <img
                src="/assets/mentor/anjali.webp"
                alt="attendee"
                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
              />
              <img
                src="/assets/mentor/akash.webp"
                alt="attendee"
                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
              />
              <img
                src="/assets/mentor/pranali.webp"
                alt="attendee"
                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>

            {/* Text and Button */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Meet your fellow attendees & instructors!
              </h2>
              <p className="text-gray-800 mb-8 text-lg">Don't wait. Start connecting and get exclusive updates right now.</p>
              <a
                href={state.zoomDetails.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-full flex items-center justify-center gap-3 transition-colors text-lg shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Join the Exclusive WhatsApp Group
              </a>
            </div>
          </div>
        </div>

        {/* Workshop Essentials */}
        <div className="bg-gray-100 rounded-2xl p-8 md:p-10 mb-8">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">Workshop Essentials</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Date */}
              <div className="flex items-start gap-6">
                <Calendar className="w-8 h-8 text-gray-600 mt-1" />
                <div>
                  <p className="text-base text-gray-500 font-medium mb-1">Date</p>
                  <p className="text-gray-900 font-semibold text-lg">{date}</p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-start gap-6">
                <Clock className="w-8 h-8 text-gray-600 mt-1" />
                <div>
                  <p className="text-base text-gray-500 font-medium mb-1">Time</p>
                  <p className="text-gray-900 font-semibold text-lg">{time}</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Platform */}
              <div className="flex items-start gap-6">
                <Video className="w-8 h-8 text-gray-600 mt-1" />
                <div>
                  <p className="text-base text-gray-500 font-medium mb-1">Platform</p>
                  <p className="text-gray-900 font-semibold text-lg">Zoom Meeting</p>
                </div>
              </div>

              {/* Meeting ID */}
              <div className="flex items-start gap-6">
                <QrCode className="w-8 h-8 text-gray-600 mt-1" />
                <div>
                  <p className="text-base text-gray-500 font-medium mb-1">Meeting ID</p>
                  <p className="text-gray-900 font-semibold text-lg">{state.zoomDetails.meetingId}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Zoom Button */}
          <div className="flex justify-center">
            <a
              href={state.zoomDetails.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-10 rounded-lg transition-colors text-lg shadow-md"
            >
              Join Zoom Meeting
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-base text-gray-600">
          <p>
            Registered with: <span className="font-semibold">{state.registrationDetails.email}</span> •{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Need Help?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WSRegistrationSuccessD;
