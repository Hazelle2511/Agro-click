// import React, {Component,useState, useEffect} from 'react';
import React from 'react';
import './App.css'
// import Accueil from "./Accueil"
import Login from "./Components/Login.jsx";
import Navbar from "./Components/Navbar";
import Accueil from "./pages";
// import Signup from "./pages/signup.jsx";
import {Switch, Route} from "react-router-dom";
import Signup from "./pages/signup.jsx";
import Searchbar from './Components/Searchbar';



export default () => {
   
    return(
        <div className = "App">
       
            {/* {
           <Accueil/> */} 
           <Navbar />
           {/* <Searchbar /> */}
          

           <Switch>
               <Route path="/" exact component = {Accueil} />
               <Route path="/signup" component = {Signup} />
               <Route path="/Login" component = {Login} />
           </Switch>

        

          

           

        </div>
    )
}