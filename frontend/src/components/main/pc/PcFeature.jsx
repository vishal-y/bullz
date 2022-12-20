import React from 'react'
import { AiOutlineCheck , AiOutlineArrowRight , AiOutlineMobile , AiOutlineBoxPlot} from 'react-icons/ai' 
import Phone from '../../../assets/full_phone.png'
import Plans from '../../../assets/Plans.png'

export default function PcFeature() {


  return (
    <div className='mt-[7%] hidden md:block'>

<div className='md:flex gap-12 justify-center items-center'> 


    <div >
    {/* <div className='h-32 w-56 border rounded-lg shadow-xl relative top-72 left-96'></div> */}
    <img src={Phone} alt="phone"/>
    </div>

    <div className='h-[38rem] w-[38vw] '>
    <p className='text-5xl font-bold mt-[17%] mb-[10%] text-center'>Create your Bullzz portfolio today.</p>
        <p className='text-gray-600 text-center mb-[10%]'>Create account at bullzz in minutes. Fill the form , choose your plan , invest with easy options , no complicated steps. BUllzz does not keep funds , Bullzz grows them.</p>
        <p className='flex flex-row gap-5 justify-center items-center'><AiOutlineCheck style={{color:"#00df9a"}}/> Create Account</p>
        <br />
        <p className='flex flex-row gap-5 justify-center items-center'><AiOutlineCheck style={{color:"#00df9a"}}/>  Payment options</p>
        <br />
        <p className='flex flex-row gap-5 justify-center items-center'><AiOutlineCheck style={{color:"#00df9a"}}/> Invest and enjoy</p>
    
        <div className=" bg-[#00df9a] flex justify-center items-center gap-5 mt-[5%] ml-[14vw] p-2 w-[40vw] md:w-[12vw] rounded-full hover:bg-[#0bc57e] shadow-xl">
        <button className='text-white text-lg '>Get Portfolio</button>
        <AiOutlineArrowRight style={{color: "white"}}/>
        </div>
    </div>

</div>

<div className='md:flex gap-12 justify-center items-center mt-32'> 

    <div className='h-[38rem] w-[38vw] '>
    <p className='text-5xl font-bold mt-[17%] mb-[10%] text-center'>Invest right now for the future</p>
        <p className='text-gray-600 text-center mb-[10%]'>Our technology use Modern Portfolio Theory approach introduced by economist. Proven to maintain risk and maximize profit.</p>
        
        <div className='flex gap-6 ml-16'>

        <div  className="bg-[#e6f9f1] h-14 w-14 flex justify-center items-center rounded-full ">
        <AiOutlineBoxPlot style={{color:"#00df9a"}} size={25} />
        </div>

        <div>
        <h1 className='font-bold text-lg'>Manage Your Portfolio</h1>
        <p>Invest and keep clam and Manage your portfolio.</p>
        </div>
       
        </div>


        <div className='flex gap-6 ml-16 mt-10'>

        <div  className="bg-[#e6f9f1] h-14 w-14 flex justify-center items-center rounded-full ">
        <AiOutlineMobile style={{color:"#00df9a"}} size={25} />
        </div>

        <div>
        <h1 className='font-bold text-lg'>Get Mobile app</h1>
        <p>Stay on top of the market with the bullzz app for android and ios.</p>
        </div>
       
        </div>

    
        <div className=" bg-[#00df9a] flex justify-center items-center gap-5 mt-[5%] ml-[14vw] p-2 w-[40vw] md:w-[12vw] rounded-full hover:bg-[#0bc57e] shadow-xl">
        <button className='text-white text-lg '>Learn more</button>
        </div>
    </div>

    <div>
    {/* <div className='h-32 w-56 border rounded-lg shadow-xl relative top-72 left-96'></div> */}
    <img src={Plans} alt="phone"/>
    </div>

</div>



    </div>
  )
}
