import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from "react";
import { a as api, u as useUser } from "../entry-server.js";
import { useConversation } from "@elevenlabs/react";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "lucide-react";
import "react-dom";
import "react-icons/pi";
import "framer-motion";
const ElevenLabsWidget = ({ sessionData, onSessionUpdate }) => {
  const [isMicPermissionGranted, setIsMicPermissionGranted] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const timeoutRef = useRef(null);
  const [currentCallId, setCurrentCallId] = useState(null);
  const wasTimeoutRef = useRef(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const elapsedTimerRef = useRef(null);
  const conversation = useConversation({
    onConnect: async () => {
      console.log("Connected to ElevenLabs conversation");
      const now = /* @__PURE__ */ new Date();
      setStartTime(now);
      setEndTime(null);
      setDuration(0);
      try {
        if (sessionData) {
          const response = await api.post("/api/talk-sessions/calls", {
            TalkSessionId: sessionData.Id,
            CustId: sessionData.CustId,
            AgentId: sessionData.AgentId,
            CallStartTime: now.toISOString(),
            // Send actual start time
            PlannedDurationMinutes: Math.min(sessionData.RemainingDurationMinutes, 10),
            // 10 min limit
            ConversationId: conversation.getId() || null,
            CallStatus: "IN_PROGRESS"
          });
          if (response.data.success) {
            setCurrentCallId(response.data.data.Id);
            console.log("✅ Call record created:", response.data.data.Id);
          }
        }
      } catch (error) {
        console.error("Failed to create call record:", error);
      }
      const maxDuration = sessionData ? Math.min(sessionData.RemainingDurationMinutes, 10) : 10;
      const timeoutDuration = maxDuration * 60 * 1e3;
      console.log(`⏱️ Call will auto-end after ${maxDuration} minutes`);
      console.log(`📊 Session has ${sessionData?.RemainingDurationMinutes} minutes remaining`);
      setElapsedTime(0);
      elapsedTimerRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1e3);
      timeoutRef.current = setTimeout(async () => {
        console.log(`⏱️ ${maxDuration}-minute timeout reached, ending conversation automatically`);
        wasTimeoutRef.current = true;
        try {
          console.log("🔌 Initiating automatic disconnect via endSession()...");
          await conversation.endSession();
          console.log("✅ Automatic disconnect completed - onDisconnect callback should fire now");
          alert(`Conversation ended after ${maxDuration} minute${maxDuration !== 1 ? "s" : ""}. ${maxDuration < 10 ? "You have used all your available session time." : ""}`);
        } catch (error) {
          console.error("❌ Failed to end conversation on timeout:", error);
          console.log("⚠️ Attempting manual cleanup after endSession failure...");
        }
      }, timeoutDuration);
    },
    onDisconnect: async () => {
      console.log("🔴 Disconnected from ElevenLabs conversation");
      console.log("📊 Disconnect reason:", wasTimeoutRef.current ? "AUTOMATIC TIMEOUT" : "USER ENDED");
      const now = /* @__PURE__ */ new Date();
      setEndTime(now);
      if (startTime) {
        const durationMs = now.getTime() - startTime.getTime();
        const durationMinutes = Math.ceil(durationMs / (1e3 * 60));
        setDuration(durationMinutes);
        console.log(`⏱️ Call duration: ${durationMinutes} minute(s)`);
        if (currentCallId) {
          try {
            console.log("💾 Updating call record in database...");
            await api.put(`/api/talk-sessions/calls/${currentCallId}`, {
              CallEndTime: now.toISOString(),
              ActualDurationMinutes: durationMinutes,
              CallStatus: "COMPLETED",
              DisconnectReason: wasTimeoutRef.current ? "TIMEOUT" : "USER_ENDED"
            });
            console.log("✅ Call record updated - Duration:", durationMinutes, "min, Reason:", wasTimeoutRef.current ? "TIMEOUT" : "USER_ENDED");
          } catch (error) {
            console.error("❌ Failed to update call record:", error);
          }
        } else {
          console.warn("⚠️ No currentCallId found, skipping call record update");
        }
        if (sessionData) {
          try {
            const newUsedDuration = sessionData.UsedDurationMinutes + durationMinutes;
            const newRemainingDuration = Math.max(0, sessionData.RemainingDurationMinutes - durationMinutes);
            console.log("💾 Updating session duration in database...");
            await api.put(`/api/talk-sessions/sessions/${sessionData.Id}`, {
              UsedDurationMinutes: newUsedDuration,
              RemainingDurationMinutes: newRemainingDuration,
              Status: newRemainingDuration > 0 ? "ACTIVE" : "EXHAUSTED"
            });
            console.log("✅ Session updated - Used:", newUsedDuration, "Remaining:", newRemainingDuration);
            if (onSessionUpdate) {
              console.log("🔄 Refreshing session data in UI...");
              onSessionUpdate();
            }
          } catch (error) {
            console.error("❌ Failed to update session:", error);
          }
        } else {
          console.warn("⚠️ No sessionData found, skipping session update");
        }
      } else {
        console.warn("⚠️ No startTime found, cannot calculate duration");
      }
      if (timeoutRef.current) {
        console.log("🧹 Clearing timeout timer");
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (elapsedTimerRef.current) {
        console.log("🧹 Clearing elapsed time timer");
        clearInterval(elapsedTimerRef.current);
        elapsedTimerRef.current = null;
      }
      wasTimeoutRef.current = false;
      setCurrentCallId(null);
      console.log("✅ Disconnect cleanup completed");
    },
    onMessage: (message) => {
      console.log("Message received:", message);
    },
    onError: (error) => {
      console.error("Conversation error:", error);
    },
    onStatusChange: (status) => {
      console.log("Status changed:", status);
    }
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
        connectionType: "webrtc"
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
    requestMicrophonePermission();
  }, []);
  if (!sessionData) {
    return /* @__PURE__ */ jsx("div", { className: "elevenlabs-widget p-4 border rounded-lg bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "text-center text-gray-600", children: /* @__PURE__ */ jsx("p", { children: "No active session available. Please purchase a mentor plan to start using AI support." }) }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "elevenlabs-widget p-4 border rounded-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg text-black font-semibold mb-2", children: "Voice Conversation" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: "Connect with our AI mentor through voice. Make sure your microphone is enabled." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `w-3 h-3 rounded-full ${conversation.status === "connected" ? "bg-green-500" : conversation.status === "connecting" ? "bg-yellow-500" : "bg-red-500"}`
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-sm text-black", children: [
          "Status: ",
          conversation.status || "disconnected"
        ] }),
        conversation.isSpeaking && /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-600 ml-2", children: "Agent is speaking..." })
      ] }),
      conversation.status === "connected" && sessionData && /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-blue-900", children: "Call Duration: " }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-blue-700", children: [
              Math.floor(elapsedTime / 60),
              ":",
              (elapsedTime % 60).toString().padStart(2, "0")
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-blue-900", children: "Max Time: " }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-blue-700", children: [
              Math.min(sessionData.RemainingDurationMinutes, 10),
              " min"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-blue-600 h-2 rounded-full transition-all duration-1000",
            style: {
              width: `${Math.min(elapsedTime / (Math.min(sessionData.RemainingDurationMinutes, 10) * 60) * 100, 100)}%`
            }
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        conversation.status !== "connected" ? /* @__PURE__ */ jsx(
          "button",
          {
            onClick: startConversation,
            disabled: isStarting || !isMicPermissionGranted,
            className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed",
            children: isStarting ? "Starting..." : "Start Conversation"
          }
        ) : /* @__PURE__ */ jsx(
          "button",
          {
            onClick: endConversation,
            className: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
            children: "End Conversation"
          }
        ),
        !isMicPermissionGranted && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: requestMicrophonePermission,
            className: "px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700",
            children: "Enable Microphone"
          }
        )
      ] }),
      conversation.status === "connected" && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm", children: "Volume:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "range",
            min: "0",
            max: "1",
            step: "0.1",
            defaultValue: "0.8",
            onChange: (e) => conversation.setVolume({ volume: parseFloat(e.target.value) }),
            className: "w-24"
          }
        )
      ] }),
      (startTime || endTime) && /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
        startTime && /* @__PURE__ */ jsxs("div", { children: [
          "Started: ",
          startTime.toLocaleTimeString()
        ] }),
        endTime && /* @__PURE__ */ jsxs("div", { children: [
          "Ended: ",
          endTime.toLocaleTimeString()
        ] }),
        duration > 0 && /* @__PURE__ */ jsxs("div", { children: [
          "Duration: ",
          duration,
          " minute",
          duration !== 1 ? "s" : ""
        ] })
      ] })
    ] })
  ] });
};
function MentorPage() {
  const { user, isAuthenticated } = useUser();
  const [activeSession, setActiveSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
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
      console.error("Error checking active session:", err);
      const error2 = err;
      if (error2.response?.status === 404) {
        setActiveSession(null);
      } else {
        setError("Failed to check session status");
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
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen pt-20 md:pt-40 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "AI Mentor Support" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8", children: "Please log in to access AI mentor support." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/sign-in",
          className: "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",
          children: "Log In"
        }
      )
    ] }) });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen pt-20 md:pt-40 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Checking session status..." })
    ] }) });
  }
  if (error) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen pt-20 md:pt-40 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "AI Mentor Support" }),
      /* @__PURE__ */ jsx("div", { className: "bg-red-50 border border-red-200 rounded-lg p-4 mb-4", children: /* @__PURE__ */ jsx("p", { className: "text-red-800", children: error }) })
    ] }) });
  }
  if (!activeSession) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen pt-20 md:pt-40 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "AI Mentor Support" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-yellow-800 mb-2", children: "No Active Session" }),
        /* @__PURE__ */ jsx("p", { className: "text-yellow-700 mb-4", children: "You don't have an active talk session. Purchase a mentor plan to start using AI mentor support." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/courses",
            className: "inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors",
            children: "View Available Plans"
          }
        )
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen pt-20 md:pt-40 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "AI Mentor Support" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto mb-4", children: "Connect with our intelligent AI mentor for personalized guidance and support. Engage in natural voice conversations to get help with your learning journey." }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-4 mb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: activeSession.Title }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700", children: "Remaining Time:" }),
            /* @__PURE__ */ jsxs("span", { className: "ml-2 text-blue-600", children: [
              activeSession.RemainingDurationMinutes,
              " minutes"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700", children: "Used Time:" }),
            /* @__PURE__ */ jsxs("span", { className: "ml-2 text-gray-600", children: [
              activeSession.UsedDurationMinutes,
              " minutes"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700", children: "Total Time:" }),
            /* @__PURE__ */ jsxs("span", { className: "ml-2 text-gray-600", children: [
              activeSession.TotalDurationMinutes,
              " minutes"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-xl shadow-lg p-6", children: /* @__PURE__ */ jsx(
      ElevenLabsWidget,
      {
        sessionData: activeSession,
        onSessionUpdate: checkActiveSession
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxs("div", { className: " rounded-lg p-4 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-blue-900 mb-2", children: "Tips for Best Experience" }),
      /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1 text-left", children: [
        /* @__PURE__ */ jsx("li", { children: "• Ensure you're in a quiet environment for clear communication" }),
        /* @__PURE__ */ jsx("li", { children: "• Speak clearly and at a normal pace" }),
        /* @__PURE__ */ jsx("li", { children: "• The AI mentor can help with course questions, career advice, and technical guidance" }),
        /* @__PURE__ */ jsx("li", { children: "• Use the feedback buttons to help improve the conversation quality" })
      ] })
    ] }) })
  ] }) });
}
export {
  MentorPage as default
};
