import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import jollofRice from "../assets/jellof-rice.jpeg";
import snail from "../assets/toasted-snail.png";
import catFish from "../assets/catfish-soup.jpeg";


function FeaturedDishes(){
  const dishes = [
    {
      id: 1,
      name: "Signature jollof rice",
      description: "Nigerian jollof rice served with our signature sides.",
      price: "₦8,500",
      image: jollofRice,
      category: "Nigerian Favorite",
    },
    {
      id: 2,
      name: "Spycy Snail Sauce",
      description: "Well prepared and seasoned snail with an amazing aroma.",
      price: "₦8,000",
      image: snail,
      category: "Chef's special",
    },
    {
      id: 3,
      name: "Catfish pepper soup",
      description: "A delicious Nigerian delicacy made with fresh catfish.",
      price: "₦10,000",
      image: catFish,
      category: "Nigerian Soup & Specials",
    },
  ];

  return(
    <section className="bg-savory-dark py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

            {/* Section Heading */}
            <div className="flex flex-col md:flex-row ">
              <div>
                  <p className="text-savory-gold text-xs tracking-[0.3em] uppercase mb-4">
                    A Taste of Savory
                  </p>
                  <h2 className="font-display text-5xl md:text-6xl text-savory-ivory">
                    Selected <span className="italic text-savory-gold">Favourites.</span>
                  </h2>

                  <p className="text-savory-ivory mt-5 mb-5 max-w-xl text-sm md:text-base leading-8">
                    There's something delicious waiting for everyone.
                    Every dish is freshly prepared to give you something worth coming back for.

                 </p>
              </div>

              <Link
                to="/menu"
                className="flex items-center gap-3 text-savory-gold text-xs uppercase tracking-widest hover:text-savory-ivory transition-colors"
              >
                  Explore Full Menu
                <ArrowUpRight size={17} />
              </Link>

            </div>

              {/* Food Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 **:items-stretch">
              {dishes.map((dish) => (
                <article 
                  key={dish.id} className="group h-full flex flex-col border border-white/10 hover:border-savory-gold/50 transition-colors duration-500 overflow-hidden  bg-savory-charcoal/20"                
                >
                  {/* Uniform cart container */}
                  <div className="relative h-72 md:h-80 w-full  overflow-hidden shrink-0">
                      <img 
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover object-center  group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      <span className="absolute top-4 left-4 bg-savory-dark/90 text-savory-gold text-[10px] tracking-widest px-4 py-2">
                    {dish.category}
                    </span>
                 </div>

                  {/* Food Information  */}
                 <div className="p-6 flex flex-col flex-1"> 

                    <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display  text-2xl text-savory-ivory">
                            {dish.name}
                        </h3>

                        <span className="text-savory-gold text-sm whitespace-nowrap font-bold">
                            {dish.price}
                        </span>
                    </div>
                      <p className="text-savory-ivory/50 text-sm leading-6 mt-3">
                        {dish.description}
                     </p>
                  </div> 

                </article>
              ))}
            </div>
          </div>
    </section>
  );
}
export default FeaturedDishes;