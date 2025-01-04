import api from './api';
import { Plant } from '../types/Plant';
import { Type } from './plantsTypes';
import { PlantWithType } from './plantsTypes';

export const fetchPlants = async () => {
  const plantsResponse = await api.get<Plant[]>('/plants');
  const typesResponse = await api.get<Type[]>('/types');

  const plants = plantsResponse.data;
  const types = typesResponse.data;

  const mergedPlants: PlantWithType[] = plants.map((plant) => {
    const type = types.find((t) => t.id === plant.typeId);
    return {
      ...plant,
      plantType: type ? type.typeName : 'Unknown',
    };
  });
  return mergedPlants;
};

export const fetchPlant = async (id: number | string) => {
  const plantResponse = await api.get<Plant>(`/plants/${id}`);
  const typesResponse = await api.get<Type[]>('/types');

  const plant = plantResponse.data;
  const types = typesResponse.data;

  const type = types.find((t) => t.id === plant.typeId);

  return {
    ...plant,
    plantType: type ? type.typeName : 'Unknown',
  };
};

export const fetchTypes = async () => {
  const types = await api.get('/types');
  return types.data;
};
