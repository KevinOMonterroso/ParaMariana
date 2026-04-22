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
      <section className="love" />
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
        <a href="https://open.spotify.com/track/5GB8RBBzQLojlzQXtABIRp?si=SxmTtVQYR3qMqWhtT5A0oA">
          ¡Dale click a la sorpresa!
        </a>
      </div>
    </div>
  );
};

export default Gift;
