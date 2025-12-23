import React from 'react';
import { Users, Award, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "500+",
      label: "Happy Customers"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "24/7",
      label: "Emergency Service"
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      number: "98%",
      label: "Customer Satisfaction"
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
                  src="https://images.pexels.com/photos/6195116/pexels-photo-6195116.jpeg"
                  alt="Customer testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
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