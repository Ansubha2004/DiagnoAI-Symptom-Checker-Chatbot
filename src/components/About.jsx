import React from 'react'
import workflow from '../assets/flow/workflow.png'

export default function About() {
  return (
    <div>
      <main className="absolute z-[3] h-auto w-auto  text-white">
        <div className="w-screen h-screen flex flex-col justify-center items-center " id="welcome">
            <div className="text-center font-[700] text-white text-[64px] font-[Inter] ">Welcome To <span className="bg-gradient-to-r from-[#AA87DE] to-[#3BA2F6] bg-clip-text text-transparent">Diagno AI</span> </div>
            <p className="font-[Inter] text-gray-300 text-center text-[24px] font-[400] my-15 " >Diagno AI is a virtual medical assistant designed to help users understand their<br/> symptoms and receive preliminary health guidance. Our AI-powered chatbot provides<br/> informative, user-friendly, and empathetic responses based on verified medical<br/> knowledge.  </p>
        </div>
        <div className="w-screen h-screen flex flex-col justify-center items-center" id="working">
          <div className="text-center font-[700] text-white text-[36px] font-[Inter] mb-28 ">How does it works?</div>
          <img className="h-[300px] w-[70%]"  src={workflow}/>
        </div>
        <div className="w-screen h-screen flex flex-col justify-center items-center" id="advantages">
          <div className="text-center font-[700] text-white text-[36px] font-[Inter] mb-25">Why use Diagno AI?</div>
          <p className="text-[22px] transform translate-x-[-170px]"> <span className="text-purple-700 font-bold">Instant Health Insights</span> – Get quick guidance without long waiting times.
              <br/><br/>
              <span className="text-purple-700 font-bold">Personalized Experience</span> – AI tailors responses based on your symptoms.
              <br/><br/>
              <span className="text-purple-700 font-bold">Secure & Confidential</span> – Your data is private and protected.</p>
        </div>
      </main>
    </div>
  )
}
