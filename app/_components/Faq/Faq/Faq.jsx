'use client';

import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { FaQuestionCircle } from 'react-icons/fa';
import SectionContent from '../../Utilites/SectionContent/SectionContent'; // Adjust the import path as needed

const faqData = [
  {
    title: '1. Where is the meeting point/address?',
    content:
      'The meeting point for your experience is at Gastronomic Arts Barcelona (The GAB LAB). Address: Carrer de Lancaster, 10, Bajo 1a, 08001 Barcelona.',
    highlight: 'Carrer de Lancaster, 10, Bajo 1a, 08001 Barcelona',
  },
  {
    title: '2. What is the duration of the cooking class?',
    content: 'The class typically lasts for 2.5 to 3 hours.',
    highlight: '2.5 to 3 hours',
  },
  {
    title: '3. How do I contact you for inquiries or assistance?',
    content:
      'You can reach us at support@gastronomicartsbarcelona.com for general inquiries or visit our contact page.',
    highlight: 'support@gastronomicartsbarcelona.com',
  },
  {
    title: '4. What if I am running late?',
    content:
      'Please plan to arrive a few minutes early. If you’re late and the group has already left, you can meet back at the point about 40 minutes after the class starts. There is also a doorbell just above the mailbox.',
    highlight: 'arrive a few minutes early',
  },
  {
    title: '5. How does billing work?',
    content:
      'Reservations made online or on-site will appear as "FORMACION LANCASTER S.L." Gastronomic Arts Barcelona / GAB LAB operates under this educational entity.',
    highlight: 'FORMACION LANCASTER S.L.',
  },
  {
    title: '6. Do you have recommendations for nearby accommodations or hotels?',
    content:
      'Yes, we can suggest some accommodations in the vicinity. Please contact us for assistance.',
    highlight: 'contact us for assistance',
  },
  {
    title: '7. Do you host private events?',
    content:
      'Yes, we host corporate, private, and custom events. Use the Private Group tab to contact us.',
    highlight: 'Private Group tab',
  },
  {
    title: '8. Are children allowed?',
    content:
      'All ages are welcome, but those under 16 must be accompanied by an adult. Children 5 and under are free.',
    highlight: 'Children 5 and under are free',
  },
  {
    title: '9. Can I bring a friend who didn’t register in advance?',
    content: 'No, everyone attending must be registered in advance.',
    highlight: 'registered in advance',
  },
  {
    title: '10. What is the cancellation policy?',
    content:
      'Cancellations made 48 hours prior will receive a full refund. No refunds for cancellations made within 48 hours of the class.',
    highlight: 'full refund',
  },
  {
    title: '11. Is the class suitable for vegetarians or those with allergies?',
    content:
      'Yes, we can accommodate most dietary preferences. Please let us know in advance.',
    highlight: 'let us know in advance',
  },
  {
    title: '12. What language is the class taught in?',
    content:
      'Classes are typically conducted in English. Contact us in advance if you need translation support.',
    highlight: 'conducted in English',
  },
  {
    title: '13. Do I need to bring anything to the class?',
    content:
      'No, we provide all materials and ingredients required for the class.',
    highlight: 'all materials and ingredients provided',
  },
];

export default function FAQ() {
  const [openSection, setOpenSection] = useState(0); // First section open by default

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSection(index);
    }
  };

  return (
    <div className="bg-black text-white myContainer topContainer">
      <div className="box-border">
        <div className="w-full text-left md:text-center">
          <SectionContent
            icon={FaQuestionCircle}
            tooltrip="Frequently Asked Questions"
            tooltripClass="bg-yellow-300 text-black border border-yellow-300"
            heading="FAQ"
            hedingClass="text-4xl md:text-5xl font-bold mb-4 text-white"
            desCription="Here are the most commonly asked questions about our classes and services."
            desCriptionClass="mx-auto text-md md:text-lg leading-relaxed text-gray-300 mb-10"
          />
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-xl p-4 sm:p-6 lg:p-6 min-h-[80px]" // Added min-h-[80px] for consistent height
            >
              <div
                onClick={() => toggleSection(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                role="button"
                tabIndex={0}
                aria-expanded={openSection === index}
                aria-controls={`faq-section-${index}`}
                className="cursor-pointer outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                    {faq.title}
                  </h3>
                  <FaAngleDown
                    className={`transition-transform duration-300 text-lg md:text-xl ${
                      openSection === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {openSection === index && (
                <p
                  id={`faq-section-${index}`}
                  className="mt-3 text-gray-300 text-sm sm:text-base transition-opacity duration-300"
                >
                  {faq.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}