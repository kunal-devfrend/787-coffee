'use client';
import Image from "next/image";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    name: "Puerto Rico Roast",
    desc: "Bold flavor with hints of cocoa and spice, perfectly roasted for espresso or drip.",
    price: "$15.99",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/ULT5B4FNg4biShGUbFSuMw/l.jpg",
  },
  {
    name: "787 Espresso",
    desc: "Rich, smooth, and aromatic espresso beans crafted for deep crema and flavor.",
    price: "$17.49",
    image: "https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/20826446/d1edc079-5b16-4eea-b20b-787be3d5645f.png",
  },
  {
    name: "Sunrise Medium Roast",
    desc: "Balanced and smooth with notes of caramel and nuts, perfect for every morning.",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Caribbean Dark Roast",
    desc: "Intense and full-bodied with smoky undertones, a true delight for dark roast lovers.",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Vanilla Hazelnut Blend",
    desc: "A smooth blend with creamy vanilla and nutty hazelnut flavors.",
    price: "$18.99",
    image: "https://tse3.mm.bing.net/th?id=OIP.DGPRQmwmlo04TyZ_aoibvQHaGx&pid=Api&P=0&h=180",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function FeaturedProducts() {
  return (
    <section id="shop" className="pb-12 px-6 bg-[#f9f6f1] text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900">Featured Products</h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-3">
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.desc}</p>
                <p className="text-xl font-bold text-yellow-600 mb-6">{product.price}</p>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 mt-auto rounded-xl">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
