'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { IoMdReturnLeft } from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';
import { format, isValid, parse } from 'date-fns';
import { Toaster, toast } from 'sonner';
import '@/components/ui/professional-ui.css';

const Query = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+1 ',
    dob: null,
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    guests: '',
    date: null,
    dateDay: '',
    dateMonth: '',
    dateYear: '',
    timeSlots: [],
    additionalInfo: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const dobYears = Array.from({ length: 126 }, (_, i) => (2025 - i).toString());
  const dateYears = Array.from({ length: 6 }, (_, i) => (2025 + i).toString());

  const countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸', prefixes: ['1'] },
    { code: '+91', country: 'IN', flag: '🇮🇳', prefixes: ['91'] },
  ];

  const timeSlots = [
    'Morning Session: 10:00 to 13:00',
    'Late Morning: 11:00 to 14:00',
    'Midday Session: 14:00 to 17:00',
    'Afternoon Session: 15:00 to 18:00',
    'Evening Session: 18:00 to 21:00',
    'Sunset Session: 19:00 to 22:00',
    'Other',
  ];

  // Handlers (reused from TellUsMoreHere)
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'guests' && value.length > 3) {
      toast.error('Number of guests cannot exceed 3 characters');
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;
    const countryCode = formData.phone.split(' ')[0] || '+1';
    setFormData((prev) => ({ ...prev, phone: `${countryCode} ${phoneNumber}` }));
  };

  const handleDateSelectChange = (field, value, isEventDate) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    const prefix = isEventDate ? 'date' : 'dob';
    const day = field === 'dobDay' || field === 'dateDay' ? value : formData[`${prefix}Day`];
    const month = field === 'dobMonth' || field === 'dateMonth' ? value : formData[`${prefix}Month`];
    const year = field === 'dobYear' || field === 'dateYear' ? value : formData[`${prefix}Year`];

    if (day && month && year) {
      const dateStr = `${year}-${month}-${day}`;
      const parsedDate = parse(dateStr, 'yyyy-MM-dd', new Date());
      if (isValid(parsedDate)) {
        setFormData((prev) => ({ ...prev, [prefix]: parsedDate }));
      } else {
        setFormData((prev) => ({ ...prev, [prefix]: null }));
        toast.error('Invalid date selected');
      }
    }
  };

  const handleCalendarSelect = (date, field) => {
    if (!date) return;
    setFormData((prev) => ({
      ...prev,
      [field]: date,
      [`${field}Day`]: format(date, 'dd'),
      [`${field}Month`]: format(date, 'MM'),
      [`${field}Year`]: format(date, 'yyyy'),
    }));
  };

  const handleTimeSlotChange = (slot) => {
    setFormData((prev) => {
      const timeSlots = prev.timeSlots.includes(slot)
        ? prev.timeSlots.filter((s) => s !== slot)
        : [...prev.timeSlots, slot];
      return { ...prev, timeSlots };
    });
  };

  const handleAdditionalChange = (e) => {
    setFormData((prev) => ({ ...prev, additionalInfo: e.target.value }));
  };

  const handleNext = () => {
    const fields = [
      { name: 'firstName', label: 'First Name', page: 0 },
      { name: 'lastName', label: 'Last Name', page: 0 },
      { name: 'email', label: 'Email Address', page: 0 },
      { name: 'phone', label: 'Phone Number', page: 0 },
      { name: 'dob', label: 'Date of Birth', page: 1 },
      { name: 'guests', label: 'Number of Guests', page: 1 },
      { name: 'date', label: 'Event Date', page: 1 },
    ];

    const missingFields = fields
      .filter((field) => field.page === currentPage && !formData[field.name])
      .map((field) => field.label);

    if (currentPage === 1) {
      if (formData.dobDay && formData.dobMonth && formData.dobYear && !formData.dob) {
        missingFields.push('Date of Birth (invalid date)');
      }
      if (formData.dateDay && formData.dateMonth && formData.dateYear && !formData.date) {
        missingFields.push('Event Date (invalid date)');
      }
    }

    if (missingFields.length > 0) {
      toast.error(`Please fill out: ${missingFields.join(', ')}`);
      return;
    }

    if (currentPage === 0) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        toast.error('Please enter a valid email address');
        return;
      }
      if (!formData.phone.split(' ')[1] || !/^\d{7,15}$/.test(formData.phone.split(' ')[1])) {
        toast.error('Please enter a valid phone number');
        return;
      }
    }

    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = () => {
    if (formData.timeSlots.length === 0) {
      toast.error('Please select at least one time slot');
      return;
    }
    if (!formData.additionalInfo.trim()) {
      toast.error('Please provide additional information about your event');
      return;
    }
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    toast.success('Form submitted successfully!');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-1/5 sm:w-1/3 md:w-1/4">
          <div className="w-full bg-gray-700 h-2 rounded overflow-hidden">
            <div
              className="h-full bg-yellow-400"
              style={{ width: '0%', animation: 'loading 3s ease-in-out forwards' }}
            />
          </div>
          <style>{`
            @keyframes loading {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>
        </div>
      </div>
    );
  }

  if (!showForm) {
    return (
      <div className="flex flex-col-reverse lg:flex-row min-h-screen bg-black text-white gap-4 sm:gap-6">
        <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 md:p-12 bg-black">
          <div>
            <div className="mb-4 mt-40">
              <Image
                src="/Gastronmic_Arts_Barcelona_Logo.avif"
                alt="Gastronomic Arts Barcelona Logo"
                width={80}
                height={32}
                className="mb-4 sm:mb-6"
              />
              <div className="h-1 w-16 bg-yellow-500 mb-2" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#c9a628] mb-4">
              <span className="font-bold">Ready to spice up your next group gathering?</span>
              <span className="block">Then tell us a little more about your event.</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#c9a628] mb-4 sm:mb-6 max-w-xl">
              Whether it’s a private class, special event, corporate bash, or a team-building adventure, we guarantee an authentic, deliciously fun and creatively vibrant experience.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="px-4 py-2 sm:px-6 sm:py-3 bg-[#c9a628] text-black text-xs sm:text-sm font-semibold rounded-full hover:bg-yellow-300 transition"
              onClick={() => setShowForm(true)}
            >
              Tell us more here
            </button>
            <span className="text-xs text-[#c9a628] flex items-center">
              press Enter <IoMdReturnLeft className="h-3 w-3 ml-1" />
            </span>
          </div>
        </div>
        <div className="flex-1 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-auto">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="video-poster.jpg"
          >
            <source src="/3201691-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Toaster richColors />
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white gap-4 sm:gap-6">
        <div className="flex-1 p-4 sm:p-6 lg:p-12 flex flex-col justify-center items-center order-2 lg:order-1">
          <div className="mb-4">
            <div className="h-1 w-16 mb-2" />
            <Image
              src="/Gastronmic_Arts_Barcelona_Logo.avif"
              alt="Gastronomic Arts Barcelona Logo"
              width={80}
              height={32}
              className="mb-4"
            />
          </div>
          <p className="text-[#c9a628] text-center text-sm sm:text-lg max-w-md">
            Gastronomic Arts Barcelona: That's it! We will be in touch with you shortly. See what else is cooking.
          </p>
        </div>
        <div className="flex-1 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-auto order-1 lg:order-2 video-container">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded"
            poster="video-poster.jpg"
          >
            <source src="/3201691-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Toaster richColors />
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-[#c9a628] form-container gap-4 sm:gap-6">
      {currentPage === 0 ? (
        <>
          <div className="flex-1 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-auto order-1 lg:order-2 video-container">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded"
              poster="video-poster.jpg"
            >
              <source src="/3201691-hd_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex-1 p-4 sm:p-6 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <h1 className="text-xl sm:text-2xl mb-4">Personal Information</h1>
              <p className="text-xs sm:text-sm mb-4 sm:mb-6">
                Please provide your contact details to get started.
              </p>
              <div className="space-y-4 w-full max-w-md">
                {[
                  { name: 'firstName', label: 'First Name', required: true },
                  { name: 'lastName', label: 'Last Name', required: true },
                  { name: 'email', label: 'Email Address', required: true },
                  { name: 'phone', label: 'Phone Number', required: true },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs sm:text-sm font-medium mb-1">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    {field.name === 'phone' ? (
                      <div className="flex items-center">
                        <Select
                          value={formData.phone.split(' ')[0] || '+1'}
                          onValueChange={(value) => {
                            const newPhone = `${value} ${formData.phone.split(' ').slice(1).join(' ') || ''}`;
                            setFormData((prev) => ({ ...prev, phone: newPhone }));
                          }}
                        >
                          <SelectTrigger className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] rounded-l text-xs sm:text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {countryCodes.map((code) => (
                              <SelectItem key={code.code} value={code.code} className="text-xs sm:text-sm">
                                {code.flag} {code.code}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          name="phone"
                          value={formData.phone.split(' ').slice(1).join(' ') || ''}
                          onChange={handlePhoneChange}
                          className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] rounded-r text-xs sm:text-sm"
                          placeholder="Enter phone number"
                        />
                      </div>
                    ) : (
                      <Input
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] text-xs sm:text-sm"
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 sm:mt-6 flex justify-end">
              <button
                className="px-4 py-3 bg-[#c9a628] text-black rounded hover:bg-yellow-300 transition text-xs sm:text-sm"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : currentPage === 1 ? (
        <>
          <div className="flex-1 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-auto order-1 lg:order-2 video-container">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded"
              poster="video-poster.jpg"
            >
              <source src="/3201691-hd_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex-1 p-4 sm:p-6 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <h1 className="text-xl sm:text-2xl mb-4">Event Details</h1>
              <p className="text-xs sm:text-sm mb-4 sm:mb-6">
                Tell us about your event date and expected guests.
              </p>
              <div className="space-y-4 w-full max-w-md">
                {[
                  { name: 'dob', label: 'Date of Birth', required: true },
                  { name: 'guests', label: 'Number of Guests', required: true },
                  { name: 'date', label: 'Event Date', required: true },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs sm:text-sm font-medium mb-1">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    {field.name === 'dob' || field.name === 'date' ? (
                      <div className="relative">
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                          <Select
                            value={formData[`${field.name}Day`]}
                            onValueChange={(value) => handleDateSelectChange(`${field.name}Day`, value, field.name === 'date')}
                          >
                            <SelectTrigger className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] w-full sm:w-20 text-xs sm:text-sm">
                              <SelectValue placeholder="DD" />
                            </SelectTrigger>
                            <SelectContent>
                              {days.map((day) => (
                                <SelectItem key={day} value={day} className="text-xs sm:text-sm">
                                  {day}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <span className="hidden sm:block">/</span>
                          <Select
                            value={formData[`${field.name}Month`]}
                            onValueChange={(value) => handleDateSelectChange(`${field.name}Month`, value, field.name === 'date')}
                          >
                            <SelectTrigger className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] w-full sm:w-20 text-xs sm:text-sm">
                              <SelectValue placeholder="MM" />
                            </SelectTrigger>
                            <SelectContent>
                              {months.map((month) => (
                                <SelectItem key={month} value={month} className="text-xs sm:text-sm">
                                  {month}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <span className="hidden sm:block">/</span>
                          <Select
                            value={formData[`${field.name}Year`]}
                            onValueChange={(value) => handleDateSelectChange(`${field.name}Year`, value, field.name === 'date')}
                          >
                            <SelectTrigger className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] w-full sm:w-24 text-xs sm:text-sm">
                              <SelectValue placeholder="YYYY" />
                            </SelectTrigger>
                            <SelectContent>
                              {(field.name === 'dob' ? dobYears : dateYears).map((year) => (
                                <SelectItem key={year} value={year} className="text-xs sm:text-sm">
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button className="ml-0 sm:ml-2 mt-2 sm:mt-0 text-[#c9a628] hover:text-yellow-300">
                                <FaCalendarAlt className="h-4 w-4 sm:h-5 sm:w-5" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="bg-[#1a1a1a] border-gray-700 text-[#c9a628]">
                              <Calendar
                                mode="single"
                                selected={formData[field.name]}
                                onSelect={(date) => handleCalendarSelect(date, field.name)}
                                disabled={(date) =>
                                  field.name === 'dob'
                                    ? date > new Date('2025-07-26T12:30:00+05:30') || date < new Date('1900-01-01T00:00:00Z')
                                    : date < new Date('2025-07-26T12:30:00+05:30')
                                }
                                initialFocus
                                className="calendar-custom"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    ) : (
                      <Input
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] text-xs sm:text-sm"
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                    )}
                    {field.name === 'guests' && (
                      <span className="text-xs text-gray-500">{`${formData.guests.length}/3 characters`}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between gap-2">
              <button
                className="px-4 py-3 bg-gray-800 text-[#c9a628] rounded hover:bg-gray-700 transition text-xs sm:text-sm"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className="px-4 py-3 bg-[#c9a628] text-black rounded hover:bg-yellow-300 transition text-xs sm:text-sm"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : currentPage === 2 ? (
        <>
          <div className="flex-1 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-auto order-1 lg:order-2 video-container">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded"
              poster="video-poster.jpg"
            >
              <source src="/3201691-hd_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex-1 p-4 sm:p-6 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <h1 className="text-xl sm:text-2xl mb-4">Additional Information</h1>
              <p className="text-xs sm:text-sm mb-4 sm:mb-6">
                Let us know your preferred time slots and any additional details.
              </p>
              <div className="space-y-4 w-full max-w-md">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1">
                    What time(s) would you like us to host your event? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => handleTimeSlotChange(slot)}
                        className={`px-3 py-1 rounded text-xs sm:text-sm ${
                          formData.timeSlots.includes(slot)
                            ? 'bg-[#c9a628] text-black'
                            : 'bg-[#1a1a1a] text-[#c9a628] hover:bg-gray-700 transition'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1">
                    Is there anything else you would like us to know about your event?{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleAdditionalChange}
                    className="w-full p-2 bg-[#1a1a1a] text-[#c9a628] rounded mb-6 border border-gray-700 text-xs sm:text-sm"
                    placeholder="Type your answer here..."
                    rows={4}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between gap-2">
              <button
                className="px-4 py-3 bg-gray-800 text-[#c9a628] rounded hover:bg-gray-700 transition text-xs sm:text-sm"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className="px-4 py-3 bg-[#c9a628] text-black rounded hover:bg-yellow-300 transition text-xs sm:text-sm"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-auto order-1 lg:order-2 video-container">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded"
              poster="video-poster.jpg"
            >
              <source src="/3201691-hd_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex-1 p-4 sm:p-6 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <h1 className="text-xl sm:text-2xl mb-4">Dummy Page</h1>
              <p className="text-xs sm:text-sm mb-4 sm:mb-6">
                This is a placeholder page for demonstration purposes. You can customize this section to include additional information, promotions, or a summary of the form data.
              </p>
              <div className="space-y-4 w-full max-w-md">
                <p className="text-[#c9a628] text-sm">
                  Thank you for providing your event details! You can review your information or proceed to submit.
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between gap-2">
              <button
                className="px-4 py-3 bg-gray-800 text-[#c9a628] rounded hover:bg-gray-700 transition text-xs sm:text-sm"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className="px-4 py-3 bg-[#c9a628] text-black rounded hover:bg-yellow-300 transition text-xs sm:text-sm"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
      <Toaster richColors />
    </div>
  );
};

export default Query;