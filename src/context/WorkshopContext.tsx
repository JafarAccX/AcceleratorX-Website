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
  title: "Building AI Products (Marathon Session - 3 Hr ) ",
  link: "https://zoom.us/meeting/register/ASxjF13aRdW4_fMzjx5OcQ",
  meetingId: "ASxjF13aRdW4_fMzjx5OcQ",
  time: "July 13, 2025 11:00 AM India",
  meetingCode: "93044155126",
};

const DAZoomDetails: ZoomMeetingDetails = {
  title: "Upgrade Your Data Analysis Techniques with AI",
  link: "https://zoom.us/meeting/register/9wz8unT2Q8iq9NX_4-Nr7Q",
  meetingId: "9wz8unT2Q8iq9NX_4-Nr7Q",
  time: "23th May, 2025 08:00 PM India",
  meetingCode: "95277125074",
};

const DASecondZoomDetails: ZoomMeetingDetails = {
  title: "Visual Data Analysis in AI Era",
  link: "https://zoom.us/meeting/register/l0RyCasST7aJgmncVzggTA",
  meetingId: "l0RyCasST7aJgmncVzggTA",
  time: "July 17, 2025 8:30 PM India",
  meetingCode: "94102953142",
};

const GENAIZoomDetails: ZoomMeetingDetails = {
  title: "Social Media Lead Gen Magnet using make.com",
  link: "https://zoom.us/meeting/register/_UMsYvzPRayKLzneFMoawQ",
  meetingId: "_UMsYvzPRayKLzneFMoawQ",
  time: "29 Jun, 2025 11:00 AM India",
  meetingCode: "91800954050",
};

const GENAIBZoomDetails: ZoomMeetingDetails = {
  title: "How to Automate your workflows Using n8n",
  link: "https://zoom.us/meeting/register/moivGRTCRVu02E_-CmzaIw",
  meetingId: "moivGRTCRVu02E_-CmzaIw",
  time: "15th May, 2025 08:00 PM India",
  meetingCode: "96045949365",
};

const GENAICZoomDetails: ZoomMeetingDetails = {
  title: "Building AI Powered Applications Using Langchain",
  link: "https://zoom.us/meeting/register/dcf-c3C1TQ639dJ6Sw1TrA",
  meetingId: "dcf-c3C1TQ639dJ6Sw1TrA",
  time: "21 Jun, 2025 07:30 PM India",
  meetingCode: "92086179774",
};

const DMZoomDetails: ZoomMeetingDetails = {
  title: "Learn to Automate your Lead Generation & Enrichment",
  link: "https://zoom.us/meeting/register/KVSQCqQxRl-OUCNUlS_NNw",
  meetingId: "KVSQCqQxRl-OUCNUlS_NNw",
  time: "July 15, 2025 08:30 PM India",
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
