import userService from "../../services/Api";
import React, { useState, useEffect } from "react";
// import { UserContext } from "@/app/providers/UseContext";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { formatActivityData } from "../../services/FormatData";

export default function DailyActivity() {
  const { userId } = 12;
  const [activityData, setActivityData] = useState(null);

  /**
   * Fetches the user's activity data using the `getUserActivity` function and stores it in the state.
   * Handles any errors during the fetch process.
   */
  useEffect(() => {
    const fetchUserActivity = async () => {
      try {
        const data = await userService.getUserActivity(12);
        console.log("data", data);
        setActivityData(data);
      } catch (error) {
        console.error("Error fetching user activity:", error);
      }
    };

    fetchUserActivity();
  }, [userId]);

  // Extrait les sessions de chaque objet dans activityData
  const formattedData =
    activityData?.data.sessions.map((session) => formatActivityData(session)) ||
    [];

  return (
    <div>
      <h2>Activité quotidienne</h2>
      {formattedData ? (
        <BarChart width={600} height={300} data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          {/* <Tooltip />
          <Legend /> */}
          <Bar dataKey="Poids" fill="#8884d8" name="Poids" />
          <Bar dataKey="Calories" fill="#82ca9d" name="Calories brûlées" />
        </BarChart>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
