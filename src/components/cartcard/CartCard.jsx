import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import image1 from "./../../assets/image1.jpg";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../../redux/cartSlice";

const CartCard = ({ image, name, price, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="mt-5 cartcard flex justify-around items-center py-5 px-5 w-[90%] sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto shadow-2xl rounded-xl">
        <div className="left-card w-[80%] sm:w-[50%] md:w-[70%] lg:w-[50%]  flex items-center   gap-10">
          <img className=" w-[40%] h-16 sm:w-[40%] sm:h-20 md:w-[40%] md:h-28 lg:w-[50%] lg:h-28 " src={image} alt="" />
          <div className="name-price text-sm sm:text-xl flex flex-col   gap-4 w-[40%] md:w-[40%]  lg:w-[50%]">
            <span>{name}</span>
            <span>Rs {price}/-</span>
          </div>
        </div>
        <div className="right-card md:w-[30%] lg:w-[50%] flex items-center justify-end lg:justify-center md:justify-end gap-3 px-3  py-2 rounded-md">
          <button
            onClick={()=>{
                dispatch(RemoveItem(id))
                alert("Product Removed successfully...")
            }}
            className="flex items-center bg-red-400 px-2 py-1 text-sm sm:text-[18px] sm:px-3 sm:py-2 rounded-md gap-2"
          >
            Remove <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
