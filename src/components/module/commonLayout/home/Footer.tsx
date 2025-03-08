"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-500">TastyCart</h2>
            <p className="mt-2 text-gray-400">
              Your one-stop destination for delicious meals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500">
              Quick Links
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500">Follow Us</h3>
            <div className="flex justify-center md:justify-start mt-2 space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>
            &copy; {new Date().getFullYear()} TastyCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
