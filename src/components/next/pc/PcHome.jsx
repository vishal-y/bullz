import React from 'react'
import { AiOutlineArrowRight , AiOutlineArrowDown } from 'react-icons/ai'
// import { BsArrowDown } from 'react-icons/bs'

import Typed from 'react-typed';

export default function PhoneHome() {
    return (
        <div id='hero' className=' hidden bg-[#f8fdf9] md:block px-14'>
            <div className=' md:mt-[10%] text-center flex flex-col justify-center items-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-6'>GROW WITH BULLZ</h1>
                <div className='flex justify-center items-center text-[#00fd9a]'>
                    <p className="md:text-4xl sm:text-3xl text-xl font-bold mt-2">Grow Your Money with Bullz </p>
                    <Typed className="md:text-4xl sm:text-3xl text-xl font-bold mt-2 " strings={["get 10% return ","monthy"]} typeSpeed={180} backSpeed={140} loop />
                </div>
                <p className='md:text-2xl text-xl mt-6 text-gray-500'>Monitor your data analytics to increase your revenue for BTB , BTC & SASS paltfroms</p>
                <div className="shadow-xl flex w-[13vw] flex-row gap-5 justify-center items-center bg-[#00df9a] mt-6 p-4 rounded-full hover:bg-[#0bc57e]">
                    <button className='text-white text-xl '>Get Started  </button>
                    <AiOutlineArrowRight style={{ color: "white" }} />
                </div> 
                </div>
                <div className='flex justify-center items-center mt-[9%] animate-bounce '>
                <AiOutlineArrowDown className="w-8 h-14 " style={{ color: "#00fd9a" }}/>
                </div>
        </div>
    )
}


