import React from 'react'
import { AiOutlineCheck , AiOutlineArrowRight} from 'react-icons/ai' 
import Phone from '../../../assets/full_phone.png'

export default function PcFeature() {
  return (
    <div className='mt-[7%] hidden md:flex gap-12 justify-center items-center'>

    {/* <div className='rounded-3xl bg-[#e9f5eb] flex flex-col justify-center items-center'> */}
   
    <div>
    {/* <div className='h-32 w-56 border rounded-lg shadow-xl relative top-72 left-96'></div> */}
    <img src={Phone} alt="phone"/>
    {/* </div> */}


    {/* <script src="https://cdn.lordicon.com/fudrjiwc.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/gqdnbnwt.json"
    trigger="hover"
    colors="primary:#000,secondary:#00df9a"
    style={{"width":"55%","height":"55%"}}>
</lord-icon>
<h1 className='text-3xl text-bold mt-[-5vh] text-[#00fd9a] mr-2'>Growth 💸</h1> */}
   
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
  )
}
