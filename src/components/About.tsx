import React from 'react';
import { Users, Award, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "500+",
      label: "Clients satisfaits"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "5+",
      label: "Années d'expérience"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "24/7",
      label: "Service d'urgence"
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      number: "98%",
      label: "Satisfaction client"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir Labotech Service ?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Depuis plus de 5 ans, Labotech Service est le choix de confiance pour la réparation d'électroménagers dans la région. Nos techniciens certifiés allient expertise et souci du détail pour que vos appareils fonctionnent comme au premier jour.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Techniciens agréés et certifiés</h3>
                  <p className="text-gray-600">Tous nos techniciens sont entièrement agréés, assurés et suivent une formation continue sur les dernières technologies en matière d'appareils électroménagers.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <ThumbsUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Garantie de 90 jours</h3>
                  <p className="text-gray-600">Nous garantissons notre travail avec une garantie complète de 90 jours sur toutes les réparations et les pièces de rechange.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service le jour même</h3>
                  <p className="text-gray-600">La plupart des réparations sont effectuées le jour même. Nous avons en stock dans nos camions les pièces courantes pour des réparations immédiates.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-700 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <img
              src="https://appliancerepairexpert.ca/wp-content/webp-express/webp-images/uploads/2022/01/Hero-img-4.jpg.webp"
              alt="CozyTech repair technician working"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-1/503392972_1249761873407173_1138833350638458352_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=cgaUu6c6np8Q7kNvwH8ZpIv&_nc_oc=AdlWKgmAArkmVqwX5vxHgm0i01eE7KLAwhMmkgO-9-6hi73HxDix19A2-rAmZKsG0CM&_nc_zt=24&_nc_ht=scontent.ftun8-1.fna&_nc_gid=l8UMtwlMFQU7qDoxfWN-xQ&oh=00_AfkrQoIyVemiO0Deo6CG6WyQIjPaDsubbvb7k3NwEqOdhA&oe=694FCE16"
                  alt="Customer testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Mzoughi Taoufike</p>
                  <div className="flex text-orange-500">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "شهادة حق ما شاء الله عليكم كامل المجموعة اخلاق عالية وخدمة وإتقان وثقة كبيرة وكنتو عند حسن الضن الحق متع ربي هزولي الماكينة متاعي صلحوها وجابوهالي في أحسن حال ونشكر شكرا خاص لخونا محمد الي تعاملت معاه مباشره علي حسن اخلاقو وربي يباركلك"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;