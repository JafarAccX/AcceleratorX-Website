import { a as api } from "../entry-server.js";
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
