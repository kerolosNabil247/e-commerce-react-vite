import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
// import ProductList from "./pages/ProductList";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import LangContext from "./context/language";
import { lazy, Suspense, useState } from "react";
import CountOfCartContext from "./context/countCart";

const ProductList = lazy(() => import("./pages/ProductList")) ;
const ProductDetails = lazy(() => import("./pages/ProductDetails")) ;
const Cart = lazy(() => import("./pages/Cart")) ;

function App() {
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
