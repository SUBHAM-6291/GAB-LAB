'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { IoMdReturnLeft } from "react-icons/io";

const Tell_us_More_Here = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    guests: '',
    date: '',
    timeSlots: [],
    additionalInfo: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Input restrictions
    if (name === 'firstName' || name === 'lastName' || name === 'email' || name === 'additionalInfo') {
      newValue = value.replace(/[^a-zA-Z\s@.]/g, ''); // Allow only letters, spaces, @, and . for text fields
    } else if (name === 'guests' || name === 'dobDay' || name === 'dobMonth' || name === 'dobYear') {
      newValue = value.replace(/\D/g, '').slice(0, { guests: 3, dobDay: 2, dobMonth: 2, dobYear: 4 }[name] || 4); // Numbers only, with length limits
    } else if (name === 'date') {
      newValue = value.replace(/[^0-9/]/g, '').slice(0, 8); // Allow only numbers and /, limit to dd/mm/yy
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
    console.log(`${name}: ${newValue}`);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    let code = '+1'; // Default code
    const number = value.replace(/[^0-9]/g, ''); // Keep only digits

    // Fix country code for India (91) and allow other codes based on prefixes
    if (number.startsWith('91')) {
      code = '+91'; // Lock to +91 for India
    } else {
      const matchedCode = countryCodes.find((c) =>
        c.prefixes.some((prefix) => number.startsWith(prefix) && prefix !== '91')
      )?.code;
      code = matchedCode || '+1'; // Use matched code or default to +1
    }

    const newPhone = `${code} ${number}`;
    setFormData((prev) => ({ ...prev, phone: newPhone }));
    console.log(`phone: ${newPhone}`);
  };

  const handleTimeSlotChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newTimeSlots = checked
        ? [...prev.timeSlots, value]
        : prev.timeSlots.filter((slot) => slot !== value);
      console.log(`timeSlots: ${newTimeSlots.join(', ')}`);
      return { ...prev, timeSlots: newTimeSlots };
    });
  };

  const handleAdditionalChange = (e) => {
    const { name, value } = e.target;
    const newValue = value.replace(/[^a-zA-Z\s@.]/g, ''); // Restrict to text
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    console.log(`${name}: ${newValue}`);
  };

  const handleNext = () => {
    if (currentPage < 1) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleSubmit = () => {
    if (validateDob() && validateDate()) {
      setIsSubmitted(true);
      console.log('Form Submitted:', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        dob: `${formData.dobDay}/${formData.dobMonth}/${formData.dobYear}`,
        guests: formData.guests,
        date: formData.date,
        timeSlots: formData.timeSlots,
        additionalInfo: formData.additionalInfo,
      });
    }
  };

  const validateDob = () => {
    const day = parseInt(formData.dobDay, 10) || 0;
    const month = parseInt(formData.dobMonth, 10) || 0;
    const year = parseInt(formData.dobYear, 10) || 0;
    const today = new Date('2025-07-26T08:46:00Z'); // Updated to 08:46 AM IST, July 26, 2025
    const minDob = new Date('1900-01-01T00:00:00Z');

    // Validate month-specific days
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth || month < 1 || month > 12 || year < 1900 || year > 2025) {
      alert('Invalid Date of Birth. Ensure Day is 1-' + daysInMonth + ', Month is 1-12, Year is 1900-2025.');
      return false;
    }
    const dob = new Date(year, month - 1, day);
    if (dob > today) {
      alert('Date of Birth cannot be a future date.');
      return false;
    }
    if (dob < minDob) {
      alert('Date of Birth cannot be before January 1, 1900.');
      return false;
    }
    return true;
  };

  const validateDate = () => {
    const [day, month, year] = formData.date.split('/').map(Number) || [0, 0, 0];
    const inputDate = new Date(year, month - 1, day);
    const today = new Date('2025-07-26T08:46:00Z'); // Updated to current time
    if (inputDate < today) {
      alert('Please select a date on or after today (July 26, 2025).');
      return false;
    }
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth || month < 1 || month > 12) {
      alert('Invalid date format. Ensure Day is 1-' + daysInMonth + ', Month is 1-12.');
      return false;
    }
    return true;
  };

  const page1Fields = [
    { name: 'firstName', label: 'First Name', required: true },
    { name: 'lastName', label: 'Last Name', required: true },
    { name: 'email', label: 'Email Address', required: true },
    { name: 'phone', label: 'Phone Number', required: true },
    { name: 'dob', label: 'Date of Birth (Day DD / Month MM / Year YYYY)', required: true },
    { name: 'guests', label: 'How many people are you expecting?', required: true },
    { name: 'date', label: 'What date were you interested in? (dd/mm/yyyy)', required: true },
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

  const countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸', prefixes: ['1'] },
    { code: '+7', country: 'RU', flag: '🇷🇺', prefixes: ['7'] },
    { code: '+20', country: 'EG', flag: '🇪🇬', prefixes: ['20'] },
    { code: '+27', country: 'ZA', flag: '🇿🇦', prefixes: ['27'] },
    { code: '+30', country: 'GR', flag: '🇬🇷', prefixes: ['30'] },
    { code: '+31', country: 'NL', flag: '🇳🇱', prefixes: ['31'] },
    { code: '+32', country: 'BE', flag: '🇧🇪', prefixes: ['32'] },
    { code: '+33', country: 'FR', flag: '🇫🇷', prefixes: ['33'] },
    { code: '+34', country: 'ES', flag: '🇪🇸', prefixes: ['34'] },
    { code: '+36', country: 'HU', flag: '🇭🇺', prefixes: ['36'] },
    { code: '+39', country: 'IT', flag: '🇮🇹', prefixes: ['39'] },
    { code: '+40', country: 'RO', flag: '🇷🇴', prefixes: ['40'] },
    { code: '+41', country: 'CH', flag: '🇨🇭', prefixes: ['41'] },
    { code: '+43', country: 'AT', flag: '🇦🇹', prefixes: ['43'] },
    { code: '+44', country: 'UK', flag: '🇬🇧', prefixes: ['44'] },
    { code: '+45', country: 'DK', flag: '🇩🇰', prefixes: ['45'] },
    { code: '+46', country: 'SE', flag: '🇸🇪', prefixes: ['46'] },
    { code: '+47', country: 'NO', flag: '🇳🇴', prefixes: ['47'] },
    { code: '+48', country: 'PL', flag: '🇵🇱', prefixes: ['48'] },
    { code: '+49', country: 'DE', flag: '🇩🇪', prefixes: ['49'] },
    { code: '+51', country: 'PE', flag: '🇵🇪', prefixes: ['51'] },
    { code: '+52', country: 'MX', flag: '🇲🇽', prefixes: ['52'] },
    { code: '+53', country: 'CU', flag: '🇨🇺', prefixes: ['53'] },
    { code: '+54', country: 'AR', flag: '🇦🇷', prefixes: ['54'] },
    { code: '+55', country: 'BR', flag: '🇧🇷', prefixes: ['55'] },
    { code: '+56', country: 'CL', flag: '🇨🇱', prefixes: ['56'] },
    { code: '+57', country: 'CO', flag: '🇨🇴', prefixes: ['57'] },
    { code: '+58', country: 'VE', flag: '🇻🇪', prefixes: ['58'] },
    { code: '+60', country: 'MY', flag: '🇲🇾', prefixes: ['60'] },
    { code: '+61', country: 'AU', flag: '🇦🇺', prefixes: ['61'] },
    { code: '+62', country: 'ID', flag: '🇮🇩', prefixes: ['62'] },
    { code: '+63', country: 'PH', flag: '🇵🇭', prefixes: ['63'] },
    { code: '+64', country: 'NZ', flag: '🇳🇿', prefixes: ['64'] },
    { code: '+65', country: 'SG', flag: '🇸🇬', prefixes: ['65'] },
    { code: '+66', country: 'TH', flag: '🇹🇭', prefixes: ['66'] },
    { code: '+81', country: 'JP', flag: '🇯🇵', prefixes: ['81'] },
    { code: '+82', country: 'KR', flag: '🇰🇷', prefixes: ['82'] },
    { code: '+84', country: 'VN', flag: '🇻🇳', prefixes: ['84'] },
    { code: '+86', country: 'CN', flag: '🇨🇳', prefixes: ['86'] },
    { code: '+90', country: 'TR', flag: '🇹🇷', prefixes: ['90'] },
    { code: '+91', country: 'IN', flag: '🇮🇳', prefixes: ['91'] },
    { code: '+92', country: 'PK', flag: '🇵🇰', prefixes: ['92'] },
    { code: '+93', country: 'AF', flag: '🇦🇫', prefixes: ['93'] },
    { code: '+94', country: 'LK', flag: '🇱🇰', prefixes: ['94'] },
    { code: '+95', country: 'MM', flag: '🇲🇲', prefixes: ['95'] },
    { code: '+98', country: 'IR', flag: '🇮🇷', prefixes: ['98'] },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-1/5">
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
      <div className="flex h-[70vh] bg-black text-white">
        <div className="flex-1 flex flex-col justify-between p-6 md:p-12 bg-black">
          <div>
            <Image
              src="/Gastronmic_Arts_Barcelona_Logo.avif"
              alt="Logo"
              width={120}
              height={50}
              className="mb-6"
            />
            <h1 className="text-2xl md:text-3xl font-normal text-[#c9a628] mb-4">
              <span className="font-bold">Ready to spice up your next group gathering?</span>
              <span className="block">Then tell us a little more about your event.</span>
            </h1>
            <p className="text-sm text-[#c9a628] mb-6 max-w-xl">
              Whether it’s a private class, special event, corporate bash, or a team-building adventure, we guarantee an authentic, deliciously fun and creatively vibrant experience.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="px-6 py-3 bg-[#c9a628] text-black text-sm font-semibold rounded-full hover:bg-yellow-300"
              onClick={() => setShowForm(true)}
            >
              Tell us more here
            </button>
            <span className="text-xs text-[#c9a628] flex items-center">
              press Enter ↵ <IoMdReturnLeft className="h-3 w-3 ml-1" />
            </span>
          </div>
        </div>
        <div className="flex-1">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="video-poster.jpg"
          >
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen bg-black text-white">
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-center items-center">
          <p className="text-yellow-400 text-center text-lg">
            Gastronomic_Arts Barcelona white_logo_on_black That's it! We will be in touch with you shortly. See what else is cooking.
          </p>
          <div className="mt-6 p-4 bg-[#1a1a1a] rounded">
            <p className="text-[#c9a628]">This is a dummy section. Replace me with actual content!</p>
          </div>
        </div>
        <div className="flex-1 p-4">
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
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-black text-[#c9a628]">
      {currentPage === 0 ? (
        <>
          <div className="flex-1 p-6 md:p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl mb-4">Ready to spice up your next group gathering? Tell us more about your event.</h1>
              <p className="mb-6">We guarantee an authentic, delicious, fun, and creatively vibrant experience.</p>
              <div className="space-y-4">
                {page1Fields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium mb-1">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    {field.name === 'phone' ? (
                      <div className="flex items-center">
                        <select
                          value={formData.phone.split(' ')[0] || '+1'}
                          onChange={(e) => {
                            const newPhone = `${e.target.value} ${formData.phone.split(' ').slice(1).join(' ') || ''}`;
                            setFormData((prev) => ({ ...prev, phone: newPhone }));
                            console.log(`phone: ${newPhone}`);
                          }}
                          className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] p-2 rounded-l"
                        >
                          {countryCodes.map((code) => (
                            <option key={code.code} value={code.code}>
                              {code.flag} {code.code}
                            </option>
                          ))}
                        </select>
                        <Input
                          name="phone"
                          value={formData.phone.split(' ').slice(1).join(' ') || ''}
                          onChange={handlePhoneChange}
                          className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] rounded-r"
                          placeholder="Enter phone number"
                        />
                      </div>
                    ) : field.name === 'dob' ? (
                      <div className="flex space-x-2">
                        <Input
                          name="dobDay"
                          value={formData.dobDay}
                          onChange={handleChange}
                          className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] w-20"
                          placeholder="DD"
                          maxLength={2}
                        />
                        <span>/</span>
                        <Input
                          name="dobMonth"
                          value={formData.dobMonth}
                          onChange={handleChange}
                          className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] w-20"
                          placeholder="MM"
                          maxLength={2}
                        />
                        <span>/</span>
                        <Input
                          name="dobYear"
                          value={formData.dobYear}
                          onChange={handleChange}
                          className="bg-[#1a1a1a] border-gray-700 text-[#c9a628] w-28"
                          placeholder="YYYY"
                          maxLength={4}
                        />
                      </div>
                    ) : (
                      <Input
                        name={field.name}
                        value={field.name === 'date' ? formData.date : formData[field.name]}
                        onChange={handleChange}
                        className="bg-[#1a1a1a] border-gray-700 text-[#c9a628]"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        type={field.name === 'date' ? 'text' : 'text'}
                      />
                    )}
                    {field.name === 'guests' && (
                      <span className="text-xs text-gray-400">{`${formData.guests.length}/3 characters`}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-[#c9a628] text-black rounded hover:bg-yellow-300 transition"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
          <div className="flex-1 p-4">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded"
              poster="video-poster.jpg"
            >
              <source src="/2795388-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 p-4">
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
          <div className="flex-1 p-6 md:p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl mb-4">Ready to spice up your next group gathering? Tell us more about your event.</h1>
              <p className="mb-6">We guarantee an authentic, delicious, fun, and creatively vibrant experience.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    What time(s) would you like us to host your event? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => {
                          const newTimeSlots = formData.timeSlots.includes(slot)
                            ? formData.timeSlots.filter((s) => s !== slot)
                            : [...formData.timeSlots, slot];
                          setFormData((prev) => ({ ...prev, timeSlots: newTimeSlots }));
                          console.log(`timeSlots: ${newTimeSlots.join(', ')}`);
                        }}
                        className={`px-3 py-1 rounded ${
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
                  <label className="block text-sm font-medium mb-1">
                    Is there anything else you would like us to know about your event? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleAdditionalChange}
                    className="w-full max-w-md p-2 bg-[#1a1a1a] text-[#c9a628] rounded mb-4"
                    placeholder="Type your answer here..."
                    rows={4}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button
                className="px-4 py-2 bg-gray-800 text-[#c9a628] rounded hover:bg-gray-500 transition"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-[#c9a628] text-black rounded hover:bg-yellow-300 transition"
                onClick={() => {
                  if (validateDob() && validateDate()) handleSubmit();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Tell_us_More_Here;