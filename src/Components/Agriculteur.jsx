import React, {Component} from 'react';
import Firebase from "./firebase/firebase";
import {auth, db} from "./firebase/firebase";


class Agriculteur extends Component {
    
    constructor() {
        super()
        console.log('Agriculteur', this);
        
        const F = new Firebase();
        console.log('Firebase', F)
        // this.db = new Firebase()

        // show() {
        //     console.log(F.db)
        // }
    }

    state = {
        agriculteur: null
    }

    componentDidMount() {
        console.log('mounted');
        db.collection('agriculteurs')
        .get()
            .then(snapshot => {
                console.log(snapshot);
            })
            .catch(error => console.log(error))

            console.log('error', Firebase.db)
            
    }   

    render() {
        return(
            <div>
                <h1>Agriculteurs</h1>
            </div>
        )
    }

}

export default Agriculteur;