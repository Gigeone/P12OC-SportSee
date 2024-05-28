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

  return (
    <section className="radialchart">
      <h3>Score</h3>
      <div className="radialchart-info">
        <span>{newFormat}</span>
        <h3 className="radialchart-info__text"> de votre objectif</h3>
      </div>
      <ResponsiveContainer width="100%" minWidth={185} height={200}>
        <RadialBarChart
          innerRadius="100%"
          outerRadius={100}
          barSize={10}
          data={data}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey={"value"}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            cornerRadius={10}
            minAngle={15}
            fill="red"
            background
            clockWise={true}
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
