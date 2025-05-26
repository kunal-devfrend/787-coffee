"use client";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f9f6f1] py-5 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We'd love to hear from you! Whether you're visiting our shop or want
          to reach out online.
        </p>
        {/* Embedded Map */}
        <div className="rounded-xl overflow-hidden shadow-lg max-w-6xl mx-auto mb-16">
          <iframe
            title="787 Coffee Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7830642846425!2d-73.98589488459587!3d40.72663014460773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259886da70a03%3A0x146506e534bfa223!2s131%20E%207th%20St%2C%20New%20York%2C%20NY%2010009%2C%20USA!5e0!3m2!1sen!2sin!4v1623010020406!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-yellow-600 text-xl" />
              <p className="text-gray-700 font-medium">
                131 E 7th St, New York, NY
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-yellow-600 text-xl" />
              <p className="text-gray-700 font-medium">hello@787coffee.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-yellow-600 text-xl" />
              <p className="text-gray-700 font-medium">+1 (212) 555-7878</p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 text-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 text-xl"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 text-xl"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
