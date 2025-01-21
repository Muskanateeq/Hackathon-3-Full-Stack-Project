// FAQ Page in Next.js with Tailwind CSS

import React from 'react';

const FaqPage = () => {
  return (
    <>
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="bg-gray-100 py-10">
        <div className="pl-10 md:pl-32 sm:pl-10 lg:pl-32">
          {/* Contact Us Heading */}
          <h1 className="text-3xl font-semibold text-blue-950">FAQ</h1>
          {/* Paragraph with Home.Pages.Contact Us */}
          <p className="mt-2 ">
            Home<span className="mx-1 text-pink-500">.</span>
            <span className="text-pink-500">Faq</span>
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4 md:px-8">
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          General Information
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Eu dictumst cum at sed estiamat condimentum?
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique rutrum vitae, consequat gravida sagittis.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Magna bibendum est fermentum eros?
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique rutrum vitae, consequat gravida sagittis.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Oda musinka hac est consequat sceleret?
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique rutrum vitae, consequat gravida sagittis.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Eti id blandit sabora bel et velit quo maro?
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique rutrum vitae, consequat gravida sagittis.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Ask a Question</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Type Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows={4}
                  placeholder="Type Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FaqPage;
