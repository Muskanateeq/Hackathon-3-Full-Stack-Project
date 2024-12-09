import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-700 ">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 pl-12">
          {/* Footer Column 1 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans pl-12">Hekto</h3>
  
{/* Newsletter Signup */}
<form className="flex pl-3">
  <input
    type="email"
    placeholder="Email"
    className="w-28 px-2 py-0.5 text-sm border border-gray-300 "
  />
        <div className="flex justify-center  md:justify-start">
        <Link href="/login"><button className="bg-pink-500 text-white py-2 px-2  hover:bg-pink-600">
              SignUp
            </button></Link>
          </div>
</form>


            <p className="mt-4 text-sm pl-12">
              Contact Info: 17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
  
          {/* Footer Column 2 */}
          <div>
            <h4 className="text-lg  mb-4 pl-12">Categories</h4>
            <ul className="space-y-2 text-gray-400 pl-12">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Laptops & Computers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Cameras & Photography
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Smart Phones & Tablets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Video Games & Consoles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Waterproof Headphones
                </a>
              </li>
            </ul>
          </div>
  
          {/* Footer Column 3 */}
          <div>
            <h4 className="text-lg  mb-4 pl-12">Customer Care</h4>
            <ul className="space-y-2  text-gray-400 pl-12">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Discount
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>
  
          {/* Footer Column 4 */}
          <div>
            <h4 className="text-lg  mb-4 pl-12">Pages</h4>
            <ul className="space-y-2  text-gray-400 pl-12">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Browse the Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Category
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Pre-Built Pages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Visual Composer Elements
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="bg-gray-200 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-sm text-gray-400 pl-10 md:pl-32 sm:pl-10 lg:pl-32">©Webecy - All Rights Reserved</p>
            <div className="flex space-x-4 pr-32 md:pr-32 sm:pr-32 lg:pr-32">
              <Image 
              src="/footer/Group 205.png"
              alt="social media icon"
              width={50}
              height={50}
              ></Image>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  