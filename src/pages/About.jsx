
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  ChefHat,
  Heart,
  Utensils,
  PartyPopper,
  Check,
} from "lucide-react";

import aboutHero from "../assets/about-hero.jpg";
import aboutStory from "../assets/about-story.jpg";
import aboutChef from "../assets/founder-about.jpg";
import aboutDining from "../assets/restaurant-interior.jpg";

const values = [
  {
    icon: Utensils,
    title: "Good Food",
    description:
      "We believe every meal should be delicious, satisfying and prepared with attention to detail.",
  },
  {
    icon: Heart,
    title: "Made with Care",
    description:
      "We put genuine care into what we do because every customer deserves a wonderful food experience.",
  },
  {
    icon: ChefHat,
    title: "Quality Service",
    description:
      "From everyday meals to special occasions, we are committed to giving our customers a service they can trust.",
  },
];

const services = [
  {
    icon: Utensils,
    title: "Catering Services",
    description:
      "Planning a birthday, wedding, corporate gathering or family celebration? We provide catering services with delicious meals prepared to make your occasion special.",
  },
  {
    icon: PartyPopper,
    title: "Outdoor Events",
    description:
      "We bring good food and great service to your events outside our restaurant. Whether it is a private celebration or a larger gathering, LA'bamba is ready to serve.",
  },
];

