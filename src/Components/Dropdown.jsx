import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/Agro-click.png';

const Dropdown = ({isOpen, toggle}) => {
    // grid grid-rows-4 text-center items-center bg-yellow-500
    // w-full text-gray-700 bg-white h-16 fixed sticky  top-0 animated z-40
    return(
        <div className={isOpen ? " grid grid-rows-4 text-center items-center bg-yellow-500   w-full  h-20 sticky  top-0 animated z-40"  : "hidden"} 
        onClick={toggle}>
           
             
        

                
                    <Link className="p-4" to="/">Accueil</Link>
                    <Link className="p-4" to="/Login">Inscription</Link>
                    <Link className="p-4" to="/signup">Connexion</Link>
                    <Link className="p-4" to="/contact">Contact</Link>
           
  
        </div>
    )



}

export default Dropdown;