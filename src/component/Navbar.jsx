
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount} = useCart()
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Menu", href: "/menu" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-savory-dark/95 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-5">

        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-display text-3xl tracking-[0.18em] text-savory-ivory">
              LA'bamba
            </span>

            <span className="text-[8px] uppercase tracking-[0.35em] text-savory-gold">
              Made with passion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-savory-gold"
                      : "text-savory-ivory/70 hover:text-savory-gold"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center gap-5">

            <Link
              to="/menu"
              className="hidden sm:flex items-center gap-2 bg-savory-gold text-savory-dark px-5 py-3 text-xs uppercase tracking-wider font-bold hover:bg-savory-ivory transition-colors"
            >
              Order Now
              <ArrowUpRight size={15} />
            </Link>

              
            <Link
              to="/cart"
              aria-label={`Shopping cart with ${cartCount} items`}
              className="text-savory-ivory relative inline-flex items-center justify-center"
            >

              <ShoppingBag size={21} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-savory-gold text-savory-dark text-[10px] font-bold">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle mobile navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-savory-ivory hover:text-savory-gold transition-colors"
            >
              {menuOpen ? (
                <X size={25} />
              ) : (
                <Menu size={25} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-6 pt-8 pb-5 border-t border-white/10 mt-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-savory-gold"
                      : "text-savory-ivory/70 hover:text-savory-gold"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/menu"
              onClick={() => setMenuOpen(false)}
              className="sm:hidden flex items-center justify-center gap-2 bg-savory-gold text-savory-dark px-5 py-3 text-xs uppercase tracking-wider font-bold"
            >
              Order Now
              <ArrowUpRight size={15} />
            </Link>

          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;