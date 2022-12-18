import React from 'react'
import { AiOutlineArrowRight, AiOutlineMobile, AiOutlineBoxPlot } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Plans from '../../../assets/Plans.png'


export default function Feature() {
  return (

    <div className='overflow-hidden md:hidden'>



      <div className='px-14 flex flex-col justify-center items-center md:hidden'>

        <p className='text-3xl font-bold mt-[15%] mb-[10%] text-center'>Create your Bullzz portfolio today.</p>
        <p className='text-gray-600 text-center mb-[10%]'>Create account at bullzz in minutes. Fill the form , choose your plan , invest with easy options , no complicated steps. BUllzz does not keep funds , Bullzz grows them.</p>

        <div>

          {/* <p className='flex flex-row gap-5'><AiOutlineCheck style={{color:"#00df9a"}}/> Create Account</p>
        <br />
        <p className='flex flex-row gap-5'><AiOutlineCheck style={{color:"#00df9a"}}/>  Payment options</p>
        <br />
        <p className='flex flex-row gap-5'><AiOutlineCheck style={{color:"#00df9a"}}/> Invest and enjoy</p> */}


          <ol className="relative border-l border-[#00fd9a] ">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#00fd9a] rounded-full mt-1.5 -left-1.5 "></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">SETP 1</time>
              <h3 className="text-lg font-semibold text-gray-900 ">Create Account</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis animi impedit incidunt commodi nesciunt.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#00fd9a] rounded-full mt-1.5 -left-1.5 border border-white "></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">STEP 2</time>
              <h3 className="text-lg font-semibold text-gray-900 ">Easy Payment options</h3>
              <p className="text-base font-normal text-gray-500 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quidem vero sit accusamus recusandae?</p>
              <Link to="#">
                <div className="md:ml-2  flex flex-row gap-2 justify-center items-center bg-[#00df9a] mt-6 md:mt-4 p-2 w-[40vw] md:w-[12vw] rounded-full hover:bg-[#0bc57e] shadow-xl">
                  <button className='text-white text-lg '>Get Portfolio</button>
                  <AiOutlineArrowRight style={{ color: "white" }} />
                </div>
              </Link>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-[#00fd9a] rounded-full mt-1.5 -left-1.5 border border-white "></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">STEP 3</time>
              <h3 className="text-lg font-semibold text-gray-900 ">Invest and Enjoy</h3>
              <p className="text-base font-normal text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsa eveniet. Blanditiis, error praesentium.</p>
            </li>
          </ol>



        </div>

      </div>

      <div className='flex flex-col justify-center items-center gap-12  mt-32'>


        <div >
          <img src={Plans} alt="phone" className='p-8' />
        </div>

        <div className='h-[31rem] w-[100vw] flex flex-col items-center'>
          <p className='text-2xl font-bold mb-[5%]'>Invest right now for the future</p>
          <p className='text-gray-600 mb-[10%] text-center '>Our technology use Modern Portfolio Theory approach introduced by economist. Proven to maintain risk and maximize profit.</p>

          <div className='flex gap-6 ml-4 p-3'>

            <div className="bg-[#e6f9f1] h-14 w-16 flex justify-center items-center rounded-full ">
              <AiOutlineBoxPlot style={{ color: "#00df9a" }} size={25} />
            </div>

            <div>
              <h1 className='font-bold text-lg'>Manage Your Portfolio</h1>
              <p>Invest and keep clam and Manage your portfolio.</p>
            </div>

          </div>

          <div className='flex gap-6 ml-4 mt-10 p-3'>

            <div className="bg-[#e6f9f1] h-14 w-16 flex justify-center items-center rounded-full ">
              <AiOutlineMobile style={{ color: "#00df9a" }} size={25} />
            </div>

            <div>
              <h1 className='font-bold text-lg'>Get Mobile app</h1>
              <p>Stay on top of the market with the bullzz app for android and ios.</p>
            </div>

          </div>

          <div className=" bg-[#00df9a] flex justify-center items-center gap-5 mt-[10%] ml-[8vw] p-2 w-[40vw] md:w-[12vw] rounded-full hover:bg-[#0bc57e] shadow-xl">
        <button className='text-white text-lg '>Learn more</button>
        </div>

        </div>


      </div>


    </div>
  )
}
