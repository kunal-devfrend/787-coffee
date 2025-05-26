'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  const [showFull, setShowFull] = useState(false);

  return (
    <section id="about" className="bg-[#f9f6f1] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-700 leading-tight">
            The Heart of Puerto Rican Coffee
          </h2>

          <p className="text-gray-800 text-lg font-medium leading-relaxed">
            At <span className="text-yellow-700 font-semibold">787 Coffee</span>, we don’t just brew coffee—we grow, roast, and serve it with purpose.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Every bean is hand-picked from our farms in Puerto Rico and roasted to perfection to bring you an authentic experience with every sip.
          </p>

          {showFull && (
            <div className="space-y-4 text-gray-600">
              <p>
                Our story is one of resilience, connection, and deep respect for the land. We believe that great coffee starts with great soil, sustainable practices, and honest relationships with our farmers.
              </p>
              <p>
                Whether you visit our cafes or brew at home, you're part of a movement that's reshaping how coffee is grown, appreciated, and shared.
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
            <Button
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 text-base font-semibold shadow-md"
              onClick={() => setShowFull(!showFull)}
            >
              {showFull ? 'Read Less' : 'Read More'}
            </Button>
            <Button variant="outline" className="text-yellow-700 border-yellow-700 hover:bg-yellow-100">
              Our Journey
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative h-[420px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="https://greenpointers.com/app/uploads/2022/04/IMG_2910.jpeg"
            alt="Coffee Farm"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
