'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

const Tell_us_More_Here = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    location: '',
    guests: '',
    requests: '',
    budget: '',
    theme: '',
    catering: '',
    entertainment: '',
    duration: '',
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentPage < 1) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const page1Fields = [
    { name: 'eventType', label: 'Event Type' },
    { name: 'date', label: 'Date' },
    { name: 'location', label: 'Location' },
    { name: 'guests', label: 'Number of Guests' },
    { name: 'requests', label: 'Special Requests' },
  ];

  const page2Fields = [
    { name: 'budget', label: 'Budget' },
    { name: 'theme', label: 'Theme' },
    { name: 'catering', label: 'Catering Preferences' },
    { name: 'entertainment', label: 'Entertainment' },
    { name: 'duration', label: 'Event Duration' },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-1/5">
          <div className="w-full bg-gray-700 h-2 rounded overflow-hidden">
            <div
              className="h-full bg-yellow-400"
              style={{
                width: '0%',
                animation: 'loading 3s ease-in-out forwards',
              }}
            />
          </div>
          <style>
            {`
              @keyframes loading {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}
          </style>
        </div>
      </div>
    );
  }

  if (!showForm) {
    return (
      <div className="flex min-h-screen bg-black text-white">
        {/* Left Section */}
        <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-black">
          <Image
            src="/Gastronmic_Arts_Barcelona_Logo.avif"
            alt="Logo"
            width={120}
            height={50}
            className="mb-6"
          />
          <h1 className="text-2xl md:text-3xl font-normal text-white mb-4">
            <span className="font-bold text-yellow-400">
              Ready to spice up your next group gathering?
            </span>
            <span className="block text-yellow-400">
              Then tell us a little more about your event.
            </span>
          </h1>
          <p className="text-sm text-[#CCCCCC] mb-6 max-w-xl">
            Whether it’s a private class, special event, corporate bash, or a team-building adventure, we guarantee an authentic, deliciously fun and creatively vibrant experience.
          </p>
          <button
            className="px-6 py-3 bg-yellow-400 text-black text-sm font-semibold rounded-full hover:bg-yellow-300 flex items-center gap-2 w-fit"
            onClick={() => setShowForm(true)}
          >
            Tell us more here <span className="text-xs">press Enter ➔</span>
          </button>
        </div>

        {/* Right Video Section */}
        <div className="md:w-1/2 w-full flex  items-stretch">
          <video
            autoPlay
            muted
            loop
            className="w-full  h-[70vh] object-cover"
            poster="video-poster.jpg"
          >
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }

  // Form Section
  return (
    <div className="p-6 md:p-12 bg-black text-white min-h-screen">
      <h1 className="text-yellow-400 text-2xl mb-4">
        Ready to spice up your next group gathering? Tell us more about your event.
      </h1>
      <p className="mb-6 text-[#CCCCCC]">
        We guarantee an authentic, delicious, fun, and creatively vibrant experience.
      </p>

      <div className="space-y-4">
        {(currentPage === 0 ? page1Fields : page2Fields).map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium mb-1">
              {field.label}
            </label>
            <Input
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700 text-white"
              placeholder={`Enter ${field.label.toLowerCase()}`}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        {currentPage > 0 && (
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        {currentPage < 1 ? (
          <button
            className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300"
            onClick={() => alert('Form Submitted')}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Tell_us_More_Here;