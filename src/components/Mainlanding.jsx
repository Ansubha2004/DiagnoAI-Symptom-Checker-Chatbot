import React from 'react'
import logo from '../assets/chatbot-logo.png'
import {Link} from 'react-router-dom'

export default function Mainlanding() {
  return (
    <div>
      <div className="absolute z-[3] w-screen h-screen flex flex-col justify-center items-center" id="mainlanding">
        <img src={logo} className="w-[302px] h-[123px] mb-5"></img>
        <div className="text-center font-[600] text-white text-[48px] font-[Inter] ">Your AI-Powered <span className="bg-gradient-to-r from-slate-100 to-sky-500 bg-clip-text text-transparent">Health Companion</span> - Smart<br/>Symptom Check, <span className="text-[#147CDD]">Instant Insights!</span></div>
        <p className="text-gray-300 text-center text-[28px] font-[600] my-15 " >Get a preliminary diagnosis based on verified medical data. Quick,<br/> reliable, and AI-driven healthcare assistance.</p>
        <div className="flex space-x-20 font-[700] font-[Inter] text-[20px]">
            <Link to="/Chatbot"><button className="w-[200px] h-[60px] rounded-[50px] bg-gradient-to-r from-[#AA87DE] to-[#3BA2F6] shadow-[3px_3px_25px_rgb(0,0,0)]
            transition-all duration-900 ease-in-out hover:bg-gradient-to-br hover:from-[#1E4ED7] hover:via-[#7694EA] hover:to-[#1E4ED7]
            hover:text-white" >Chat For Free</button></Link>
            <Link to="/About"><button className="w-[200px] h-[60px] bg-white rounded-[50px] shadow-[3px_3px_25px_rgb(0,0,0)]
            transition-all duration-900 ease-in-out hover:bg-gradient-to-br hover:from-[#000000] hover:via-[#272727] hover:via-[#5C5C5C] hover:via-[#373737] hover:via-[] hover:to-[#000000]
            hover:text-white ">Know More</button></Link>
        </div>
      </div>
    </div>
  )
}
