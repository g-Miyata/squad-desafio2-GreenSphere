export interface PlantForm {
  name: string;
  subtitle: string;
  plantType: string;
  price: number;
  discount: string;
  label: 'Indoor' | 'Outdoor';
  features: string;
  description: string;
}
