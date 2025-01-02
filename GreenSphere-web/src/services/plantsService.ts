import api from './api';

export const fetchPlants = async () => {
  const response = await api.get('/plants');
  return response.data;
};
