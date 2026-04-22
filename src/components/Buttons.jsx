import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Buttons.css";

const Buttons = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonHeartClick = useCallback(() => {
    navigate("pages/Heart/Heart");
  }, [navigate]);

  const onButtonSmileClick = useCallback(() => {
    navigate("/pages/Smile/Smile");
  }, [navigate]);

  const onButtonClockClick = useCallback(() => {
    navigate("/pages/Clock/Clock");
  }, [navigate]);

  const onButtonGiftClick = useCallback(() => {
    navigate("/pages/Gift/Gift");
  }, [navigate]);

  return (
    <div className={`buttons-container ${className}`}>
      <div className="button" onClick={onButtonHeartClick}>
        <div className="button-shapes">
          <div className="icon">
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
      </div>
      <div className="button" onClick={onButtonSmileClick}>
        <div className="button-shapes">
          <div className="icon">
            <i className="fa-solid fa-face-smile"></i>
          </div>
        </div>
      </div>
      <div className="button" onClick={onButtonClockClick}>
        <div className="button-shapes">
          <div className="icon">
            <i className="fa-solid fa-clock"></i>
          </div>
        </div>
      </div>
      <div className="button" onClick={onButtonGiftClick}>
        <div className="button-shapes">
          <div className="icon">
            <i className="fa-solid fa-gift"></i>
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
