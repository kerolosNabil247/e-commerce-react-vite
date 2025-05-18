import React, { useContext, useState } from "react";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { removeProduct, setProduct } from "../store/slices/addedProduct";
import { decrementCart, incrementCart } from "../store/slices/cartCount";
import CountOfCartContext from "../context/countCart";

export default function DetailsCard2(props) {
  const { product} = props;

  const [quantity , setQuantity] = useState(1);

    const [isAdded, setIsAdded] = useState(false)
    const {_, setCount} = useContext(CountOfCartContext);
  // console.log(product);
//   console.log(product.rating)
  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleMinus = () => {
    if(quantity > 1){

      setQuantity((prev) => prev - 1);
    }
  };

  const dispatch = useDispatch();

  const handleAdd = () => {
    const productAdded = {
        title: product.title,
        image: product.images[0],
        price: product.price,
        brand: product.brand,
        id: product.id,}

    if(!isAdded){
      console.log('first clicked')
      setIsAdded(true);
      dispatch(setProduct(productAdded));
      console.log(dispatch(setProduct(productAdded)))
      setCount(prev => prev+1)
      dispatch(incrementCart());
    }else{
      console.log('not first clicked')
      setIsAdded(false)
      dispatch(removeProduct(product.id));
      setCount(prev => prev-1)
      dispatch(decrementCart());
    };
    
    
    
  }

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
            <div className="col-5 text-white">
              <div className="row align-items-center bg-secondary rounded-5">
                <button className="btn btn-secondary rounded-5 col-4" onClick={handleMinus}>-</button>
                <div className="col-4 text-center">{quantity}</div>
                <button className="btn btn-secondary rounded-5 col-4" onClick={handlePlus}>+</button>
              </div>
            </div>
            <p className="col-6">
              only <span className="text-warning">{product?.stock} items</span>{" "}
              Left! Don't miss it
            </p>
          </div>
          <div className="row mb-3">
            <button className="btn btn-success col-5 mx-1 rounded-5">
              Buy Now
            </button>
            <button className={"col-5 mx-1 rounded-5 " + (isAdded? "btn btn-secondary text-white" :"btn btn-light border-secondary")} onClick={handleAdd}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
