import { useState, useEffect, useCallback } from "react";
import { useUser } from "../context/UserContext";
import ElevenLabsWidget from "../components/widgets/ElevenLabsWidget";
import { api } from "../api";

interface TalkSession {
  Id: string;
  CustId: bigint;
  PlanId: string;
  TotalDurationMinutes: number;
  UsedDurationMinutes: number;
  RemainingDurationMinutes: number;
  Status: string;
  Title: string;
  AgentId: string;
  PlanDuration: number;
}

export default function MentorPage() {
  const { user, isAuthenticated } = useUser();
  const [activeSession, setActiveSession] = useState<TalkSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkActiveSession = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/api/talk-sessions/sessions/customer/${user?.CustId}/active`);

      if (response.data.success) {
        setActiveSession(response.data.data);
      } else {
        setActiveSession(null);
      }
    } catch (err) {
      console.error('Error checking active session:', err);
      const error = err as { response?: { status?: number } };
      if (error.response?.status === 404) {
        setActiveSession(null);
      } else {
        setError('Failed to check session status');
      }
    } finally {
      setIsLoading(false);
    }
  }, [user?.CustId]);

  useEffect(() => {
    if (isAuthenticated && user) {
      checkActiveSession();
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, user, checkActiveSession]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-20 md:pt-40 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Mentor Support</h1>
          <p className="text-lg text-gray-600 mb-8">
            Please log in to access AI mentor support.
          </p>
          <a
            href="/sign-in"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Log In
          </a>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 md:pt-40 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking session status...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 md:pt-40 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Mentor Support</h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-800">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!activeSession) {
    return (
      <div className="min-h-screen pt-20 md:pt-40 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Mentor Support</h1>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">No Active Session</h2>
            <p className="text-yellow-700 mb-4">
              You don't have an active talk session. Purchase a mentor plan to start using AI mentor support.
            </p>
            <a
              href="/courses" // Update this to the correct plans page
              className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
            >
              View Available Plans
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 md:pt-40 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Mentor Support</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Connect with our intelligent AI mentor for personalized guidance and support.
            Engage in natural voice conversations to get help with your learning journey.
          </p>

          {/* Session Info */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{activeSession.Title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Remaining Time:</span>
                <span className="ml-2 text-blue-600">{activeSession.RemainingDurationMinutes} minutes</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Used Time:</span>
                <span className="ml-2 text-gray-600">{activeSession.UsedDurationMinutes} minutes</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Total Time:</span>
                <span className="ml-2 text-gray-600">{activeSession.TotalDurationMinutes} minutes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-lg p-6">
          <ElevenLabsWidget
            sessionData={activeSession}
            onSessionUpdate={checkActiveSession}
          />
        </div>

        <div className="mt-8 text-center">
          <div className=" rounded-lg p-4 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Tips for Best Experience</h3>
            <ul className="text-sm text-blue-800 space-y-1 text-left">
              <li>• Ensure you're in a quiet environment for clear communication</li>
              <li>• Speak clearly and at a normal pace</li>
              <li>• The AI mentor can help with course questions, career advice, and technical guidance</li>
              <li>• Use the feedback buttons to help improve the conversation quality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}