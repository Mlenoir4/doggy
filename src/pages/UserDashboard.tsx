import React, { useState } from 'react';
import { Calendar, MessageSquare, Settings, Bell, User } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('appointments');

  // Exemple de données (à remplacer par des données réelles)
  const appointments = [
    {
      id: 1,
      trainer: 'Sophie Martin',
      date: '2024-03-25',
      time: '14:00',
      type: 'Séance individuelle',
      status: 'confirmed',
    },
    {
      id: 2,
      trainer: 'Thomas Bernard',
      date: '2024-03-28',
      time: '10:30',
      type: 'Cours collectif',
      status: 'pending',
    },
  ];

  const messages = [
    {
      id: 1,
      from: 'Sophie Martin',
      message: 'Bonjour, je confirme notre rendez-vous de lundi prochain.',
      date: '2024-03-20',
      unread: true,
    },
    {
      id: 2,
      from: 'Thomas Bernard',
      message: 'Merci pour votre inscription au cours collectif.',
      date: '2024-03-19',
      unread: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-64">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-900">Jean Dupont</h2>
                <p className="text-sm text-gray-600">Propriétaire</p>
              </div>
            </div>
            <nav className="space-y-2">
              <button
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  activeTab === 'appointments'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('appointments')}
              >
                <Calendar className="h-5 w-5" />
                Rendez-vous
              </button>
              <button
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  activeTab === 'messages'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('messages')}
              >
                <MessageSquare className="h-5 w-5" />
                Messages
              </button>
              <button
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  activeTab === 'profile'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                <User className="h-5 w-5" />
                Profil
              </button>
              <button
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  activeTab === 'notifications'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('notifications')}
              >
                <Bell className="h-5 w-5" />
                Notifications
              </button>
              <button
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  activeTab === 'settings'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings className="h-5 w-5" />
                Paramètres
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {activeTab === 'appointments' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Mes rendez-vous</h2>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{appointment.trainer}</h3>
                        <p className="text-gray-600">{appointment.type}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          appointment.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {appointment.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Messages</h2>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`border border-gray-200 rounded-lg p-4 ${
                      message.unread ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{message.from}</h3>
                      <span className="text-sm text-gray-600">{message.date}</span>
                    </div>
                    <p className="text-gray-700">{message.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Mon profil</h2>
              {/* Contenu du profil */}
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Notifications</h2>
              {/* Contenu des notifications */}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Paramètres</h2>
              {/* Contenu des paramètres */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;