import { useParams } from 'react-router-dom';
import useFetchPlant from '../../hooks/API/useFetchPlant';
import Button from '../../components/Button/Button';
import Titles from '../../components/Titles/Titles';
import style from './Plant.module.css';
import Loader from '../../components/Loader/Loader';
import Label from '../../components/Label/Label';
import Footer from '../../components/Footer/Footer';

const Plant = () => {
  const { plantId } = useParams<{ plantId: string }>();
  const { data: plant, loading, error } = useFetchPlant(plantId!);

  if (loading) {
    return (
      <div className={style.loader}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!plant) {
    return <p>Planta não encontrada.</p>;
  }

  return (
    <div>
      <div className={style.container}>
        <section className={style.content}>
          <div className={style.imgContainer}>
            <img src={plant.imgUrl} alt={plant.name} />
          </div>
          <div className={style.description}>
            <div className={style.title}>
              <Titles titleText={plant.name} />
              <h2>{plant.subtitle}</h2>
              <div className={style.labels}>
                <Label text={plant.label} />
                <Label text={plant.plantType} />
              </div>
              <p>${plant.price}</p>
              <div>
                <Button text="Check out" />
              </div>
            </div>
            <div className={style.feat}>
              <h2>Features</h2>
              <ul>
                {plant.features.split('. ').map((feature, index) => (
                  <li key={index}>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.info}>
              <h2>Description</h2>
              <p>{plant.description}</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Plant;
