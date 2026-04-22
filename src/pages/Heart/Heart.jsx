import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Heart.css';

const Heart = () => {
  const navigate = useNavigate();

  const onArrowLeftIconClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className='heart'>
      <section className='tulips' />
      <div className='board__heart'>
        <div className='text__heart'>
          El corazón representa el amor que tú me produces cada que veo tu
          sonrisa tan hermosa, llena de felicidad al verme; con el simple hecho
          de sonreír, haces que mi ánimo cambie por completo. Cada que me besas,
          cada que me abrazas y cada que demuestras tu amor, me haces tan feliz
          y haces que mi corazón palpite más fuerte.
        </div>
      </div>
      <i
          className='fa-solid fa-arrow-left'
          onClick={onArrowLeftIconClick}
        />
    </div>
  );
};

export default Heart;
