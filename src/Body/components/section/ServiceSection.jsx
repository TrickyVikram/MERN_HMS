import React, { useState } from 'react';
import '../../assets/css/style.css';

const ServiceSection = () => {
  const services = [
    {
      icon: 'bx bxs-camera', // Represents CCTV surveillance
      title: 'Under CCTV Surveillance',
      link: '/',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-500',
    },
    {
      icon: 'bx bx-bulb', // Represents electricity
      title: '24*7 Electricity available',
      link: '/',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-500',
    },
    {
      icon: 'bx bx-water', // Represents water supply
      title: '24*7 Water Supply',
      link: '/',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-500',
    },
    {
      icon: 'bx bx-shield-alt-2', // Represents security for no outsiders
      title: 'No outsider allowed except parents',
      link: '/',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-500',
    },
    {
      icon: 'bx bx-dumbbell', // Represents gym facilities
      title: 'Gym facilities available',
      link: '/',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-500',
    },
    {
      icon: 'bx bx-football', // Represents sports room
      title: 'Sports room facilities',
      link: '/',
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-500',
    },
  ];

  return (
    <>
      <section id="services" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">Services We Provide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 ${service.bgColor} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                >
                  <i className={`${service.icon} ${service.iconColor} text-3xl`}></i>
                </div>
                <h4 className="text-lg font-medium text-gray-800">
                  <a
                    href={service.link}
                    className="hover:text-blue-500 transition duration-200"
                  >
                    {service.title}
                  </a>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <section id="cta" className="cta">
          <div className="container aos-init aos-animate" data-aos="zoom-in">
            <div className="text-center">
              <h3>For Enquiry About the Hostels</h3>
              <a className="cta-btn cta-boy" href="tel:+917479931246">
                <span>For Boys</span>
              </a>
              <a className="cta-btn cta-girl" href="tel:+917479931246">
                <span>For Girls</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceSection;
