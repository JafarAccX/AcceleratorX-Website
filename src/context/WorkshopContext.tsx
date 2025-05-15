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
  title: "",
  link: "https://zoom.us/meeting/register/vcxHdRWkT6qgEbk5prfW-w",
  meetingId: "vcxHdRWkT6qgEbk5prfW",
  time: "Feb 20, 2025 07:00 PM India",
  meetingCode: "",
};

const DAZoomDetails: ZoomMeetingDetails = {
  title: "How to Become a Data Analyst with AI in 2025: Tools, Projects & Job Prep",
  link: "https://zoom.us/j/96800960051?pwd=SFgfijR2mxKd7aMUSyaWJL2P72QG7C.1",
  meetingId: "FcjNLNb5Q_WSEBzVW1_1tg",
  time: "18th April, 2025 07:30 PM India",
  meetingCode: "97204349341",
};

const DASecondZoomDetails: ZoomMeetingDetails = {
  title: "Tableau Zero to Master",
  link: "https://zoom.us/meeting/register/HIFV1qVHTWu_SPmJ-R4Ptw",
  meetingId: "HIFV1qVHTWu_SPmJ-R4Ptw",
  time: "MAy 17, 2025 8:00 PM India",
  meetingCode: "99098630020",
};

const GENAIZoomDetails: ZoomMeetingDetails = {
  title: "",
  link: "https://zoom.us/meeting/register/zVnro80ySDm_Qll-H-XvCQ",
  meetingId: "zVnro80ySDm_Qll-H-XvCQ",
  time: "12th March, 2025 07:30 AM India",
  meetingCode: "",
};

const GENAIBZoomDetails: ZoomMeetingDetails = {
  title: "How to Automate your workflows Using n8n",
  link: "https://zoom.us/meeting/register/moivGRTCRVu02E_-CmzaIw",
  meetingId: "moivGRTCRVu02E_-CmzaIw",
  time: "15th May, 2025 08:00 PM India",
  meetingCode: "96045949365",
};

const GENAICZoomDetails: ZoomMeetingDetails = {
  title: "Build YourPersonal Content Creator with AI",
  link: "https://zoom.us/meeting/register/ZWQXvYp2RnOT-5TmGJwzog",
  meetingId: "ZWQXvYp2RnOT-5TmGJwzog",
  time: "21th May, 2025 08:00 PM India",
  meetingCode: "95052255978",
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
