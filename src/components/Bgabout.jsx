import React,{useEffect} from 'react'
import bg1 from '../assets/landing_background/bg1.png'
import bg2 from '../assets/landing_background/bg2.png'
import bg3 from '../assets/landing_background/bg3.png'
import bg4 from '../assets/landing_background/bg4.png'
import bot1 from '../assets/bot1.png'
import bot2 from '../assets/bot2.png'
import grid from '../assets/flow/grid.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Bgabout() {
  useEffect(()=>{
    AOS.init({
      duration:1000
    })
  },[])
  return (
    <div>
      <div className="h-auto w-auto absolute z-2 bg-[#0C0C0C]">
        <div className="w-screen h-screen relative" id="one">
          <img className="w-[259px] h-[330px] absolute top-1/4 left-0 transform scale-x-200 scale-y-300 rotate-y-180 " src={bg2} id="4" alt="" />
          <img className=" w-[259px] h-[330px] absolute top-3/4 left-3/5 transform scale-y-300 scale-x-350 opacity-70" src={bg3} id="3" alt="" />
        </div>
        <div className="relative w-screen h-screen" id="two">
          <img data-aos="flip-down" data-aos-delay="100" className="w-[358px] h-[358px] absolute top-1/30 left-[50px] transform  rotate-y-180 z-1 opacity-70 " src={bot1} alt="" />
          <img className="w-[350px] h-[350px] absolute top-1/50 left-[30px] transform  rotate-y-180 " src={grid} alt="" />
          <img className=" w-[119px] h-[151px] absolute top-2/4 left-2/5 transform scale-y-400 scale-x-450 " src={bg4} id="5" alt="" />
        </div>
        <div className="relative w-screen h-screen" id="three">
          <img className="absolute h-[461px] w-[461px] top-0 z-[2] " src={bg4} id="7" alt="" />
          <img data-aos="fade-left" data-aos-delay="100" className=" w-[346px] h-[346px] absolute top-1/3 right-1/12 z-1  " src={bot2} id="b2" alt="" />
          <img className=" w-[259px] h-[320px] absolute top-1/5 right-1/17 transform scale-y-300 scale-x-350" src={bg3} id="6" alt="" />
        </div>
      </div>
    </div>
  )
}
