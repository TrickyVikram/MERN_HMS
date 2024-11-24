import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-4">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="copyright">
                &copy; Copyright <strong><span>OnVtech</span></strong>. All Rights Reserved
              </div>
            </div>
            <div className="social-links text-center md:text-right flex justify-center gap-4 pt-3 md:pt-0">
              <a href="/" className="text-white hover:text-gray-400">
                <i className="bx bxl-twitter text-xl"></i>
              </a>
              <a href="/" className="text-white hover:text-gray-400">
                <i className="bx bxl-facebook text-xl"></i>
              </a>
              <a href="/" className="text-white hover:text-gray-400">
                <i className="bx bxl-instagram text-xl"></i>
              </a>
              <a href="/" className="text-white hover:text-gray-400">
                <i className="bx bxl-skype text-xl"></i>
              </a>
              <a href="/" className="text-white hover:text-gray-400">
                <i className="bx bxl-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
