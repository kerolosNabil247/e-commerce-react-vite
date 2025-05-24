import React, { useState } from 'react'

export default function ImagesCards(props) {
    const {image, onClick} = props
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(true);
    };

    const removeHover = () => {
        setHover(false);
    };

  return (
    <>
      <div className={"card " + (hover? "border-2 border-dark" : "border-0 ")} onMouseEnter={handleHover} onMouseLeave={removeHover} onClick={() => onClick(image)}>
        <div className="card-image">
            <img src={image} alt="" className='img-fluid' />
        </div>
      </div>
    </>
  )
}
