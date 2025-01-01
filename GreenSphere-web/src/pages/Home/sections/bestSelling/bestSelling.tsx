import Title from '../../../../components/Titles/Titles';
import style from './bestSelling.module.css';
import ImageCarousel from '../../../../components/Splide/Splide';
const bestSelling = () => {
  return (
    <div className={style.container}>
      <section className={style.bestSelling}>
        <div>
          <Title titleText="this weeks most popular" highlightText="and best selling" />
        </div>
        <div>
          <ImageCarousel type="bestSelling" />
        </div>
      </section>
    </div>
  );
};

export default bestSelling;
