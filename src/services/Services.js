import {
  UserMainModel,
  UserActivityModel,
  UserPerformanceModel,
  UserSessionModel,
} from "./ModelFormatData.js";

/**
 * Fetches user main data from the specified source and constructs a UserMainModel object.
 *
 * @param {string} id - The ID of the user.
 * @param {Object} source - The source object that contains the getUserData method.
 * @return {Promise<UserMainModel>} A promise that resolves to a UserMainModel object.
 */
export async function userMainData(id,source) {
  console.log(source);
  const data = await source.getUserData(id);
  console.log("data", data);
  const userData = new UserMainModel(data);
  console.log("userData", userData);
  return userData;
}


/**
 * Fetches user activity data from the specified source and constructs a UserActivityModel object.
 *
 * @param {string} id - The ID of the user.
 * @param {Object} source - The source object that contains the getUserActivity method.
 * @return {Promise<UserActivityModel>} A promise that resolves to a UserActivityModel object.
 */
export async function userActivityData(id,source) {
  const data = await source.getUserActivity(id);
  console.log("data", data);
  const userActivityData = new UserActivityModel(data);
  return userActivityData;
}


/**
 * Fetches user session data from the specified source and constructs a UserSessionModel object.
 *
 * @param {string} id - The ID of the user.
 * @param {Object} source - The source object that contains the getUserAverageSessions method.
 * @return {Promise<UserSessionModel>} A promise that resolves to a UserSessionModel object.
 */
export async function userSessionData(id,source) {
  const data = await source.getUserAverageSessions(id);
  const userSessionData = new UserSessionModel(data);
  return userSessionData;
}


/**
 * Fetches user performance data from the specified source and constructs a UserPerformanceModel object.
 *
 * @param {string} id - The ID of the user.
 * @param {Object} source - The source object that contains the getUserPerformance method.
 * @return {Promise<UserPerformanceModel>} A promise that resolves to a UserPerformanceModel object.
 */
export async function userPerformanceData(id,source) {
  console.log(source);
  const data = await source.getUserPerformance(id);
  const userPerformanceData = new UserPerformanceModel(data);
  return userPerformanceData;
}
