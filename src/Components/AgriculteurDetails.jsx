

import React, {Component} from 'react';
import Firebase from "./firebase/firebase";
import {auth, db, getDocs,collection} from "./firebase/firebase";
import {Link} from 'react-router-dom';
import AgriProfilePublic from "./AgriProfilePublic";
// import AgriculteurDetails from './AgriculteurDetails';


import accueil from '../../public/locales/components/accueil.json';
import Agriculteur from './Agriculteur';

//For multilanguage translation
const locale = navigator.language.substr(0, 2)
const lang = Object.keys(accueil).includes(locale) ? locale : 'fr' 
//



class AgriculteurDetails extends Component {
    
    constructor() {
        super()
        this.state = {
            Agriculteurs: null
        }
    }

    //For images
     componentDidMount() {
         db.collection('Agriculteurs')
         .get()
         .then(snapshot => {
                // console.log('Snapshot',snapshot);
                const Agriculteurs = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    Agriculteurs.push(data)
                });

                for (const [k, v] of Object.entries(snapshot)) {
                    console.log(k,v)
                }
                
               if(Array.isArray(snapshot) && snapshot.length > 0) {
                   console.log('Tableau', snapshot)
               } else {
                   console.warn('Pas Tableau', Array.from(snapshot))
               }
                   this.setState({Agriculteurs})          
            })
         .catch(error => console.log('Errorr', error))

            
            
    }   

    render() {

    
        
        return(
            
            
                <div className="container my-12 mx-auto px-4 md:px-12 xl: mb-72">
                       <div className="tracking-widest uppercase mb-8 mt-8 text-5xl text-yellow-500">
                       {accueil[lang].labelProducteur}
                    
        
                      
                    </div>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">                                             
                        {this.state?.Agriculteurs?.length > 0 && this.state.Agriculteurs.map(Agriculteurs => {
                    //  <AgriProfilePublic
                    //  key = {Agriculteur.id}
                    //    name = {Agriculteur.Name} />
                                    
                       return(
                                
                           
                        <button 
                        className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left  bg-yellow-500 hover:bg-blue-800 md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-blue-800 focus:outline-none focus:shadow-outline">
                        <span>{Agriculteurs.Name}</span>
                       
                        {/* <img className="inline h-6 rounded-full"
                            src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"/> */}
                        {/* <svg fill="currentColor" viewBox="0 0 20 20"
                            className="inline w-4 h-4 transition-transform duration-200 transform">
                            <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg> */}
                    </button>
                                )
                              })}
                     </div>  
                     <AgriProfilePublic/> 
                     {/* {agriArray} */}
                     {/* <AgriculteurDetails/> */}
                </div>
            
        )
    }

}

export default AgriculteurDetails;