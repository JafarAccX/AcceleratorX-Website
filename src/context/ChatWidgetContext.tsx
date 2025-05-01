import React, { createContext, useContext, ReactNode, useState } from 'react';

interface Message {
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface UserInfo {
  name: string | null;
  phone: string | null;
}

interface ChatWidgetContextType {
  messages: Message[];
  addMessage: (role: 'user' | 'bot', content: string) => void;
  userInfo: UserInfo;
  setUserInfo: (info: UserInfo) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isChatStarted: boolean;
  setIsChatStarted: (started: boolean) => void;
  clearMessages: () => void;
}

const ChatWidgetContext = createContext<ChatWidgetContextType>({
  messages: [],
  addMessage: () => {},
  userInfo: { name: null, phone: null },
  setUserInfo: () => {},
  isOpen: false,
  setIsOpen: () => {},
  isChatStarted: false,
  setIsChatStarted: () => {},
  clearMessages: () => {}
});

export const useChatWidget = () => useContext(ChatWidgetContext);

interface ChatWidgetProviderProps {
  children: ReactNode;
}

export const ChatWidgetProvider: React.FC<ChatWidgetProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: null, phone: null });
  const [isOpen, setIsOpen] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);

  const addMessage = (role: 'user' | 'bot', content: string) => {
    setMessages(prev => [...prev, { role, content, timestamp: new Date() }]);
  };

  const clearMessages = () => {
    setMessages([]);
    setUserInfo({ name: null, phone: null });
  };

  return (
    <ChatWidgetContext.Provider 
      value={{ 
        messages, 
        addMessage, 
        userInfo, 
        setUserInfo, 
        isOpen, 
        setIsOpen,
        isChatStarted,
        setIsChatStarted,
        clearMessages
      }}
    >
      {children}
    </ChatWidgetContext.Provider>
  );
};
