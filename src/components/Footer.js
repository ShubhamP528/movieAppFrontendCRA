import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome CSS

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
          {/* Company Info */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">
              Software Software Pvt Ltd
            </h3>
            <p className="text-sm mb-1">
              Rudrapur, Udham Singh Nagar, Uttarakhand, IN
            </p>
            <p className="text-sm mb-1">shubhamprajapati528@gmail.com</p>
            <p className="text-sm mb-1">+919027640571</p>
          </div>

          {/* Quick Links */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-1">
                <Link to="/" className="text-sm hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/about" className="text-sm hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="term-and-conditions"
                  className="text-sm hover:text-gray-400"
                >
                  Terms And Conditions
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/privacy-policy"
                  className="text-sm hover:text-gray-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/contact" className="text-sm hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center md:justify-end md:mr-8">
            <div className="flex space-x-4">
              <Link
                to="https://github.com/ShubhamP528"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fab fa-github"></i>
              </Link>
              <Link
                to="https://x.com/@Shubham14481056"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/shubham-prajapati-a3b635228/"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/shubham-prajapati-a3b635228/"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* Additional Information */}
        <div className="mt-8 text-white text-center md:text-left">
          <p className="text-sm">
            © 2024 Software Solution Pvt Ltd. All rights reserved.
          </p>
          <p className="text-sm mt-1">
            <Link
              to="term-and-conditions"
              className="text-sm hover:text-gray-400"
            >
              Terms of Conditions
            </Link>{" "}
            |{" "}
            <Link to="/privacy-policy" className="text-sm hover:text-gray-400">
              Privacy Policy
            </Link>
            {/* |{" "}
            <Link to="3" className="text-sm hover:text-gray-400">
              Sitemap
            </Link> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
