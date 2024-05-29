import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./DataLineChart.scss";
import PropTypes from "prop-types";

/**
 * Renders a line chart component with custom tooltip.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.lineValue - The data for the line chart.
 * @return {JSX.Element} The line chart component.
 */
const DataLineChart = ({ lineValue }) => {
  const data = lineValue;

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="tooltip">
          <p>{payload[0].value} min</p>
        </div>
      );
    }
  };

  return (
    <section className="linechart">
      <div className="legend-linechart">
        <h3>Durée moyenne des sessions</h3>
      </div>
      <ResponsiveContainer width="100%" minWidth={185} height={200}>
        <LineChart data={data}>
          <defs>
            {/* Définition du dégradé linéaire pour remplir la ligne */}
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.40)" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <Tooltip content={CustomTooltip} />
          <XAxis
            stroke="rgba(255, 255, 255, 0.5)" // Couleur de l'axe
            dataKey="day" // Clé des données pour les étiquettes de l'axe X
            fontSize="12px" // Taille de la police des étiquettes
          />
          <Line
            type="monotone" //Type de ligne (monotone pour une courbe lisse)
            dataKey="sessionLength" // Clé des données pour les valeurs de la ligne
            strokeWidth={2} // Largeur du trait de la ligne
            fill="url(#colorUv)" // Remplissage avec le dégradé défini
            fillOpacity={1} // Opacité de remplissage (1 signifie opaque)
            activeDot={{ r: 3 }} // Taille des points actifs (au survol)
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default DataLineChart;

DataLineChart.propTypes = {
  lineValue: PropTypes.array.isRequired,
  data: PropTypes.shape({
    sessionLength: PropTypes.string,
    day: PropTypes.number.isRequired,
  }),
};
