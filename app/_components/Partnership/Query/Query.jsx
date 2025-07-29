'use client';

import React, { useState } from 'react';
import { Toaster, toast } from 'sonner';
import Image from 'next/image';

const FormInput = ({ label, name, type = 'text', placeholder, value, onChange }) => (
  <div className="flex flex-col gap-2 group transition-all duration-300">
    <label htmlFor={name} className="text-sm font-semibold text-white tracking-wide">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-[#111] border border-[#2a2a2a] text-white placeholder:text-gray-400 px-4 py-3 rounded-md focus:ring-1 focus:ring-amber-400 outline-none transition-all duration-300 hover:shadow-lg hover:shadow-[#2a2a2a]"
    />
  </div>
);

const FormTextarea = ({ label, name, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-2 group transition-all duration-300">
    <label htmlFor={name} className="text-sm font-semibold text-white tracking-wide">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-[#111] border border-[#2a2a2a] text-white placeholder:text-gray-400 px-4 py-3 rounded-md focus:ring-1 focus:ring-amber-400 outline-none transition-all duration-300 hover:shadow-lg hover:shadow-[#2a2a2a] resize-none h-28"
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, options }) => (
  <div className="flex flex-col gap-2 group transition-all duration-300 relative">
    <label htmlFor={name} className="text-sm font-semibold text-white tracking-wide">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-[#111] border border-[#2a2a2a] text-white px-4 py-3 rounded-md focus:ring-1 focus:ring-amber-400 outline-none appearance-none transition-all duration-300 hover:shadow-lg hover:shadow-[#2a2a2a]"
    >
      <option value="" disabled className="bg-[#111] text-gray-400">
        Select an option
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-[#111] text-white">
          {opt}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
      ▼
    </div>
  </div>
);

const QuestionnaireForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    targetAudience: '',
    reservationsEstimate: '',
    marketingChannels: [],
    hasBookingSystem: '',
    aboutCompany: '',
    bookingSystemUsed: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        marketingChannels: checked
          ? [...prev.marketingChannels, value]
          : prev.marketingChannels.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    toast.success('Form submitted successfully!');
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen w-full px-4 sm:px-10 py-16 bg-[#0b0b0b] text-white font-serif overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549921296-3a6b3b10b2e5?auto=format&fit=crop&w=1600&q=80"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10 blur-sm"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      {/* Form Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-amber-400 mb-14 tracking-tight drop-shadow-lg">
          Client Questionnaire
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Personal Info */}
          <div className="p-8 bg-[#1a1a1ad9] border border-[#2b2b2b] rounded-2xl shadow-lg space-y-8 transition hover:shadow-[#2a2a2a]">
            <h2 className="text-2xl text-amber-400 font-semibold border-b border-amber-400/30 pb-3">
              Personal Information
            </h2>
            <FormInput label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your first name" />
            <FormInput label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Your last name" />
            <FormInput label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" />
            <FormInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" />
            <FormInput label="Company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" />
          </div>

          {/* Business Details */}
          <div className="p-8 bg-[#1a1a1ad9] border border-[#2b2b2b] rounded-2xl shadow-lg space-y-8 transition hover:shadow-[#2a2a2a]">
            <h2 className="text-2xl text-amber-400 font-semibold border-b border-amber-400/30 pb-3">
              Business Details
            </h2>
            <FormSelect
              label="Primary target audience"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              options={['Leisure Travelers', 'Business Travelers', 'Luxury Travelers', 'Other']}
            />
            <FormSelect
              label="Estimated reservations next year"
              name="reservationsEstimate"
              value={formData.reservationsEstimate}
              onChange={handleChange}
              options={['1-5', '6-15', '16-35', '36-50', 'More than 50']}
            />
            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold text-white tracking-wide">
                Marketing channels (check all that apply):
              </label>
              {[
                'Social Media',
                'Email Campaigns',
                'Travel Agencies',
                'Website/SEO',
                'PPC Advertising',
                'Online Booking Platforms',
                'Other',
              ].map((ch) => (
                <label key={ch} className="flex items-center gap-3 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    name="marketingChannels"
                    value={ch}
                    checked={formData.marketingChannels.includes(ch)}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border border-gray-600 bg-[#121212] checked:bg-amber-400 checked:border-amber-400 transition-all"
                  />
                  {ch}
                </label>
              ))}
            </div>
            <FormSelect
              label="Online booking system?"
              name="hasBookingSystem"
              value={formData.hasBookingSystem}
              onChange={handleChange}
              options={['No', 'Yes', 'Not sure']}
            />
            <FormTextarea
              label="Tell us about your company"
              name="aboutCompany"
              value={formData.aboutCompany}
              onChange={handleChange}
              placeholder="Share your vision or story..."
            />
            <FormInput
              label="Which booking system?"
              name="bookingSystemUsed"
              value={formData.bookingSystemUsed}
              onChange={handleChange}
              placeholder="e.g., Resy, OpenTable"
            />
            <FormTextarea
              label="Additional Notes (Optional)"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Any extra comments..."
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-amber-400 text-black px-10 py-3 text-lg rounded-full font-semibold hover:bg-amber-300 hover:shadow-lg hover:shadow-[#2a2a2a] transition-all"
          >
            Submit Form
          </button>
        </div>
      </div>

      <Toaster richColors position="top-right" />
    </div>
  );
};

export default QuestionnaireForm;