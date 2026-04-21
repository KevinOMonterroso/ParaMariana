import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../Buttons.css";

const Buttons = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonHeartClick = useCallback(() => {
    navigate("/heart");
  }, [navigate]);

  const onButtonSmileClick = useCallback(() => {
    navigate("/smile");
  }, [navigate]);

  const onButtonClockClick = useCallback(() => {
    navigate("/clock");
  }, [navigate]);

  return (
    <div className={`buttons ${className}`}>
      <div className="buttonheart" onClick={onButtonHeartClick}>
        <div className="button-shapes" />
        <div className="heart2">
          <img className="svg-path-icon" alt="" src="/svg-path.svg" />
          <button className="base-background" />
        </div>
      </div>
      <div className="buttonheart" onClick={onButtonSmileClick}>
        <div className="button-shapes" />
        <img className="smile-icon" loading="lazy" alt="" src="/smile.svg" />
      </div>
      <div className="buttonheart" onClick={onButtonClockClick}>
        <div className="button-shapes" />
        <img className="clock-icon" loading="lazy" alt="" src="/clock.svg" />
      </div>
    </div>
  );
};

Buttons.propTypes = {
  className: PropTypes.string,
};

export default Buttons;
