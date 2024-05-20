import { useEffect, useState, useContext } from "react";
import React from "react";
import DailyActivity from "./DataComponents/DailyActivity.jsx";
import DataRadarChart from "./DataComponents/DataRadarChart.jsx";
import DataRadialChart from "./DataComponents/DataRadialChart.jsx";
import DataLineChart from "./DataComponents/DataLineChart.jsx";
import DataCard from "./DataComponents/DataCard.jsx";
import { useParams } from "react-router-dom";
import {
  userMainData,
  userActivityData,
  userSessionData,
  userPerformanceData,
} from "../services/Services.js";
import caloriesIcon from "../assets/calories-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import "./Content.scss";
import { SourceContext } from "../services/context.jsx";

const Content = () => {
  const { id } = useParams();
  console.log("userId", id);
  const [datas, setDatas] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { source } = useContext(SourceContext);
  console.log("source", source);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDatas = await userMainData(id, source);
        const userActivities = await userActivityData(id, source);
        const userSessions = await userSessionData(id, source);
        const userPerformances = await userPerformanceData(id, source);

        setDatas({ userDatas, userActivities, userSessions, userPerformances });
        console.log("datas", datas);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log("datas", datas);
  }, [id]);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <main className="dashboard">
          <div className="dashboard__profil">
            <div className="user">
              <h1 className="title-content">
                Bonjour{" "}
                <span className="first-name">{datas.userDatas.firstName}</span>
              </h1>
              <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
            </div>

            <div className="dashboard__graphics">
              <div className="dashboard__recharts">
                <DailyActivity barValue={datas.userActivities.sessions} />
                <div className="dashboard__recharts__blocs">
                  <DataLineChart lineValue={datas.userSessions.sessions} />
                  <DataRadarChart
                    radarValue={datas.userPerformances.kind}
                    radarDataValue={datas.userPerformances.data}
                  />
                  <DataRadialChart
                    radialDataValue={datas.userDatas.todayScore}
                  />
                </div>
              </div>
              <section className="section-userdata">
                <DataCard
                  iconValue={caloriesIcon}
                  dataValue={datas.userDatas.keyData.calorieCount}
                  dataTitle={"Calories"}
                  unit={"kCal"}
                />
                <DataCard
                  iconValue={proteinIcon}
                  dataValue={datas.userDatas.keyData.proteinCount}
                  dataTitle={"Proteines"}
                  unit={"g"}
                />
                <DataCard
                  iconValue={carbsIcon}
                  dataValue={datas.userDatas.keyData.carbohydrateCount}
                  dataTitle={"Glucides"}
                  unit={"g"}
                />
                <DataCard
                  iconValue={fatIcon}
                  dataValue={datas.userDatas.keyData.lipidCount}
                  dataTitle={"Lipides"}
                  unit={"g"}
                />
              </section>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Content;
