import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Wrench, X } from 'lucide-react';
import contactData from "../content/contact.json";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    applianceType: '',
    address: '',
    description: ''
  });

  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Build FormData including form-name
    const data = new FormData();
    data.append('form-name', 'request-service');
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value as string);
    });

    try {
      await fetch('/', {
        method: 'POST',
        body: data
      });
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        applianceType: '',
        address: '',
        description: ''
      });
    } catch (err) {
      alert('There was an error submitting the form. Please try again.');
      console.error(err);
    }
  };

  const selectLocation = (address: string) => {
    setFormData({ ...formData, address });
    setIsMapModalOpen(false);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Merci!</h3>
            <p className="text-gray-700">Votre demande de service a bien été enregistrée. Nous vous contacterons trés rapidement.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Prendre Contact</h2>
          <p className="text-xl text-gray-600">Besoin de faire réparer votre appareil électroménager ? Contactez-nous dès aujourd'hui !</p>
          <h2 className="text-2xl font-bold text-blue-600 mt-8">Outre une gamme complète de services de réparation, Alliance Labotech Service propose également les services suivants pour différents appareils :</h2>
          <div className="flex items-center justify-center h-16">
            <Wrench className="h-8 w-8 text-blue-400 mr-2" />
          </div>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Demander un service</h3>
            <form
              name="request-service"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="request-service" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type De Service *</label>
                  <select
                    name="applianceType"
                    value={formData.applianceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez le service</option>
                    <option value="refrigerator">Réfrigérateur</option>
                    <option value="washing-machine">Machine à laver</option>
                    <option value="dryer">Séchoir</option>
                    <option value="dishwasher">Lave-vaisselle</option>
                    <option value="oven-range">Four/Cuisinière</option>
                    <option value="microwave">Micro-ondes</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Address *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setIsMapModalOpen(true)}
                    className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <MapPin className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description du problème *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Describe the issue with your appliance..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Demander un Service</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Appliances stay unchanged */}
          <div>
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-blue-600 mr-4" />
            <div>
              <div className="font-semibold">Téléphone</div>
              <div className="text-gray-600">{contactData.phone}</div>
            </div>
          </div>

          <div className="flex items-center">
            <Mail className="h-6 w-6 text-blue-600 mr-4" />
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-gray-600">{contactData.email}</div>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-blue-600 mr-4" />
            <div>
              <div className="font-semibold">Service Adresse</div>
              {contactData.serviceAreas.map((area: string, idx: number) => (
                <div key={idx} className="flex items-center mb-2">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-[10px] mr-2">
                    ✓
                  </span>
                  <div className="text-gray-600">{area}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <Clock className="h-6 w-6 text-blue-600 mr-4" />
            <div>
              <div className="font-semibold">Horaires</div>
              <div className="text-gray-600">{contactData.hours}</div>
            </div>
          </div>
        </div>
      </div>
    
            {/* Appliances We Repair */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="font-semibold mb-4">Nous réparons toutes les marques et tous les modèles!</div>
              
              <div className="flex items-center mb-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-[10px] mr-2">
                  ✓
                </span>
                <div className="text-gray-600">Réfrigérateur</div>
              </div>

              <div className="flex items-center mb-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-[10px] mr-2">
                  ✓
                </span>
                <div className="text-gray-600">Congélateur</div>
              </div>

              <div className="flex items-center mb-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-[10px] mr-2">
                  ✓
                </span>
                <div className="text-gray-600">Machine à laver</div>
              </div>

              <div className="flex items-center mb-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-[10px] mr-2">
                  ✓
                </span>
                <div className="text-gray-600">Séchoir</div>
              </div>

              <div className="flex items-center mb-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-[10px] mr-2">
                  ✓
                </span>
                <div className="text-gray-600">Cuisinière</div>
              </div>

              <div className="flex items-center mb-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-[10px] mr-2">
                  ✓
                </span>
                <div className="text-gray-600">Carte éléctronique</div>
              </div>

              <div className="flex items-center mb-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-[10px] mr-2">
                  ✓
                </span>
                <div className="text-gray-600">Four</div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
       

      {/* Map Modal stays unchanged */}
      {isMapModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold">Sélectionnez votre emplacement</h3>
              <button
                onClick={() => setIsMapModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1635959542165!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Picker"
              ></iframe>
              
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => selectLocation('123 Main St, New York, NY 10001')}
                  className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left"
                >
                  <div className="font-semibold">Tunis</div>
                  <div className="text-gray-600">Ezzouhour Route X</div>
                </button>
               
                
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
