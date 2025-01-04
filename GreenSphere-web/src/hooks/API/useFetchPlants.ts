import { useState, useEffect, useCallback } from 'react';
import { Plant } from '../../types/Plant';

import { fetchPlants } from '../../services/plantsService';

const useFetchPlants = () => {
  const [data, setData] = useState<Plant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const plants = await fetchPlants();
      setData(plants);
      setError(null);
    } catch (err: any) {
      setError('Unable to load plants. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, fetchData };
};

export default useFetchPlants;
