import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mohamed Aouadi",
      image: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/315931031_10222595238093625_5330420996151063614_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=96dhNP29glEQ7kNvwEJlA8C&_nc_oc=AdnMd5BJ6wHSGKgt0Ezvo1xnJVvK9SJ8jGZGoLgTlOKoI_IXJKSmOq4g39q8yCGWomI&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=eo1TsHMrJPdJjgBlrNZc7Q&oh=00_AfnQ42mKKydnUS-JNGJDxjqyLVlgB4OoDHDTSmVX9mXcGQ&oe=694F8BE5",
      rating: 5,
      text: "Très serieux , service impeccable , bravo et bonne continuation"
    },
    {
      name: "Rania Ghouma",
      image: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/455039776_804513101862289_4130151429706995316_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DwO2gPVNs64Q7kNvwHPmgZJ&_nc_oc=Adkkg2wwBpXRHXtmbdjP2kdd7wl-BGEhZdIelWN7oOkY6wYYwgIRecKlbsPyntm9rFE&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=8tWztPWU0EfsnUBpJQzqzQ&oh=00_AflABDJvBwsL0IRNPeYTi5jLAQr9vlTQi25e2e0K9oqa-Q&oe=694F96DC",
      rating: 5,
      text: "Intervention rapide, diagnostic précis et service de qualité. Une société fiable et compétente. Une équipe très professionnelle et à l’écoute . Service professionnel rapide et efficace.  travail tres bien soigné.. Merci pour votre sérieux et votre gentillesse. Je recommande vivement .. 👍 top"
    },
    {
      name: "Emily Rodriguez",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Outstanding customer service. They explained everything clearly and the repair was done perfectly."
    },
    {
      name: "David Thompson",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Highly recommend! Fixed my oven quickly and provided great tips for maintenance."
    },
    {
      name: "Lisa Park",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Professional, punctual, and affordable. They've become my go-to for all appliance issues."
    },
    {
      name: "Robert Wilson",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Amazing service! They diagnosed and fixed my dishwasher in under an hour. Very impressed."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real reviews from satisfied customers</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;