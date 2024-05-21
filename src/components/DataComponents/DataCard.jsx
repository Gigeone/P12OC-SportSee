import Icon from "../Icon";
import "./DataCard.scss";
import PropTypes from "prop-types";

/**
 * Renders a data card component with the provided data value, title, icon value, and unit.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.dataValue - The value to be displayed in the data card.
 * @param {string} props.dataTitle - The title of the data card.
 * @param {string} props.iconValue - The value of the icon to be displayed in the data card.
 * @param {string} props.unit - The unit of the data value.
 * @return {JSX.Element} The data card component.
 */
const DataCard = ({ dataValue, dataTitle, iconValue, unit }) => {
  /* Formats a number with commas when that number is greater than 4 digits */
  const separator = (dataValue) => {
    let str = dataValue.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };

  return (
    <div className="user-data">
      <div className={dataTitle}>
        <Icon iconValue={iconValue}></Icon>
      </div>
      <div className="data-infos">
        <h2>
          {separator(dataValue)}
          {unit}
        </h2>
        <span>{dataTitle}</span>
      </div>
    </div>
  );
};

export default DataCard;

DataCard.propTypes = {
  dataValue: PropTypes.number.isRequired,
  dataTitle: PropTypes.string.isRequired,
  iconValue: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};
