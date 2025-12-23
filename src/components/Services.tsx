import React from "react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

// Load all JSON files in src/content/services using Vite's import.meta.glob
const modules = import.meta.glob("../content/services/*.json", { eager: true });

const serviceList = Object.values(modules).map((mod: any) => mod.default ?? mod);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos services de réparation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous réparons toutes les grandes marques et tous les modèles d'électroménager avec des techniciens experts, des pièces d'origine et des garanties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service: any, index: number) => {
            const Icon = Icons[service.icon as keyof typeof Icons] as LucideIcon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <div className="text-blue-700">{Icon && <Icon className="h-12 w-12" />}</div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Pannes courants:</h4>
                    <ul className="space-y-2">
                      {service.features?.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
