import React from 'react';
import useFetchPlants from '../../hooks/useFetchPlants';
import Loader from '../../components/Loader/Loader';
import Label from '../../components/Label/Label';

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
    <div>
      <Label text="asas" />
      <h1>Lista de Plantas</h1>
      <ul>
        {data.map((plant) => (
          <li key={plant.id}>
            <img src={plant.imgUrl} alt={plant.name} />
            <h2>{plant.name}</h2>
            <p>{plant.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
