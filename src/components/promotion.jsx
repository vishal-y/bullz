import React from 'react'
import mac from '../assets/mac.png'
import {BsGraphUp} from 'react-icons/bs'


export default function promotion() {
    return (
        <>
       

{/* pc */}
        <div className='pt-36 pb-14  justify-center items-center hidden md:flex'>

            <div className='flex flex-row justify-evenly items-center bg-[#00bf71] rounded-3xl'>
                
                <div className='px-10 pl-14'>
                    <h1 className='text-white text-2xl md:text-4xl font-extrabold '>Get your <br /> Bullzz now ! </h1>
                    <p className='pt-6 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Omnis recusandae debitis nulla dignissimos repellat ad.</p>
                    <div className="flex flex-row gap-5 justify-center items-center bg-[white] mt-6 p-4 w-[12vw] rounded-2xl shadow-xl hover:scale-105 ease-in-out hover:animate-pulse">
                        <button className='text-[#00bf71] font-bold '>Get Started  </button>
                    </div>
                </div>

                <div id='left' className='pl-8 '>
                    <div className='md:h-[24rem] w-[30vw] rounded-full bg-[#26c886]'>
                        <img src={mac} alt="mac" className='h-[30vh] relative top-16 left-10'/>
                        {/* <div className='h-[3vh] w-[12vw] bg-gray-800 opacity-20 relative top-16 mt-2 rounded-full left-32'></div> */}
                    </div>
                </div>

            </div>


        </div>

    

{/* phone */}
        <div className='pt-32 pb-8 px-6 justify-center items-center md:hidden hover:scale-105'>

            <div className='flex flex-col justify-evenly items-center bg-[#00bf71] rounded-3xl'>
                
                <div id='right' className=' pl-8 p-4 flex justify-center items-center'>
                        <div className='rounded-full bg-[#26c886]'>
                        <BsGraphUp style={{color: "white"}} size={40} />
                        </div>
                </div>

                
                <div id='left' className='pb-4 px-10 pl-14 flex flex-col justify-center items-center'>
                    <h1 className='text-center text-white text-2xl md:text-4xl font-extrabold '>Invest now ! </h1>
                    <p className='pt-6 text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Omnis recusandae debitis nulla dignissimos repellat ad.</p>
                    
                    <div className=" flex flex-row gap-5 justify-center items-center w-[42vw] bg-[white] mt-6 p-4  rounded-2xl shadow-xl hover:scale-105 ease-in-out hover:animate-pulse">
                        <button className='text-[#00bf71] font-bold '>Get Started  </button>
                    </div>
                
                </div>

            </div>


        </div>

        </>
    )
}
