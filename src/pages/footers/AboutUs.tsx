const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 ">
      <h1 className="text-3xl font-bold text-center mb-8 ">À propos de nous</h1>
      <p className="text-lg text-gray-700 mb-6 ">
        Notre plateforme vise à mettre en relation les individus avec des éducateurs canins qualifiés, assurant la qualité des services grâce à un système d'évaluation fiable. Nous nous efforçons de faciliter la recherche du meilleur éducateur pour vos besoins.
      </p>
      <h2 className="text-2xl font-semibold mb-4 ">Fonctionnalités clés</h2>
      <ul className="list-disc list-inside text-gray-700 ">
        <li>Gestion des utilisateurs : Inscription et connexion faciles, avec des profils d'utilisateurs détaillés et un système de notation/avis.</li>
        <li>Gestion des éducateurs : Les éducateurs peuvent créer et gérer des profils détaillés présentant leurs qualifications, services, tarifs et localisation.</li>
        <li>Recherche et connexion : Notre plateforme offre des options de filtrage avancées par localisation, spécialité, évaluations et prix, ainsi qu'un système pour mettre en avant les meilleurs éducateurs et une messagerie interne pour une communication directe.</li>
        <li>Sécurité et modération : Nous vérifions les profils des éducateurs pour les certifications et qualifications et avons mis en place des mesures pour signaler les faux avis et les abus.</li>
      </ul>
    </div>
  );
};

export default AboutUs;