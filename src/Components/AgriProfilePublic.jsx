import React, {useState, useEffect} from 'react';
import Agriculteur from './Agriculteur';
import {auth, db, getDocs,collection} from "./firebase/firebase";
import ImageUpload from './ImageUploader';

export default function AgriProfilePublic(props) {


   
    return (
    


<div className="bg-gray-100">

 <div className="w-full text-white bg-main-color">
        <div x-data="{ open: false }"
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="p-4 flex flex-row items-center justify-between">
                <a href="#"
                    className="text-lg font-semibold tracking-widest uppercase text-green-700 rounded-lg focus:outline-none focus:shadow-outline">
                    Profil Agriculteur </a>
                <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        <path x-show="!open" fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                        <path x-show="open" fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <nav
                className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                <div  className="relative" x-data="{ open: false }">
                    <button 
                        className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left  bg-yellow-500 hover:bg-blue-800 md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-blue-800 focus:outline-none focus:shadow-outline">
                        <span>{props.name}</span>
                       
                        {/* <img className="inline h-6 rounded-full"
                            src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"/> */}
                        {/* <svg fill="currentColor" viewBox="0 0 20 20"
                            className="inline w-4 h-4 transition-transform duration-200 transform">
                            <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg> */}
                    </button>
                    {/* <div x-show="open" x-transition:enter="transition ease-out duration-100"
                        x-transition:enter-start="transform opacity-0 scale-95"
                        x-transition:enter-end="transform opacity-100 scale-100"
                        x-transition:leave="transition ease-in duration-75"
                        x-transition:leave-start="transform opacity-100 scale-100"
                        x-transition:leave-end="transform opacity-0 scale-95"
                        className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                        <div className="py-2 bg-white text-blue-800 text-sm rounded-sm border border-main-color shadow-sm">
                            <a className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                href="#">Settings</a>
                            <a className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                href="#">Help</a>
                            <div className="border-b"></div>
                            <a className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                href="#">Logout</a>
                        </div>
                    </div> */}
                </div>
            </nav>
        </div>
    </div>
    {/* <!-- End of Navbar --> */}

    <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 md:mx-2">
                {/* <!-- Profile Card --> */}

             
                
                <div className="bg-white p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden">
                    
                        {/* <ImageUpload/> */}
                        <img className="h-auto w-full mx-auto"
                        src={props.image}
                        alt="Profile Pic"/>
                       
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1"> {Agriculteur.FName} {props.LName}</h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner  at <span className="text-green-500">{props.name}.</span></h3>
                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{props.description}</p>
                {/* <ul
                    className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                        <span>Status</span>
                        <span className="ml-auto"><span
                                className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                    </li>
                    <li className="flex items-center py-3">
                        <span>Member since</span>
                        <span className="ml-auto">{props.name}</span>
                      
                    </li>
                </ul> */}
            </div>
                {/* )} */}
               
                {/* <!-- End of profile card --> */}
                <div className="my-4"></div>
              
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-full md:w-9/12 mx-2 h-64">
                {/* <!-- Profile tab --> */}
                {/* <!-- About Section --> */}
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">A propos</span>
                    </div>
                    
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                             <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Prénom</div>
                                <div className="px-4 py-2">{props.FName}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Nom</div>
                                <div className="px-4 py-2">{props.LName}</div>
                            </div>
                            {/* <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                <div className="px-4 py-2">key here:{props.key}</div>
                            </div> */}
                              <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email.</div>
                                <div className="px-4 py-2">
                                    <a className="text-blue-800" href="mailto:jane@example.com">{props.Email}</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Current Address</div>
                                <div className="px-4 py-2">{props.addresse}</div>
                            </div>
                            {/* <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                            </div> */}
                            {/* <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email.</div>
                                <div className="px-4 py-2">
                                    <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                 
                </div>
                {/* <!-- End of about section --> */}

                <div className="my-4"></div>

                {/* <!-- Experience and education --> */}
                <div className="bg-white p-3 shadow-sm rounded-sm">

                    <div className="grid grid-cols-2">
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="tracking-wide">Produits</span>
                                    <div className="image overflow-hidden">
                                    {/* h-auto w-full mx-auto */}
                                        <img className="h-2/4 w-2/4 mx-auto"
                                        src={props.produits}
                                        alt="Products Pics"/>
                                        <br/>
                                         <img className="h-2/4 w-2/4 mx-auto"
                                        src={props.produits2}
                                        alt="Products Pics"/>
                                    </div>
                                
                            
                                </div>
                            </div>
                          
                        </div>
                      
                    </div>
                    {/* <!-- End of Experience and education grid --> */}
                </div>
                {/* <!-- End of profile tab --> */}
            </div>
        </div>
    </div>
</div>
            
        
    )
}
