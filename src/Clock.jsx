import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Clock.css";

const Clock = () => {
  const navigate = useNavigate();

  const onArrowLeftIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="clock">
      <div className="board3">
        <div className="background" />
        <div className="el-reloj-representa">
          El reloj representa que, a pesar de conocernos poco, parece toda una
          vida, que de hecho esto me recuerda a una canción que se llama
          Química, pero no es de Mon Laferte, por desgracia, pero me llena de
          alegría saber que conectamos tan bien a pesar de este corto periodo,
          lo que me hizo desear toda una vida junto a tu lado.
        </div>
        <img
          className="arrow-left-icon3"
          loading="lazy"
          alt=""
          src="/arrow-left2.svg"
          onClick={onArrowLeftIconClick}
        />
        <div className="kseniia-ilinykh-orkgc0m8lj8-un" />
      </div>
    </div>
  );
};

export default Clock;
