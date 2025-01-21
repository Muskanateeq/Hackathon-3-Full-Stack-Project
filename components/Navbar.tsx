"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {/* Top Blue Bar */}
      <div className="bg-purple-700 text-white text-sm py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center justify-center space-x-1">
              <FaEnvelope className="text-white" />
              <p>shahsoha@gmail.com</p>
            </div>
            <div className="flex items-center space-x-1">
              <FaPhoneAlt  className="text-white"/>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="flex items-center justify-start space-x-4 sm:space-x-6 w-full sm:w-auto mt-2">
            <div className="flex items-center space-x-1 cursor-pointer">
              <p>English</p>
              <MdKeyboardArrowDown className="text-white" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <p>USD</p>
              <MdKeyboardArrowDown className="text-white" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <Link href="/login"><button>Login</button></Link>
              <FaUser className="text-white" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <Link href="/cart"><button>Cart</button></Link>
              <FaShoppingCart className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white text-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <div className="text-xl font-bold">
            <Link href="/">Hekto</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <Link href="/" className="hover:text-pink-500 transition">Home</Link>
            <Link href="/about-us" className="hover:text-pink-500 transition">About us</Link>
            <Link href="/product" className="hover:text-pink-500 transition">Products</Link>
            <Link href="/contact" className="hover:text-pink-500 transition">Contact</Link>
            <Link href="/faq" className="hover:text-pink-500 transition">Faq</Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden focus:outline-none order-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <div className="flex md:flex sm:flex lg:flex items-center order-1 ">
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700"
              />
              <button className="bg-pink-500 text-white p-2 hover:bg-pink-600 transition mr-5">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-gray-50 border-t border-gray-200 md:hidden">
            <Link href="/" className="block px-4 py-2 hover:text-pink-500 transition">Home</Link>
            <Link href="/about-us" className="block px-4 py-2 hover:text-pink-500 transition">About us</Link>
            <Link href="/product" className="block px-4 py-2 hover:text-pink-500 transition">Products</Link>
            <Link href="/shop" className="block px-4 py-2 hover:text-pink-500 transition">Shop</Link>
            <Link href="/contact" className="block px-4 py-2 hover:text-pink-500 transition">Contact</Link>
            <Link href="/pagess/faq" className="hover:text-pink-500 transition">FAQ</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
