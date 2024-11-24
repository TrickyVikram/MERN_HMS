import React from 'react';
import HeroSection from '../components/section/HeroSection';
import AboutSection from '../components/section/AboutSection';
import ServiceSection from '../components/section/ServiceSection';
import GallerySection from '../components/section/GallerySection';
import FaqSection from '../components/section/FaqSection';
import ContactSection from '../components/section/ContactSection';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Body = () => {
  return (
    <div>
       <Navbar/>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <GallerySection/>
      <FaqSection/>
      <ContactSection/>
      <br />
      <Footer/>
    </div>
  );
};

export default Body;
