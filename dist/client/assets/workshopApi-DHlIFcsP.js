import { d as api } from "./main-DqI0tNcP.js";
const createWorkshopRegistration = async (data) => {
  try {
    const response = await api.post("/workshop-registrations", data);
    return response.data;
  } catch (error) {
    console.error("Error creating workshop registration:", error);
    throw error;
  }
};
export {
  createWorkshopRegistration as c
};
