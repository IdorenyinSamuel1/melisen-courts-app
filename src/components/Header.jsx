import React, { useState } from 'react'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Melisen Courts</h1>
            <span className="ml-2 text-xs bg-secondary text-white px-2 py-1 rounded">3-Star</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:07039056805" className="btn-primary flex items-center space-x-2">
              <FaPhone className="text-sm" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:07039056805"
                className="block py-3 text-primary font-medium flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaPhone />
                <span>07039056805</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
