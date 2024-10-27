"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleBookSpot = () => {
    router.push('/sign-up');
  };

  return (
<div className="p-5 w-[95%] items center bg-black">
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4 text-center">Python Pathways</h1>
      <p className="text-lg mb-8">The Future of Learning is Almost Here</p>
      <div className="w-96 h-12 rounded-full bg-white relative from-red-400 via-red-500 to-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-900 shadow-2xl shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 bg-white w-[90%] items-center p-5">
       <div
          className="absolute top-0 left-0 h-12 w-64 rounded-full bg-orange-800"
          style={{
            boxShadow: '0 0 10px rgba(255, 69, 0, 0.8), 0 0 20px rgba(255, 69, 0, 0.6), 0 0 30px rgba(255, 69, 0, 0.4)',
          }}
        ></div>
      </div>
      <p className="text-xl mt-8 text-center">Are you ready to be among the first to experience the future of learning?</p>
      <p className="text-lg mt-4 text-orange-800 text-center">
        Reserve your seat at the Python Pathways launch event and be a part of something revolutionary.
      </p>
      <button
        onClick={handleBookSpot}
        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-2xl mt-8"
      >
        Book Your Spot
      </button>
    </div>
</div>
  );
};

export default Home;
