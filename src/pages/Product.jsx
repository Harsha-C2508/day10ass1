import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
    const [item,setItem] = useState([]);

    useEffect(()=>{
        const fetchProducts = async()=>{
            let r = await fetch("http://localhost:8080/data");
            let d = await r.json();
            setItem(d)
        }
        fetchProducts();
    },[]);
  return (
    <div>
        <h1>Available Products</h1>
        <div>
            {item.map((p)=>(
                <div key={p.id}>
                    <h2>{p.name}</h2>
                    <Link to={`/product/${p.id}`}>More Details</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Product