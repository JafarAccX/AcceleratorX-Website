import React, { createContext, useContext, ReactNode } from 'react';

interface ChatWidgetContextType {
  isChatWidgetEnabled: boolean;
}

const ChatWidgetContext = createContext<ChatWidgetContextType>({ isChatWidgetEnabled: true });

export const useChatWidget = () => useContext(ChatWidgetContext);

interface ChatWidgetProviderProps {
  children: ReactNode;
  isEnabled?: boolean;
}

export const ChatWidgetProvider: React.FC<ChatWidgetProviderProps> = ({ 
  children, 
  isEnabled = true 
}) => {
  return (
    <ChatWidgetContext.Provider value={{ isChatWidgetEnabled: isEnabled }}>
      {children}
    </ChatWidgetContext.Provider>
  );
};
