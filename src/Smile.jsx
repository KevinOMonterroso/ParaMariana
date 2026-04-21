import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Smile.css';
  

const Smile = () => {
  const navigate = useNavigate();

  const onArrowLeftIconClick = useCallback(() => {
    navigate('/');
  }, [navigate]);
  
  return (
    <div className='smile'>
        <div className='figure'>
          <div className='text'>La carita feliz representa mi cambio de humor al conocerte; todo mi círculo social te puede confirmar que desde que empecé a hablar contigo he tenido la misma carita risueña. Eso es porque cada mensaje que tú me mandas me llena de emoción, una emoción que se apodera de mí sin que la pueda controlar.</div>
            <i 
              className='fa-solid fa-arrow-left' 
              onClick={onArrowLeftIconClick}
            />
            <section className='girasol' />
      </div>
    </div>
  );
};

export default Smile;
