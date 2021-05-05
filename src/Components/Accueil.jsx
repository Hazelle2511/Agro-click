import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import imageOne from '../images/Agro-click.png';
import videoo from '../images/pexels-zen-chung-5527769.mp4';


class Accueil extends Component {


  render() {


    return(


<div>
<header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
  <div className="relative z-30 p-5 lg:text-7xl md:text-5xl sm:text-3xl text-2xl font-block mb-14 flex flex-col justify-center items-center mb-14">
    Le goût et la qualité des producteurs à porté de click !

    <Link  to="/" className="py-6 px-10 bg-yellow-500 rounded-full
        text-3xl hover:bg-green-400 transition duration-300 ease-in-out flex items-center animate-bounce mt-10">
        Commander

         <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
     </Link>
        
  </div>
  {/* w-auto */}
   <video width="100%" height="100%" autoPlay loop  className="absolute z-10  min-w-full min-h-full max-w-none opacity-80 ">
     <source src={videoo} alt="video" type="video/mp4" ></source>
   </video>

</header>

<div className="container my-12 mx-auto px-4 md:px-12">
<div className="flex flex-wrap -mx-1 lg:-mx-4">

<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
<article className="overflow-hidden rounded-lg shadow-lg">

      <Link to="/">
            <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random">
            </img>
      </Link>   
      <div className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
        <div className="no-underline hover:underline text-black" href="#">
            Provence-Alpes-Côte d’Azur
        </div> 
        </h1> 
        <p className="text-grey-darker text-sm">
            Avignon
        </p>
      </div>

      <div className="flex items-center justify-between leading-none p-2 md:p-4">
      <Link to="/" className="flex items-center no-underline hover:underline text-black" href="#">
        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
        <p className="ml-2 text-sm">Le fermier du sud</p>
      </Link>
      <Link to="/" className="no-underline text-grey-darker hover:text-red-dark" href="#">
        <div className="hidden">Like</div>
        <div className="fa fa-heart"></div>
      </Link>

      </div>
</article>
</div>

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article className="overflow-hidden rounded-lg shadow-lg">

                <Link href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <Link className="no-underline hover:underline text-black" href="#">
                            Alsace
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Strasbourg
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p className="ml-2 text-sm">
                            Le clos
                        </p>
                    </Link>
                    <Link className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </Link>
                </footer>

            </article>
            

        </div>
        

        
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article className="overflow-hidden rounded-lg shadow-lg">

                <Link href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <Link className="no-underline hover:underline text-black" href="#">
                            Auvergne
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Le-Puy-en-Vellais
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p className="ml-2 text-sm">
                            Richard Gers
                        </p>
                    </Link>
                    <Link className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </Link>
                </footer>

            </article>
            

        </div>
     

      
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

       
            <article className="overflow-hidden rounded-lg shadow-lg">

                <Link href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <Link className="no-underline hover:underline text-black" href="#">
                            Ile-de-france
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Bezons
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p className="ml-2 text-sm">
                            Le poulailler
                        </p>
                    </Link>
                    <Link className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </Link>
                </footer>

            </article>
            

        </div>
       
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

        
            <article className="overflow-hidden rounded-lg shadow-lg">

                <Link href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <Link className="no-underline hover:underline text-black" href="#">
                            Haute Normandie
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Louviers
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p className="ml-2 text-sm">
                            Riset du chemin
                        </p>
                    </Link>
                    <Link className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </Link>
                </footer>

            </article>
           

        </div>

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

        
            <article className="overflow-hidden rounded-lg shadow-lg">

                <Link href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <Link className="no-underline hover:underline text-black" href="#">
                            Franche Comté
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Sainte-Claude
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p className="ml-2 text-sm">
                            Lieu dit du chateau
                        </p>
                    </Link>
                    <Link className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </Link>
                </footer>

            </article>
           

        </div>
       

    </div>
</div>
</div>




  
      )

  
    
  }

}

export default Accueil;