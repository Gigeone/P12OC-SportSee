import axios from "axios";

const BASE_URL = "http://localhost:3000"; // URL de backend

const userService = {
  getUserData: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/${userId}`);
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  },

  getUserActivity: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/${userId}/activity`);
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user activity:", error);
      throw error;
    }
  },

  getUserPerformance: async (userId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/user/${userId}/performance`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user activity:", error);
      throw error;
    }
  },

  getUserAverageSessions: async (userId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/user/${userId}/average-sessions`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user activity:", error);
      throw error;
    }
  },

  // Ajoutez d'autres fonctions de service pour les endpoints supplémentaires
};

export default userService;
