'use client';
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80",
    caption: "Cozy Vibes Inside the Café",
  },
  {
    src: "https://images.unsplash.com/photo-1601582583121-3c5cf393a621?auto=format&fit=crop&w=600&q=80",
    caption: "Barista at Work",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    caption: "Freshly Brewed Every Day",
  },
  {
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80",
    caption: "Beautiful Latte Art",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 px-6 bg-yellow-50 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">From Our Café</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Take a look at our cozy coffee spaces, fresh brews, and behind-the-scenes moments.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
        {galleryImages.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 bg-white">
            <Image src={img.src} alt={`Gallery ${i + 1}`} width={600} height={400} className="object-cover w-full h-64" />
            <div className="p-4 text-gray-700 text-sm font-medium">{img.caption}</div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Follow Us</h3>
        <div className="flex justify-center space-x-6 text-yellow-800 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
}
