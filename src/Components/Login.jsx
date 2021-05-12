import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Logo from '../images/Agro-click.png';
import Panier from '../images/basket-690778_1920.jpg';

class Login extends Component {

  render() {
    return (
        
        <section className="flex flex-col md:flex-row h-screen items-center">
        
          <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img src={Panier} alt="panier" className="w-full h-full object-cover"></img>
          </div>
        
          <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">
        
            <div className="w-full h-100">

            
        
        
              <h1 className="text-xl md:text-2xl font-bold leading-tight -mt-8">Me connecter</h1>
        
              <form className="mt-6" action="#" method="POST">
                <div>
                  <label className="block text-gray-700">E-mail</label>
                  <input type="email" name="" id="" placeholder="E-mail" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none" autofocus autocomplete required></input>
                </div>
        
                <div className="mt-4">
                  <label className="block text-gray-700">Mot de passe</label>
                  <input type="password" name="" id="" placeholder="Mot de passe" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500
                        focus:bg-white focus:outline-none" required></input>
                </div>
        
                <div className="text-right mt-2">
                  <Link href="#" className="text-sm font-semibold text-gray-700 hover:text-yellow-400 focus:text-yellow-400">Mot de passe oublié ?</Link>
                </div>
        
                <button type="submit" className="w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 text-white font-semibold rounded-lg
                      px-4 py-3 mt-6">Connexion</button>
              </form>
        
              <hr className="my-6 border-gray-300 w-full"></hr>
        
              <button type="button" className="w-full block bg-white hover:bg-yellow-400 focus:bg-yellow-400 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-yellow-500">
                    <div className="flex items-center justify-center">
                    <span className="ml-4">
                    Se connecter avec Google</span>
                    </div>
                  </button>
        <br/> 
              <p className="mt-8">Besoin d'un compte ? <Link href="#" className="text-yellow-500 hover:text-yellow-400 font-semibold">Créer un compte</Link>
              </p>
              <div className="flex items-center justify-center">
              <img className="w-52 h-52" src={Logo} alt="logo"></img>
              </div>
        </div>
            </div>
          
        
        </section>

    )
  }

 
  
}

export default Login;