import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Plant } from './useFetchPlants.types';

const useFetchPlants = (url: string) => {
  const [data, setData] = useState<Plant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get<{ plants: Plant[] }>(url);
      setData(response.data.plants);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar dados');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, fetchData };
};

export default useFetchPlants;
