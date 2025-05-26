'use client';
import { Button } from "@/components/ui/button";

export default function ShopCTA() {
  return (
    <section className="relative py-8 bg-[#f9f6f1] px-6 md:px-20 lg:px-36 text-center overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-200 rounded-full opacity-40 blur-3xl pointer-events-none"></div>

      <h2 className="text-5xl font-extrabold mb-6 text-yellow-700 tracking-wide drop-shadow-sm">
        Shop Our Premium Coffee Beans
      </h2>
      <p className="text-xl text-yellow-900 max-w-3xl mx-auto mb-10 leading-relaxed">
        Discover the rich aroma and bold flavor of 787 Coffee's fresh-roasted beans, carefully sourced and roasted to perfection. Delivered right to your door for ultimate convenience and freshness.
      </p>

      {/* Benefits List */}
      <ul className="max-w-md mx-auto mb-12 text-yellow-800 text-left space-y-4">
        <li className="flex items-center gap-3">
          <span className="inline-block w-6 h-6 bg-yellow-600 rounded-full text-white font-bold text-center leading-6">
            ✓
          </span>
          Sustainably sourced from top coffee farms worldwide
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-block w-6 h-6 bg-yellow-600 rounded-full text-white font-bold text-center leading-6">
            ✓
          </span>
          Fresh-roasted and shipped within 24 hours
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-block w-6 h-6 bg-yellow-600 rounded-full text-white font-bold text-center leading-6">
            ✓
          </span>
          Wide variety of roasts to suit every taste
        </li>
      </ul>

      <Button className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-10 py-4 font-semibold shadow-lg transition rounded-lg">
        Visit Shop
      </Button>
    </section>
  );
}
