import React from 'react'
import { 
  FaParking, 
  FaUtensils, 
  FaConciergeBell, 
  FaShieldAlt, 
  FaTv, 
  FaWifi,
  FaCar,
  FaClock
} from 'react-icons/fa'

const Facilities = () => {
  const facilities = [
    {
      icon: <FaParking />,
      title: 'Secure Parking',
      description: 'Ample and secure parking space for guests'
    },
    {
      icon: <FaUtensils />,
      title: 'Dining Services',
      description: 'Delicious local and continental dishes'
    },
    {
      icon: <FaConciergeBell />,
      title: '24/7 Reception',
      description: 'Round-the-clock front desk service'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security',
      description: '24-hour security for your safety'
    },
    {
      icon: <FaWifi />,
      title: 'Free Wi-Fi',
      description: 'High-speed internet throughout the hotel'
    },
    {
      icon: <FaTv />,
      title: 'Entertainment',
      description: 'Flat screen TVs in all rooms'
    },
    {
      icon: <FaCar />,
      title: 'Airport Transfers',
      description: 'Transportation services available on request'
    },
    {
      icon: <FaClock />,
      title: 'Laundry Service',
      description: 'Professional laundry and dry cleaning'
    },
  ]

  return (
    <section id="facilities" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hotel Facilities</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need for a comfortable and enjoyable stay
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary bg-opacity-10 text-primary text-2xl rounded-full mb-4">
                {facility.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{facility.title}</h3>
              <p className="text-gray-600 text-sm">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities
