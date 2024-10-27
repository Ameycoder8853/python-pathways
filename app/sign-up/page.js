"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      console.log('Attempting to submit:', formData);

      // Add document to 'registrations' collection
      const docRef = await addDoc(collection(db, 'registrations'), {
        ...formData,
        createdAt: new Date().toISOString(),
        status: 'pending'
      });

      console.log('Document written with ID:', docRef.id);
      setMessage('Successfully registered!');
      setFormData({ name: '', email: '', phone: '' });

      // Redirect to the thank you page after successful registration
      router.push('/thanks');
    } catch (error) {
      console.error('Detailed error:', error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-black rounded-lg shadow-md p-8 w-120 text-white text-center">
        <h2 className="text-4xl font-bold mb-4 text-white text-center">
          Join us at the Python Pathways Launch Event!
        </h2>
        <div className='flex justify-center mb-10'>
          <h2 className="text-2xl mb-6 font-bold">Claim Your Seat of Honor</h2>
        </div>
        <form onSubmit={handleSubmit} className="max-w-full">
          <div className="mb-10 flex items-center gap-1 justify-start">
            <label htmlFor="name" className="block text-xl font-medium w-20">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded-full w-[50%] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black"
              required
            />
          </div>
          <div className="mb-10 flex items-center gap-1 justify-start">
            <label htmlFor="email" className="block text-xl font-medium w-20">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded-full w-[50%] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black"
              required
            />
          </div>
          <div className="mb-10 flex items-center gap-1 justify-start">
            <label htmlFor="phone" className="block text-xl font-medium w-20">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded-full w-[50%] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black"
              required
            />
          </div>
          {message && (
            <p className={`text-center mb-4 ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </p>
          )}
          <div className="flex items-center justify-center w-[100%]">
            <div className="justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-800 hover:bg-orange-700 text-white font-bold py-2 px-12 rounded-full disabled:opacity-50 flex items-center justify-center"
                style={{
                  boxShadow: '0 0 10px rgba(255, 69, 0, 0.8), 0 0 20px rgba(255, 69, 0, 0.6), 0 0 30px rgba(255, 69, 0, 0.4)',
                }}
              >
                {isSubmitting ? 'Registering...' : 'Honour me'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
