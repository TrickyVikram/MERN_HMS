import React, { useState } from 'react';

const FeatureCard = ({ icon, iconColor, title, description, link, bgColor, hoverColor }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-transform duration-300 transform hover:scale-105 hover:opacity-90"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`w-16 h-16 mx-auto mb-4 ${bgColor} rounded-full flex items-center justify-center transition-all duration-300 transform ${
          hovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
        }`}
      >
        <i className={`${icon} ${iconColor} text-3xl`}></i>
      </div>
      <h4 className="text-lg font-medium text-gray-800">
        <a href={link} className={`hover:${hoverColor} transition duration-200`}>
          {title}
        </a>
      </h4>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const HeroSection = () => {
  const features = [
    {
      icon: 'bx bx-dumbbell', // Gym icon
      iconColor: 'text-purple-500',
      title: 'Gym Facilities Available',
      description: 'Access to a fully equipped gym.',
      link: '/',
      bgColor: 'bg-purple-100',
      hoverColor: 'text-purple-700',
    },
    {
      icon: 'ri-thunderstorms-fill', // Electricity icon
      iconColor: 'text-yellow-500',
      title: '24*7 Electricity',
      description: 'There are no electricity cuts.',
      link: '/',
      bgColor: 'bg-yellow-100',
      hoverColor: 'text-yellow-700',
    },
    {
      icon: 'ri-drop-line', // Water supply icon
      iconColor: 'text-blue-400',
      title: '24*7 Water Supply',
      description: 'Uninterrupted water availability.',
      link: '/',
      bgColor: 'bg-blue-100',
      hoverColor: 'text-blue-600',
    },
    {
      icon: 'ri-home-wifi-line', // WiFi icon
      iconColor: 'text-green-500',
      title: 'Free Wifi',
      description: 'High-speed internet available at no extra cost.',
      link: '/',
      bgColor: 'bg-green-100',
      hoverColor: 'text-green-700',
    },
    {
      icon: 'bx bx-car', // Parking icon
      title: 'Ample Parking Space',
      description: 'Spacious parking area available for residents and visitors',
      link: '/',
      bgColor: 'bg-gray-100',
      hoverColor: 'text-red-700',
    },
    {
      icon: 'bx bx-shield-alt-2', // Security icon
      title: '24*7 Security',
      description: 'Round-the-clock security to ensure a safe environment',
      link: '/',
      bgColor: 'bg-blue-100',
      hoverColor: 'text-orange-700',
    },
  ];

  return (
    <section id="hero" className="flex items-center">
      <div className="container mx-auto relative" data-aos="fade-up" data-aos-delay="100">
        {/* Heading Section */}
        <div className="flex justify-center">
          <div className="text-center max-w-xl">
            <h1 className="text-4xl font-bold mb-6 text-blue-600">OnVTech Hostels</h1>
          </div>
        </div>

        {/* Icon Boxes Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
