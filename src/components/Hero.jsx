import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="pt-20">
      <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/image.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Standard 3-Star Hotel
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-secondary">Melisen Courts</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Comfort, Elegance & Warm Hospitality in Uyo, Akwa Ibom State
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#rooms" className="btn-secondary">
              View Rooms
            </a>
            <a href="#contact" className="btn-primary">
              Book Now
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-secondary" />
              <span>39 Okokon Udounwa Drive, Akpasak Estate, Uyo</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-secondary" />
              <span>07039056805</span>
            </div>
            <a href="https://wa.me/2347039056805" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-secondary transition-colors">
              <FaWhatsapp className="text-secondary" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
