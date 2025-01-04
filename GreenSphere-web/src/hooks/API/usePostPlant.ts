import { useState, useCallback } from 'react';
import { postPlant } from '../../services/plantsService';
import { Plant } from '../../types/Plant';
import useFetchPlants from './useFetchPlants';
const usePostPlants = () => {
  const { fetchData } = useFetchPlants();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');

  const submitPlant = useCallback(async (plantData: Partial<Plant>) => {
    try {
      setIsSubmitting(true);
      setError(null);
      setMessage('');
      const response = await postPlant(plantData);
      setMessage('Plant successfully registered!');
      fetchData();
      setTimeout(() => setMessage(''), 2000);
      return response;
    } catch (err: any) {
      setError(err.message || 'Error while posting data');
      setMessage('Failed to register the plant. Please try again.');
      setTimeout(() => setMessage(''), 2000);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { submitPlant, isSubmitting, error, message };
};

export default usePostPlants;
