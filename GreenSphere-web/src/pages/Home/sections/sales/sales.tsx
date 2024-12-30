import Title from '../../../../components/Titles/Titles';
import ImageCarousel from '../../../../components/Splide/Splide';
import style from './sales.module.css';
const sales = () => {
  return (
    <div>
      <div className={style.container}>
        <section className={style.sales}>
          <div>
            <Title titleText="this weeks most popular" highlightText="and best selling" />
          </div>
          <div>
            <ImageCarousel />
          </div>
        </section>
      </div>
    </div>
  );
};

export default sales;
