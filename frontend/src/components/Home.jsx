import React from 'react'
import PhoneHome from './main/phone/PhoneHome'
import PcHome from './main/pc/PcHome'
import PhoneFeature from './main/phone/PhoneFeature'
import PcFeature from './main/pc/PcFeature'
import Numbers from './Numbers'
import Promotion from './promotion'


export default function Home() {
  return (
    <div className='overflow-hidden'>
    
    <PhoneHome/>
    <PhoneFeature/>
    <PcHome/>
    <PcFeature/>
    <Promotion/>
    <Numbers/>

    </div>
  )
}
