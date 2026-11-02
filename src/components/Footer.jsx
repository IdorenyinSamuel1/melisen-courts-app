import React from 'react'
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold">Melisen Courts</h3>
              <span className="ml-2 text-xs bg-secondary text-white px-2 py-1 rounded">3-Star</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A standard 3-star hotel offering comfort, elegance and warm hospitality 
              in the heart of Uyo, Akwa Ibom State. Your home away from home.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/2347039056805" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="tel:07039056805"
                className="bg-secondary p-2 rounded-full hover:bg-opacity-90 transition-colors"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
              <a 
                href="mailto:tobyjrsamuel1@gmail.com"
                className="bg-gray-600 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-300 hover:text-white transition-colors">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-gray-300 hover:text-white transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  39 Okokon Udounwa Drive, Akpasak Estate Phase III, Ifatai, Off Oron Road, Uyo
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-secondary flex-shrink-0" />
                <a href="tel:07039056805" className="text-gray-300 hover:text-white transition-colors">
                  07039056805
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <a href="mailto:tobyjrsamuel1@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  tobyjrsamuel1@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaWhatsapp className="text-secondary flex-shrink-0" />
                <a 
                  href="https://wa.me/2347039056805" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Melisen Courts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
