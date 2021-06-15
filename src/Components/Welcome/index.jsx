import React, {useState, Fragment, useContext, useEffect} from 'react';
import { FirebaseContext } from '../firebase';
// import Logout from './Logout';
import AccessProfil from './accessProfil';
// import profilLogUser from './profilLogUser';


const Welcome = props => {

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
        })

        if (!!userSession) {

        firebase.user(userSession.uid)
        .get()
        .then(doc => {
        if (doc && doc.exists){
            const myData = doc.data(); 
            setUserData(myData)
        }
        })
        .catch(error => {
            console.log(error);
        })}
       
        return () => {
            listener()
        };
    }, [userSession])

   return userSession === null ? (
        <Fragment>
        <div className="loader"></div>
        <p>Patienter..</p>
        </Fragment>
    ) :  (
        <div>
            <div>
                {/* <profilLogUser userData={userData}/> */}
                {/* <Logout/> */}
                <AccessProfil/>
            </div>
        </div>
    )


}

export default Welcome