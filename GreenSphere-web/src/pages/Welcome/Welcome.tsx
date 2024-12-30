import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import style from './Welcome.module.css';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Oculta o conteúdo após 5 segundos
    }, 3000);

    const redirectTimer = setTimeout(() => {
      navigate('/'); // Redireciona para a página inicial após 6 segundos
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <>
      {isVisible && (
        <div>
          <div className={style.welcome}>
            {user && (
              <>
                {user.imageUrl && <img src={user.imageUrl} alt={`${user.firstName}'s profile`} className={style.img} />}
                <h1>Bem-vindo, {user.firstName}!</h1>
                <p>Estamos felizes em tê-lo(a) aqui!</p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
