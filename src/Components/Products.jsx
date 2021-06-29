import React, {useEffect, useState} from 'react';
import {auth, db, getDocs,collection} from "./firebase/firebase";

function Products() {
  const [state, setState] = useState('');




useEffect(()=> {

  
  db.collection('Produits')
  .get()
         .then(snapshot => {
                console.log('Produits',snapshot);
                const Produits = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    Produits.push(data)
                });
                setState({Produits})          
              })
           .catch(error => console.log('Errorr', error))

         }, [])
    return (
        // container my-12 mx-auto px-4 md:px-12 xl: mb-72
        <div className="flex flex-wrap justify-center ">


{state?.Produits?.length > 0 && state.Produits.map(Produits => {
    return (

<div className="bg-white  ">
{/* flex flex-wrap -mx-1 lg:-mx-4 */}
    <main className="my-8 ">
        <div className="container mx-auto px-6">
            {/* <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3> */}
            {/* <span className="mt-3 text-sm text-gray-500">200+ Products</span> */}
            {/* grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 */}
            <div className="flex-row mt-6">
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                    {/* <div className="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"> */}
                    <div className="flex items-end justify-end h-56 w-full bg-cover">
                         <img src={Produits.image} alt="Products image" />
                        <button className="p-2 rounded-full bg-yellow-400 text-white mx-5 -mb-4 hover:bg-green-400 focus:outline-none focus:bg-blue-400">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
                    </div>
                    <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">{Produits.name}</h3>
                        <span className="text-gray-500 mt-2">€ {Produits.prix}</span>
                    </div>
                </div>
              
              
                
            </div>
     
        </div>
    </main>

    </div>
  )
})}

 </div>
    )
}

export default Products;
