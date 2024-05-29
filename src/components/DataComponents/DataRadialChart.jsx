import {
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";
import "./DataRadialChart.scss";

/**
 * Renders a radial chart component displaying the provided radial data value.
 *
 * @param {Object} props - The props object containing the radial data value.
 * @param {number} props.radialDataValue - The value to be displayed in the radial chart.
 * @return {JSX.Element} The JSX element representing the radial chart component.
 */
const DataRadialChart = ({ radialDataValue }) => {
  let options = {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };
  let numberFormat = new Intl.NumberFormat("fr-FR", options);
  let newFormat = numberFormat.format(radialDataValue);
  const data = [{ value: radialDataValue * 100 }];
  console.log(data);

  return (
    <section className="radialchart">
      <h3>Score</h3>
      <div className="radialchart-info">
        <span>{newFormat}</span>
        <p className="radialchart-info__text"> de votre objectif</p>
      </div>
      <ResponsiveContainer width="100%" minWidth={185} height={200}>
        <RadialBarChart
          innerRadius={100} // Rayon intérieur du graphique
          outerRadius={85} // Rayon extérieur du graphique
          barSize={10} // Épaisseur des barres
          data={data} // Données à afficher
          startAngle={90} // Angle de départ (90 degrés correspond à 12 heures)
          endAngle={450} // Angle de fin (450 degrés couvre un cercle complet dans le sens antihoraire)
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]} // Domaine de l'axe (de 0 à 100)
            dataKey={"value"} // Clé des données utilisée pour cet axe
            angleAxisId={0} // Identifiant de l'axe angulaire
            tick={false} // Masquer les ticks (graduations) sur l'axe
          />
          <RadialBar
            cornerRadius={10} // Rayon des coins de la barre (coins arrondis)
            minAngle={15} // Angle minimal pour chaque segment de barre
            fill="red" // Couleur de la barre
            background // Afficher un arrière-plan pour les barres
            clockWise={false} // Dessiner dans le sens antihoraire
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default DataRadialChart;

DataRadialChart.propTypes = {
  radialDataValue: PropTypes.number,
};
