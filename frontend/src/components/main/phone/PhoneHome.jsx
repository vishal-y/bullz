import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai' 
import bg from './../../../assets/Revenue-bro.png'

export default function PhoneHome() {
  return (
    <div className=' max-w-[760] h-full bg-[#f8fdf9] md:hidden lg:hidden flex flex-col justify-center items-center overflow-hidden'>
  
      <div >
        <img src={bg} alt="hero" className='h-[50vh] '/>
      </div>

      <div>
      <p className='text-2xl font-bold mx-6 mt-6 text-center flex items-center justify-center text-[#00df9a]'>Grow your money</p>
      <p className='text-gray-900 text-xl mt-6 mx-8 text-center '>Bullz is a handy platform to invest your money and get return</p>
      </div>
      
      <div className="flex flex-row gap-5 justify-center items-center z-50 bg-[#00df9a] mt-6 p-4 w-[50vw] rounded-full hover:bg-[#0bc57e] shadow-xl">
        <button className='text-white text-xl '>Get Started  </button>
        <AiOutlineArrowRight style={{color: "white"}}/>
      </div>
      
    </div>
  )
}
