import React, { useEffect, useState } from "react";
import axiosInstance from "../api/config";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axiosInstance
      .get("/products/category/smartphones")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="row" style={{marginTop:'4rem'}}>
        <h2 className="">Welcome to our shopping website, start browsing...</h2>
      </div>
      {products? <div className="row justify-content-center my-5 text-center">
        {products.map((product) => (
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3 d-flex justify-content-center " key={product.id}>
            <ProductCard data={product} />
          </div>
        ))}
      </div> : <h2 className="m-5">Loading...</h2>}
      
    </div>
  )
}
