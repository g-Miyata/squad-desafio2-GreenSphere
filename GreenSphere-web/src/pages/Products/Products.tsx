import React from 'react';
import useFetchPlants from '../../hooks/API/useFetchPlants';
import usePlantFilters from '../../hooks/usePlantFilter';
import Loader from '../../components/Loader/Loader';
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import style from './Products.module.css';
import Titles from '../../components/Titles/Titles';

const Products: React.FC = () => {
  const { data, loading, error } = useFetchPlants();
  const { filteredPlants, setSearchTerm, setFilter } = usePlantFilters(data || []);

  if (loading) return <Loader />;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className={style.container}>
      <Titles titleText="Our Products" />
      <div className={style.filterContainer}>
        <input type="text" placeholder="Search by name..." onChange={(e) => setSearchTerm(e.target.value)} className={style.searchBar} />
        <div className={style.filterGroup}>
          <label htmlFor="filter-all">
            <input id="filter-all" type="radio" name="filter" value="all" defaultChecked onChange={() => setFilter('all')} />
            All
          </label>
          <label htmlFor="filter-indoor">
            <input id="filter-indoor" type="radio" name="filter" value="Indoor" onChange={() => setFilter('Indoor')} />
            Indoor
          </label>
          <label htmlFor="filter-outdoor">
            <input id="filter-outdoor" type="radio" name="filter" value="Outdoor" onChange={() => setFilter('Outdoor')} />
            Outdoor
          </label>
        </div>
      </div>
      <div className={style.contentContainer}>
        <ul className={style.list}>
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant) => (
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
