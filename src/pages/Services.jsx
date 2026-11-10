import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Heart,
  PartyPopper,
  BriefcaseBusiness,
  Users,
  Utensils,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

import cateringHero from "../assets/catering-hero.jpg";
import weddingImage from "../assets/wedding-catering.jpeg";
import outdoorImage from "../assets/outdoor-event.jpg";


const eventTypes = [
  {
    icon: Heart,
    title: "Weddings & Celebrations",
    description:
      "Make your special day even more memorable with delicious meals prepared for your guests. From weddings and anniversaries to engagement celebrations, we're happy to be part of your big moments.",
  },
  {
    icon: PartyPopper,
    title: "Birthdays & Private Parties",
    description:
      "Whether you're celebrating a birthday, hosting a family gathering or planning a private party, we provide food services to make your occasion enjoyable.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Events",
    description:
      "From office meetings and business gatherings to company celebrations, we offer catering services for professional occasions.",
  },
  {
    icon: Users,
    title: "Outdoor Events",
    description:
      "Taking your celebration outdoors? LA'bamba can bring food and catering services to your chosen event location, helping you make the occasion special.",
  },
];

const serviceSteps = [
  {
    number: "01",
    title: "Tell Us About Your Event",
    description:
      "Share the type of occasion, event date, location and estimated number of guests.",
  },
  {
    number: "02",
    title: "Discuss Your Food Needs",
    description:
      "Let us know the meals and catering arrangements you have in mind so we can discuss a suitable plan.",
  },
  {
    number: "03",
    title: "Confirm Your Booking",
    description:
      "Once the details and arrangements have been agreed upon, we'll confirm your catering booking.",
  },
  {
    number: "04",
    title: "Enjoy Your Occasion",
    description:
      "Relax and enjoy your special day while LA'bamba takes care of the agreed food arrangements.",
  },
];

