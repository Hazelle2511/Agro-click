import React, {useEffect, useState} from 'react';
import {auth, db, getDocs,collection} from "./firebase/firebase";
// import {useStateValue} from "./StateProvider";
import Products from "./Products";

function ProductList() {
  const [state, setState] = useState('');

//   const [{basket}, dispatch] = useStateValue();
//   console.log("this is the basket", basket)
//   const addToBasket = () => {
//       dispatch({
//           type: 'ADD_TO_BASKET',
//           item: {
//               id
//           }
//       })
//   }




useEffect(()=> {

  
  db.collection('Produits')
  .get()
         .then(snapshot => {
                console.log('Produits',snapshot);
                const Produits = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    Produits.push(data)
                });
                setState({Produits})          
              })
           .catch(error => console.log('Error', error))

         }, [])
    return (
        // container my-12 mx-auto px-4 md:px-12 xl: mb-72
        <div className="flex flex-wrap justify-center ">


{state?.Produits?.length > 0 && state.Produits.map(Produits => {
    
    return (
        <Products {...Produits}
     
        />
  )
})}
{/* <div>{Produits}</div> */}

 </div>
    )
}

export default ProductList;
