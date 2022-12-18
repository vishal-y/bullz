import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  const hideNav = () => {
    if (!nav) {
      setNav(!nav)
    }

    }

    return (

      // border border-gray-300 bg-gray-100 rounded-xl shadow-xl

      <div className='text-black overflow-hidden bg-[#f8fdf9] flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4'>
        <div className='flex flex-row text-center items-center'>
          {/* <BiMoon size={50} />
          <BsSun size={50} /> */}
          <h1 className='w-full text-3xl font-bold hover:text-[#00df9a] '><Link to="/">Bullz</Link></h1>
          <p className='border hidden md:block border-gray-50 bg-[#ddf7ea] p-1 rounded-md md:ml-6 text-[#00df9a]'>Return&nbsp;10%</p>
        </div>
        <ul className='md:flex hidden'>
          <li onClick={hideNav} className='p-3'><Link to="/">Home</Link></li>
          <li onClick={hideNav} className='p-3 ml-2'><Link to="/about">About</Link></li>
          <li onClick={hideNav} className='p-3 ml-2'><Link to="/dashboard">dashboard</Link></li>
          <li onClick={hideNav} className='p-3 ml-4 text-white border hover:text-white hover:bg-[#059d6d] border-gray-50 bg-[#00df9a] text-center h-[48px] w-[7.3vw] rounded-lg'><Link to="/login">Login</Link></li>
        </ul>
        
        <div className='md:hidden  flex gap-6' onClick={handleNav}>
        
        <div className='absolute -top-6 -right-32 z-50'>
          <svg className='h-40' width="364" height="369" viewBox="0 0 364 369" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.7347 43.4464C29.4724 319.921 242.122 371.868 352.854 363.283" stroke="#00DF9A"/>
            <path d="M0.734084 4.76285C22.6118 385.514 290.775 305.407 362.278 240.152" stroke="#00DF9A"/>
          </svg>
       </div>
          
          <div className='hover:text-[#00df9a]'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
          </div>
        
        </div>

        <div className={!nav ? "fixed left-0 top-20 w-[100%] h-full ease-in-out duration-500 md:hidden bg-[#f8fdf9]" : "fixed -left-[100%]"}>
          <ul className='pt-12 uppercase'>
            <li onClick={hideNav} className='p-4 hover:text-[#00df9a] border-b border-gray-600 text-center cursor-pointer'><Link to="/">Home</Link></li>
            <li onClick={hideNav} className='p-4 hover:text-[#00df9a] border-b border-gray-600 text-center cursor-pointer'><Link to="/about">About</Link></li>
            <li onClick={hideNav} className='p-4 hover:text-[#00df9a] border-b border-gray-600 text-center cursor-pointer'><Link to="/dashboard">dashboard</Link></li>
            <li onClick={hideNav} className='p-4 h-[55px] ml-[38vw] mt-[5%] w-[22vw] text-white border border-gray-50 bg-[#00df9a] text-center  rounded-lg'><Link to="/login">Login</Link></li>
          </ul>
        </div>

      </div>
    )
  }
