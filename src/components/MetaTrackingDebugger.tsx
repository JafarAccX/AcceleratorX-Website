import React, { useEffect, useState } from 'react';
import { getTrackingDebugInfo } from '../utils/unifiedTracking';

interface DebugInfo {
  cachedEvents: number;
  initializedPixels: string[];
  events: Array<[string, { eventType: string; route: string; eventId: string; timestamp: number; pixelId: string }]>;
}

export const MetaTrackingDebugger: React.FC = () => {
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDebugInfo(getTrackingDebugInfo());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Only show in development
  if (import.meta.env.MODE !== 'development') {
    return null;
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-3 py-2 rounded text-xs z-50"
      >
        🔍 Meta Debug
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg max-w-sm text-xs z-50 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Meta Tracking Debug</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      
      {debugInfo && (
        <div className="space-y-2">
          <div>
            <strong>Cached Events:</strong> {debugInfo.cachedEvents}
          </div>
          
          <div>
            <strong>Initialized Pixels:</strong>
            <div className="ml-2">
              {debugInfo.initializedPixels.length > 0 
                ? debugInfo.initializedPixels.map(pixel => (
                    <div key={pixel} className="text-green-400">
                      ✓ {pixel.slice(-6)}
                    </div>
                  ))
                : <div className="text-red-400">None</div>
              }
            </div>
          </div>
          
          <div>
            <strong>Recent Events:</strong>
            <div className="ml-2 max-h-40 overflow-y-auto">
              {debugInfo.events.length > 0 
                ? debugInfo.events.slice(-5).map(([, event], idx) => (
                    <div key={idx} className="text-blue-400 text-xs">
                      {event.eventType} | {event.route} | {event.eventId.slice(-6)}
                    </div>
                  ))
                : <div className="text-gray-400">None</div>
              }
            </div>
          </div>
          
          <div className="pt-2 border-t border-gray-700">
            <div><strong>Route:</strong> {window.location.pathname}</div>
            <div><strong>Meta Event ID:</strong> {window.__META_EVENT_ID__?.slice(-6) || 'None'}</div>
          </div>
        </div>
      )}
    </div>
  );
};
