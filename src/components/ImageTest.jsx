import React from 'react';

const ImageTest = () => {
  return (
    <div className="p-4">
      <h2>Image Test</h2>
      <img src="/src/assets/images/Hero.jpg" alt="Test 1" className="w-64 h-64 object-cover m-2" />
      <img src="/src/assets/images/heroSection.jpg" alt="Test 2" className="w-64 h-64 object-cover m-2" />
      <img src="/src/assets/images/solar.jpg" alt="Test 3" className="w-64 h-64 object-cover m-2" />
    </div>
  );
};

export default ImageTest; 