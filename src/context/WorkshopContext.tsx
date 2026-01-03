import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

type WorkshopType =
  | "DAWorkshop"
  | "DASecondWorkshop"
  | "PMWorkshop"
  | "PMBWorkshop"
  | "GENAIWorkshop"
  | "GENAIBWorkshop"
  | "GENAICWorkshop"
  | "GENAIDWorkshop"
  | "GENAIEWorkshop"
  | "AIDMWorkshop"
  | "DMWorkshop";

interface ZoomMeetingDetails {
  title: string;
  link: string;
  meetingId: string;
  time: string;
  meetingCode: string;
  whatsappLink: string;
}

interface WorkshopContextType {
  workshopType: WorkshopType;
  setWorkshopType: (type: WorkshopType) => void;
  zoomMeetingDetails: ZoomMeetingDetails;
}

const PMZoomDetails: ZoomMeetingDetails = {
  title: "Masterclass on Google Antigravity, Claude Coding and Cursor.",
  link: "https://zoom.us/meeting/register/4rBm7lGrSH-hWZh481XWSQ",
  meetingId: "96828221429",
  time: "06th Dec, 2025 08:00 AM India",
  meetingCode: "96828221429",
  whatsappLink: "https://chat.whatsapp.com/JrurX5lYVTAEShCyIwWkIG",
};

const PMBZoomDetails: ZoomMeetingDetails = {
  title: "Master the art of coding, testing, deployment by single tool",
  link: "https://zoom.us/meeting/register/IcyRTbQSQzy3xYRY-qyPbg",
  meetingId: "98301275850",
  time: "07th Dec, 2025 11:00 AM India",
  meetingCode: "98301275850",
  whatsappLink: "https://chat.whatsapp.com/IaFM3xfYfmRBO0jwiaDIHN",
};

const DAZoomDetails: ZoomMeetingDetails = {
  title: "Upgrade Your Data Analysis Techniques with AI",
  link: "https://zoom.us/meeting/register/9wz8unT2Q8iq9NX_4-Nr7Q",
  meetingId: "9wz8unT2Q8iq9NX_4-Nr7Q",
  time: "23th May, 2025 08:00 PM India",
  meetingCode: "95277125074",
  whatsappLink: "https://chat.whatsapp.com/F37nunVbnd3BWRjcA4Bt9Q",
};

const DASecondZoomDetails: ZoomMeetingDetails = {
  title:
    "Automated Machine Learning (AutoML) For Data Analysis (Google AutoML, AutoKeras, H2O.ai, Auto-Sklearn for model building without deep coding. for mentor ref.)",
  link: "https://zoom.us/meeting/register/ZdcXe0UKRmCLcKcnMwuCGw",
  meetingId: "ZdcXe0UKRmCLcKcnMwuCGw",
  time: "13th Dec, 2025 07:00 PM India",
  meetingCode: "99102523379",
  whatsappLink: "https://chat.whatsapp.com/F5vzopFr4l2KosYX7ZBCij",
};

const GENAIZoomDetails: ZoomMeetingDetails = {
  title: "Social Media Lead Gen Magnet using make.com",
  link: "https://zoom.us/meeting/register/_UMsYvzPRayKLzneFMoawQ",
  meetingId: "_UMsYvzPRayKLzneFMoawQ",
  time: "29 Jun, 2025 11:00 AM India",
  meetingCode: "91800954050",
  whatsappLink: "https://chat.whatsapp.com/LNzQFat64Fe7HdfBeHFZ7L",
};

const GENAIBZoomDetails: ZoomMeetingDetails = {
  title: "Marketing Automation",
  link: "https://zoom.us/meeting/register/ebn6odaVTHSWMNOkvpNayw",
  meetingId: "ebn6odaVTHSWMNOkvpNayw",
  time: "09th Nov, 2025 11:00 AM India",
  meetingCode: "92965681534",
  whatsappLink: "https://chat.whatsapp.com/LNzQFat64Fe7HdfBeHFZ7L",
};

const GENAICZoomDetails: ZoomMeetingDetails = {
  title: "Learn to Build AI Agents without Code",
  link: "https://zoom.us/meeting/register/uqJPTbkGRMugSMk9c95OgA",
  meetingId: "uqJPTbkGRMugSMk9c95OgA",
  time: "09 Jan 2026, 8:00 PM",
  meetingCode: "93133290017",
  whatsappLink: "https://chat.whatsapp.com/JFmq5L4cKyVJpKRhmyCNl3",
};

