import React, {Component} from 'react';
import Firebase from "./firebase/firebase";
import {auth, db, getDocs,collection} from "./firebase/firebase";
import {Link} from 'react-router-dom';
import User1Profile from "./User1Profile";


class Agriculteur extends Component {
    
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
                console.log('Snapshot',snapshot);
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

        const agriArray =  this.state?.Agriculteurs?.length > 0 && this.state.Agriculteurs.map((Agriculteur,i) => {
            return(
            <User1Profile
            key = {i}
            name = {Agriculteur.Name} />
            )
        })

        // console.log('Array', agriArray)
        
        return(
            
            
                <div className="container my-12 mx-auto px-4 md:px-12 xl: mb-72">
                       <div className="tracking-widest uppercase mb-8 mt-8 text-5xl text-yellow-500">
                        La sélection des producteurs
                        
                      
                    </div>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">                                             
                        {this.state?.Agriculteurs?.length > 0 && this.state.Agriculteurs.map(Agriculteurs => {
                     
                       return(
                           
                                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                        <article className="overflow-hidden rounded-lg shadow-lg">
                                            <img src={Agriculteurs.imageSrc} alt="Profile d'Agricultuers" />
                                                
                                            <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                                                    <h1 className="text-lg">
                                                        <div className="no-underline hover:underline text-black" href="#">
                                                            
                                                        <Link to="/Profile" className="flex items-center no-underline hover:underline text-black">
                                                                <h2>{Agriculteurs.Name}</h2>
                                                        </Link>  
                                                        </div> 
                                                    </h1> 
                                                    <div className="text-grey-darker text-sm">
                                                            <h2>{Agriculteurs.ville}</h2>
                                                    </div>
      
                                            </div>
                                         </article>
                                    </div>
                                )
                              })}
                     </div>  
                     {/* <User1Profile/>  */}
                     {/* {agriArray} */}
                </div>
            
        )
    }

}

export default Agriculteur;