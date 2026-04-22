import { Routes, Route } from 'react-router-dom';
import Buttons from './components/Buttons';
import Heart from './pages/Heart/Heart';
import Smile from './pages/Smile/Smile';
import Clock from './pages/Clock/Clock';
import './WebApp.css';

const WebApp = () => {
  return (
    <Routes>
      <Route path='/' element={
        <div className='webapp'>
          <section className='plants' />
          <section className='hero'>
            <div className='board'>
              <div className='text__hero'>
                Hola mi amor, esta es una pequeña página para ti que hice con mucho
                cariño, espero te guste mucho!!
              </div>
            </div>
          </section>
          <div className='text__2'>
            Elige uno de los siguientes botones para continuar :)
          </div>
          <Buttons />
        </div>
      } />
      <Route path='/pages/Heart/Heart' element={<Heart />} />
      <Route path='/pages/Smile/Smile' element={<Smile />} />
      <Route path='/pages/Clock/Clock' element={<Clock />} />
    </Routes>
  );
};

export default WebApp;
