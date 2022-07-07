import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product,setProduct] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8080/data/${id}`)
            .then((r)=>r.json())
            .then((d)=>setProduct(d))
        }
       },[id])
  return (
    <div key={product.id}>
        <div>
           <h1>{product.name}</h1>
        </div>
        <div>
          <h2>Amount : ₹ {product.price}</h2>
        </div>
    </div>
  )
}

export default ProductDetails