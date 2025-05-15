import React from "react";
import Rating from "./Rating";

export default function DetailsCard2(props) {
  const { product } = props;
  console.log(product);
//   console.log(product.rating)
  return (
    <>
      <div className="card border-0 w-100" style={{ width: "18rem" }}>
        <div className="row mx-3">
          <div className="row">
            <h2><b>{product?.title}</b></h2>
          </div>
          <div className="row">
            <small className="text-secondary">{product?.description}</small>
          </div>
          <div className="row">
            {product && <Rating rate={product.rating}></Rating>}
            {/* <Rating rate={product?.rating}></Rating> */}
          </div>
        </div>
        <hr />
        <div className="row mx-3">
          <div className="row">
            <p
              className={
                "m-4 rounded-5  text-center text-white col-4 " +
                (product?.availabilityStatus === "In Stock"
                  ? "bg-success"
                  : product?.availabilityStatus === "Low Stock"
                  ? "bg-warning"
                  : "bg-danger")
              }
            >
              {product?.availabilityStatus}
            </p>
          </div>
          <div className="row ms-1">
            <small>More information</small>
          </div>
          <div className="row ms-1">
            <button className="btn btn-light border-secondary col-4 m-2">Category</button>
            <button className="btn btn-light border-secondary col-4 m-2">Brand</button>
          </div>
          <div className="row ">
            <div className="col-6 text-white">
              <div className="row align-items-center bg-secondary rounded-5">
                <button className="btn btn-secondary rounded-5 col-4">-</button>
                <p className="col-4 text-center">1</p>
                <button className="btn btn-secondary rounded-5 col-4">+</button>
              </div>
            </div>
            <p className="col-6">
              only <span className="text-warning">{product?.stock} items</span>{" "}
              Left! Don't miss it
            </p>
          </div>
          <div className="row">
            <button className="btn btn-success col-5 mx-1 rounded-5">
              Buy Now
            </button>
            <button className="btn btn-light border-secondary col-5 mx-1 rounded-5">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
