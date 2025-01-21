import Image from 'next/image';
import { FaPenNib, FaCalendarAlt } from 'react-icons/fa';
import Link from "next/link"

export default function Home() {
  const blogs = [
    {
      id: 1,
      title: 'Top essential Trends in 2021',
      author: 'Sufusian',
      date: '21 August, 2020',
      imageSrc: '/blog/blog1.png', // Replace with your actual image path
      description: 'More off this less hello samlande lied much over tightly circa horse taped mightily.',
    },
    {
      id: 2,
      title: 'Top essential Trends in 2021',
      author: 'Surfaxion',
      date: '21 August, 2020',
      imageSrc: '/blog/blog2.png', // Replace with your actual image path
      description: 'More off this less hello samlande lied much over tightly circa horse taped mightily.',
    },
    {
      id: 3,
      title: 'Top essential Trends in 2021',
      author: 'SaberAli',
      date: '21 August, 2020',
      imageSrc: '/blog/blog3.png', // Replace with your actual image path
      description: 'More off this less hello samlande lied much over tightly circa horse taped mightily.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-blue-950 text-3xl font-bold text-center mb-8">Latest Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition"
          >
            <Image
              src={blog.imageSrc}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* Author and Date with Icons */}
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <FaPenNib className="text-pink-500" /> {/* Pink Pen Icon */}
                <span>{blog.author}</span>
                &nbsp;|&nbsp;
                <FaCalendarAlt className="text-yellow-500" /> {/* Yellow Calendar Icon */}
                <span>{blog.date}</span>
              </p>
              {/* Blog Title */}
              <h3 className="text-blue-950 text-lg font-semibold mt-2 group-hover:text-pink-500 transition">
                {blog.title}
              </h3>
              {/* Blog Description */}
              <p className="text-sm text-gray-400 mt-2">{blog.description}</p>
              {/* Read More Link */}
              <Link
                href="/blog"
                className="text-blue-950 font-medium mt-3 block underline decoration-blue-950 group-hover:text-pink-500 group-hover:decoration-pink-500 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

