import React from 'react';
import { Sparkles, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-rose-200 animate-pulse">
        <Sparkles className="h-8 w-8" />
      </div>
      <div className="absolute top-40 right-20 text-pink-200 animate-pulse delay-1000">
        <Star className="h-6 w-6" />
      </div>
      <div className="absolute bottom-40 left-20 text-purple-200 animate-pulse delay-500">
        <Sparkles className="h-10 w-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Beautiful Nails,
                </span>
                <br />
                <span className="text-gray-800">
                  Beautiful You
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Experience luxury nail care with our premium manicure and pedicure services. 
                Professional results that last, in a relaxing spa environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#services"
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-rose-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book Now
              </a>
              <a 
                href="#about"
                className="border-2 border-rose-300 text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-50 transform hover:scale-105 transition-all duration-200"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-rose-100">
              <div>
                <div className="text-3xl font-bold text-rose-600">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600">4.9★</div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/public/images/IMG-20250707-WA0006.jpg"
                alt="Professional nail care"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;