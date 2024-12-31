import React from 'react';
import useFetchPlants from '../../hooks/useFetchPlants';
import Loader from '../../components/Loader/Loader';
import Label from '../../components/Label/Label';

import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

import style from './Products.module.css';
import Titles from '../../components/Titles/Titles';
const Products: React.FC = () => {
  const { data, loading, error } = useFetchPlants('/5371015a-8bee-41cc-a419-3c9b71404b58');

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
          {data.map((plant) => (
            <li key={plant.id}>
              <div className={style.cardBody}>
                <div className={style.imgContainer}>
                  <img src={plant.imgUrl} alt={plant.name} />
                </div>
                <div>
                  <p>{plant.name}</p>
                </div>
                <div className={style.label}>
                  {plant.label.map((label, index) => (
                    <Label key={index} text={label} />
                  ))}
                </div>
                <Link to={`/Plant/${plant.id}`} className={style.button}>
                  <Button text="Buy now" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
