import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import imageOne from '../images/Agro-click.png';
import videoo from '../images/pexels-zen-chung-5527769.mp4';


class Accueil extends Component {


  render() {


    return(
      <div className="h-screen">
        <video width="100%" height="100%" autoPlay loop>
          <source src={videoo} alt="video" type="video/mp4"></source>
     </video>
     <div className="flex flex-col">
     <div className="bg-gray-400 text-yellow-500 w-auto h-auto bg-opacity-30 text-5xl font-bold">Le goût et la qualité des producteurs à porté de click !</div>

        <Link  to="/" className=" bg-yellow-500 py-6 px-10 rounded-full
        text-3xl hover:bg-green-400 transition duration-300 ease-in-out flex items-center animate-bounce">
        Commander

        <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        </Link></div>

        <div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div class="overflow-hidden rounded-lg shadow-lg">
      
      <Link to="">
      <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
      </img></Link>   
      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <div className="no-underline hover:underline text-black" href="#">
                        Provence-Alpes-Côte d’Azur
                        </div> </h1> <p className="text-grey-darker text-sm">
                        Avignon
                    </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img><p className="ml-2 text-sm">
                            Le fermier du sud
                        </p></Link>
                        <Link className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <div className="hidden">Like</div>
                        <div className="fa fa-heart"></div>
                    </Link></footer>
      </div>              
      </div>
      </div>
      </div>

      </div>

     
      )

  
    
  }

}

export default Accueil;