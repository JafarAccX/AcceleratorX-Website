import { d as api } from "./main-Bxo1x8yy.js";
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
