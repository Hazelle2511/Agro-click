import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/2.png';
import Panier from '../images/basket-690778_1920.jpg';
import {FirebaseContext} from '../Components/firebase';
import Footer from './Footer';
// import {firebase,provider} from '../../../services/firebase_setup';
// import firebase from '../Components/firebase/firebase.js';
// import 'firebase/auth';
// import 'firebase_setup'
// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";

// import GoogleLogin from './GoogleLogin';
import login from '../../public/locales/components/login.json';

//For multilanguage translation
const locale = navigator.language.substr(0, 2)
const lang = Object.keys(login).includes(locale) ? locale : 'fr' 
//


const Login = (props) => {

  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState('');

  useEffect(()=> {
    if (password.length > 5 && email !== '') {
      setBtn(true)
    } else if (btn) {
      setBtn(false)
    }
  }, [password, email])


 
  const handleSubmit = async e => { 
    console.log('inscriptionbutton')
    try { e.preventDefault();
      const user = await firebase.loginUser(email, password)
     
    // console.log('ok1')
      // console.log('ok loginuser2', user);
      setEmail('');
      setPassword('');
  props.history.push('/profilLogUser'); 
    } catch (error) {
      console.warn('error', error);
      setError(error);
      setEmail('');
      setPassword('');
      
  }} 
  // Version 1 LOGIN USER //

  //   firebase.loginUser(email, password)
  //   // console.log('ok1')
  //   .then(user => {
  //     console.log('ok loginuser2', user);
  //     setEmail('');
  //     setPassword('');
  // props.history.push('/welcome');
  //   })
  //   .catch(error => {
  //     console.warn('error', error);
  //     setError(error);
  //     setEmail('');
  //     setPassword('');
  //   })

  //////////////
    


  // connexion gmail



// const onSubmit = async e => {
//   try { e.preventDefault();
//     var provider =  await new firebase.auth.GoogleAuthProvider();
//     firebase.auth() 
//     console.log('OKGOOGLE')
//     .signInWithPopup(provider)
   
//     .then((result) => {
//       /* @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;
//   // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
      
//     })}

//   catch (error) {
//       console.log(error);
//     }; 
//   }



   
  
    return (
        <div className="">
        <section className="flex flex-col md:flex-row items-center">
        
          <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img src={Panier} alt="panier" className="w-full h-full object-cover"></img>
          </div>
        
          <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">
        
            <div className="w-full h-100">

            {/* p-4 */}
       

    {/* <span className="font-bold">  {login[lang].alert} </span><span> {login[lang].alertPassword} </span>	</div>} */}
            {/* -mt-8 my-4*/}
              <h1 className="text-xl md:text-2xl font-bold leading-tight -mt-14 my-4"> {login[lang].title}</h1>
        
              <form onSubmit={handleSubmit} className="mt-6" >
                     {error !== '' && <div className="alert flex flex-row mb-8 items-center bg-yellow-200 p-5 rounded border-b-2 border-yellow-300">
			<div className="alert-icon flex items-center bg-yellow-100 border-2 border-yellow-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
				<span className="text-yellow-500">
					<svg fill="currentColor"
						 viewBox="0 0 20 20"
						 class="h-6 w-6">
						<path fill-rule="evenodd"
							  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
							  clip-rule="evenodd"></path>
					</svg>
				</span>
			</div>
			<div className="alert-content ml-4">
				<div className="alert-title font-semibold text-lg text-yellow-800">
					Attention
				</div>
				<div className="alert-description text-sm text-yellow-600">
					- Email ou mot de passe incorrect
				</div>
			</div>
	</div> }<div>
                  <label className="block text-gray-700">{login[lang].labelEmail}</label>
                  <input onChange={e => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="E-mail" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none" autoFocus autoComplete required></input>
                </div>
        
                <div className="mt-4">
                  <label className="block text-gray-700">{login[lang].labelPassword}</label>
                  <input onChange={e => setPassword(e.target.value)} value={password} type="password" name="password" placeholder="Mot de passe" minLength="5" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500
                        focus:bg-white focus:outline-none" required></input>
                </div>
        
                <div className="text-right mt-2">
                  <Link to="/ForgetPassword" className="text-sm font-semibold text-gray-700 hover:text-yellow-400 focus:text-yellow-400">{login[lang].passwordMessage}</Link>
                </div>
        
                 {btn ? <button className="w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 text-white font-semibold rounded-lg
                      px-4 py-3 mt-6">Connexion</button> : <button className="cursor-not-allowed w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 text-white font-semibold rounded-lg
                      px-4 py-3 mt-6" disabled >{login[lang].btnConnect}</button> }
              </form>
           
              <hr className="my-6 border-gray-300 w-full"></hr>
        
              <button type="button" className="w-full block bg-white hover:bg-yellow-400 focus:bg-yellow-400 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-yellow-500"
              // onClick={onClickGoogle}
                    ><div className="flex items-center justify-center">
                    <span className="ml-4">
                    {login[lang].btnGoogle}
                    </span>
                    </div>
                  </button>

                  {/* <GoogleLogin/> */}
        <br/> 
              <p className="mt-8">{login[lang].description} <Link className="text-yellow-500 hover:text-yellow-400 font-semibold" to="/signup" > {login[lang].createAccount}</Link>
              </p>
              <div className="flex items-center justify-center">
              <img className="w-20 h-20 pt-6" src={Logo} alt="logo"></img>
             
             </div>
        </div>
            </div> 
          
           
        </section>

        </div>

    )



  }



export default Login;