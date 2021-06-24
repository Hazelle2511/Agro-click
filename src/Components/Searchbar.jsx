import { Result } from 'postcss';
import React, { useEffect, useState } from 'react';

import nav from '../../public/locales/components/nav.json';
import {auth, db, getDocs,collection, query, where} from "./firebase/firebase";



//For multilanguage translation
const locale = navigator.language.substr(0, 2)
const lang = Object.keys(nav).includes(locale) ? locale : 'fr' 
//


function Searchbar() {
  const [search, setSearch] = useState('');
  const [state, setState] = useState('');
  const [filteredAgriculteurs, setFilteredAgriculteurs] = useState([]);
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [Agriculteurs, setAgriculteurs] = useState('');
 

  // const [datas, setDatas] = useState([]);  // data est déclaré mais jamais lu

  // let AgriculteursRef = db.collection('Agriculteurs');
  // // let Farmers = Promise.all([
  // //   AgriculteursRef.doc('Chez meme et pepe').collection('Farmers').doc().set({
  // //     name: 'Chez meme et pepe'
      
  // // }),
  // // ])
  // // console.log('Farmers', Farmers)
  // // let Farmers = Promise.all([
  // //   AgriculteursRef.where("Name",  ">=", "L'ecurie")
  // // ])

  // let query = AgriculteursRef.where("Name",  "==", "Chez Meme et Pepe")
  // .get()
  // .then(snap => {
  //   snap.forEach(doc => {
  //     console.log('Doc', doc.data())
  //   })
  
  // })

  // query.on('value', snap => {
  //   console.log('Snap', snap)
  // })

  // console.log('Query', query)
  // console.log('Farmers', Farmers)


  //

 






  //
  useEffect(()=> {

    
    let searchString = "l'ecurie"
  
    db.collection('Agriculteurs')
   
    // .where("Name",  "==", "Chez Meme et Pepe" )
    // .orderBy("Name", "asc")
    // .startAt(Name.toLowerCase()).endAt(Name.toLowerCase() + "\uf8ff")
    .orderBy('Name')
    .startAt(searchString)
    .endAt(searchString + `uf8ff`)
    // .orderByChild("case_folded_name")
    // .startAt(searchString)
    .get()
    .then(snap => {
      snap.forEach(doc => {
        console.log('Doc', doc.data())
      })
    
    })
    
                
                
        
  
  }, [])

    const handleSearchTerm=(e) => {
    let value = e.target.value.toLowerCase();
    console.log(value)
    setSearchTerm(value)
  }


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

// useEffect(() => {
//   setFilteredAgriculteurs(
//     Agriculteurs.filter(Agriculteur => {
//       return Agriculteur.name.toLowerCase().includes(search.toLowerCase())
//     })
//   )
// }, [search])
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => setDatas(json));
  // },[]);

  // console.log(datas);



    return(
      // w-1/4
        <div className="p-2 ">
        <div className="bg-white flex items-center rounded-full shadow-md">
          <input className="  rounded-l-full w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none " id="text" type="search" placeholder="Recherche.." onChange={handleSearchTerm} ></input>
          {/* onChange={e => setSearch(e.target.value)} */}
          <div className="p-2" name="result">
            {/* {datas.map((post) => {
              return <div name="result">{result}</div>;
            })} */}
            <button name="result"className="bg-yellow-500 text-white rounded-full p-1 hover:bg-yellow-400 focus:outline-none w-6 h-6 flex items-center justify-center">
            
            </button>
            {/* {search} */}
            {datas.filter((val)=> {
              return val.Name.includes(searchTerm)
            })
            .map((val) => {
              return(
                <div className="search_result" key={val.id}>
                    {val.Name}
                </div>
              )
            })}

            </div>
          </div>
        </div>



      

  )
}

export default Searchbar;