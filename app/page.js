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
      <div className="w-96 h-12 rounded-full bg-amber-50 relative bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">

        <div className="absolute top-0 left-0 w-64 h-12 rounded-full bg-orange-800"></div>
      </div>
      <p className="text-lg mt-8 justify-center items-center">Are you ready to be among the first to experience the future of learning?</p>
      <p className="text-lg mt-4 text-orange-800 justify-center items-center">
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
