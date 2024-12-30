import { useState, useEffect } from 'react';
import api from '../services/api';

interface Plant {
  id: number;
  name: string;
  subtitle: string;
  label: string[];
  price: string;
  isInSale: boolean;
  discountPercentage: number;
  features: string;
  description: string;
  imgUrl: string;
}

const useFetchPlants = (url: string) => {
  const [data, setData] = useState<Plant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get<{ plants: Plant[] }>(url);
        setData(response.data.plants);
      } catch (err: any) {
        setError(err.message || 'Erro ao buscar dados');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchPlants;
