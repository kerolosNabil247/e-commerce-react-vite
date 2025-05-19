import React, { useContext, useState } from "react";
import { Link } from "react-router";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { setProduct } from "../store/slices/addedProduct";
import { decrementCart, incrementCart } from "../store/slices/cartCount";
import { removeProduct } from "../store/slices/addedProduct.js";
import CountOfCartContext from "../context/countCart.js";

export default function ProductCard(props) {
  const { data } = props;
  const [isAdded, setIsAdded] = useState(false);

  const {_, setCount} = useContext(CountOfCartContext);
  

  let number = data.price;
  let numberString = number.toString();
  let parts = numberString.split(".");
  let integer = parseInt(parts[0]);
  let float = parseInt(parts[1]);

  const dispatch = useDispatch();

  const handleClick = () => {
    setIsAdded(!isAdded);
    if(data.availabilityStatus == 'Out of Stock'){
      console.log('out of stock');
      alert('This item is out of stock');
      setIsAdded(false)
    }else if(!isAdded && (data.availabilityStatus != 'Out of Stock')){
      dispatch(incrementCart());
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
      setCount(prev => prev+1)
    }else{
      dispatch(removeProduct(data.id));
      dispatch(decrementCart());
      setCount(prev => prev-1)
    };
    
  };

  return (
    <>
      <div className="card h-100 custom-card-animation" data-aos="zoom-in" data-aos-delay="250"  data-aos-duration="500" style={{ width: "18rem" }}>
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
          <small className="card-text">{data.description}</small>
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
