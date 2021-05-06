// import emailjs from "emailjs.com";
import React from 'react';


export default function Contact() {
return(
    // md:flex-row md:space-x-6 md:space-y-0
    <>
    <div className="antialised bg-contactImg bg-contain">
        
        <div className="flex w-full min-h-screen text-center justify-center items-center">
            
           <div className=" flex  flex-col mspace-y-6 bg-gray-50 w-full max-w-4xl p-8 rounded-xl shadow-lg">
                <div className="flex flex-col justify-between space-y-8 ">
                    <div>
                        <h1 className=" text-4xl lg:text-5xl font-bold   leading-tight">
                       
                        Parlons de tout!
 
                        </h1>
                        <p className="text-gray-700 mt-8 ">
                        Des formes de haine? Envoyez-nous plutôt un e-mail.
                        </p>
                    </div>
                    
                    {/* space-y-6 */}
                    <div className="flex space-x-5 justify-center items-center text-gray-700">
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
                                <label for="" className="uppercase text-sm text-gray-600 font-bold">Votre Nom</label>
                                <input type="text" placeholder="Jane Doe" className=" w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                            </div>
                            <div>
                                <label for="" className="uppercase text-sm text-gray-600 font-bold">Email Address</label>  
                                <input type="email" placeholder="********@*****.**"  className=" w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                            </div>
                            <div>
                                <label for="" className="uppercase text-sm text-gray-600 font-bold">Message</label>  
                                <textarea type="text"
                                rows="4" placeholder=""  className=" w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                            </div>
                            <button className="uppercase text-sm font-bold tracking-wide text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline  bg-yellow-500 ">Envoyer</button>
                   
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
    </div>

    </>

    
)

    
}