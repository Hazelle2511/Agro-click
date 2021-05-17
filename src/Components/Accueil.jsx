import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import imageOne from '../images/Agro-click.png';
import videoo from '../images/pexels-zen-chung-5527769.mp4';
import agri from '../images/soil-386749_1920.jpg';
import Footer from '../Components/Footer';


class Accueil extends Component {


  render() {


    return(


<div>
  
<header className="relative flex items-center justify-center h-screen overflow-hidden">
  <div className="relative z-30 p-5 lg:text-7xl md:text-5xl sm:text-3xl text-2xl font-block mb-14 flex flex-col justify-center items-center mb-14 text-center">
    Le goût et la qualité des producteurs à porté de click !

    <Link  to="/" className="py-6 px-10 bg-yellow-500 rounded-full
        text-3xl hover:bg-green-400 transition duration-300 ease-in-out flex items-center animate-bounce mt-10">
        Commander

         <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
     </Link>
        
  </div>
  {/* w-auto */}
   <video width="100%" height="100%" autoPlay loop  className="absolute z-10    min-w-full min-h-full max-w-none opacity-80 ">
     <source src={videoo} alt="video" type="video/mp4" ></source>
   </video>

</header>

<main>
<div className="bg-green-600">
  <div className="max-w-6xl mx-auto px-8 py-16">
    <div className="relative">
      <div className="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
        <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
          <img className="absolute h-full w-full object-cover" src={agri} alt="" />
        </div>
        <div className="relative lg:w-7/12 bg-white">
          <svg className="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100"/>
        </svg>
          <div className="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900 font-medium">Agro-click</strong> séléctionne les meilleurs producteurs de la région. Nous garantissons des produits de qualité blablablablabla. Avec Agro-click, choisissez le producteur le plus prêt de chez vous, sélectionnez les produits qui vous font envies et faite vous livrer directement chez vous.  &mdash;
            </p>
            <p className="mt-6">
              <Link to="/"  className="font-medium text-yellow-500 hover:text-yellow-400">Pour en savoir plus &rarr;</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 lg:flex lg:items-center">
        <button className="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
        <svg className="h-full w-full text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/>
        </svg>
      </button>
      </div>
      <div className="absolute inset-y-0 right-0 lg:flex lg:items-center">
        <button className="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
        <svg className="h-full w-full text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"/>
        </svg>
      </button>
      </div>
    </div>
  </div>
</div>
</main>



<div className="container my-12 mx-auto px-4 md:px-12">
    <div className="tracking-widest uppercase mb-8 mt-8 text-5xl text-yellow-500">
    La sélection des producteurs
</div>
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
      
      

      </div>
</article>
</div>

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article className="overflow-hidden rounded-lg shadow-lg">

                <Link to="/href">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <Link to="/href" className="no-underline hover:underline text-black" href="#">
                            Alsace
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Strasbourg
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p className="ml-2 text-sm">
                            Le clos
                        </p>
                    </Link>
                    
                </footer>

            </article>
            

        </div>
        
        
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article className="overflow-hidden rounded-lg shadow-lg">

                <Link to="/href">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <Link to="/href" className="no-underline hover:underline text-black" href="#">
                            Auvergne
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Le-Puy-en-Vellais
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link to="/href" className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p className="ml-2 text-sm">
                            Richard Gers
                        </p>
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
                        <Link to="/href" className="no-underline hover:underline text-black" href="#">
                            Ile-de-france
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Bezons
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link to="/href" className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p className="ml-2 text-sm">
                            Le poulailler
                        </p>
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
                        <Link to="/href" className="no-underline hover:underline text-black" href="#">
                            Haute Normandie
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Louviers
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link to="/href" className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p className="ml-2 text-sm">
                            Riset du chemin
                        </p>
                    </Link>
                    
                </footer>

            </article>
           

        </div>

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

        
            <article className="overflow-hidden rounded-lg shadow-lg">

                <Link to="/href" href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <Link to="/href" className="no-underline hover:underline text-black" href="#">
                            Franche Comté
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Sainte-Claude
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link to="/href" className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p className="ml-2 text-sm">
                            Lieu dit du chateau
                        </p>
                    </Link>
                    
                </footer>

            </article>
           

        </div>
       

    </div>
</div>
<Footer />
</div>





  
      )

  
    
  }

}

export default Accueil;