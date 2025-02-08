import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How much can I save with solar panels?",
      answer: "Savings vary based on energy consumption, location, and system size. Typically, homeowners save 50-90% on electricity bills."
    },
    {
      question: "How long does installation take?",
      answer: "Most residential and commercial installations take 4-6 Weeks"
    },
    {
      question: "What maintenance is required?",
      answer: "Solar panels need minimal maintenance. Regular cleaning and inspection is recommended to ensure optimal performance."
    },
    {
      question: "What incentives are available?",
      answer: "PM Suryaghar subsidy of Rs. 78000 is available for residential installations."
    },
    {
      question: "How long do solar panels last?",
      answer: "Most solar panels come with a 25-year warranty and can last 30+ years with proper maintenance."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;