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
      <div className="flowers" />
      <div className="content__container">
        <div className="board__clock">
          <div className="background" />
          <div className="el-reloj-representa">
            El reloj representa que, a pesar de conocernos poco, parece toda una
            vida, que de hecho esto me recuerda a una canción que se llama
            Química, pero no es de Mon Laferte, por desgracia, pero me llena de
            alegría saber que conectamos tan bien a pesar de este corto periodo,
            lo que me hizo desear toda una vida junto a tu lado.
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

export default Clock;
