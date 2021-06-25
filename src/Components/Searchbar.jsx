import { Result } from 'postcss';
import React, { useEffect, useState , Component} from 'react';
import {Link} from 'react-router-dom'
import nav from '../../public/locales/components/nav.json';
import Agriculteur from './Agriculteur';
import {auth, db, getDocs,collection, query, where} from "./firebase/firebase";



//For multilanguage translation
const locale = navigator.language.substr(0, 2)
const lang = Object.keys(nav).includes(locale) ? locale : 'fr' 
//


class Searchbar extends Component {
    
  constructor() {
      super()
      this.state = {
          Agriculteurs: null, 
          searchAgriculteur: '',
          

      }
      // this.handleInput = this.handleInput.bind(this)
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

         
                 this.setState({Agriculteurs})          
          })
       .catch(error => console.log('Errorr', error))

          
          
  }   

    handleInput = (e) =>  {
        // if(e.target.value.length > 2) {
        //   this.setState({searchAgriculteur: e.target.value})
        // } else if(e.target.value.length === 0) {
        //   console.log('handleInput', this.state.Agriculteurs)
        //   this.setState({Agriculteurs: this.state.Agriculteurs})
        // }

        // if(e.target.value.length > 2) {
        //   this.setState({searchAgriculteur: e.target.value})
        // } else if(e.target.value == "") {
        //   console.log('handleInput', this.state.Agriculteurs)
        //   this.setState({Agriculteurs: this.state.Agriculteurs})
        // }


        
          this.setState({searchAgriculteur: e.target.value})
      
      
    
    }

  render() {

  
      
      return(
          
      
         

              <div className="container my-12 mx-auto px-4 md:px-12 xl: mb-72">
                     <div className="tracking-widest uppercase mb-8 mt-8 text-5xl text-yellow-500">
                     {/* {accueil[lang].labelProducteur} */}
                  
      
                  
        <div className="p-2 ">
        <div className="bg-white flex items-center rounded-full shadow-md">
          <input  onChange = {this.handleInput} className="  rounded-l-full w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none " id="text" type="search" placeholder="Recherche.."  ></input>
          {/* onChange={e => setSearch(e.target.value)} */}
          <div className="p-2" name="result">
            {/* {datas.map((post) => {
              return <div name="result">{result}</div>;
            })} */}
            <button  name="result"className="bg-yellow-500 text-white rounded-full p-1 hover:bg-yellow-400 focus:outline-none w-6 h-6 flex items-center justify-center">                 </button>             
            </div>
          </div>
        </div>
                  </div>
                  <div className="flex flex-wrap -mx-1 lg:-mx-4">                                             
                   
                          {this.state?.Agriculteurs?.length > 0 && this.state.Agriculteurs.filter((Agriculteurs) => {
                            if (this.state.searchAgriculteur == "") {
                              console.log('Agri', Agriculteurs)
                              return Agriculteurs
                              
                            } else if (Agriculteurs.Name.toLowerCase().includes(this.state.searchAgriculteur.toLowerCase())) {
                              return Agriculteurs
                            }
                          }).map((Agriculteurs,id) => {
                              
              
                                  
                     return(
                              
                         
                                  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                    <div key={id}/>
                                      <article className="overflow-hidden rounded-lg shadow-lg">
                                      <Link to={{ pathname: "/Profile", Agriculteurs }} className="flex items-center no-underline hover:underline text-black">
                                          <img src={Agriculteurs.imageSrc} alt="Profile d'Agricultuers" />
                                      </Link>
                                              
                                          <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                                                  <h1 className="text-lg">
                                                      <div className="no-underline hover:underline text-black" href="#">
                                                          
                                                  
                                                      {/* <Link to={`/Profile/${Agriculteurs.id}`} className="flex items-center no-underline hover:underline text-black">
                                                              <h2>{Agriculteurs.Name}</h2>
                                                      </Link> */}

                                                      <Link to={{ pathname: "/Profile", Agriculteurs }} className="flex items-center no-underline hover:underline text-black">
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
               
                 
              </div>
          
      )
  }

}

// export default Agriculteur;

// function Searchbar(props) {
//   const [search, setSearch] = useState('');
//   const [state, setState] = useState('');
//   const [filteredAgriculteurs, setFilteredAgriculteurs] = useState([]);
//   const [datas, setDatas] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [Agriculteurs, setAgriculteurs] = useState('');
 

//   // const [datas, setDatas] = useState([]);  // data est déclaré mais jamais lu

//   // let AgriculteursRef = db.collection('Agriculteurs');
//   // // let Farmers = Promise.all([
//   // //   AgriculteursRef.doc('Chez meme et pepe').collection('Farmers').doc().set({
//   // //     name: 'Chez meme et pepe'
      
//   // // }),
//   // // ])
//   // // console.log('Farmers', Farmers)
//   // // let Farmers = Promise.all([
//   // //   AgriculteursRef.where("Name",  ">=", "L'ecurie")
//   // // ])

//   // let query = AgriculteursRef.where("Name",  "==", "Chez Meme et Pepe")
//   // .get()
//   // .then(snap => {
//   //   snap.forEach(doc => {
//   //     console.log('Doc', doc.data())
//   //   })
  
//   // })

//   // query.on('value', snap => {
//   //   console.log('Snap', snap)
//   // })

//   // console.log('Query', query)
//   // console.log('Farmers', Farmers)


//   //

 






//   //
//   // useEffect(()=> {

    
//   //   let searchString = "l'ecurie"
  
//   //   db.collection('Agriculteurs')
   
//   //   // .where("Name",  "==", "Chez Meme et Pepe" )
//   //   // .orderBy("Name", "asc")
//   //   // .startAt(Name.toLowerCase()).endAt(Name.toLowerCase() + "\uf8ff")
//   //   .orderBy('Name')
//   //   .startAt(searchString)
//   //   .endAt(searchString + `uf8ff`)
//   //   // .orderByChild("case_folded_name")
//   //   // .startAt(searchString)
//   //   .get()
//   //   .then(snap => {
//   //     snap.forEach(doc => {
//   //       console.log('Doc', doc.data())
//   //     })
    
//   //   })
    
                
                
        
  
//   // }, [])

// //     const handleSearchTerm=(e) => {
// //     let value = e.target.value.toLowerCase();
// //     console.log(value)
// //     setSearchTerm(value)
// //   }


// useEffect(()=> {

  
//   db.collection('Agriculteurs')
//   .get()
//          .then(snapshot => {
//                 console.log('SearchbarSnapshot',snapshot);
//                 const Agriculteurs = []
//                 snapshot.forEach(doc => {
//                     const data = doc.data()
//                     Agriculteurs.push(data)
//                 });
//                 setState({Agriculteurs})          
//               })
//            .catch(error => console.log('Errorr', error))
  
              
              
      

// }, [])

// // useEffect(() => {
// //   setFilteredAgriculteurs(
// //     Agriculteurs.filter(Agriculteur => {
// //       return Agriculteur.name.toLowerCase().includes(search.toLowerCase())
// //     })
// //   )
// // }, [search])
//   // useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   // .then(response => response.json())
//   // .then(json => setDatas(json));
//   // },[]);

//   // console.log(datas);



//     return(
//       // w-1/4
//         <div className="p-2 ">
//         <div className="bg-white flex items-center rounded-full shadow-md">
//           <input onChange={props.handleInput} className="  rounded-l-full w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none " id="text" type="search" placeholder="Recherche.."  ></input>
//           {/* onChange={e => setSearch(e.target.value)} */}
//           <div className="p-2" name="result">
//             {/* {datas.map((post) => {
//               return <div name="result">{result}</div>;
//             })} */}
//             <button name="result"className="bg-yellow-500 text-white rounded-full p-1 hover:bg-yellow-400 focus:outline-none w-6 h-6 flex items-center justify-center">
            
//             </button>
//             {/* {search} */}
//             {/* {Agriculteurs.filter((val)=> {
//               return val.Name.includes(searchTerm)
//             }) */}
//            { Agriculteurs.map((val, key) => {
//               return(
//                 <div className="search_result" key={val.id}>
//                     {val.Name}
//                 </div>
//               )
//             })}

//             </div>
//           </div>
//         </div>



      

//   )
// }

export default Searchbar;