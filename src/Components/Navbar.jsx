import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/2.png';
import Searchbar from "./Searchbar";

import nav from '../../public/locales/components/nav.json';

//For multilanguage translation
const locale = navigator.language.substr(0, 2)
const lang = Object.keys(nav).includes(locale) ? locale : 'fr' 
//


function Navbar({toggle}) {
    // flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono sticky top-0 z-50
    //w-32 h-16
    return(
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono sticky top-0 z-50">
            <Link to ="/"><img src={Logo} alt="carrot" className="w-22 h-10"/></Link>
  
        {/* <Searchbar /> */}
        <Link className="p-4 " to="/search">
        {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> */}
            <svg className="-mx-3.5 w-8 h-8 text-green-700 flex self-end rounded-full p-1 hover:bg-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            

        

         </Link>
       

          {/* Hazelle   */}
            <div className="px-4 cursor-pointer md:hidden  "     onClick={toggle}>
                    <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
          
               <Link className="p-4 " to="/ShoppingCard">
                    <svg className="-mx-3.5 w-8 h-8 text-green-700 flex self-end rounded-full p-1 hover:bg-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                </Link>

                
            <div className=" md:block hidden  focus:outline-none ">
            {/* pr-5 */}
          

                <Link className="p-4" to="/">{nav[lang].home}</Link>
                <Link className="p-4" to="/signup">{nav[lang].signUp}</Link>
                <Link className="p-4" to="/Login">{nav[lang].logIn}</Link>
                <Link className="p-4" to="/contact">{nav[lang].contact}</Link>
                <Link className="p-4" to="/profilLogUser">{nav[lang].profilLogUser}</Link>
                {/* <Link className="p-4" to="/ShoppingCard">Panier</Link> */}

            </div>
            

            
          
      
        </nav>
          
    )


}

export default Navbar;