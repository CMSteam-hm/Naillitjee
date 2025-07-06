import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Nail Lit Jee</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded with a passion for beauty and excellence, Luxe Nails has been transforming 
                hands and feet into works of art for over 5 years. Our team of certified nail 
                technicians combines traditional techniques with modern trends to deliver 
                exceptional results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that beautiful nails are not just about aesthetics – they're about 
                confidence, self-expression, and taking a moment to pamper yourself in our 
                serene spa environment.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Certified Professionals</h3>
                  <p className="text-gray-600 text-sm">Licensed and experienced nail technicians</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">500+ Happy Clients</h3>
                  <p className="text-gray-600 text-sm">Trusted by our loyal community</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Flexible Hours</h3>
                  <p className="text-gray-600 text-sm">Open 7 days a week for your convenience</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Premium Products</h3>
                  <p className="text-gray-600 text-sm">Only the finest quality polishes and tools</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/3997962/pexels-photo-3997962.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Spa environment"
                  className="w-full rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Nail art"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Pedicure service"
                  className="w-full rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/3997963/pexels-photo-3997963.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Professional tools"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;