import { useEffect, useRef, useState, useCallback } from "react";
import { MessageCircle, X, Send, Trash2, ExternalLink } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { useCourseContext } from "../context/courseContext";
import { useLocation } from "react-router-dom";
import { shouldShowChatWidget } from "../utils/chatWidgetUtils";
import { trackFormSubmission } from "../utils/metaPixel";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const WHATSAPP_NUMBER = "919916859555";

const supabase = createClient(supabaseUrl, supabaseKey);
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Initial greeting message
const GREETING_MESSAGE = "👋 Hi there! How can I help you today?";

export default function ChatWidget() {
  const {
    messages,
    addMessage,
    userInfo,
    setUserInfo,
    isOpen,
    setIsOpen,
    isChatStarted,
    setIsChatStarted,
    clearMessages,
  } = useChatWidget();

  const [isTyping, setIsTyping] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [nameRequested, setNameRequested] = useState(false);
  const chatInitialized = useRef(false);
  const isInitializing = useRef(false); // New ref to track initialization in progress

  // Scroll to bottom of messages - improved to prevent shifting
  useEffect(() => {
    if (messagesEndRef.current) {
      // Use a smoother scroll that won't disrupt the user experience
      const scrollOptions = {
        behavior: "smooth" as ScrollBehavior,
        block: "end" as ScrollLogicalPosition,
      };

      // Only use smooth scrolling for new messages, not during typing
      if (isTyping) {
        scrollOptions.behavior = "auto";
      }

      messagesEndRef.current.scrollIntoView(scrollOptions);
    }
  }, [messages, isTyping]);

  // Initialize chat when opened - with improved checks to prevent double initialization
  const initializeChat = useCallback(() => {
    // Only proceed if not already initialized, not currently initializing, and no messages exist
    if (!chatInitialized.current && !isInitializing.current && messages.length === 0) {
      console.log("Initializing chat with greeting");

      // Set initializing flag to prevent concurrent initializations
      isInitializing.current = true;

      // Set timeout to ensure we don't get race conditions
      setTimeout(() => {
        // Double-check that messages are still empty before adding
        if (messages.length === 0) {
          addMessage("bot", GREETING_MESSAGE);
          setIsChatStarted(true);
          chatInitialized.current = true;
        }
        // Reset initializing flag
        isInitializing.current = false;
      }, 0);
    }
  }, [addMessage, messages.length, setIsChatStarted]);

  // Handle chat open/close with improved logic
  useEffect(() => {
    if (isOpen) {
      // When chat is opened, initialize it (only if not already initialized)
      if (!chatInitialized.current) {
        initializeChat();
      }
    } else {
      // When chat is closed, reset initialization flags
      chatInitialized.current = false;
      isInitializing.current = false;
      setNameRequested(false);
    }
  }, [selectedCourse, isHomePage]);

  // Check if chat widget should be shown
  if (!shouldShowChatWidget(location.pathname)) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable submit button during submission

    // If on homepage, update the selected course
    if (isHomePage) {
      setSelectedCourse(formData.course);
    }

    try {
      const { error } = await supabase.from("enrollments").insert([
        {
          full_name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          education_level: formData.education,
          course: isHomePage ? formData.course : selectedCourse || "Unknown", // Fallback if selectedCourse is null
        },
      ]);

      if (error) throw error;

      // Track form submission with Meta Pixel
      const trackingFormData = new FormData();
      trackingFormData.append('name', formData.name);
      trackingFormData.append('email', formData.email);
      trackingFormData.append('phone', formData.phone);
      trackingFormData.append('course', isHomePage ? formData.course : selectedCourse || "Unknown");

      await trackFormSubmission(trackingFormData);

      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", email: "", education: "", course: "" });
      }, 4000);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setIsTyping(false);
      addMessage(
        "bot",
        "I apologize, but I'm having trouble processing your request. Please try again or contact our support team at support@acceleratorx.org, or use the WhatsApp link above for direct assistance.",
      );
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)]">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col h-[600px] max-h-[80vh] transition-all duration-300 ease-in-out">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <div>
                  <h3 className="font-semibold">AcceX Buddy</h3>
                  <p className="text-xs text-blue-100">Accelerate your career growth!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearChat}
                  className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Clear chat"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* WhatsApp Contact Banner */}
            <div className="bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-900/30 p-2 text-xs text-green-800 dark:text-green-300 flex items-center justify-center">
              <span>Prefer direct contact?</span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 ml-1 font-medium text-green-600 dark:text-green-400 hover:underline"
              >
                Chat on WhatsApp <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Phone Input */}
            <div className="flex">
              <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400">
                +91
              </span>
              <input
                type="tel"
                required
                className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-r-xl px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData({
                    ...formData,
                    phone: sanitizedValue,
                  });
                }}
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                required
                className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
                    )}
            <div className="whitespace-pre-wrap">{message.content}</div>
            <div className="text-xs opacity-70 mt-1 text-right">
              {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-tl-none px-4 py-3 text-gray-900 dark:text-gray-100 max-w-[80%]">
            <div className="flex items-center gap-2 mb-1 text-xs text-gray-600 dark:text-gray-400">
              <div className="bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-bold">
                AX
              </div>
              <span>AcceX Buddy</span>
            </div>
            <div className="flex space-x-1">
              <div
                className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* This div is used as a scroll target - improved positioning */}
      <div ref={messagesEndRef} className="h-0 w-full" />
    </div >

      {/* Input Area - Fixed to prevent focus issues */ }
      < div className = "p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky bottom-0" >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const input = (e.target as HTMLFormElement).message.value;
            if (input.trim()) {
              handleUserInput(input);
              (e.target as HTMLFormElement).reset();
            }
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            name="message"
            placeholder="Type your message..."
            className="flex-1 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all"
            disabled={isTyping}
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isTyping}
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
            </div >
          </div >
        </div >
      )
}

{/* Chat Toggle Button */ }
{
  !isOpen && (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full p-4 shadow-lg transition-colors"
      aria-label="Open chat"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
    </>
  );
}
