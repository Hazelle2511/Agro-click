import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import imageOne from '../images/Agro-click.png';


class Accueil extends Component {


  render() {


    return(
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <img src={imageOne} alt="logo"/>

        <Link className="bg-yellow-500 py-6 px-10 rounded-full
        text-3xl hover:bg-green-400 transition duration-300 ease-in-out flex items-center animate-bounce">
        Commande

        <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        </Link>
      </div>
    )
  }

}

export default Accueil;