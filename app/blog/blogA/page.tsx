"use client";
import React from "react";
import Image from "next/image";
import { FaPenNib, FaCalendarAlt } from 'react-icons/fa';
import { AiFillStar } from "react-icons/ai";
import Link from "next/link"
import Logo from "@/components/Logo"

const Blog = () => {
  const blogProduct = [
    {
      id: 1,
      image: "/blog2/product1.png",
      title: "Quam sed",
      discountprice: "$32.00",
      actualprice: "$56.00",
      rating: 4,
    },
    {
      id: 2,
      image: "/blog2/product2.png",
      discountprice: "$32.00",
      actualprice: "$56.00",
      rating: 3,
    },
    {
      id: 3,
      image: "/blog2/product3.png",
      title: "A etium",
      discountprice: "$32.00",
      actualprice: "$56.00",
      rating: 5,
    },
    {
      id: 4,
      image: "/blog2/product4.png",
      title: "Mini nisi",
      discountprice: "$32.00",
      actualprice: "$56.00",
      rating: 4,
    },
  ]
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

      <div className="bg-white text-gray-800">
        <div className="bg-gray-50 text-gray-800">
          {/* Header Section */}
          <div className="bg-gray-100 py-10">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim.</p>
                <p className="text-sm text-gray-400 mt-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reprehenderit veritatis, saepe amet reiciendis quo asperiores dolorum aliquam dolor alias id autem perspiciatis, nostrum, error tenetur numquam! Ipsum, dolorem iure.
                  Iste non debitis deleniti reprehenderit quo, explicabo harum veritatis laborum esse earum libero, quisquam atque Minima in laboriosam perspiciatis.</p>
                <div className="bg-gray-100 mt-10 p-5 border border-l-pink-500 border-l-2">
                  <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissimdolorum aliquam dolor.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 pl-4">
                <Image
                  src="/blog2/blog1.png"
                  alt="blog1"
                  className="w-200 h-auto"
                  width={290}
                  height={290}
                />
                <Image
                  src="/blog2/blog2.png"
                  alt="blog2"
                  className="w-200 h-auto"
                  width={290}
                  height={290}
                />
              </div>
              <p className="text-sm text-gray-400 mt-9 pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reprehenderit veritatis, saepe amet reiciendis quo asperiores dolorum aliquam dolor alias id autem perspiciatis, nostrum, error tenetur numquam! Ipsum, dolorem iure.
                Iste non debitis deleniti reprehenderit quo, explicabo harum veritatis laborum esse earum libero, quisquam atque Minima in laboriosam perspiciatis.</p>
              <div className="grid grid-cols-4 pl-4 mt-10">
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-950">Search</h3>
            {/* Search Bar */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Categories */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-950">Categories</h3>
              <ul className="mt-2 grid grid-cols-2">
                {Array(6)
                  .fill("Women (21)")
                  .map((item, index) => (
                    <li
                      key={index}
                      className="relative text-gray-600 text-sm hover:text-white bg-gray-100 p-2 rounded-md hover:bg-pink-500 transition-all cursor-pointer"
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
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-950">Recent Posts</h3>
              <ul className="mt-2 space-y-4">
                {recentPosts.map((post, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <Image
                      src={post.imgSrc}
                      alt="Recent Post"
                      className="w-16 h-10 object-cover "
                      width={800}
                      height={800}
                    />
                    <div>
                      <p className="text-gray-600 text-sm">{post.text}</p>
                      <p className="text-gray-400 text-sm">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sale Product */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-950">Sale Product</h3>
              <ul className="mt-2 space-y-4">
                {saleProducts.map((product, index) => (
                  <li key={index} className="flex items-center space-x-4 group relative">
                    <Image
                      src={product.imgSrc}
                      alt="Sale Product"
                      className="w-16 h-10 object-cover border-transparent group-hover:border-black group-hover:border transition-all"
                      width={800}
                      height={800}
                    />
                    <div>
                      <p className="text-gray-600 text-sm">{product.title}</p>
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
                <div className=" rounded-sm overflow-hidden mt-2">
                  <Image
                    src="/blogpage/offer1.png"
                    alt="Offer Product 1"
                    width={800} // Specific width for this image
                    height={800} // Specific height for this image
                    className="object-cover w-full h-auto"
                  />
                  <div className="p-4">
                    <h4 className="text-gray-800 font-medium text-sm">Duis Lectus est.</h4>
                    <div className="flex justify-between w-full mt-2 text-sm">
                      <span className="text-gray-400">$20.00</span>
                      <span className="text-gray-400 line-through">$30.00</span>
                    </div>
                  </div>
                </div>
                {/* Offer 2 */}
                <div className="rounded-sm overflow-hidden mt-2">
                  <Image
                    src="/blogpage/offer2.png"
                    alt="Offer Product 2"
                    width={800} // Different width for this image
                    height={800} // Different height for this image
                    className="object-cover w-full h-auto"
                  />
                  <div className="p-4">
                    <h4 className="text-gray-800 font-medium text-sm">Sed Placerat.</h4>
                    <div className="flex justify-between w-full mt-2 text-sm">
                      <span className="text-gray-400">$35.00</span>
                      <span className="text-gray-400 line-through">$50.00</span>
                    </div>
                  </div>
                </div>
                {/* Offer 3 */}
                <div className="rounded-sm overflow-hidden">
                  <Image
                    src="/blogpage/offer3.png"
                    alt="Offer Product 3"
                    width={800} // Custom width for this image
                    height={800} // Custom height for this image
                    className="object-cover w-full h-auto"
                  />
                  <div className="p-4">
                    <h4 className="text-gray-800 font-medium text-sm">Netus Proin.</h4>
                    <div className="flex justify-between w-full mt-2 text-sm">
                      <span className="text-gray-400">$40.00</span>
                      <span className="text-gray-400 line-through">$60.00</span>
                    </div>
                  </div>
                </div>
                {/* Offer 4 */}
                <div className="rounded-sm overflow-hidden">
                  <Image
                    src="/blogpage/offer4.png"
                    alt="Offer Product 4"
                    width={800} // Unique size for this image
                    height={800} // Unique size for this image
                    className="object-cover w-full h-auto"
                  />
                  <div className="p-4">
                    <h4 className="text-gray-800 font-medium text-sm">Platea in.</h4>
                    <div className="flex justify-between w-full mt-2 text-sm">
                      <span className="text-gray-400">$15.00</span>
                      <span className="text-gray-400 line-through">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Follow */}
            <div className="">
              <h3 className="text-lg font-semibold text-blue-950">Follow</h3>
              <div className="max-w-48 flex justify-start items-start">
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
              <div className="grid  mt-2">
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
        <div className="flex items-center justify-center cursor-pointer">
          <div className="border border-gray-300 bg-white p-2 px-3 rounded-md shadow-md text-gray-400 hover:bg-pink-500 hover:text-white">
            <Link href="/blog"><button>1</button></Link>
          </div>
          <div className="border border-gray-300 bg-white p-2 px-3 rounded-md shadow-md ml-5 text-gray-400 hover:bg-pink-500 hover:text-white">
            <Link href="/blog/blogA"><button>2</button></Link>
          </div>
        </div>
      </div>
      <Logo />
    </>
  );
};

export default Blog;
