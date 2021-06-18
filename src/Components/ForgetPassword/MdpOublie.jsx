import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../firebase';
 

const ForgetPassword = (props) => {


    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);


    const handleSubmit =  e => {
        e.preventDefault();
        firebase.passwordReset(email)

        .then(() => {
            setError(null);
            setSuccess(`Consultez votre email ${email} pour changer le mot de passe`)
            setEmail("");

            setTimeout(() => {
                props.history.push('/login')
            }, 5000)

        })
        .catch(error => {
            setError(error);
            setEmail(""); 

        })

    }


   const disabled = email === "" ;
   console.log(email);

    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
        
      
      
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
              flex items-center justify-center">
      
          <div className="w-full h-100">

          
          {success && <span className="">{success}</span>}

          {error && <span className="">{error.message}</span>}

            <h1 className="text-xl md:text-2xl font-bold leading-tight -mt-8">MOT DE PASSE OUBLIÉ</h1>
      
            <form onSubmit={handleSubmit} className="mt-6" >
              <div>
                <label className="block text-gray-700">E-mail</label>
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="E-mail" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none" autoFocus autoComplete="true" required></input>
              </div>
      
      
             
      
               <button disabled={disabled} className="w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-6">Récupérer</button>
            </form>
          <p className="mt-8">Nouveau chez Agro-Click ? <Link className="text-yellow-500 hover:text-yellow-400 font-semibold" to="/signup" >Créez un compte.</Link>
              </p>
      </div>
          </div>
        
      
      </section>

    )
}


export default ForgetPassword