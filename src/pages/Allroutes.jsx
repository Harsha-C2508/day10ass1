import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import LogIn from './LogIn'
import Product from './Product'
import ProductDetails from './ProductDetails'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/logIn' element={ <LogIn/> }/>
            <Route path='/product' element={<Product/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes