import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
import WhatsAppButton from "./component/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";

function App(){

  return(
    <CartProvider>
        <BrowserRouter>

          <ScrollToTop/>

            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>

            <Footer/>

            <WhatsAppButton/>
        </BrowserRouter>
    </CartProvider>
  )
}
export default App;