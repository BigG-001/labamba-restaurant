
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroFood from "../assets/sub-hero-food.jpeg"
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] overflow-hidden bg-savory-dark"
      >

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroFood}
          alt="Beautifully prepared gourmet cuisine"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-r from-savory-dark via-savory-dark/80 to-transparent" />

        <div className="absolute inset-0 bg-linear-to-t from-savory-dark/70 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 min-h-[85vh] flex items-center">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl py-20"
        >

          {/* Eyebrow Text */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-savory-gold" />

            <p className="uppercase tracking-[0.3em] text-xs text-savory-gold">
              Welcome to LA'bamba
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] font-medium text-savory-ivory">
            Where luxury
            <br />
            Meets
            <span className="italic text-savory-gold">
              {" "}Taste.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-lg text-savory-ivory/70 text-base md:text-lg leading-8">
            From the rich traditions of Nigerian cuisine
            to international culinary masterpieces,
            discover a dining experience worth remembering.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 mt-10">

            <Link
              to="/menu"
              className="bg-savory-gold text-savory-dark px-8 py-4 flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:bg-savory-ivory transition-colors"
            >
              Discover Our Menu
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/about"
              className="text-savory-ivory flex items-center gap-3 text-xs uppercase tracking-widest hover:text-savory-gold transition-colors"
            >
              Our Story
              <ArrowDown size={16} />
            </Link>

          </div>

          {/* Brand Statement */}
          <div className="mt-16 flex items-center gap-6">
            <div className="h-px w-16 bg-savory-gold/50" />

            <p className="text-[10px] uppercase tracking-[0.25em] text-savory-ivory/50">
              Nigerian Heritage · Global Inspiration
            </p>
          </div>

        </motion.div>
      </div>

    </section>
  );
}

export default Hero;