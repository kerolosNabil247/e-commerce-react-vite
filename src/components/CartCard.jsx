import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../store/slices/addedProduct";
import { Link } from "react-router";
import Rating from "./Rating";

export default function CartCard(props) {
  const [quantity, setQuantity] = useState(1);

  const { title, image, price, brand,rate, id, onDelete } = props;
  console.log(rate)
  const dispatch = useDispatch();

  const products = useSelector((state) => state.addedProduct.products)

  const handleClick = () => {
    onDelete(id);
    dispatch(removeProduct(id));
    console.log(id);
    console.log(products.length)
  };


  // to handle different cards quantity
  useEffect(() => {
    setQuantity(1);
  }, [id]);

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="row align-items-center my-3">
        {/* description */}
        <div className="description col-5">
          <div className="row">
            <div className="card col-5">
              <img src={image} className="card-img h-100" alt="..." />
            </div>
            <div className="col-7">
              <Link className="text-decoration-none text-dark" to={`/product-details/${id}`}>
              <p>
                <b>{title}</b>
              </p>
              </Link>
              <Rating rate={rate}></Rating>
              <p>product brand: {brand}</p>
            </div>
          </div>
        </div>
        {/* quantity */}
        <div className="quantity col-3 me-2">
          <div className="row align-items-center">
            <div
              className="col-4 btn btn-success"
              onClick={handlePlus}
            >
              +
            </div>
            <div className="col-4 btn border border-secondary-subtle">
              {quantity}
            </div>
            <div
              className="col-4 btn btn-light  border-light"
              onClick={handleDecrement}
            >
              -
            </div>
          </div>
        </div>
        {/* remove */}
        <div className="remove col-1 mx-4 ">
          <div className="row">
            <div
              className="btn btn-light border border-secondary-subtle col-12"
              onClick={handleClick}
            >
              x
            </div>
          </div>
        </div>
        {/* price */}
        <div className="price col-1 ">
          <div className="row align-items-center">
            <p className="col-12 mt-2">{(price * quantity).toFixed(2)}$</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
