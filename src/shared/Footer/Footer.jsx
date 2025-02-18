
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">🐾 Pet Haven</h2>
          <p className="text-sm">
            Pet Haven is dedicated to finding loving homes for pets in need.
            Adopt, foster, or donate to make a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/adopt" className="hover:text-white">
                Adopt a Pet
              </a>
            </li>
            <li>
              <a href="/donate" className="hover:text-white">
                Donate
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={18} />{' '}
              <a
                href="mailto:support@pethaven.com"
                className="hover:text-white"
              >
                support@pethaven.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> <span>+1 234 567 890</span>
            </li>
          </ul>
          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 text-center text-sm mt-8 pt-4">
        © {new Date().getFullYear()} Pet Haven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
