import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Heart.css";

const Heart = () => {
  const navigate = useNavigate();

  const onArrowLeftIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="heart">
      <section className="kwang-mathurosemontri-fy1ecb1r" />
      <div className="board">
        <div className="form-element" />
        <div className="el-corazn-representa">
          El corazón representa el amor que tú me produces cada que veo tu
          sonrisa tan hermosa, llena de felicidad al verme; con el simple hecho
          de sonreír, haces que mi ánimo cambie por completo. Cada que me besas,
          cada que me abrazas y cada que demuestras tu amor, me haces tan feliz
          y haces que mi corazón palpite más fuerte.
        </div>
        <img
          className="arrow-left-icon"
          loading="lazy"
          alt=""
          src="/arrow-left.svg"
          onClick={onArrowLeftIconClick}
        />
      </div>
    </div>
  );
};

export default Heart;
