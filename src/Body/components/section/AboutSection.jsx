import React, { useEffect } from 'react';
import AOS from 'aos'; // Make sure to install AOS for scroll animations
import 'aos/dist/aos.css'; // AOS CSS for animations

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <section id="about" className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight mb-4" data-aos="fade-up">
            About Us - Hostel Management for Students
          </h2>
          <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="200">
            Creating a space where students can thrive, academically and socially.
          </p>
        </div>

        {/* Content */}
        <div className="flex justify-center items-center">
          <div className="text-gray-700 max-w-4xl space-y-6" data-aos="fade-up" data-aos-delay="400">
            <p className="leading-relaxed text-lg">
              At Us Hostel, we believe in creating a space where students can thrive – both academically and socially. Together, we built this place to be more than just a place to stay. It’s a sanctuary where learning, creativity, and relaxation coexist in perfect harmony. We’ve designed an environment that allows students to focus on their studies while enjoying a peaceful and comfortable atmosphere.
            </p>

            <p className="leading-relaxed text-lg">
              Our common areas are spacious and flexible, with room to host community events, study groups, and fun social gatherings. Whether it’s a late-night study session, a friendly game night, or a movie marathon, there’s always something happening here that brings everyone together.
            </p>

            <p className="leading-relaxed text-lg">
              We’ve made sure the space is open, airy, and connected to nature. Fresh air and natural light are key elements in our design, ensuring that students feel energized and motivated. Located on a peaceful street, yet close to the hustle and bustle of the city, Us Hostel is conveniently near local amenities like convenience stores, bakeries, and a vibrant Thai market across the street.
            </p>

            <p className="leading-relaxed text-lg">
              What does "us" mean to us? It’s more than just a name – it’s about the community we’ve built together. You, me, and every student who walks through our doors are part of something bigger. We’re not just residents, we’re a family. Here at Us Hostel, we’re all about creating memories, supporting each other, and building connections that last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
