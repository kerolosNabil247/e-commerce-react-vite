import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<ProductList></ProductList>}></Route>
            <Route path="/product-details/:id" element={<ProductDetails></ProductDetails>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
