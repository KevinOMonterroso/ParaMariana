import PropTypes from "prop-types";
import "./Buttons.css";

const Buttons = ({ className = "", onClick }) => {
  return (
    <div className="container">
      <div className="button" onClick={onClick}>
        <div className="button-shapes">
          <div className="icon">
            <i className={`${className}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

Buttons.propTypes = {
  className: PropTypes.string,
};

export default Buttons;
