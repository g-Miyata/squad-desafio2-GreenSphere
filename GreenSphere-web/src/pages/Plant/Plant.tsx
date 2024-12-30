import Button from '../../components/Button/Button';
import Titles from '../../components/Titles/Titles';
import style from './Plant.module.css';
import img from '../../assets/images/close-up-plants-garden.jpg';
const AboutUs = () => {
  return (
    <div className={style.container}>
      <section className={style.content}>
        <div className={style.imgContainer}>
          <img src={img} alt="" />
        </div>
        <div className={style.description}>
          <div className={style.title}>
            <Titles titleText="Echinocereus cactus" />

            <h2>A majestic addtion to you plant collection</h2>
            <div className={style.labels}>
              <span>label</span>
              <span>label</span>
            </div>
            <p>$139.99</p>
            <div>
              <Button text="Check out" />
            </div>
          </div>
          <div className={style.feat}>
            <h2>Features</h2>
            <ul>
              <li>
                <span>Species:&nbsp;</span>Echinocereus spp.
              </li>
              <li>
                <span>mature size:&nbsp;</span>Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.
              </li>
              <li>
                <span>blooming season:&nbsp;</span>Typically spring or summer, with flowers lasting several days to weeks.
              </li>
              <li>
                <span>pot size:&nbsp;</span>Available in various pot sizes to suit your preference and needs.
              </li>
            </ul>
          </div>
          <div className={style.info}>
            <h2>Description</h2>
            <p>Ladyfinger cactus ("Echinocereus pentalophus) is also known as Alice, Devil's Fingers, and Dog Tail It needs bright sunlight, light fertilizer and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger Avoiding wet soil can help with success with a ladyfinger cactus</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
