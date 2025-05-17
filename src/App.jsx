import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Register from "./pages/Register"
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<ProductList></ProductList>}></Route>
            <Route path="/product-details/:id" element={<ProductDetails></ProductDetails>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
