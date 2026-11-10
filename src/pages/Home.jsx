import AboutPreview from "../component/AboutPreview";
import FeaturedDishes from "../component/FeaturedDishes";
import Hero from "../component/Hero";
import RestaurantHighlights from "../component/RestaurantHighlights";

function Home(){
  return(
    <main>
       <Hero/>
       <FeaturedDishes/>
       <RestaurantHighlights/>
       <AboutPreview/>
    </main>
  )
}
export default Home;