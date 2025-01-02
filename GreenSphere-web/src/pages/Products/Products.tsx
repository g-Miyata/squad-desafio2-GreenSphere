import React from 'react';
import useFetchPlants from '../../hooks/API/useFetchPlants';
import Loader from '../../components/Loader/Loader';
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import style from './Products.module.css';
import Titles from '../../components/Titles/Titles';

const Products: React.FC = () => {
  const { data, loading, error } = useFetchPlants();

  if (loading)
    return (
      <p>
        <Loader />
      </p>
    );
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className={style.container}>
      <Titles titleText="Our Products" />
      <div className={style.contentContainer}>
        <ul className={style.list}>
          {data && data.length > 0 ? (
            data.map((plant) => (
              <li key={plant.id}>
                <div className={style.cardBody}>
                  <div className={style.imgContainer}>
                    <img src={plant.imgUrl} alt={plant.name} />
                  </div>
                  <div>
                    <p>{plant.name}</p>
                  </div>
                  <div className={style.label}>
                    <Label text={plant.label} />
                    <Label text={plant.plantType} />
                  </div>
                  <Link to={`/plants/${plant.id}`} className={style.button}>
                    <Button text="Buy now" />
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <p>No plants available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Products;
