import React from 'react'

const Contact = () => {
  return (
    <>
        <div className='w-full h-[80vh] flex justify-center items-center'>
          
          <form action="https://formspree.io/f/xldgbrde" method='POST' className='flex flex-col items-center justify-center max-w-[500px] w-[80%] gap-6 border border-gray-700 py-10 px-10 rounded-lg'>
          <h1 className='text-4xl'>Contact Us</h1>
            <input className='border border-gray-700 py-3 px-3 rounded-lg w-full outline-none' type="text" placeholder='Enter your name' name='username' required />
            <input className='border border-gray-700 py-3 px-3 rounded-lg w-full outline-none' type="" placeholder='Enter your email' name='email' required/>
            <textarea className='border border-gray-700 py-3 px-3 rounded-lg w-full outline-none' name="message" placeholder='message' required></textarea>
            <button className='bg-red-500 hover:bg-red-400 py-2 px-3 rounded-lg'>Submit</button>
          </form>
        </div>
    </>
  )
}

export default Contact