import { Result } from 'postcss';
import React, { useEffect, useState } from 'react';

import nav from '../../public/locales/components/nav.json';

//For multilanguage translation
const locale = navigator.language.substr(0, 2)
const lang = Object.keys(nav).includes(locale) ? locale : 'fr' 
//


function Searchbar() {


  // const [datas, setDatas] = useState([]);  // data est déclaré mais jamais lu


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
          <input className="  rounded-l-full w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none " id="search" type="text" placeholder="Recherche.."></input>
          
          <div className="p-2" name="result">
            {/* {datas.map((post) => {
              return <div name="result">{result}</div>;
            })} */}
            <button name="result"className="bg-yellow-500 text-white rounded-full p-1 hover:bg-yellow-400 focus:outline-none w-6 h-6 flex items-center justify-center">
            
            </button>
            </div>
          </div>
        </div>



      

  )
}

export default Searchbar;