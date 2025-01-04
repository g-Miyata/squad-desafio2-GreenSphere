import Title from '../../../../components/Titles/Titles';
import ImageCarousel from '../../../../components/Splide/Splide';
import style from './sales.module.css';
import Footer from '../../../../components/Footer/Footer';
const sales = () => {
  return (
    <div className={style.container}>
      <section className={style.sales}>
        <div className={style.text}>
          <Title titleText="" highlightText="plants in&nbsp;" />
          <Title titleText="Sale" />
        </div>
        <div className={style.carouselContainer}>
          <ImageCarousel type="plantsInSale" />
        </div>
      </section>
    </div>
  );
};

export default sales;
