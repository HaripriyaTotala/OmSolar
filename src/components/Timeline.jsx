import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We discuss your energy needs and goals"
    },
    {
      title: "Site Survey",
      description: "Technical assessment of your property"
    },
    {
      title: "Custom Design",
      description: "Creating your optimal solar solution"
    },
    {
      title: "Proposal",
      description: "Detailed cost and savings breakdown"
    },
    {
      title: "Permits & Approvals",
      description: "Handling all necessary paperwork"
    },
    {
      title: "Installation",
      description: "Professional installation by certified team"
    },
    {
      title: "Final Inspection",
      description: "Quality check and system activation"
    }
  ];

  return (
    <section id="timeline" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Installation Process</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-200" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-1/2 px-6">
                <div className={`${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute w-4 h-4 bg-cyan-600 rounded-full" />
              </div>
              
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;