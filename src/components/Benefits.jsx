import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Lower Energy Bills",
      description: "Reduce your monthly electricity costs by up to 50% with solar power."
    },
    
    {
      icon: "📈",
      title: "Increased Property Value",
      description: "Solar installations can increase your property value by up to 4%."
    },
    {
      icon: "💎",
      title: "Tax Incentives",
      description: "Take advantage of federal and state tax credits for solar installation."
    }, 
    {
      icon: "🌍",
      title: "Environmental Impact",
      description: "Reduce your carbon footprint and contribute to a sustainable future."
    },
  ];

  return (
    <section id="benefits" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Benefits of Solar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;