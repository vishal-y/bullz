import React from 'react'
import PhoneHome from './next/phone/PhoneHome'
import PcHome from './next/pc/PcHome'
import PhoneFeature from './next/phone/PhoneFeature'
import PcFeature from './next/pc/PcFeature'

export default function Home() {
  return (
    <div>
    
    <PhoneHome/>
    <PhoneFeature/>
    <PcHome/>
    <PcFeature/>


    </div>
  )
}
