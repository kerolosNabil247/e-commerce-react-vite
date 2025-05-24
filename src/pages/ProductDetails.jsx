import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../api/config";
import DetailsCard2 from "../components/DetailsCard2";
import ProductReview from "../components/ProductReview";
import ImagesCards from "../components/ImagesCards";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const [image, setImage] = useState();

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

  const handleImage = (image) => {
    setImage(image);
  }

  return (
    <>
    <div className="row justify-content-center" style={{marginTop:'4rem'}}>
      <div className="col-sm-12 col-md-5 mt-3 h-100">
        <div className="row">
        <div className="card bg-light w-100" style={{ width: "18rem" }}>
          <img src={image? image: product?.images[0]} className="card-img-top" alt="..." />
        </div>
        </div>
        <div className="row">
          {product?.images.map((image) => (
            <div key={crypto.randomUUID()} className="card col-4 px-0"data-aos-delay="500">
              <ImagesCards image={image} onClick={handleImage}></ImagesCards>
            </div>
          ))}
        </div>
      </div>
      <div className="col-sm-12 col-md-5 my-3 h-100">
        <DetailsCard2 product={product}></DetailsCard2>
      </div>
    </div>
    <hr />  
    <div className="row">
      <div className="col-4"><h3>Reviews</h3></div>
    </div>
    <div className="row">
      {product?.reviews.map((review) => (
                <ProductReview key={crypto.randomUUID()} review={review}></ProductReview>
      ))
        }
    </div>
    </>
  );
}
