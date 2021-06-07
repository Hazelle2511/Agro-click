import React, {Component} from 'react';
import Firebase from "./firebase/firebase";
import {auth, db, getDocs,collection} from "./firebase/firebase";
import {Link} from 'react-router-dom';
// import ImageUpload from "./ImageUploader";

// import { collection, getDocs } from "firebase/firestore"; 


class Agriculteur extends Component {
    
    constructor() {
        super()
        // console.log('Agriculteur', this);
        
        // const F = new Firebase();
        // console.log('Firebase', F)
        // this.db = new Firebase()

     

        this.state = {
            Agriculteurs: null
        }
    }
    //For images

    
    

     componentDidMount() {
        // const querySnapshot = await getDocs(collection(db, "Agriculteurs"));
           
        //         querySnapshot.forEach((doc) => {
        //             console.log(`Doc, ${doc.id} => ${doc.data()}`);
        //     })
            
        
        // console.log('mounted');
        // console.log('Db',db)
         db.collection('Agriculteurs')
         .get()
         .then(snapshot => {
                console.log('Snapshot',snapshot);
                const Agriculteurs = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    // console.log('Data', data);
                    Agriculteurs.push(data)
                });

                for (const [k, v] of Object.entries(snapshot)) {
                    console.log(k,v)
                }
                //
               if(Array.isArray(snapshot) && snapshot.length > 0) {
                   console.log('Tableau', snapshot)
               } else {
                   console.warn('Pas Tableau', Array.from(snapshot))
               }
                //    this.setState({Agriculteurs: snapshot.forEach(doc => doc.data()) })
                   this.setState({Agriculteurs})

                //  this.setState({Agriculteurs: snapshot.map(doc => doc.data()) });
                 
            })
         .catch(error => console.log('Error', error))

            
            
    }   

    render() {
        return(
            <div>
                 <div className="tracking-widest uppercase mb-8 mt-8 text-5xl text-yellow-500">
                                                 La sélection des producteurs
                                                 
                                   
               
                {this.state?.Agriculteurs?.length > 0 && this.state.Agriculteurs.map(Agriculteurs => {
                    return(
                        <div>
                          
                            <div className="container my-12 mx-auto px-4 md:px-12 xl: mb-72">
                                    {/* <div className="tracking-widest uppercase mb-8 mt-8 text-5xl text-yellow-500">
                                                 La sélection des producteurs
                                    </div> */}
                                <div className="flex flex-wrap -mx-1 lg:-mx-4">

                                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                        <article className="overflow-hidden rounded-lg shadow-lg">

                                            {/* <Link to="/">
                                                  <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                                                  </img>
                                            </Link>    */}
                                            {/* <ImageUpload/> */}
                                            <img src={Agriculteurs.imageSrc} alt="" />
                                            
                                        <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                                                <h1 className="text-lg">
                                                     <div className="no-underline hover:underline text-black" href="#">
                                                        
                                                             <h2>{Agriculteurs.Name}</h2>
                                                    </div> 
                                                </h1> 
                                                 <div className="text-grey-darker text-sm">
                                                        <h2>{Agriculteurs.ville}</h2>
                                                 </div>
                                         </div>
                                         </article>
                                    </div>
                                </div>   
                            </div>
                               
                          
                        </div>
                        

                       
                    )
                })}
                </div>
            </div>
        )
    }

}

export default Agriculteur;