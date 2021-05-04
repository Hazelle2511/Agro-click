import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/Agro-click.png';

function Navbar() {

    return(
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono">
            <Link to ="/"><img src={Logo} alt="carrot" className="h-16"/></Link>
            <div className="px-4 cursor-pointer md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
       

            <div className="pr-8 md:block">
                <Link className="p-4" to="/">Accueil</Link>
                <Link className="p-4" to="/Login">Se connecter</Link>
                <Link className="p-4" to="/contact">Contact</Link>

            </div>
        </nav>
    )


}

export default Navbar;