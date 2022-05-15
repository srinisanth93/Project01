import React from 'react'
import Products from './Products'
import './AllProducts.css'
function AllProducts() {
    let image="https://i.imgur.com/O0GMYuw.jpg"
    let name="laptop"
    let price="200"
  return (
      <div className='contentPanel'> 
    <div className='containers d-flex justify-content-around flex-wrap'>
       <Products Image={image} Name={name} Price={price}></Products>
       <Products Image={image} Name={name} Price={price}></Products>
       <Products Image={image} Name={name} Price={price}></Products>
       <Products Image={image} Name={name} Price={price}></Products>
       <Products Image={image} Name={name} Price={price}></Products>
       <Products Image={image} Name={name} Price={price}></Products>
       <Products Image={image} Name={name} Price={price}></Products>
       <Products Image={image} Name={name} Price={price}></Products>
       <Products Image={image} Name={name} Price={price}></Products>
       <Products Image={image} Name={name} Price={price}></Products>
        </div>
         </div>
  )
}

export default AllProducts;