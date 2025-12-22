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
              Why Choose CozyTech for Your Appliance Repairs?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 15 years, CozyTech has been the trusted choice for appliance repair 
              services in the area. Our certified technicians combine expertise with genuine 
              care to get your appliances running like new.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Licensed & Certified Technicians</h3>
                  <p className="text-gray-600">All our technicians are fully licensed, insured, and continuously trained on the latest appliance technologies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <ThumbsUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">90-Day Warranty</h3>
                  <p className="text-gray-600">We stand behind our work with a comprehensive 90-day warranty on all repairs and replacement parts.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Most repairs completed the same day. We carry common parts in our trucks for immediate fixes.</p>
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
                "CozyTech fixed my refrigerator the same day I called. Professional, 
                affordable, and friendly service!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;