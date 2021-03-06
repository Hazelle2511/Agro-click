import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function ShoppingCard(){
    return(
      
      <div className="">
        <div className="">
          <div className=" shadow-md my-10">
            <div className=" flex flex-wrap lg:flex-row 2xl:flex-row xl:flex-row   overflow-hidden w-full bg-white px-10 py-10">
              <div className="flex flex-row">
              <div className="w-1/3 px-8 py-10 ">
              <div className="flex border-b pb-8">
                <h1 className="font-semibold md:text-2xl sm:text-xs">Panier</h1>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/5">Détails</h3>
              </div>
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20 hidden md:block">
                    <img className="h-24 " src="" alt=""/>
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">TOMATE</span>
                    <span className="text-yellow-500 text-xs">Coeur de boeuf</span>
                    <Link to ="#" tohref="#" className="font-semibold hover:text-yellow-500 text-gray-500 text-xs">Retirer</Link>
                  </div>
                </div>
                
              </div>
      
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20 hidden md:block">
                    <img className="h-24" src="https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw" alt=""/>
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">SALADE</span>
                    <span className="text-yellow-500 text-xs">Laitue</span>
                    <a href="#" className="font-semibold hover:text-yello-500 text-gray-500 text-xs">Retirer</a>
                  </div>
                </div>
                </div>
                
      
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20 hidden md:block">
                    <img className="h-24" src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v" alt=""/>
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">OEUFS</span>
                    <span className="text-yellow-500 text-xs">Élevé en plein air</span>
                    <Link to="#" href="#" className="font-semibold hover:text-yellow-500 text-gray-500 text-xs">Retirer</Link>
                  </div>
                </div>
            
              </div>
              </div>






              <div className="w-3/4 px-8 py-10">
              <h1 className="font-semibold md:text-2xl sm:text-xs border-b pb-8">3 articles</h1>
              <div className="flex justify-between flex-grow mt-10 mb-5">
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantité</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center hidden md:block">Prix</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
              </div>

              <div className="flex justify-around hover:bg-gray-100 -mx-8 px-6 py-5 mb-16">
               
               <div className="flex justify-center items-center w-1/5">
                 <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                 </svg>
                 <input className="mx-2 border text-center w-8" type="text" value="1"/>
     
                 <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                   <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                 </svg>
               </div>
               <span className="text-center w-1/5 font-semibold text-sm hidden md:block">€8.00</span>
               <span className="text-center w-1/5 font-semibold text-sm ">€8.00</span>
             </div>
              <div className="flex justify-around hover:bg-gray-100 -mx-8 px-6 py-5 mb-16">
               
               <div className="flex justify-center items-center w-1/5">
                 <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                 </svg>
                 <input className="mx-2 border text-center w-8" type="text" value="1"/>
     
                 <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                   <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                 </svg>
               </div>
               <span className="text-center w-1/5 font-semibold text-sm hidden md:block">€2.00</span>
               <span className="text-center w-1/5 font-semibold text-sm">€2.00</span>
             </div>
              <div className="flex justify-around hover:bg-gray-100 -mx-8 px-6 py-5 mb-16">
               
                <div className="flex justify-center items-center w-1/5 mb-16">
                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                  </svg>
                  <input className="mx-2 border text-center w-8" type="text" value="1"/>
      
                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm hidden md:block">€3.00</span>
                <span className="text-center w-1/5 font-semibold text-sm">€3.00</span>
              </div>
            </div>
            </div>
            

            <div id="summary" className="w-2/3 px-8 py-10 ">
              <h1 className="font-semibold md:text-2xl sm:text-xs border-b pb-8 flex flex-wrap ">Ma commande</h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">3 articles</span>
                <span className="font-semibold text-sm">12€</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">Envoi</label>
                <select className="block p-2 text-yellow-600 w-full text-sm">
                  <option>Envoi standard - €3.99</option>
                </select>
              </div>
              <div className="py-10">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Code de réduction</label>
                <input type="text" id="promo" placeholder="Saisissez votre code" className="p-2 text-sm w-full"/>
              </div>
              <button className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 text-sm text-white uppercase">Appliquer</button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total</span>
                  <span>€15.99</span>
                </div>
                <button className="bg-yellow-500 font-semibold hover:bg-yellow-600 py-3 text-sm text-white uppercase w-full"></button>
              </div>
            </div>


              
            </div>
      <Link to="/" className="flex font-semibold text-yellow-600 text-sm mt-10">
            
                <svg className="fill-current mr-2 text-yellow-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                Continuer mon shopping
              </Link>
            
      
          </div>
         
        </div>
         {/* <Footer/> */}
        </div>
      

    )
}


export default ShoppingCard;