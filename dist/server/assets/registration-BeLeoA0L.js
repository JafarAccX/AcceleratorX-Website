import { jsx } from "react/jsx-runtime";
import React__default, { useEffect, createContext, useContext } from "react";
import { useLocation } from "react-router";
const PMZoomDetails = {
  title: "AI Product Management Mastery Class",
  link: "https://zoom.us/meeting/register/PmLITMVBQ6a9E9uZ5CySBw",
  meetingId: "97348431386",
  time: "25/15/2025 7:00 PM India",
  meetingCode: "97348431386"
};
const DAZoomDetails = {
  title: "Upgrade Your Data Analysis Techniques with AI",
  link: "https://zoom.us/meeting/register/9wz8unT2Q8iq9NX_4-Nr7Q",
  meetingId: "9wz8unT2Q8iq9NX_4-Nr7Q",
  time: "23th May, 2025 08:00 PM India",
  meetingCode: "95277125074"
};
const DASecondZoomDetails = {
  title: "AI Data Analysis Crash Course",
  link: "https://zoom.us/meeting/register/ZSZw9J88Qmacj-FO7KWh4w",
  meetingId: "b_CgAZvOT0WPuW9DG-10mg",
  time: "11/10/2025 7:00 PM India",
  meetingCode: "99801086032"
};
const GENAIZoomDetails = {
  title: "Social Media Lead Gen Magnet using make.com",
  link: "https://zoom.us/meeting/register/_UMsYvzPRayKLzneFMoawQ",
  meetingId: "_UMsYvzPRayKLzneFMoawQ",
  time: "29 Jun, 2025 11:00 AM India",
  meetingCode: "91800954050"
};
const GENAIBZoomDetails = {
  title: "Marketing Automation",
  link: "https://zoom.us/meeting/register/ebn6odaVTHSWMNOkvpNayw",
  meetingId: "ebn6odaVTHSWMNOkvpNayw",
  time: "09th Nov, 2025 11:00 AM India",
  meetingCode: "92965681534"
};
const GENAICZoomDetails = {
  title: "Start your automation with Flowise",
  link: "https://zoom.us/meeting/register/v6X24VyqSt26UvcxfL7J3g",
  meetingId: "v6X24VyqSt26UvcxfL7J3g",
  time: "10th Nov, 2025 07:00 PM India",
  meetingCode: "99613499939"
};
const GENAIDZoomDetails = {
  title: "LLM Models & Fine tuning techniques",
  link: "https://zoom.us/meeting/register/54eSRN5zS3e1zJLCgS-cKA",
  meetingId: "54eSRN5zS3e1zJLCgS-cKA",
  time: "11th Nov, 2025 07:00 PM India",
  meetingCode: "97914767458"
};
const GENAIEZoomDetails = {
  title: "Building first RAG Agent",
  link: "https://zoom.us/meeting/register/mMMETQh6RL6PPUhjRjFC6w",
  meetingId: "mMMETQh6RL6PPUhjRjFC6w",
  time: "14 Nov, 2025 07:00 PM India",
  meetingCode: "97375135396"
};
const AIDMZoomDetails = {
  title: "Conversion rate optimization with AI",
  link: "https://zoom.us/meeting/register/7FhI--9PSHyw9CF27ihVcg",
  meetingId: "7FhI--9PSHyw9CF27ihVcg",
  time: "15 Nov, 2025 11:00 AM India",
  meetingCode: "99909658988"
};
const DMZoomDetails = {
  title: "Learn to Automate your Lead Generation & Enrichment",
  link: "https://zoom.us/meeting/register/KVSQCqQxRl-OUCNUlS_NNw",
  meetingId: "KVSQCqQxRl-OUCNUlS_NNw",
  time: "July 24, 2025 08:30 PM India",
  meetingCode: "96633694839"
};
const WorkshopContext = createContext(void 0);
const WorkshopProvider = ({ children }) => {
  const [workshopType, setWorkshopType] = React__default.useState("DAWorkshop");
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
  const zoomMeetingDetails = workshopType === "PMWorkshop" ? PMZoomDetails : workshopType === "GENAIWorkshop" ? GENAIZoomDetails : workshopType === "GENAIBWorkshop" ? GENAIBZoomDetails : workshopType === "GENAICWorkshop" ? GENAICZoomDetails : workshopType === "GENAIDWorkshop" ? GENAIDZoomDetails : workshopType === "GENAIEWorkshop" ? GENAIEZoomDetails : workshopType === "AIDMWorkshop" ? AIDMZoomDetails : workshopType === "DMWorkshop" ? DMZoomDetails : workshopType === "DASecondWorkshop" ? DASecondZoomDetails : DAZoomDetails;
  return /* @__PURE__ */ jsx(WorkshopContext.Provider, { value: { workshopType, setWorkshopType, zoomMeetingDetails }, children });
};
const useWorkshop = () => {
  const context = useContext(WorkshopContext);
  if (context === void 0) {
    throw new Error("useWorkshop must be used within a WorkshopProvider");
  }
  return context;
};
async function registerForZoomMeeting(fullName, email, phone, zoomMeeting_id) {
  const payload = {
    fullName,
    email,
    phone,
    zoomMeeting_id
  };
  const apiUrl = "https://api.acceleratorx.org/";
  try {
    console.log("Sending registration request to:", `${apiUrl}/zoom`);
    console.log("With payload:", payload);
    const response = await fetch(`${apiUrl}zoom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const responseData = await response.json().catch(async () => {
      const text = await response.text();
      return { error: text };
    });
    if (!response.ok) {
      const errorDetails = responseData.details || responseData;
      const errorMessage = typeof errorDetails === "object" ? JSON.stringify(errorDetails) : errorDetails.toString();
      console.error("Zoom registration failed:", errorDetails);
      throw new Error(errorMessage);
    }
    console.log("Zoom registration successful:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error registering for Zoom meeting:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to register for Zoom meeting";
    throw new Error(errorMessage);
  }
}
export {
  WorkshopProvider as W,
  registerForZoomMeeting as r,
  useWorkshop as u
};
