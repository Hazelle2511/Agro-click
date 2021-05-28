import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/2.png';
import Searchbar from "./Searchbar";


function Navbar({toggle}) {

    return(
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono sticky top-0 z-50">
            <Link to ="/"><img src={Logo} alt="carrot" className="w-32 h-16"/></Link>
           
        {/* Anais */}
            {/* <div className="p-2">
                <div className="bg-white flex items-center rounded-full shadow-sm">
                <input className="rounded-l-full w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none " id="search" type="text" placeholder="Rechercher"></input>
          
            <div className="p-2">
                <button className="bg-yellow-500 text-white rounded-full p-1 hover:bg-yellow-400 focus:outline-none w-6 h-6 flex items-center justify-center">
            
            </button>
            
                   
            </div>
          </div>
        </div>   */}
        <Searchbar />

          

                
            <div className=" md:block hidden">
            {/* pr-5 */}
          

                <Link className="p-4" to="/">Accueil</Link>
                <Link className="p-4" to="/signup">Inscription</Link>
                <Link className="p-4" to="/Login">Connexion</Link>
                <Link className="p-4" to="/contact">Contact</Link>
                <Link className="p-4" to="/ShoppingCard">Panier</Link>

            </div>
            

            
          
      
        </nav>
          
    )


}

export default Navbar;