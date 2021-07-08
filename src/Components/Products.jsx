import React, {useEffect, useState} from 'react';
// import { CartReducer } from './CartReducer';
import {auth, db, getDocs,collection} from "./firebase/firebase";
import ProductList from './ProductList';


const PAGE_PRODUCTS = 'Produits';
const PAGE_CART = 'cart';

function Products() {
  const [state, setState] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage]= useState('Produits');




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


        const addToCart =  (Produits) => {
            console.log('add to cart')
            setCart([...cart, {...Produits}])
        }

        const navigateTo = (nextPage) => {
            console.log('nextpage')
            setPage(nextPage);
        }

        const removeFromCart= (productToRemove) => {
            setCart(
                cart.filter((product) => product !== productToRemove)
            )
        }

        // const renderProducts = () => (
        //     <> 

            

        //     {state?.Produits?.length > 0 && state.Produits.map((Produits,id) => {
        //         return (
            
            
        //     <div className="bg-white  " key={id}>
                
        //     {/* flex flex-wrap -mx-1 lg:-mx-4 */}
        //         <main className="my-8 ">
        //             <div className="container mx-auto px-6">
        //                 {/* <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3> */}
        //                 {/* <span className="mt-3 text-sm text-gray-500">200+ Products</span> */}
        //                 {/* grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 */}
        //                 <div className="flex-row mt-6">
        //                     <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        //                         {/* <div className="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"> */}
        //                         <div className="flex items-end justify-end h-56 w-full bg-cover">
        //                              <img src={Produits.image} alt="Products image" />
        //                             <button className="p-2 rounded-full bg-yellow-400 text-white mx-5 -mb-4 hover:bg-green-400 focus:outline-none focus:bg-blue-400" onClick={() => addToCart(Produits)}>
        //                                 <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        //                             </button>
        //                         </div>
        //                         <div className="px-5 py-3">
        //                             <h3 className="text-gray-700 uppercase">{Produits.name}</h3>
        //                             <span className="text-gray-500 mt-2">€ {Produits.prix}</span>
        //                         </div>
        //                     </div>
                          
                          
                            
        //                 </div>
                 
        //             </div>
        //         </main>
            
        //         </div>
        //       )
        //     })}
        //     </>
        // )

        const renderCart = () => (
            <> 


            {/* <h1>Cart</h1> */}
            {cart.map((Produits,id) => {
                return (
            
            
            <div className="bg-white  " key={id}>
                
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
                                    <button className="p-2 rounded-full bg-yellow-400 text-white mx-5 -mb-4 hover:bg-green-400 focus:outline-none focus:bg-blue-400" onClick={() => removeFromCart(Produits)}>
                                        {/* <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> */}
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
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
            </>
        
        )


    return (
        // container my-12 mx-auto px-4 md:px-12 xl: mb-72
        <div className="flex flex-wrap justify-center ">
<header className="flex flex-wrap justify-center ">
        <button onClick={() => navigateTo(PAGE_CART)}>Go to cart({cart.length})</button>
  
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
    </header>
    {page === PAGE_PRODUCTS && <ProductList addToCart={(Produits)=>addToCart(Produits)}/>}
    {page === PAGE_CART && renderCart()}
 </div>
    )
}

export default Products;
