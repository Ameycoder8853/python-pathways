"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleBookSpot = () => {
    router.push('/sign-up');
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">Python Pathways</h1>
      <p className="text-lg mb-8">The Future of Learning is Almost Here</p>
      <div className="w-96 h-12 rounded-full bg-amber-50 relative">

        <div className="absolute top-0 left-0 w-64 h-12 rounded-full bg-orange-800"></div>
      </div>
      <p className="text-lg mt-8">Are you ready to be among the first to experience the future of learning?</p>
      <p className="text-lg mt-4 text-orange-800">
        Reserve your seat at the Python Pathways launch event and be a part of something revolutionary.
      </p>
      <button
        onClick={handleBookSpot}
        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-2xl mt-8"
      >
        Book Your Spot
      </button>
    </div>
  );
};

export default Home;
