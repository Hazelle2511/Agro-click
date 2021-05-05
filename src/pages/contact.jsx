// import emailjs from "emailjs.com";
import React from 'react';

export default function Contact() {
return(
    <>
    <div className="antialised bg-gray-100 ">
        <div className="flex w-full min-h-screen justify-center items-center">
           <div className=" flex flex-col space-y-6 bg-yellow-500 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
                <div className="flex flex-col justify-between space-y-8">
                    <div>
                        <h1 className="font-bold text-4xl tracking-wide">
                       
                            Contact Us
                        </h1>
                        <p className="pt-2 text-cyan-100 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, possimus.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <div className="inline-flex space-x-2 items-center">
                             <svg className="w-6 h-6 text-xl text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                             <span>0666666666</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                             
                             <svg className="w-6 h-6 text-xl text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                             <span>test@test.gmail.com</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                        <svg className="w-6 h-6 text-xl text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                             <span>15 Rue, Paris, France</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
                        <form action="" className="flex flex-col space-y-4">
                            <div>
                                <label for="" className="text-sm">Your name</label>
                                <input type="text" placeholder=" Your name"  className="ring1 ring-gray-300 w-full rounded-md px-4 py-4 outline-none focus:ring-2 focus:ring-green-700"/>
                            </div>
                            <div>
                                <label for="" className="text-sm">Email Address</label>  
                                <input type="text" placeholder="Email Address"  className="ring1 ring-gray-300 w-full rounded-md px-4 py-4 outline-none focus:ring-2 focus:ring-green-700"/>
                            </div>
                            <div>
                                <label for="" className="text-sm">Message</label>  
                                <textarea type="text"
                                rows="4" placeholder="Message"  className="ring1 ring-gray-300 w-full rounded-md px-4 py-4 outline-none focus:ring-2 focus:ring-green-700"/>
                            </div>
                            <button className="inline-block self-end bg-green-700 uppercase text-white font-bold rounded-lg px-6 py-2 text-sm">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>

    
)

    
}