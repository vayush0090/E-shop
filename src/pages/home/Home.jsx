import React, { useState } from 'react'
import NavBar from '../../components/navbar/NavBar'
import hero from './../../assets/bg0.gif'
import category from '../../category'
import Products from '../../components/product/Products'
import dummydata from '../../dummydata'


const Home = () => {
  const [cate , setCate] = useState(dummydata)

  const filterProducts = (category)=>{
    const updatecate = dummydata.filter((item)=>(item.category === category))
    setCate(updatecate)
  }

  return (
    <>
        <div className=''>
          <img className='w-[90%] h-44 sm:h-60 md:h-72 lg:h-96 mx-auto mt-7 rounded-lg shadow-xl' src={hero} alt="" />
        </div>

        <div className="category-section w-full flex justify-center items-center gap-4 flex-wrap sm:flex sm:justify-center sm:items-center sm:gap-5 sm:flex-wrap md:flex md:justify-center md:items-center md:gap-7 md:flex-wrap lg:flex lg:gap-16 lg:justify-center lg:items-center lg:flex-wrap mt-10 ">
        {category.slice(0,5).map((item,index)=>(
          <div key={index} onClick={()=>filterProducts(item.name)} className="category-card w-28 h-32 sm:w-28 sm:h-36 md:w-32 md:h-44 lg:w-48 lg:h-52 flex justify-center items-center flex-col gap-2  p-5 rounded-2xl hover:shadow-2xl cursor-pointer">
            <img className='w-full sm:h-28 md:h-36 lg:h-40' src={item.image} alt="" />
            <span className='text-sm sm:text-xl'>{item.name}</span>
          </div>
          
        ))}
        </div>

        <h1 className='text-center text-2xl font-semibold my-10'>Trending Products</h1>
        <div className='product-section flex items-center justify-center flex-wrap gap-8'>
            {cate.slice(0,7).map((item,index)=>(
              <Products key={index} name={item.name} image={item.image} price={item.price} id={item.id} />
            ))}
        </div>


    </>
  )
}

export default Home