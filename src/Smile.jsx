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
      <div className="board2">
        <div className="figure" />
        <div className="la-carita-feliz">{`La carita feliz representa mi cambio de humor al conocerte; todo mi círculo social te puede confirmar que desde que empecé a hablar contigo he tenido la misma carita risueña. Eso es porque cada mensaje que tú me mandas me llena de emoción, una emoción que se apodera de mí sin que la pueda controlar. `}</div>
        <img
          className="arrow-left-icon2"
          loading="lazy"
          alt=""
          src="/arrow-left1.svg"
          onClick={onArrowLeftIconClick}
        />
      </div>
      <section className="paul-green-5lrxnlhfzoy-unsplas" />
    </div>
  );
};

export default Smile;
