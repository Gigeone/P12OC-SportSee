import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "./DataRadarChart.scss";

export default function DataRadarChart({ radarDataValue }) {
  const data = radarDataValue;
  // function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
  //   return (
  //     <Text
  //       {...rest}
  //       verticalAnchor="middle"
  //       y={y + (y - cy) / 2}
  //       x={x + (x - cx) / 2}
  //     >
  //       {payload.value}
  //     </Text>
  //   );
  // }

  return (
    <section className="radarchart">
      <ResponsiveContainer width="100%" minWidth={185} height={220}>
        <RadarChart outerRadius="60%" data={data}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "white", fontSize: 15 }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            name="kind"
            dataKey="value"
            stroke="#FFFFFF"
            fill="rgba(230, 0, 0, 0.7)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}
