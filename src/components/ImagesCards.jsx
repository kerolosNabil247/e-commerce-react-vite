import React, { useState } from 'react'

export default function ImagesCards(props) {
    const {image} = props
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(true);
    };

    const removeHover = () => {
        setHover(false);
    };

  return (
    <>
      <div className={"card " + (hover? "border-1 border-dark" : "border-0 ")} onMouseEnter={handleHover} onMouseLeave={removeHover}>
        <div className="card-image">
            <img src={image} alt="" className='img-fluid' />
        </div>
      </div>
    </>
  )
}
