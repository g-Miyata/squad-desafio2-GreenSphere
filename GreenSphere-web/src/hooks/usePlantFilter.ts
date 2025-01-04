import { useState, useMemo } from 'react';
import { Plant } from '../types/Plant';

const usePlantFilters = (plants: Plant[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'Indoor' | 'Outdoor'>('all');

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesFilter = filter === 'all' || plant.label.toLowerCase() === filter.toLowerCase();
      const matchesSearchTerm = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearchTerm;
    });
  }, [plants, searchTerm, filter]);

  return {
    filteredPlants,
    setSearchTerm,
    setFilter,
  };
};

export default usePlantFilters;
