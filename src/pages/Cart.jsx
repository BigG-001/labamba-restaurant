import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  ArrowRight,
  X
} from "lucide-react";
import {useState} from "react"
import {AnimatePresence, motion } from "framer-motion";

import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, setCartItems, cartTotal } = useCart();
  const [showComingSoon, setShowComingSoon] = useState(false);
  // Increase or decrease meal quantity
  const updateQuantity = (id, action) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) => {
          if (item.id === id) {
            const newQuantity =
              action === "increase"
                ? item.quantity + 1
                : item.quantity - 1;

            return { ...item, quantity: newQuantity };
          }

          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove a meal completely
  const removeItem = (id) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );
  };

  // Format Nigerian currency
  const formatPrice = (price) =>
    `₦${price.toLocaleString("en-NG")}`;

  return (
    <main className="min-h-screen bg-savory-dark text-savory-ivory">

      {/* PAGE HERO */}
      <section className="px-6 md:px-12 lg:px-20 pt-28 pb-16 border-b border-savory-ivory/10">
        <div className="max-w-7xl mx-auto">

          <p className="text-savory-gold uppercase tracking-[0.35em] text-xs mb-5">
            Your Selection
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>
              <h1 className="font-display text-5xl md:text-7xl">
                Your <span className="italic text-savory-gold">Cart.</span>
              </h1>

              <p className="text-savory-ivory/50 text-sm mt-5">
                Review your selected meals before proceeding to checkout.
              </p>
            </div>

            <div className="flex items-center gap-3 text-savory-gold">
              <ShoppingBag size={20} />
              <span className="text-sm">
                {cartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}{" "}
                Items
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* CART CONTENT */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">

          {cartItems.length === 0 ? (

            /* EMPTY CART */
            <div className="min-h-[45vh] flex flex-col items-center justify-center text-center">

              <div className="w-20 h-20 rounded-full border border-savory-gold/30 flex items-center justify-center mb-7">
                <ShoppingBag
                  size={32}
                  className="text-savory-gold"
                />
              </div>

              <h2 className="font-display text-3xl md:text-4xl">
                Your Cart Is Empty
              </h2>

              <p className="text-savory-ivory/50 text-sm leading-7 max-w-md mt-4">
                You haven't added any meals yet. Explore our menu
                and find something delicious to enjoy.
              </p>

              <Link
                to="/menu"
                className="inline-flex items-center gap-3 bg-savory-gold text-savory-dark px-7 py-4 mt-8 text-xs uppercase tracking-widest font-bold hover:bg-savory-ivory transition"
              >
                Explore Our Menu
                <ArrowRight size={17} />
              </Link>

            </div>

          ) : (

            /* CART WITH ITEMS */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* SELECTED MEALS */}
              <div className="lg:col-span-2">

                <div className="flex items-center justify-between pb-5 border-b border-savory-ivory/10">
                  <h2 className="font-display text-2xl">
                    Selected Meals
                  </h2>

                  <span className="text-xs text-savory-ivory/40 uppercase tracking-widest">
                    {cartItems.reduce( (total, item) =>
                      total + item.quantity,  0
                     )} Items
                  </span>
                </div>

                <div className="divide-y divide-savory-ivory/10">

                  {cartItems.map((item) => (

                    <motion.div
                      layout
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-6 py-8"
                    >

                      {/* FOOD IMAGE */}
                      <div className="w-full sm:w-36 h-36 shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* FOOD INFORMATION */}
                      <div className="flex-1">

                        <div className="flex justify-between gap-4">

                          <div>
                            <p className="text-savory-gold text-[10px] uppercase tracking-widest mb-2">
                              {item.cuisine}
                            </p>

                            <h3 className="font-display text-2xl">
                              {item.name}
                            </h3>

                            <p className="text-savory-ivory/40 text-xs mt-2">
                              {item.category}
                            </p>
                          </div>

                          {/* REMOVE BUTTON */}
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="text-savory-ivory/40 hover:text-red-400 transition h-fit"
                          >
                            <Trash2 size={19} />
                          </button>

                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-5 mt-7">

                          {/* QUANTITY CONTROL */}
                          <div className="flex items-center border border-savory-ivory/20">

                            <button
                              onClick={() =>
                                updateQuantity(item.id, "decrease")
                              }
                              aria-label="Decrease quantity"
                              className="p-3 hover:bg-savory-gold hover:text-savory-dark transition"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="min-w-10 text-center text-sm">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, "increase")
                              }
                              aria-label="Increase quantity"
                              className="p-3 hover:bg-savory-gold hover:text-savory-dark transition"
                            >
                              <Plus size={14} />
                            </button>

                          </div>

                          {/* ITEM PRICE */}
                          <div className="text-right">
                            <p className="text-[10px] uppercase tracking-widest text-savory-ivory/40 mb-1">
                              Subtotal
                            </p>

                            <p className="text-savory-gold font-semibold">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>

                        </div>

                      </div>

                    </motion.div>

                  ))}

                </div>

                <Link
                  to="/menu"
                  className="inline-flex items-center gap-3 text-savory-gold text-xs uppercase tracking-widest mt-6 hover:text-savory-ivory transition"
                >
                  <ArrowLeft size={16} />
                  Continue Shopping
                </Link>

              </div>

              {/* ORDER SUMMARY */}
              <aside className="lg:col-span-1">

                <div className="bg-savory-charcoal/40 border border-savory-ivory/10 p-7 sticky top-28">

                  <h2 className="font-display text-2xl mb-7">
                    Order Summary
                  </h2>

                  <div className="flex justify-between text-sm text-savory-ivory/60 pb-5 border-b border-savory-ivory/10">
                    <span>Subtotal</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>

                  <div className="flex justify-between text-sm text-savory-ivory/60 py-5 border-b border-savory-ivory/10">
                    <span>Delivery Fee</span>
                    <span>Calculated later</span>
                  </div>

                  <div className="flex justify-between items-center py-6">
                    <span className="text-sm font-semibold">
                      Order Total
                    </span>

                    <span className="text-savory-gold text-xl font-semibold">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>

                  <p className="text-savory-ivory/40 text-xs leading-6 mb-6">
                    Delivery charges, if applicable, will be
                    confirmed before your order is finalised.
                  </p>

                  <button
                      onClick={() => setShowComingSoon(true)}
                      className="w-full flex items-center justify-center gap-3 bg-savory-gold text-savory-dark py-4 text-xs uppercase tracking-widest font-bold hover:bg-savory-ivory transition"
                    >
                      Proceed to Checkout
                      <ArrowRight size={17} />
                </button>

                </div>

              </aside>

            </div>

          )}

        </div>
      </section>
                  {/* COMING SOON MODAL */}
        <AnimatePresence>
          {showComingSoon && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 bg-black/80 backdrop-blur-sm flex items-center justify-center px-5"
              onClick={() => setShowComingSoon(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-lg w-full bg-savory-dark border border-savory-gold/30 p-8 md:p-12 text-center"
              >

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="absolute top-5 right-5 text-savory-ivory/50 hover:text-savory-gold transition"
                  aria-label="Close popup"
                >
                  <X size={22} />
                </button>

                {/* ICON */}
                <div className="w-16 h-16 rounded-full border border-savory-gold/40 flex items-center justify-center mx-auto mb-7">
                  <ShoppingBag size={27} className="text-savory-gold" />
                </div>

                {/* CONTENT */}
                <p className="text-savory-gold uppercase tracking-[0.3em] text-[10px] mb-5">
                  LA'bamba Experience
                </p>

                <h2 className="font-display text-3xl md:text-4xl leading-tight mb-5">
                  Oobs, Coming
                  <span className="block italic text-savory-gold">
                    Soon.
                  </span>
                </h2>

                <p className="text-savory-ivory/50 text-sm leading-7 mb-9">
                  We're putting the finishing touches on our online
                  ordering experience. Soon, you'll be able to enjoy
                  your LA'bamba favourites with just a few clicks.
                </p>

                {/* CLOSE ACTION */}
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="w-full bg-savory-gold text-savory-dark py-4 text-xs uppercase tracking-widest font-bold hover:bg-savory-ivory transition"
                >
                  Continue Exploring
                </button>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </main>
    
  );
}

export default Cart;