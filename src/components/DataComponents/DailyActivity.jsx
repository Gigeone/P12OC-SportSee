import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./DailyActivity.scss";
import PropTypes from "prop-types";

/**
 * Renders a daily activity bar chart component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.barValue - The data for the bar chart.
 * @return {JSX.Element} The rendered daily activity bar chart component.
 */
const DailyActivity = ({ barValue }) => {
  const data = barValue;
  console.log(data);

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="tooltip">
          <p>{payload[0].value} kg</p>
          <p>{payload[1].value} kCal</p>
        </div>
      );
    }
  };

  return (
    <section className="barchart">
      <div className="legend-barchart">
        <h3>Activité quotidienne</h3>
        <div className="poids-calories">
          <div className="poids">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                fill="#282D30"
              />
            </svg>
            <span>Poids (kg)</span>
          </div>
          <div className="calories">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                fill="#E60000"
              />
            </svg>
            <span>Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <Tooltip content={CustomTooltip} />
          <CartesianGrid vertical="" stroke="#ccc" strokeDasharray="2 2" />
          <XAxis stroke="#9B9EAC" dataKey="day" />
          <YAxis
            stroke="#9B9EAC"
            tickCount={3} // Nombre de ticks (graduations) sur l'axe Y
            YAxisId="right" // ID de l'axe Y pour le positionner à droite
            orientation="right" // Orientation de l'axe à droite
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={8}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="calories" // Clé des données pour les valeurs de calories
            fill="#FF0101" // Couleur de la barre
            barSize={8} // Taille de la barre
            radius={[5, 5, 0, 0]} // Rayons des coins (arrondi en haut)
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default DailyActivity;

DailyActivity.propTypes = {
  barValue: PropTypes.array.isRequired,
  data: PropTypes.shape({
    kilogram: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }),
};
