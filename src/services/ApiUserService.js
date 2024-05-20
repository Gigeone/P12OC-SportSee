import axios from "axios";

const Axios = axios.create({baseURL: "http://localhost:3000"});

const ApiUserService = {
  getUserData: async (userId) => {
    console.log("apied");
    try {
      const response = await Axios.get(`/user/${userId}`);
      const userActivityData = response.data
      console.log(userActivityData)
    return userActivityData.data
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  },

  getUserActivity: async (userId) => {
    console.log("apied");
    try {
      const response = await Axios.get(`/user/${userId}/activity`);
      console.log("response.data", response.data);
      const userActivityData = response.data
    console.log(userActivityData)
    return userActivityData.data
    } catch (error) {
      console.error("Error fetching user activity:", error);
      throw error;
    }
  },

  getUserPerformance: async (userId) => {
    try {
      const response = await Axios.get(
        `/user/${userId}/performance`
      );
      const userPerformanceData = response.data
    return userPerformanceData.data
    } catch (error) {
      console.error("Error fetching user activity:", error);
      throw error;
    }
  },

  getUserAverageSessions: async (userId) => {
    try {
      const response = await Axios.get(
        `/user/${userId}/average-sessions`
      );
      const userSessionData = response.data
      return userSessionData.data
    } catch (error) {
      console.error("Error fetching user activity:", error);
      throw error;
    }
  },
  // Ajoutez d'autres fonctions de service pour les endpoints supplémentaires
};

export default ApiUserService;
