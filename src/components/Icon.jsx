import "./Icon.scss";
import PropTypes from "prop-types";

/**
 * Renders an icon component with the provided icon value.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.iconValue - The value of the icon to be displayed.
 * @return {JSX.Element} The icon component.
 */
const Icon = ({ iconValue }) => {
  return (
    <div className="bloc-icon">
      <img src={iconValue} alt="icon app" className="name-icon" />
    </div>
  );
};

export default Icon;

Icon.propTypes = {
  iconValue: PropTypes.string,
};
