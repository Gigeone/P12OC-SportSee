import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "./DataRadarChart.scss";
import PropTypes from "prop-types";

/**
 * Renders a radar chart component with the provided radar data value.
 *
 * @param {Object} props - The props object containing the radar data value.
 * @param {Object[]} props.radarDataValue - The data for the radar chart.
 * @param {string} props.radarDataValue[].kind - The kind of data.
 * @param {number} props.radarDataValue[].value - The value of the data.
 * @return {JSX.Element} The radar chart component.
 */
const DataRadarChart = ({ radarDataValue }) => {
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
};

export default DataRadarChart;

DataRadarChart.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.number.isRequired,
    kind: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
};
