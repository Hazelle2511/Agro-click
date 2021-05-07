import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/Agro-click.png';
// import Searchbar from './Components/Searchbar';

function Navbar({toggle}) {

    return(
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono sticky top-0 z-50">
            <Link to ="/"><img src={Logo} alt="carrot" className="h-16"/></Link>
           
        {/* Anais */}
            <div className="p-2">
                <div className="bg-white flex items-center rounded-full shadow-sm">
                <input className="rounded-l-full w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none " id="search" type="text" placeholder="Rechercher"></input>
          
            <div className="p-2">
                <button className="bg-yellow-500 text-white rounded-full p-1 hover:bg-yellow-400 focus:outline-none w-6 h-6 flex items-center justify-center">
            
            </button>
            
                   
            </div>
          </div>
        </div>  
        {/* <Searchbar /> */}

          {/* Hazelle   */}
            <div className="px-4 cursor-pointer md:hidden "     onClick={toggle}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
               {/* <Link className="p-4 " to="/cart">
                    <svg className="-mx-3.5 w-8 h-8 text-green-700 flex self-end rounded-full p-1 hover:bg-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg></Link> */}

                
            <div className=" md:block hidden">
            {/* pr-5 */}
          

                <Link className="p-4" to="/">Accueil</Link>
                <Link className="p-4" to="/Login">Se connecter</Link>
                <Link className="p-4" to="/contact">Contact</Link>
                <Link className="p-4" to="/signup">Sign up</Link>
                

            </div>
            <Link className="p-4" to="/ShoppingCard">
            <button className="">
                    <svg className=" w-8 h-8 text-green-700  rounded-full p-1 hover:bg-yellow-400 -mx-24 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
            </button></Link>

            
            
        </nav>
          
    )


}

export default Navbar;