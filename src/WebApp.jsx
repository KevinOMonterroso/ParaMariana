import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Buttons from "./components/Buttons";
import Heart from "./pages/Heart/Heart";
import Smile from "./pages/Smile/Smile";
import Clock from "./pages/Clock/Clock";
import Gift from "./pages/Gift/Gift";
import "./WebApp.css";

const WebApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleGiftButton = () => {
    if (count >= 3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const onButtonHeart = useCallback(() => {
    navigate("pages/Heart/Heart");
  }, [navigate]);

  const onButtonSmile = useCallback(() => {
    navigate("/pages/Smile/Smile");
  }, [navigate]);

  const onButtonClock = useCallback(() => {
    navigate("/pages/Clock/Clock");
  }, [navigate]);

  const onButtonGift = useCallback(() => {
    navigate("/pages/Gift/Gift");
  }, [navigate]);

  const handleButtonClickHeart = () => {
    setCount(count + 1);
    onButtonHeart();
    toggleGiftButton();
  };
  const handleButtonClickSmile = () => {
    setCount(count + 1);
    onButtonSmile();
    toggleGiftButton();
  };
  const handleButtonClickClock = () => {
    setCount(count + 1);
    onButtonClock();
    toggleGiftButton();
  };

  const handleButtonClickGift = () => {
    setCount(1);
    onButtonGift();
    toggleGiftButton();
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="webapp">
            <section className="plants" />
            <section className="hero">
              <div className="board">
                <div className="text__hero">
                  Hola mi amor, esta es una pequeña página para ti que hice con
                  mucho cariño, espero te guste mucho!!
                </div>
              </div>
            </section>
            <div className="text__2">
              Elige uno de los siguientes botones para continuar :)
            </div>
            <div className="buttons-container">
              <Buttons
                className="fa-solid fa-heart"
                onClick={handleButtonClickHeart}
              />
              <Buttons
                className="fa-solid fa-smile"
                onClick={handleButtonClickSmile}
              />
              <Buttons
                className="fa-solid fa-clock"
                onClick={handleButtonClickClock}
              />
              <div
                style={{ display: isVisible ? "block" : "none" }}
                className="gift-button"
              >
                <Buttons
                  className="fa-solid fa-gift"
                  onClick={handleButtonClickGift}
                />
                <i className="fa-solid fa-arrow-up" />
                <p>Sorpresaaaa!!</p>
              </div>
            </div>
          </div>
        }
      />
      <Route path="/pages/Heart/Heart" element={<Heart />} />
      <Route path="/pages/Smile/Smile" element={<Smile />} />
      <Route path="/pages/Clock/Clock" element={<Clock />} />
      <Route path="/pages/Gift/Gift" element={<Gift />} />
    </Routes>
  );
};

export default WebApp;
