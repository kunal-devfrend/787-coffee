'use client';
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/6256e7c9ffcbf452d1da5e6d/fce5bd65-d5dd-4535-806d-46b64f1c7cd8/787+coffee+logo+cafe+de+puerto+rico.png?format=1500w"
              alt="787 Coffee Logo"
              width={180}  // larger width
              height={72}  // larger height
              className="object-contain h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 font-bold text-xl tracking-wider text-black">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-gray-700 transition-colors">
              About
            </Link>
            <Link href="#menu" className="hover:text-gray-700 transition-colors">
              Menu
            </Link>
            <Link href="#shop" className="hover:text-gray-700 transition-colors">
              Shop
            </Link>
            <Link href="#contact" className="hover:text-gray-700 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA + User Button */}
          <div className="hidden md:flex items-center space-x-6">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold shadow-lg rounded-lg">
              Order Now
            </Button>

            {/* User Button */}
            <button
              onClick={() => setShowUserDetails(!showUserDetails)}
              aria-label="User details"
              className="text-black hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-black rounded-full"
              title="Toggle User Details"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A9.962 9.962 0 0112 15c2.761 0 5.264 1.12 7.121 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // X icon
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {/* Mobile Menu Overlay */}
<nav
  className={`absolute top-full right-6 w-64 bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 ease-in-out z-40 ${
    mobileMenuOpen ? "block" : "hidden"
  }`}
>
  <ul className="flex flex-col space-y-4 text-lg font-semibold text-black">
    <li>
      <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-700">
        About
      </Link>
    </li>
    <li>
      <Link href="#menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-700">
        Menu
      </Link>
    </li>
    <li>
      <Link href="#shop" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-700">
        Shop
      </Link>
    </li>
    <li>
      <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-700">
        Contact
      </Link>
    </li>
    <li>
      <Button
        className="bg-black hover:bg-gray-800 text-white w-full text-base mt-2"
        onClick={() => setMobileMenuOpen(false)}
      >
        Order Now
      </Button>
    </li>
  </ul>
</nav>

      </header>

      {/* User Details Panel */}
      {showUserDetails && (
        <div className="fixed top-20 right-6 bg-white shadow-lg rounded-lg p-5 w-72 text-black font-semibold z-50">
          <h3 className="text-xl mb-3 border-b border-gray-300 pb-2">User Details</h3>
          <p><strong>Name:</strong> Jane Doe</p>
          <p><strong>Email:</strong> jane.doe@example.com</p>
          <p><strong>Member Since:</strong> Jan 2024</p>
          <Button
            variant="outline"
            className="mt-4 w-full text-black border-black hover:bg-gray-100"
            onClick={() => setShowUserDetails(false)}
          >
            Close
          </Button>
        </div>
      )}
    </>
  );
}
