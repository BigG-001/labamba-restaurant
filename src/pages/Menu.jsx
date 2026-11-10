import { useState } from "react";

import { Search, ArrowUpRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import foods from "../data/foods.js";
import { useCart } from "../context/CartContext";
import heroFood from "../assets/sub-hero-food.jpeg"

const categories = [
  "All",
  "Nigerian",
  "Continental",
  "Starters",
  "Main Course",
  "Desserts",
  "Drinks",
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const { addToCart } = useCart();

  const filteredFoods = foods.filter((food) => {
    const matchesCategory =
      activeCategory === "All" ||
      food.category === activeCategory ||
      food.cuisine === activeCategory;

    const matchesSearch = food.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-savory-dark min-h-screen text-savory-ivory">

      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">

        <img
          src= {heroFood}
          alt="A selection of delicious meals"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-savory-dark/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <p className="text-savory-gold uppercase tracking-[0.4em] text-xs mb-6">
            Discover Our Menu
          </p>

          <h1 className="font-display text-5xl md:text-7xl leading-tight">
            The Taste,
            <br />
            <span className="italic text-savory-gold">
              You Have Been <br/> 
              Craving For.
            </span>
          </h1>

          <p className="text-savory-ivory/70 text-sm md:text-base leading-8 mt-6 max-w-xl mx-auto">
            Explore a selection of delicious meals, prepared
            with care and inspired by the flavours we love.
          </p>

          <a
            href="#food-menu"
            className="inline-flex items-center gap-3 mt-9 bg-savory-gold text-savory-dark px-7 py-4 text-xs uppercase tracking-widest font-bold hover:bg-savory-ivory transition"
          >
            Explore Our Menu
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* MENU INTRODUCTION */}
      <section
        id="food-menu"
        className="py-20 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">

            <div>
              <p className="text-savory-gold uppercase tracking-[0.3em] text-xs mb-4">
                Something Delicious Awaits
              </p>

              <h2 className="font-display text-4xl md:text-5xl">
                Explore Our <span className="italic text-savory-gold">Food</span>
              </h2>

              <p className="text-savory-ivory/50 text-sm leading-7 mt-5 max-w-lg">
                From familiar Nigerian favourites to other
                delicious choices, find something you will
                enjoy.
              </p>
            </div>

            

          </div>

          {/* SEARCH */}
          <div className="relative max-w-md mb-8">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-savory-gold"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a meal..."
              className="w-full bg-savory-charcoal/40 border border-savory-ivory/10 py-4 pl-12 pr-5 text-sm outline-none focus:border-savory-gold transition"
            />
          </div>

          {/* CATEGORY FILTERS */}
          <div className="flex gap-3 pb-5 mb-10 items-center overflow-x-auto whitespace-nowrap scrollbar-hide md:flex-wrap md:overflow-visible">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-3 text-xs uppercase tracking-widest transition ${
                  activeCategory === category
                    ? "bg-savory-gold text-savory-dark"
                    : "border border-savory-ivory/15 text-savory-ivory/60 hover:border-savory-gold hover:text-savory-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FOOD GRID */}
          {filteredFoods.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredFoods.map((food, index) => (
                <motion.div
                  key={food.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="group bg-savory-charcoal/30 border border-savory-ivory/10 hover:border-savory-gold/50 transition"
                >

                  {/* FOOD IMAGE */}
                  <div className="relative h-65 overflow-hidden">

                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />

                    {food.featured && (
                      <span className="absolute top-5 left-5 bg-savory-gold text-savory-dark px-4 py-2 text-[10px] uppercase tracking-widest font-bold">
                        Featured
                      </span>
                    )}

                  </div>

                  {/* FOOD DETAILS */}
                  <div className="p-6">

                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-savory-gold text-[10px] uppercase tracking-widest">
                        {food.cuisine}
                      </span>

                      <span className="text-savory-ivory/40 text-[10px] uppercase tracking-widest">
                        {food.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl mb-3">
                      {food.name}
                    </h3>

                    <p className="text-savory-ivory/50 text-sm leading-6">
                      {food.description}
                    </p>

                    <div className="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-savory-ivory/10">

                      <div>
                        <p className="text-[10px] text-savory-ivory/40 uppercase tracking-widest mb-1">
                          Price
                        </p>

                        <p className="text-savory-gold font-semibold">
                          {food.price === null
                            ? "To be confirmed"
                            : `₦${food.price.toLocaleString("en-NG")}`}
                        </p>
                      </div>

                      <button
                        onClick={() => addToCart(food)}
                        disabled={food.price === null}
                        className="flex items-center gap-2 bg-savory-gold text-savory-dark px-4 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-savory-ivory transition disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <ShoppingBag size={15} />
                        Add to Cart
                      </button>

                    </div>

                  </div>
                </motion.div>
              ))}

            </div>
          ) : (
            <div className="text-center py-24 border border-savory-ivory/10">
              <h3 className="font-display text-3xl mb-4">
                No Meals Found
              </h3>

              <p className="text-savory-ivory/50 text-sm">
                We couldn't find a meal matching your search.
                Try another category or search term.
              </p>

              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchTerm("");
                }}
                className="mt-6 text-savory-gold text-xs uppercase tracking-widest underline underline-offset-4"
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default Menu;