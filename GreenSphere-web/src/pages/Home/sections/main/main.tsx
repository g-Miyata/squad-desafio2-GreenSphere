import Titles from '../../../../components/Titles/Titles';
import Button from '../../../../components/Button/Button';
import style from './main.module.css';
const main = () => {
  return (
    <div>
      <section className={style.home}>
        <section>
          <article>
            <div>
              <h2>&#9473;&#9473;&nbsp;&nbsp;&nbsp; Love for Nature</h2>
            </div>
            <div>
              <Titles titleText="dicover your" highlightText="green" text="" />
              <Titles titleText="Side" highlightText="" text={`We are your one-stop destination for all things green and growing. Our website\n offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor\nfoliage, allowing you to create your very own green oasis.`} />
            </div>
            <div>
              <Button text="Shop now" />
            </div>
          </article>
          <p>Learn Gardening &rarr; </p>
        </section>
      </section>
    </div>
  );
};

export default main;
