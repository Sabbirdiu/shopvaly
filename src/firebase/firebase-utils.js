import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJ52pLkUverEhKN0WFp_6DKyd0cX0NGOM",
    authDomain: "ecommerce-db-f32fe.firebaseapp.com",
    databaseURL: "https://ecommerce-db-f32fe.firebaseio.com",
    projectId: "ecommerce-db-f32fe",
    storageBucket: "ecommerce-db-f32fe.appspot.com",
    messagingSenderId: "810849739367",
    appId: "1:810849739367:web:128bfdf794c824572f2ac2",
    measurementId: "G-TT6K4F5Q6W"
  };


export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    }catch(error){
      console.log('error creating user', error.message)

    }
  }

  return userRef;
}  

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;