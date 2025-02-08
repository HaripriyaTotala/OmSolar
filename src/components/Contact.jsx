import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');

  useEffect(() => {
    emailjs.init("8n-v4eBh-eb-y6iXE");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_0guh3xb',
        'template_m85q75q',
        {
          // Make sure these match your EmailJS template variables exactly
          user_name: formData.name,        // Changed from name
          user_email: formData.email,      // Changed from email
          user_phone: formData.phone,      // Changed from phone
          user_message: formData.message,  // Changed from message
          timestamp: new Date().toLocaleString()
        },
        '8n-v4eBh-eb-y6iXE'
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9481721501</span>
              </p>
              <p className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>omsolartdr@gmail.com</span>
              </p>
            </div>
            
          
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-900 transition-colors"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Error sending message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;