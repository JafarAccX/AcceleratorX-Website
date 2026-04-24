import React, { useState, useEffect, useRef } from "react";
import { useConversation } from "@elevenlabs/react";
import { api } from "../../api";

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

interface ElevenLabsWidgetProps {
  sessionData?: TalkSession;
  onSessionUpdate?: () => void;
}

const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ sessionData, onSessionUpdate }) => {
  const [isMicPermissionGranted, setIsMicPermissionGranted] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [currentCallId, setCurrentCallId] = useState<string | null>(null);
  const wasTimeoutRef = useRef<boolean>(false); // Track if disconnect was due to timeout
  const [elapsedTime, setElapsedTime] = useState<number>(0); // Elapsed time in seconds
  const elapsedTimerRef = useRef<NodeJS.Timeout | null>(null);

  const conversation = useConversation({
    onConnect: async () => {
      if (import.meta.env.DEV) console.log("Connected to ElevenLabs conversation");
      const now = new Date();
      setStartTime(now);
      setEndTime(null);
      setDuration(0);

      // Create a new call record in the database with actual start time
      try {
        if (sessionData) {
          const response = await api.post('/api/talk-sessions/calls', {
            TalkSessionId: sessionData.Id,
            CustId: sessionData.CustId,
            AgentId: sessionData.AgentId,
            CallStartTime: now.toISOString(), // Send actual start time
            PlannedDurationMinutes: Math.min(sessionData.RemainingDurationMinutes, 10), // 10 min limit
            ConversationId: conversation.getId() || null,
            CallStatus: 'IN_PROGRESS'
          });

          if (response.data.success) {
            setCurrentCallId(response.data.data.Id);
            if (import.meta.env.DEV) console.log('✅ Call record created:', response.data.data.Id);
          }
        }
      } catch (error) {
        console.error('Failed to create call record:', error);
      }

      // Calculate actual allowed duration (minimum of remaining session time and 10 minutes)
      const maxDuration = sessionData ? Math.min(sessionData.RemainingDurationMinutes, 10) : 10;
      const timeoutDuration = maxDuration * 60 * 1000; // Convert to milliseconds

      if (import.meta.env.DEV) console.log(`⏱️ Call will auto-end after ${maxDuration} minutes`);
      if (import.meta.env.DEV) console.log(`📊 Session has ${sessionData?.RemainingDurationMinutes} minutes remaining`);

      // Start elapsed time counter
      setElapsedTime(0);
      elapsedTimerRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000); // Update every second

      // Set up automatic timeout based on remaining duration
      timeoutRef.current = setTimeout(async () => {
        if (import.meta.env.DEV) console.log(`⏱️ ${maxDuration}-minute timeout reached, ending conversation automatically`);
        wasTimeoutRef.current = true; // Mark as timeout disconnect
        try {
          if (import.meta.env.DEV) console.log('🔌 Initiating automatic disconnect via endSession()...');
          await conversation.endSession();
          if (import.meta.env.DEV) console.log('✅ Automatic disconnect completed - onDisconnect callback should fire now');
          alert(`Conversation ended after ${maxDuration} minute${maxDuration !== 1 ? 's' : ''}. ${maxDuration < 10 ? 'You have used all your available session time.' : ''}`);
        } catch (error) {
          console.error("❌ Failed to end conversation on timeout:", error);
          // Even if endSession fails, we should still try to update the database
          if (import.meta.env.DEV) console.log('⚠️ Attempting manual cleanup after endSession failure...');
        }
      }, timeoutDuration);
    },
    onDisconnect: async () => {
      if (import.meta.env.DEV) console.log("🔴 Disconnected from ElevenLabs conversation");
      if (import.meta.env.DEV) console.log("📊 Disconnect reason:", wasTimeoutRef.current ? 'AUTOMATIC TIMEOUT' : 'USER ENDED');
      
      const now = new Date();
      setEndTime(now);
      if (startTime) {
        const durationMs = now.getTime() - startTime.getTime();
        const durationMinutes = Math.ceil(durationMs / (1000 * 60)); // duration in minutes
        setDuration(durationMinutes);

        if (import.meta.env.DEV) console.log(`⏱️ Call duration: ${durationMinutes} minute(s)`);

        // Update the call record in the database
        if (currentCallId) {
          try {
            if (import.meta.env.DEV) console.log('💾 Updating call record in database...');
            await api.put(`/api/talk-sessions/calls/${currentCallId}`, {
              CallEndTime: now.toISOString(),
              ActualDurationMinutes: durationMinutes,
              CallStatus: 'COMPLETED',
              DisconnectReason: wasTimeoutRef.current ? 'TIMEOUT' : 'USER_ENDED'
            });
            if (import.meta.env.DEV) console.log('✅ Call record updated - Duration:', durationMinutes, 'min, Reason:', wasTimeoutRef.current ? 'TIMEOUT' : 'USER_ENDED');
          } catch (error) {
            console.error('❌ Failed to update call record:', error);
          }
        } else {
          if (import.meta.env.DEV) console.warn('⚠️ No currentCallId found, skipping call record update');
        }

        // Update the session used duration
        if (sessionData) {
          try {
            const newUsedDuration = sessionData.UsedDurationMinutes + durationMinutes;
            const newRemainingDuration = Math.max(0, sessionData.RemainingDurationMinutes - durationMinutes);

            if (import.meta.env.DEV) console.log('💾 Updating session duration in database...');
            await api.put(`/api/talk-sessions/sessions/${sessionData.Id}`, {
              UsedDurationMinutes: newUsedDuration,
              RemainingDurationMinutes: newRemainingDuration,
              Status: newRemainingDuration > 0 ? 'ACTIVE' : 'EXHAUSTED'
            });
            if (import.meta.env.DEV) console.log('✅ Session updated - Used:', newUsedDuration, 'Remaining:', newRemainingDuration);

            // Refresh session data
            if (onSessionUpdate) {
              if (import.meta.env.DEV) console.log('🔄 Refreshing session data in UI...');
              onSessionUpdate();
            }
          } catch (error) {
            console.error('❌ Failed to update session:', error);
          }
        } else {
          if (import.meta.env.DEV) console.warn('⚠️ No sessionData found, skipping session update');
        }
      } else {
        if (import.meta.env.DEV) console.warn('⚠️ No startTime found, cannot calculate duration');
      }

      // Clear the timeout if conversation ends early
      if (timeoutRef.current) {
        if (import.meta.env.DEV) console.log('🧹 Clearing timeout timer');
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      // Clear elapsed time counter
      if (elapsedTimerRef.current) {
        if (import.meta.env.DEV) console.log('🧹 Clearing elapsed time timer');
        clearInterval(elapsedTimerRef.current);
        elapsedTimerRef.current = null;
      }

      // Reset timeout flag
      wasTimeoutRef.current = false;
      setCurrentCallId(null);
      if (import.meta.env.DEV) console.log('✅ Disconnect cleanup completed');
    },
    onMessage: (message) => {
      if (import.meta.env.DEV) console.log("Message received:", message);
    },
    onError: (error) => {
      console.error("Conversation error:", error);
    },
    onStatusChange: (status) => {
      if (import.meta.env.DEV) console.log("Status changed:", status);
    },
  });

  const requestMicrophonePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsMicPermissionGranted(true);
    } catch (error) {
      console.error("Microphone permission denied:", error);
      alert("Microphone access is required for voice conversations. Please allow microphone access and try again.");
    }
  };

  const startConversation = async () => {
    if (!sessionData) {
      alert("No active session found. Please purchase a mentor plan.");
      return;
    }

    if (!isMicPermissionGranted) {
      await requestMicrophonePermission();
    }

    if (!isMicPermissionGranted) return;

    setIsStarting(true);
    try {
      await conversation.startSession({
        agentId: sessionData.AgentId,
        connectionType: "webrtc",
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
      alert("Failed to start conversation. Please try again.");
    } finally {
      setIsStarting(false);
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
    } catch (error) {
      console.error("Failed to end conversation:", error);
    }
  };

  useEffect(() => {
    // Request microphone permission on component mount
    requestMicrophonePermission();
  }, []);

  if (!sessionData) {
    return (
      <div className="elevenlabs-widget p-4 border rounded-lg bg-gray-50">
        <div className="text-center text-gray-600">
          <p>No active session available. Please purchase a mentor plan to start using AI support.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="elevenlabs-widget p-4 border rounded-lg">
      <div className="mb-4">
        <h3 className="text-lg text-black font-semibold mb-2">Voice Conversation</h3>
        <p className="text-sm text-gray-600 mb-4">
          Connect with our AI mentor through voice. Make sure your microphone is enabled.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              conversation.status === "connected"
                ? "bg-green-500"
                : conversation.status === "connecting"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          />
          <span className="text-sm text-black">
            Status: {conversation.status || "disconnected"}
          </span>
          {conversation.isSpeaking && (
            <span className="text-sm text-blue-600 ml-2">Agent is speaking...</span>
          )}
        </div>

        {/* Live Call Timer */}
        {conversation.status === "connected" && sessionData && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-semibold text-blue-900">Call Duration: </span>
                <span className="text-sm text-blue-700">
                  {Math.floor(elapsedTime / 60)}:{(elapsedTime % 60).toString().padStart(2, '0')}
                </span>
              </div>
              <div>
                <span className="text-sm font-semibold text-blue-900">Max Time: </span>
                <span className="text-sm text-blue-700">
                  {Math.min(sessionData.RemainingDurationMinutes, 10)} min
                </span>
              </div>
            </div>
            <div className="mt-2">
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.min((elapsedTime / (Math.min(sessionData.RemainingDurationMinutes, 10) * 60)) * 100, 100)}%`
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Control Buttons */}
        <div className="flex gap-2">
          {conversation.status !== "connected" ? (
            <button
              onClick={startConversation}
              disabled={isStarting || !isMicPermissionGranted}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isStarting ? "Starting..." : "Start Conversation"}
            </button>
          ) : (
            <button
              onClick={endConversation}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              End Conversation
            </button>
          )}

          {!isMicPermissionGranted && (
            <button
              onClick={requestMicrophonePermission}
              className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
            >
              Enable Microphone
            </button>
          )}
        </div>

        {/* Volume Control */}
        {conversation.status === "connected" && (
          <div className="flex items-center gap-2">
            <label className="text-sm">Volume:</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              defaultValue="0.8"
              onChange={(e) => conversation.setVolume({ volume: parseFloat(e.target.value) })}
              className="w-24"
            />
          </div>
        )}

        {/* Conversation Duration */}
        {(startTime || endTime) && (
          <div className="text-sm text-gray-600">
            {startTime && (
              <div>Started: {startTime.toLocaleTimeString()}</div>
            )}
            {endTime && (
              <div>Ended: {endTime.toLocaleTimeString()}</div>
            )}
            {duration > 0 && (
              <div>Duration: {duration} minute{duration !== 1 ? 's' : ''}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ElevenLabsWidget;