import React, { useState } from 'react'
import { GiMedicines } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { IoSend } from 'react-icons/io5'
import logo from '../assets/chatbot-logo.png'
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [isResponseScreen, setisResponseScreen] = useState(false);
    const [messages, setMessages] = useState([]);
    let allMessages = [];

    const hitRequest = () => {
        if (message) {
            generateResponse(message);
        }
        else {
            alert("You must write somthing... !")
        }
    };


    const generateResponse = async (msg) => {
        if (!msg) return;

        const genAI = new GoogleGenerativeAI("AIzaSyCDxh2tZSR58MnxZB_5LwIomFDrOLJx69s");
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            systemInstruction: `You are a virtual medical assistant trained in symptom analysis and preliminary health guidance. Your role is to help users understand potential causes of their symptoms based on verified medical knowledge. 

Instructions:
- Ask follow-up questions to gather detailed information about symptoms, duration, severity, and any existing medical conditions.
- Provide a **preliminary analysis** of possible conditions but clearly state that this is not a medical diagnosis.
- Suggest **next steps**, including home remedies, lifestyle changes, or when to seek professional medical help.
- Avoid providing **definitive medical diagnoses or treatment prescriptions**.
- If symptoms indicate a potential medical emergency, advise the user to seek immediate medical attention.
- Respond in a **compassionate, clear, and concise** manner.
-Dont reply to other question except health care. give a message that you can only help with medical issue 

Example Flow:
1. Greet the user and ask for their symptoms.
2. Ask relevant follow-up questions (e.g., "How long have you been experiencing this?" "Do you have any other symptoms?").
3. Provide **possible explanations** based on symptoms.
4. Offer **guidance on next steps**, such as monitoring symptoms, home remedies, or consulting a doctor.
5. Remind the user that this is not a substitute for professional medical advice.

Your responses should be **user-friendly and informative**, ensuring the user feels guided and reassured.`,
        });
        const result = await model.generateContent(msg);

        const newMessages = [
            ...messages,
            { type: "userMsg", text: msg },
            { type: "responseMsg", text: result.response.text() },
        ];

        setMessages(newMessages); // Append new messages to the existing ones
        setisResponseScreen(true);
        setMessage(""); // Clear the input field after sending the message
        console.log(result.response.text());
    };

    const newChat = () => {
        setisResponseScreen(false);
        setMessages([]); // Clear the messages array
    }

    return (
        <>
            <div className="w-screen min-h-screen overflow-x-hidden bg-[#0C0C0C] text-white absolute z-[2]">
                {
                    isResponseScreen ?
                        <div className="h-[80vh] flex flex-col">
                            {/* Header */}
                            <div className="header pt-[35px] flex items-center justify-start w-full px-[300px]">
                            <div className=" h-[123px] mb-5 "></div>
                                {/* <h2 className="text-2xl">Diagno AI</h2> */}
                                <button
                                    id="newChatBtn"
                                    className="bg-[#181818]  p-[10px] rounded-[30px] cursor-pointer text-[14px] px-[20px]"
                                    onClick={newChat}
                                >
                                    New Chat
                                </button>
                            </div>

                            {/* Messages Container */}
                            <div className="messages flex-1 overflow-y-auto px-[300px] py-4 space-y-4">
                                {messages?.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`p-3 max-w-[80%] rounded-lg ${msg.type === "userMsg"
                                                ? "bg-blue-500 text-white self-end ml-auto"
                                                : "bg-gray-800 text-white self-start"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                ))}
                            </div>
                        </div>
                        :
                        <div className="middle h-[80vh] flex items-center flex-col justify-center">
                            <img src={logo} className="w-[302px] h-[123px] mb-5"></img>
                            {/* <h1 className='text-4xl'>Diagno AI</h1> */}
                            <div className="boxes mt-[30px] flex items-center gap-4 flex-wrap justify-center">
                                {[
                                    { text: "I have a headache and feel dizzy. Should I be worried?", icon: <MdLocalHospital /> },
                                    { text: "Can you suggest home remedies for acid reflux?", icon: <GiMedicines /> },
                                    { text: "What are the symptoms of vitamin D deficiency?", icon: <FaHandHoldingMedical /> },
                                    { text: "How can I manage stress and anxiety naturally?", icon: <FaUserDoctor /> },
                                ].map((item, index) => (
                                    <div key={index} className="card flex flex-col justify-between rounded-lg cursor-pointer transition-all hover:bg-[#201f1f] px-5 relative h-[200px] w-[250px] bg-[#181818] p-4">
                                        <p className="text-[18px]">{item.text}</p>
                                        <i className="absolute right-3 bottom-3 text-[18px]">{item.icon}</i>
                                    </div>
                                ))}
                            </div>

                        </div>
                }


                <div className="bottom w-[100%] flex flex-col mt-6 items-center">
                    <div className="inputBox w-[60%] text-[15px] py-[7px] flex items-center bg-[#181818] rounded-[30px]">
                        <input value={message} onChange={(e) => { setMessage(e.target.value) }} type="text" className='p-[10px] pl-[15px] bg-transparent flex-1 outline-none border-none' placeholder='Write your symptoms here...' id='messageBox' />
                        {
                            message == "" ? "" : <i className='text-green-500 text-[20px] mr-5 cursor-pointer' onClick={hitRequest}><IoSend /></i>
                        }
                    </div>
                    <p className='text-[gray] text-[14px] my-4'>Diagno AI - AI Powered Health Companion - Smart Symptom Checker, Instant Insights  </p>
                </div>
            </div>
        </>
    )
}

export default Chatbot