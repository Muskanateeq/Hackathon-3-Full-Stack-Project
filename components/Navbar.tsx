"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaPhone, FaEnvelope } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Blue Bar */}
      <div className="bg-purple-700 text-white text-sm py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          {/* Right Side - Phone and Email */}
          <div className="flex items-center justify-end space-x-4">
            <div className="flex items-center space-x-1">
              <FaEnvelope className="text-white" />
              <p className="hidden sm:block">shahsoha@gmail.com |</p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="hidden sm:block">(123) 456-7890</p>
            </div>
          </div>
          
          {/* Left Side - English, Currency, and Other Icons */}
          <div className="flex items-center justify-start space-x-4 sm:space-x-6 w-full sm:w-auto">
            {/* English Dropdown */}
            <div className="flex items-center space-x-1">
              <p>English</p>
              <MdKeyboardArrowDown className="text-white" />
            </div>
            {/* Currency Dropdown */}
            <div className="flex items-center space-x-1">
              <p>USD</p>
              <MdKeyboardArrowDown className="text-white" />
            </div>
            {/* Login */}
            <div className="flex items-center space-x-1">
              <p>Login</p>
              <FaUser className="text-white" />
            </div>
            {/* Wishlist */}
            <div className="flex items-center space-x-1">
              <p className="hidden md:block">Wishlist</p>
              <FaHeart className="text-white" />
            </div>
            {/* Cart */}
            <div className="flex items-center space-x-1">
              <FaShoppingCart className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white text-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          {/* Logo */}
          <div className="text-lg font-bold">
            <Link href="/">Hekto</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <Link href="/" className="hover:text-pink-500 transition">
              Home
            </Link>
            <Link href="/pages" className="hover:text-pink-500 transition">
              Pages
            </Link>
            <Link href="/products" className="hover:text-pink-500 transition">
              Products
            </Link>
            <Link href="/blog" className="hover:text-pink-500 transition">
              Blog
            </Link>
            <Link href="/shop" className="hover:text-pink-500 transition">
              Shop
            </Link>
            <Link href="/contact" className="hover:text-pink-500 transition">
              Contact
            </Link>
          </div>

          {/* Right Section: Hamburger Menu and Search Bar */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden focus:outline-none"
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

            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700"
              />
              <button className="bg-pink-500 text-white p-2 hover:bg-pink-600 transition">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-gray-50 border-t border-gray-200 md:hidden">
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-pink-100 transition"
            >
              Home
            </Link>
            <Link
              href="/pages"
              className="block px-4 py-2 hover:bg-pink-100 transition"
            >
              Pages
            </Link>
            <Link
              href="/products"
              className="block px-4 py-2 hover:bg-pink-100 transition"
            >
              Products
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 hover:bg-pink-100 transition"
            >
              Blog
            </Link>
            <Link
              href="/shop"
              className="block px-4 py-2 hover:bg-pink-100 transition"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:bg-pink-100 transition"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;




