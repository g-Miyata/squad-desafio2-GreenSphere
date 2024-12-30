import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FC } from 'react';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import style from './Splide.module.css';
import { useSplide } from '../../hooks/useSplide';
import { Navigate } from '../../hooks/useNavigate';
import { useState } from 'react';
// Importando imagens
import cactus from '../../assets/images/cactos.jpg';
import cactus2 from '../../assets/images/cactos.jpg';
import orquidea from '../../assets/images/cactos-indoor.jpg';
import orquidea2 from '../../assets/images/orquidea-indoor.jpg';
import planta from '../../assets/images/orquidea.jpg';
import sla from '../../assets/images/minimal-tree-garden-japan.jpg';

const ImageCarousel: FC = () => {
  const numberOfSlides = useSplide();
  const [redirect, setRedirect] = useState(false); // Controla a navegação condicional

  const handleNavigate = () => {
    setRedirect(true); // Ativa a navegação
  };

  return (
    <Splide
      options={{
        type: 'loop',
        perPage: numberOfSlides,
        drag: 'free',
        autoScroll: {
          speed: 0.5,
        },
      }}
      extensions={{ AutoScroll }}
      aria-label="Plant Carousel"
    >
      <SplideSlide>
        {redirect && <Navigate path="/Plant" />}
        <div className={style.container}>
          <div onClick={handleNavigate} className={style.splideBody}>
            <div className={style.imgContainer}>
              <img src={planta} alt="Image 1" />
            </div>
            <div>
              <p>Titulo</p>
              <small>$313.00</small>
            </div>
            <div className={style.label}>
              <p>label</p>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        {redirect && <Navigate path="/Plant" />}
        <div className={style.container}>
          <div onClick={handleNavigate} className={style.splideBody}>
            <div className={style.imgContainer}>
              <img src={cactus} alt="Image 1" />
            </div>
            <div>
              <p>Titulo</p>
              <small>$313.00</small>
            </div>
            <div className={style.label}>
              <p>label</p>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        {redirect && <Navigate path="/Plant" />}
        <div className={style.container}>
          <div onClick={handleNavigate} className={style.splideBody}>
            <div className={style.imgContainer}>
              <img src={cactus2} alt="Image 1" />
            </div>
            <div>
              <p>Titulo</p>
              <small>$313.00</small>
            </div>
            <div className={style.label}>
              <p>label</p>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        {redirect && <Navigate path="/Plant" />}
        <div className={style.container}>
          <div onClick={handleNavigate} className={style.splideBody}>
            <div className={style.imgContainer}>
              <img src={orquidea2} alt="Image 1" />
            </div>
            <div>
              <p>Titulo</p>
              <small>$313.00</small>
            </div>
            <div className={style.label}>
              <p>label</p>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        {redirect && <Navigate path="/Plant" />}
        <div className={style.container}>
          <div onClick={handleNavigate} className={style.splideBody}>
            <div className={style.imgContainer}>
              <img src={orquidea} alt="Image 1" />
            </div>
            <div>
              <p>Titulo</p>
              <small>$313.00</small>
            </div>
            <div className={style.label}>
              <p>label</p>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        {redirect && <Navigate path="/Plant" />}
        <div className={style.container}>
          <div onClick={handleNavigate} className={style.splideBody}>
            <div className={style.imgContainer}>
              <img src={sla} alt="Image 1" />
            </div>
            <div>
              <p>Titulo</p>
              <small>$313.00</small>
            </div>
            <div className={style.label}>
              <p>label</p>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default ImageCarousel;
