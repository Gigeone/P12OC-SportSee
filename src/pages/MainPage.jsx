import { useEffect, useState } from "react";
import React from "react";
import userService from "../services/Api";

const MainPage = () => {
  const { userId } = 12;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await userService.getUserData(12);
        setUserData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);

  return <div> {userData?.data?.userInfos?.firstName}</div>;
};

export default MainPage;
