import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Trouvez l'éducateur canin idéal
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connectez-vous avec des éducateurs canins qualifiés près de chez vous pour offrir la meilleure éducation à votre compagnon à quatre pattes.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/search"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Trouver un éducateur
          </Link>
          <Link
            to="/become-trainer"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
          >
            Devenir éducateur
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Search className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Recherche Simplifiée</h3>
              <p className="text-gray-600">
                Trouvez rapidement un éducateur qualifié selon vos critères et votre localisation.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professionnels Vérifiés</h3>
              <p className="text-gray-600">
                Tous nos éducateurs sont certifiés et leurs compétences sont vérifiées.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Star className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Avis Vérifiés</h3>
              <p className="text-gray-600">
                Consultez les retours d'expérience des autres propriétaires de chiens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à commencer l'aventure ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté et donnez à votre chien l'éducation qu'il mérite.
          </p>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            S'inscrire gratuitement
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;