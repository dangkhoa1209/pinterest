import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
// import axios from 'axios';
// import Cookies from 'universal-cookie';

const firebaseConfig = {
    apiKey: "AIzaSyDjQzlmeu7L3ymngxIxNT_fjNLgKKRC4PQ",
    authDomain: "pinterest-96416.firebaseapp.com",
    projectId: "pinterest-96416",
    storageBucket: "pinterest-96416.appspot.com",
    messagingSenderId: "488703458159",
    appId: "1:488703458159:web:b933165723171674f1469a",
    measurementId: "G-NFC1T3D0ZW"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("email");


// const facebookProvider = new FacebookAuthProvider();



// async function setCookie(data) {
//     const credentials = data;

//     axios.post("./api/auth/set-info-user-login", credentials);

// }

// Google login
// export const signInWithGoogle = () => {
//     const navigate = useNavigate();
//     signInWithPopup(auth, googleProvider).
//         then((result) => {
//             if (result != null) {
//                 console.log("info-gg", result);
//                 console.log("accessToken", result.user.accessToken);

//                 console.log()

//                 // var data = {
//                 //     "name": result.user.displayName,
//                 //     "avatar": result.user.photoURL,
//                 //     "username": (result.user.displayName.split(' ')[result.user.displayName.split(' ').length - 1] + result.user.displayName.split(' ')[0]).toLowerCase(),
//                 //     "identity": result.user.uid.toString(),
//                 //     "account_type": 3,
//                 //     "email": result.user.providerData[0].email,
//                 //     "phone_number": result.user.providerData[0].phoneNumber != null ? result.user.providerData[0].phoneNumber : '',
//                 //     "birthday": "0000-00-00",
//                 // }

                

//                 addDoc(collection(db, "users"), {
//                     "name": result.user.displayName,
//                     "avatar": result.user.photoURL,
//                     "username": (result.user.displayName.split(' ')[result.user.displayName.split(' ').length - 1] + result.user.displayName.split(' ')[0]).toLowerCase(),
//                     "identity": result.user.uid.toString(),
//                     "account_type": 3,
//                     "email": result.user.providerData[0].email,
//                     "phone_number": result.user.providerData[0].phoneNumber != null ? result.user.providerData[0].phoneNumber : '',
//                     "birthday": "0000-00-00",
//                 })
//                     .then((data) => {console.log(`Document written with ID: , ${data.id}`)})
//                     .catch((e) => {console.log(e)});
                    
//                 navigate("/");

 
//             }
//         }).catch((error) => {
//             console.log(error)
//         })
// }

