import { useEffect, useState } from "react";
import React from "react";
import userService from "../services/Api.js";
import DailyActivity from "./DataComponents/DailyActivity.jsx";
import { useParams } from "react-router-dom";

const Content = () => {
  const { id } = useParams();
  console.log("userId", id);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await userService.getUserData(id);
        setUserData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
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
      <div>
        <DailyActivity />
      </div>
    </div>
  );
};

export default Content;
