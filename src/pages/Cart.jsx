import {  useDispatch, useSelector } from 'react-redux';
import CartCard from '../components/CartCard'
import { useContext, useEffect, useState } from 'react';
import { decrementCart } from '../store/slices/cartCount';
import CountOfCartContext from '../context/countCart';

export default function Cart() {
    const [products, setProducts] = useState(useSelector(state => state.addedProduct.products));
    const {_,setCount} = useContext(CountOfCartContext);
    // console.log(products.length);
    useEffect(() => {
      setCount(products.length);
    },[products.length,setCount])
    

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log(id);
        setProducts(products.filter((product) => 
            product.id != id
        ));
        dispatch(decrementCart())
    }

  return (
    <div  style={{marginTop:'4rem'}}>
      <h2 className='mt-5'>Cart</h2>
      <div className="row">
        <p className='col-5'>Description</p>
        <p className='col-3'>Quantity</p>
        <p className='col-1 mx-3'>Remove</p>
        <p className='col-1 mx-4'>price</p>
      </div>
      <hr />
      {products && <div className="row">
        {products.map((product) => (
            <CartCard 
                key={crypto.randomUUID()}
                title={product.title}
                image={product.image}
                price={product.price}
                brand={product.brand}
                rate={product.rate}
                id={product.id}
                onDelete={handleDelete}
                
            ></CartCard>
        ))}
      </div>}

    </div>
  )
}
