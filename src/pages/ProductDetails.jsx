import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../api/config";
import DetailsCard2 from "../components/DetailsCard2";

export default function ProductDetails() {
  const [product, setProduct] = useState();

  const params = useParams();
  // console.log(params.id)

  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => {
        // console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [params.id]);
  console.log(product);
  
  return (
    <div className="row justify-content-center" style={{marginTop:'4rem'}}>
      <div className="col-sm-12 col-md-5 my-3 h-100">
        <div className="card bg-light w-100" style={{ width: "18rem" }}>
          <img src={product?.images[0]} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="col-sm-12 col-md-5 my-3 j-100">
        <DetailsCard2 product={product}></DetailsCard2>
      </div>
    </div>
  );
}
