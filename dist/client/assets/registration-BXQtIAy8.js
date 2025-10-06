import { m, Q as useLocation, r as reactExports, j as jsxRuntimeExports } from "./main-CQZRSQfQ.js";
const PMZoomDetails = {
  title: "Idea to Product Live (Bootcamp) ",
  link: "https://zoom.us/meeting/register/8ZFQPIulS9KJH3xIxR9uuA",
  meetingId: "8ZFQPIulS9KJH3xIxR9uuA",
  time: "Sep 07, 2025 12:30 PM India",
  meetingCode: "99321184046"
};
const DAZoomDetails = {
  title: "Upgrade Your Data Analysis Techniques with AI",
  link: "https://zoom.us/meeting/register/9wz8unT2Q8iq9NX_4-Nr7Q",
  meetingId: "9wz8unT2Q8iq9NX_4-Nr7Q",
  time: "23th May, 2025 08:00 PM India",
  meetingCode: "95277125074"
};
const DASecondZoomDetails = {
  title: "Automating SQL queries for Data Analysis",
  link: "https://zoom.us/meeting/register/vFGlGA7jSH-6Razbad2szw",
  meetingId: "vFGlGA7jSH-6Razbad2szw",
  time: "Sep 6, 2025 8:30 PM India",
  meetingCode: "95353095584"
};
const GENAIZoomDetails = {
  title: "Social Media Lead Gen Magnet using make.com",
  link: "https://zoom.us/meeting/register/_UMsYvzPRayKLzneFMoawQ",
  meetingId: "_UMsYvzPRayKLzneFMoawQ",
  time: "29 Jun, 2025 11:00 AM India",
  meetingCode: "91800954050"
};
const GENAIBZoomDetails = {
  title: "Generative AI for Marketing ",
  link: "https://zoom.us/meeting/register/bvfutHmQQKWX_STHghYjJw",
  meetingId: "bvfutHmQQKWX_STHghYjJw",
  time: "11th Oct, 2025 07:00 PM India",
  meetingCode: "93361635932"
};
const GENAICZoomDetails = {
  title: "AI Agent building Bootcamp (2 HR)",
  link: "https://zoom.us/meeting/register/FnvYydkmTrOc1dowwPAE8A",
  meetingId: "FnvYydkmTrOc1dowwPAE8A",
  time: "10 Sep, 2025 09:00 PM India",
  meetingCode: "98712946803"
};
const DMZoomDetails = {
  title: "Learn to Automate your Lead Generation & Enrichment",
  link: "https://zoom.us/meeting/register/KVSQCqQxRl-OUCNUlS_NNw",
  meetingId: "KVSQCqQxRl-OUCNUlS_NNw",
  time: "July 24, 2025 08:30 PM India",
  meetingCode: "96633694839"
};
const WorkshopContext = reactExports.createContext(void 0);
const WorkshopProvider = ({ children }) => {
  const [workshopType, setWorkshopType] = m.useState("DAWorkshop");
  const location = useLocation();
  reactExports.useEffect(() => {
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
  const zoomMeetingDetails = workshopType === "PMWorkshop" ? PMZoomDetails : workshopType === "GENAIWorkshop" ? GENAIZoomDetails : workshopType === "GENAIBWorkshop" ? GENAIBZoomDetails : workshopType === "GENAICWorkshop" ? GENAICZoomDetails : workshopType === "DMWorkshop" ? DMZoomDetails : workshopType === "DASecondWorkshop" ? DASecondZoomDetails : DAZoomDetails;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(WorkshopContext.Provider, { value: { workshopType, setWorkshopType, zoomMeetingDetails }, children });
};
const useWorkshop = () => {
  const context = reactExports.useContext(WorkshopContext);
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
