export type Category = 'machines' | 'grinders' | 'accessories' | 'beans';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  image: string;
  details: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

