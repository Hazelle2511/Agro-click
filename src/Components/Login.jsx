import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/2.png';
import Panier from '../images/basket-690778_1920.jpg';
import {FirebaseContext} from '../Components/firebase';

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


  


  const handleSubmit = e =>{
    e.preventDefault();
    
   

    firebase.loginUser(email, password)
    .then(user => {
      setEmail('');
      setPassword('');
props.history.push('/');
    })
    .catch(error => {
      setError(error);
      setEmail('');
      setPassword('');
    })
  }

/***** */
  const onClickGoogle = () => {
    // 
    
    try {
      console.log('firebase',  firebase)

      var provider = new firebase.auth.GoogleAuthProvider();
   
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
  
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
    })
        .catch((error) => {
        console.log(error)
    });
      
    } catch (error) {
      console.log(error)
    }
   

    //



 }

 /**** */



  
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
            {error !== '' && <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-0" role="alert"><span className="font-bold">  {login[lang].alert} </span><span> {login[lang].alertPassword} </span></div>}
            {/* -mt-8 my-4*/}
              <h1 className="text-xl md:text-2xl font-bold leading-tight -mt-14 my-4"> {login[lang].title}</h1>
        
              <form onSubmit={handleSubmit} className="mt-6" >
                <div>
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
              onClick={onClickGoogle}>
                    <div className="flex items-center justify-center">
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