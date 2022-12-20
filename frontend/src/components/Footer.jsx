import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import {Link} from "react-router-dom"

const Footer = () => {


  return (
    <div id='footer' className='max-w-[1440px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600'>
     
      <div className='md:pr-4'>
        <h1 className='w-full text-3xl font-bold text-[#00fd9a] hover:text-[#059d6d] text-center md:text-left'><Link to="/">BULLZZ</Link></h1>
        <p className='py-4 text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum animi sunt officia tempore iste consequatur quos cupiditate adipisci earum.</p>
        <div className='flex justify-evenly items-center md:justify-between md:w-[40%] lg:w-[50%] md:ml-12 my-6'>
          <Link to="#" target="_blank">
            <FaInstagram size={20} />
          </Link>
          <Link to="#" target="_blank">
            <FaFacebookSquare size={20} />
          </Link>
          <Link to="#" target="_blank">
            <FaTwitterSquare size={20} />
          </Link>
        </div>
      </div>

      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='text-[#00bf71] font-bold'><Link to="/course">Services</Link></h6>
        <ul>
            <li className='py-2 text-sm'><Link to="#">Plan</Link></li>
            <li className='py-2 text-sm'><Link to="#">Return</Link></li>
            <li className='py-2 text-sm'><Link to="#">Investment</Link></li>
            <li className='py-2 text-sm'><Link to="#">FAQ</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='text-[#00bf71] font-bold'>Support</h6>
        <ul>
            <li className='py-2 text-sm'><Link to="#">Pricing</Link></li>
            <li className='py-2 text-sm'><Link to="#">Contact us</Link></li>
            <li className='py-2 text-sm'><Link to="#">Mail us</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='text-[#00bf71] font-bold'>Company</h6>
        <ul>
            <li className='py-2 text-sm'><Link to="#">About</Link></li>
            <li className='py-2 text-sm'><Link to="#">How it works</Link></li>
            <li className='py-2 text-sm'><Link to="#">Privacy</Link></li>
            <li className='py-2 text-sm'><Link to="#">Terms  & <br /> conditions</Link></li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;