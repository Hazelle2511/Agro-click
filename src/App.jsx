// import React, {Component,useState, useEffect} from 'react';
import React, {useState, useEffect} from 'react';
import './App.css'
import Dropdown from "./Components/Dropdown"
import Login from "./Components/Login.jsx";
import Navbar from "./Components/Navbar";
import Accueil from "./pages";
import Contact from './pages/contact.jsx';
import { Switch, Route} from "react-router-dom";
import Signup from "./pages/signup.jsx";
import Searchbar from './Components/Searchbar';
import Panier from './Components/ShoppingCard';
import GoogleMap from './Components/GoogleMap'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Logout from './Components/Logout/index';
import AccessProfil from './Components/Welcome/accessProfil.jsx';
import accessProfil from './Components/Welcome/accessProfil.jsx';
import Footer from './Components/Footer';
import ForgetPassword from './Components/ForgetPassword/MdpOublie';




export default () => {
    const [isOpen, setIsOpen] = useState(false) ;
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    useEffect(() => {
        const hideMenu = () => {
            window.innerWidth > 768 && isOpen ? setIsOpen(false): null;
            console.log('resize')
        }
    
    window.addEventListener('resize', hideMenu);

    return() => {
        window.removeEventListener('resize', hideMenu);
    }
})
    return(
        <>
       
            {/* {
           <Accueil/> */} 
           <Navbar toggle={toggle} />
           <Dropdown toggle={toggle} isOpen={isOpen}/>
          {/* <Searchbar /> */}
           <Switch>
               <Route path="/" exact component = {Accueil} />
               <Route path="/signup" component = {Signup} />
               <Route path="/login" component = {Login} />
               <Route path="/contact" component = {Contact} />
               <Route path="/ShoppingCard" component = {Panier} />
               <Route path="/Logout" component = {Logout} />
               <Route path="/accessProfil" component = {accessProfil} />
               <Route path="/ForgetPassword" component = {ForgetPassword} />

             

           </Switch>
          
         
          
           {/* <GoogleMap /> */}
        

        

          

           

        </>
    )
}