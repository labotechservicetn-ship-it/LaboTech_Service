import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Clock, Star } from 'lucide-react';
import contactData from "../content/contact.json";
// Load all JSON files in src/content/carousel
const modules = import.meta.glob("../content/carousel/*.json", { eager: true });
const carouselItems = Object.values(modules).map((mod: any) => mod.default ?? mod);

const services = [
  {
    name: 'Freezer',
    image: 'https://i.ibb.co/ffvwZxQ/freezze.png'
  },
  {
    name: 'Refrigerator',
    image: 'https://i.ibb.co/5WHxFFGD/Untitled-1.png'
  },
  {
    name: 'Dryer',
    image: 'https://i.ibb.co/tM0dD7SK/azer.png'
  },
  {
    name: 'Oven',
    image: 'https://i.ibb.co/JjQBmyQs/oven.png'
  },
  {
    name: 'Microwave',
    image: 'https://i.ibb.co/sptSNxY6/young-repairman-blue-uniform-repairs-repairs-microwave-oven-with-screwdriver-modern-kitchen-353017-1.jpg'
  },
  {
    name: 'Cooktop',
    image: 'https://i.ibb.co/Nd6bGXCk/coocktop.png'
  },
  {
    name: 'Washer',
    image: 'https://i.ibb.co/wZMd0xGc/washer.png'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  // Resume auto-play after user interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20">
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex flex-col">
    <div className="home-container w-full">
      {/* Carousel Container */}
      <div className="relative flex-1 flex flex-col items-center">
        {/* Carousel */}
        <div className="relative w-full max-w-7xl mx-auto h-64 sm:h-80 md:h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden rounded-2xl shadow-lg">
        {carouselItems.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  
                  <img
                    src={item.image}
                    alt={`${item.name} service`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                    {item.name} Service
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-blue-100">
                      Réparation et entretien professionnels
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-6 flex space-x-1 md:space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Service Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 p-4 md:p-6 bg-white/5 backdrop-blur-sm">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                  index === currentSlide
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex justify-center py-4">
            <div className="flex items-center space-x-2 text-blue-200 text-sm">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>

        {/* Hero Content Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center">
              {/* Content */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <span className="text-gray-600 ml-2">Note de 5,0/5 • Plus de 500 clients satisfaits</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Rapide et fiable
                  <span className="text-blue-700 block">Service De Réparation</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Ne laissez pas vos appareils électroménagers en panne. 
                  Nos techniciens certifiés interviennent le jour même et toutes nos réparations sont garanties 90 jours.
                </p>

                {/* Trust indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Titulaire d'une licence et assuré</p>
                      <p className="text-sm text-gray-600">Entièrement certifié</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Service le jour même</p>
                      <p className="text-sm text-gray-600">Urgence disponible</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Star className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Garantie de 90 jours</p>
                      <p className="text-sm text-gray-600">Sur toutes les réparations</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+1 (571) 554-9425"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                  >
                    Call {contactData.phone}
                  </a>
                  <button
                    onClick={scrollToContact}
                    className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Planifier une réparation maintenant
                  </button>
                </div>
              </div>

              {/* Image */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;