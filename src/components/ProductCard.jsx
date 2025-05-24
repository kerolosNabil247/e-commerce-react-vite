import React, { useContext, useState } from "react";
import { Link } from "react-router";
import "../App.css";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { setProduct } from "../store/slices/addedProduct";
import { removeProduct } from "../store/slices/addedProduct.js";
import CountOfCartContext from "../context/countCart.js";

export default function ProductCard(props) {
  const { data } = props;
  const [isAdded, setIsAdded] = useState(false);
  const [hover, setHover] = useState(false);

  const { _, setCount } = useContext(CountOfCartContext);

  let number = data.price;
  let numberString = number.toString();
  let parts = numberString.split(".");
  let integer = parseInt(parts[0]);
  let float = parseInt(parts[1]);

  const dispatch = useDispatch();

  const handleClick = () => {
    setIsAdded(!isAdded);
    if (data.availabilityStatus == "Out of Stock") {
      console.log("out of stock");
      alert("This item is out of stock");
      setIsAdded(false);
    } else if (!isAdded && data.availabilityStatus != "Out of Stock") {
      console.log(data.title);
      const product = {
        title: data.title,
        image: data.images[0],
        price: data.price,
        brand: data.brand,
        rate: data.rating,
        id: data.id,
      };
      dispatch(setProduct(product));
      setCount((prev) => prev + 1);
    } else {
      dispatch(removeProduct(data.id));
      setCount((prev) => prev - 1);
    }
  };

  const handleHover = () => {
    setHover(true);
  };

  const removeHover = () => {
    setHover(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={removeHover}
        className="card h-100 custom-card-animation"
        data-aos="zoom-in"
        data-aos-delay="150"
        data-aos-duration="250"
        style={{ width: "18rem" }}
      >
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
        <div
          className={
            "card-text text-light text-center  " + (!hover && "d-none")
          }
          style={{
            position: "absolute",
            top: "20%",
            width: "75%",
            left: "10%",
          }}
        >
          <small>{data.description}</small>
        </div>
        <div>
          <img
            src={data.images[0]}
            className={"card-img-top rounded " + (hover && "custom-card-info")}
            style={{ width: "81%" }}
          />
        </div>
        <div className="card-body">
          <div className="main-title row">
            <h5 className="card-title col-8 mt-2">
              <Link
                className="text-decoration-none text-dark"
                to={`/product-details/${data.id}`}
              >
                {data.title}
              </Link>
            </h5>
            <p className="col-4 mt-2">
              <b>
                <sup>$</sup>
                {integer}
                <sup>.{float}</sup>
              </b>
            </p>
          </div>

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
