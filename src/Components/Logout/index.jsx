import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';

const Logout = () => {

const firebase = useContext(FirebaseContext);

    const [checked, setChecked] = useState(false);

    console.log(checked)

    useEffect(() => {
        if(checked) {
            console.log('deconnexion');
            firebase.signoutUser();

            // signoutUser
        }
    }, [checked, firebase]);

    const handleChange = event =>
    { setChecked(event.target.checked);
    }
    
    return (
<div className="logoutContainer">
    <label className="switch">
        <input onChange={handleChange}
        type ="checkbox"
        checked = {checked} />
        <span className="slider round"></span>
    </label>
</div>

    )
}

export default Logout