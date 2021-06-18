import React from 'react';
import {Link} from 'react-router-dom';
import { Transition } from '@tailwindui/react';
import Logo from '../images/Agro-click.png';

const Dropdown = ({isOpen, toggle}) => {
    // grid grid-rows-4 text-center items-center bg-yellow-500
    // w-full text-gray-700 bg-white h-16 fixed sticky  top-0 animated z-40 h-20 w-full h-auto
    return(

        <div>
        <div className={isOpen ? "px-2 bg-yellow rounded-md shadow dark-mode:bg-gray-800 text-center text-xl" : "hidden"} 
        onClick={toggle}>
        <Transition show={isOpen}
        enter="transition ease-out duration-100" 
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100" 
        leave="transition ease-in duration-75" 
        leaveFrom="transform opacity-100 scale-100" 
        leaveTo="transform opacity-0 scale-95" 
        className=" fixed z-0 right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
         
          <Link className="p-4 block font-semiblod hover:bg-gray-200" to="/">Accueil</Link>
                    <Link className="p-4 block font-semiblod hover:bg-gray-200 " to="/Login">Inscription</Link>
                    <Link className="p-4 block font-semiblod hover:bg-gray-200" to="/contact">Connexion</Link>
                    <Link className="p-4 block font-semiblod hover:bg-gray-200" to="/signup">Contact</Link>
            
            </Transition>
          </div>
          </div>
        
        /* <div className={isOpen ? "grid grid-rows-4 text-center items-center h-screen w-screen -mt-16 text-2xl bg-yellow-500  block  sticky top-0 animated z-40  flex-1 overflow-y-scroll"  : "hidden"} 
        onClick={toggle}>     
                    <Link className="mt-20 p-4 block font-semiblod hover:bg-gray-200" to="/">Accueil</Link>
                    <Link className="p-4 block font-semiblod hover:bg-gray-200 " to="/Login">Inscription</Link>
                    <Link className="p-4 block font-semiblod hover:bg-gray-200" to="/contact">Connexion</Link>
                    <Link className="p-4 block font-semiblod hover:bg-gray-200" to="/signup">Contact</Link>
        </div> */
    )



}

export default Dropdown;