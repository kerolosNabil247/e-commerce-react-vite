import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
// import ProductList from "./pages/ProductList";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import LangContext from "./context/language";
import { lazy, Suspense, useEffect, useState } from "react";
import CountOfCartContext from "./context/countCart";

const ProductList = lazy(() => import("./pages/ProductList")) ;
const ProductDetails = lazy(() => import("./pages/ProductDetails")) ;
const Cart = lazy(() => import("./pages/Cart")) ;

function App() {

  // for the aos (animation on scroll setup)
useEffect(() => {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  const [lang, setLang] = useState("ltr");
  const [count, setCount] = useState(0);
  return (
    <div className="bg-secondary-subtle">
      <BrowserRouter>
      <CountOfCartContext.Provider value={{count, setCount}}>
        <LangContext.Provider value={{ lang, setLang }}>
          <Header></Header>
        </LangContext.Provider>
        <div dir={lang === "ltr" ? "ltr" : "rtl"}>
          <div className="container my-5">
              <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path="/" element={<ProductList></ProductList>}></Route>
              <Route
                path="/product-details/:id"
                element={<ProductDetails></ProductDetails>}
                ></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="/register" element={<Register></Register>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
                </Suspense>
          </div>
        </div>
        </CountOfCartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
