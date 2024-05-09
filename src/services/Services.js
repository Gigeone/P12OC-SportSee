import userService from "./Api";
import {UserMainModel,UserActivityModel, UserPerformanceModel, UserSessionModel} from "./ModelFormatData";

export async function userMainData(id) {
    const data = await userService.getUserData(id)
    const userData = new UserMainModel(data)
    return userData
  }
  
  /* Create the table of object which contains all the information
    about the activity of the user's week (calories, kilograms and days) */
  export async function userActivityData(id) {
    const data = await userService.getUserActivity(id)
    const userActivityData = new UserActivityModel(data)
    return userActivityData
  }
  
  /* Create the table of object which contains all the information
    about the session times (minutes) per day of the user */
  export async function userSessionData(id) {
    const data = await userService.getUserAverageSessions(id)
    const userSessionData = new UserSessionModel(data)
    return userSessionData
  }
  
  /* Create the table of object which contains all the information
    about the user performance */
  export async function userPerformanceData(id) {
    const data = await userService.getUserPerformance(id)
    const userPerformanceData = new UserPerformanceModel(data)
    return userPerformanceData
  }