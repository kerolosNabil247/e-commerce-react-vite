import React, { useContext, useState } from "react";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { removeProduct, setProduct } from "../store/slices/addedProduct";
import CountOfCartContext from "../context/countCart";
import ItemCount from "../context/itemCount";

export default function DetailsCard2(props) {
  const { product } = props;

  // const {itemCount, setItemCount} = useContext(ItemCount)
  // const [quantity, setQuantity] = useState(1);

  const [isAdded, setIsAdded] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isBrand, setIsBrand] = useState(false);
  const { _, setCount } = useContext(CountOfCartContext);

  // const handlePlus = () => {
  //   // setItemCount((prev) => prev + 1);
  //   setQuantity((prev) => prev + 1);
  // };

  // const handleMinus = () => {
  //   if (quantity > 1) {
  //     // setItemCount((prev) => prev - 1);
  //     setQuantity((prev) => prev - 1);
  //   }
  // };

  const dispatch = useDispatch();

  const handleAdd = () => {
    const productAdded = {
      title: product.title,
      image: product.images[0],
      price: product.price,
      brand: product.brand,
      rate: product.rating,
      id: product.id,
    };
    if (product.availabilityStatus !== "Out of Stock") {
      if (!isAdded) {
        console.log("first clicked");
        setIsAdded(true);
        dispatch(setProduct(productAdded));
        console.log(dispatch(setProduct(productAdded)));
        setCount((prev) => prev + 1);
      } else {
        console.log("not first clicked");
        setIsAdded(false);
        dispatch(removeProduct(product.id));
        setCount((prev) => prev - 1);
      }
    } else {
      alert("This item is out of stock");
    }
  };

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-delay="500"
        className="card border-0 w-100"
        style={{ width: "18rem" }}
      >
        <div className="row mx-3">
          <div className="row">
            <h2
              data-aos="flip-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <b>{product?.title}</b>
            </h2>
          </div>
          <div className="row">
            <small
              data-aos="fade-down"
              data-aos-delay="900"
              className="text-secondary"
            >
              {product?.description}
            </small>
          </div>
          <div data-aos="fade-down" data-aos-delay="900" className="row">
            {product && <Rating rate={product.rating}></Rating>}
            {/* <Rating rate={product?.rating}></Rating> */}
          </div>
        </div>
        <hr />
        <div className="row mx-3">
          <div
            className="row"
            data-aos="fade-down"
            data-aos-delay="1000"
            data-aos-duration="1500"
          >
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
            <small data-aos="fade-down" data-aos-delay="900">
              More information
            </small>
          </div>
          <div className="row ms-1">
            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="1500"
              data-aos-offset="0"
              className="col-5"
            >
              <button
                onClick={() => setIsCategory((prev) => !prev)}
                className={
                  "btn col-12 m-1 " +
                  (isCategory ? "btn-secondary" : "btn-light border-secondary")
                }
              >
                Category
              </button>
            </div>
            <div
              className="col-5"
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <button
                onClick={() => setIsBrand((prev) => !prev)}
                className={
                  "btn col-12 m-1 " +
                  (isBrand ? "btn-secondary" : "btn-light border-secondary")
                }
              >
                Brand
              </button>
            </div>
          </div>
          {isCategory && (
            <div className="row justify-content-center">
              <p className="col-12 text-center text-secondary">
                The category is:{" "}
                <span className="text-dark">{product.category}</span>
              </p>
            </div>
          )}
          {isBrand && (
            <div className="row justify-content-center">
              <p className="col-12 text-center text-secondary">
                The brand is: <span className="text-dark">{product.brand}</span>
              </p>
            </div>
          )}
          <div className="row mt-1 justify-content-center">
            {/* <div className="col-5 text-white ms-3">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                data-aos-delay="900"
                className="row align-items-center bg-secondary rounded-5"
              >
                <button
                  className="btn btn-secondary rounded-5 col-4"
                  onClick={handleMinus}
                >
                  -
                </button>
                <div className="col-4 text-center">{quantity}</div>
                <button
                  className="btn btn-secondary rounded-5 col-4"
                  onClick={handlePlus}
                >
                  +
                </button>
              </div>
            </div> */}
            <p data-aos="fade-down" data-aos-delay="900" className="col-8">
              only{" "}
              {
                <span
                  className={
                    product?.availabilityStatus === "In Stock"
                      ? "text-success"
                      : product?.availabilityStatus === "Out of Stock"
                      ? "text-danger"
                      : "text-warning"
                  }
                >
                  {product?.stock} items
                </span>
              }{" "}
              Left!{" "}
              {product?.availabilityStatus !== "Out of Stock" && (
                <span>Don't miss it</span>
              )}
            </p>
          </div>
          <div className="row mb-3  ms-1">
            <button
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="1500"
              data-aos-offset="0"
              className="btn btn-success col-5 mx-1 rounded-5"
            >
              Buy Now
            </button>
            <div
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
              data-aos-offset="0"
              className="col-6"
            >
              <button
                className={
                  "rounded-5 btn col-12  " +
                  (isAdded
                    ? "btn-secondary text-white "
                    : "btn-light border-secondary ")
                }
                onClick={handleAdd}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
