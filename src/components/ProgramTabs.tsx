import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProgramTabs: React.FC<TabProps> = ({ activeTab, onTabChange }) => {
  const tabs = ['EIE European Business School Program', 'AcceleratorX Program'];

  return (
    <div className="flex justify-center mt-4">
      <div className="inline-flex items-center bg-gray-900/50 backdrop-blur-md rounded-lg p-1 border border-gray-800">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`relative px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ease-in-out ${
              activeTab === tab
                ? 'text-white'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut"
            }}
          >
            <AnimatePresence mode="wait">
              {activeTab === tab && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-500/90 rounded-md"
                  layoutId="activeTabBackground"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: { duration: 0.3, ease: "linear" }
                  }}
                  exit={{ 
                    opacity: 0,
                    transition: { duration: 0.3, ease: "linear" }
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "linear"
                  }}
                  style={{
                    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.2)'
                  }}
                />
              )}
            </AnimatePresence>
            <motion.span 
              className="relative z-10"
              initial={false}
              animate={{
                scale: activeTab === tab ? 1.01 : 1,
                transition: { 
                  duration: 0.3,
                  ease: "linear"
                }
              }}
            >
              {tab}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProgramTabs;