function Catering() {
  return (
    <main className="bg-savory-dark text-savory-ivory overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center">

        <img
          src={cateringHero}
          alt="Beautifully arranged catering table"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-28">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-savory-gold uppercase tracking-[0.3em] text-xs">
              LA'bamba Catering & Events
            </span>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mt-6">
              Good Food.
              <br />
              <span className="italic text-savory-gold">
                Every Occasion.
              </span>
            </h1>

            <p className="text-savory-ivory/80 leading-8 text-base md:text-lg max-w-xl mt-7">
              From intimate family celebrations to weddings and outdoor
              gatherings, LA'bamba brings delicious food and thoughtful
              service to the moments that matter.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-savory-gold text-savory-dark px-7 py-4 uppercase tracking-widest text-xs font-bold hover:bg-savory-ivory transition"
              >
                Book Our Services
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/menu"
                className="inline-flex items-center gap-3 border border-savory-ivory/50 px-7 py-4 uppercase tracking-widest text-xs hover:bg-savory-ivory hover:text-savory-dark transition"
              >
                Explore Our Menu
              </Link>

            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 md:py-28 px-6 md:px-12">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
            More Than Restaurant Dining
          </span>

          <h2 className="font-display text-4xl md:text-6xl mt-6 leading-tight">
            Let Us Be Part of Your
            <span className="italic text-savory-gold"> Special Moments.</span>
          </h2>

          <p className="text-savory-ivory/60 leading-8 mt-7">
            At LA'bamba, we understand that food plays an important role
            in bringing people together. That is why our services go beyond
            serving meals at our eatery.

            We also provide catering services for different occasions,
            helping individuals, families and organisations enjoy good food
            during their special gatherings.
          </p>

          <p className="text-savory-ivory/60 leading-8 mt-5">
            Whether you're planning a small celebration or a large outdoor
            event, we'd love to hear about your plans and discuss how we
            can help.
          </p>

        </div>

      </section>

      {/* EVENT TYPES */}
      <section className="bg-savory-espresso py-20 md:py-28 px-6 md:px-12">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl mb-14">

            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              What We Cater For
            </span>

            <h2 className="font-display text-4xl md:text-6xl mt-5">
              Every Gathering Deserves Good Food.
            </h2>

            <p className="text-savory-ivory/60 leading-7 mt-5">
              Whatever the occasion, we're ready to discuss your food
              requirements and help make your event enjoyable.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-6">

            {eventTypes.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.article
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="border border-savory-ivory/10 p-8 md:p-10 hover:border-savory-gold/50 transition duration-300"
                >

                  <Icon
                    size={32}
                    strokeWidth={1.4}
                    className="text-savory-gold mb-7"
                  />

                  <h3 className="font-display text-3xl mb-4">
                    {event.title}
                  </h3>

                  <p className="text-savory-ivory/60 leading-8 text-sm">
                    {event.description}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 text-savory-gold uppercase tracking-widest text-xs mt-8 hover:gap-5 transition-all"
                  >
                    Make An Enquiry
                    <ArrowUpRight size={16} />
                  </Link>

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>

      {/* WEDDING AND CELEBRATIONS */}
      <section className="py-20 md:py-28 px-6 md:px-12">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <img
              src={weddingImage}
              alt="Elegant food arrangement for a special celebration"
              className="w-full h-100 md:h-137.5 object-cover"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              Special Celebrations
            </span>

            <h2 className="font-display text-4xl md:text-6xl mt-5 leading-tight">
              Make Your Big Day Even More Special.
            </h2>

            <p className="text-savory-ivory/60 leading-8 mt-7">
              Some moments deserve to be celebrated beautifully. From
              weddings and anniversaries to birthdays and family gatherings,
              good food makes those moments even more memorable.
            </p>

            <p className="text-savory-ivory/60 leading-8 mt-5">
              Tell us about your celebration, the number of guests you're
              expecting and the kind of meals you'd love to serve.
              We'll discuss the arrangements with you.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-savory-gold text-savory-dark px-7 py-4 uppercase tracking-widest text-xs font-bold mt-8 hover:bg-savory-ivory transition"
            >
              Discuss Your Event
              <ArrowUpRight size={17} />
            </Link>

          </motion.div>

        </div>

      </section>

      {/* OUTDOOR EVENTS */}
      <section className="bg-savory-espresso py-20 md:py-28 px-6 md:px-12">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div className="order-2 md:order-1">

            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              Outside Our Restaurant
            </span>

            <h2 className="font-display text-4xl md:text-6xl mt-5 leading-tight">
              Great Food, Wherever You Celebrate.
            </h2>

            <p className="text-savory-ivory/60 leading-8 mt-7">
              Your event doesn't have to take place inside a restaurant
              to enjoy good food. LA'bamba also offers catering services
              for outdoor events and gatherings.
            </p>

            <p className="text-savory-ivory/60 leading-8 mt-5">
              Whether you're hosting a celebration at an event centre,
              an outdoor venue or another suitable location, get in touch
              with us to discuss your catering needs.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-savory-gold uppercase tracking-widest text-xs font-bold mt-8 hover:gap-5 transition-all"
            >
              Plan Your Event
              <ArrowUpRight size={17} />
            </Link>

          </div>

          <div className="order-1 md:order-2">

            <img
              src={cateringHero}
              alt="Outdoor event dining arrangement"
              className="w-full h-100 md:h-137.5 object-cover"
            />

          </div>

        </div>

      </section>

      {/* CORPORATE CATERING */}
      <section className="py-20 md:py-28 px-6 md:px-12">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>

            <img
              src={outdoorImage}
              alt="Food setup for a professional gathering"
              className="w-full h-100 md:h-125 object-cover"
            />

          </div>

          <div>

            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              For Businesses & Organisations
            </span>

            <h2 className="font-display text-4xl md:text-6xl mt-5">
              Good Food for Professional Gatherings.
            </h2>

            <p className="text-savory-ivory/60 leading-8 mt-7">
              Hosting a business meeting, staff celebration, conference
              or corporate gathering? LA'bamba offers catering services
              for organisations looking to provide meals for their guests
              and attendees.
            </p>

            <p className="text-savory-ivory/60 leading-8 mt-5">
              Contact us with your event details so we can discuss
              suitable food arrangements.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-savory-gold text-savory-gold px-7 py-4 uppercase tracking-widest text-xs font-bold mt-8 hover:bg-savory-gold hover:text-savory-dark transition"
            >
              Contact Our Team
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="bg-savory-espresso py-20 md:py-28 px-6 md:px-12">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              How It Works
            </span>

            <h2 className="font-display text-4xl md:text-6xl mt-5">
              Planning Your Event Is Simple.
            </h2>

            <p className="text-savory-ivory/60 leading-7 mt-5">
              Getting started with LA'bamba is easy. Here's how to
              make an enquiry about our catering services.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {serviceSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="border-t border-savory-gold/40 pt-7"
              >

                <span className="font-display text-5xl text-savory-gold/60">
                  {step.number}
                </span>

                <h3 className="font-display text-2xl mt-6 mb-4">
                  {step.title}
                </h3>

                <p className="text-savory-ivory/50 leading-7 text-sm">
                  {step.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <CalendarDays
            size={35}
            strokeWidth={1.3}
            className="text-savory-gold mx-auto mb-7"
          />

          <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
            Let's Make It Memorable
          </span>

          <h2 className="font-display text-4xl md:text-6xl mt-6 leading-tight">
            Have an Event Coming Up?
          </h2>

          <p className="text-savory-ivory/60 leading-8 mt-6">
            We'd love to hear about it. Tell us what you're planning
            and let LA'bamba be part of your next special occasion.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-savory-gold text-savory-dark px-8 py-4 uppercase tracking-widest text-xs font-bold mt-9 hover:bg-savory-ivory transition"
          >
            Make A Catering Enquiry
            <ArrowUpRight size={17} />
          </Link>

          <p className="font-display italic text-2xl text-savory-gold mt-12">
            LA'bamba — Good Food, Made with Care.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Catering;