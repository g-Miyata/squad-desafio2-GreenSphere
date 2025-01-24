import { fetchTypes } from '../services/plantsService';
import { Type } from '../services/plantsTypes';

// let validPlantTypeIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export let validPlantTypeIds: number[] = [];

export async function loadValidPlantTypes() {
  try {
    const types = await fetchTypes();
    validPlantTypeIds = types.map((type: Type) => type.id);
  } catch (error) {
    validPlantTypeIds = [];
  }
}
