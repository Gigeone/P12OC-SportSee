import React, { useContext, useEffect } from "react";
import ApiUserService from "./ApiUserService.js";
import MockUserService from "./MockUserService.js";
import {
  UserMainModel,
  UserActivityModel,
  UserPerformanceModel,
  UserSessionModel,
} from "./ModelFormatData.js";

export async function userMainData(id,source) {
  console.log(source);
  const data = await source.getUserData(id);
  console.log("data", data);
  const userData = new UserMainModel(data);
  console.log("userData", userData);
  return userData;
}

/* Create the table of object which contains all the information
    about the activity of the user's week (calories, kilograms and days) */
export async function userActivityData(id,source) {
  const data = await source.getUserActivity(id);
  console.log("data", data);
  const userActivityData = new UserActivityModel(data);
  return userActivityData;
}

/* Create the table of object which contains all the information
    about the session times (minutes) per day of the user */
export async function userSessionData(id,source) {
  const data = await source.getUserAverageSessions(id);
  const userSessionData = new UserSessionModel(data);
  return userSessionData;
}

/* Create the table of object which contains all the information
    about the user performance */
export async function userPerformanceData(id,source) {
  console.log(source);
  const data = await source.getUserPerformance(id);
  const userPerformanceData = new UserPerformanceModel(data);
  return userPerformanceData;
}
