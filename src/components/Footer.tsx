import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              Nail Lit Jee
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your premier destination for luxury nail care. 
              Experience the perfect blend of artistry and relaxation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/luxenails"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/luxenails"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/luxenails"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/luxenails"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-rose-400 transition-colors">Classic Manicure</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition-colors">Gel Manicure</a></li>              <li><a href="#services" className="hover:text-rose-400 transition-colors">Spa Pedicure</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition-colors">Nail Art</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition-colors">Package Deals</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>63 yaya abatan</p>
                  <p>Road Ogba, Lagos, Nigeriathji</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-rose-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-rose-400 transition-colors">
                  (234) 8023873589
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-rose-400 flex-shrink-0" />
                <a href="mailto:info@luxenails.com" className="hover:text-rose-400 transition-colors">
                  naillitjee@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-rose-400" />
                <span className="text-sm font-medium">Monday - Friday</span>
              </div>
              <p className="text-sm pl-6">9:00 AM - 7:00 PM</p>
              
              <div className="flex items-center gap-2 pt-2">
                <Clock className="h-4 w-4 text-rose-400" />
                <span className="text-sm font-medium">Saturday - Sunday</span>
              </div>
              <p className="text-sm pl-6">10:00 AM - 6:00 PM</p>
              
              <div className="bg-gray-800 rounded-lg p-3 mt-4">
                <p className="text-sm text-rose-300 font-medium">Book your appointment today!</p>
                <p className="text-xs text-gray-400 mt-1">Walk-ins welcome, appointments preferred</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Nails. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Booking Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;