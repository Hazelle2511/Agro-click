// import React, {Component,useState, useEffect} from 'react';
import React from 'react';
import './App.css'
// import Accueil from "./Accueil"
import Navbar from "./Components/Navbar";
import Accueil from "./Components/Accueil";
// import Signup from "./pages/signup.jsx";
import {Switch, Route} from "react-router-dom";


export default () => {
   
    return(
        <div className = "App">
       
            {/* <div class="bg-red-100 text-red-500 p-5">Tailwind Trial</div>
           <Accueil/> */}
           <Navbar />
           <Accueil />

           {/* <Switch>
               <Route path="/signup" component = {Signup} />
           </Switch> */}

        

          

           

        </div>
    )
}