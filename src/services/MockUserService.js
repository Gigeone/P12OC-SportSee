import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../services/mocks/mocksData.js';

const MockUserService = {
  
    /**
     * Retrieves user data from the mocked USER_MAIN_DATA array based on the provided user ID.
     *
     * @param {string} userId - The ID of the user.
     * @return {Promise<Object>} A promise that resolves to the user data object.
     */
    getUserData: async (userId) => {
      console.log("mocked");
        const userData = USER_MAIN_DATA.find(
            (res) => res.id === parseInt(userId)
          )
          return userData
        },
  
    /**
     * Retrieves user activity data from the mocked USER_ACTIVITY array based on the provided user ID.
     *
     * @param {string} userId - The ID of the user.
     * @return {Promise<Object>} A promise that resolves to the user activity object.
     */
    getUserActivity: async (userId) => {
        const userActivity = USER_ACTIVITY.find(
            (res) => res.userId === parseInt(userId)
          )
          return userActivity
        },
  
    /**
     * Retrieves user performance data from the mocked USER_PERFORMANCE array based on the provided user ID.
     *
     * @param {string} userId - The ID of the user.
     * @return {Promise<Object>} A promise that resolves to the user performance object.
     */
    getUserPerformance: async (userId) => {
        const userPerformance = USER_PERFORMANCE.find(
            (res) => res.userId === parseInt(userId)
          )
          return userPerformance
    },
  
/**
 * Retrieves the average sessions for a user from the mocked USER_AVERAGE_SESSIONS array based on the provided user ID.
 *
 * @param {string} userId - The ID of the user.
 * @return {Promise<Object>} A promise that resolves to the user's average sessions data.
 */
    getUserAverageSessions: async (userId) => {
        const userAverage = USER_AVERAGE_SESSIONS.find(
            (res) => res.userId === parseInt(userId)
          )
          return userAverage
    },
  };
  
  export default MockUserService;
