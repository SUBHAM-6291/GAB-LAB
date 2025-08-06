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
import { FaCalendarAlt, FaUtensils, FaCheckCircle, FaArrowRight, FaArrowLeft, FaPaperPlane, FaHome } from 'react-icons/fa'; // Updated icons
import { Toaster, toast } from 'sonner';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import SectionContent from '../../Utilites/SectionContent/SectionContent';
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

// Outline Button Component
export const OutlineBtn = ({
  label = "Click Me",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative text-white text-[16px] font-medium px-6 py-3 rounded-md border border-yellow-300 hover:border-yellow-300 overflow-hidden group cursor-pointer ${className}`}
    >
      <span className="relative z-10 transition duration-300 group-hover:text-black flex items-center justify-center gap-2">
        {label === "Next" && <FaArrowRight className="h-5 w-5" />}
        {label === "Back" && <FaArrowLeft className="h-5 w-5" />}
        {label === "Back to Home" && <FaHome className="h-5 w-5" />}
        {label}
      </span>
      <span className="absolute left-0 top-0 h-full w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full z-0"></span>
    </button>
  );
};

// Background Button Component
export const BgBtn = ({
  label = "Click Me",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative text-black text-[16px] font-medium px-6 py-3 rounded-md border border-yellow-300 hover:border-yellow-300 overflow-hidden group cursor-pointer ${className}`}
    >
      <span className="relative z-10 transition duration-300 group-hover:text-white flex items-center gap-2">
        {label === "Submit" && <FaPaperPlane />}
        {label}
      </span>
      <span className="absolute left-0 top-0 h-full w-full bg-yellow-300 transition-all duration-300 group-hover:w-0 z-0"></span>
    </button>
  );
};

