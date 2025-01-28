import React, { useState } from 'react'
import category from '../../category'
import dummydata from '../../dummydata'
import Products from '../../components/product/Products'
import { CgShoppingBag } from 'react-icons/cg'

const Shop = () => {
  const [cate , setCate] = useState(dummydata)

  const filterProducts = (category)=>{
    if(category==='All'){
        setCate(dummydata)
    }
    else{
      const updatecate = dummydata.filter((item)=>(item.category === category))
    setCate(updatecate)
    }
  }
  return (
    <>
        <div className='shop '>
          <div className='heading flex justify-center items-center gap-3 my-10'>
            <span className='text-4xl font-semibold'>Shop</span>
            <CgShoppingBag size={35} />
          </div>
          <div className="category-section w-full flex justify-center items-center gap-4 flex-wrap sm:flex sm:justify-center sm:items-center sm:gap-5 sm:flex-wrap md:flex md:justify-center md:items-center md:gap-7 md:flex-wrap lg:flex lg:gap-16 lg:justify-center lg:items-center lg:flex-wrap mt-10 mb-10">
        {category.slice(0,5).map((item,index)=>(
          <div key={index} onClick={()=>filterProducts(item.name)} className="category-card w-28 h-32 sm:w-28 sm:h-36 md:w-32 md:h-44 lg:w-48 lg:h-52 flex justify-center items-center flex-col gap-2  p-5 rounded-2xl hover:shadow-2xl cursor-pointer">
            <img className='w-full sm:h-28 md:h-36 lg:h-40' src={item.image} alt="" />
            <span className='text-sm sm:text-xl'>{item.name}</span>
          </div>
          
        ))}
        </div>

        <div className='product-section flex items-center justify-center flex-wrap gap-8'>
            {cate.map((item,index)=>(
              <Products key={index} name={item.name} image={item.image} price={item.price} id={item.id} />
            ))}
        </div>
        </div>
    </>
  )
}

export default Shop