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

  return (
    <div className="flex-row space-y-[41px] pt-[68px]">
      <h1 className="text-5xl font-medium text-black">
        Bonjour{" "}
        <span className="text-red-500">
          {userData?.data?.userInfos?.firstName}
        </span>
      </h1>
      <h2 className="pb-[77px] text-[18px] font-normal">
        Félicitations ! Vous avez explosé vos objectifs hier
      </h2>
    </div>
  );
};

export default MainPage;
