import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../services/mocks/mocksData.js';

const MockUserService = {
  
    getUserData: async (userId) => {
      console.log("mocked");
        const userData = USER_MAIN_DATA.find(
            (res) => res.id === parseInt(userId)
          )
          return userData
        },
  
    getUserActivity: async (userId) => {
        const userActivity = USER_ACTIVITY.find(
            (res) => res.userId === parseInt(userId)
          )
          return userActivity
        },
  
    getUserPerformance: async (userId) => {
        const userPerformance = USER_PERFORMANCE.find(
            (res) => res.userId === parseInt(userId)
          )
          return userPerformance
    },
  
    getUserAverageSessions: async (userId) => {
        const userAverage = USER_AVERAGE_SESSIONS.find(
            (res) => res.userId === parseInt(userId)
          )
          return userAverage
    },
  };
  
  export default MockUserService;
