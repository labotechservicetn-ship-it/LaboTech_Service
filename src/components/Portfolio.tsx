import React from "react";

// Load all JSON files in src/content/portfolio
const modules = import.meta.glob("../content/portfolio/*.json", { eager: true });

const portfolioList = Object.values(modules).map((mod: any) => mod.default ?? mod);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600">See the quality of our repair work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioList.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
