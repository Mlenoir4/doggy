import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Calendar, Clock, Award, MessageCircle, ChevronLeft, Phone, Mail, Globe } from 'lucide-react';

const TrainerProfile = () => {
  const { id } = useParams();

  // Exemple de données (à remplacer par des données réelles)
  const trainer = {
    id: parseInt(id || '1'),
    name: 'Sophie Martin',
    location: 'Paris, France',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400',
    bio: "Éducatrice canine certifiée avec plus de 10 ans d'expérience. Spécialisée dans le comportement canin et la rééducation des chiens anxieux ou agressifs.",
    specialties: ['Comportement', 'Obéissance', 'Chiots', 'Rééducation'],
    certifications: ['Certificat de capacité animale', 'Formation PECCRAM', 'Membre MFEC'],
    experience: '10 ans',
    languages: ['Français', 'Anglais'],
    pricing: {
      individual: 65,
      group: 35,
      package: {
        sessions: 5,
        price: 275,
        discount: 15
      }
    },
    availability: ['Lundi - Vendredi: 9h - 18h', 'Samedi: 9h - 14h'],
    contact: {
      phone: '+33 6 12 34 56 78',
      email: 'sophie.martin@educanin.fr',
      website: 'www.sophie-martin-educanin.fr'
    },
    recentReviews: [
      {
        id: 1,
        author: 'Jean Dupont',
        rating: 5,
        date: '15 mars 2024',
        comment: "Sophie a fait des merveilles avec notre jeune berger allemand. Son approche est professionnelle et bienveillante."
      },
      {
        id: 2,
        author: 'Marie Lambert',
        rating: 5,
        date: '10 mars 2024',
        comment: "Excellente éducatrice, très pédagogue. Notre chien a fait d'énormes progrès en quelques séances."
      }
    ]
  };

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-blue-600 mb-6"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Retour aux résultats</span>
          </button>
          
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-48 h-48 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{trainer.name}</h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>{trainer.location}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex gap-3">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Contacter
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Réserver
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 font-semibold">{trainer.rating}</span>
                </div>
                <span className="text-gray-600">({trainer.reviews} avis)</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{trainer.experience} d'expérience</span>
              </div>
              <p className="text-gray-700">{trainer.bio}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Specialties */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                Spécialités
              </h2>
              <div className="flex flex-wrap gap-2">
                {trainer.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Avis récents</h2>
              <div className="space-y-6">
                {trainer.recentReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{review.author}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span>{trainer.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span>{trainer.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-gray-400" />
                  <span>{trainer.contact.website}</span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Tarifs</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Séance individuelle</span>
                  <span className="font-semibold">{trainer.pricing.individual}€/h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cours collectif</span>
                  <span className="font-semibold">{trainer.pricing.group}€/h</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Pack {trainer.pricing.package.sessions} séances</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Économisez {trainer.pricing.package.discount}% sur les séances individuelles
                    </p>
                    <div className="flex justify-between items-center">
                      <span>Prix total</span>
                      <span className="font-semibold">{trainer.pricing.package.price}€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Disponibilités</h2>
              <ul className="space-y-2">
                {trainer.availability.map((time, index) => (
                  <li key={index} className="text-gray-700">{time}</li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Certifications</h2>
              <div className="space-y-3">
                {trainer.certifications.map((certification, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg"
                  >
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>{certification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfile;