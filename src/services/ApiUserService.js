import axios from "axios";

const Axios = axios.create({baseURL: "http://localhost:3000"});

const ApiUserService = {
/**
 * Retrieves user data from the server based on the provided user ID.
 *
 * @param {string} userId - The ID of the user.
 * @return {Promise<Object>} A promise that resolves to the user data.
 * @throws {Error} If there is an error fetching the user data.
 */
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

  /**
   * Retrieves user activity data from the server based on the provided user ID.
   *
   * @param {string} userId - The ID of the user.
   * @return {Promise<Object>} A promise that resolves to the user activity data.
   * @throws {Error} If there is an error fetching the user activity data.
   */
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

/**
 * Retrieves user performance data from the server based on the provided user ID.
 *
 * @param {string} userId - The ID of the user.
 * @return {Promise<Object>} A promise that resolves to the user performance data.
 * @throws {Error} If there is an error fetching the user performance data.
 */
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

  /**
   * Retrieves the average sessions for a user from the server.
   *
   * @param {string} userId - The ID of the user.
   * @return {Promise<Object>} A promise that resolves to the user's average sessions data.
   * @throws {Error} If there is an error fetching the user's average sessions data.
   */
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
};

export default ApiUserService;
