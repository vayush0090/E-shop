import React from 'react'
import CartCard from '../../components/cartcard/CartCard'
import {useSelector} from 'react-redux'
import image from './../../assets/emptycart.png'

const Cart = () => {
  const items = useSelector(state=>state)
  const total = items.cart.reduce((a,b,)=>a+b.price,0)
  return (
    <>
      <div>
        {items.cart.length<=0?<div className
        ="flex flex-col justify-start items-center w-full h-screen gap-10 ">
          <span className='text-2xl font-semibold mt-10'>Your Cart is Empty</span>
          <img className='h-72' src={image} alt="" />
        </div>:
        <div className=''>
          {items.cart.map((item,index)=>(
            <CartCard className='' key={index}  name={item.name} price={item.price} image={item.image} id={item.id} />
          ))}
          <div className='flex flex-col justify-center items-center'>
            <hr className='h-[2px] w-[50%] bg-black mt-10 mb-5' />

            <span className='text-xl font-semibold'>Total Products : {items.cart.length}</span>
            <span className='text-xl font-semibold'>Total Price : Rs {total}/-</span>
          </div>
          </div>}
        
      </div>
    </>
  )
}

export default Cart