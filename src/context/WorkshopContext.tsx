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
  title: "Gen Ai for PM's",
  link: "https://zoom.us/meeting/register/0GpAaGmmSoOQrKlZbzKwuQ",
  meetingId: "0GpAaGmmSoOQrKlZbzKwuQ",
  time: "June 07, 2025 07:30 PM India",
  meetingCode: "94740560060",
};

const DAZoomDetails: ZoomMeetingDetails = {
  title: "Upgrade Your Data Analysis Techniques with AI",
  link: "https://zoom.us/meeting/register/9wz8unT2Q8iq9NX_4-Nr7Q",
  meetingId: "9wz8unT2Q8iq9NX_4-Nr7Q",
  time: "23th May, 2025 08:00 PM India",
  meetingCode: "95277125074",
};

const DASecondZoomDetails: ZoomMeetingDetails = {
  title: "How to do data analysis using AI ",
  link: "https://zoom.us/meeting/register/HAfvvi1URiadTOeGsRf8TA",
  meetingId: "HAfvvi1URiadTOeGsRf8TA",
  time: "June 13, 2025 7:30 PM India",
  meetingCode: "92672772725",
};

const GENAIZoomDetails: ZoomMeetingDetails = {
  title: "testing paid webinar",
  link: "https://zoom.us/meeting/register/A4GSQocITmyJn-gBZzORcA",
  meetingId: "A4GSQocITmyJn-gBZzORcA",
  time: "09 Jun, 2025 07:30 PM India",
  meetingCode: "92394151440",
};

const GENAIBZoomDetails: ZoomMeetingDetails = {
  title: "How to Automate your workflows Using n8n",
  link: "https://zoom.us/meeting/register/moivGRTCRVu02E_-CmzaIw",
  meetingId: "moivGRTCRVu02E_-CmzaIw",
  time: "15th May, 2025 08:00 PM India",
  meetingCode: "96045949365",
};

const GENAICZoomDetails: ZoomMeetingDetails = {
  title: "Automate workflows using n8n - Practical Implementation",
  link: "https://zoom.us/meeting/register/A4GSQocITmyJn-gBZzORcA",
  meetingId: "A4GSQocITmyJn-gBZzORcA",
  time: "09 Jun, 2025 07:30 PM India",
  meetingCode: "92394151440",
};

const DMZoomDetails: ZoomMeetingDetails = {
  title: "",
  link: "https://zoom.us/meeting/register/-EeXRY1GQFmxc9eHG73nnQ",
  meetingId: "-EeXRY1GQFmxc9eHG73nnQ",
  time: "Feb 16, 2025 04:00 PM India",
  meetingCode: "",
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
