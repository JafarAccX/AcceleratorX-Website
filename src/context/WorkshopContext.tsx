import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

type WorkshopType = "DAWorkshop" | "PMWorkshop" | "GENAIWorkshop" | "DMWorkshop";

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
  link: "https://zoom.us/meeting/register/yJQj-GidSU-B8N1MGqw6lg",
  meetingId: "yJQj-GidSU-B8N1MGqw6lg",
  time: "Feb 8, 2025 07:00 PM India",
};

const DAZoomDetails: ZoomMeetingDetails = {
  link: "https://zoom.us/meeting/register/G1EFKRzfTGyD3KmZ9nW14A",
  meetingId: "G1EFKRzfTGyD3KmZ9nW14A",
  time: "Feb 10, 2025 07:30 PM India",
};

const GENAIZoomDetails: ZoomMeetingDetails = {
  link: "https://zoom.us/meeting/register/rDmS0ScBTCGEEgDzTDibug",
  meetingId: "rDmS0ScBTCGEEgDzTDibug",
  time: "Feb 11, 2025 07:30 PM India",
};

const DMZoomDetails: ZoomMeetingDetails = {
  link: "https://zoom.us/meeting/register/-EeXRY1GQFmxc9eHG73nnQ",
  meetingId: "EeXRY1GQFmxc9eHG73nnQ",
  time: "Feb 16, 2025 04:00 PM India",
};



const WorkshopContext = createContext<WorkshopContextType | undefined>(
  undefined
);

export const WorkshopProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [workshopType, setWorkshopType] =
    React.useState<WorkshopType>("DAWorkshop");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/pm-masterclass")) {
      setWorkshopType("PMWorkshop");
    } else if (location.pathname.includes("/da-masterclass")) {
      setWorkshopType("DAWorkshop");
    } else if (location.pathname.includes("/gen-ai-masterclass")) {
      setWorkshopType("GENAIWorkshop");
    } else if (location.pathname.includes("/dm-masterclass")) {
      setWorkshopType("DMWorkshop");
    }
  }, [location.pathname]);

  const zoomMeetingDetails =
    workshopType === "PMWorkshop"
      ? PMZoomDetails
      : workshopType === "GENAIWorkshop"
      ? GENAIZoomDetails
      : workshopType === "DMWorkshop"
      ? DMZoomDetails
      : DAZoomDetails;

  return (
    <WorkshopContext.Provider
      value={{ workshopType, setWorkshopType, zoomMeetingDetails }}
    >
      {children}
    </WorkshopContext.Provider>
  );
};

export const useWorkshop = () => {
  const context = useContext(WorkshopContext);
  if (context === undefined) {
    throw new Error("useWorkshop must be used within a WorkshopProvider");
  }
  return context;
};
