import React from 'react';
import { Phone, Mail, MapPin, Star } from 'lucide-react';
import contactData from "../content/contact.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-700 text-white p-2 rounded-lg mr-3">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Labotech Service</h3>
                <p className="text-gray-400">Services de réparation</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Service de réparation d'électroménagers professionnel avec plus de 5 ans d'expérience.
Entreprise agréée et assurée, nous nous engageons à remettre vos appareils en parfait état de fonctionnement.
            </p>

            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-orange-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <span className="text-gray-300">Note de 5,0/5 • Plus de 500 clients satisfaits</span>
            </div>
          </div>

          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-white">{contactData.phone}</p>
                  <p className="text-sm text-gray-400">24/7 Service d'urgence</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-white">{contactData.email} </p>
                  <p className="text-sm text-gray-400">Réponse rapide</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                
                
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Réparation Refrigerateur</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Réparation Machine à laver</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Réparation Four</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Réparation Climatiseur</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Réparation Micro-onde</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Réparation Plaque de cuisson </a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} CozyTech Appliance Repair. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Warranty Info
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Licensed & Insured | EPA Certified | BBB A+ Rating
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;