import React, {Component} from 'react';
import Firebase from "./firebase/firebase";
import {auth, db, getDocs,collection} from "./firebase/firebase";
import {Link} from 'react-router-dom';
import AgriProfilePublic from "./AgriProfilePublic";
// import AgriculteurDetails from './AgriculteurDetails';


import accueil from '../../public/locales/components/accueil.json';

//For multilanguage translation
const locale = navigator.language.substr(0, 2)
const lang = Object.keys(accueil).includes(locale) ? locale : 'fr' 

export default ({ location }) => {
    console.log('location stateless', location);
    return(
        <div className="container my-12 mx-auto px-4 md:px-12 xl: mb-72">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {!location.Agriculteurs ? <h1>Could not find Agriculteur infos</h1> :
             <AgriProfilePublic 
              // { ...location.Agriculteurs}
                key={location.Agriculteurs.id}
                FName={location.Agriculteurs.FName}
                LName={location.Agriculteurs.LName}
                Email= {location.Agriculteurs.emailAddress}
                name={location.Agriculteurs.Name}
                addresse={location.Agriculteurs.Addresse}
                image={location.Agriculteurs.ProfilePic}
                produits= {location.Agriculteurs.Produits}
                produits2= {location.Agriculteurs.Produits[1]}
                description={location.Agriculteurs.Description}
                  /> }
             </div>
        </div>
    )
  }






// class ProfileAgri extends Component {

//     //For the specific link
    
    
//     constructor() {
//         super()
//         this.state = {
//             Agriculteurs: null
//         }
//     }
    

//     //For images
//      componentDidMount() {
//          db.collection('Agriculteurs')
//          .get()
//          .then(snapshot => {
//                 console.log('Snapshot',snapshot);
//                 const Agriculteurs = []
//                 snapshot.forEach(doc => {
//                     const data = doc.data()
//                     Agriculteurs.push(data)
//                 });

//                 for (const [k, v] of Object.entries(snapshot)) {
//                     console.log(k,v)
//                 }
                
//                if(Array.isArray(snapshot) && snapshot.length > 0) {
//                    console.log('Tableau', snapshot)
//                } else {
//                    console.warn('Pas Tableau', Array.from(snapshot))
//                }
//                    this.setState({Agriculteurs})          
//             })
//          .catch(error => console.log('Errorr', error))

            
            
//     }   

//     render() {

//         // const agriArray =  this.state?.Agriculteurs?.length > 0 && this.state.Agriculteurs.map((ProfileAgri,i) => {
//         //     return(
//         //     <User1Profile
//         //     key = {ProfileAgri.id}
//         //     name = {ProfileAgri.Name} />
//         //     )
//         // })

//         // console.log('Array', agriArray)
        
//         return(
            
            
//                 <div className="container my-12 mx-auto px-4 md:px-12 xl: mb-72">
                     
//                     <div className="flex flex-wrap -mx-1 lg:-mx-4">                                             
//                         {/* {this.state?.Agriculteurs?.length > 0 && this.state.Agriculteurs.map(Agriculteurs => { */}
    
//                             {this.state?.Agriculteurs?.length > 0 && this.state.Agriculteurs.map((Agriculteurs,id) => {
//                                 <div key={Agriculteurs.id}/>        
//                        return(
                                
                           
                                   
//                                          <AgriProfilePublic
                                      
//                                       key={Agriculteurs.id}
//                                       id={Agriculteurs.id}
//                                       FName={Agriculteurs.FName}
//                                       LName={Agriculteurs.LName}
//                                       Email= {Agriculteurs.emailAddress}
//                                       name={Agriculteurs.Name} 
//                                       addresse={Agriculteurs.Addresse}
//                                       image={Agriculteurs.ProfilePic}
//                                       produits= {Agriculteurs.Produits}
//                                       description= {Agriculteurs.Description}
                                      
//                                         />

                                       

                                   
                                    
//                                 )

//                                 return(
//                                     <div>
//                                         <h2>{this.props.match.params.id}</h2>
//                                     </div>
//                                 )
//                               })}
//                      </div>  
                  
                   
//                 </div>
            
//         )
//     }

// }

// export default ProfileAgri;