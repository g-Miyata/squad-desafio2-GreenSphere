import { useState, useEffect, useCallback } from 'react';
import { fetchPlant } from '../../services/plantsService';
import { Plant } from './Plant.types';

const useFetchPlant = (id: number | string) => {
  const [data, setData] = useState<Plant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const plant = await fetchPlant(id);
      setData(plant);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar planta');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchPlant;
