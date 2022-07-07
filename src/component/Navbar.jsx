import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <h1>Logo</h1>
        <Link style={{ textDecoration:"none",fontSize:"30px",marginTop:"23px",fontWeight:"bolder" }} to='/'>Home</Link>
        <Link style={{ textDecoration:"none",fontSize:"30px",marginTop:"23px",fontWeight:"bolder" }} to='/logIn'>LogIn</Link>
        <Link style={{ textDecoration:"none",fontSize:"30px",marginTop:"23px",fontWeight:"bolder" }} to='/product'>Product</Link>
    </div>
  )
}

export default Navbar