const GENAIDZoomDetails: ZoomMeetingDetails = {
  title: "LLM Models & Fine tuning techniques",
  link: "https://zoom.us/meeting/register/54eSRN5zS3e1zJLCgS-cKA",
  meetingId: "54eSRN5zS3e1zJLCgS-cKA",
  time: "11th Nov, 2025 07:00 PM India",
  meetingCode: "97914767458",
  whatsappLink: "https://chat.whatsapp.com/LNzQFat64Fe7HdfBeHFZ7L",
};

const GENAIEZoomDetails: ZoomMeetingDetails = {
  title: "Building Hybrid RAG Agent",
  link: "https://zoom.us/meeting/register/_FDr05gPRkmsB1Sa6L7lNQ",
  meetingId: "_FDr05gPRkmsB1Sa6L7lNQ",
  time: "10 Dec, 2025 07:00 PM India",
  meetingCode: "96507880613",
  whatsappLink: "https://chat.whatsapp.com/Ke8ixVJH8qU2EHILrzX9zp",
};

const AIDMZoomDetails: ZoomMeetingDetails = {
  title: "Marketing Automation Crash Course",
  link: "https://zoom.us/meeting/register/x54MqpmpSwK6ki3PO74V4A",
  meetingId: "x54MqpmpSwK6ki3PO74V4A",
  time: "12th Dec, 2025 08:00 PM India",
  meetingCode: "96361463677",
  whatsappLink: "https://chat.whatsapp.com/IRY3cWYHajY8wbQc2LX11m",
};

const DMZoomDetails: ZoomMeetingDetails = {
  title: "Learn to Automate your Lead Generation & Enrichment",
  link: "https://zoom.us/meeting/register/KVSQCqQxRl-OUCNUlS_NNw",
  meetingId: "KVSQCqQxRl-OUCNUlS_NNw",
  time: "July 24, 2025 08:30 PM India",
  meetingCode: "96633694839",
  whatsappLink: "https://chat.whatsapp.com/LNzQFat64Fe7HdfBeHFZ7L",
};

const WorkshopContext = createContext<WorkshopContextType | undefined>(undefined);

export const WorkshopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [workshopType, setWorkshopType] = React.useState<WorkshopType>("DAWorkshop");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/pm-masterclass-bxwxy")) {
      setWorkshopType("PMBWorkshop");
    } else if (location.pathname.includes("/pm-masterclass")) {
      setWorkshopType("PMWorkshop");
    } else if (location.pathname.includes("/da-masterclass-bxwxy")) {
      setWorkshopType("DASecondWorkshop");
    } else if (location.pathname.includes("/da-masterclass")) {
      setWorkshopType("DAWorkshop");
    } else if (location.pathname.includes("/gen-ai-masterclass-bxwcy")) {
      setWorkshopType("GENAIBWorkshop");
    } else if (location.pathname.includes("/gen-ai-masterclass-thidtx")) {
      setWorkshopType("GENAICWorkshop");
    } else if (location.pathname.includes("/gen-ai-masterclass-four")) {
      setWorkshopType("GENAIDWorkshop");
    } else if (location.pathname.includes("/gen-ai-masterclass-fioth")) {
      setWorkshopType("GENAIEWorkshop");
    } else if (location.pathname.includes("/ai-dm-fitm")) {
      setWorkshopType("AIDMWorkshop");
    } else if (location.pathname.includes("/gen-ai-masterclass")) {
      setWorkshopType("GENAIWorkshop");
    } else if (location.pathname.includes("/dm-masterclass")) {
      setWorkshopType("DMWorkshop");
    }
  }, [location.pathname]);

  const zoomMeetingDetails =
    workshopType === "PMWorkshop"
      ? PMZoomDetails
      : workshopType === "PMBWorkshop"
        ? PMBZoomDetails
        : workshopType === "GENAIWorkshop"
          ? GENAIZoomDetails
          : workshopType === "GENAIBWorkshop"
            ? GENAIBZoomDetails
            : workshopType === "GENAICWorkshop"
              ? GENAICZoomDetails
              : workshopType === "GENAIDWorkshop"
                ? GENAIDZoomDetails
                : workshopType === "GENAIEWorkshop"
                  ? GENAIEZoomDetails
                  : workshopType === "AIDMWorkshop"
                    ? AIDMZoomDetails
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
