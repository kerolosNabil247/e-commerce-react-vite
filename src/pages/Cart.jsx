import {  useDispatch, useSelector } from 'react-redux';
import CartCard from '../components/CartCard'
import { useState } from 'react';
import { decrementCart } from '../store/slices/cartCount';

export default function Cart() {
    const [products, setProducts] = useState(useSelector(state => state.addedProduct.products));
    
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log(id);
        setProducts(products.filter((product) => 
            product.id != id
        ));
        dispatch(decrementCart())
    }

  return (
    <div className=''>
      <h2>Cart</h2>
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
                id={product.id}
                onDelete={handleDelete}
                
            ></CartCard>
        ))}
      </div>}

    </div>
  )
}
