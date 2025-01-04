import style from './Home.module.css';
import Main from '../Home/sections/main/main';
import Instructions from '../Home/sections/instructions/instructions';
import Outdoor from '../Home/sections/outdoor/outdoor';
import BestSelling from './sections/bestSelling/bestSelling';
import Sales from './sections/sales/sales';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <section className={style.sections}>
        <Main />
        <Instructions />
        <Outdoor />
        <BestSelling />
        <Sales />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
