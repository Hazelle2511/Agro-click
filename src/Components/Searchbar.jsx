import React from 'react';


function Searchbar() {
    return(
        
        <div className="p-2">
        <div className="bg-white flex items-center rounded-full shadow-sm">
          <input className="rounded-l-full w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none " id="search" type="text" placeholder="Rechercher"></input>
          
          <div className="p-2">
            <button className="bg-yellow-500 text-white rounded-full p-1 hover:bg-yellow-400 focus:outline-none w-6 h-6 flex items-center justify-center">
            
            </button>
            </div>
          </div>
        </div>
      

  )
}

export default Searchbar;