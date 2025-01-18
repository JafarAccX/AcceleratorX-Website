import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type WorkshopType = 'DAWorkshop' | 'PMWorkshop';

interface ZoomMeetingDetails {
  link: string;
  meetingId: string;
  time: string;
}

interface WorkshopContextType {
  workshopType: WorkshopType;
  setWorkshopType: (type: WorkshopType) => void;
  zoomMeetingDetails: ZoomMeetingDetails;
}

const PMZoomDetails: ZoomMeetingDetails = {
  link: "https://zoom.us/meeting/register/vALNSDrBTgCwL-PM4HSAAg",
  meetingId: "vALNSDrBTgCwL-PM4HSAAg",
  time: "Jan 21, 2025 08:00 PM India"
};

const DAZoomDetails: ZoomMeetingDetails = {
  link: "https://zoom.us/meeting/register/TE5-Li8qTwGocSVE5eIYvQ",
  meetingId: "TE5-Li8qTwGocSVE5eIYvQ",
  time: "Jan 21, 2025 07:30 PM India"
};

const WorkshopContext = createContext<WorkshopContextType | undefined>(undefined);

export const WorkshopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [workshopType, setWorkshopType] = React.useState<WorkshopType>('DAWorkshop');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/pm-masterclass')) {
      setWorkshopType('PMWorkshop');
    } else if (location.pathname.includes('/da-masterclass')) {
      setWorkshopType('DAWorkshop');
    }
  }, [location.pathname]);

  const zoomMeetingDetails = workshopType === 'PMWorkshop' ? PMZoomDetails : DAZoomDetails;

  return (
    <WorkshopContext.Provider value={{ workshopType, setWorkshopType, zoomMeetingDetails }}>
      {children}
    </WorkshopContext.Provider>
  );
};

export const useWorkshop = () => {
  const context = useContext(WorkshopContext);
  if (context === undefined) {
    throw new Error('useWorkshop must be used within a WorkshopProvider');
  }
  return context;
};
