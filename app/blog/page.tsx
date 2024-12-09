"use client";
import React from "react";
import Image from "next/image";
import { FaPenNib, FaCalendarAlt } from 'react-icons/fa';
import Logo from "@/components/Logo"

const Blog = () => {
  // Data for dynamic images and content
  const recentPosts = [
    { imgSrc: "/blogpage/post1.png", text: "It is a long established fact", date: "Aug 09, 2020" },
    { imgSrc: "/blogpage/post2.png", text: "It is a long established fact", date: "Aug 09, 2020" },
    { imgSrc: "/blogpage/post3.png", text: "It is a long established fact", date: "Aug 09, 2020" },
    { imgSrc: "/blogpage/post4.png", text: "It is a long established fact", date: "Aug 09, 2020" },
  ];

  const saleProducts = [
    { imgSrc: "/blogpage/sale1.png", title: "Elit ornare in enim mauris.", date: "Aug 09, 2020" },
    { imgSrc: "/blogpage/sale2.png", title: "Viverra pulvinar et enim.", date: "Aug 09, 2020" },
    { imgSrc: "/blogpage/sale3.png", title: "Mattis varius donec fdsfd", date: "Aug 09, 2020" },
  ];

  return (
    <>
    <div className="bg-gray-50 text-gray-800">
        <div className="bg-gray-50 text-gray-800">
  {/* Header Section */}
  <div className="bg-gray-100 py-8">
    <div className="pl-10 md:pl-32 sm:pl-10 lg:pl-32">
      {/* Contact Us Heading */}
      <h1 className="text-3xl font-semibold text-blue-950">Blog Page</h1>
      {/* Paragraph with Home.Pages.Contact Us */}
      <p className="mt-2 ">
        Home<span className="mx-1 text-black">.</span>Pages<span className="mx-1 text-pink-500">.</span><span className="text-pink-500">Blog Page</span>
      </p>
    </div>
  </div>
</div>
      {/* Blog Page Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Blog Posts Section */}
        <div className="lg:col-span-2">
          {/* Post 1 */}
          <div className="mb-8">
            <Image
              src="/blogpage/blog2.png"
              alt="Blog Post 1"
              className="w-200 h-auto rounded-lg"
              width={800}
              height={800}
            />
                        <div className="p-4">
              {/* Author and Date with Icons */}
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <FaPenNib className="text-pink-500" /> {/* Pink Pen Icon */}
                <span className="bg-pinik-100">Surf Auxion</span>
                &nbsp;|&nbsp;
                <FaCalendarAlt className="text-yellow-500" /> {/* Yellow Calendar Icon */}
                <span className="bg-pinik-100">Aug 09 2020</span>
              </p>
              {/* Blog Title */}
              <h3 className="text-blue-950 text-lg font-semibold mt-2 group-hover:text-pink-500 transition">
              Mauris at orci non vulputate diam tincidunt nec.
              </h3>
              {/* Blog Description */}
              <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              {/* Read More Link */}
              <a
                href="#"
                className="text-blue-950 font-medium mt-3 block underline decoration-blue-950 group-hover:text-pink-500 group-hover:decoration-pink-500 transition"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Post 2 */}
          <div className="mb-8">
            <Image
              src="/blogpage/blog3.png"
              alt="Blog Post 2"
              className="w-200 h-auto rounded-lg"
              width={800}
              height={800}
            />
                        <div className="p-4">
              {/* Author and Date with Icons */}
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <FaPenNib className="text-pink-500" /> {/* Pink Pen Icon */}
                <span className="bg-pinik-100">Surf Auxion</span>
                &nbsp;|&nbsp;
                <FaCalendarAlt className="text-yellow-500" /> {/* Yellow Calendar Icon */}
                <span className="bg-pinik-100">Aug 09 2020</span>
              </p>
              {/* Blog Title */}
              <h3 className="text-blue-950 text-lg font-semibold mt-2 group-hover:text-pink-500 transition">
              Mauris at orci non vulputate diam tincidunt nec.
              </h3>
              {/* Blog Description */}
              <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              {/* Read More Link */}
              <a
                href="#"
                className="text-blue-950 font-medium mt-3 block underline decoration-blue-950 group-hover:text-pink-500 group-hover:decoration-pink-500 transition"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Post 3 */}
          <div>
            <Image
              src="/blogpage/blog1.png"
              alt="Blog Post 3"
              className="w-200 h-auto rounded-lg"
              width={800}
              height={800}
            />
                        <div className="p-4">
              {/* Author and Date with Icons */}
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <FaPenNib className="text-pink-500" /> {/* Pink Pen Icon */}
                <span className="bg-pinik-100">Surf Auxion</span>
                &nbsp;|&nbsp;
                <FaCalendarAlt className="text-yellow-500" /> {/* Yellow Calendar Icon */}
                <span className="bg-pinik-100">Aug 09 2020</span>
              </p>
              {/* Blog Title */}
              <h3 className="text-blue-950 text-lg font-semibold mt-2 group-hover:text-pink-500 transition">
              Mauris at orci non vulputate diam tincidunt nec.
              </h3>
              {/* Blog Description */}
              <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              {/* Read More Link */}
              <a
                href="#"
                className="text-blue-950 font-medium mt-3 block underline decoration-blue-950 group-hover:text-pink-500 group-hover:decoration-pink-500 transition"
              >
                Read More
              </a>
            </div>

          </div>
        </div>

        {/* Sidebar Section */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-blue-950">Search</h3>
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-blue-950">Categories</h3>
            <ul className="mt-4 grid grid-cols-2">
              {Array(8)
                .fill("Women (21)")
                .map((item, index) => (
                  <li
                    key={index}
                    className="relative text-gray-600 hover:text-white bg-gray-100 p-4 rounded-md hover:bg-pink-500 transition-all cursor-pointer"
                    onMouseEnter={(e) =>
                      (e.currentTarget.textContent = "Hobbies (14)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.textContent = "Women (21)")
                    }
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-blue-950">Recent Posts</h3>
            <ul className="mt-4 space-y-4">
              {recentPosts.map((post, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <Image
                    src={post.imgSrc}
                    alt="Recent Post"
                    className="w-16 h-16 object-cover rounded-lg"
                    width={800}
                    height={800}
                  />
                  <div>
                    <p className="text-gray-600">{post.text}</p>
                    <p className="text-gray-400 text-sm">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Sale Product */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-blue-950">Sale Product</h3>
            <ul className="mt-4 space-y-4">
              {saleProducts.map((product, index) => (
                <li key={index} className="flex items-center space-x-4 group relative">
                  <Image
                    src={product.imgSrc}
                    alt="Sale Product"
                    className="w-16 h-16 object-cover rounded-lg border-transparent group-hover:border-black group-hover:border transition-all"
                    width={800}
                    height={800}
                  />
                   <div>
                    <p className="text-gray-600">{product.title}</p>
                    <p className="text-gray-400 text-sm">{product.date}</p>
                    </div>
                </li>
              ))}
            </ul>
          </div>

{/* Offer Product */}
<div className="mb-8">
  <h3 className="text-lg font-semibold text-blue-950">Offer Product</h3>
  <div className="grid grid-cols-2 gap-4">
    {/* Offer 1 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <Image
        src="/blogpage/offer1.png"
        alt="Offer Product 1"
        width={800} // Specific width for this image
        height={800} // Specific height for this image
        className="object-cover w-full h-auto"
      />
      <div className="p-4">
        <h4 className="text-gray-800 font-medium">Offer Product 1</h4>
        <div className="flex justify-between w-full mt-2 text-sm">
          <span className="text-gray-400">$20.00</span>
          <span className="text-gray-400 line-through">$30.00</span>
        </div>
      </div>
    </div>
    {/* Offer 2 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <Image
        src="/blogpage/offer2.png"
        alt="Offer Product 2"
        width={800} // Different width for this image
        height={800} // Different height for this image
        className="object-cover w-full h-auto"
      />
      <div className="p-4">
        <h4 className="text-gray-800 font-medium">Offer Product 2</h4>
        <div className="flex justify-between w-full mt-2 text-sm">
          <span className="text-gray-400">$35.00</span>
          <span className="text-gray-400 line-through">$50.00</span>
        </div>
      </div>
    </div>
    {/* Offer 3 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <Image
        src="/blogpage/offer3.png"
        alt="Offer Product 3"
        width={800} // Custom width for this image
        height={800} // Custom height for this image
        className="object-cover w-full h-auto"
      />
      <div className="p-4">
        <h4 className="text-gray-800 font-medium">Offer Product 3</h4>
        <div className="flex justify-between w-full mt-2 text-sm">
          <span className="text-gray-400">$40.00</span>
          <span className="text-gray-400 line-through">$60.00</span>
        </div>
      </div>
    </div>
    {/* Offer 4 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <Image
        src="/blogpage/offer4.png"
        alt="Offer Product 4"
        width={800} // Unique size for this image
        height={800} // Unique size for this image
        className="object-cover w-full h-auto"
      />
      <div className="p-4">
        <h4 className="text-gray-800 font-medium">Offer Product 4</h4>
        <div className="flex justify-between w-full mt-2 text-sm">
          <span className="text-gray-400">$15.00</span>
          <span className="text-gray-400 line-through">$25.00</span>
        </div>
      </div>
    </div>
  </div>
</div>


          {/* Follow */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-blue-950">Follow</h3>
            <div className="max-w-48 pr-10">
              <Image
                src="/blogpage/follow.png"
                alt="Follow Us"
                className="object-cover w-full h-auto"
                width={800}
                height={800}
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold text-blue-950">Tags</h3>
            <div className="grid  mt-4">
              {["General", "Atsanil", "Insas", "Bibsaas", "Nulla."].map((tag, index) => (
                <span
                  key={index}
                  className="text-gray-600 underline cursor-pointer hover:text-pink-500 hover:underline transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Logo/>
    </>
  );
};

export default Blog;


