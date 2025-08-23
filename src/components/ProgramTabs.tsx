import React from 'react';

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
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`relative px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ease-in-out ${
              activeTab === tab
                ? 'text-white'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {activeTab === tab && (
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-500/90 rounded-md"
                style={{ boxShadow: '0 2px 8px rgba(59, 130, 246, 0.2)' }}
              />
            )}
            <span className={`relative z-10 transform transition-transform duration-300 ${activeTab === tab ? 'scale-105' : ''}`}>
              {tab}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProgramTabs;
