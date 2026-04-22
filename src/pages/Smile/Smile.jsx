import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Smile.css";

const Smile = () => {
  const navigate = useNavigate();

  const onArrowLeftIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="smile">
      <div className="content__container">
        <div className="board__smile">
          <div className="text__smile">
            La carita feliz representa mi cambio de humor al conocerte; todo mi
            círculo social te puede confirmar que desde que empecé a hablar
            contigo he tenido la misma carita risueña. Eso es porque cada
            mensaje que tú me mandas me llena de emoción, una emoción que se
            apodera de mí sin que la pueda controlar.
          </div>
        </div>
        <div className="arrow__container">
          <i
            className="fa-solid fa-arrow-left"
            onClick={onArrowLeftIconClick}
          />
        </div>
      </div>
      <section className="girasol" />
    </div>
  );
};

export default Smile;
