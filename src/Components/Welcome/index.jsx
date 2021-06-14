import React, {useState, Fragment, useContext, useEffect} from 'react';
import { FirebaseContext } from '../firebase';
import Logout from '../Logout';
import AccessProfil from '../Welcome';
// import profilLogUser from '../Welcome';


const Welcome = props => {

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
        })
       
        return () => {
            listener()
        };
    }, [])

   return userSession === null ? (
        <Fragment>
        <div className="loader"></div>
        <p>Patienter..</p>
        </Fragment>
    ) :  (
        <div>
            <div>
                {/* <profilLogUser/> */}
                <Logout/>
                <AccessProfil/>
            </div>
        </div>
    )


}

export default Welcome