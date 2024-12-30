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
      setIsVisible(false);
    }, 4000);

    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <>
      {isVisible && (
        <div className={style.container}>
          <div className={style.welcome}>
            {user && (
              <>
                {user.imageUrl && <img src={user.imageUrl} alt={`${user.firstName}'s profile`} className={style.img} />}
                <h1>Welcome, {user.firstName}!</h1>
                <h2>We are happy to have you here!</h2>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
