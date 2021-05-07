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
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to="/">Accueil</Link>
                <Link className="p-4" to="/Login">Se connecter</Link>
                <Link className="p-4" to="/contact">Contact</Link>
                <Link className="p-4" to="/signup">Sign up</Link>
                

            </div>
        </nav>
    )


}

export default Navbar;