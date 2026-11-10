import { MapPin, Phone, Mail, ArrowUpRight, Clock }from "lucide-react";
import { FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
const currentYear = new Date().getFullYear();

const quickLinks = [
{ name: "Home", path: "/" },
{ name: "About Us", path: "/about" },
{ name: "Our Menu", path: "/menu" },
{ name: "Our Services", path: "/services" },
{ name: "Contact", path: "/contact" },
];

const menuLinks = [
"Nigerian Cuisine",
"Continental Dishes",
"Soups & Specials",
"Desserts",
"Drinks",
];

return ( <footer className="bg-savory-espresso border-t border-savory-gold/20">

  <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">

    {/* Main Footer Content */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10">

      {/* Brand Information */}
      <div className="lg:pr-8">

        <Link to="/" className="inline-flex flex-col">
          <span className="font-display text-4xl tracking-[0.18em] text-savory-ivory">
            LA'bamba
          </span>

          <span className="text-[9px] tracking-[0.35em] text-savory-gold mt-1">
            MADE WITH PASSION
          </span>
        </Link>

        <p className="text-savory-sand/70 text-sm leading-7 mt-7">
          Celebrating the richness of Nigerian heritage
          and the beauty of international cuisine.
          Every dish tells a story, every experience
          creates a memory.
        </p>

        <p className="font-display text-2xl italic text-savory-gold mt-6">
          Where luxury Meets Taste.
        </p>

        {/* Social Media */}
        <div className="flex items-center gap-3 mt-8">

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 flex items-center justify-center border border-white/10 text-savory-ivory hover:bg-savory-gold hover:text-savory-dark hover:border-savory-gold transition-all duration-300"
          >
            <FaTiktok size={17} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 flex items-center justify-center border border-white/10 text-savory-ivory hover:bg-savory-gold hover:text-savory-dark hover:border-savory-gold transition-all duration-300"
          >
            <FaTwitter size={17} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 flex items-center justify-center border border-white/10 text-savory-ivory hover:bg-savory-gold hover:text-savory-dark hover:border-savory-gold transition-all duration-300"
          >
            <FaFacebook size={17} />
          </a>

        </div>

      </div>

      {/* Quick Links */}
      <div>

        <h3 className="font-display text-2xl text-savory-ivory mb-8">
          Explore
        </h3>

        <ul className="space-y-5">

          {quickLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="group flex items-center gap-2 text-sm text-savory-sand/60 hover:text-savory-gold transition-colors"
              >
                <span>{link.name}</span>

                <ArrowUpRight
                  size={13}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </li>
          ))}

        </ul>

      </div>

      {/* Menu Categories */}
      <div>

        <h3 className="font-display text-2xl text-savory-ivory mb-8">
          Our Menu
        </h3>

        <ul className="space-y-5">

          {menuLinks.map((item) => (
            <li key={item}>
              <Link
                to="/menu"
                className="text-sm text-savory-sand/60 hover:text-savory-gold transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}

        </ul>

      </div>

      {/* Contact Information */}
      <div>

        <h3 className="font-display text-2xl text-savory-ivory mb-8">
          Get In Touch
        </h3>

        <div className="space-y-6">

          <Link
            to="/contact"
            className="flex items-start gap-4 group"
          >
            <MapPin
              size={19}
              className="text-savory-gold shrink-0 mt-1"
            />

            <span className="text-sm text-savory-sand/60 group-hover:text-savory-gold transition-colors">
              Visit our Contact page for restaurant location.
            </span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-4 group"
          >
            <Phone
              size={18}
              className="text-savory-gold shrink-0"
            />

            <span className="text-sm text-savory-sand/60 group-hover:text-savory-gold transition-colors">
              Contact our team
            </span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-4 group"
          >
            <Mail
              size={18}
              className="text-savory-gold shrink-0"
            />

            <span className="text-sm text-savory-sand/60 group-hover:text-savory-gold transition-colors">
              Send us an enquiry
            </span>
          </Link>

          <div className="flex items-start gap-4">
            <Clock
              size={18}
              className="text-savory-gold shrink-0 mt-1"
            />

            <span className="text-sm text-savory-sand/60">
              Opening hours available on our Contact page.
            </span>
          </div>

        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 mt-8 text-xs uppercase tracking-widest text-savory-gold hover:text-savory-ivory transition-colors"
        >
          Contact LA'bamba
          <ArrowUpRight size={15} />
        </Link>

      </div>

    </div>

    {/* Decorative Divider */}
    <div className="border-t border-white/10 mt-20 pt-8">

      <div className="flex flex-col md:flex-row justify-between items-center gap-5">

        <p className="text-xs text-savory-sand/40 text-center">
          © {currentYear} LA'bamba. All rights reserved.
        </p>

        <p className="text-xs text-savory-sand/40 text-center">
          Crafted with passion. Served with excellence.
        </p>

        <Link
          to="/"
          className="text-xs uppercase tracking-widest text-savory-gold hover:text-savory-ivory transition-colors"
        >
          Back to Top ↑
        </Link>

      </div>

    </div>

  </div>

</footer>


);
}

export default Footer;
