import React, { useState } from 'react';
import { Search as SearchIcon, MapPin, Filter, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [location, setLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Exemple de données pour les éducateurs (à remplacer par des données réelles)
  const trainers = [
    {
      id: 1,
      name: 'Sophie Martin',
      location: 'Paris',
      rating: 4.8,
      reviews: 124,
      specialties: ['Comportement', 'Obéissance', 'Chiots'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      id: 2,
      name: 'Thomas Bernard',
      location: 'Lyon',
      rating: 4.9,
      reviews: 89,
      specialties: ['Rééducation', 'Agressivité'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    },
  ];

  const handleTrainerClick = (trainerId: number) => {
    navigate(`/trainer/${trainerId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un éducateur..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Localisation"
              className="w-full md:w-64 pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtres
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-6">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition hover:shadow-lg"
            onClick={() => handleTrainerClick(trainer.id)}
          >
            <div className="flex gap-4">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{trainer.name}</h3>
                <div className="flex items-center gap-1 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{trainer.location}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 font-semibold">{trainer.rating}</span>
                  </div>
                  <span className="text-gray-600">({trainer.reviews} avis)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;