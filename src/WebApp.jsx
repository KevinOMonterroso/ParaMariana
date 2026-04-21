import { Routes, Route } from "react-router-dom";
import Buttons from "./components/Buttons";
import Heart from "./Heart";
import Smile from "./Smile";
import Clock from "./Clock";
import "./WebApp.css";

const WebApp = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div className="webapp">
          <section className="tomoko-uji-v4bkvol1sti-unsplas" />
          <section className="hero">
            <div className="board">
              <div className="rectangle" />
              <div className="hola-mi-amor">
                Hola mi amor, esta es una pequeña página para ti que hice con mucho
                cariño, espero te guste mucho!!
                <br />
              </div>
            </div>
          </section>
          <div className="elige-uno-de">
            Elige uno de los siguientes botones para continuar :)
          </div>
          <Buttons />
        </div>
      } />
      <Route path="/heart" element={<Heart />} />
      <Route path="/smile" element={<Smile />} />
      <Route path="/clock" element={<Clock />} />
    </Routes>
  );
};

export default WebApp;
