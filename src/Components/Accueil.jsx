import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import imageOne from '../images/Agro-click.png';
import videoo from '../images/pexels-zen-chung-5527769.mp4';
import agri from '../images/soil-386749_1920.jpg';
import Footer from './Footer';
import GoogleMap from './GoogleMap';
import Agriculteur from './Agriculteur';

import accueil from '../../public/locales/components/accueil.json';

//For multilanguage translation
const locale = navigator.language.substr(0, 2)
const lang = Object.keys(accueil).includes(locale) ? locale : 'fr' 
//




class Accueil extends Component {

  render() {
    return(


                <div className="overflow-hidden">
                
                    <header className="relative flex items-center justify-center h-screen w-screen overflow-hidden sm:h-auto sm:w-auto">
                        <div className="relative z-20 p-5 lg:text-7xl md:text-5xl sm:text-5xl sm:mt-28 text-2xl font-block mb-14 flex flex-col justify-center items-center mb-14 text-center ">
                            {accueil[lang].title}
                            <Link  to="/ShoppingCard" className="py-6 px-10 rounded-full
                                text-3xl bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-700  transition duration-300 ease-in-out flex items-center animate-bounce mt-10 text-white sm: mt-28">
                               {accueil[lang].btnOrder}
                                <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            </Link>      
                        </div>
                        {/* w-auto */}
                        {/* max-w-none opacity-80 sm:hidden */}
                        <video width="100%" height="100%" autoPlay loop  className="absolute z-10 min-w-full  min-h-full  max-w-none opacity-80 hidden md:block "> 
                            <source src={videoo} alt="video" type="video/mp4" ></source>   
                        </video>
                    </header>

                <main className="xl: mb-72 sm: mb-12">

                <div className="">
                <div className="max-w-6xl mx-auto px-8 py-16">
                    <div className="relative">
                    <div className="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
                        <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center ">
                        <img className="absolute h-full w-full object-cover" src={agri} alt="" />
                        </div>
                        <div className="relative lg:w-7/12 bg-white">
                        <svg className="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100"/>
                        </svg>
                        <div className="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                            <p>
                            <strong className="text-gray-900 font-medium">AGRO CLICK</strong>  {accueil[lang].description}  &mdash;
                            </p>
                            
                        </div>
                        </div>
                    </div>  
                    </div>
                </div>
                </div>
                </main>
                <Agriculteur/>
                <GoogleMap />
                </div>
 
            )  
        }

    }

export default Accueil;