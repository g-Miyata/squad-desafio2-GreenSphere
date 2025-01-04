// import React from 'react';
import style from './AboutUs.module.css';
import Miyata from '../../assets/images/Miyata.jpg';
import Francisco from '../../assets/images/Francisco.jpg';
import FrontEnd from '../../assets/images/frontend.png';
import BackEnd from '../../assets/images/backend.png';

import FlipCard from '../../components/DevelopersCard/DevCard';
import Titles from '../../components/Titles/Titles';
import Footer from '../../components/Footer/Footer';
const AboutUs = () => {
  return (
    <div>
      <div className={style.container}>
        <Titles titleText="Meet our developers" highlightText="" text="" />

        <div className={style.devs}>
          <FlipCard email="miyata120600@gmail.com" devImg={Miyata} icon={FrontEnd} developed="Front End" name="Guilherme Miyata" education="Control and Automation Engineering" company="IFSP - Federal Institute of São Paulo" role="Student" age="24" location="São José dos Campos - SP - Brazil" linkedin="https://www.linkedin.com/in/guilherme-miyata-612a71219/" github="https://github.com/g-miyata" />

          <FlipCard email="miyata120600@gmail.com" devImg={Miyata} icon={FrontEnd} developed="Front End" name="Guilherme Miyata" education="Control and Automation Engineering" company="IFSP - Federal Institute of São Paulo" role="Student" age="24" location="São José dos Campos - SP - Brazil" linkedin="https://www.linkedin.com/in/guilherme-miyata-612a71219/" github="https://github.com/g-miyata" />

          <FlipCard email="francisco.maldona.pb@compasso.com.br" devImg={Francisco} icon={BackEnd} developed="Back End" name="Francisco Maldonado" education="Systems Analysis and Development" company="IFSP - Federal Institute of São Paulo" role="Student" age="21" location="São Carlos - SP - Brazil" linkedin="https://www.linkedin.com/in/francisco-guatura-maldonado-290402209/" github="https://github.com/FranciscoGMaldonado" />

          <FlipCard email="vinicius.vezono123@gmail.com" devImg={Miyata} icon={BackEnd} developed="Back End" name="Vinicius Vezono" education="Systems Analysis and Development" company="IFSP - Federal Institute of São Paulo" role="Student" age="19" location="Barretos - SP - Brazil" linkedin="https://www.linkedin.com/in/vinicius-vezono/" github="https://github.com/ViniciusVezono" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
