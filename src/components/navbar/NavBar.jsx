import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { FcShop } from 'react-icons/fc'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  const items = useSelector(state=>state)
  console.log(items.cart);
  
  return (
    <>
        <div className='sticky top-0 z-20'>
        <div className='nav bg-gray-700 pl-3 pr-6 py-5 sm:py-6 sm:px-8 '>
            <div className=" top-nav flex items-center justify-between">
                <div className="logo flex items-center gap-2 sm:gap-5 lg:gap-10">
                <FcShop size={35} className='text-white' />
                <span className='text-white text-sm sm:text-xl md:text-3xl md:font-semibold'>E-shop</span>
                </div>
                <form className='flex items-center justify-center w-[55%]  rounded-xl overflow-hidden'>
                  <input className='bg-white py-2 sm:py-4 px-3 w-[80%] sm:w-[80%] md:w-[85%] lg:w-[94%] outline-none ' type="text" placeholder='Search items...' />
                  <button className='bg-white w-[20%] sm:w-[20%] md:w-[15%] lg:w-[6%] py-[1px] sm:py-[9px] px-1 border-2 border-white  flex items-center justify-center'><CiSearch size={35} />
                  </button>
                </form>
                <Link to='/cart'>
                <div className='cart-box relative flex items-center'>
                <BsCart4 size={35} />
                <span className='absolute text-white -top-2 -right-3'>{items.cart.length}</span>
                </div>
                </Link>
            </div>
        </div>
        <div className='bottom-nav bg-gray-600 text-white flex justify-center items-center gap-10 sm:text-xl font-semibold'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/shop'>Shop</NavLink>
              <NavLink to='/cart'>Cart</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
            </div>
        </div>
    </>
  )
}

export default NavBar