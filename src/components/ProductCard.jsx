import React, { useState } from "react";
import { Link } from "react-router";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { setProduct } from "../store/slices/addedProduct";
import { decrementCart, incrementCart } from "../store/slices/cartCount";
import { removeProduct } from "../store/slices/addedProduct.js";

export default function ProductCard(props) {
  const { data } = props;
  const [isAdded, setIsAdded] = useState(false);

  let number = data.price;
  let numberString = number.toString();
  let parts = numberString.split(".");
  let integer = parseInt(parts[0]);
  let float = parseInt(parts[1]);

  const dispatch = useDispatch();

  const handleClick = () => {
    setIsAdded(!isAdded);
    if(!isAdded){
      dispatch(incrementCart());
      console.log(data.title);
      const product = {
        title: data.title,
        image: data.images[0],
        price: data.price,
        brand: data.brand,
        id: data.id,
      };
      dispatch(setProduct(product))
    }else{
      dispatch(removeProduct(data.id));
      dispatch(decrementCart());
    }
  };
  return (
    <>
      <div className="card h-100" style={{ width: "18rem" }}>
        <p
          className={
            "m-4 rounded-5 w-50 text-center text-white " +
            (data.availabilityStatus === "In Stock"
              ? "bg-success"
              : data.availabilityStatus === "Low Stock"
              ? "bg-warning"
              : "bg-danger")
          }
        >
          {data.availabilityStatus}
        </p>
        <img src={data.images[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="main-title row">
            <h5 className="card-title col-8"><Link className="text-decoration-none text-dark" to={`/product-details/${data.id}`}>{data.title}</Link></h5>
            <p className="col-4">
              <b>
                <sup>$</sup>
                {integer}
                <sup>.{float}</sup>
              </b>
            </p>
          </div>
          <p className="card-text" style={{display: '-webkit-box', WebkitLineClamp: 2, textOverflow:'ellipsis'}}>{data.description}</p>
          <Rating rate={data.rating}></Rating>
          <button
            onClick={handleClick}
            className={isAdded ? "btn btn-success" : "btn border-secondary"}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
