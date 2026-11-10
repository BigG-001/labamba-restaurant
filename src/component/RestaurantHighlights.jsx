import {ChefHat, Leaf, Award, HeartHandshake} from "lucide-react";

function RestaurantHighlights() {
  const highlights = [
    {
      id: 1,
      icon: ChefHat,
      title: "Expert Culinary Craft",
      description:
        "Our dishes are thoughtfully prepared by skilled culinary professionals who understand the art of exceptional dining.",
    },
    {
      id: 2,
      icon: Leaf,
      title: "Fresh Ingredients",
      description:
        "We value quality ingredients, carefully selected to bring out authentic flavours in every meal.",
    },
    {
      id: 3,
      icon: Award,
      title: "Exceptional Quality",
      description:
        "From preparation to presentation, we pay attention to the details that make every dining experience special.",
    },
    {
      id: 4,
      icon: HeartHandshake,
      title: "Customer First",
      description:
        "Your satisfaction matters. We are committed to making every visit and order a memorable experience.",
    },
  ];

  return (
    <section className="bg-savory-espresso py-24 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* Section Introduction */}
        <div className="max-w-2xl mx-auto text-center mb-16">

          <p className="text-savory-gold text-xs uppercase tracking-[0.35em] mb-5">
            LA'bamba Difference
          </p>

          <h2 className="font-display text-5xl md:text-6xl text-savory-ivory leading-tight">
            More Than Just Food.
            <br />
            <span className="italic text-savory-gold">
              An Experience.
            </span>
          </h2>

          <p className="text-savory-sand/70 text-sm md:text-base leading-8 mt-6">
            We believe exceptional dining begins with passion,
            quality and attention to detail. Every experience
            at LA'bamba is an expression of our love for food.
          </p>

        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group border border-white/10 p-8 hover:border-savory-gold/50 hover:bg-savory-dark/50 transition-all duration-500"
              >

                <div className="w-14 h-14 flex items-center justify-center border border-savory-gold/40 text-savory-gold mb-8 group-hover:bg-savory-gold group-hover:text-savory-dark transition-all duration-500">

                  <Icon size={26} strokeWidth={1.5} />

                </div>

                <h3 className="font-display text-2xl text-savory-ivory mb-4">
                  {item.title}
                </h3>

                <p className="text-savory-sand/60 text-sm leading-7">
                  {item.description}
                </p>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default RestaurantHighlights;