// ThankYou Component
const ThankYou = () => (
  <div className="relative w-full bg-dark-bg text-white font-serif overflow-hidden myContainer topContainer">
    <div className="absolute inset-0 z-0">
      <Image
        src="https://images.unsplash.com/photo-1549921296-3a6b3b10b2e5?auto=format&fit=crop&w=1600&q=80"
        alt="Background"
        fill
        className="opacity-10 blur-sm object-cover"
      />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
    </div>
    <div className="relative z-10 text-center">
      <Image
        src="/Gastronmic_Arts_Barcelona_Logo.avif"
        alt="Gastronomic Arts Barcelona Logo"
        width={120}
        height={60}
        className="mx-auto mb-6"
      />
      <SectionContent
        icon={FaCheckCircle} // Icon for submission success
        tooltrip="Thank You!"
        tooltripClass="border-blue-300 bg-blue-300 text-black" // Blue theme for thank-you page
        heading="Submission Successful"
        hedingClass="text-3xl font-serif text-white font-bold mb-2 tracking-tight drop-shadow-lg !mx-auto"
        desCription="We’ll contact you soon to craft your culinary journey."
        desCriptionClass="text-gray-300 mb-6 text-sm italic max-w-md mx-auto"
      />
      <div className="mt-8 flex justify-center">
        <OutlineBtn
          label="Back to Home"
          onClick={() => (window.location.href = '/private-group')}
        />
      </div>
    </div>
  </div>
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

  const videoSources = useMemo(
    () => ({
      page1: {
        src: '/2795388-uhd_2560_1440_25fps.mp4',
        className: 'w-full object-cover lg:mt-73 xl:mt-80  2xl:mt-78  rounded-b-3xl h-[40vh] sm:h-[60vh] md:h-[70vh] lg:rounded-xl sm:rounded-md lg:h-[52vh] xl:h-[55vh] 2xl:h-[34vh]',
        poster: '/video-poster.jpg',
      },
      page2: {
        src: '/3201691-hd_1920_1080_25fps.mp4',
        className: 'w-full object-cover lg:mt-74 xl:mt-90 2xl:mt-78 rounded-b-3xl h-[40vh] sm:h-[60vh] md:h-[70vh] lg:rounded-xl sm:rounded-md lg:h-[38vh] xl:h-[50vh] 2xl:h-[33vh]',
        poster: '/second-video-poster.jpg',
      },
    }),
    []
  );

  // Validation
  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'guests', 'dob', 'date'];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} is required`;
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.phone && !formData.phone.startsWith('+')) {
      newErrors.phone = 'Valid phone number with country code is required';
    }
    if (formData.guests && (isNaN(formData.guests) || formData.guests < 1)) {
      newErrors.guests = 'Number of guests must be at least 1';
    }
    if (formData.dob && !/^\d{2}-\d{2}-\d{4}$/.test(formData.dob)) {
      newErrors.dob = 'Valid date of birth (DD-MM-YYYY) is required';
    }
    if (formData.date) {
      if (!/^\d{2}-\d{2}-\d{4}$/.test(formData.date)) {
        newErrors.date = 'Valid event date (DD-MM-YYYY) is required';
      } else {
        const [day, month, year] = formData.date.split('-').map(Number);
        const eventDate = new Date(year, month - 1, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (eventDate < today) {
          newErrors.date = 'Event date cannot be in the past';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setCurrentPage(1);
    } else {
      toast.error('Please complete all required fields correctly.');
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

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value || '' }));
    setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleDateChange = (field, value, part) => {
    const current = formData[field]?.split('-') || ['DD', 'MM', 'YYYY'];
    const updated = { DD: current[0], MM: current[1], YYYY: current[2], [part]: value };
    setFormData((prev) => ({
      ...prev,
      [field]: `${updated.DD}-${updated.MM}-${updated.YYYY}`,
    }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const timeSlots = [
    'Morning: 10:00–13:00',
    'Midday: 14:00–17:00',
    'Evening: 18:00–21:00',
    'Other',
  ];

  if (isSubmitted) {
    return <ThankYou />;
  }

  return (
    <div className="relative w-full bg-dark-bg text-white font-serif overflow-hidden myContainer topContainer low-height-gap">
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-4 sm:gap-6">
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

        <div className="flex-1 flex flex-col justify-center">
          <div className="mx-auto w-full">
            <Image
              src="/Gastronmic_Arts_Barcelona_Logo.avif"
              alt="Gastronomic Arts Barcelona Logo"
              width={140}
              height={60}
              className="mb-6"
            />
            <SectionContent
              icon={FaUtensils} // Icon for culinary event planning
              tooltrip="Plan Your Event"
              tooltripClass="border-yellow-300 bg-yellow-300 text-black" // Yellow theme for main form
              heading="Tell Us More"
              hedingClass="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-2"
              desCription="Let’s start planning your private culinary experience."
              desCriptionClass="text-gray-300 text-sm mb-8"
            />

            {currentPage === 0 ? (
              <div className="space-y-5 animate-slide-up">
                {[
                  { name: 'firstName', label: 'First Name', placeholder: 'Enter your first name' },
                  { name: 'lastName', label: 'Last Name', placeholder: 'Enter your last name' },
                  { name: 'email', label: 'Email Address', placeholder: 'Enter your email address', type: 'email' },
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
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-medium mb-2 font-serif text-gray-200">
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <PhoneInput
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="Enter your phone number"
                    defaultCountry="US"
                    international
                    countryCallingCodeEditable={false}
                    className={`bg-dark-card border ${errors.phone ? 'border-red-500' : 'border-gray-600'} text-white px-4 py-3 rounded-md focus:ring-1 focus:ring-amber-400 transition-all duration-200`}
                    countrySelectProps={{
                      className: 'bg-[#1a1a1a] text-white border border-[#2a2a2a] focus:ring-amber-400 focus:border-amber-400 transition-all duration-200',
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="text-xs text-red-400 mt-1">
                      {errors.phone}
                    </span>
                  )}
                </div>
                <FormInput
                  key="guests"
                  name="guests"
                  label="Number of Guests"
                  placeholder="Enter number of guests"
                  type="number"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  error={errors.guests}
                />
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
                          <button
                            aria-label="Open calendar"
                            className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
                          >
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
                    {errors[field] && (
                      <span id={`${field}-error`} className="text-xs text-red-400 mt-1">
                        {errors[field]}
                      </span>
                    )}
                  </div>
                ))}

                <OutlineBtn
                  label="Next"
                  onClick={handleNext}
                  className="w-full"
                />
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
                  <OutlineBtn
                    label="Back"
                    onClick={handlePrevious}
                  />
                  <BgBtn
                    label="Submit"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Toaster richColors position="top-right" />
    </div>
  );
};

export default TellUsMoreHere;