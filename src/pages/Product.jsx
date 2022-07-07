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
            <table style={{border:"2px solid black",width:"70%",margin:"auto"}}>
                    <thead>
                        <tr>
                            <td style={{border:"2px solid black"}}>no.</td>
                            <td style={{border:"2px solid black"}}>Product</td>
                            <td style={{border:"2px solid black"}}></td>
                        </tr>
                    </thead>
                    <tbody>
                       {item.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id+1}</td>
                            <td>{p.name}</td>
                            <td><Link to={`/product/${p.id}`}>See More</Link></td>
                        </tr>
                       ))}
                    </tbody>
            </table>
        </div>
    </div>
  )
}

export default Product