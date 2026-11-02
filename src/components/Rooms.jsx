import React from 'react'
import { FaBed, FaWifi, FaTv, FaBath, FaSnowflake } from 'react-icons/fa'

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Standard Room',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Cozy and comfortable room perfect for solo travelers or business guests.',
      amenities: [
        { icon: <FaBed />, text: 'Queen Size Bed' },
        { icon: <FaWifi />, text: 'Free Wi-Fi' },
        { icon: <FaTv />, text: 'Flat Screen TV' },
        { icon: <FaBath />, text: 'Private Bathroom' },
        { icon: <FaSnowflake />, text: 'Air Conditioning' },
      ],
    },
    {
      id: 2,
      name: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Spacious room with enhanced amenities for added comfort and relaxation.',
      amenities: [
        { icon: <FaBed />, text: 'King Size Bed' },
        { icon: <FaWifi />, text: 'Free Wi-Fi' },
        { icon: <FaTv />, text: 'Flat Screen TV' },
        { icon: <FaBath />, text: 'En-suite Bathroom' },
        { icon: <FaSnowflake />, text: 'Air Conditioning' },
      ],
    },
    {
      id: 3,
      name: 'Executive Suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Luxurious suite with separate living area, ideal for extended stays and VIP guests.',
      amenities: [
        { icon: <FaBed />, text: 'King Size Bed' },
        { icon: <FaWifi />, text: 'Free Wi-Fi' },
        { icon: <FaTv />, text: 'Smart TV' },
        { icon: <FaBath />, text: 'Luxury Bathroom' },
        { icon: <FaSnowflake />, text: 'Air Conditioning' },
      ],
    },
  ]

  return (
    <section id="rooms" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Rooms & Suites</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comfortable accommodations designed for your relaxation and convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  3-Star
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{room.description}</p>
                <div className="space-y-2 mb-6">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-600 text-sm">
                      <span className="text-primary">{amenity.icon}</span>
                      <span>{amenity.text}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="btn-primary w-full block text-center">
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