function About() {
  return (
    <main className="bg-savory-dark text-savory-ivory overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center">
        <img
          src={aboutHero}
          alt="Welcoming dining atmosphere at LA'bamba"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-savory-gold uppercase tracking-[0.3em] text-sm">
              The Story Behind LA'bamba
            </span>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-6 leading-tight">
              Good Food.
              <br />
              <span className="text-savory-gold italic">
                Beautiful Moments.
              </span>
            </h1>

            <p className="text-savory-ivory/80 text-base md:text-lg leading-8 max-w-xl mt-7">
              More than a place to eat, LA'bamba is built on a love for good
              food, warm hospitality and bringing people together.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 bg-savory-gold text-savory-dark px-7 py-4 uppercase tracking-wider text-xs font-bold hover:bg-savory-ivory transition"
              >
                Explore Our Menu
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-savory-ivory/50 px-7 py-4 uppercase tracking-wider text-xs hover:bg-savory-ivory hover:text-savory-dark transition"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION / FOUNDED YEAR */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              A Little About Us
            </span>

            <h2 className="font-display text-4xl md:text-6xl mt-5 leading-tight">
              A passion for food.
              <br />
              <span className="italic text-savory-gold">
                A journey since 2011.
              </span>
            </h2>

            <p className="text-savory-ivory/70 leading-8 mt-7">
              Founded in 2011 by Happiness Udofia, LA'bamba began with a
              genuine love for cooking and a desire to serve people good food.
              What started as a passion has grown into an established food
              business that continues to welcome and serve customers.
            </p>

            <p className="text-savory-ivory/70 leading-8 mt-5">
              Over the years, our journey has been shaped by dedication,
              experience and the support of our customers. Today, we continue
              to do what we love: prepare enjoyable meals, offer catering
              services and bring good food to outdoor events and special
              occasions.
            </p>

            <div className="mt-10 flex items-center gap-5 border-t border-savory-ivory/15 pt-7">
              <span className="font-display text-6xl text-savory-gold">
                2011
              </span>

              <div>
                <p className="uppercase text-xs tracking-widest">
                  Established
                </p>
                <p className="text-savory-ivory/50 text-sm mt-1">
                  Serving customers since day one.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={aboutStory}
              alt="Food preparation at LA'bamba"
              className="w-full h-112.5 md:h-145 object-cover"
            />

            <div className="absolute -bottom-6 -left-5 md:-left-8 bg-savory-gold text-savory-dark p-6 md:p-8">
              <p className="font-display text-4xl">15+</p>
              <p className="uppercase text-xs tracking-widest mt-1">
                Years of Experience
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-savory-espresso py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutChef}
              alt="A chef preparing a meal"
              className="w-full h-112.5px md:h-137. object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              Meet Our Founder
            </span>

            <h2 className="font-display text-4xl md:text-6xl mt-5">
              Happiness Udofia
            </h2>

            <p className="text-savory-gold uppercase tracking-widest text-xs mt-3">
              Founder & Caterer
            </p>

            <p className="text-savory-ivory/70 leading-8 mt-8">
              Behind LA'bamba is Happiness Udofia, an Akwa Ibom-born entrepreneur whose love for cooking and passion for bringing people together inspired her to turn something she genuinely enjoys into a growing business.
            </p>

            <p className="text-savory-ivory/70 leading-8 mt-5">
              For Happiness, food is more than something we eat. It is a way
              to connect with people, celebrate important moments and make
              everyday experiences more enjoyable.
            </p>

            <p className="text-savory-ivory/70 leading-8 mt-5">
              Since establishing LA'bamba in 2011, she has remained dedicated to building a restaurant where great food, quality service, and genuine hospitality come together. Her vision is to give every customer something to look forward to, whether they are stopping by for a quick meal, enjoying time with loved ones, or celebrating a special occasion.
            </p>

            <p className="font-display italic text-2xl text-savory-gold mt-8">
              "Good food has a way of bringing people together."
            </p>
          </motion.div>

        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              What Matters to Us
            </span>

            <h2 className="font-display text-4xl md:text-6xl mt-5">
              The Things We Believe In
            </h2>

            <p className="text-savory-ivory/60 leading-7 mt-5">
              Everything we do at LA'bamba comes down to a few simple things:
              good food, genuine care and making every customer feel valued.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="border border-savory-ivory/10 p-8 md:p-10 hover:border-savory-gold/50 transition duration-300"
                >
                  <Icon
                    size={32}
                    strokeWidth={1.4}
                    className="text-savory-gold mb-7"
                  />

                  <h3 className="font-display text-3xl mb-4">
                    {value.title}
                  </h3>

                  <p className="text-savory-ivory/60 leading-7 text-sm">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* CATERING AND EVENTS */}
      <section className="bg-savory-espresso py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl mb-14">
            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              More Ways to Enjoy LA'bamba
            </span>

            <h2 className="font-display text-4xl md:text-6xl mt-5">
              We Bring the Food.
              <br />
              <span className="italic text-savory-gold">
                You Make the Memories.
              </span>
            </h2>

            <p className="text-savory-ivory/60 leading-7 mt-5">
              Great food should be part of every special occasion. That is
              why our services go beyond the everyday restaurant experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-savory-dark border border-savory-ivory/10 p-8 md:p-12"
                >
                  <div className="w-14 h-14 border border-savory-gold/40 flex items-center justify-center text-savory-gold mb-8">
                    <Icon size={27} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl mb-5">
                    {service.title}
                  </h3>

                  <p className="text-savory-ivory/60 leading-8">
                    {service.description}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 text-savory-gold uppercase tracking-widest text-xs font-semibold mt-8 hover:gap-5 transition-all"
                  >
                    Make an Enquiry
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              Our Mission
            </span>

            <h2 className="font-display text-4xl md:text-5xl mt-5">
              Serving More Than Just Meals
            </h2>

            <p className="text-savory-ivory/60 leading-8 mt-6">
              Our mission is to prepare and serve delicious meals, provide
              dependable catering services and create enjoyable food
              experiences for individuals, families and event guests.
              We want every guest to feel welcome, enjoy every bite, 
              and always have a good reason to come back.
            </p>
          </div>

          <div>
            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              Our Vision
            </span>

            <h2 className="font-display text-4xl md:text-5xl mt-5">
              Growing With Every Experience
            </h2>

            <p className="text-savory-ivory/60 leading-8 mt-6">
             Our vision at LA'bamba is to become a place people proudly recommend and love coming back to. We aim to grow by serving quality meals, creating memorable experiences, and building genuine connections with our customers. As we grow, we remain committed to making every visit better than the last.
            </p>
          </div>

        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              Our Promise
            </span>

            <h2 className="font-display text-4xl md:text-6xl mt-5 leading-tight">
              Your Satisfaction Matters to Us.
            </h2>

            <p className="text-savory-ivory/60 leading-8 mt-6">
              We know that choosing where to eat or who to trust with food
              for your event matters. We don't take that trust for granted.
            </p>

            <div className="space-y-5 mt-8">
              {[
                "Meals prepared with care.",
                "Attention to quality and taste.",
                "Friendly and welcoming service.",
                "Food services for everyday meals and special occasions.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="w-6 h-6 rounded-full bg-savory-gold/15 flex items-center justify-center text-savory-gold">
                    <Check size={14} />
                  </span>

                  <p className="text-sm text-savory-ivory/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <img
            src={aboutDining}
            alt="Beautifully arranged food and dining experience"
            className="w-full h-100 md:h-137.5 object-cover"
          />

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-32 px-6 text-center">
        <div className="absolute inset-0 bg-savory-gold/5" />

        <div className="relative max-w-3xl mx-auto">
          <CalendarDays
            size={35}
            strokeWidth={1.3}
            className="text-savory-gold mx-auto mb-7"
          />

          <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
            Be Part of Our Story
          </span>

          <h2 className="font-display text-4xl md:text-6xl mt-5 leading-tight">
            From Everyday Meals to Special Celebrations.
          </h2>

          <p className="text-savory-ivory/60 leading-8 mt-6">
            Whether you're visiting us for a meal or planning an event,
            we'd love to serve you. Thank you for being part of the LA'bamba
            journey since 2011.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">
            <Link
              to="/menu"
              className="bg-savory-gold text-savory-dark px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-savory-ivory transition"
            >
              Explore Our Menu
            </Link>

            <Link
              to="/contact"
              className="border border-savory-ivory/30 px-8 py-4 uppercase tracking-widest text-xs hover:bg-savory-ivory hover:text-savory-dark transition"
            >
              Contact Us
            </Link>
          </div>

          <p className="font-display italic text-2xl text-savory-gold mt-12">
            LA'bamba — Good Food, Made with Care.
          </p>
        </div>
      </section>

    </main>
  );
}

export default About;

