// src/pages/HowItWorks.tsx
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">How It Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">For Pet Owners</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Easily search for qualified dog trainers based on location, specialty, ratings, and price.</li>
            <li>Read transparent reviews and ratings from other users to make informed decisions.</li>
            <li>Enjoy a simple and intuitive platform to find the right trainer for your needs.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">For Trainers</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Showcase the quality of your services and stand out from other trainers.</li>
            <li>Create a detailed profile including your bio, certifications, services, pricing, and geographical area.</li>
            <li>Connect with pet owners looking for your specific expertise.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;