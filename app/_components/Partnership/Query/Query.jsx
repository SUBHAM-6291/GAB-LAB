'use client';

import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import Image from 'next/image';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FaFileSignature, FaCheckCircle, FaArrowRight, FaArrowLeft, FaPaperPlane, FaHome } from 'react-icons/fa';
import SectionContent from '../../Utilites/SectionContent/SectionContent';
import { OutlineBtn } from '../../Utilites/BtnComponent/MyBtn';

// FormInput, FormTextarea, FormSelect remain unchanged
const FormInput = ({ label, name, type = 'text', placeholder, value, onChange, required, error }) => (
  <div className="flex flex-col gap-2 group transition-all duration-300">
    <label htmlFor={name} className="text-sm font-semibold text-white tracking-wide">
      {label} {required && <span className="text-amber-500">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-[#111] border ${error ? 'border-red-500' : 'border-[#2a2a2a]'} text-white placeholder:text-gray-400 px-4 py-3 rounded-md focus:ring-1 focus:ring-amber-400 outline-none transition-all duration-300 hover:shadow-lg hover:shadow-[#2a2a2a]`}
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

const FormTextarea = ({ label, name, placeholder, value, onChange, error }) => (
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
      className={`bg-[#111] border ${error ? 'border-red-500' : 'border-[#2a2a2a]'} text-white placeholder:text-gray-400 px-4 py-3 rounded-md focus:ring-1 focus:ring-amber-400 outline-none transition-all duration-300 hover:shadow-lg hover:shadow-[#2a2a2a] resize-none h-28`}
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

const FormSelect = ({ label, name, value, onChange, options, required, error }) => (
  <div className="flex flex-col gap-2 group transition-all duration-300 relative">
    <label htmlFor={name} className="text-sm font-semibold text-white tracking-wide">
      {label} {required && <span className="text-amber-500">*</span>}
    </label>
    <div className="relative">
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-[#111] border ${error ? 'border-red-500' : 'border-[#2a2a2a]'} text-white px-4 py-3 rounded-md focus:ring-1 focus:ring-amber-400 outline-none appearance-none transition-all duration-300 hover:shadow-lg hover:shadow-[#2a2a2a] cursor-pointer pr-12`}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
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
      <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 text-base font-bold">
        ▼
      </span>
    </div>
    {error && (
      <span id={`${name}-error`} className="text-xs text-red-400 mt-1">
        {error}
      </span>
    )}
  </div>
);

const ThankYou = () => (
  <div className="relative min-h-screen w-full bg-[#0b0b0b] text-white font-serif overflow-hidden myContainer topContainer">
    <div className="absolute inset-0 z-0">
      <Image
        src="https://images.unsplash.com/photo-1549921296-3a6b3b10b2e5?auto=format&fit=crop&w=1600&q=80"
        alt="Background"
        fill
        className="opacity-10 blur-sm object-cover"
      />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
    </div>
    <div className="relative z-10 sm:text-left">
      <Image
        src="/Gastronmic_Arts_Barcelona_Logo.avif"
        alt="Gastronomic Arts Barcelona Logo"
        width={140}
        height={60}
        className="mx-auto mb-6 sm:mx-0"
      />
      <SectionContent
        icon={FaCheckCircle}
        tooltrip="Thank You!"
        tooltripClass="border-blue-300 bg-blue-300 text-black"
        heading="Submission Successful"
        hedingClass="heding text-white tracking-tight drop-shadow-lg sm:text-left mb-2"
        desCription="Thank you for completing the client questionnaire. We'll review your information and get back to you soon!"
        desCriptionClass="desc max-w-4xl sm:text-left mb-6"
      />
      <div className="mt-8 flex justify-center">
        <OutlineBtn
          label={
            <div className="flex items-center gap-2">
              <FaHome className="text-amber-400" />
              <span>Back to Home</span>
            </div>
          }
          type="button"
          onClick={() => (window.location.href = 'partnership')}
          className="cursor-pointer"
        />
      </div>
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
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 640 && window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const validatePage = (page) => {
    const newErrors = {};
    if (page === 0) {
      if (!formData.firstName || formData.firstName.length < 2) {
        newErrors.firstName = 'First name is required and must be at least 2 characters';
      }
      if (!formData.lastName || formData.lastName.length < 2) {
        newErrors.lastName = 'Last name is required and must be at least 2 characters';
      }
      if (!formData.phone) {
        newErrors.phone = 'Valid phone number is required';
      }
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Valid email is required';
      }
    } else {
      if (!formData.targetAudience) {
        newErrors.targetAudience = 'Please select a target audience';
      }
      if (!formData.reservationsEstimate) {
        newErrors.reservationsEstimate = 'Please select an estimated reservation range';
      }
      if (!formData.marketingChannels.length) {
        newErrors.marketingChannels = 'Please select at least one marketing channel';
      }
      if (!formData.hasBookingSystem) {
        newErrors.hasBookingSystem = 'Please select an option';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        marketingChannels: checked
          ? [...(prev.marketingChannels || []), value]
          : (prev.marketingChannels || []).filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value || '' }));
    setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleNext = () => {
    if (validatePage(0)) {
      setCurrentPage(1);
    } else {
      toast.error('Please fill out all required fields correctly');
    }
  };

  const handlePrevious = () => {
    setCurrentPage(0);
  };

  const handleSubmit = () => {
    if (validatePage(1)) {
      console.log('Form Data:', formData);
      toast.success('Form submitted successfully!');
      setIsSubmitted(true);
    } else {
      toast.error('Please fill out all required fields correctly');
    }
  };

  if (isSubmitted) {
    return <ThankYou />;
  }

  return (
    <div className="relative min-h-screen w-full bg-[#0b0b0b] text-white font-serif overflow-hidden myContainer topContainer">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549921296-3a6b3b10b2e5?auto=format&fit=crop&w=1600&q=80"
          alt="Background"
          fill
          className="opacity-10 blur-sm object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>
      <div className="relative z-10">
        <div className="w-full sm:text-left md:text-center">
          <SectionContent
            icon={FaFileSignature}
            tooltrip="Client Survey"
            tooltripClass="border-yellow-300 bg-yellow-300 text-black"
            heading="Client Questionnaire"
            hedingClass="text-4xl md:text-5xl font-bold mb-4 text-white"
            desCription="Please provide us with some information to better understand your needs and help us tailor our services for you."
            desCriptionClass="mx-auto text-md md:text-lg leading-relaxed text-gray-300 mb-10"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {(currentPage === 0 || !isMobile) && (
            <div className="p-8 bg-[#1a1a1ad9] border border-[#2b2b2b] rounded-2xl shadow-lg space-y-8 transition hover:shadow-[#2a2a2a]">
              <h2 className="subHeding text-amber-400 border-b border-amber-400/30 pb-3">
                Personal Information
              </h2>
              <FormInput
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your first name"
                required
                error={errors.firstName}
              />
              <FormInput
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
                required
                error={errors.lastName}
              />
              <div className="flex flex-col gap-2 group transition-all duration-300">
                <label htmlFor="phone" className="text-sm font-semibold text-white tracking-wide">
                  Phone Number <span className="text-amber-500">*</span>
                </label>
                <PhoneInput
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Your phone number"
                  defaultCountry="US"
                  international
                  countryCallingCodeEditable={false}
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={`bg-[#111] border ${errors.phone ? 'border-red-500' : 'border-[#2a2a2a]'} text-white placeholder:text-gray-400 px-4 py-3 rounded-md focus:ring-1 focus:ring-amber-400 outline-none transition-all duration-300 hover:shadow-lg hover:shadow-[#2a2a2a]`}
                  countrySelectProps={{
                    className: 'bg-[#1a1a1a] text-white border border-[#2a2a2a] focus:ring-amber-400 focus:border-amber-400 transition-all duration-200',
                  }}
                />
                {errors.phone && (
                  <span id="phone-error" className="text-xs text-red-400 mt-1">
                    {errors.phone}
                  </span>
                )}
              </div>
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                error={errors.email}
              />
              <FormInput
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>
          )}
          {(currentPage === 1 || !isMobile) && (
            <div className="p-8 bg-[#1a1a1ad9] border border-[#2b2b2b] rounded-2xl shadow-lg space-y-8 transition hover:shadow-[#2a2a2a]">
              <h2 className="subHeding text-amber-400 border-b border-amber-400/30 pb-3">
                Business Details
              </h2>
              <FormSelect
                label="Primary target audience"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleChange}
                options={['Leisure Travelers', 'Business Travelers', 'Luxury Travelers', 'Other']}
                required
                error={errors.targetAudience}
              />
              <FormSelect
                label="Estimated reservations next year"
                name="reservationsEstimate"
                value={formData.reservationsEstimate}
                onChange={handleChange}
                options={['1-5', '6-15', '16-35', '36-50', 'More than 50']}
                required
                error={errors.reservationsEstimate}
              />
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-white tracking-wide">
                  Marketing channels (check all that apply): <span className="text-amber-500">*</span>
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
                  <label key={ch} className="flex items-center gap-3 text-sm desc cursor-pointer">
                    <input
                      type="checkbox"
                      name="marketingChannels"
                      value={ch}
                      checked={Array.isArray(formData.marketingChannels) && formData.marketingChannels.includes(ch)}
                      onChange={handleChange}
                      className={`w-5 h-5 rounded border ${errors.marketingChannels ? 'border-red-500' : 'border-gray-600'} bg-[#121212] checked:bg-amber-400 checked:border-amber-400 transition-all cursor-pointer`}
                      aria-invalid={!!errors.marketingChannels}
                    />
                    {ch}
                  </label>
                ))}
                {errors.marketingChannels && (
                  <span id="marketingChannels-error" className="text-xs text-red-400 mt-1">
                    {errors.marketingChannels}
                  </span>
                )}
              </div>
              <FormSelect
                label="Online booking system?"
                name="hasBookingSystem"
                value={formData.hasBookingSystem}
                onChange={handleChange}
                options={['No', 'Yes', 'Not sure']}
                required
                error={errors.hasBookingSystem}
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
          )}
        </div>
        <div className="mt-16 flex justify-center gap-4">
          {isMobile && currentPage === 0 && (
            <OutlineBtn
              label={
                <div className="flex items-center gap-2">
                  <FaArrowRight className="text-amber-400" />
                  <span>Next</span>
                </div>
              }
              type="button"
              onClick={handleNext}
              className="cursor-pointer"
            />
          )}
          {isMobile && currentPage === 1 && (
            <>
              <OutlineBtn
                label={
                  <div className="flex items-center gap-2">
                    <FaArrowLeft className="text-amber-400" />
                    <span>Previous</span>
                  </div>
                }
                type="button"
                onClick={handlePrevious}
                className="cursor-pointer"
              />
              <OutlineBtn
                label={
                  <div className="flex items-center gap-2">
                    <FaPaperPlane className="text-amber-400" />
                    <span>Submit Form</span>
                  </div>
                }
                type="button"
                onClick={handleSubmit}
                className="cursor-pointer"
              />
            </>
          )}
          {!isMobile && (
            <OutlineBtn
              label={
                <div className="flex items-center gap-2">
                  <FaPaperPlane className="text-amber-400" />
                  <span>Submit Form</span>
                </div>
              }
              type="button"
              onClick={handleSubmit}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
};

export default QuestionnaireForm;