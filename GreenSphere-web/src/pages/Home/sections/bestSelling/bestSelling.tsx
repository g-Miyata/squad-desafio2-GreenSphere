import Title from '../../../../components/Titles/Titles';
import style from './bestSelling.module.css';
import ImageCarousel from '../../../../components/Splide/Splide';

const bestSelling = () => {
  return (
    <div id="bestSelling" className={style.container}>
      <section className={style.bestSelling}>
        <div className={style.text}>
          <Title titleText="this weeks most popular" highlightText="and best selling" />
        </div>
        <div className={style.carouselContainer}>
          <ImageCarousel type="bestSelling" />
        </div>
      </section>
    </div>
  );
};

export default bestSelling;
