import React from 'react';
import { Plus, Clock, Tag } from 'lucide-react';
import { Service, CartItem } from '../types';
import { services } from '../data/services';

interface ServicesProps {
  onAddToCart: (service: Service) => void;
  cartItems: CartItem[];
}

const Services: React.FC<ServicesProps> = ({ onAddToCart, cartItems }) => {
  const categories = ['all', 'manicure', 'pedicure', 'package'];
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const getServiceQuantity = (serviceId: string) => {
    const item = cartItems.find(item => item.service.id === serviceId);
    return item ? item.quantity : 0;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Premium <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Indulge in our carefully curated selection of nail care services, 
            each designed to pamper you and enhance your natural beauty.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 capitalize ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    service.category === 'manicure' ? 'bg-rose-500' :
                    service.category === 'pedicure' ? 'bg-pink-500' : 'bg-purple-500'
                  }`}>
                    {service.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <div className="flex items-center text-rose-600">
                    <Tag className="h-4 w-4 mr-1" />
                    <span className="text-xl font-bold">₦{service.price}</span>
                  </div>
                </div>

                <button
                  onClick={() => onAddToCart(service)}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Plus className="h-5 w-5" />
                  Add to Quote
                  {getServiceQuantity(service.id) > 0 && (
                    <span className="bg-white text-rose-600 rounded-full px-2 py-1 text-xs font-bold">
                      {getServiceQuantity(service.id)}
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;