// import React, {Component,useState, useEffect} from 'react';
import React from 'react';
import './App.css'
// import Accueil from "./Accueil"
import Login from "./Components/Login.jsx";
import Navbar from "./Components/Navbar";
import Accueil from "./pages";
import Contact from "./pages/contact.jsx";
import { Switch, Route} from "react-router-dom";
import Signup from "./pages/signup.jsx";



export default () => {
   
    return(
        <div className = "App">
       
            {/* {
           <Accueil/> */} 
           <Navbar />
        
           <Switch>
               <Route path="/" exact component = {Accueil} />
               <Route path="/signup" component = {Signup} />
               <Route path="/login" component = {Login} />
               <Route path="/contact" component = {Contact} />
           </Switch>
        

        

          

           

        </div>
    )
}