'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MenuHighlights() {
  const items = [
    {
      name: "Session Rum",
      desc: "Rich caramel aroma with smooth taste.",
      price: "$6.50",
      img: "https://images.squarespace-cdn.com/content/v1/6256e7c9ffcbf452d1da5e6d/66bcd19f-0d5a-49bb-8bf7-db2be292e6af/787_SESSION_COLOR_FRONTAL_RUM.jpeg",
    },
    {
      name: "Session Tequila",
      desc: "Bright, citrusy coffee with a smooth finish.",
      price: "$6.00",
      img: "https://images.squarespace-cdn.com/content/v1/6256e7c9ffcbf452d1da5e6d/9f998e72-e3c9-4981-88e0-54fa47efa86a/787_SESSION_FRONTAL_TEQUILA-2.jpeg",
    },
    {
      name: "Session Whiskey",
      desc: "Bold, smoky, full-bodied coffee.",
      price: "$7.00",
      img: "https://images.squarespace-cdn.com/content/v1/6256e7c9ffcbf452d1da5e6d/692d042d-ef86-486d-8c3f-8c261636d264/787_SESSION_COLOR_FRONTAL_WHISKEY.jpeg",
    },
    {
      name: "Session Supremo",
      desc: "Smooth, balanced with chocolate and nuts.",
      price: "$6.75",
      img: "https://images.squarespace-cdn.com/content/v1/6256e7c9ffcbf452d1da5e6d/2bb73ef2-8d71-4ad5-836d-a165e5dfc10e/787_SESSION_FRONTAL_SUPREMO-2.jpeg",
    },
  ];

  return (
    <section
      id="menu"
      className="min-h-screen bg-[#f9f6f1]  px-6 md:px-16 lg:px-24 xl:px-36"
    >
      <h2 className="text-5xl font-extrabold text-yellow-700 text-center mb-16 tracking-wide">
        Menu Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1400px] mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col bg-white rounded-2xl overflow-hidden border border-yellow-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-64 md:h-56 lg:h-48">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-yellow-800 mb-2">{item.name}</h3>
              <p className="text-yellow-900 font-semibold text-lg mb-3">{item.price}</p>
              <p className="text-gray-700 flex-grow">{item.desc}</p>
              <Button className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 shadow-sm">
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
