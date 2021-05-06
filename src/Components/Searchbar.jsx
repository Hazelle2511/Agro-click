import React from 'react';


function Searchbar() {
    return(
        
        <div className="p-8">
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Rechercher"></input>
          
          <div className="p-4">
            <button className="bg-yellow-500 text-white rounded-full p-2 hover:bg-yellow-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            
            </button>
            </div>
          </div>
        </div>
      

  )
}

export default Searchbar;