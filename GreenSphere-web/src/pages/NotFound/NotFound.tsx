import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Titles from '../../components/Titles/Titles';
import { Navigate } from '../../hooks/useNavigate'; // Seu componente Navigate
import style from './NotFoud.module.css';

const NotFound = () => {
  const [redirect, setRedirect] = useState(false); // Controla a navegação condicional

  const handleNavigate = () => {
    setRedirect(true); // Ativa a navegação
  };

  return (
    <>
      {redirect && <Navigate path="/  " />} {/* Redireciona se redirect for true */}
      <div className={style.container}>
        <div className={style.content}>
          <Titles titleText="404 -" highlightText="PAGE NOT FOUND" text={`Oops! It seems you've wandered off the path.\nThe page you're looking for might have been moved, deleted, or never existed.`} />
          <div className={style.button} onClick={handleNavigate}>
            <Button text="Homepage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
