import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import info from '../assets/data/teaminfo.json'
import teambanner from '../assets/teambanner.png'
import ansubha from '../assets/data/ansubha.png'
import ankit from '../assets/data/ankit.png'
import abhimanyu from '../assets/data/abhimanyu.png'
import adipto from '../assets/data/adipto.png'
import anish from '../assets/data/anish.png'




export default function Contributors() {

  useEffect(()=>{
    AOS.init({
      duration:1000
    })
  },[])

  const profiles=[ankit,ansubha,anish,abhimanyu,adipto]
  const delay=[2000,2500,3000,3500,4000]


  return (
    <div>
      <div className="absolute z-[3] h-auto w-screen flex flex-col justify-center items-center">
       
        <img data-aos="zoom-in-up" data-aos-duration="600" src={teambanner} className="w-[1350px] h-[250px] pt-[100px] "/>

        <p data-aos="fade-right" data-aos-duration="700" className="font-[400] italic text-[32px] text-white my-[40px]">This project was made possible by the dedication and hard work of our talented developers</p>

        <div className="w-screen h-auto flex flex-wrap justify-evenly items-center ">
          {
            info.map((user,index)=>(
              <div data-aos="fade-left" data-aos-duration={delay[index]} className="h-[520px] w-[370px] flex justify-center items-center border-[2px] bg-white rounded-[30px]  mx-1 mb-20  border-[#999999] border-solid bg-gradient-to-br from-[#FFFFFF] to-[#999999] bg-opacity-20 backdrop-blur-lg" key={user.id}>
                  <div className="w-[320px] h-[470px] rounded-[30px] bg-[#161616] flex flex-col justify-center items-center">
                    <img src={profiles[index]} className="h-[180px] w-[180px]"/>
                    <p className="text-[24px] font-[800] font-[Inter] text-white mt-2">{user["name"]}</p>
                    <p className="text-[18px] font-[500] font-[Inter] text-white mt-3">{user["role"]}</p>
                    <a href={user["linkedin"]} target="_blank"><button className="w-[190px] h-[35px] rounded-[50px] bg-white mt-3 transition-all duration-500 linear hover:bg-gray-500 ">Linkedin</button></a>
                    <a href={user["github"]} target="_blank"><button className="w-[190px] h-[35px] rounded-[50px] bg-[#C4A9EC] transition-all duration-500 linear hover:bg-purple-700  mt-2">PortFolio / Github</button></a>
                    <p className="text-[15px] font-[300] font-[Inter] text-white mt-3">{user["email"]}</p>
                  </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}
