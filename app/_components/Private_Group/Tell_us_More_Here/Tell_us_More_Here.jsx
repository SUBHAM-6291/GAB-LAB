'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { FaCalendarAlt } from 'react-icons/fa';
import { GiCook, GiMeal } from 'react-icons/gi';
import { Toaster, toast } from 'sonner';
import '@/components/ui/professional-ui.css';

// Reusable Form Input Component
const FormInput = ({ label, name, type = 'text', placeholder, required, onChange, value, error }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm font-medium mb-2 font-serif text-gray-200">
      {label} {required && <span className="text-amber-500">*</span>}
    </label>
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`bg-dark-card border border-gray-600 text-white px-4 py-3 rounded-md focus:ring-1 focus:ring-amber-400 transition-all duration-200 ${error ? 'border-red-500' : ''}`}
      placeholder={placeholder}
      aria-required={required}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
    />
    {error && (
      <span id={`${name}-error`} className="text-xs text-red-400 mt-1">
        {error}
      </span>
    )}
  </div>
);

// Reusable Time Slot Button Component
const TimeSlotButton = ({ slot, isSelected, onClick }) => (
  <button
    type="button"
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 h-12 cursor-pointer ${
      isSelected
        ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 shadow-md'
        : 'bg-dark-card text-gray-200 border border-gray-600 hover:bg-gradient-to-r hover:from-amber-300 hover:to-amber-500 hover:text-gray-900'
    }`}
    onClick={() => onClick(slot)}
    aria-pressed={isSelected}
  >
    {slot}
  </button>
);

const TellUsMoreHere = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    guests: '',
    date: '',
    description: '',
  });
  const [errors, setErrors] = useState({});

  // Video configurations
  const videoSources = useMemo(
    () => ({
      page1: {
        src: '/2795388-uhd_2560_1440_25fps.mp4',
        className: 'w-full object-cover lg:mt-70 rounded-b-3xl h-[40vh] sm:h-[60vh] md:h-[70vh] lg:rounded-xl sm:rounded-md lg:h-[80vh] xl:h-[62vh] 2xl:h-[62vh]',
        poster: '/video-poster.jpg',
      },
      page2: {
        src: '/3201691-hd_1920_1080_25fps.mp4', // Ensure this file exists in public/
        className: 'w-full object-cover lg:mt-70  xl:mt-68  2xl:mt-112 rounded-b-3xl h-[40vh] sm:h-[60vh] md:h-[70vh] lg:rounded-xl sm:rounded-md lg:h-[42vh] xl:h-[48vh] 2xl:h-[36vh]',
        poster: '/second-video-poster.jpg', // Use a valid image file
      },
    }),
    []
  );

  // Validation
  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'guests'];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} is required`;
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    if (formData.guests && (isNaN(formData.guests) || formData.guests < 1)) {
      newErrors.guests = 'Number of guests must be at least 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setCurrentPage(1);
    } else {
      toast.error('Please complete all required fields.');
    }
  };

  const handlePrevious = () => setCurrentPage(0);

  const handleSubmit = () => {
    if (selectedTimeSlots.length === 0) {
      toast.error('Please select at least one time slot.');
      return;
    }
    if (!formData.description) {
      setErrors({ description: 'Event description is required' });
      toast.error('Please provide details about your event.');
      return;
    }

    setIsSubmitted(true);
    toast.success('Form submitted successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleDateChange = (field, value, part) => {
    const current = formData[field]?.split('-') || ['DD', 'MM', 'YYYY'];
    const updated = { DD: current[0], MM: current[1], YYYY: current[2], [part]: value };
    setFormData((prev) => ({
      ...prev,
      [field]: `${updated.DD}-${updated.MM}-${updated.YYYY}`,
    }));
  };

  const timeSlots = [
    'Morning: 10:00–13:00',
    'Midday: 14:00–17:00',
    'Evening: 18:00–21:00',
    'Other',
  ];

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark-bg text-white px-6 py-6">
        <div className="text-center px-8 py-8 bg-dark-card rounded-xl shadow-2xl max-w-md w-full">
          <Image
            src="/Gastronmic_Arts_Barcelona_Logo.avif"
            alt="Gastronomic Arts Barcelona Logo"
            width={120}
            height={60}
            className="mx-auto mb-4"
          />
          <GiMeal size={40} className="mx-auto text-amber-400 mb-4" />
          <h2 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-2">
            Thank You!
          </h2>
          <p className="text-gray-300 mb-6 text-sm italic">
            We’ll contact you soon to craft your culinary journey.
          </p>
          <a
            href="/private-group"
            className="inline-block px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-500 transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row-reverse min-h-screen bg-dark-bg text-white">
      <div className="flex-1 relative">
        {currentPage === 0 ? (
          <video
            key="page1-video"
            autoPlay
            muted
            loop
            playsInline
            className={videoSources.page1.className}
            poster={videoSources.page1.poster}
            loading="lazy"
          >
            <source src={videoSources.page1.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <video
            key="page2-video"
            autoPlay
            muted
            loop
            playsInline
            className={videoSources.page2.className}
            poster={videoSources.page2.poster}
            loading="lazy"
          >
            <source src={videoSources.page2.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>

      <div className="flex-1 px-6 py-6 sm:px-10 sm:py-10 lg:px-12 lg:py-12 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto w-full">
          <Image
            src="/Gastronmic_Arts_Barcelona_Logo.avif"
            alt="Gastronomic Arts Barcelona Logo"
            width={140}
            height={60}
            className="mb-6"
          />
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-2 flex items-center gap-2">
            <GiCook className="text-amber-400" />
            Tell Us More
          </h1>
          <p className="text-gray-300 text-sm mb-8">
            Let’s start planning your private culinary experience.
          </p>

          {currentPage === 0 ? (
            <div className="space-y-5 animate-slide-up">
              {[
                { name: 'firstName', label: 'First Name', placeholder: 'Enter your first name' },
                { name: 'lastName', label: 'Last Name', placeholder: 'Enter your last name' },
                { name: 'email', label: 'Email Address', placeholder: 'Enter your email address', type: 'email' },
                { name: 'phone', label: 'Phone Number', placeholder: 'Enter your phone number', type: 'tel' },
                { name: 'guests', label: 'Number of Guests', placeholder: 'Enter number of guests', type: 'number' },
              ].map((field) => (
                <FormInput
                  key={field.name}
                  {...field}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required
                  error={errors[field.name]}
                />
              ))}

              {['dob', 'date'].map((field) => (
                <div key={field}>
                  <label className="text-sm font-medium mb-2 font-serif text-gray-200 block">
                    {field === 'dob' ? 'Date of Birth' : 'Event Date'} <span className="text-amber-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {['DD', 'MM', 'YYYY'].map((part, idx) => (
                      <Select
                        key={part}
                        onValueChange={(val) => handleDateChange(field, val, part)}
                      >
                        <SelectTrigger className="w-24 h-12 bg-dark-card border border-gray-600 text-white text-sm rounded-lg">
                          <SelectValue placeholder={part} />
                        </SelectTrigger>
                        <SelectContent className="bg-dark-card text-white border-gray-600">
                          {[...Array(part === 'DD' ? 31 : part === 'MM' ? 12 : 10)].map((_, i) => {
                            const val = part === 'YYYY' ? 2025 + i : String(i + 1).padStart(2, '0');
                            return <SelectItem key={val} value={val}>{val}</SelectItem>;
                          })}
                        </SelectContent>
                      </Select>
                    ))}
                    <Popover>
                      <PopoverTrigger asChild>
                        <button aria-label="Open calendar" className="text-gray-300 hover:text-amber-400 transition-colors">
                          <FaCalendarAlt className="h-5 w-5" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="bg-dark-card border-gray-600 text-white">
                        <Calendar
                          mode="single"
                          initialFocus
                          onSelect={(date) =>
                            setFormData((prev) => ({
                              ...prev,
                              [field]: date.toISOString().split('T')[0],
                            }))
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              ))}

              <button
                type="button"
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-500 transition-all duration-300"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          ) : (
            <div className="space-y-6 animate-slide-up">
              <div>
                <label className="block text-sm font-medium mb-2 font-serif text-gray-200">
                  Preferred Time Slot(s) <span className="text-amber-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timeSlots.map((slot) => (
                    <TimeSlotButton
                      key={slot}
                      slot={slot}
                      isSelected={selectedTimeSlots.includes(slot)}
                      onClick={(s) =>
                        setSelectedTimeSlots((prev) =>
                          prev.includes(s) ? prev.filter((t) => t !== s) : [...prev, s]
                        )
                      }
                    />
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2 font-serif text-gray-200">
                  Tell Us About Your Event <span className="text-amber-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-dark-card text-white rounded-lg border border-gray-600 text-sm focus:ring-2 focus:ring-amber-400 transition-all duration-200 h-32 resize-none ${errors.description ? 'border-red-500' : ''}`}
                  placeholder="Share details about your event..."
                  aria-required="true"
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? 'description-error' : undefined}
                />
                {errors.description && (
                  <span id="description-error" className="text-xs text-red-400 mt-1">
                    {errors.description}
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <button
                  type="button"
                  className="px-6 py-3 bg-dark-card border border-gray-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-600 hover:text-gray-900 transition-all duration-300"
                  onClick={handlePrevious}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-500 transition-all duration-300"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Toaster richColors position="top-right" />
    </div>
  );
};

export default TellUsMoreHere;


// lzmxcim