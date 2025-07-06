export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: 'manicure' | 'pedicure' | 'package';
  image: string;
}

export interface CartItem {
  service: Service;
  quantity: number;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}