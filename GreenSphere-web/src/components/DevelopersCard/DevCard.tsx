import { useState } from 'react';
import style from './DevCard.module.css';

import IFSP from '../../assets/images/IFSP.svg';
import compass from '../../assets/images/compass-uol.svg';

interface CardProps {
  devImg: string;
  icon: string;
  developed: string;
  name: string;
  role: string;
  email: string;
  age: string;
  education: string;
  company: string;
  location: string;
  linkedin: string;
  github: string;
}

const FlipCard = ({ age, role, devImg, icon, developed, name, education, company, location, linkedin, github, email }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlip = (): void => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={handleFlip} className={`${style.card} ${isFlipped ? style.flipped : ''}`}>
      {/* Frente do card */}
      <div className={`${style.cardFace} ${style.cardFront}`}>
        <img src={devImg} alt={name} />
        <div className={style.info}>
          <h1>{name}</h1>
          <div className={style.icon}>
            <img src={icon} alt={developed} />
            <p>{developed}</p>
          </div>
        </div>
        <div className={style.btnContainer}>
          <button>&rarr; more info &larr; </button>
        </div>
      </div>

      <div className={`${style.cardFace} ${style.cardBack}`}>
        <div className={style.bContent}>
          <div className={style.title}>
            <h1>{name}</h1>
            <p>
              {age} years | {location} | {email}
            </p>
            <hr />
          </div>
          <div className={style.contentContainer}>
            <div className={style.job}>
              <img src={IFSP} alt="IFSP logo" />
              <p>
                {company}, {role}
              </p>
              <p className={style.title}>{education}</p>
            </div>
            <div className={style.job}>
              <img src={compass} alt="Uol Compass logo" />
              <p>Uol Compass, Intern</p>
              <p className={style.title}>Full stack Journey (Node.js & React) - AWS Cloud Context</p>
            </div>
          </div>
          <div className={style.links}>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href={`mailto:${email}`}>
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className={style.btnContainer}>
          <button onClick={handleFlip}>&larr;</button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
