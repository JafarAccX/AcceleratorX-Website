import { useEffect, useRef, useState, useCallback } from "react";
import { MessageCircle, X, Send, Trash2, ExternalLink } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useChatWidget } from "../context/ChatWidgetContext";
import { getEnhancedPrompt } from "../utils/knowledgeBase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const WHATSAPP_NUMBER = "918884288277"; 

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
    clearMessages
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
        block: "end" as ScrollLogicalPosition
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
          addMessage('bot', GREETING_MESSAGE);
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
  }, [isOpen, initializeChat]);

  const handleClearChat = () => {
    console.log("Clearing chat");
    
    // Reset all flags and state
    chatInitialized.current = false;
    isInitializing.current = false;
    setNameRequested(false);
    
    // Clear messages and user info
    clearMessages();
    setIsChatStarted(false);
    setUserInfo({ name: null, phone: null });
    
    // Restart the conversation after clearing
    setTimeout(() => {
      if (isOpen && !chatInitialized.current && !isInitializing.current) {
        initializeChat();
      }
    }, 100);
  };

  // Update user's query history in database
  const updateQueryHistory = async (query: string) => {
    if (!userId) return;
    
    try {
      const timestamp = new Date().toISOString();
      
      // First get the existing query history
      const { data: userData } = await supabase
        .from('chat_users')
        .select('query_history')
        .eq('id', userId)
        .single();

      // Prepare the new query entry
      const newQuery = { query, timestamp };
      
      // Create or update the query history array
      const updatedHistory = userData?.query_history 
        ? [...userData.query_history, newQuery]
        : [newQuery];
      
      // Update user's query history and last interaction time
      await supabase
        .from('chat_users')
        .update({ 
          query_history: updatedHistory,
          last_interaction: timestamp
        })
        .eq('id', userId);
        
      console.log("Updated query history and last interaction");
    } catch (error) {
      console.error('Error updating query history:', error);
    }
  };

  const handleUserInput = async (input: string) => {
    if (!input.trim()) return;
    
    console.log("User input:", input);
    addMessage('user', input);

    // If this is the first user message and we haven't asked for their name yet
    if (!nameRequested && !userInfo.name) {
      setNameRequested(true);
      addMessage('bot', "Thanks for reaching out! I'm your AcceleratorX assistant. Could you please tell me your name so I can better assist you?");
      return;
    }

    // If we've asked for the name but don't have it yet
    if (nameRequested && !userInfo.name) {
      console.log("Setting user name:", input);
      setUserInfo({ ...userInfo, name: input });
      addMessage('bot', `Nice to meet you, ${input}! Could you please share your phone number so I can better assist you?`);
      return;
    }

    if (!userInfo.phone) {
      // Validate phone number - make it more flexible to accept different formats
      const phoneRegex = /^[\d\s\+\-\(\)]{7,15}$/;
      if (!phoneRegex.test(input)) {
        console.log("Invalid phone number format");
        addMessage('bot', "Please provide a valid phone number. It should be between 7-15 digits and may include spaces, +, -, or parentheses.");
        return;
      }
      
      console.log("Setting user phone:", input);
      setUserInfo({ ...userInfo, phone: input });
      
      // Save user info to database
      try {
        console.log("Saving user info to database");
        const timestamp = new Date().toISOString();
        
        const userData = {
          name: userInfo.name,
          phone: input,
          created_at: timestamp,
          query_history: [] as any[],
          last_interaction: timestamp
        };
        
        console.log("Attempting to insert user with data:", userData);
        
        const { data, error } = await supabase
          .from('chat_users')
          .insert([userData])
          .select();
        
        if (error) {
          console.error('Supabase insertion error:', error);
          throw error;
        }
        
        if (data) {
          console.log("Supabase insertion response:", data);
          
          if (data.length > 0) {
            setUserId(data[0].id);
            console.log("User info saved successfully with ID:", data[0].id);
          }
        }
      } catch (error) {
        console.error('Error saving user info:', error);
      }

      addMessage('bot', `Thank you, ${userInfo.name}! I'm here to help with any questions about AcceleratorX's programs, pricing, application process, or anything else you'd like to know. How can I assist you today?`);
      return;
    }

    // Update query history for existing users
    if (userId) {
      await updateQueryHistory(input);
    }
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      console.log("Getting AI response for:", input);
      
      // Get enhanced prompt with relevant knowledge about AcceleratorX
      const enhancedPrompt = getEnhancedPrompt(input);
      console.log("Using enhanced prompt with knowledge base");
      
      // Get response from Gemini
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: enhancedPrompt
      });
      
      const result = await model.generateContent(input);
      const text = result.response.text();
      
      console.log("AI response received");
      setIsTyping(false);
      addMessage('bot', text);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setIsTyping(false);
      addMessage('bot', "I apologize, but I'm having trouble processing your request. Please try again or contact our support team at support@acceleratorx.org, or use the WhatsApp link above for direct assistance.");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)]">
          <div 
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col h-[600px] max-h-[80vh] transition-all duration-300 ease-in-out"
          >
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

            {/* Messages Area - Improved to prevent scroll issues */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950 scroll-smooth" style={{ overscrollBehavior: 'contain' }}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-blue-500 text-white rounded-tr-none'
                        : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-none'
                    }`}
                  >
                    {message.role === 'bot' && (
                      <div className="flex items-center gap-2 mb-1 text-xs text-gray-600 dark:text-gray-400">
                        <div className="bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-bold">
                          AX
                        </div>
                        <span>AcceX Buddy</span>
                      </div>
                    )}
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div className="text-xs opacity-70 mt-1 text-right">
                      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
                      <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* This div is used as a scroll target - improved positioning */}
              <div ref={messagesEndRef} className="h-0 w-full" />
            </div>

            {/* Input Area - Fixed to prevent focus issues */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky bottom-0">
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
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full p-4 shadow-lg transition-colors"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </>
  );
}
