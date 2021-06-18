import React, {Component, useState} from 'react';
import Firebase from "./firebase/firebase";;
import {storage, getStorage, ref, getDownloadUrl} from "./firebase/firebase";




export default function ImageUploader() {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = e => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state changed",
            snapshot => {
                const progresss = Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
            error => {
                console.log(error)
            } ,
            ()=> {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // console.log('URL', url)
                        setUrl(url)
                    });
            }
        );
    };

    console.log("image: ", image)


    return(
        <div>
            <progress value={progress} max="100"/>
            <input type="file"  onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>
            <br />
            <img src={url || "http://via.placeholder.com/300"} alt="firebase-img"/>
        </div>
    )

}



// export default function ImageUploader() {

     
       
//     const onChange = (e) => {
//         const file = e.target.files[0];
//         const storageRef = Firebase.storage().ref();
//         console.log("StorageRef",storageRef)
//         const fileRef = storageRef.child(file.name);
//         fileRef.put(file).then(() => {
//             console.log("Uploaded file", file.name)
//         })

//     };

//     const onSubmit = (e) => {
//         e.preventDefault()
//     }
//     return(
//         <>
//         <form>
//             <input type="file" onChange={onChange}/>
//             <input type="text" name="ville" placeholder="VILLE"/>
//             <button>Submit</button>
//         </form>
//         <ul>
//             <li>----</li>
//         </ul>
//         </>
//     )
// }