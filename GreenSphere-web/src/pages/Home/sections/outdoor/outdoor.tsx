import imgCard1 from '../../../../assets/images/still-life-with-indoor-plants.jpg';
import imgCard2 from '../../../../assets/images/minimal-tree-garden-japan.jpg';
import imgCard3 from '../../../../assets/images/close-up-plants-garden.jpg';
import style from './outdoor.module.css';
import Button from '../../../../components/Button/Button';
const outdoor = () => {
  return (
    <div className={style.container}>
      <section className={style.outdoor}>
        <section className={style.cardsContainer}>
          <div className={style.imgCardsContainer}>
            <div className={style.card1}>
              <img src={imgCard1} alt="" />
            </div>

            <div className={style.card2}>
              <img src={imgCard2} alt="" />
            </div>
            <div className={style.card3}>
              <section className={style.cardImg}>
                <img src={imgCard3} alt="" />
              </section>
              <section className={style.cardTxt}>
                <p>Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. In addition to our extensive plant selection, we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success. But we don't stop there! We believe that knowledge is the key to a thriving garden, so we offer a wealth of information and resources on gardening techniques, plant care tips, and landscaping ideas. Whether you're a seasoned gardener or just starting your green journey, our goal is to inspire and support you every step of the way. Get ready to explore our virtual garden and discover the joys of gardening with us!</p>
              </section>
              <section className={style.cardBtn}>
                <Button text="See more photos" />
              </section>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default outdoor;
