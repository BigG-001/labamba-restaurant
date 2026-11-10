import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import restaurantImage from "../assets/restaurant-interior.jpg";

function AboutPreview() {
  return (
    <section className="bg-savory-dark py-24 px-6 md:px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image Section */}
        <div className="relative">

          <div className="aspect-4/5 overflow-hidden">

            <img
              src={restaurantImage}
              alt="LA'bamba restaurant culinary experience"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />

          </div>

          {/* Decorative Border */}
          <div className="absolute -bottom-5 -right-5 w-40 h-40 border-r border-b border-savory-gold/60 pointer-events-none" />

          <div className="absolute bottom-8 left-8 bg-savory-dark/90 backdrop-blur-md p-6 border border-white/10">

            <p className="font-display text-3xl text-savory-gold">
              LA'bamba
            </p>

            <p className="text-[9px] tracking-[0.25em] text-savory-ivory/70 uppercase mt-2">
              The Art of Dining
            </p>

          </div>

        </div>

        {/* Content Section */}
        <div className="lg:pl-8">

          <p className="text-savory-gold text-xs uppercase tracking-[0.35em] mb-6">
            Our Story
          </p>

          <h2 className="font-display text-5xl md:text-7xl text-savory-ivory leading-[1.05]">

            Where Luxury
            <br />

            Meets 
            <span className="italic text-savory-gold">
               Taste.
            </span>

          </h2>

          <p className="text-savory-sand/70 text-sm md:text-base leading-8 mt-8">
            At LA'bamba, we believe good food brings people together. Inspired by the rich flavours of Nigerian dishes and meals from around the world, we prepare delicious food that everyone can enjoy. Our goal is to give every guest a wonderful dining experience, one meal at a time.

          </p>

          <p className="text-savory-sand/70 text-sm md:text-base leading-8 mt-5">
            Our philosophy is simple: great food deserves
            quality ingredients, thoughtful preparation
            and outstanding hospitality.
          </p>

          {/* Brand Values */}
          <div className="grid grid-cols-2 gap-8 mt-10 py-8 border-y border-white/10">

            <div>
              <h3 className="font-display text-2xl text-savory-gold">
                Our Mission
              </h3>

              <p className="text-savory-ivory/50 text-xs leading-6 mt-2">
                To create memorable dining experiences through
                exceptional food and service.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-savory-gold">
                Our Vision
              </h3>

              <p className="text-savory-ivory/50 text-xs leading-6 mt-2">
                To celebrate diverse culinary traditions
                and make quality dining accessible.
              </p>
            </div>

          </div>

          {/* About Button */}
          <Link
            to="/about"
            className="inline-flex items-center gap-4 mt-10 bg-savory-gold text-savory-dark px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-savory-ivory transition-colors"
          >
            Discover Our Story
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;