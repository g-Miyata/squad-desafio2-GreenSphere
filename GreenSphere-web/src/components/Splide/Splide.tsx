import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FC } from 'react';
import cactus from '../../assets/images/cactos.jpg';
import cactus2 from '../../assets/images/cactos.jpg';
import orquidea from '../../assets/images/cactos-indoor.jpg';
import orquidea2 from '../../assets/images/orquidea-indoor.jpg';
import planta from '../../assets/images/orquidea.jpg';
import sla from '../../assets/images/minimal-tree-garden-japan.jpg';
import '@splidejs/splide/dist/css/splide.min.css';
import style from './Splide.module.css';
const ImageCarousel: FC = () => {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 4,
        perMove: 1,
        loop: true,
        autoplay: true,
        updateOnMove: true,
        drag: true,
        interval: 3000,
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <div className={style.container}>
          <div className={style.splideBody}>
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
        <div className={style.container}>
          <div className={style.splideBody}>
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
        <div className={style.container}>
          <div className={style.splideBody}>
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
        <div className={style.container}>
          <div className={style.splideBody}>
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
        <div className={style.container}>
          <div className={style.splideBody}>
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
        <div className={style.container}>
          <div className={style.splideBody}>
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
