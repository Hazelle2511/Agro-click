import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';


const profilLogUser = (props) => {

     console.log(props);
    // constructor() {
    //     super()
    //     this.state = {
    //         User: null
    //     }
    // }

    // render() {
    return(

        <div className="bg-gray-100">
 <div className="w-full text-white bg-main-color">
        <div x-data="{ open: false }"
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="p-4 flex flex-row items-center justify-between">
                <a href="#"
                    className="text-lg font-semibold tracking-widest uppercase text-green-700 rounded-lg focus:outline-none focus:shadow-outline">
                    Profil utilisateur</a>
                <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        <path x-show="!open" fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                        <path x-show="open" fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <nav
                className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                <div  className="relative" x-data="{ open: false }">
                    <button 
                        className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left  bg-yellow-500 hover:bg-green-700 md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-green-700 focus:outline-none focus:shadow-outline">
                        <span>Déconnexion</span>
                       
                        <img className="inline h-6 rounded-full"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"/>
                        
                    </button>
                    
                </div>
            </nav>
        </div>
    </div>
    {/* <!-- End of Navbar --> */}

    <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 md:mx-2">
                {/* <!-- Profile Card --> */}
                <div className="bg-white p-3 border-t-4 border-green-700">
                    <div className="image overflow-hidden">
                        <img className="h-auto w-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt=""/>
                            {/* <ImageUpload/> */}
                           
                           
                    </div>
                    {/* <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{props.userData.fName}</h1> */}
                    <ul
                        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                       
                        <li className="flex items-center py-3">
                            <span>Membre depuis</span>
                            {/* <span className="ml-auto">{props.name}</span> */}
                          
                        </li>
                        <Link className="flex items-center py-3">
                            <span>Mes commandes</span>
                            {/* <span className="ml-auto">{props.name}</span> */}
                          
                        </Link>
                        <Link className="flex items-center py-3">
                            <span>Paramètres</span>
                            {/* <span className="ml-auto">{props.name}</span> */}
                          
                        </Link>
                        
                    </ul>
                </div>
                {/* <!-- End of profile card --> */}
                <div className="my-4"></div>
              
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-full md:w-9/12 mx-2 h-64">
                {/* <!-- Profile tab --> */}
                {/* <!-- About Section --> */}
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-700">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">À propos</span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                             <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Prénom</div>
                                <div className="px-4 py-2">Lucie</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Nom</div>
                                <div className="px-4 py-2">Doe</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Portable</div>
                                <div className="px-4 py-2">06123456789</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Adresse</div>
                                <div className="px-4 py-2">1 rue des fleurs, 75001 Paris</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email</div>
                                <div className="px-4 py-2">
                                    {/* <a className="text-green-700" href="mailto:jane@example.com">{props.email}</a> */}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                 
                </div>
                {/* <!-- End of about section --> */}

                <div className="my-4"></div>

                {/* <!-- Experience and education --> */}
                <div className="bg-white p-3 shadow-sm rounded-sm">

                    <div className="grid grid-cols-2">
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-700">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">Favoris</span>
                            </div>
                          
                        </div>
                      
                    </div>
                    {/* <!-- End of Experience and education grid --> */}
                </div>
                {/* <!-- End of profile tab --> */}
            </div>
        </div>
    </div>
</div>

    )

}


export default profilLogUser