"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/6256e7c9ffcbf452d1da5e6d/3660e050-fc8d-40dd-ad4d-82a00515a076/787+coffee+best+coffee+near+me+in+nyc+and+in+santurce+puerto+rico.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Discover <span className="text-yellow-400">Real Coffee</span>
            <br /> with 787
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 text-gray-200">
            Ethically sourced. Roasted in Puerto Rico. Brewed with love.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 font-bold shadow-lg transition transform hover:scale-105">
            Shop Now
          </Button>
        </div>

        {/* Styled Coffee Images */}
        <div className="flex space-x-6">
          <div className="relative w-44 h-64 rounded-xl border-4 border-yellow-500 bg-white/10 shadow-2xl overflow-hidden group hover:scale-105 transition duration-300">
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80"
              alt="Cup of coffee"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
              priority
            />
          </div>

          <div className="relative w-44 h-64 rounded-xl border-4 border-yellow-500 bg-/10 shadow-2xl overflow-hidden group hover:scale-105 transition duration-300 hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80"
              alt="Coffee beans"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
