import React from 'react'
import PhoneHome from './main/phone/PhoneHome'
import PcHome from './main/pc/PcHome'
import PhoneFeature from './main/phone/PhoneFeature'
import PcFeature from './main/pc/PcFeature'
import Footer from './Footer'
import Promotion from './promotion'

export default function Home() {
  return (
    <div>
    
    <PhoneHome/>
    <PhoneFeature/>
    <PcHome/>
    <PcFeature/>
    <Promotion/>
    <Footer/>

    </div>
  )
}
