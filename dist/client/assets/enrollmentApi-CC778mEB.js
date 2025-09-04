import { c as api } from "./main-D1W_Gn8a.js";
const createEnrollment = async (data) => {
  try {
    const response = await api.post("/enrollments-new", data);
    return response.data;
  } catch (error) {
    console.error("Error creating enrollment:", error);
    throw error;
  }
};
export {
  createEnrollment as c
};
