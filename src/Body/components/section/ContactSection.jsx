import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="mt-12 bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-600">Contact Us</h2>
        </div>
        <div>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6704.5857636715755!2d77.04279928451194!3d30.250232399941908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fad2d69058e33%3A0xc7d016db25112762!2sMaharishi%20Markandeshwar%20(Deemed%20to%20be%20University)!5e0!3m2!1sen!2sin!4v1732314980791!5m2!1sen!2sin"
            className="w-full h-80 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-wrap mt-12">
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <i className="icofont-google-map text-xl text-green-600"></i>
                <h4  >
                   <span className="font-semibold" >Location:</span> <span className="text-blue-600">Ambala, pin 133207</span>
                </h4>
              </div>
              <div className="mb-6">
                <i className="icofont-envelope text-xl text-green-600"></i>
                <h4 >
                 <span className="font-semibold">Email:</span>  <span className=" text-blue-600"  >vkumarsah999@gmail.com</span>
                </h4>
              </div>
              <div>
                <i className="icofont-phone "></i>
                <h4 >
                   <span  className="font-semibold" >Call:</span> <span  className=" text-blue-600"   >+91 7479931246</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mt-6 lg:mt-0">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Want the latest blockbuster news?
              </h2>
              <form className="mt-6">
                <div className="relative mx-auto max-w-lg">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@company.com"
                    className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
