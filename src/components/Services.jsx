import React from 'react';
import { motion } from 'framer-motion';
import Homes from '/src/assets/images/Homes.jpeg';
import Commercial from '/src/assets/images/Commercial.jpeg';
import Agriculture from '/src/assets/images/Agriculture.jpg';

const ServiceCard = ({ title, description, image, features }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Residential Solar",
      description: "Transform your home with custom solar solutions designed for maximum efficiency.",
      image: Homes,
      features: [
        "Custom system design",
        "25-year warranty",
        "Professional installation",
        "Smart monitoring system"
      ]
    },
    {
      title: "Commercial Solar",
      description: "Reduce operating costs and enhance sustainability with commercial solar installations.",
      image: Commercial,
      features: [
        "Large-scale installations",
        "Tax incentive guidance",
        "ROI analysis",
        "Maintenance plans",
        "Energy management systems"
      ]
    },
    {
      title: "Agricultural Solar",
      description: "Agricultural solar, or agrivoltaics, combines agriculture with solar power generation on the same land.",
      image: Agriculture,
      features: [
        "Solarization of existing pumps",
        "Solar Fencing",
        "Additional support with government initiatives",
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div id={`${service.title.toLowerCase().replace(/\s+/g, '-')}-services`}>
                <ServiceCard {...service} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;