// app/thanks/page.js
import React from 'react';

const Thanks = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">
        <span role="img" aria-label="celebration" className="mr-2">🎉</span>
        <span className="">
          You’re Honored!
        </span>
        <span role="img" aria-label="celebration" className="ml-2">🎉</span>
      </h1>
      <p className="text-3xl mt-10 mb-4">
        Thank you for reserving your seat at this special event.
      </p>
      <p>
      We’re excited to welcome you to the experience that will redefine everything.
      </p>
      <p className="text-md mt-6 text-orange-500">
        Keep an eye on your inbox for the event details. We’ll be sending you updates shortly!
      </p>
    </div>
  );
};

export default Thanks;
