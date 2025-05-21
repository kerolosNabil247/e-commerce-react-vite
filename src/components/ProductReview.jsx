import React from "react";

export default function ProductReview(props) {
  const { review } = props;
  const totalDate = review.date.split(":");
  const customDate = totalDate[0];
  const dateArray = customDate.split("-");
  return (
    <div>
      <div className="card m-2" data-aos="fade-up-right"  data-aos-easing="ease-in-out"
     data-aos-delay="300"
     data-aos-offset="0">
        <div className="card-body">
          <div className="row justify-content-between">
            <h4 className="col-4">{review.reviewerName}</h4>
            <small className="col-4 text-end">{dateArray[0]}-{dateArray[1]}</small>
          </div>
          <div className="row"><small className="text-secondary">{review.reviewerEmail}</small></div>
          <hr />
            <p>{review.comment}</p>
        </div>
      </div>
    </div>
  );
}
