import React, {Component,useState, useEffect} from 'react';
import './App.css'
import logo from './logo.svg';

export default () => {
    // //create the count state
    // const [count, setCount] = useState(0);

    // //update the count (+1 every second)

    // useEffect(()=> {
    //     const timer = setTimeout(()=>setCount(count + 1), 1000);
    //     return () => clearTimeout(timer);
    // }, [count, setCount]);

    //Return the App Component
    return(
        <div className = "App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hello HRM Refresh, Page has been open for <code>{count}</code> times
                </p>

            </header> */}

           <div class="bg-red-100 text-red-500 p-5">Tailwind Trial</div>

        </div>
    )
}