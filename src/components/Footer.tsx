import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">À propos</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400">Notre mission</Link></li>
              <li><Link to="/how-it-works" className="hover:text-blue-400">Comment ça marche</Link></li>
              <li><Link to="/values" className="hover:text-blue-400">Nos valeurs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Éducateurs</h4>
            <ul className="space-y-2">
              <li><Link to="/become-trainer" className="hover:text-blue-400">Devenir éducateur</Link></li>
              <li><Link to="/benefits" className="hover:text-blue-400">Avantages</Link></li>
              <li><Link to="/testimonials" className="hover:text-blue-400">Témoignages</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Aide</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-blue-400">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
              <li><Link to="/support" className="hover:text-blue-400">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-blue-400">Conditions d'utilisation</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400">Politique de confidentialité</Link></li>
              <li><Link to="/legal" className="hover:text-blue-400">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Plateforme Éducateurs Canins. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;