
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CalendarDays,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "Catering Services",
    eventDate: "",
    eventLocation: "",
    guests: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission integration will be added
    // when the business email or WhatsApp details are provided.

    console.log("LA'bamba Enquiry:", formData);

    setSubmitted(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      enquiryType: "Catering Services",
      eventDate: "",
      eventLocation: "",
      guests: "",
      message: "",
    });
  };

  const inputStyle =
    "w-full bg-savory-espresso border border-savory-ivory/15 px-5 py-4 text-savory-ivory text-sm outline-none focus:border-savory-gold transition placeholder:text-savory-ivory/30";

  return (
    <main className="bg-savory-dark text-savory-ivory overflow-hidden">

      {/* HERO */}
      <section className="relative py-28 md:py-36 px-6 md:px-12">

        <div className="absolute inset-0 bg-savory-espresso/60" />

        <div className="relative max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >

            <span className="text-savory-gold uppercase tracking-[0.3em] text-xs">
              We'd Love to Hear From You
            </span>

            <h1 className="font-display text-5xl md:text-7xl mt-6 leading-tight">
              Let's Start a
              <br />
              <span className="italic text-savory-gold">
                Conversation.
              </span>
            </h1>

            <p className="text-savory-ivory/60 leading-8 mt-7 max-w-xl">
              Whether you're visiting us for a meal, making an enquiry
              or planning a special event, we're always happy to hear
              from you.
            </p>

          </motion.div>

        </div>
      </section>

      {/* CONTACT INFORMATION AND FORM */}
      <section className="py-20 md:py-28 px-6 md:px-12">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-16">

          {/* CONTACT DETAILS */}
          <div>

            <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
              Get In Touch
            </span>

            <h2 className="font-display text-4xl md:text-5xl mt-5">
              We're Here to Help.
            </h2>

            <p className="text-savory-ivory/60 leading-8 mt-6">
              Have a question about our meals, catering services or
              upcoming events? Reach out to us and let's discuss
              how we can help.
            </p>

            <div className="space-y-8 mt-12">

              <div className="flex gap-5 items-start">
                <div className="text-savory-gold">
                  <Phone size={23} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">
                    Phone
                  </h3>

                  <p className="text-savory-ivory/50 text-sm mt-2">
                    +234 8103 847 475.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="text-savory-gold">
                  <Mail size={23} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">
                    Email
                  </h3>

                  <p className="text-savory-ivory/50 text-sm mt-2">
                    bigguddy001@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="text-savory-gold">
                  <MapPin size={23} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">
                    Location
                  </h3>

                  <p className="text-savory-ivory/50 text-sm mt-2">
                    Akwa Ibom <br/>
                    Nigeria
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="text-savory-gold">
                  <Clock size={23} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">
                    Opening Hours
                  </h3>

                  <p className="text-savory-ivory/50 text-sm mt-2">
                    Contact us for our current opening hours.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-14 border-t border-savory-ivory/10 pt-8">

              <p className="font-display italic text-2xl text-savory-gold">
                Good food. Good people. Good moments.
              </p>

              <p className="text-savory-ivory/40 text-sm mt-3">
                LA'bamba — Serving you since 2011.
              </p>

            </div>

          </div>

          {/* ENQUIRY FORM */}
          <div className="bg-savory-espresso p-7 md:p-10 lg:p-12">

            <div className="mb-10">

              <span className="text-savory-gold uppercase tracking-[0.25em] text-xs">
                Enquiry Form
              </span>

              <h2 className="font-display text-4xl mt-4">
                Tell Us What You Have in Mind.
              </h2>

              <p className="text-savory-ivory/50 text-sm leading-7 mt-4">
                Complete the form below and provide details about
                your enquiry or upcoming event.
              </p>

            </div>

            {submitted ? (

              <div className="border border-savory-gold/30 p-8 text-center">

                <div className="w-14 h-14 rounded-full bg-savory-gold/15 flex items-center justify-center mx-auto mb-5">
                  <Send className="text-savory-gold" size={25} />
                </div>

                <h3 className="font-display text-3xl">
                  Thank You!
                </h3>

                <p className="text-savory-ivory/60 text-sm leading-7 mt-4">
                  Your enquiry has been captured in this demo.
                  Actual delivery to LA'bamba will be enabled
                  when the form is connected to a submission service.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-savory-gold uppercase tracking-widest text-xs mt-7 hover:text-savory-ivory transition"
                >
                  Send Another Enquiry
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit} className="space-y-7">

                {/* PERSONAL DETAILS */}
                <div>
                  <h3 className="text-savory-gold text-xs uppercase tracking-widest mb-5">
                    Personal Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">

                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputStyle}
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputStyle}
                      required
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputStyle}
                      required
                    />

                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className={inputStyle}
                    >
                      <option value="Catering Services">
                        Catering Services
                      </option>

                      <option value="Outdoor Events">
                        Outdoor Events
                      </option>

                      <option value="Wedding">
                        Wedding
                      </option>

                      <option value="Birthday">
                        Birthday Celebration
                      </option>

                      <option value="Corporate Event">
                        Corporate Event
                      </option>

                      <option value="Restaurant Enquiry">
                        Restaurant Enquiry
                      </option>

                      <option value="Other">
                        Other Enquiry
                      </option>
                    </select>

                  </div>
                </div>

                {/* EVENT DETAILS */}
                <div className="border-t border-savory-ivory/10 pt-7">

                  <h3 className="text-savory-gold text-xs uppercase tracking-widest mb-5">
                    Event Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">

                    <div>
                      <label className="text-xs text-savory-ivory/50 block mb-3">
                        Event Date
                      </label>

                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className={inputStyle}
                      />
                    </div>

                    <input
                      type="text"
                      name="eventLocation"
                      placeholder="Event Location"
                      value={formData.eventLocation}
                      onChange={handleChange}
                      className={inputStyle}
                    />

                    <input
                      type="number"
                      name="guests"
                      placeholder="Expected Number of Guests"
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                      className={inputStyle}
                    />

                  </div>

                </div>

                {/* MESSAGE */}
                <div className="border-t border-savory-ivory/10 pt-7">

                  <h3 className="text-savory-gold text-xs uppercase tracking-widest mb-5">
                    Additional Information
                  </h3>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us more about your event, preferred meals or enquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputStyle} resize-none`}
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-savory-gold text-savory-dark px-7 py-5 uppercase tracking-widest text-xs font-bold hover:bg-savory-ivory transition"
                >
                  Submit Enquiry
                  <ArrowUpRight size={17} />
                </button>

                <p className="text-center text-xs text-savory-ivory/30">
                  We look forward to hearing from you.
                </p>

              </form>

            )}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-savory-espresso py-20 px-6 text-center">

        <div className="max-w-2xl mx-auto">

          <CalendarDays
            size={32}
            className="text-savory-gold mx-auto mb-6"
            strokeWidth={1.4}
          />

          <h2 className="font-display text-4xl md:text-5xl">
            Planning Something Special?
          </h2>

          <p className="text-savory-ivory/50 leading-7 mt-5">
            Explore our catering and event services and let us
            be part of your next celebration.
          </p>

          <Link
            to="/services"
            className="inline-flex items-center gap-3 text-savory-gold uppercase tracking-widest text-xs mt-8 hover:gap-5 transition-all"
          >
            Explore Our Services
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Contact;

