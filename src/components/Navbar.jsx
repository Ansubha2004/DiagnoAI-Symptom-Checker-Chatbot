import React from 'react'
import logo from "../assets/chatbot-logo.png";
import { Link } from 'react-router-dom'; 

export default function navbar() {
  return (
    <div>
      <div className="flex w-screen h-auto box-border pt-[10px] justify-between items-center backdrop-blur-lg text-white font-roboto font-400 fixed z-[4] " id="navbar">
            <img src={logo} className="h-[72px] w-[177px] relative cursor-pointer left-[30px]"></img>
            <ul id="navbar-buttons" className="flex space-x-12 text-[18px] cursor-pointer">
                <li className="py-[10px] border-solid border-transparent hover:border-purple-700 focus:border-purple-700 border-b-[3px] "><Link to="/">Home</Link></li>
                <li className="py-[10px] border-solid border-transparent hover:border-purple-700 focus:border-purple-700 border-b-[3px] "><Link to="/About">About</Link></li>
                <li className="py-[10px] border-solid border-transparent hover:border-purple-700 focus:border-purple-700 border-b-[3px] "><Link to="/Chatbot">ChatBot</Link></li>
                <li className="py-[10px] border-solid border-transparent hover:border-purple-700 focus:border-purple-700 border-b-[3px] "><Link to="/">Contributers</Link></li>
            </ul>
            <button id="chatbutton" className="w-[140px] cursor-pointer h-[40px] relative right-[45px] rounded-[15px] bg-[#147CDD] text-[18px] transition-all duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-400 ">Documentation</button>
      </div>
    </div>
  )
}
