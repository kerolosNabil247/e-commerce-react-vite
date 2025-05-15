
export default function Rating(props) {
    const {rate} = props;
    const maxRating = 5;
    const rateString = rate?.toString();
    const parts = rateString?.split('.');
    // console.log(parts)
    const integer = parseInt(parts[0]);
    const fraction = parseInt(parts[1]);
  return (
    <div>
      {[...Array(maxRating)].map((_, i) => {
        if (i < integer && integer != 0) {
            return (
                <span key={i}> <i className="bi bi-star-fill" style={{color:'#06b105'}}></i> </span>
            )
        }else if (i == integer && fraction){
            return (
                <span key={i}><i className="bi bi-star-half" style={{color:'#06b105'}}></i></span>
            )
        }else {
            return (
                <span key={i}><i className="bi bi-star"></i></span>
            )
        }
      })}
    </div>
  )
}
