import { Plant } from '../types/Plant';
export interface Type {
  id: number;
  typeName: string;
}

export interface PlantWithType extends Plant {
  plantType: string;
}
