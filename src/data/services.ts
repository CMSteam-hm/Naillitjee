import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Classic Manicure',
    description: 'Professional nail shaping, cuticle care, and polish application',
    price: 10500,
    duration: '45 min',
    category: 'manicure',
    image: 'https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'Polly Gel Manicure',
    description: 'Long-lasting gel polish with UV curing for extended wear',
    price: 9500,
    duration: '60 min',
    category: 'manicure',
    image: '/public/images/IMG-20250707-WA0009.jpg'
  },
  {
    id: '3',
    name: 'French Manicure',
    description: 'Timeless elegant white tips with nude or pink base',
    price: 11000,
    duration: '50 min',
    category: 'manicure',
    image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '4',
    name: 'Classic Pedicure',
    description: 'Foot soak, nail trimming, callus removal, and polish',
    price: 10000,
    duration: '60 min',
    category: 'pedicure',
    image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '5',
    name: 'French Tip',
    description: 'Luxury treatment with exfoliation, mask, and massage',
    price: 10500,
    duration: '75 min',
    category: 'pedicure',
    image: '/public/images/IMG-20250707-WA0010.jpg'
  },
  {
    id: '6', 
    name: 'Gel Pedicure',
    description: 'Long-lasting gel polish for toes with professional finish',
    price: 12000,
    duration: '65 min',
    category: 'pedicure',
    image: 'https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '7',
    name: 'Acrylic Gel Nails',
    description: 'Classic manicure and pedicure package deal',
    price: 10000,
    duration: '105 min',
    category: 'package',
    image: '/public/images/IMG-20250707-WA0008.jpg'
  },
  {
    id: '8',
    name: '3D Gel Nails',
    description: 'Premium gel manicure and spa pedicure with aromatherapy',
    price: 11000,
    duration: '135 min',
    category: 'package',
    image: '/public/images/IMG-20250707-WA0007.jpg'
  },
];