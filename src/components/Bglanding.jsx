import React from 'react'
import bg1 from '../assets/landing_background/bg1.png'
import bg2 from '../assets/landing_background/bg2.png'
import bg3 from '../assets/landing_background/bg3.png'


export default function Bglanding() {
    
    
  return (
    <div>
      <div className="w-screen h-screen absolute z=1 " id="backlgrounddesign">
        <div className="h-full w-full relative overflow-hidden">
            <img className="absolute h-[461px] w-[461px] top-1/4 z-[2] " src={bg1} id="3" alt="" />
            <img className="w-[259px] h-[330px] absolute top-1/4 right-0 transform scale-x-200 scale-y-300 " src={bg2} id="2" alt="" />
            <img className=" w-[259px] h-[330px] absolute top-2/4 left-2/5 transform scale-y-200 scale-x-300" src={bg3} id="3" alt="" />
            <img className="w-[259px] h-[330px] absolute top-1/4 left-0 transform scale-x-200 scale-y-300 rotate-y-180 " src={bg2} id="4" alt="" />
        </div>
      </div>
    </div>
  )
}
