import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/Agro-click.png';

const Dropdown = ({isOpen, toggle}) => {


    return(
        <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-yellow-500"  : "hidden"} 
        onClick={toggle}>
           
             
        

                
                    <Link className="p-4" to="/">Accueil</Link>
                    <Link className="p-4" to="/Login">Se connecter</Link>
                    <Link className="p-4" to="/contact">Contact</Link>
                    <Link className="p-4" to="/signup">Sign up</Link>

           
  
        </div>
    )



}

export default Dropdown;