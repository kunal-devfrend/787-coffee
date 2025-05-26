import Hero from "./components/Hero";
import Header from './components/Header'
import About from "./components/About";
import MenuHighlights from "./components/MenuHighlights";
import ShopCTA from "./components/ShopCTA";
import FeaturedProducts from "./components/FeaturedProducts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <About />
      <MenuHighlights />
      <FeaturedProducts/>
      <ShopCTA />
      <Contact />
      <Footer />
    </main>
  );
}
