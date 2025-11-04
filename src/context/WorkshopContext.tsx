import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

type WorkshopType =
  | "DAWorkshop"
  | "DASecondWorkshop"
  | "PMWorkshop"
  | "GENAIWorkshop"
  | "GENAIBWorkshop"
  | "GENAICWorkshop"
  | "DMWorkshop";

interface ZoomMeetingDetails {
  title: string;
  link: string;
  meetingId: string;
  time: string;
  meetingCode: string;
}

interface WorkshopContextType {
  workshopType: WorkshopType;
  setWorkshopType: (type: WorkshopType) => void;
  zoomMeetingDetails: ZoomMeetingDetails;
}

const PMZoomDetails: ZoomMeetingDetails = {
  title: "AI Product Management Mastery Class",
  link: "https://zoom.us/meeting/register/PmLITMVBQ6a9E9uZ5CySBw",
  meetingId: "97348431386",
  time: "25/15/2025 7:00 PM India",
  meetingCode: "97348431386",
};

const DAZoomDetails: ZoomMeetingDetails = {
  title: "Upgrade Your Data Analysis Techniques with AI",
  link: "https://zoom.us/meeting/register/9wz8unT2Q8iq9NX_4-Nr7Q",
  meetingId: "9wz8unT2Q8iq9NX_4-Nr7Q",
  time: "23th May, 2025 08:00 PM India",
  meetingCode: "95277125074",
};

const DASecondZoomDetails: ZoomMeetingDetails = {
  title: "AI Data Analysis Crash Course",
  link: "https://zoom.us/meeting/register/ZSZw9J88Qmacj-FO7KWh4w",
  meetingId: "b_CgAZvOT0WPuW9DG-10mg",
  time: "11/10/2025 7:00 PM India",
  meetingCode: "99801086032",
};

const GENAIZoomDetails: ZoomMeetingDetails = {
  title: "Social Media Lead Gen Magnet using make.com",
  link: "https://zoom.us/meeting/register/_UMsYvzPRayKLzneFMoawQ",
  meetingId: "_UMsYvzPRayKLzneFMoawQ",
  time: "29 Jun, 2025 11:00 AM India",
  meetingCode: "91800954050",
};

const GENAIBZoomDetails: ZoomMeetingDetails = {
  title: "Marketing Automation",
  link: "https://zoom.us/meeting/register/ebn6odaVTHSWMNOkvpNayw",
  meetingId: "ebn6odaVTHSWMNOkvpNayw",
  time: "09th Nov, 2025 11:00 AM India",
  meetingCode: "92965681534",
};

const GENAICZoomDetails: ZoomMeetingDetails = {
  title: "Start your automation with Flowise",
  link: "https://zoom.us/meeting/register/v6X24VyqSt26UvcxfL7J3g",
  meetingId: "v6X24VyqSt26UvcxfL7J3g",
  time: "10th Nov, 2025 07:00 PM India",
  meetingCode: "99613499939",
};

const DMZoomDetails: ZoomMeetingDetails = {
  title: "Learn to Automate your Lead Generation & Enrichment",
  link: "https://zoom.us/meeting/register/KVSQCqQxRl-OUCNUlS_NNw",
  meetingId: "KVSQCqQxRl-OUCNUlS_NNw",
  time: "July 24, 2025 08:30 PM India",
  meetingCode: "96633694839",
};

const WorkshopContext = createContext<WorkshopContextType | undefined>(undefined);

export const WorkshopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [workshopType, setWorkshopType] = React.useState<WorkshopType>("DAWorkshop");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/pm-masterclass")) {
      setWorkshopType("PMWorkshop");
    } else if (location.pathname.includes("/da-masterclass-bxwxy")) {
      setWorkshopType("DASecondWorkshop");
    } else if (location.pathname.includes("/da-masterclass")) {
      setWorkshopType("DAWorkshop");
    } else if (location.pathname.includes("/gen-ai-masterclass-bxwcy")) {
      setWorkshopType("GENAIBWorkshop");
    } else if (location.pathname.includes("/gen-ai-masterclass-thidtx")) {
      setWorkshopType("GENAICWorkshop");
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
      : workshopType === "GENAIBWorkshop"
      ? GENAIBZoomDetails
      : workshopType === "GENAICWorkshop"
      ? GENAICZoomDetails
      : workshopType === "DMWorkshop"
      ? DMZoomDetails
      : workshopType === "DASecondWorkshop"
      ? DASecondZoomDetails
      : DAZoomDetails;

  return (
    <WorkshopContext.Provider value={{ workshopType, setWorkshopType, zoomMeetingDetails }}>
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
