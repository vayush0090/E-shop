import React from 'react'
import image1 from "./../../assets/image1.jpg"
import { useDispatch } from 'react-redux'
import { AddItem } from '../../redux/cartSlice'

const Products = ({name,image,price,id}) => {
  const dispatch = useDispatch()
  return (
    <>
        <div className='product bg-white rounded-2xl shadow-2xl  w-64 h-96 p-5 flex gap-5 flex-col justify-center items-center'>
            <img className='hover:scale-105 transition-all ease-in-out duration-400 cursor-grab h-40' src={image} alt="" />
            <div className="product-details flex flex-col gap-3 justify-start items-start">
                <span>{name}</span>
                <span>Rs {price}/-</span>
                <button onClick={()=>{dispatch(AddItem({name:name,image:image,price:price,id:id}))
              alert("Product Added successfully...")}} className='bg-black hover:opacity-80 text-white py-2 px-2 rounded-md'>Add +</button>
            </div>
        </div>
    </>
  )
}

export default Products