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

  return (
    <section className="radarchart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart innerRadius="0" outerRadius="69%" data={data}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "white", fontSize: 12 }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            name="kind" // Nom de la série de données
            dataKey="value" // Clé des données pour les valeurs
            stroke="#FF0101B2" // Couleur du trait du radar
            fill="rgba(230, 0, 0, 0.7)" // Couleur de remplissage du radar avec transparence
            fillOpacity={1} // Opacité de remplissage (1 signifie opaque)
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default DataRadarChart;

DataRadarChart.propTypes = {
  radarDataValue: PropTypes.array.isRequired,
  data: PropTypes.shape({
    value: PropTypes.number.isRequired,
    kind: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
};
