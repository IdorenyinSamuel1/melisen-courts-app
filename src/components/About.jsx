import React from 'react'
import { FaHotel, FaMapMarkerAlt, FaStar } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Melisen Courts</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your home away from home in the heart of Uyo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Melisen Courts Hotel"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(3)].map((_, i) => (
                    <FaStar key={i} className="text-secondary" />
                  ))}
                </div>
                <p className="font-semibold">Standard 3-Star Hotel</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Experience Unparalleled Comfort</h3>
            <p className="text-gray-600 leading-relaxed">
              Melisen Courts is a standard 3-star hotel nestled in the serene Akpasak Estate Phase III, 
              Ifatai, Off Oron Road, Uyo, Akwa Ibom State. We pride ourselves on offering guests a 
              perfect blend of comfort, luxury, and authentic Nigerian hospitality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Strategically located near the Transformer Bustop, our hotel provides easy access to 
              major attractions, business districts, and transportation hubs in Uyo. Whether you're 
              visiting for business or leisure, we ensure your stay is memorable.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                  <FaHotel className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Quality Accommodation</h4>
                  <p className="text-gray-600 text-sm">Well-appointed rooms with modern amenities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Prime Location</h4>
                  <p className="text-gray-600 text-sm">Conveniently located in Akpasak Estate</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h4 className="font-semibold text-primary mb-3">Our Address</h4>
              <p className="text-gray-600">
                39 Okokon Udounwa Drive, Akpasak Estate Phase III,<br />
                Ifatai, Off Oron Road, Uyo (Transformer bustop),<br />
                Akwa Ibom State, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
