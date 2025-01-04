export interface Plant {
  id: number;
  name: string;
  subtitle: string;
  label: string;
  plantType?: string;
  price: number;
  isInSale: boolean;
  discountPercentage: number;
  features: string;
  description: string;
  imgUrl: string;
  typeId?: number;
}
