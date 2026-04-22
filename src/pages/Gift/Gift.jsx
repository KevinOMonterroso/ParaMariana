import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Gift.css";

const Gift = () => {
  const navigate = useNavigate();

  const onArrowLeftIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="gift">
      <section className="tulips" />
      <div className="content__container">
        <div className="board__gift">
          <div className="text__gift">
            ¡Te quiero mucho mi princesa hermosa!
          </div>
        </div>
        <div className="arrow__container">
          <i
            className="fa-solid fa-arrow-left"
            onClick={onArrowLeftIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Gift;
