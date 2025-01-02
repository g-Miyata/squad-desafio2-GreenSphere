import api from './api';

export const fetchPlants = async () => {
  const response = await api.get('/plants');
  return response.data;
};

export const fetchPlant = async (id: number | string) => {
  const response = await api.get(`/plants/${id}`);
  return response.data;
};
