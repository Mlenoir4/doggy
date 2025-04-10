import React from 'react';
import { Link } from 'react-router-dom';
import { DogIcon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <DogIcon className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ÉduCanin</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="text-gray-600 hover:text-blue-600">Rechercher</Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">Connexion</Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              S'inscrire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/search"
                className="text-gray-600 hover:text-blue-600 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Rechercher
              </Link>
              <Link
                to="/login"
                className="text-gray-600 hover:text-blue-600 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Connexion
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                S'inscrire
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;