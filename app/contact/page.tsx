"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email sent to: ${formData.email}`);
    // Implement email sending logic here
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="bg-gray-50 text-gray-800">
        {/* Header Section */}
        <div className="bg-gray-100 py-10">
          <div className="pl-10 md:pl-32 sm:pl-10 lg:pl-32">
            {/* Contact Us Heading */}
            <h1 className="text-3xl font-semibold text-blue-950">Contact Us</h1>
            {/* Paragraph with Home.Pages.Contact Us */}
            <p className="mt-2 ">
              Home<span className="mx-1 text-pink-500">.</span>
              <span className="text-pink-500">Contact Us</span>
            </p>
          </div>
        </div>
      </div>

      {/* Information About Us and Contact Way */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 pl-10 md:pl-32 sm:pl-10 lg:pl-32">
        {/* Information About Us */}
        <div>
          <h2 className="text-2xl font-bold text-blue-950">
            Information About Us
          </h2>
          <p className="mt-4 text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            neque laboriosam harum sunt esse modi, ratione maxime itaque
            quisquam asperiores. Asperiores voluptate ex quod facilis ipsum
            totam eius!
          </p>
          <div className="mt-6 flex space-x-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
            <div className="w-6 h-6 bg-green-300 rounded-full"></div>
          </div>
        </div>

        {/* Contact Way */}
        <div>
          <h2 className="text-xl font-bold text-blue-950 ">Contact Way</h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="relative flex items-center ">
              <div>
                <p className="text-gray-400">Tel: 877-67-88-99</p>
                <p className="text-gray-400">E-Mail: shop@store.com</p>
              </div>
            </div>
            <div className="relative flex items-center">
              <div>
                <p className="text-gray-400">20 Margaret London</p>
                <p className="text-gray-400">Great Britain, 3NM98-LK</p>
              </div>
            </div>
            <div className="relative flex items-center">
              <div>
                <p className="text-gray-400">Support Forum</p>
                <p className="text-gray-400">For over 24hr</p>
              </div>
            </div>
            <div className="relative flex items-center">
              <div>
                <p className="text-gray-400">Free standard shipping</p>
                <p className="text-gray-400">on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch Form */}
      <div className="bg-white py-16 md:pb-48 pl-10 pr-10 md:pl-32 sm:pl-10 lg:pl-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="mt-4 text-gray-600">
              Feel free to reach out by filling the form below.
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* Name and Email in One Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mr-16 sm:mr-16 pr:mr-16 pr:mr-16">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  className="w-full p-4 border rounded-md "
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your E-mail*"
                  className="w-full p-4 border rounded-md "
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                className="w-full p-4 border rounded-md "
                onChange={handleChange}
                required
              />
              {/* Message */}
              <textarea
                name="message"
                placeholder="Type Your Message*"
                className="w-full p-4 border rounded-md "
                rows={5}
                onChange={handleChange}
                required
              />
              {/* Submit Button */}
              <div className="flex justify-center md:justify-start">
                <button className="bg-pink-500 text-white py-2 px-6 hover:bg-pink-600">
                  order Now
                </button>
              </div>
            </form>
          </div>
          {/* Image Section */}
          <div className="flex justify-center pr-10">
            <Image
              src="/contact/contact.png" // Replace with the path of your image in the public folder
              alt="Contact Illustration"
              className="w-full max-w-md"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
