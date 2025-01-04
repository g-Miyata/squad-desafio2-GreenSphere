import { useState, useEffect, useCallback } from 'react';
import { Type } from '../../services/plantsTypes';
import { fetchTypes } from '../../services/plantsService';

const useFetchTypes = () => {
  const [data, setData] = useState<Type[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const types = await fetchTypes();
      setData(types);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetchTypes;
