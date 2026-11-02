import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to book your stay or make inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Address</h4>
                  <p className="text-gray-600">
                    39 Okokon Udounwa Drive, Akpasak Estate Phase III,<br />
                    Ifatai, Off Oron Road, Uyo (Transformer bustop),<br />
                    Akwa Ibom State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Phone Number</h4>
                  <a href="tel:07039056805" className="text-gray-600 hover:text-primary transition-colors">
                    07039056805
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <a href="mailto:tobyjrsamuel1@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                    tobyjrsamuel1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                  <FaWhatsapp className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/2347039056805" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                  <FaClock className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Reception Hours</h4>
                  <p className="text-gray-600">24/7 - We're always here to serve you</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://wa.me/2347039056805" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <FaWhatsapp />
                <span>Book via WhatsApp</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Find Us</h3>
            <div className="bg-gray-200 rounded-lg h-[400px] overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.123456789!2d7.9333!3d5.0500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDMnMDAuMCJOIDfCsDU2JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Melisen Courts Location"
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Located at Akpasak Estate Phase III, Ifatai, Off Oron Road, Uyo (Transformer Bustop)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
